#!/usr/bin/env bash

function wait_for_db() {
  echo -n "Waiting for postgres to become available..."
  while ! nc -z "$PGHOST" "${PGPORT:5432}"; do
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
