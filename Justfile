NAME := "fullstack-hello"

DOCKER_IMAGE_PREFIX := "koenw/" + "{{NAME}}"
DOCKER_TAG := `git describe --tags 2>/dev/null || echo latest`
DOCKERFILES := "deploy/backend/Dockerfile"

set export

# Open a psql shell into the development database
psql:
    PGPASSWORD="$DB_PASSWORD" psql -h "${DB_HOST}" -U "${DB_NAME}" -p "$DB_PORT"

# Initialize local development database roles
initdb:
  #!/usr/bin/env bash
  export PGPASSWORD="$DB_PASSWORD"
  export PGHOST="$DB_HOST"
  export PGUSER="$DB_USER"
  export PGPORT=$DB_PORT""

  # This role will be used by postgrest to execute the queries
  psql -c "create role anon nologin" > /dev/null 2>&1
  psql -c "grant anon to \"$DB_USER\"" > /dev/null 2>&1

# Import the given dataset
import dataset: dotenv initdb
  #!/usr/bin/env bash
  export PGPASSWORD="$DB_PASSWORD"
  export PGHOST="$DB_HOST"
  export PGUSER="$DB_USER"
  export PGPORT=$DB_PORT""

  for f in datasets/{{ dataset }}/*.sql; do
    psql -f "$f"
  done

# Generate default development .env file
dotenv:
  #!/usr/bin/env bash
  dotenv_path={{ invocation_directory() + "/.env" }}
  test -f "${dotenv_path}" && exit
  cat <<EOF > "${dotenv_path}"
    # psql (scripts)
    NAME={{NAME}}
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME={{NAME}}
    DB_USER={{NAME}}
    DB_PASSWORD={{NAME}}

    # Postgres Server
    POSTGRES_USER={{NAME}}
    POSTGRES_PASSWORD={{NAME}}
    POSTGRES_DB={{NAME}}

    # backend (PostgREST)
    #PGRST_DB_URI=postgres://<username>:<password>@<host>/<database>
    PGRST_DB_URI=postgres://{{NAME}}:{{NAME}}@postgres/{{NAME}}
    PGRST_DB_SCHEMA=public
    PGRST_DB_ANON_ROLE=anon
  EOF
