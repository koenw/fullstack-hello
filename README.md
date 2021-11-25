# Fullstack-hello

[![build](https://github.com/koenw/fullstack-hello/actions/workflows/build.yml/badge.svg)](https://github.com/koenw/fullstack-hello/actions/workflows/build.yml)

Fullstack "hello, world!" using PostgreSQL🐘, a RESTful API powered by
[PostgREST](https://github.com/PostgREST/postgrest) and a frontend build with
React. Also starring the [craft beers
dataset](https://github.com/nickhould/craft-beers-dataset).

Available for your viewing pleasure at [hello-parity.koenw.dev](https://hello-parity.koenw.dev).
API docs available [here](https://api.hello-parity.koenw.dev/swagger/).

## Running locally

Run the whole stack locally in docker with `docker-compose up`. This makes the
backend available at [http://localhost:3000](http://localhost:3000) and the
frontend at [http://localhost:8080](http://localhost:8080).

## Development

Using [PostgREST](https://github.com/PostgREST/postgrest) as a backend comes
with some perks. Besides the beautiful RESTful API that comes with it the
[OpenAPI](https://swagger.io/specification/) support leads to some even more
important benefits, like [automatically generated
clients](https://openapi-generator.tech/) and [API
documentation](https://api.hello-parity.koenw.dev/swagger/).

### Frontend

The frontend is a simple React app using
[react-table](https://github.com/tannerlinsley/react-table) and
[material-ui](https://github.com/mui-org/material-ui/) to make some pretty
tables out of an API.  Most of the frontend's API consuming code (in
`frontend/src/generated`) is generated with
[openapi-generator](https://openapi-generator.tech).

Run `npx pnpm run serve` from the *frontend* directory to start a local
auto-refreshing development server.

#### Generating or updating the API client

Run `just generate-client <backend url>` to generate or update the API client.

### Migrations

Because our backend does not do migrations they (and the initial import) are
instead handled by a separate very simple *mgmt* container. Place your
migrations in `datasets/<dataset>/init.sql`, making sure to keep everything
idempotent.

### Development environment

This project uses the [just](https://github.com/casey/just) command runner to
run project specific commands. See the excellent upstream docs on how to
install *just*. [Nix](https://nixos.org/) users can use the `./just` wrapper
and don't have to worry about dependencies.

Run `just -l` to get an overview of available commands/tasks.

#### Dependencies

Nix users can use `nix-shell` to get a development shell with all dependencies
available. Having said that, the list of development dependencies is quite manageable:

* [just](https://github.com/casey/just) as a command runner
* nodejs for npx
* openapi-generator if you need to generate or update the api client
* docker-compose to run everything locally
* docker to build, tag and push images
