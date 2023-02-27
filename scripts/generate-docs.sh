#!/usr/bin/env bash

set -eux pipefail

# Cleanup docs dir
mkdir -p ./public/docs
rm -rf public/docs/css public/docs/images public/docs/js
rm -f public/docs/index.html public/docs/report.html

# Build latest app
npm --prefix ./docs/latest run build

# Move latest app
node --loader tsm ./scripts/move-latest-to-public.mts

# Generate "versions" file AFTER moving latest app to its destination
node --loader tsm ./scripts/generate-versions-file.mts

# Build Shell using updated "versions" file
npm --prefix ./docs/shell run build

# Move built Shell
mv ./docs/shell/build/* ./public/docs
