#!/bin/sh

fc-cache -f
npx concurrently --raw npm:test:playwright npm:test:app-react /bin/bash

