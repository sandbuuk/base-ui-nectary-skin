#!/bin/bash

set -eu pipefail

# export NPM_TOKEN=$1

# Configure npm for publishing
# echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
pnpm run dry-run

# # commented out while testing
# if [ "$CI_COMMIT_REF_SLUG" == "$CI_DEFAULT_BRANCH" ]; then
#   pnpm run release
# fi
