#!/usr/bin/env bash

set -eux pipefail

# Cleanup docs dir
mkdir -p ./public/temp
rm -rf public/temp/css public/temp/images public/temp/js
rm -f public/temp/index.html public/temp/report.html

# Get components current version
LATEST_VERSION=$(node -pe "require('./components/package.json').version")

# Build Latest app
npm --prefix ./docs/latest run build

# Move build Latest app
mkdir -p ./public/temp/versions
rm -rf ./public/temp/versions/${LATEST_VERSION}
mv ./docs/latest/build ./public/temp/versions/${LATEST_VERSION}

# Generate "versions" file AFTER moving Latest app to its destination
node ./scripts/generate-versions-file.js

# Build Shell using updated "versions" file
npm --prefix ./docs/shell run build

# Move built Shell
mv ./docs/shell/build/* ./public/temp
