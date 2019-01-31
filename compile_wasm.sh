#!/usr/bin/env bash

emcc "./web_assembly/visualize.c" -s WASM=1 -o "./public/visualize.js"