#!/bin/bash

# BUILD WRAPPER - Show real errors, fail properly
# This script tries multiple build strategies but FAILS if none work

set -e  # Exit on any error

# 🔥 IMPORTANT: NE PAS supprimer .next/cache entre builds
# Turbopack File System Caching (stable depuis Next 16.1) réutilise le cache
# pour 2-3x faster builds successifs. Le cache est invalidé automatiquement
# si lockfile/deps changent.

CACHE_DIR=".next/cache"
if [ -d "$CACHE_DIR" ]; then
  CACHE_SIZE=$(du -sh "$CACHE_DIR" 2>/dev/null | cut -f1)
  echo "♻️  Cache trouvé: $CACHE_SIZE — réutilisation pour build incrémental"
else
  echo "🆕 Pas de cache: cold build (premier build de la session)"
fi

START_TIME=$(date +%s)

echo "🚀 Starting build..."

# Try normal build first
echo "Attempting build with all checks..."
npm run build:normal

END_TIME=$(date +%s)
ELAPSED=$((END_TIME - START_TIME))
echo "✅ Build succeeded in ${ELAPSED}s"
exit 0
