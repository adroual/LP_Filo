# Agent Instructions - Filo Marketing Website

## Tech Stack
Next.js 16, React 19, TypeScript (strict), Tailwind CSS 4, ESLint 9, Inter font

## Build Commands
- `npm run dev` - Start dev server at http://localhost:3000
- `npm run build` - Production build (validates all pages)
- `npm run lint` - Run ESLint (no test suite yet)

## Code Style
- **Imports**: Use `@/*` alias for src/, explicit `type` imports (e.g., `import type { Metadata } from "next"`)
- **Components**: Default exports for pages/layouts, PascalCase function names, TypeScript strict mode
- **Images**: Always use Next.js `Image` component with `fill` prop and proper aspect ratios
- **Styling**: Tailwind utility-first with exact Luna-style classes (e.g., `text-[33px]`, `font-black`, `rounded-[40px]`)
- **Typography**: Inter font family - use font-black (900) for headlines, font-semibold (600) for subheads, font-medium (500) for body
- **Naming**: kebab-case files, camelCase variables, PascalCase components
- **Max Width**: Use `max-w-[1200px]` for all main content containers (Luna standard)

## Design System (Luna Clone)
- **Filo Color Palette**: 50: #F4FBF8, 100: #E5F5EF, 500: #0F4631 (primary), 600: #0D3727 (hover)
- **Spacing**: Generous padding - `py-10 sm:py-16 lg:py-20` for sections, `px-5 sm:px-10` for containers
- **Cards**: Light green bg (#F4FBF8), rounded-xl, contain iPhone mockups at 80% width, 320px height
- **Buttons**: Pill-shaped `rounded-[40px]`, primary uses #0F4631, hover uses #0D3727 with shadow-lg
- **Typography Scale**: Hero: 65px/41px/33px (lg/sm/xs), Section: 44px/36px/23px, Body: 20px/16px/14px
- **iPhone Mockups**: aspect-[0.507/1] ratio, displayed prominently in hero and feature cards

## Project Structure
- `src/app/` - Next.js App Router pages (/, /pricing, /about, /guide, /support, /legal/*)
- `src/components/layout/` - Header (sticky), Footer (warm beige #FBFAF9)
- `public/` - Static assets (filo-icon.png, filo-splash-screen-color.svg)
- `illustrations/` - Brand SVG assets for empty states and mascot
