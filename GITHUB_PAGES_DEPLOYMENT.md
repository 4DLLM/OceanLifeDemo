# Ocean Life Yacht Services - GitHub Pages Deployment Guide

## 🚀 Quick Start

To deploy your Ocean Life website to GitHub Pages (https://4dllm.github.io/), follow these steps:

### 1. Build the Site
```bash
# Make the build script executable (first time only)
chmod +x build_github.sh

# Run the build script
./build_github.sh
```

### 2. Commit and Push
```bash
# Add the built files
git add docs/

# Commit the changes
git commit -m "Build for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### 3. Configure GitHub Pages
1. Go to your repository on GitHub (https://github.com/4dllm/4dllm.github.io)
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select:
   - **Deploy from a branch**
   - **Branch**: `main`
   - **Folder**: `/docs`
5. Click "Save"

Your site will be live at https://4dllm.github.io/ within a few minutes!

## 🖼️ Images Fix

The build script automatically:
- ✅ Copies all images from `public/images` to `docs/images`
- ✅ Ensures proper paths for GitHub Pages
- ✅ Includes favicon
- ✅ Creates `.nojekyll` file to prevent GitHub from ignoring underscore files

## 🔧 Manual Build Commands

If you prefer to run commands manually:

```bash
# Build the project
npm run build

# Copy images
cp -r public/images docs/

# Copy favicon
cp public/favicon.svg docs/

# Create .nojekyll
touch docs/.nojekyll
```

## 📱 Testing Locally

To test the production build locally:
```bash
npm run preview
```

## 🎨 Project Structure

```
OceanLifeDemo/
├── public/
│   ├── images/         # Source images
│   └── favicon.svg
├── src/                # React source code
├── docs/               # GitHub Pages deployment folder
│   ├── index.html
│   ├── assets/         # Built JS/CSS
│   └── images/         # Copied images
└── build_github.sh     # Build automation script
```

## 🐛 Troubleshooting

### Images not showing?
1. Make sure you ran the build script: `./build_github.sh`
2. Check that `docs/images/` folder exists and contains all images
3. Verify image paths in your code use `/images/` (not `./images/` or `../images/`)

### Site not updating?
1. GitHub Pages can take 5-10 minutes to update
2. Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Check GitHub Actions tab for any deployment errors

### Build errors?
1. Make sure you have all dependencies: `npm install`
2. Clear cache: `rm -rf node_modules && npm install`
3. Check for syntax errors: `npm run lint`

## 🚢 Next Steps

1. **Custom Domain** (Optional): Add a CNAME file in the docs folder with your domain
2. **SEO**: The site already includes meta tags for good SEO
3. **Analytics**: Consider adding Google Analytics to track visitors
4. **Performance**: Images are already optimized as WebP format

---

Built with ❤️ for Ocean Life Yacht Services