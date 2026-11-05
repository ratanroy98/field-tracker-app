#!/bin/sh
# Joins coach content + UI into one file the server loads.
cd "$(dirname "$0")" && cat icons.js rosters.js coach_en.js coach_hi.js coach_bn.js coach_as.js coach2_en.js coach2_hi.js coach2_bn.js coach2_as.js ui.js plus.js fame.js brick.js meet.js sync.js task.js layout.js guide.js peers.js sales.js geo.js select.js inputs.js mail.js menu.js dash.js > bundle.tmp && { echo "window.FT_BUILD='$(date +%Y%m%d%H%M%S)';"; cat bundle.tmp; } > bundle.js && rm bundle.tmp
