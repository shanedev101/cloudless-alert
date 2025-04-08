#!/bin/bash

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "❌ Missing version: usage ./release.sh 1.0.0"
  exit 1
fi

echo "🔧 Bundling with esbuild..."
yarn bundle || exit 1

echo "✅ Bundled dist/entrypoint.js"

git add dist/
git commit-personal --amend --no-edit
git push --force

echo "🏷 Tagging v$VERSION and alias v1..."
git tag -f v$VERSION
git tag -f v1 v$VERSION
git push -f origin v$VERSION
git push -f origin v1

echo "🚀 Released v$VERSION"
