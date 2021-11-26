#!/bin/sh

fc-cache -f
npx concurrently --raw npm:test:app-all /bin/bash

