# CLAUDE_WORKFLOW.md

A 12-step workflow for using this starter on a new prospect demo.

> **Defaults:** `demoMode: true`, `allowIndexing: false` — keep these on until the site is approved and ready to launch on the real domain.

---

## Step 1 — Update business config

Open `src/data/business.ts` and set:
- `businessName`
- `shortDescription`
- `city`
- `phone`, `email`, `address`, `mapsUrl`
- `facebookUrl` (or remove)
- `primaryCta` and `secondaryCta` (usually just keep "Susisiekti" → /kontaktai)
- `openingHours`
- `contactFormEnabled` (true if the client wants a contact form on /kontaktai)

Leave `demoMode: true` and `allowIndexing: false` for now.

## Step 2 — Adjust navigation if needed

`src/data/navigation.ts` — only change labels if the client's terminology is meaningfully different (e.g. "Kainos" instead of "Paslaugos ir kainos").

## Step 3 — Update page content files

- `src/data/pages/home.ts` — hero copy, services preview, split content, CTA
- `src/data/pages/services.ts` — services list, pricing cards (set `enabled: false` if no pricing), FAQ
- `src/data/pages/contact.ts` — page header, form notices, CTA

Use real content from the prospect's existing site / Facebook / spoken brief. Keep instructional placeholders only where you genuinely need the client to fill in detail later.

> **Dim-line discipline.** The "Heading. *Dimmed elaboration.*" pattern is supported on `SectionHeading`, `PageHeader`, and `CTASection` via the optional `dimLine` prop. Use it on **major** moments only — page header, services intro, the conversion CTA, contact intro. Leave it off for FAQ titles, secondary grids, and small subsections. Empty `dimLine` renders nothing.

## Step 3a — Heavily customize the hero

The hero is the **least template-safe** section. Default copy/structure works as a placeholder, but if you ship it as-is across multiple demos they'll feel samey.

For every prospect:
- Rewrite the headline around the business's strongest **differentiator** (not a generic "Pagrindinis šūkis…")
- Swap or remove the eyebrow if "Vilnius" isn't the right anchor
- Replace the subheadline with one or two natural Lithuanian sentences specific to this business
- Adjust trust points to reflect what this business actually proves (years of experience, certifications, languages spoken, neighborhood, etc.)
- Use a real client photo via `imagePath` whenever possible — fall back to `ImagePlaceholder` only if no photo exists yet
- Reconsider the secondary phone: keep it for service businesses where calls convert; remove for businesses that prefer written contact

If the hero still looks like the default after customization, you haven't customized it enough.

## Step 4 — Remove sections that don't fit

In `src/pages/index.astro`, `paslaugos.astro`, `kontaktai.astro`: **delete sections** that don't add value for this specific prospect. An empty FAQ or weak trust points block hurts the demo more than it helps.

## Step 5 — Restyle tokens

`src/styles/tokens.css` — change `--color-primary`, `--color-bg`, `--color-bg-alt`, font tokens if needed. Pick colors that fit the business:
- Clinic / dental: cool blue or muted teal
- Beauty / spa: warm neutral or muted rose
- Gym: bold dark + accent
- Kindergarten: warm friendly tone
- Service business: trustworthy navy or green

Do **not** ship the default colors as-is.

## Step 6 — Add real assets

- Drop the client logo into `public/` and set `business.logoPath = "/logo.svg"` (or `.png`)
- Set `business.logoAlt`
- If the client provided real photos, use them in Hero / SplitContent (replace `imagePlaceholderLabel` with `imagePath` + `imageAlt`)
- **Never use stock photos**

## Step 7 — Check desktop nav

Open `npm run dev` in a desktop browser:
- Logo correct
- Phone number visible
- Primary CTA matches `business.primaryCta`
- Active nav state highlights correctly

## Step 8 — Check mobile sticky CTA

Resize to mobile (or DevTools mobile view):
- StickyMobileCTA visible at bottom
- Phone number formatted correctly
- DemoWidget sits **above** the sticky CTA, not on top of it
- On very narrow screens (<360px, older iPhones), DemoWidget hides — footer credit remains

## Step 9 — Audit for stock images and fake claims

Read every page:
- No stock photos snuck in
- No fake testimonials, stats, awards, ratings
- No "Nr. 1" / "best in city" claims unless concretely backed up

## Step 10 — Verify contact form demo notice

On `/kontaktai`:
- Form fields are visible
- Demo notice "Forma demonstracinė. Galutinėje svetainėje ją prijungsime prie jūsų el. pašto." appears above fields
- Submit shows the success message — no real network request

## Step 11 — Review every page for filler

Walk through `/`, `/paslaugos`, `/kontaktai` once more. If any section feels like decoration, delete it. Quality > coverage.

> **For prospect screenshots / PDFs:** before exporting full-page captures, set `business.captureMode = true`. This makes the header static (no overlap mid-page), hides the DemoWidget, and skips reveal animations so every section captures correctly. Set it back to `false` afterwards.

## Step 12 — Turn off demo mode (only after approval)

When the client has approved the site and is ready to publish:
1. Set `business.demoMode = false`
2. Set `business.allowIndexing = true`
3. The DemoWidget disappears and the footer demo credit is hidden
4. The contact form still requires a real backend — wire it up to the client's email or a form service before going live
5. Run `npm run build` and deploy

---

## Quick commands

```bash
npm install        # one-time
npm run dev        # local development
npm run build      # static build → dist/
npm run preview    # preview the built site locally
```
