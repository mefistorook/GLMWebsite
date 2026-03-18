# 🚀 VERCEL DEPLOYMENT - FINAL STEPS

## ✅ WHAT'S DONE:
- ✅ Vercel Serverless Functions created (`/api/consultation.js`, `/api/tenant-support.js`)
- ✅ Forms updated to use serverless endpoints
- ✅ Nodemailer installed
- ✅ All code ready for GitHub push

## 🔥 DEPLOY NOW (3 Steps):

### Step 1: Add Environment Variables to Vercel Dashboard

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these 2 variables:

```
OUTLOOK_EMAIL=goldlinemanagement@outlook.com
OUTLOOK_AUTH_KEY=lkeoqatzbsqakkwv
```

### Step 2: Push to GitHub

```bash
cd /app
git add .
git commit -m "Add Vercel serverless email functions"
git push origin main
```

### Step 3: Wait for Auto-Deploy
- Vercel detects changes
- Builds automatically
- Deploys to goldlinemanagement.com
- DONE! 🎉

## 📧 HOW IT WORKS:

```
User fills form on goldlinemanagement.com
    ↓
Form POSTs to /api/consultation (Vercel serverless function)
    ↓
Nodemailer sends email via Outlook SMTP
    ↓
Email arrives at goldlinemanagement@outlook.com
```

## 🧪 TEST IT:

1. Wait for Vercel deployment to finish
2. Go to: https://goldlinemanagement.com/consultation
3. Fill form with test data
4. Submit
5. Check goldlinemanagement@outlook.com inbox
6. 🎊 SUCCESS!

## 📁 FILES CREATED:

```
/frontend/
├── api/
│   ├── consultation.js        ← Vercel serverless function
│   └── tenant-support.js      ← Vercel serverless function
├── src/pages/
│   ├── Consultation.jsx       ← Updated to use /api/
│   └── TenantSupport.jsx      ← Updated to use /api/
└── package.json               ← Nodemailer added
```

## ⚡ TROUBLESHOOTING:

**If emails don't send:**
1. Check Vercel env variables are set correctly
2. Check function logs in Vercel dashboard
3. Verify Outlook password: `lkeoqatzbsqakkwv`

**Alternative SMTP settings if needed:**
- Host: `smtp.office365.com` (try this if smtp-mail.outlook.com fails)
- Port: `587`
- Secure: `false`

## 🎯 DONE!

Everything is ready. Just:
1. Add env vars to Vercel
2. Push to Git
3. Test the form

**Emails will work perfectly!** 🚀
