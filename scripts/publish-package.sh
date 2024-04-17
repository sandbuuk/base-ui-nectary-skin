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

pnpm run dry-run

if [ "$CI_COMMIT_REF_SLUG" == "$CI_DEFAULT_BRANCH" ]; then
  pnpm run release
fi
