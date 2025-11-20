# Filo Marketing Website

A clean, modern marketing website for Filo - an AI meeting assistant for iPhone.

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS 4**
- **ESLint 9**

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Visit `http://localhost:3000` to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── guide/             # Getting started guide
│   ├── legal/             # Legal pages
│   │   ├── privacy/       # Privacy policy
│   │   └── terms/         # Terms of service
│   ├── pricing/           # Pricing page
│   ├── support/           # Support page
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
└── components/
    └── layout/            # Layout components
        ├── Header.tsx     # Navigation header
        └── Footer.tsx     # Site footer
```

## Brand Colors

- **Primary CTA**: `#0F4631` (dark green)
- **Logo/Hover**: `#004730` (darker green)
- **Background**: `#F8FAF9` (light green tint)

## Pages

- **Home** (`/`) - Hero, features, founder story, CTA sections
- **Pricing** (`/pricing`) - Free vs Pro plans with FAQ
- **About** (`/about`) - Company mission and founder story
- **Guide** (`/guide`) - Getting started and feature documentation
- **Support** (`/support`) - FAQ and contact information
- **Privacy** (`/legal/privacy`) - Privacy policy
- **Terms** (`/legal/terms`) - Terms of service

## Design Reference

The design is a clone of [Luna Budget](https://lunabudgeting.com/) adapted for Filo:
- **Typography**: Inter font family (400, 500, 600, 700, 900 weights)
- **Large iPhone mockups** prominently displayed in feature cards
- **Warm background colors** using Filo's green palette (#F4FBF8, #FBFAF9)
- **Clean cards** with app screenshots inside rounded containers
- **Plenty of white space** and generous padding
- **Bold headlines** (65px desktop, 33px mobile) with Inter Black (900 weight)
- **Medium body text** (500 weight) for readability
- **Smooth hover effects** and transitions

## App Store Requirements

All required pages for Apple App Store submission are included:
- Privacy Policy
- Terms of Service
- Support/Contact page

## Deployment

This site is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any static hosting service supporting Next.js

## Notes

- All pages are statically generated for optimal performance
- Images use Next.js Image component for optimization
- SEO metadata is configured for all pages
- Fully responsive design for mobile, tablet, and desktop
