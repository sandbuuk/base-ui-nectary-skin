#!/bin/sh

fc-cache -f
yarn --cwd=tests/accessibility test:ci
