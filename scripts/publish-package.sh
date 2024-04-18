#!/bin/bash

set -eu pipefail

NPM_TOKEN=$1

# Configure npm for publishing
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc

pnpm run dry-run

if [ "$CI_COMMIT_REF_SLUG" == "$CI_DEFAULT_BRANCH" ]; then
  # commented out while testing
  # pnpm run release
fi
