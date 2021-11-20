# Fullstack-hello

Fullstack "hello, world!" using the [craft beers
dataset](https://github.com/nickhould/craft-beers-dataset).

## Overview

Data is stored in PostgreSQL, served as a RESTful API by
[PostgREST](https://github.com/PostgREST/postgrest) that will be consumed by a
javascript frontend.

## Getting Started

This project uses the [just command runner](https://github.com/casey/just) to
run project specific commands. See the excellent upstream docs on how to
install *just* (nix users can opt to use the `./just` wrapper and have all
dependencies taken care of).

Run `just -l` to get an overview of available commands/tasks.

### Running locally

You'll need [just](https://github.com/casey/just), docker and docker-compose to
follow along.

* `docker-compose up` to start the containers;
* `just initdb` to create the initial database roles;
* `just import craft_beers` to import the craft beers dataset;

You can now visit http://localhost:8000/ for the openapi specification.

## Deployment
