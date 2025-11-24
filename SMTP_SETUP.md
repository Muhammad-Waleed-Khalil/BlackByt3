# 📧 SMTP Contact Form Setup - Black Byt3

This document explains how to set up and run the contact form with SMTP email functionality.

## 🎯 Overview

The contact form automatically detects its environment and uses the appropriate backend:

- **Local Development:** Express API server (`server.js`)
- **Production (Vercel):** Serverless function (`api/contact.js`)

SMTP credentials are securely stored server-side, never exposed in frontend code.

---

## 🚀 QUICK START - VERCEL (PRODUCTION)

**Already deployed on Vercel?** See: [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

**TL;DR:**
1. Add environment variables in Vercel Dashboard
2. Push to git → Auto-deploy
3. Contact form works automatically!

---

## 🚀 Quick Start

### 1. Start Both Servers

You have two options:

**Option A: Run both servers together (Recommended)**
```bash
npm run dev:all
```
This starts:
- Frontend (Vite): `http://localhost:3000`
- API Server: `http://localhost:3001`

**Option B: Run servers separately**
```bash
# Terminal 1 - API Server
npm run server

# Terminal 2 - Frontend
npm run dev
```

### 2. Test the Contact Form

1. Navigate to: `http://localhost:3000/contact`
2. Fill out the form
3. Click "Transmit Data"
4. Check your email at `admin@blackbyt3.net`

## 📁 Project Structure

```
BlackByt3/
├── server.js              # Express API server with SMTP configuration
├── pages/ContactPage.tsx  # Contact form component
├── .env.example           # Example environment variables
└── SMTP_SETUP.md         # This file
```

## 🔧 Configuration

### SMTP Settings (Already Configured in server.js)

```javascript
Host: smtp.blackbyt3.net
Port: 465 (SSL)
Username: admin@blackbyt3.net
Password: B74ckbyt3.4dm1n#
```

### API Endpoints

- **POST** `/api/contact` - Submit contact form
- **GET** `/api/health` - Check server status

## 📮 Contact Form Features

✅ **Form Fields:**
- Name (required)
- Company (optional)
- Email (required)
- Phone (optional)
- Service Selection (required)
- Budget Range (optional)
- Preferred Contact Time (optional)
- Message (required)
- File Attachment (optional, max 10MB)

✅ **Email Features:**
- HTML formatted emails with Black Byt3 branding
- File attachments support
- Reply-to set to customer's email
- Automatic timestamp
- Professional styling

## 🎨 Email Template

Emails are sent with:
- Black Byt3 themed design (black background, red accents)
- Monospace font for cyber aesthetic
- All form fields clearly labeled
- Timestamp of submission
- Professional formatting

## 🔒 Security Notes

⚠️ **IMPORTANT:** The SMTP credentials are currently hardcoded in `server.js`. For production:

1. Move credentials to environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

2. Update `server.js` to use environment variables:
   ```javascript
   auth: {
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS
   }
   ```

3. Never commit `.env` file (already in `.gitignore`)

## 🧪 Testing SMTP Connection

The server automatically tests the SMTP connection on startup:

```
✅ SMTP Server is ready to send emails  # Success
❌ SMTP Connection Failed: [error]      # Failure
```

### Manual Test

You can test the SMTP connection with curl:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "service": "Penetration Testing",
    "message": "This is a test message"
  }'
```

## 🐛 Troubleshooting

### Server won't start

**Error:** `Port 3001 already in use`
- **Solution:** Kill the existing process or change the port in `server.js`

```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3001 | xargs kill -9
```

### SMTP Connection Failed

**Error:** `SMTP Connection Failed`
- Check internet connection
- Verify SMTP credentials in `server.js`
- Check if `smtp.blackbyt3.net` is accessible
- Ensure port 465 is not blocked by firewall

### Frontend can't connect to API

**Error:** `Connection error. Please ensure the API server is running`
- Make sure API server is running on port 3001
- Check console: `npm run server`
- Verify API URL in `ContactPage.tsx` (line 61)

### File upload fails

**Error:** File too large
- Max file size is 10MB
- Supported formats: .pdf, .doc, .docx, .txt
- Check `server.js` multer configuration (line 23)

## 📊 Server Output

When the server starts successfully, you'll see:

```
╔═══════════════════════════════════════════════╗
║  🔴 Black Byt3 API Server                    ║
║  ✅ Running on http://localhost:3001         ║
║  📧 SMTP: smtp.blackbyt3.net:465             ║
╚═══════════════════════════════════════════════╝

✅ SMTP Server is ready to send emails
```

## 🚀 Production Deployment

### Option 1: Same Server

Deploy both frontend and API on the same server:

```bash
# Build frontend
npm run build

# Start API server
npm run server

# Serve dist/ folder with nginx/apache
```

### Option 2: Separate Servers

1. **Frontend:** Deploy `dist/` to static hosting (Vercel, Netlify, etc.)
2. **API:** Deploy `server.js` to Node.js hosting (Heroku, DigitalOcean, etc.)
3. Update API URL in `ContactPage.tsx` to production API endpoint

### Environment Variables for Production

```env
SMTP_HOST=smtp.blackbyt3.net
SMTP_PORT=465
SMTP_USER=admin@blackbyt3.net
SMTP_PASS=B74ckbyt3.4dm1n#
SMTP_FROM=admin@blackbyt3.net
SMTP_TO=admin@blackbyt3.net
API_PORT=3001
NODE_ENV=production
```

## 📝 Notes

- SMTP uses SSL on port 465 (secure connection)
- Self-signed certificates are accepted (`rejectUnauthorized: false`)
- All emails are sent to `admin@blackbyt3.net`
- Reply-to is set to customer's email for easy responses
- File attachments are sent inline with the email

## 🆘 Support

If you encounter issues:
1. Check server console for error messages
2. Check browser console (F12) for frontend errors
3. Test SMTP connection manually
4. Verify credentials and server accessibility

---

**Last Updated:** November 2025
**Maintained by:** Black Byt3 Development Team
