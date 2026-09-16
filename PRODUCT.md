# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router), React, TypeScript (strict, no `any`), Tailwind CSS. [Explicit project requirement from `.impeccable/context/project-overview.md`.]

## Users

Shoppers buying competitive sports gear and equipment: players, parents buying for young athletes, coaches/teams buying in bulk, and sports enthusiasts. They arrive knowing roughly what category they need (bats, spikes, protective gear, footwear) and want to browse by sport/discipline, compare specs and prices, and check out with confidence in product authenticity.

## Product Purpose

Lions United Sports is an ecommerce storefront selling professional and semi-professional sports equipment (cricket bats, spikes, footwear, protective gear, kits) across multiple disciplines (Cricket, Football, Basketball, Badminton, Athletics, Kabaddi, Volleyball, Throwball). It exists to let athletes and buyers discover gear by sport/category, evaluate product options, and purchase — while establishing Lions United as a trusted, authentic supplier (not a generic marketplace).

## Positioning

**Note on scope resolution:** `.impeccable/context/*.md` describes a non-ecommerce sports academy/organization site, but the approved Stitch visual design (`DESIGN.md`, screens/home.png) and this session's explicit user confirmation establish this as a **sports-gear ecommerce storefront**. The ecommerce direction is authoritative; the "sports organization" framing in the context docs and `ecommerce-frontend.md`'s "this is NOT ecommerce" note are superseded for this build.

Distinct from generic sports marketplaces by: authenticity/provenance guarantees ("Direct Authenticity — 100% factory-sealed gear"), curated pro-grade categories rather than a long-tail catalog, and an editorial, high-craft merchandising presentation (spatial category navigator, orbiting brand showcase) rather than dense grid-only browsing.

## Operating Context

- Storefront is browsed on desktop and mobile; no native app.
- Checkout, payments, auth, and search are **prototype-only** — no real backend, payment processor, or account system. All data is realistic mock data.
- Currency shown in the approved design is INR (₹); preserve this.
- Primary discovery paths: search bar, category navigation (sport disciplines), curated collections ("Popular Pro Gear," "Popular Brands"), and promotional banners.

## Capabilities and Constraints

**In scope (frontend prototype):**
- Product browsing by sport/category, product listing and detail pages, cart (client-side/mock state), wishlist toggle, search UI, newsletter signup UI, a simple admin view for managing mock catalog data (per user's requested "Admin flow").
- Realistic mock product, category, and brand data authored as structured TypeScript data, not lorem ipsum.

**Out of scope:**
- Real payments, real authentication/accounts, real order fulfillment, real backend/API/database. Any such flow must be visibly a frontend simulation (e.g., mock "order placed" confirmation), never implying real submission succeeded.

**Constraints:**
- Strict TypeScript throughout; `any` is disallowed.
- Must follow the approved DESIGN.md tokens (Deep Racing Green primary, Vibrant Kinetic Orange secondary, Deep Slate Navy tertiary, Plus Jakarta Sans) exactly — no new visual direction.
- Component architecture must follow `.impeccable/skills/component-architecture.md` (reusable, data-driven, composition over duplication).

## Brand Commitments

- Name: **Lions United Sports** (previously referenced internally under a placeholder design-system name "Apex Athletic Performance" in `DESIGN.md` — the product name is Lions United Sports; the design *tokens* from that file are what's binding, not the placeholder name).
- Visual identity: locked via `DESIGN.md` and `screens/home.png` (Stitch-approved). Deep racing green + kinetic orange + deep slate navy on a crisp light canvas; Plus Jakarta Sans throughout; pill-shaped buttons/inputs; soft ambient elevation; no glassmorphism, no excessive gradients, no generic SaaS patterns (per `.impeccable/context/project-overview.md`'s explicit avoid-list, which still applies to execution quality even though the "no ecommerce" framing does not).
- Tagline/voice seen in the approved screen: confident, technical, athletic ("Championship Gear for Power & Precision," "Direct Authenticity").

## Evidence on Hand

- `DESIGN.md` — full token set (colors, typography, spacing, radius, elevation, component specs) from Stitch. Authoritative for all visual values.
- `screens/home.png` — approved homepage comp. Authoritative for homepage layout/composition; other pages are not yet comped and must extend this system faithfully.
- `.impeccable/context/*.md` — product/requirements context, accurate for non-visual conventions (accessibility, forms, SEO, responsive breakpoints, content rules) despite the superseded ecommerce framing.
- No real product photography, brand logos, or copy has been supplied. Placeholder product imagery and realistic-but-fictional copy must be clearly prototype-grade, not implying real supplier partnerships.

## Product Principles

1. Implement the approved Stitch design faithfully — do not introduce a new visual direction while building.
2. Treat ecommerce UX conventions (clear pricing, cart, stock/authenticity signaling) as first-class, following `.impeccable/skills/component-architecture.md` for reuse.
3. Never fake functional success — checkout, auth, and forms simulate obviously, per Rule 15 in `prototype-rules.md`.
4. Data-driven content over hardcoded markup: sports, products, brands, categories all live in a typed data layer.
5. Mobile, tablet, and desktop are each intentionally designed per `.impeccable/context/design-system.md`'s breakpoints, not scaled derivatives of one another.

## Accessibility & Inclusion

WCAG-aware contrast, visible focus states, keyboard navigation, semantic HTML, accessible forms with labels/error states, and `prefers-reduced-motion` support, per `.impeccable/context/product-requirements.md` and `prototype-rules.md`.
