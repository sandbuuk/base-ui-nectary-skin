#!/bin/sh

fc-cache -f
npm install --global pnpm
(pnpm --dir tests test:app-all &) && pnpm --dir tests test:bash
