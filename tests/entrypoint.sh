#!/bin/sh

fc-cache -f
yarn --cwd=tests test:ci
