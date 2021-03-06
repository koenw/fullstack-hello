{ pkgs ? import <nixpkgs> {} }:
let
in
  pkgs.dockerTools.buildLayeredImage {
    name = "koenw/fullstack-hello-mgmt";
    tag = "latest";
    contents = with pkgs; [
      bash
      coreutils
      just
      postgresql
      openapi-generator-cli
      nodejs-16_x
      netcat
      ../mgmt
      ../datasets
    ];

    config = {
      Cmd = ["bash" "init.sh"];
    };
  }

