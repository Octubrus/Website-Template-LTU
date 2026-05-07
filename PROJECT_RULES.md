# PROJECT_RULES.md

This is a starter template for **fast local business demo websites** — used to win prospect meetings, not as a finished product.

## What this template is

- A lean Astro 5 starter for building demo websites for local businesses (gyms, clinics, dance schools, beauty businesses, kindergartens, service companies, etc.)
- A scaffold that handles boring setup (header, footer, nav, SEO defaults, demo widget, mobile CTA, contact form shell) so each demo can be built fast
- Structure + neutral defaults that **must be customized per client**

## What this template is NOT

- It is **not** an industry-specific template
- It is **not** a finished product or a SaaS-style design system
- It is **not** an excuse to ship every client the same site
- It is **not** a replacement for thinking about the specific business

## Rules

### 1. Every client demo must look different
Restyle `src/styles/tokens.css` for every prospect. Pick a color and feel that fits **their** business — calm and clinical, warm and friendly, energetic, etc. The default tokens are deliberately neutral; do not ship them as-is.

### 2. No stock photos. Ever.
Use only images the client has actually provided (logo, real photos of the business, real team, real interior). If no images exist, use `ImagePlaceholder.astro` with instructional copy. A clean placeholder is more honest and more persuasive than a stock photo.

### 3. No fake claims
No fake testimonials, no fake stats, no fake awards, no fake team members, no fake "Nr. 1 in city" lines, no fabricated review counts. If the client has weak content, use placeholder copy that clearly shows what should be added later.

### 4. Demo-safe SEO
`demoMode: true` and `allowIndexing: false` are the safe defaults. Only flip them once the client has approved the site and it is ready to go live on its real domain.

### 5. Lean codebase
Do not add npm packages without a clear justification. Do not add Tailwind, React, Vue, animation libraries, sliders, counters, or popup libraries. Astro + plain CSS + small inline JS is enough for V1.

### 6. Components must stay flexible
Do not create industry-specific components like `GymServices`, `DentalTreatments`, or `KindergartenPrograms`. Use the existing flexible primitives — `FeatureGrid`, `SplitContent`, `CTASection`, `ContactBlock`, `TrustPoints`, `FAQ` — and re-label them via data files.

### 7. Content lives in data files
All business-specific text lives in `src/data/`. Do not hardcode business names, prices, headlines, or copy directly inside components.

### 8. Remove sections that don't fit
If a section feels like filler for a particular prospect, **delete it from that page**. An empty FAQ or a trust-points block with weak content hurts the demo more than it helps.

### 9. Mobile is the default audience
Local business prospects evaluate the demo on their phone. Always check mobile layout, sticky CTA placement, and tap target sizes. The phone number must remain easy to reach.

### 10. The demo widget is a sales tool — not a watermark
The DemoWidget is meant to (a) make it clear this is a demo and (b) attribute the work to the agency professionally. It should be visible but never overpower the client's site. The footer demo credit is the secondary attribution layer.

### 11. The hero is the least template-safe section
The hero (`src/components/sections/Hero.astro` + `home.ts.hero`) is structurally neutral on purpose, but it is the **first** thing a prospect sees and the section that most needs to feel personal. **Always rewrite the hero per business** — its copy, image treatment, eyebrow, trust points, and CTA logic — based on the prospect's strongest differentiator and the real photos they've provided. Demos that ship with the default hero structure unchanged tend to feel templated. Spend the most styling time here, not on side sections.

### 12. Use the dimmed second-headline pattern selectively
The `dimLine` prop on `SectionHeading` / `PageHeader` / `CTASection` ("Heading. *Dimmed elaboration.*") looks premium when used on **major** moments — page headers, the main services intro, the conversion CTA, the contact intro. Avoid using it on every section: small grids, FAQs, secondary blocks should usually pass `heading` only. If `dimLine` is empty, nothing extra renders, so leave it off rather than reaching for filler copy.

### 13. captureMode for clean prospect screenshots
Set `business.captureMode: true` before exporting full-page screenshots or PDFs for a prospect. This makes the header static (no overlap mid-page), hides the DemoWidget, and skips reveal animations so every section captures correctly. Set it back to `false` for normal browsing.
