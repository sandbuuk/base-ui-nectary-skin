#!/usr/bin/env bash

set -eux pipefail

# Cleanup docs dir
mkdir -p ./public/docs
rm -rf public/docs/css public/docs/images public/docs/js
rm -f public/docs/index.html public/docs/report.html

# Get components current version
LATEST_VERSION=$(node -pe "require('./components/package.json').version")

# Build Latest app
npm --prefix ./docs/latest run build

# Move build Latest app
mkdir -p ./public/docs/versions
rm -rf ./public/docs/versions/${LATEST_VERSION}
mv ./docs/latest/build ./public/docs/versions/${LATEST_VERSION}

# Generate "versions" file AFTER moving Latest app to its destination
node ./scripts/generate-versions-file.js

# Build Shell using updated "versions" file
npm --prefix ./docs/shell run build

# Move built Shell
mv ./docs/shell/build/* ./public/docs
