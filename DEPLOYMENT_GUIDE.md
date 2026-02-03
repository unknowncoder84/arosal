# 🚀 Deployment Guide - Auto-Update Setup

## ✅ Your Netlify Configuration is Ready!

The `netlify.toml` file is already configured for automatic deployments.

## 📋 What's Configured:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🔄 How Auto-Deployment Works:

### When you push to GitHub:
1. **Commit your changes** locally
2. **Push to GitHub** - `git push origin main`
3. **Netlify automatically detects** the push
4. **Builds your site** using `npm run build`
5. **Deploys to production** automatically

### Setup Steps (if not done already):

1. **Connect GitHub to Netlify:**
   - Go to Netlify Dashboard
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Netlify will auto-detect the settings from `netlify.toml`

2. **Configure Build Settings:**
   - Build command: `npm run build` (already in netlify.toml)
   - Publish directory: `.next` (already in netlify.toml)
   - Node version: 18 (already in netlify.toml)

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

## 🔧 To Push Updates:

```bash
# 1. Stage your changes
git add .

# 2. Commit with a message
git commit -m "Updated home page and team section"

# 3. Push to GitHub
git push origin main
```

**That's it!** Netlify will automatically:
- Detect the push
- Build your Next.js app
- Deploy to production
- Your site will be live in 2-3 minutes

## 📱 Continuous Deployment:

Every time you push to GitHub:
- ✅ Automatic build
- ✅ Automatic deployment
- ✅ No manual intervention needed
- ✅ Build logs available in Netlify dashboard

## 🌐 Your Site Will Update Automatically!

Once connected, any push to your GitHub repository will trigger an automatic deployment to Netlify.

## ⚡ Quick Deploy Command:

```bash
git add . && git commit -m "Update" && git push origin main
```

This will automatically deploy your changes to Netlify!
