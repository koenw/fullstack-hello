#!/usr/bin/env bash

DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"

function wait_for_db() {
  echo -n "Waiting for postgres to become available..."
  while ! nc -z "$DB_HOST" "$DB_PORT"; do
    echo -n "."
    sleep 1
  done
  echo " :)"
}

# Make sure psql has a temp dir
mkdir /tmp

# Move the dataset(s) to where they can be found
mkdir -p datasets
mv craft_beers datasets/

wait_for_db

just initdb
just import craft_beers

sleep infinity
