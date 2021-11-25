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
backend available at [http://localhost:3000](http://localhost:3000) and the
frontend at [http://localhost:8080](http://localhost:8080).

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

Run `npx pnpm run serve` from the `frontend` directory to start a local
auto-refreshing development server.

#### Generating or updating the API client

Run `just generate-client <backend url>` to generate or update the API client.

### Adding/Removing columns

Since our backend is entirely data agnostic and most of the client is
automatically generated, adding or removing columns is as simple as editing the
column definition in `frontend/src/app.tsx`. If the column does not yet exists
in the database you will also have to add it to the migrations.

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

## License

You're free to use, modify and distribute this software under the terms of the
MIT or Apache-2.0 license, whichever has your preference.
