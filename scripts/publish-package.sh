#!/bin/bash

# Check if the directory and NPM token arguments are provided
if [ -z "$1" ] then
  echo "Usage: $0 <npm_token> [ci_commit_tag]"
  exit 1
fi

NPM_TOKEN=$1
CI_COMMIT_TAG=$2

pnpm --dir $DIR build

# Configure npm for publishing
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc

# Check if CI_COMMIT_TAG is provided and not empty
if [ ! -z "$CI_COMMIT_TAG" ]; then
  pnpm run dry-run
  pnpm run release
else
  # TODO: What should we do
fi
