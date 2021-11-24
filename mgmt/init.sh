#!/usr/bin/env bash

# Make sure psql has a temp dir
mkdir /tmp

# Move the dataset(s) to where they can be found
mkdir -p datasets
mv craft_beers datasets/

just initdb
just import craft_beers

sleep infinity
