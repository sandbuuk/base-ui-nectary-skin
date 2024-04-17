#!/usr/bin/env bash
set -eux pipefail

npm install --no-audit --no-fund --global pnpm
pnpm config set store-dir .pnpm-store
pnpm install --frozen-lockfile