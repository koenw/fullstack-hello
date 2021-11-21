# Fullstack-hello

Fullstack "hello, world!" using the [craft beers
dataset](https://github.com/nickhould/craft-beers-dataset).

## Overview

Data is stored in PostgreSQL, served as a RESTful API by
[PostgREST](https://github.com/PostgREST/postgrest) that will be consumed by a
javascript frontend.

## Getting Started

This project uses the [just](https://github.com/casey/just) command runner to
run project specific commands. See the excellent upstream docs on how to
install *just*. [Nix](https://nixos.org/) users can use the `./just` wrapper
and have all dependencies taken care of (you could also use `nix-shell`).

Run `just -l` to get an overview of available commands/tasks.

### Running locally

You'll need [just](https://github.com/casey/just), docker and docker-compose to
follow along.

* `docker-compose up` to start the containers;
* `just initdb` to create the initial database roles;
* `just import craft_beers` to import the craft beers dataset;

You can now visit http://localhost:3000/ for the openapi specification.

## Deployment
