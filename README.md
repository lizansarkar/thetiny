# TheTiny - Modern URL Shortener & Link Management Platform

![Next.js](https://img.shields.io/badge/Next.js-16.4.4-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.3.1-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat&logo=typescript)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Radix%20Nova-black?style=flat)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=flat&logo=vercel)

A pixel-perfect, high-performance web application built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **shadcn/ui** components. Designed for creators, marketing teams, and enterprises to shorten URLs, monitor real-time analytics, generate customizable QR codes, and manage branded links with speed and security.

---

## 🌐 Live Demo & Deployment

- **GitHub Repository**: [https://github.com/lizansarkar/thetiny](https://github.com/lizansarkar/thetiny)
- **Live Deployment**: [https://thetiny.vercel.app](https://thetiny.vercel.app) *(or your Vercel project deployment URL)*

---

## ✨ Features & Sections

- **Header & Responsive Navigation**: Clean brand identity with `#5B21F3` logo icon, desktop links (**Home**, **About**, **Blog**, **Pricing**), **Sign In** and **Get Started Free** buttons, plus a mobile navigation drawer.
- **Hero Section**: 
  - Eyebrow badge: `✨ URL Shortener & Link Management`
  - Bold headline: **Shorten Your URL in seconds**
  - Interactive floating login card with lavender padlock icon, feature overview, and quick auth actions.
- **Platform Metrics Bar**: Full-width electric purple (`#5B21F3`) banner highlighting **100K+ Active Users**, **1M+ Links Created**, **180+ Countries**, and **99.9% Uptime**.
- **Most Popular Links**:
  - Live link cards displaying shortened aliases, destination URLs, and click counters.
  - Interactive **Copy** button with instant clipboard confirmation.
  - Interactive **QR** button opening an SVG QR Code modal with instant download.
- **Growth & Analytics Suite**:
  - Value proposition breakdown featuring custom branded domains, password protection, and team collaboration.
  - Stylized **Real-Time Analytics Dashboard** card showcasing organic, social, and referral traffic volume with progress indicators.
- **Pricing Tiers**:
  - **Free ($0/mo)**: Personal use and experimentation.
  - **Pro ($9/mo - Featured)**: Elevated purple card for creators and growing teams with advanced tracking and custom domains.
  - **Enterprise ($29/mo)**: Dedicated SLAs, unlimited domains, and API access.
- **Social Proof & Testimonials**: 5-star customer review showcase matching the reference design layout.
- **"Why Choose Our Platform?" Grid**: 6 feature highlights including Lightning Fast edge redirects, Detailed Analytics, Global CDN, QR generation, Enterprise Security, and Link Expiration Control.
- **Footer**: Company overview, social media channels (X/Twitter, GitHub, LinkedIn, Discord), direct email/phone contact, comprehensive Product and Company navigation, and copyright bar.
- **Interactive Modals**:
  - Dynamic QR Code generation dialog with download and link copy support.
  - Authentication modal with seamless Log In and Sign Up toggling.

---

## 🎨 Design System & CSS Tokens

This project adheres strictly to **CSS design tokens** defined in [`app/globals.css`](./app/globals.css):

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--brand-purple` | `#5B21F3` | Primary brand accent & button fill |
| `--brand-purple-dark` | `#4B14D9` | Button hover and active states |
| `--brand-purple-light`| `#EDE8FE` | Light lavender icon backgrounds and badges |
| `--brand-purple-subtle` | `#F5F3FF` | Card hover tints and selection states |
| `--page-tint` | `#F4F5FD` | Hero background gradient tint |
| `--foreground` | `#090D16` | High-contrast heading typography |
| `--muted-foreground` | `#64748B` | Secondary body text and labels |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (Turbopack)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (`Button`, `Card`, `Badge`, `Dialog`, `Input`)
- **Primitives**: Radix UI
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google`

---

## 🚀 Getting Started

### Prerequisites

- Node.js `20.x` or `22.x`
- npm or pnpm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/lizansarkar/thetiny.git
cd thetiny
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Build for production

```bash
npm run build
npm run start
```

### 5. Quality checks

```bash
# Typecheck
npm run typecheck

# Linting
npm run lint
```

---

## 🚢 Vercel Deployment Guide

This repository is ready for zero-configuration deployment on **Vercel**:

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import the **`lizansarkar/thetiny`** repository.
4. Keep the default settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click **Deploy**. Vercel will build and assign your production URL (e.g., `https://thetiny.vercel.app`).

Subsequent pushes to the `main` branch will automatically trigger automated production deployments.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
