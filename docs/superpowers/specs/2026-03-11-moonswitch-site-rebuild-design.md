# Moonswitch Website Rebuild — Design Spec

## Overview

Rebuild the Moonswitch marketing site from archived content (web.archive.org) using Next.js 16 + Tailwind CSS v4 on Vercel's free hobby plan. Same pages and content as the original HubSpot site, with a refreshed visual design aligned to the official Moonswitch brand style guide.

## Brand System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Teal | `#3A728B` | Secondary buttons, links, blockquotes |
| Dark Teal | `#325362` | Header/footer backgrounds, hero overlays |
| Logo Blue | `#6AAACD` | Logo accent, decorative elements |
| Mustard | `#D4A012` | Primary CTA buttons |
| Rose | `#96645E` | Accent (sparingly) |
| Charcoal | `#2E2E2E` | Deep backgrounds |
| Black | `#171717` | Darkest text |
| Dark Grey | `#373737` | Heading text |
| Medium Grey | `#585858` | Paragraph text |
| Grey | `#C5C5C5` | Borders, muted elements |
| Light Grey | `#F5F5F5` | Section backgrounds |
| White | `#FFFFFF` | Primary content background |

### Typography

- **Font family:** Roboto (Google Fonts, loaded via `next/font/google`)
- **Headings:** Roboto Regular, color `#373737`, line-height 1.15
  - H1: 60px (3.75rem), weight 400
  - H2: 38px (2.375rem), weight 400
  - H3: 30px (1.875rem), weight 400
  - H4: 22px (1.375rem), weight 400
  - H5: 18px (1.125rem), weight 400
  - H6: 14px (0.875rem), weight 500, letter-spacing 0.05
- **Body (P1):** Roboto Light, 16px (1rem), weight 300, line-height 1.50, color `#585858`
- **Button labels:** Roboto Regular, 16px, weight 400 (color inherits from button variant — white on filled buttons, `#373737` on ghost/text buttons if added later)
- **Links:** Teal `#3A728B`
- **Blockquotes:** Roboto Medium, 18px, weight 500, color `#3A728B`

### Buttons

- **Primary:** Mustard `#D4A012` background, white text, 30px border-radius
- **Secondary:** Teal `#3A728B` background, white text, 30px border-radius
- **Outline:** Transparent background, white border, white text, 30px border-radius (for dark backgrounds)

## Pages

### 1. Homepage (`/`)

**Sections:**
1. **Hero** — Dark Teal/Charcoal background with rocket illustration (`rocket-brand-color.png`). Headline: "We Are Experts". Subtitle about automated deployments and enabling teams. No CTA button (contact form is excluded).
2. **Service Cards** — 3 cards on white/light grey background:
   - DevOps Consulting (links to `/services/devops-consulting`)
   - Cloud Migration (links to `/services/cloud-migration`)
   - DevOps-as-a-Service (links to `/services/kubernetes`) — note: this label is intentional from the original site; the page itself is titled "Managed Kubernetes Services"
3. **CTA Banner** — Teal background: "Are you ready to launch your team to the next level?" with Mustard "Get Started" button. <!-- TODO: Update link target when contact page is added --> Links to `/about` as a temporary placeholder since contact page is excluded from this phase.

### 2. About (`/about`)

**Sections:**
1. **Hero** — "About MOONSWITCH" heading
2. **The Moonswitch Difference** — Two-column layout. Left: heading, subheading about cloud technology as foundation for growth, body text about customer-centric approach. Right: decorative image or illustration.
3. **Why Moonswitch** — "Why MOONSWITCH" heading, then 5 value cards in a grid:
   - Expertise
   - Customized Solutions
   - Proven Track Record
   - Partnership
   - Innovation
   Each card: icon + heading + description paragraph.

### 3. DevOps Consulting (`/services/devops-consulting`)

**Sections:**
1. **Hero** — "DevOps Consulting" heading with description about optimizing software development lifecycle.
2. **Why DevOps** — "DevOps is critical to successful software development" with intro paragraph and 4 accordion items:
   - DevOps improves collaboration
   - DevOps leverages automation
   - DevOps enables continuous improvement
   - DevOps focuses on customers
3. **Challenges Grid** — "DevOps Consulting Services Address Multiple Challenges" with 9 challenge cards in a 3x3 grid:
   - Delayed software updates
   - Slow IT infrastructure implementation
   - Lack of Collaboration Across Production Environment
   - Delayed Bug Fixing
   - Inefficient Testing Processes
   - Lack of Automation
   - Slow Software Delivery
   - Decreased Software Quality
   - Inferior User Experiences
4. **Approach** — "The Moonswitch DevOps Approach" with 4 accordion steps:
   - Initial Assessment
   - Roadmap and DevOps Implementation
   - Optimization
   - Support
5. **FAQ** — "DevOps Consulting FAQ" with 3 accordion items
6. **CTA Banner** — "Maximize Your DevOps Strategy with Moonswitch"

### 4. Managed Kubernetes (`/services/kubernetes`)

**Sections:**
1. **Hero** — "Managed Kubernetes Services" heading with description about deploying and scaling containerized applications.
2. **Key Capabilities** — 6 capability cards in a 3x2 grid:
   - Lifecycle Management
   - Auto-scaling
   - Resilience and Self-Healing
   - Persistent Storage
   - Declarative Model
   - Load Balancing
3. **Managed Services Detail** — "We Take Care of Kubernetes So You Can Focus on Development" with bullet points: Remote Monitoring 24/7, Expert Issue Resolution, Automated Troubleshooting.
4. **FAQ** — "Managed Kubernetes FAQ" with 3 accordion items
5. **CTA Banner** — "Maximize the Benefits of Kubernetes with Expert Managed Services"

### 5. Cloud Migration (`/services/cloud-migration`)

**Sections:**
1. **Hero** — "Cloud Migration Services" heading with description about achieving benefits of cloud with expert migration.
2. **Strategy Section** — "Strategic cloud migration is more than just a moving service" with two paragraphs about going beyond lift-and-shift.
3. **AWS Partner Badge** — Moonswitch as AWS Select Tier Partner with description.
4. **Benefits Grid** — "Benefits of Strategic Cloud Migration Services" with 4 benefit cards:
   - Improved Performance and Security
   - Lowered Costs
   - Better Interoperability
   - Easy Scalability
5. **Approach** — "The Moonswitch Approach to Cloud Migration" with 3 steps: Assessment, Development, Deployment and Testing.
6. **FAQ** — "Cloud Migration Services FAQ" with 4 accordion items
7. **CTA Banner** — "Ready to start maximizing the benefits of the cloud?"

## Shared Components

### Header
- Dark Teal (`#325362`) background
- Moonswitch logo: use `Moonswitch Logos/Logo White/wordmark.svg` (full logo with text) for header
- Navigation: Services (dropdown with 3 service links), About
- Sticky on scroll
- Mobile: hamburger menu

### Footer
- Charcoal (`#2E2E2E`) background
- Moonswitch logo: use `Moonswitch Logos/Logo White/wordmark.svg` (same as header)
- Address: 2420 Springer Drive, Suite 218, Norman, OK 73069
- AWS Select Tier Partner badge
- Services links column
- Social: LinkedIn icon
- Copyright: © {current year} Moonswitch Software, LLC (render dynamically via `new Date().getFullYear()`)
- Privacy Policy / Terms of Use (placeholder links)

### Hero Section (reusable)
- Dark Teal to Charcoal gradient background
- Homepage hero includes rocket image positioned right
- Service page heroes: text only with subtle gradient
- H1 heading, optional subtitle, optional CTA button

### CTA Banner (reusable)
- Teal (`#3A728B`) background
- Centered H2 heading
- Optional Mustard CTA button below
- Full-width section

### FAQ Accordion (reusable)
- Question as H4 with expand/collapse toggle
- Answer as body text, hidden by default
- Smooth expand animation
- Used on all 3 service pages

### Service Card (reusable)
- Icon area (SVG or emoji placeholder initially)
- H4 heading
- Body text description
- Light border or subtle shadow on white background
- Hover state with slight lift

## Technical Decisions

### Assets
- **Logo SVGs:** Copy from `Moonswitch Logos/` into `public/images/`
- **Rocket image:** Copy `rocket-brand-color.png` into `public/images/`
- **Service icons:** Use simple SVG icons (Lucide or similar) — the original HubSpot icons are not recoverable from the archive
- **Team photos:** Excluded — no team section
- **AWS badge:** Recreate as text + styling or source the AWS partner badge SVG

### Font Loading
- Replace Geist with Roboto via `next/font/google` in `layout.tsx`
- Load weights: 300 (Light), 400 (Regular), 500 (Medium)

### Routing
```
src/app/
├── layout.tsx          (root layout with Header + Footer)
├── page.tsx            (homepage)
├── about/
│   └── page.tsx
└── services/
    ├── devops-consulting/
    │   └── page.tsx
    ├── kubernetes/
    │   └── page.tsx
    └── cloud-migration/
        └── page.tsx
```

### Shared Components
```
src/components/
├── Header/
│   ├── Header.tsx
│   └── index.ts
├── Footer/
│   ├── Footer.tsx
│   └── index.ts
├── Hero/
│   ├── Hero.tsx
│   └── index.ts
├── CtaBanner/
│   ├── CtaBanner.tsx
│   └── index.ts
├── FaqAccordion/
│   ├── FaqAccordion.tsx
│   └── index.ts
└── ServiceCard/
    ├── ServiceCard.tsx
    └── index.ts
```

### Styling
- Tailwind CSS v4 with custom theme colors matching the brand palette
- Define brand colors in `globals.css` `@theme` block
- No CSS modules, no styled-components
- Responsive breakpoints: mobile-first, tablet (768px), desktop (1024px), wide (1280px)

### Static Generation
- All pages are static (no dynamic data, no API routes)
- Compatible with Vercel free hobby plan limits
- `next build` produces fully static output

### SEO
- Each page gets a unique `<title>` derived from its H1 heading (e.g., "DevOps Consulting | Moonswitch")
- `meta description` uses the first subtitle/paragraph text from each page's hero
- Use Next.js `metadata` export in each `page.tsx`
- Open Graph tags: title, description, and a default OG image (rocket image or logo)

### Dark Mode
- Out of scope. Remove the `prefers-color-scheme: dark` media query from `globals.css`. Light mode only.

### Error Pages
- Out of scope. Use Next.js default 404 page for now.

### Future Work
- Contact page with form
- Blog section
- Careers page
- Custom branded 404 page
- Dark mode support
