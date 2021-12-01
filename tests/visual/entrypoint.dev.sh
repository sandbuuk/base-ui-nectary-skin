#!/bin/sh

fc-cache -f
yarn --cwd=tests/visual concurrently --raw npm:test:app-all /bin/bash
