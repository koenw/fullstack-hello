{ pkgs ? import <nixpkgs> {} }:

(pkgs.buildFHSUserEnv {
  name = "fullstack-hello";
  targetPkgs = pkgs: with pkgs; [
    gnumake gcc
    postgresql
    just
  ];
  multiPkgs = null;
  runScript = "zsh";
}).env
