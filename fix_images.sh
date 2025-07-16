#!/bin/bash

# Fix images for GitHub Pages deployment
echo "Fixing images for GitHub Pages..."

# Copy images to docs folder
cp -r public/images docs/

echo "Images copied successfully!"
echo "Now commit and push the changes to see them on GitHub Pages."
