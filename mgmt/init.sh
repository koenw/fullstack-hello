#!/usr/bin/env bash

mkdir /tmp

just initdb
just import craft_beers

sleep infinity
