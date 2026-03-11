# Moonswitch Website

Marketing site for Moonswitch. Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript. Deployed on Vercel free tier.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build (static export)
- `npm run lint` — ESLint with Next.js core-web-vitals + TypeScript rules
- `npx next lint --file <path>` — Lint a single file

## Architecture

- `src/app/` — Pages (App Router)
- `src/components/` — Shared components (named exports, no default exports)
- `public/images/` — Static assets (logos, rocket image)
- `docs/superpowers/specs/` — Design specs

## Brand Assets (source files)

- `Moonswitch Logos/` — SVG, PNG, EPS logos in Color/White/Black variants
- `Moonswitch Style Guide.pdf` — Official brand guide (colors, typography, CTAs)
- `rocket-brand-color.png` — Hero rocket illustration

## Hooks

- **PreToolUse:** Blocks edits to `package-lock.json` and `.env` files
- **PostToolUse:** Auto-lints `.ts/.tsx/.js/.jsx/.mjs` files after edit

## Design Spec

See `docs/superpowers/specs/2026-03-11-moonswitch-site-rebuild-design.md` for full spec.

## Brand System

- **Font:** Roboto (300, 400, 500) via `next/font/google`
- **Primary colors:** Teal `#3A728B`, Dark Teal `#325362`, Logo Blue `#6AAACD`
- **Accents:** Mustard `#D4A012` (primary CTA), Rose `#96645E`
- **Text:** Headings `#373737`, Body `#585858`
- **Backgrounds:** Charcoal `#2E2E2E`, Light Grey `#F5F5F5`, White `#FFFFFF`
- **Buttons:** 30px border-radius, Mustard primary, Teal secondary

## Code Style

- Named exports only (no default exports for components)
- Tailwind CSS classes for all styling (no CSS modules, no styled-components)
- Components in `ComponentName/ComponentName.tsx` + `index.ts` barrel
- Import alias: `@/*` maps to `./src/*`
- Light mode only (no dark mode)
