#!/usr/bin/env nix-shell
#! nix-shell -i bash -p just postgresql

exec just $*
