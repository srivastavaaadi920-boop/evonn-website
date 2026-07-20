# ⚡ EV-ONN — Powering the Future of EV Infrastructure

> Complete EV Charging Solutions — From Smart Chargers to Full EV Station Setup.  
> Specializing in AC/DC Chargers, Transformers, and HVLS Fans.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 15.x | React Framework (App Router) |
| [React](https://react.dev) | 19.x | UI Library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Utility-first Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Animations |
| [GSAP](https://greensock.com/gsap/) | 3.x | Advanced Animations |
| [Lucide React](https://lucide.dev) | 0.456.x | Icon Library |
| [Resend](https://resend.com) | 6.x | Email (Contact Form) |

---

## 📁 Project Structure

```
ev-onn-website/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── about/                  # About page
│   │   ├── blogs/                  # Blogs page
│   │   ├── business/               # Business page
│   │   ├── contact/                # Contact page
│   │   ├── ev-station-setup/       # EV Station Setup page
│   │   ├── media/                  # Media page
│   │   ├── products/               # Products page
│   │   ├── projects/               # Projects page
│   │   ├── services/               # Services page
│   │   ├── api/                    # API routes (contact form)
│   │   ├── layout.tsx              # Root layout (Navbar, Footer, etc.)
│   │   ├── page.tsx                # Home page
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── home/                   # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutOverview.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ServicesBrief.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── IndustriesWeServe.tsx
│   │   │   ├── PartnerSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TrustedBy.tsx
│   │   │   ├── BlogBrief.tsx
│   │   │   ├── ContactPreview.tsx
│   │   │   └── FAQ.tsx
│   │   ├── layout/                 # Navbar & Footer
│   │   ├── common/                 # Shared UI (WhatsApp button, scroll bar)
│   │   ├── about/                  # About page components
│   │   ├── contact/                # Contact page components
│   │   ├── services/               # Services page components
│   │   └── LoadingScreen.tsx       # Animated loading screen
│   └── data/                       # Static data / content
├── public/                         # Static assets (images, icons)
├── .env.local                      # Local environment variables (gitignored)
├── .env.local.example              # Environment variables template
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** `>= 9.x` (or yarn / pnpm / bun)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ev-onn-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
# Resend API Key — get yours at https://resend.com/api-keys
RESEND_API_KEY=re_YOUR_API_KEY_HERE
```

> See [RESEND_SETUP_INSTRUCTIONS.md](./RESEND_SETUP_INSTRUCTIONS.md) for detailed email setup guidance.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## 🌐 Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — Hero, Services, Products, Partners, FAQ |
| `/about` | About EV-ONN — Mission, Team, Story |
| `/services` | EV Charging Services |
| `/products` | AC/DC Chargers, Transformers, HVLS Fans |
| `/projects` | Completed & Ongoing Projects |
| `/ev-station-setup` | Full EV Station Setup Guide |
| `/business` | Business / B2B Enquiries |
| `/blogs` | News & Insights |
| `/media` | Photos & Media Gallery |
| `/contact` | Contact Form |

---

## 📧 Email / Contact Form Setup

The contact form uses **Resend** for transactional email.

1. Create a free account at [resend.com](https://resend.com)
2. Generate an API key
3. Add it to `.env.local` as `RESEND_API_KEY`

Full instructions: [RESEND_SETUP_INSTRUCTIONS.md](./RESEND_SETUP_INSTRUCTIONS.md)  
Alternative (Web3Forms): [WEB3FORMS_SETUP_INSTRUCTIONS.md](./WEB3FORMS_SETUP_INSTRUCTIONS.md)

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/new)
3. Add `RESEND_API_KEY` in **Project Settings → Environment Variables**
4. Deploy 🎉

> See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options.

---

## 🔑 Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | ✅ Yes | Resend API key for contact form emails |

---

## 📄 Additional Documentation

- [QUICK_START.md](./QUICK_START.md) — Fast setup guide
- [PDF_BROCHURE_SETUP.md](./PDF_BROCHURE_SETUP.md) — PDF brochure integration
- [RESEND_SETUP_INSTRUCTIONS.md](./RESEND_SETUP_INSTRUCTIONS.md) — Email (Resend) setup
- [WEB3FORMS_SETUP_INSTRUCTIONS.md](./WEB3FORMS_SETUP_INSTRUCTIONS.md) — Alternative email (Web3Forms)

---

## 📝 License

This project is proprietary and owned by **EV-ONN**. All rights reserved.

---

<p align="center">Built with ⚡ by the EV-ONN Team</p>
