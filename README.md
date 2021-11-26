# Fullstack-hello

[![build](https://github.com/koenw/fullstack-hello/actions/workflows/build.yml/badge.svg)](https://github.com/koenw/fullstack-hello/actions/workflows/build.yml)

Fullstack "hello, world!" using PostgreSQL🐘, a RESTful API powered by
[PostgREST](https://postgrest.org/en/v8.0/) and a frontend build with
React. Also starring the [craft beers
dataset](https://github.com/nickhould/craft-beers-dataset).

Available for your viewing pleasure at [hello-parity.koenw.dev](https://hello-parity.koenw.dev).

Live API docs [available here](https://api.hello-parity.koenw.dev/swagger/).

## Getting started

Run the whole stack locally in docker with `docker-compose up`, this makes the
frontend available at [http://localhost:8080](http://localhost:8080), the
backend at [http://localhost:3000](http://localhost:3000) and the swagger API
docs at [http://localhost:8088](http://localhost:8088).

## Development

Using [PostgREST](https://github.com/PostgREST/postgrest) as a backend comes
with some perks. Besides the beautiful RESTful API that comes with it, the
[OpenAPI](https://swagger.io/specification/) support leads to some even more
important benefits like [automatically generated
clients](https://openapi-generator.tech/) and [API
documentation](https://api.hello-parity.koenw.dev/swagger/).

### Dependencies

* [just](https://github.com/casey/just) is used as a command runner for project
  specific commands, both locally and in CI/CD;
* nodejs for npx/bootstrapping of [pnpm](https://pnpm.io/);
* [openapi-generator](https://openapi-generator.tech/) to generate or update
  the API client from the spec;
* docker to build, tag and push images;
* docker-compose to run everything locally;

Project specific commands, including CI/CD commands like building of docker
images, are kept in the `Justfile`.  Run `just -l` to get an overview of
available commands/tasks.

[Nix](https://nixos.org/) users can use `nix-shell` or the `./just` wrapper and
not worry about dependencies (which is also what the CI/CD pipeline does).

### Frontend

The frontend is a simple React app using
[react-table](https://github.com/tannerlinsley/react-table) and
[material-ui](https://github.com/mui-org/material-ui/) to make some pretty
tables out of an API.  Most of the frontend's API consuming code (in
`frontend/src/generated`) is generated with
[openapi-generator](https://openapi-generator.tech).

Use `just serve` to start a local auto-refreshing development server on
[http://localhost:1234](http://localhost:1234) that by default will talk to the
backend started with `docker-compose up`.

### Adding/Removing columns

Since our backend is entirely data agnostic and most of the client is
automatically generated, adding or removing columns is as simple as editing the
column definition in `frontend/src/app.tsx`.

If the columns do not yet exists in the database you will have to add them to a
migration and re-generate the client API code as described in [Adding
additional datasets](#adding-additional-datasets).

### Migrations

Because our backend does not do migrations they (and the initial import) are
instead handled by a separate very simple *mgmt* container; build from the
`mgmt` directory. Place your migrations in `datasets/<dataset>/init.sql`,
making sure to keep everything idempotent.

### Adding additional datasets

Because so much of the stack is data agnostic, it is actually quite easily
adapted to additional datasets:

* Create a directory for the new dataset in the `datasets` directory
* Place `.sql` files in it that will create and fill the tables. The SQL files
  are executed in alphabetical order. I'd suggest to either use one `init.sql`
  or multiple files prefixed by a number/date. Make sure to keep them
  idempotent.
* Start the [PostgREST](https://postgrest.org/en/v8.0/) backend (e.g.
  `docker-compose up`)
* Generate the frontend API client (`just generate-client
  http://localhost:3000/`)
* Add the API imports and column definitions to `frontend/src/app.tsx`

### Possible next steps

* Make UI aware of foreign key relations;
* Generate remaining dataset-specific UI code, leaving only configuration to
  determine the columns.
* Add search and/or filter functionality

## Deployment

You'll need Docker🐋 and a PostgreSQL🐘 database. Pre-build Docker images are
available, the `docker-compose.yml` file can serve as an example of how they
tie together. If you are aiming to run on kubernetes I suggest running the
*mgmt* container in the same pod as the
[PostgREST](https://postgrest.org/en/v8.0/) backend.

### Backend

`docker pull postgrest/postgrest`

#### Configuration

|Environmental Variable| Description | Example |
|---|---|---|
|`PGRST_DB_URI`       |[Standard URI](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING) to the database. | `postgres://user:password@host:5432/dbname`|
|`PGRST_DB_SCHEMA`    |PostgreSQL schema to connect to. |`public` |
|`PGRST_DB_ANON_ROLE` |PostgreSQL user used for anonymous queries. Make sure you update the migrations (that also create this user) if you change this. |`anon`|

### Frontend

`docker pull ghcr.io/koenw/fullstack-hello-frontend`

#### Configuration

No configuration needed. If the frontend is access through localhost it will
connect to `localhost:3000`, else it will connect to `https://api.<frontend
domain>`.

### Mgmt

`docker pull ghcr.io/koenw/fullstack-hello-mgmt`

#### Configuration

|Environmental Variable| Description | Example |
|---|---|---|
|`DB_HOST`      |PostgreSQL database hostname | `shd-postgres`|
|`DB_PORT`      |PostgreSQL database port |`5432` |
|`DB_USER`      |PostgreSQL database user |`fullstack-hello` |
|`DB_PASSWORD`  |PostgreSQL database password |`s3cr#t` |

### SwaggerUI

This component provides the live API documentation and is thus optional from a
user-functionality perspective.

`docker pull swaggerapi/swagger-ui`

#### Configuration

|Environmental Variable| Description | Example |
|---|---|---|
|`URL`          |URL to the OpenAPI spec      | `https://api.hello-parity.koenw.dev/`|
|`BASE_URL`     |Path to serve API docs under |`/swagger` |


## License

You're free to use, modify and distribute this software under the terms of the
MIT or Apache-2.0 license, whichever has your preference.
