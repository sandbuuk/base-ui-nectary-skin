#!/bin/sh

fc-cache -f
yarn --cwd=tests concurrently --raw npm:test:app-all /bin/bash
