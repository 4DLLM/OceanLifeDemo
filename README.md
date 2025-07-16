# Ocean Life Yacht Services - Professional Yacht Management Platform

## 🚢 About Ocean Life

Ocean Life Yacht Services is revolutionizing the yacht management industry with AI-powered predictive maintenance, 24/7 digital monitoring, and transparent subscription pricing. Based in Tampa Bay and proud partners of Westshore Yacht Club.

### ✨ Key Features
- **AI Predictive Maintenance** - Prevent failures before they occur
- **"Yachty" AI Assistant** - Natural language vessel management
- **QR Code Service Activation** - Instant service requests
- **24/7 Emergency Response** - One-touch Coast Guard connectivity
- **Transparent Pricing** - Three-tier subscription model

## 🌐 Live Website

Visit our live site: [https://4dllm.github.io/OceanLifeDemo/](https://4dllm.github.io/OceanLifeDemo/)

## 🚀 Deployment Instructions

### Quick Deploy to GitHub Pages

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/4DLLM/OceanLifeDemo.git
   cd OceanLifeDemo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build for GitHub Pages**:
   ```bash
   chmod +x build_github.sh
   ./build_github.sh
   ```

4. **Deploy to GitHub**:
   ```bash
   git add docs/
   git commit -m "Deploy Ocean Life website to GitHub Pages"
   git push origin main
   ```

5. **Configure GitHub Pages** (one-time setup):
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs`
   - Save

Your site will be live at https://4dllm.github.io/OceanLifeDemo/ within minutes!

## 📁 Project Structure

```
OceanLifeDemo/
├── public/
│   ├── images/          # All website images
│   │   ├── gallery/     # Gallery and demo images
│   │   └── logo/        # Logo files
│   └── favicon.svg      # Site favicon
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── layouts/        # Layout components
│   └── main.jsx        # App entry point
├── docs/               # GitHub Pages files (generated)
├── build_github.sh     # Build automation script
└── package.json        # Project dependencies
```

## 🛠️ Development

### Local Development
```bash
npm run dev
```
Visit http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Technology Stack

- **Frontend**: React.js with Vite
- **UI Framework**: Chakra UI
- **Routing**: React Router
- **Hosting**: GitHub Pages
- **Images**: Optimized WebP format
- **Icons**: React Icons

## 📱 Platform Features

### Customer Dashboard
- Real-time vessel monitoring
- AI-powered diagnostics
- Maintenance scheduling
- Emergency response system

### Technician App
- Digital inspection workflows
- QR code scanning
- Offline functionality
- Photo documentation

### Admin Portal
- Business analytics
- Vendor management
- Customer insights
- Revenue tracking

## 💰 Pricing Tiers

- **Essential** - $299/month
- **Professional** - $599/month
- **Admiral** - $999/month

## 📞 Contact

**Ocean Life Yacht Services**
- Phone: (727) 888-4016
- Location: Westshore Yacht Club, Tampa Bay
- Website: https://4dllm.github.io/OceanLifeDemo/

## 🔧 Troubleshooting

### Images not loading?
- Run `./build_github.sh` to ensure images are copied
- Check that `docs/images/` exists
- Clear browser cache

### Site not updating?
- GitHub Pages can take 5-10 minutes
- Try hard refresh (Ctrl+Shift+R)
- Check Actions tab for errors

### Build errors?
- Delete `node_modules` and run `npm install`
- Ensure Node.js version 16+ is installed
- Check for syntax errors with `npm run lint`

---

Built with ❤️ by Ocean Life Yacht Services - Transforming yacht ownership through technology