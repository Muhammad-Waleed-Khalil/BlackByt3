# 🚀 Vercel Deployment Guide - Black Byt3

Complete guide for deploying your Black Byt3 website with working SMTP contact form on Vercel.

## 📋 Prerequisites

- Vercel account (free tier works)
- GitHub/GitLab/Bitbucket repository
- SMTP credentials from Black Byt3

## 🎯 Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

2. **Configure Environment Variables**

   Before deploying, add these environment variables in Vercel:

   Go to: **Project Settings** → **Environment Variables**

   Add the following variables:

   ```
   SMTP_HOST=smtp.blackbyt3.net
   SMTP_PORT=465
   SMTP_USER=admin@blackbyt3.net
   SMTP_PASS=B74ckbyt3.4dm1n#
   SMTP_FROM=admin@blackbyt3.net
   SMTP_TO=admin@blackbyt3.net
   ```

   ⚠️ **IMPORTANT:** Check "Encrypt" for `SMTP_PASS` to keep it secure!

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Follow prompts and add environment variables when asked

# Deploy to production
vercel --prod
```

## 🔧 How It Works

### Architecture

```
User submits form
    ↓
Frontend (/pages/ContactPage.tsx)
    ↓
Detects environment (local vs Vercel)
    ↓
Calls /api/contact (Vercel Serverless Function)
    ↓
Email sent via SMTP (smtp.blackbyt3.net:465)
    ↓
Email arrives at admin@blackbyt3.net
```

### Files Structure

```
BlackByt3/
├── api/
│   └── contact.js          # Vercel serverless function
├── pages/
│   └── ContactPage.tsx     # Frontend form (auto-detects environment)
├── vercel.json             # Vercel configuration
├── server.js               # Local development server (not deployed)
└── package.json
```

### Environment Detection

The contact form automatically detects where it's running:

- **Local Development:** Uses `http://localhost:3001/api/contact`
- **Vercel Production:** Uses `/api/contact` (serverless function)

No code changes needed! 🎉

## 📝 Setting Environment Variables in Vercel

### Via Dashboard

1. Go to your project on Vercel
2. Click "Settings" tab
3. Click "Environment Variables" in sidebar
4. Add each variable:

   | Key | Value | Environment |
   |-----|-------|-------------|
   | `SMTP_HOST` | `smtp.blackbyt3.net` | All |
   | `SMTP_PORT` | `465` | All |
   | `SMTP_USER` | `admin@blackbyt3.net` | All |
   | `SMTP_PASS` | `B74ckbyt3.4dm1n#` | All (Encrypted) |
   | `SMTP_FROM` | `admin@blackbyt3.net` | All |
   | `SMTP_TO` | `admin@blackbyt3.net` | All |

5. Click "Save" for each variable
6. Redeploy your project (Vercel → Deployments → Menu → Redeploy)

### Via CLI

```bash
# Add environment variables
vercel env add SMTP_HOST
# Enter: smtp.blackbyt3.net

vercel env add SMTP_PORT
# Enter: 465

vercel env add SMTP_USER
# Enter: admin@blackbyt3.net

vercel env add SMTP_PASS
# Enter: B74ckbyt3.4dm1n#

vercel env add SMTP_FROM
# Enter: admin@blackbyt3.net

vercel env add SMTP_TO
# Enter: admin@blackbyt3.net

# Redeploy to apply changes
vercel --prod
```

## 🧪 Testing Your Deployment

### 1. Check Serverless Function

Visit: `https://your-site.vercel.app/api/contact`

You should see:
```json
{"success":false,"message":"Method not allowed"}
```

This is correct! It means the API is working (it only accepts POST requests).

### 2. Test Contact Form

1. Go to: `https://your-site.vercel.app/contact`
2. Fill out the form
3. Click "Transmit Data"
4. You should see: "✅ Message transmitted successfully!"
5. Check your email at `admin@blackbyt3.net`

### 3. Check Vercel Logs

If something goes wrong:

1. Go to Vercel Dashboard → Your Project
2. Click "Functions" tab
3. Click on `/api/contact`
4. View execution logs and errors

## 🐛 Troubleshooting

### Issue: "Failed to send message"

**Possible Causes:**
- Environment variables not set
- SMTP credentials incorrect
- SMTP server unreachable

**Solutions:**
1. Verify environment variables are set in Vercel
2. Check Vercel function logs
3. Test SMTP credentials manually
4. Ensure `smtp.blackbyt3.net` is accessible

### Issue: "Connection error"

**Cause:** API endpoint not found

**Solution:**
1. Verify `api/contact.js` exists in your repository
2. Check `vercel.json` configuration
3. Redeploy the project

### Issue: Function timeout

**Cause:** SMTP connection taking too long

**Solution:**
1. Increase timeout in `vercel.json`:
   ```json
   "functions": {
     "api/*.js": {
       "maxDuration": 30
     }
   }
   ```
2. Note: Free tier max is 10 seconds

### Issue: File upload not working

**Cause:** Vercel has request size limits

**Current Limits:**
- Free/Hobby: 4.5 MB
- Pro: 4.5 MB
- Enterprise: Custom

**Solution:**
- Keep file uploads under 4MB
- Or upgrade Vercel plan
- Or use external file storage (S3, Cloudinary)

## 🔐 Security Best Practices

### ✅ DO:
- Use environment variables for SMTP credentials
- Enable "Encrypt" option for sensitive variables
- Use `.gitignore` to exclude `.env` files
- Regularly rotate SMTP passwords

### ❌ DON'T:
- Hardcode credentials in source code
- Commit `.env` files to git
- Share environment variables publicly
- Use weak SMTP passwords

## 📊 Monitoring

### Check Email Delivery

1. **Vercel Function Logs:**
   - Dashboard → Project → Functions → `/api/contact`
   - View real-time execution logs

2. **SMTP Server Logs:**
   - Check your email server logs for delivery status

3. **Custom Monitoring:**
   - Add logging to `api/contact.js`
   - Use Vercel Analytics (Dashboard → Analytics)

## 🔄 Updating Your Deployment

### Automatic Deploys (Recommended)

Vercel automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Update contact form"
git push origin main
```

Vercel will:
1. Detect the push
2. Build your project
3. Deploy automatically
4. Send you deployment notification

### Manual Deploys

```bash
# Via CLI
vercel --prod

# Via Dashboard
Dashboard → Deployments → Menu → Redeploy
```

## 🌐 Custom Domain

### Add Custom Domain

1. Go to: Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `blackbyt3.net`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

Your contact form will work automatically on your custom domain!

## 📈 Performance

### Serverless Function Stats

- **Cold Start:** ~1-2 seconds (first request)
- **Warm Start:** ~100-300ms (subsequent requests)
- **Memory:** 1024 MB (configured)
- **Timeout:** 10 seconds (free tier)

### Optimization Tips

1. **Keep dependencies minimal** - Faster cold starts
2. **Use streaming** - For large responses
3. **Add caching** - For repeated operations
4. **Upgrade plan** - For longer timeouts

## 💰 Cost Estimate

### Vercel Free Tier:
- ✅ 100 GB bandwidth/month
- ✅ Unlimited projects
- ✅ Serverless function executions: 100k/month
- ✅ 10 second function timeout
- ✅ SSL certificates included

**Estimated Contact Form Usage:**
- ~50 form submissions/month = **FREE**
- ~500 form submissions/month = **FREE**
- ~5000 form submissions/month = **FREE**

You won't exceed free tier limits for normal contact form usage! 🎉

## 🎯 Production Checklist

Before going live, verify:

- [ ] Environment variables set in Vercel
- [ ] Contact form tested on production URL
- [ ] Email delivery confirmed
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Error handling tested
- [ ] File uploads tested (under 4MB)
- [ ] Mobile responsiveness checked
- [ ] Function logs reviewed

## 📞 Support

### Vercel Issues:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

### SMTP Issues:
- Check with your email provider
- Verify SMTP credentials
- Test connection manually

### Code Issues:
- Check `api/contact.js` for errors
- Review Vercel function logs
- Test locally with `npm run dev:all`

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel CLI Docs:** https://vercel.com/docs/cli
- **Serverless Functions:** https://vercel.com/docs/functions
- **Environment Variables:** https://vercel.com/docs/environment-variables

---

**Deployment Status:** ✅ Ready for Production

Your Black Byt3 contact form is now fully deployed and operational on Vercel!

For local development, use: `npm run dev:all`
For production, use: Automatic deploy from git push
