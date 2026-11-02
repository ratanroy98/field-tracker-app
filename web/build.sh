#!/bin/sh
# Joins coach content + UI into one file the server loads.
cd "$(dirname "$0")" && cat coach_en.js coach_hi.js coach_bn.js coach_as.js ui.js > bundle.js
