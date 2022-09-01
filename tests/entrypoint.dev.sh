#!/bin/sh

fc-cache -f
npm install --global pnpm
(CI=1 pnpm --dir tests test:app-all &) && pnpm --dir tests test:bash
