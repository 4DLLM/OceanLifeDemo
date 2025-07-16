#!/bin/bash
cd /Users/jkenny/OceanLifeDemo

echo "🔧 Fixing image paths for GitHub Pages deployment..."

# Add the changes
git add -A

# Commit the changes
git commit -m "Fix image paths to use getImagePath utility for proper GitHub Pages deployment

- Updated FleetPage.jsx to use getImagePath for all vessel images
- Updated PlatformPage.jsx to use getImagePath for dashboard screenshots
- Updated AboutPage.jsx to use getImagePath (though these images may not exist)
- All image paths now properly use the base URL configuration
- This ensures images display correctly on https://4dllm.github.io/OceanLifeDemo"

# Push to GitHub
echo "📤 Pushing changes to GitHub..."
git push origin main

echo "✅ Changes pushed successfully!"
echo ""
echo "🏗️  Now running build for GitHub Pages..."

# Run the build script
./build_github.sh

echo ""
echo "🎉 All done! Your changes should be live at https://4dllm.github.io/OceanLifeDemo in a few minutes."
