#!/usr/bin/env bash

set -eux pipefail

# Cleanup docs dir
mkdir -p ./public
rm -rf public/css public/images public/js
rm -f public/index.html public/report.html

# Build latest app
npm --prefix ./docs/latest run build

# Move latest app
node --loader tsm ./scripts/move-latest-to-public.mts

# Generate "versions" file AFTER moving latest app to its destination
node --loader tsm ./scripts/generate-versions-file.mts

# Build Shell using updated "versions" file
npm --prefix ./docs/shell run build

# Move built Shell
mv ./docs/shell/build/* ./public
