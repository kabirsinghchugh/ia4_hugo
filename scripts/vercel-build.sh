#!/usr/bin/env bash
set -euo pipefail

DEFAULT_BASEURL="https://sporocarp.chughkabir.com/"

if [ "${VERCEL_ENV:-production}" = "production" ]; then
  BASE_URL="$DEFAULT_BASEURL"
else
  if [ -n "${VERCEL_URL:-}" ]; then
    BASE_URL="https://${VERCEL_URL}/"
  else
    BASE_URL="$DEFAULT_BASEURL"
  fi
fi

printf 'Building site with baseURL=%s\n' "$BASE_URL"
export HUGO_CACHEDIR="${HUGO_CACHEDIR:-$PWD/resources/.hugo_cache}"
mkdir -p "$HUGO_CACHEDIR"
hugo --gc --minify --baseURL "$BASE_URL"
