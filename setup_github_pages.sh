#!/bin/bash

echo "🚢 Ocean Life Yacht Services - GitHub Pages Setup"
echo "================================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Make build script executable
chmod +x build_github.sh

# Run the build
echo ""
echo "🏗️  Building for GitHub Pages..."
./build_github.sh

# Check if build was successful
if [ -d "docs" ] && [ -f "docs/index.html" ] && [ -d "docs/images" ]; then
    echo ""
    echo "✅ BUILD SUCCESSFUL!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Run: git add docs/"
    echo "2. Run: git commit -m 'Deploy Ocean Life website'"
    echo "3. Run: git push origin main"
    echo ""
    echo "🌐 Your site will be live at: https://4dllm.github.io/"
    echo ""
    echo "⚙️  GitHub Pages Configuration:"
    echo "   - Go to: https://github.com/4dllm/4dllm.github.io/settings/pages"
    echo "   - Source: Deploy from a branch"
    echo "   - Branch: main"
    echo "   - Folder: /docs"
    echo ""
else
    echo ""
    echo "❌ BUILD FAILED!"
    echo "Please check for errors above."
fi