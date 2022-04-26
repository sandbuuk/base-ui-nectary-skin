#!/bin/sh

fc-cache -f
yarn --cwd=tests test:app-all && yarn --cwd=tests test:bash
