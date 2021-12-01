#!/bin/sh

fc-cache -f
yarn --cwd=tests/visual test:ci
