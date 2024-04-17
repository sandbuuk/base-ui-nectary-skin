#!/bin/bash

# Check if the directory and NPM token arguments are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 <directory> <npm_token> [ci_commit_tag]"
  exit 1
fi

# Assign arguments to variables
DIR=$1
NPM_TOKEN=$2
CI_COMMIT_TAG=$3  # This is optional, can be empty

pnpm --dir $DIR build

# Configure npm for publishing
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc

# Check if CI_COMMIT_TAG is provided and not empty
if [ ! -z "$CI_COMMIT_TAG" ]; then
  npm publish $DIR/
  # Send changelog to Slack
  node ./scripts/slack-changelog.js $DIR
else
  # CI_COMMIT_TAG is not provided, publish with the tag 'next'
  npm publish $DIR/ --tag next
fi
