{ pkgs ? import <nixpkgs> {} }:

(pkgs.buildFHSUserEnv {
  name = "fullstack-hello";
  targetPkgs = pkgs: with pkgs; [
    just
    postgresql
    docker-compose
    docker
    openapi-generator-cli
    nodejs-16_x
  ];
  multiPkgs = null;
  runScript = "zsh";
}).env
