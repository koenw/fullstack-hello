NAME := "fullstack-hello"

DOCKER_IMAGE_PREFIX := "koenw/" + "{{NAME}}"
DOCKER_TAG := `git describe --tags 2>/dev/null || echo latest`
DOCKERFILES := "deploy/backend/Dockerfile"

set export

# Start the local development database (in docker)
startdb: dotenv
  docker run --rm -e POSTGRES_USER={{NAME}} -e POSTGRES_PASSWORD={{NAME}} --net host --name {{NAME}} -v {{NAME}}_db:/var/lib/postgresql/data postgres:12-alpine

# Open a psql shell into the development database
psql:
    PGPASSWORD="$DB_PASSWORD" psql -h "${DB_HOST}" -U "${DB_NAME}" -p "$DB_PORT"

# Initialize local development database
initdb dataset: dotenv
  #!/usr/bin/env bash
  for f in datasets/{{ dataset }}/*.sql; do
    PGPASSWORD="$DB_PASSWORD" psql -h "${DB_HOST}" -U "${DB_NAME}" -p "$DB_PORT" -f "$f"
  done

# Generate default development .env file
dotenv:
  #!/usr/bin/env bash
  dotenv_path={{ invocation_directory() + "/.env" }}
  test -f "${dotenv_path}" && exit
  cat <<EOF > "${dotenv_path}"
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME={{NAME}}
    DB_USER={{NAME}}
    DB_PASSWORD={{NAME}}
  EOF
