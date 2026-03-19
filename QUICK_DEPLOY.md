# ⚡ QUICK DEPLOY GUIDE - info@goldlinemanagement.com

## ✅ UPDATED TO: info@goldlinemanagement.com

### 🔥 OPTION 1: EMERGENT (Current - Already Working!)

**Backend is LIVE:** https://asset-performance-1.preview.emergentagent.com

**Test it now:**
```bash
curl -X POST "https://asset-performance-1.preview.emergentagent.com/api/consultation" \
-H "Content-Type: application/json" \
-d '{
  "name": "Test",
  "email": "test@test.com",
  "phone": "+353123456789",
  "message": "Test message"
}'
```

**Check:** info@goldlinemanagement.com inbox

---

## 🚀 OPTION 2: VERCEL SERVERLESS

### Environment Variables (Vercel Dashboard):
```
OUTLOOK_EMAIL=info@goldlinemanagement.com
OUTLOOK_AUTH_KEY=lkeoqatzbsqakkwv
```

### Deploy:
```bash
git add .
git commit -m "Update to info@goldlinemanagement.com"
git push
```

**Vercel auto-deploys!**

---

## 📋 WHAT'S UPDATED:

✅ Backend `.env`: info@goldlinemanagement.com
✅ Email service: Updated sender
✅ Server endpoints: Send to info@goldlinemanagement.com
✅ Footer: Shows info@goldlinemanagement.com
✅ Vercel functions: Ready for info@goldlinemanagement.com

---

## 🎯 CURRENT STATUS:

**Emergent Backend:**
- ✅ Running
- ✅ Emails configured
- ✅ Ready to receive form submissions

**Vercel Frontend:**
- ✅ Code updated
- ⏳ Push to GitHub to deploy
- ⏳ Add env vars in Vercel Dashboard

---

## ⚡ FASTEST PATH TO LIVE:

**Since Emergent is already working:**

1. Your Vercel frontend can call Emergent backend:
   - Set in Vercel: `REACT_APP_BACKEND_URL=https://asset-performance-1.preview.emergentagent.com`
   - Forms POST to Emergent
   - Emails work immediately!

2. **OR** use Vercel serverless:
   - Add 2 env vars to Vercel
   - Push code
   - Serverless functions handle emails

**Recommendation: Use Emergent backend (already working!)**

Just set `REACT_APP_BACKEND_URL` in Vercel and you're DONE! ⚡
