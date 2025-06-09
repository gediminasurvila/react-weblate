#!/bin/bash

# Exit on error
set -e

# Config
TRANSLATION_REPO_URL="https://github.com/gediminasurvila/react-weblate-i18n.git"
TRANSLATION_DIR_TEMP=".translations-temp"
TARGET_DIR="public/translations/locales"

echo "🔁 Syncing translations from $TRANSLATION_REPO_URL..."

# Clean old temp dir if exists
rm -rf "$TRANSLATION_DIR_TEMP"

# Clone the translation repo (default branch)
git clone "$TRANSLATION_REPO_URL" "$TRANSLATION_DIR_TEMP"

# Ensure target directory exists
mkdir -p "$TARGET_DIR"

# Copy all locale files
cp -r "$TRANSLATION_DIR_TEMP/locales/"* "$TARGET_DIR"

# Clean up
rm -rf "$TRANSLATION_DIR_TEMP"

echo "✅ Translations synced to $TARGET_DIR"
