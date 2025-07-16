#!/bin/bash

echo "🚀 Ocean Life Yacht Services - One-Click Deploy to GitHub Pages"
echo "=============================================================="
echo ""

# Make scripts executable first
chmod +x build_github.sh

# Step 1: Build the site
echo "🏗️  Building the site..."
./build_github.sh

# Step 2: Git add all files
echo ""
echo "📁 Adding files to git..."
git add -A

# Step 3: Commit
echo "💾 Committing changes..."
git commit -m "Deploy Ocean Life website - Mobile optimized platform"

# Step 4: Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site will be live at: https://4dllm.github.io/OceanLifeDemo/"
echo "⏱️  Please wait 2-5 minutes for GitHub Pages to update."
echo ""
echo "📱 The site is fully optimized for mobile devices!"
echo "🎯 All buttons and features are mobile-friendly!"