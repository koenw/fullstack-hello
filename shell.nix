{ pkgs ? import <nixpkgs> {} }:

(pkgs.buildFHSUserEnv {
  name = "fullstack-hello";
  targetPkgs = pkgs: with pkgs; [
    just
    postgresql
    openapi-generator-cli
  ];
  multiPkgs = null;
  runScript = "zsh";
}).env
