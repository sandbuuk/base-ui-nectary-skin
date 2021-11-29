#!/bin/sh

fc-cache -f
yarn --cwd=tests/accessibility concurrently --raw npm:test:app /bin/bash

