#!/bin/bash

# Ocean Life Yacht Services - Complete GitHub Pages Deployment Script
# This script builds the site and pushes it to GitHub

echo "🚀 Ocean Life Yacht Services - GitHub Pages Deployment"
echo "=================================================="

# Step 1: Build the site
echo "🏗️  Step 1: Building the site..."
./build_github.sh

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix any errors and try again."
    exit 1
fi

# Step 2: Git operations
echo ""
echo "📤 Step 2: Pushing to GitHub..."

# Add all changes including the docs folder
git add .

# Commit with timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "Deploy Ocean Life website to GitHub Pages - $TIMESTAMP"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your site has been deployed."
    echo "🌐 Your site will be live at: https://4dllm.github.io/OceanLifeDemo/"
    echo "⏱️  Please wait 2-5 minutes for GitHub Pages to update."
    echo ""
    echo "📱 The site is fully optimized for mobile devices!"
else
    echo "❌ Push failed! Please check your GitHub credentials and try again."
    exit 1
fi