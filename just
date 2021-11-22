#!/usr/bin/env nix-shell
#! nix-shell -i bash -p just postgresql openapi-generator-cli nodejs-16_x

exec just $*
