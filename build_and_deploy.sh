#!/bin/bash

# Build and deploy Ocean Life Demo to GitHub Pages

echo "🚀 Building Ocean Life Demo for GitHub Pages..."

# Clean the docs directory first (except .nojekyll)
echo "📁 Cleaning docs directory..."
find docs -name "*" -not -name ".nojekyll" -not -path docs -delete 2>/dev/null || true

# Build the project
echo "🔨 Building project with Vite..."
npm run build

# Copy images to docs
echo "🖼️  Copying images to docs folder..."
cp -r public/images docs/
cp public/favicon.svg docs/ 2>/dev/null || true

# Create .nojekyll file if it doesn't exist
touch docs/.nojekyll

echo "✅ Build complete!"
echo ""
echo "📋 Next steps:"
echo "1. git add docs"
echo "2. git commit -m 'Update GitHub Pages build'"
echo "3. git push"
echo ""
echo "🌐 Your site will be available at: https://4dllm.github.io/OceanLifeDemo/"
