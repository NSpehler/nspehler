#!/usr/bin/env bash
set -euo pipefail

repo=git@github.com:NSpehler/dayiv.git
dir=/opt/dayiv
export PATH=/root/.bun/bin:$PATH
export GIT_SSH_COMMAND="ssh -i /root/.ssh/dayiv_deploy_key -o IdentitiesOnly=yes -o UserKnownHostsFile=/root/.ssh/known_hosts_github -o StrictHostKeyChecking=yes"

if [ ! -d "$dir/.git" ]; then
  rm -rf "$dir.next"
  git clone --quiet --depth 1 --branch main "$repo" "$dir.next"
  if [ -d "$dir" ]; then
    rm -rf "$dir.previous"
    mv "$dir" "$dir.previous"
  fi
  mv "$dir.next" "$dir"
fi

cd "$dir"
git fetch --quiet --depth 1 origin main
git reset --quiet --hard origin/main
git clean --quiet -fd
echo "dayiv at $(git log -1 --format='%h %s')"

lock=$(sha256sum bun.lock | cut -d' ' -f1)
if [ "$(cat node_modules/.dayiv-lock 2>/dev/null)" != "$lock" ]; then
  bun install --production --frozen-lockfile
  bunx playwright install --with-deps chromium
  echo "$lock" > node_modules/.dayiv-lock
fi
