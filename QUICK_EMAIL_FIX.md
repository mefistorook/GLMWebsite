# 🚀 QUICK FIX: Get Emails Working in 5 Minutes

## Current Status
- ✅ Vercel: Frontend hosted at goldlinemanagement.com
- ✅ Emergent: Backend running at asset-performance-1.preview.emergentagent.com
- ✅ Forms: Saving to database
- ⏳ Emails: Need Outlook password

## Get Outlook App Password (2 minutes)

1. **Go to**: https://account.microsoft.com/security
2. **Sign in** with: goldlinemanagement@outlook.com
3. **Click**: "Advanced security options"
4. **Find**: "App passwords" section
5. **Click**: "Create a new app password"
6. **Copy** the password (remove spaces)

## Add Password to Backend (1 minute)

**File**: `/app/backend/.env`

Replace this line:
```
SMTP_PASSWORD=""
```

With:
```
SMTP_PASSWORD="your-app-password-here"
```

## Restart Backend (30 seconds)
```bash
sudo supervisorctl restart backend
```

## Test It! (1 minute)
1. Go to: goldlinemanagement.com/consultation
2. Fill form with "TEST REQUEST"
3. Submit
4. Check: goldlinemanagement@outlook.com inbox

---

## 🎯 IF OUTLOOK BLOCKS APP PASSWORDS

Use **FormSubmit.co** (works instantly, no backend needed):

Update frontend forms to:
```html
<form action="https://formsubmit.co/goldlinemanagement@outlook.com" method="POST">
```

That's it! Emails work immediately.

---

## Current Architecture
```
User fills form on Vercel
    ↓
Submits to Emergent backend
    ↓
Saves to MongoDB + Sends email via SMTP
    ↓
Email arrives at goldlinemanagement@outlook.com
```

**Bottom line**: Add Outlook app password to `/app/backend/.env` and restart!
