# 📄 EV-ONN Company Brochure Download Setup

## ✅ What's Been Done:

1. ✅ **Download button added to Home page** (Hero section)
2. ✅ **Download button added to About page** (Top hero section)
3. ✅ **Created documents folder** in public directory
4. ✅ **Styled buttons** with download icon and hover effects

## 📥 How to Complete the Setup:

### Step 1: Save Your PDF File

You have a company profile PDF with this information:
- **File name**: `ev-onn-company-profile (1).pdf`
- **Content**: 18-page company profile

### Step 2: Rename and Place the PDF

1. **Rename your PDF file to:**
   ```
   ev-onn-company-profile.pdf
   ```

2. **Place it in this folder:**
   ```
   public/documents/ev-onn-company-profile.pdf
   ```

### Step 3: Test the Download

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit your website and test the download buttons on:
   - **Home Page**: Scroll to hero section
   - **About Page**: Top of the page

3. Click "Download Brochure" - it should download the PDF!

## 📍 Button Locations:

### Home Page (Hero Section)
```
Hero Section
├── Get Free Consultation (Primary button)
├── Explore Products (Outline button)
└── Download Brochure (NEW - Outline button with download icon)
```

### About Page (Hero Section)
```
About Hero Section
└── Download Brochure (White button with green border)
```

## 🎨 Button Styling:

Both buttons feature:
- ✅ Download icon (from lucide-react)
- ✅ Professional styling matching your brand
- ✅ Hover effects
- ✅ Responsive design
- ✅ Opens PDF in new tab / downloads directly

## 📂 File Structure:

```
your-project/
├── public/
│   ├── documents/
│   │   ├── ev-onn-company-profile.pdf  ← PLACE YOUR PDF HERE
│   │   └── PLACE_PDF_HERE.txt
│   └── images/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx  ← Download button added
│   │   └── page.tsx
│   └── components/
│       └── home/
│           └── Hero.tsx  ← Download button added
```

## ✨ Features:

1. **Automatic Download**: When users click, PDF downloads with filename "EV-ONN-Company-Profile.pdf"
2. **Professional Design**: Matches your site's green (#22C55E) brand color
3. **Icon**: Download icon for clear visual indication
4. **Accessible**: Works on all devices and browsers

## 🔧 Troubleshooting:

### PDF Not Downloading?
1. Make sure the PDF is named exactly: `ev-onn-company-profile.pdf`
2. Make sure it's in: `public/documents/` folder
3. Restart your dev server: `npm run dev`

### Button Not Showing?
1. Check if you saved the files
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors

## 📄 PDF Content Summary:

Your company profile includes:
- Company Overview
- Vision & Mission
- Products (AC Chargers, DC Fast Chargers, CMS, IoT)
- Technical Specifications
- Highway Charging Station Layouts
- Contact Information

Perfect for potential clients, partners, and investors!

## 🚀 You're All Set!

Just place the PDF file in the correct location and the download feature will work perfectly!
