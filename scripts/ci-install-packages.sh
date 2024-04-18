#!/usr/bin/env bash
set -eux pipefail

# @sinch for internally published packages on gitlab repository.
npm config set --global @sinch:registry https://gitlab.com/api/v4/packages/npm/
npm config set --global -- '//gitlab.com/api/v4/packages/npm/:_authToken' '${CI_JOB_TOKEN}'
npm config set --global -- '//gitlab.com/api/v4/projects/:_authToken' '${CI_JOB_TOKEN}'

npm install --no-audit --no-fund --global pnpm
pnpm config set store-dir .pnpm-store
pnpm install --frozen-lockfile
