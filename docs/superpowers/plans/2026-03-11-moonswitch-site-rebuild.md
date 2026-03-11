# Moonswitch Website Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Moonswitch marketing site (5 pages) with refreshed design using the official brand style guide.

**Architecture:** Next.js 16 App Router with shared layout (Header + Footer), reusable components (Hero, CtaBanner, FaqAccordion, ServiceCard), and static generation. All styling via Tailwind CSS v4 with brand colors defined in the theme.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Roboto (Google Fonts)

**Spec:** `docs/superpowers/specs/2026-03-11-moonswitch-site-rebuild-design.md`

---

## Chunk 1: Foundation (Sequential — must complete before pages)

### Task 1: Assets and Brand Theme Setup

Copy brand assets into `public/` and configure the Tailwind theme with brand colors, typography, and remove dark mode.

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Create: `public/images/logo-white-wordmark.svg` (copy from `Moonswitch Logos/Logo White/wordmark.svg`)
- Create: `public/images/logo-white-icon.svg` (copy from `Moonswitch Logos/Logo White/icon.svg`)
- Create: `public/images/logo-color-wordmark.svg` (copy from `Moonswitch Logos/Logo Color/wordmark.svg`)
- Create: `public/images/rocket-brand-color.png` (copy from `rocket-brand-color.png`)
- Delete: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

- [ ] **Step 1: Copy brand assets into `public/images/`**

```bash
mkdir -p public/images
cp "Moonswitch Logos/Logo White/wordmark.svg" public/images/logo-white-wordmark.svg
cp "Moonswitch Logos/Logo White/icon.svg" public/images/logo-white-icon.svg
cp "Moonswitch Logos/Logo Color/wordmark.svg" public/images/logo-color-wordmark.svg
cp rocket-brand-color.png public/images/rocket-brand-color.png
rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

- [ ] **Step 2: Replace `globals.css` with brand theme**

Replace entire contents of `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme inline {
  --color-teal: #3A728B;
  --color-dark-teal: #325362;
  --color-logo-blue: #6AAACD;
  --color-mustard: #D4A012;
  --color-rose: #96645E;
  --color-charcoal: #2E2E2E;
  --color-black: #171717;
  --color-dark-grey: #373737;
  --color-medium-grey: #585858;
  --color-grey: #C5C5C5;
  --color-light-grey: #F5F5F5;
  --font-sans: var(--font-roboto);
}

/* Base typography per brand style guide */
body {
  background: #ffffff;
  color: #585858;
  font-weight: 300;
  line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
  color: #373737;
  font-weight: 400;
  line-height: 1.15;
}

h1 { font-size: 3.75rem; }
h2 { font-size: 2.375rem; }
h3 { font-size: 1.875rem; }
h4 { font-size: 1.375rem; }
h5 { font-size: 1.125rem; }
h6 { font-size: 0.875rem; font-weight: 500; letter-spacing: 0.05em; }

a {
  color: #3A728B;
}

blockquote {
  color: #3A728B;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.5;
}
```

- [ ] **Step 3: Update `layout.tsx` — swap Geist for Roboto, update metadata**

Replace entire contents of `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Moonswitch - Cloud Strategy, DevOps, Managed Kubernetes",
  description:
    "Moonswitch provides expert DevOps consulting, managed Kubernetes services, and cloud migration solutions to help your team deliver quickly and reliably.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: Successful build with no errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: set up brand theme, assets, and Roboto font"
```

---

### Task 2: Header Component

**Files:**
- Create: `src/components/Header/Header.tsx`
- Create: `src/components/Header/index.ts`

- [ ] **Step 1: Create Header component**

The Header should have:
- Dark Teal (`#325362`) background
- White wordmark logo SVG (link to `/`)
- Desktop nav: "Services" dropdown (3 service links) + "About" link
- Mobile: hamburger menu with slide-out nav
- Sticky positioning on scroll
- Max-width container centered

Refer to spec section "Shared Components > Header" for exact nav structure:
- Services dropdown: DevOps Consulting (`/services/devops-consulting`), Managed Kubernetes (`/services/kubernetes`), Cloud Migration (`/services/cloud-migration`)
- About (`/about`)

- [ ] **Step 2: Create barrel export**

`src/components/Header/index.ts`:
```ts
export { Header } from "./Header";
```

- [ ] **Step 3: Verify it renders — add to layout temporarily**

Import Header in `src/app/layout.tsx` and add `<Header />` above `{children}`. Run `npm run dev` and visually verify in browser.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header/ src/app/layout.tsx
git commit -m "feat: add Header component with nav and mobile menu"
```

---

### Task 3: Footer Component

**Files:**
- Create: `src/components/Footer/Footer.tsx`
- Create: `src/components/Footer/index.ts`

- [ ] **Step 1: Create Footer component**

The Footer should have:
- Charcoal (`#2E2E2E`) background, white text
- Three-column layout on desktop:
  - Column 1: Logo, address (2420 Springer Drive, Suite 218, Norman, OK 73069), AWS Select Tier Partner text badge
  - Column 2: "Services" heading with links to all 3 service pages
  - Column 3: LinkedIn social icon link
- Bottom bar: "Privacy Policy" and "Terms of Use" (placeholder `#` links) + `© {new Date().getFullYear()} Moonswitch Software, LLC`
- Responsive: stack columns on mobile

Refer to spec section "Shared Components > Footer".

- [ ] **Step 2: Create barrel export**

`src/components/Footer/index.ts`:
```ts
export { Footer } from "./Footer";
```

- [ ] **Step 3: Add Footer to layout**

Import Footer in `src/app/layout.tsx` and add `<Footer />` below `{children}`.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Successful build.

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer/ src/app/layout.tsx
git commit -m "feat: add Footer component with services links and social"
```

---

### Task 4: Reusable UI Components (Hero, CtaBanner, ServiceCard, FaqAccordion, Button)

**Files:**
- Create: `src/components/Button/Button.tsx`
- Create: `src/components/Button/index.ts`
- Create: `src/components/Hero/Hero.tsx`
- Create: `src/components/Hero/index.ts`
- Create: `src/components/CtaBanner/CtaBanner.tsx`
- Create: `src/components/CtaBanner/index.ts`
- Create: `src/components/ServiceCard/ServiceCard.tsx`
- Create: `src/components/ServiceCard/index.ts`
- Create: `src/components/FaqAccordion/FaqAccordion.tsx`
- Create: `src/components/FaqAccordion/index.ts`

- [ ] **Step 1: Create Button component**

Props: `variant?: "primary" | "secondary" | "outline"`, `href?: string`, `children: React.ReactNode`, `className?: string`

- **Primary:** Mustard `#D4A012` background, white text, 30px border-radius
- **Secondary:** Teal `#3A728B` background, white text, 30px border-radius
- **Outline:** Transparent background, white border, white text, 30px border-radius (for dark backgrounds)
- Renders as `<a>` when `href` is provided, `<button>` otherwise
- Roboto Regular, 16px, padding matches style guide button sizes
- Use `@/components/Button` in CtaBanner, pages, and anywhere a CTA is needed

- [ ] **Step 2: Create Hero component**

Props: `title: string`, `subtitle?: string`, `children?: React.ReactNode`, `showRocket?: boolean`

- Dark Teal to Charcoal gradient background
- When `showRocket` is true, display `rocket-brand-color.png` positioned to the right (homepage only)
- H1 heading in white, optional subtitle paragraph in white/80 opacity
- Max-width container, generous vertical padding
- Responsive: rocket image hidden on mobile, full-width text

- [ ] **Step 3: Create CtaBanner component**

Props: `heading: string`, `buttonText?: string`, `buttonHref?: string`

- Teal (`#3A728B`) background, white centered text
- H2 heading
- Optional Mustard button with 30px border-radius
- Full-width section with vertical padding

- [ ] **Step 4: Create ServiceCard component**

Props: `title: string`, `description: string`, `icon?: React.ReactNode`, `href?: string`

- White background, light border or subtle shadow
- Icon area at top, H4 heading, body text
- Hover: slight lift (translate-y + shadow increase)
- Clickable card linking to service page

- [ ] **Step 5: Create FaqAccordion component**

Props: `items: Array<{ question: string; answer: string }>`

- Each item: H4 question with chevron toggle
- Answer hidden by default, revealed on click
- Use `<details>/<summary>` HTML elements for accessibility and zero-JS functionality
- Smooth expand animation via CSS `transition`
- Styled with brand typography

- [ ] **Step 6: Create barrel exports for all 5 components**

- [ ] **Step 7: Verify build**

Run: `npm run build`
Expected: Successful build (components exist but aren't used by pages yet — tree-shaking is fine).

- [ ] **Step 8: Commit**

```bash
git add src/components/Button/ src/components/Hero/ src/components/CtaBanner/ src/components/ServiceCard/ src/components/FaqAccordion/
git commit -m "feat: add Button, Hero, CtaBanner, ServiceCard, and FaqAccordion components"
```

---

## Chunk 2: Pages (Parallel — subagents can build all 5 simultaneously)

After Chunk 1 is complete, the following 5 tasks are **fully independent** and should be dispatched to parallel subagents. Each page uses the shared components from Chunk 1.

**Important for all page subagents:**
- Read the design spec at `docs/superpowers/specs/2026-03-11-moonswitch-site-rebuild-design.md` for exact content
- Read `CLAUDE.md` for code conventions
- Use shared components: `@/components/Hero`, `@/components/CtaBanner`, `@/components/ServiceCard`, `@/components/FaqAccordion`
- Export a `metadata` object from each page for SEO (title, description, and openGraph with title + description + default image `/images/logo-color-wordmark.svg`)
- Use `@/components/Button` for all CTA buttons (never inline button styling)
- Use Tailwind classes only, follow brand colors from the theme
- Use `@/` import alias

### Task 5: Homepage (`/`) — SUBAGENT

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace scaffold homepage with Moonswitch homepage**

Sections in order:
1. `<Hero>` with `showRocket={true}`, title "We Are Experts", subtitle about automated deployments, 1-click environments, and enabling teams to deliver quickly and reliably.
2. Service cards section: Light grey background, centered H2 "Our Services" or similar, 3 `<ServiceCard>` components in a responsive grid (1 col mobile, 3 col desktop):
   - DevOps Consulting → `/services/devops-consulting`
   - Cloud Migration → `/services/cloud-migration`
   - DevOps-as-a-Service → `/services/kubernetes`
   Use Lucide icons or simple SVG icons for each card.
3. `<CtaBanner>` with heading "Are you ready to launch your team to the next level?" and button "Get Started" linking to `/about`.

- [ ] **Step 2: Add page metadata**

```tsx
export const metadata: Metadata = {
  title: "Moonswitch - Cloud Strategy, DevOps, Managed Kubernetes",
  description: "We're passionate about automated deployments, 1-click environments, and x-ray vision into performance and health.",
  openGraph: {
    title: "Moonswitch - Cloud Strategy, DevOps, Managed Kubernetes",
    description: "We're passionate about automated deployments, 1-click environments, and x-ray vision into performance and health.",
    images: ["/images/logo-color-wordmark.svg"],
  },
};
```

Follow this pattern for all page metadata — include `openGraph` with matching title, description, and the default image.

- [ ] **Step 3: Verify build**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: build homepage with hero, service cards, and CTA"
```

---

### Task 6: About Page (`/about`) — SUBAGENT

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create about page**

Sections in order:
1. `<Hero>` with title "About MOONSWITCH" (single H1 heading, no subtitle)
2. "The Moonswitch Difference" section: Two-column layout on desktop (stacked mobile).
   - Left: H3 "The Moonswitch Difference", H4 subheading about cloud technology as foundation for business growth and transformation, paragraph about customer-centric approach and technical expertise. Bold vision statement about empowering businesses.
   - Right: Decorative element (could be the rocket image at reduced opacity, or a gradient/pattern — use the logo icon SVG as a large watermark).
3. "Why MOONSWITCH" section: H5 "Why", H2 "MOONSWITCH" heading, then 5 value cards in a responsive grid (2-3 cols desktop, 1 col mobile). Each card has an icon placeholder, H4 heading, and description paragraph:
   - Expertise: seasoned cloud professionals with years of experience
   - Customized Solutions: tailored services to meet specific requirements and goals
   - Proven Track Record: long history of successful cloud migrations and infrastructure optimizations
   - Partnership: view clients as partners in success
   - Innovation: continually explore new technologies, tools, and approaches

Content is from the archived about page — refer to spec for exact text.

- [ ] **Step 2: Add page metadata**

```tsx
export const metadata = {
  title: "About Moonswitch",
  description: "At Moonswitch, we believe that cloud technology is the foundation for business growth and transformation.",
};
```

- [ ] **Step 3: Verify build**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/app/about/
git commit -m "feat: build about page with mission and values"
```

---

### Task 7: DevOps Consulting Page (`/services/devops-consulting`) — SUBAGENT

**Files:**
- Create: `src/app/services/devops-consulting/page.tsx`

- [ ] **Step 1: Create DevOps Consulting page**

Sections in order:
1. `<Hero>` with title "DevOps Consulting", subtitle about increasing efficiency, speed, and security of software development.
2. "Why DevOps" section: H3 heading "DevOps is critical to successful software development", intro paragraph, then `<FaqAccordion>` with 4 items about collaboration, automation, continuous improvement, and customer focus.
3. Challenges grid: H2 "DevOps Consulting Services Address Multiple Challenges", intro paragraph, then 9 challenge cards in a 3x3 responsive grid (each with an icon placeholder + H4 title): Delayed software updates, Slow IT infrastructure implementation, Lack of Collaboration, Delayed Bug Fixing, Inefficient Testing, Lack of Automation, Slow Software Delivery, Decreased Software Quality, Inferior User Experiences.
4. Approach section: H2 "The Moonswitch DevOps Approach", intro paragraph, `<FaqAccordion>` with 4 steps: Initial Assessment, Roadmap and Implementation, Optimization, Support.
5. FAQ section: H3 "DevOps Consulting FAQ", `<FaqAccordion>` with 3 items: What are the main benefits of DevOps?, What is DevOps consulting?, What is the difference between Agile and DevOps?
6. `<CtaBanner>` with heading "Maximize Your DevOps Strategy with Moonswitch", body text about expert software engineers, no button (or button linking to `/about`).

Content from archived site — refer to spec for section details.

- [ ] **Step 2: Add page metadata**

```tsx
export const metadata = {
  title: "DevOps Consulting | Moonswitch",
  description: "DevOps increases the efficiency, speed, and security of the software development process. Moonswitch's DevOps consulting optimizes your software development lifecycle.",
};
```

- [ ] **Step 3: Verify build**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/app/services/devops-consulting/
git commit -m "feat: build DevOps Consulting service page"
```

---

### Task 8: Managed Kubernetes Page (`/services/kubernetes`) — SUBAGENT

**Files:**
- Create: `src/app/services/kubernetes/page.tsx`

- [ ] **Step 1: Create Managed Kubernetes page**

Sections in order:
1. `<Hero>` with title "Managed Kubernetes Services", subtitle about deploying and scaling applications across hybrid, private, and public cloud environments.
2. Key capabilities section: H2 about Kubernetes as leading open-source solution, intro paragraphs, then 6 capability cards in a 3x2 grid: Lifecycle Management, Auto-scaling, Resilience and Self-Healing, Persistent Storage, Declarative Model, Load Balancing. Each card: icon placeholder + H4 title + description paragraph.
3. Managed services detail: Two-column layout. Left: H3 "We Take Care of Kubernetes So You Can Focus on Development", paragraph, bullet list (Remote Monitoring 24/7, Expert Issue Resolution, Automated Troubleshooting). Right: decorative element.
4. FAQ section: H3 "Managed Kubernetes FAQ", `<FaqAccordion>` with 3 items: What enterprises are a good fit?, Cloud provider support (GKE, AKS, EKS)?, Advantages of K8s CI/CD?
5. `<CtaBanner>` with heading "Maximize the Benefits of Kubernetes with Expert Managed Services", body text about getting started on a solid foundation.

Content from archived site — refer to spec.

- [ ] **Step 2: Add page metadata**

```tsx
export const metadata = {
  title: "Managed Kubernetes Services | Moonswitch",
  description: "Deploy and scale applications across hybrid, private, and public cloud environments with Moonswitch's expert Kubernetes management.",
};
```

- [ ] **Step 3: Verify build**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/app/services/kubernetes/
git commit -m "feat: build Managed Kubernetes service page"
```

---

### Task 9: Cloud Migration Page (`/services/cloud-migration`) — SUBAGENT

**Files:**
- Create: `src/app/services/cloud-migration/page.tsx`

- [ ] **Step 1: Create Cloud Migration page**

Sections in order:
1. `<Hero>` with title "Cloud Migration Services", subtitle about achieving cloud benefits with expert migration services that go beyond moving infrastructure.
2. Strategy section: H3 "Strategic cloud migration is more than just a moving service", two paragraphs about going beyond lift-and-shift and rebuilding for cloud-native architecture.
3. AWS Partner section: Badge area with "Moonswitch | An AWS Select Tier Partner" heading and description about Amazon recognizing organizations with proven technical expertise.
4. Benefits grid: H2 "Benefits of Strategic Cloud Migration Services", intro text, 4 benefit cards in a 2x2 grid: Improved Performance and Security, Lowered Costs, Better Interoperability, Easy Scalability. Each card: icon + H4 + description.
5. Approach section: H3 "The Moonswitch Approach to Cloud Migration", intro, 3 steps as styled blocks (not accordion): Assessment, Development, Deployment and Testing. Each with bold label and description.
6. FAQ section: H3 "Cloud Migration Services FAQ", `<FaqAccordion>` with 4 items: Is data secure in the cloud?, Should entire system be moved?, Possible without losing transactions?, Advantages of K8s CI/CD?
7. `<CtaBanner>` with heading "Ready to start maximizing the benefits of the cloud?", body text about strategic migration promises.

Content from archived site — refer to spec.

- [ ] **Step 2: Add page metadata**

```tsx
export const metadata = {
  title: "Cloud Migration Services | Moonswitch",
  description: "Moonswitch helps you achieve the benefits of the cloud with expert migration services that go beyond simply moving your infrastructure.",
};
```

- [ ] **Step 3: Verify build**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/app/services/cloud-migration/
git commit -m "feat: build Cloud Migration service page"
```

---

## Chunk 3: Integration and Polish (Sequential — after all pages)

### Task 10: Full Build Verification and Final Commit

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: All 5 routes generate as static pages:
```
Route (app)
├ ○ /
├ ○ /about
├ ○ /services/cloud-migration
├ ○ /services/devops-consulting
└ ○ /services/kubernetes
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: No errors.

- [ ] **Step 3: Visual smoke test**

Run `npm run dev` and manually check each page in the browser:
- `/` — Hero with rocket, 3 service cards, CTA banner
- `/about` — Hero, difference section, 5 value cards
- `/services/devops-consulting` — Hero, accordion, challenges grid, approach, FAQ, CTA
- `/services/kubernetes` — Hero, capabilities grid, managed services detail, FAQ, CTA
- `/services/cloud-migration` — Hero, strategy, AWS badge, benefits, approach, FAQ, CTA
- Navigation works between all pages
- Mobile responsive at 375px width
- Footer renders correctly on all pages

- [ ] **Step 4: Fix any issues found**

- [ ] **Step 5: Final commit if any fixes were made**

```bash
git add -A
git commit -m "fix: polish and integration fixes"
```

---

## Subagent Parallelization Strategy

```
Chunk 1 (Sequential):
  Task 1: Assets + Theme ──→ Task 2: Header ──→ Task 3: Footer ──→ Task 4: UI Components
                                                                            │
Chunk 2 (Parallel):                                                         ▼
  ┌─ Task 5: Homepage          ─┐
  ├─ Task 6: About              ├──→ All complete
  ├─ Task 7: DevOps Consulting  │
  ├─ Task 8: Kubernetes         │
  └─ Task 9: Cloud Migration   ─┘
                                 │
Chunk 3 (Sequential):           ▼
  Task 10: Integration + Polish
```

- **Chunk 1** must be done sequentially in a single session (each task depends on the previous)
- **Chunk 2** tasks are fully independent — dispatch 5 subagents in parallel, each in its own worktree
- **Chunk 3** runs after all Chunk 2 subagents complete and their changes are merged
