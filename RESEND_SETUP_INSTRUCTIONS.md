# 📧 Resend Email Setup Instructions

## ✅ What We've Done:
1. ✓ Installed Resend package
2. ✓ Created API route with beautiful HTML email template
3. ✓ Updated all three forms to use Resend
4. ✓ Added proper error handling

## 🔑 What YOU Need to Do:

### Step 1: Create Resend Account (FREE - 3,000 emails/month)

1. **Go to:** https://resend.com/signup
2. **Sign up** using your email or GitHub
3. **Verify your email** address

### Step 2: Get Your API Key

1. **After signing in**, you'll see the dashboard
2. **Click on "API Keys"** in the left sidebar
3. **Click "+ Create API Key"**
4. **Give it a name:** `EV-ONN Website`
5. **Copy the API key** (starts with `re_...`)
   - ⚠️ **IMPORTANT:** You can only see this ONCE!

### Step 3: Add API Key to Your Project

1. **Create a file** named `.env.local` in your project root (if it doesn't exist)
2. **Add this line:**
   ```
   RESEND_API_KEY=re_YOUR_API_KEY_HERE
   ```
3. **Replace** `re_YOUR_API_KEY_HERE` with your actual API key

**Example `.env.local` file:**
```env
RESEND_API_KEY=re_AbCd1234EfGh5678IjKl9012MnOp3456
```

### Step 4: Update Email Sender (IMPORTANT!)

By default, Resend uses `onboarding@resend.dev` for testing. This works fine for testing, but emails might go to spam.

**For Production (Recommended):**

#### Option A: Use Your Own Domain (Best)
1. Go to Resend Dashboard → Domains
2. Click "Add Domain"
3. Add your domain (e.g., `evonn.in`)
4. Follow DNS verification steps
5. Update the API route to use: `noreply@evonn.in`

#### Option B: Keep Test Email (Quick Start)
- Keep using `onboarding@resend.dev`
- Works immediately
- Some emails may go to spam
- Good for testing

### Step 5: Test The Forms

1. **Restart your dev server:**
   ```bash
   npm run dev
   ```

2. **Test each form:**
   - Contact Form
   - Location Partner Form  
   - Franchisee Form

3. **Check your inbox:** `evonnchargingsolutions@gmail.com`
   - Look in **Inbox**
   - Check **Spam/Junk** folder
   - Check **Promotions** tab (Gmail)

## 📁 File Structure:

```
.env.local                              # ADD THIS FILE (don't commit to git!)
├── RESEND_API_KEY=re_xxxxx
│
src/app/api/send-email/
├── route.ts                            # ✅ Updated with Resend
│
src/components/contact/
├── ContactForm.tsx                     # ✅ Updated
│
src/app/business/location-partner/
├── page.tsx                            # ✅ Updated
│
src/app/business/franchisee/
├── page.tsx                            # ✅ Updated
```

## 🎨 Email Template Features:

Your emails will now look **professional** with:
- ✅ EV-ONN branded header with green theme
- ✅ Organized field layout
- ✅ Clickable email and phone links
- ✅ Beautiful styling that works in all email clients
- ✅ Reply-to customer email automatically set

## 🔍 Troubleshooting:

### Error: "Resend API key not found"
- Make sure `.env.local` file exists
- Check the variable name is exactly: `RESEND_API_KEY`
- Restart your development server after creating `.env.local`

### Emails not arriving:
1. Check spam folder
2. Verify API key is correct
3. Check Resend dashboard for delivery logs
4. Make sure you didn't exceed the 3,000/month limit

### "Failed to send" error:
- Check browser console for detailed error
- Verify `.env.local` is in the root directory
- Restart the dev server

## 🚀 Benefits of Resend over Web3Forms:

✅ **3,000 emails/month** (vs 250 for Web3Forms free)
✅ **No verification issues**
✅ **Beautiful HTML emails**
✅ **Better deliverability**
✅ **Detailed delivery logs**
✅ **Custom domain support**
✅ **Developer-friendly API**
✅ **React Email support** (for even more advanced templates)

## 📞 Next Steps:

1. Create Resend account
2. Get API key
3. Add to `.env.local`
4. Restart server
5. Test forms
6. Check emails!

That's it! 🎉
