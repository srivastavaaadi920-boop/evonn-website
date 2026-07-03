# Web3Forms Email Setup Instructions

## ⚠️ CRITICAL: Access Key Verification Required

Your forms are submitting successfully, but emails aren't arriving because **the access key needs to be verified**.

## Step-by-Step Setup:

### 1. Go to Web3Forms Website
Visit: https://web3forms.com

### 2. Create/Verify Access Key
- Click on "Create your Access Key"
- Enter email: **evonnchargingsolutions@gmail.com**
- Submit the form

### 3. Check Email Inbox
- Open the inbox for: **evonnchargingsolutions@gmail.com**
- Look for verification email from Web3Forms
- **Check Spam/Junk folder** if not in inbox
- **Check Promotions/Updates tab** if using Gmail

### 4. Click Verification Link
- Open the verification email
- Click the verification link
- This activates your access key

### 5. Test the Forms
Once verified, test each form:
- Contact Form
- Location Partner Form
- Franchisee Form

## Current Configuration:
```
Access Key: 181b31cb-c05a-4496-a851-e3725d26d6c4
Recipient Email: evonnchargingsolutions@gmail.com
```

## Troubleshooting:

### If emails still don't arrive:

1. **Check ALL email folders:**
   - Inbox
   - Spam/Junk
   - Promotions (Gmail)
   - Updates (Gmail)
   - Social (Gmail)

2. **Verify the access key is correct:**
   - Log into https://web3forms.com
   - Check if the key matches: `181b31cb-c05a-4496-a851-e3725d26d6c4`

3. **Create a NEW access key:**
   If the current key doesn't work:
   - Go to https://web3forms.com
   - Create a NEW access key
   - Update it in all three files:
     - `src/components/contact/ContactForm.tsx`
     - `src/app/business/location-partner/page.tsx`
     - `src/app/business/franchisee/page.tsx`

4. **Test with a simple form:**
   Go to https://web3forms.com and use their demo form to verify your email is receiving messages.

## Alternative Solution: Use a Different Email Service

If Web3Forms doesn't work after verification, consider these alternatives:

### Option 1: Formspree (Free Plan)
- Website: https://formspree.io
- No verification required
- 50 submissions/month free

### Option 2: EmailJS (Free Plan)
- Website: https://www.emailjs.com
- 200 emails/month free
- More configuration options

### Option 3: Resend (Developer Friendly)
- Website: https://resend.com
- 3,000 emails/month free
- Best for production

## Need Help?
If you need to switch to a different email service, let me know and I'll update the code.
