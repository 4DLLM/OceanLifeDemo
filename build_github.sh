#!/bin/bash

# Build script for GitHub Pages deployment
echo "🚀 Building Ocean Life Yacht Services for GitHub Pages..."

# Clean the docs directory
echo "🧹 Cleaning docs directory..."
rm -rf docs/*

# Build the project
echo "🏗️  Building project with Vite..."
npm run build

# Copy images from public to docs
echo "📁 Copying images to docs..."
cp -r public/images docs/
cp public/favicon.svg docs/

# Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with underscore
echo "📝 Creating .nojekyll file..."
touch docs/.nojekyll

# Add CNAME file if you have a custom domain (uncomment if needed)
# echo "yourdomain.com" > docs/CNAME

echo "✅ Build complete! Ready for GitHub Pages deployment."
echo "📌 Don't forget to:"
echo "   1. git add docs/"
echo "   2. git commit -m 'Build for GitHub Pages'"
echo "   3. git push origin main"
echo ""
echo "🌐 Your site will be available at: https://4dllm.github.io/"