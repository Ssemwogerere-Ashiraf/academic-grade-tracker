# 🚀 Deployment Guide

Complete guide to deploying the Academic Grade Tracker to various hosting platforms.

## Table of Contents
1. [GitHub Pages (Recommended)](#github-pages-recommended)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [Local/Offline](#localoffline)
5. [Custom Domain](#custom-domain)
6. [Troubleshooting](#troubleshooting)

---

## GitHub Pages (Recommended)

**Status:** ✅ **Already Configured**

Your tracker is automatically deployed to:
```
https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker
```

### How It Works

1. **Automatic Deployment**
   - Push changes to `main` branch
   - GitHub Actions automatically builds & deploys
   - Live in seconds

2. **GitHub Actions Workflow**
   - File: `.github/workflows/deploy.yml`
   - Triggers on every push to main
   - Validates code and deploys to GitHub Pages
   - Zero configuration needed

3. **Settings**
   - Go to: Settings → Pages
   - Source: `main` branch / `root` directory
   - Custom domain: Optional (see below)

### Deployment Workflow

```
You make changes
      ↓
git commit -m "message"
      ↓
git push origin main
      ↓
GitHub Actions runs tests
      ↓
Deploys to GitHub Pages
      ↓
Live at: https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker
```

### Make Changes & Deploy

```bash
# 1. Clone the repo (if you don't have it)
git clone https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker.git
cd academic-grade-tracker

# 2. Make your changes
# Edit index.html, tracker.js, etc

# 3. Stage changes
git add .

# 4. Commit with message
git commit -m "feat: add dark mode"

# 5. Push to main
git push origin main

# 6. Check GitHub Actions
# Go to: https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/actions
# Wait for green checkmark ✓
# Usually deploys in <1 minute

# 7. Visit your site
# https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker
```

### Verify Deployment

1. Visit: https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker
2. Should show your latest changes
3. Open DevTools (F12) and check Console tab
4. No errors should appear

---

## Netlify

Alternative free hosting with easy deployment.

### Setup Steps

1. **Create Netlify Account**
   - Visit: https://netlify.com
   - Sign up with GitHub account
   - Authorize Netlify

2. **Connect Repository**
   - Click "New site from Git"
   - Choose GitHub
   - Select: `academic-grade-tracker`
   - Click "Deploy site"

3. **Configure**
   - Build command: (leave empty - static site)
   - Publish directory: `.` (current directory)
   - Deploy: Automatic

4. **Custom Domain**
   - Domain settings
   - Add custom domain (if you have one)

### Deploy Updates

Same as GitHub Pages - just push to main:
```bash
git add .
git commit -m "your message"
git push origin main
# Netlify auto-deploys in seconds
```

### Verify

- Netlify URL: `https://your-site-name.netlify.app`
- Shows build logs in Netlify dashboard
- Green badge = successful deployment

---

## Vercel

Another excellent free hosting option.

### Setup Steps

1. **Create Vercel Account**
   - Visit: https://vercel.com
   - Sign up with GitHub
   - Authorize access

2. **Import Project**
   - Click "New Project"
   - Select GitHub repository
   - Click "Import"

3. **Configure**
   - Framework: None (static site)
   - Build command: (leave empty)
   - Output directory: `.`
   - Click "Deploy"

4. **Done!**
   - Vercel provides URL
   - Auto-deploys on push to main

### Deploy Updates

```bash
git add .
git commit -m "your message"
git push origin main
# Vercel auto-deploys automatically
```

### Verify

- Vercel URL: `https://your-project.vercel.app`
- Check Vercel dashboard for build status
- Deployments tab shows history

---

## Local/Offline

Run locally without any hosting service.

### Download & Run

```bash
# 1. Clone the repository
git clone https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker.git
cd academic-grade-tracker

# 2. Open in browser
# Option A: Double-click index.html
# Option B: Use a local server (recommended)

# 3. Start local server (Python)
python3 -m http.server 8000

# Or if you have Node.js:
npx http-server

# 4. Visit: http://localhost:8000
# or http://localhost:3000 (depending on server)
```

### Benefits
- ✅ Works completely offline
- ✅ No internet needed after download
- ✅ No data ever leaves your computer
- ✅ Perfect for privacy

### Run as Desktop App

#### Windows
```batch
@echo off
start http://localhost:8000
python -m http.server 8000
```
Save as `run.bat`, double-click to start

#### Mac
```bash
#!/bin/bash
open http://localhost:8000
python3 -m http.server 8000
```
Save as `run.sh`, make executable: `chmod +x run.sh`

#### Linux
```bash
#!/bin/bash
xdg-open http://localhost:8000
python3 -m http.server 8000
```
Save as `run.sh`, make executable: `chmod +x run.sh`

---

## Custom Domain

Use your own domain instead of GitHub Pages domain.

### Using GitHub Pages

1. **Register Domain**
   - GoDaddy, Namecheap, Google Domains, etc.
   - Cost: $10-15/year typically

2. **Configure DNS**
   - Go to your domain registrar
   - Find DNS settings
   - Add these records:

   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: Ssemwogerere-Ashiraf.github.io
   ```

3. **GitHub Settings**
   - Go to: Repository Settings → Pages
   - Custom domain: `yourdomain.com`
   - GitHub verifies DNS
   - Auto-enables HTTPS (free SSL)

4. **Visit Your Site**
   - https://yourdomain.com

### Using Netlify/Vercel

Much easier! Both provide:
- Free SSL/HTTPS
- Easy custom domain setup
- Automatic redirects

**Netlify:**
- Settings → Domain management
- Add custom domain
- Verify DNS
- Done!

**Vercel:**
- Settings → Domains
- Add custom domain
- Verify DNS
- Done!

---

## Troubleshooting

### Site Shows 404

**Symptom:** Visit site but get "Page not found"

**Solution:**
1. Check GitHub Pages settings
2. Ensure main branch is selected
3. Verify `index.html` exists
4. Check Actions tab for build errors
5. Try clearing browser cache (Ctrl+Shift+Delete)

### Changes Not Showing

**Symptom:** Pushed code but site looks old

**Solution:**
1. Check GitHub Actions passed (green ✓)
2. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. Clear browser cache
4. Check if you pushed to correct branch (main)
5. Wait 2-3 minutes for propagation

### Build Failed

**Symptom:** GitHub Actions shows ✗ (red X)

**Solution:**
1. Click on failed workflow in Actions tab
2. Read error message carefully
3. Common issues:
   - Syntax errors in code
   - Missing quotes or brackets
   - Incorrect file paths
4. Fix the error locally
5. Commit and push again

### Custom Domain Not Working

**Symptom:** Custom domain shows error

**Solution:**
1. Verify DNS records are correct
2. Give DNS time to propagate (up to 48 hours)
3. Check GitHub Pages settings has domain
4. Try accessing GitHub Pages URL to verify site works
5. Test DNS: `nslookup yourdomain.com`

### HTTPS Not Working

**Symptom:** Site shows "Not secure"

**Solution:**
- GitHub Pages: Usually auto-enables HTTPS
- Force HTTPS: Settings → Pages → Enforce HTTPS
- Wait 5-10 minutes for certificate
- Clear browser cache

### Site Too Slow

**Symptom:** Pages load slowly

**Possible causes:**
- Browser cache outdated
- Internet connection slow
- Many large files

**Solution:**
- Clear browser cache
- Check internet speed
- Minimize images (use online compressors)
- Optimize CSS/JavaScript

---

## Environment Variables

This project doesn't need environment variables - everything is client-side and data is stored locally.

**No secrets needed** - No API keys, no passwords, no sensitive data.

---

## Performance Tips

### Before Deploying

1. **Minimize Files**
   ```bash
   # Optimize images
   # Minify CSS/JavaScript
   # Remove unused code
   ```

2. **Test Performance**
   - Use Google PageSpeed Insights
   - Check Lighthouse (F12 → Lighthouse)
   - Aim for 90+ scores

3. **Test in Browsers**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

4. **Test Offline**
   - Site works without internet
   - localStorage persists data

### Deployment Checklist

- [ ] All features tested locally
- [ ] No console errors (F12)
- [ ] Responsive design verified
- [ ] Mobile tested
- [ ] PDF export works
- [ ] Data saves correctly
- [ ] Commit message clear
- [ ] Pushed to main branch
- [ ] GitHub Actions passed
- [ ] Site loads correctly
- [ ] Features work on live site

---

## Monitoring

### GitHub Actions

Monitor deployments:
```
GitHub → Actions tab → Latest workflows
```

Green ✓ = Success  
Red ✗ = Failed (check logs)

### Check Site Health

```bash
# Verify site is live
curl https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker

# Should return HTML content
# Status: 200 = Success
```

### Analytics (Optional)

Add Google Analytics:
```html
<!-- In <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your tracking ID.

---

## Rollback (Undo Deployment)

If something went wrong:

```bash
# View commit history
git log --oneline

# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push origin main --force
```

⚠️ Use `--force` carefully! Only if absolutely necessary.

---

## FAQ

**Q: How long does deployment take?**  
A: Usually 30 seconds - 1 minute on GitHub Pages. Netlify/Vercel are similar.

**Q: Can I have multiple versions?**  
A: Yes! Create branches and deploy different branches to different URLs.

**Q: Is GitHub Pages free?**  
A: Yes! Unlimited sites, unlimited bandwidth, free SSL/HTTPS.

**Q: Can I use a database?**  
A: This project uses localStorage (no database needed). If you want server-side features, migrate to a backend.

**Q: How do I update the tracker?**  
A: Edit files locally, commit, and push to main. Deploy happens automatically.

**Q: What if I break something?**  
A: Revert to previous commit using git. Your live site stays working.

---

## Support

- 🐛 Issues: https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/issues
- 💬 Discussions: https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/discussions
- 📚 Docs: [README.md](README.md), [USER_GUIDE.md](USER_GUIDE.md)

---

**Happy deploying! Your tracker is now live and ready to use! 🎉**

[← Back to README](README.md)
