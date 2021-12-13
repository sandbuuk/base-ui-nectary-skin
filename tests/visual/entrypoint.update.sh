#!/bin/sh

fc-cache -f
yarn --cwd=tests/visual concurrently --raw --success=first --kill-others npm:test:update-screenshots npm:test:app-react
