# Northwood Landscape Co. — Implementation Plan

## Design Context Summary

- **Archetype:** Premium Craft / Forest Floor
- **Profile:** Earth (rounded, organic, shadow-based depth)
- **Palette:** Deep forest green primary, fern green accent, dark forest surfaces
- **Fonts:** Fraunces (heading), Figtree (body)
- **Mood:** Organic, Premium, Grounded
- **Animation speed:** 0.7s base (organic/premium = medium-slow)
- **Stagger delay:** 0.12s
- **Border treatment:** None / shadow-only (Earth profile)
- **Hover intensity:** Subtle (lift + shadow grow)
- **Layout tendency:** Asymmetric / mixed

## Brand Token Overrides

- Animation base duration: 0.7s
- Stagger delay: 0.12s
- Heading font-weight: 500-600 (premium, not heavy)
- Section density: Mixed (spacious heroes, standard mid-sections, compact stats)
- Border: shadow-only (Earth profile)
- Hover: subtle (translateY + shadow)
- Layout: asymmetric

## Section Order

`hero → gallery → services → testimonials → about-preview → cta`

## Animation Assignments

| Section | Entrance | Stagger | Scroll-linked |
|---------|----------|---------|---------------|
| Hero | Clip Reveal | — | Parallax bg |
| Gallery | Blur Sharpen | Wave | — |
| Services | Slide Left/Right alternating | Cascade | — |
| Testimonials | Rotate In | Cascade | — |
| About Preview | Fade Up | — | — |
| CTA | None (stillness) | — | — |

---

## Phase 4 Tasks — Structure

### Task 4.1: Header
- **File:** `src/components/Header.tsx`
- **Layout:** Sticky nav, logo left, links centre, CTA pill right. Mobile: hamburger → slide-down panel.
- **Animation:** None on header itself. Mobile menu: AnimatePresence slide-down.
- **Anti-pattern:** No oversized header. No dropdown menus. Keep it lean.
- **Responsive:** Desktop: full nav. Tablet: collapse to burger at lg:. Mobile: full-width slide panel.
- **Acceptance:** Logo links home. Nav links: Home, Services, About, Contact. CTA: "Get a Free Estimate" pill button. Mobile menu works. Backdrop-blur on scroll.

### Task 4.2: Footer
- **File:** `src/components/Footer.tsx`
- **Layout:** 4-column grid — About/tagline, Quick Links, Services, Contact info. Bottom bar: copyright + legal links.
- **Animation:** None.
- **Anti-pattern:** No giant footer. No social icons row (keep it minimal).
- **Responsive:** Desktop: 4-col grid. Tablet: 2x2. Mobile: stack single column.
- **Acceptance:** Links to /services, /about, /contact, /privacy, /terms. Phone + email clickable. Business name + tagline.

### Task 4.3: Reveal & StaggerGroup
- **File:** `src/components/Reveal.tsx`, `src/components/StaggerGroup.tsx`
- **Layout:** N/A (wrapper components)
- **Animation:** All 6 variants (fade-up, slide-left, slide-right, scale-up, blur-sharpen, rotate-in) + useReducedMotion.
- **Anti-pattern:** Don't make these too complex. Simple wrappers.
- **Responsive:** N/A
- **Acceptance:** All 6 animation variants work. Reduced motion respected.

### Task 4.4: SpotlightCursor (Signature Move)
- **File:** `src/components/SpotlightCursor.tsx`
- **Layout:** Fixed overlay, desktop-only (>1024px).
- **Animation:** Spring-dampened cursor following with forest green inner glow + fern accent outer ring.
- **Anti-pattern:** Don't make it too bright. Use oklch(35% 0.14 145 / 0.15) inner, oklch(65% 0.20 148 / 0.08) outer.
- **Responsive:** Hidden on mobile/tablet.
- **Acceptance:** Smooth cursor follow on desktop. Invisible on mobile. Not blocking interactions (pointer-events-none).

---

## Phase 5 Tasks — Homepage

### Task 5.1: HeroSection
- **File:** `src/components/home/HeroSection.tsx`
- **Layout:** Full-viewport dark background. 2-3 organic blob shapes (CSS border-radius) in forest greens at varied opacity, positioned asymmetrically. Text in lower-left quadrant (NOT centred). Badge-label above headline. Large type-hero heading, type-hero-sub subtext, btn-profile CTA.
- **Animation:** Clip Reveal on text block. Blobs drift slowly (20s CSS loop). Parallax: blobs shift on scroll.
- **Anti-pattern:** NOT centred-text-over-stock-photo. NOT symmetrical. Text must be off-centre.
- **Responsive:** Desktop: text lower-left, blobs spread. Tablet: text centered, blobs reduced. Mobile: simplified layout, fewer blobs.
- **Acceptance:** Hero fills viewport. Blobs animate. Text readable against dark bg. CTA prominent. Feels like standing in a dark forest with dappled green light.

### Task 5.2: GallerySection
- **File:** `src/components/home/GallerySection.tsx`
- **Layout:** Bento grid (SectionBentoGrid) — 6 project categories in varied-size tiles. 2 large tiles (landscape, hardscape), 4 standard tiles. Each tile: image with gradient overlay + category label at bottom.
- **Animation:** Blur Sharpen entrance. Wave stagger across tiles.
- **Anti-pattern:** NOT a uniform 3x2 grid. Tiles must vary in size. NOT all same aspect ratio.
- **Responsive:** Desktop: bento grid (2 large + 4 small). Tablet: 2-column. Mobile: stack single column with alternating full/half widths.
- **Acceptance:** 6 project tiles with Unsplash images. Hover reveals overlay text. Bento layout looks intentional, not broken.

### Task 5.3: ServicesSection
- **File:** `src/components/home/ServicesSection.tsx`
- **Layout:** Zigzag layout (SectionZigzag) — alternating image-left/text-right and text-left/image-right for 5 services. Each row: image on one side, service title + description + mini CTA on other.
- **Animation:** Slide Left/Right alternating per row. Cascade stagger within text blocks.
- **Anti-pattern:** NOT a 3-column card grid. NOT centred cards. Each service gets its own alternating row.
- **Responsive:** Desktop: zigzag 2-column. Tablet: stack, image on top. Mobile: same stack, tighter padding.
- **Acceptance:** All 5 services displayed. Each with Unsplash image. Alternating layout clearly visible. Service descriptions from site config.

### Task 5.4: TestimonialsSection
- **File:** `src/components/home/TestimonialsSection.tsx`
- **Layout:** Offset grid (SectionOffsetGrid) — 3 testimonial cards at slightly staggered heights. card-featured for first, card-standard for others. badge-moss for project type.
- **Animation:** Rotate In entrance. Cascade stagger.
- **Anti-pattern:** NOT a carousel. NOT centred single-card. Cards at different vertical offsets.
- **Responsive:** Desktop: 3-col offset. Tablet: 2-col. Mobile: single stack.
- **Acceptance:** 3 testimonials with name, project type badge, quote text. Varied card heights. Feels organic, not uniform.

### Task 5.5: AboutPreview
- **File:** `src/components/home/AboutPreview.tsx`
- **Layout:** Asymmetric split (SectionAsymmetricSplit) — 7/5 grid. Left: image (team/outdoor work). Right: "Three Generations" headline, 2-sentence story tease, "Meet the Team" link.
- **Animation:** Fade Up entrance.
- **Anti-pattern:** NOT centred text. NOT a card. Raw editorial layout.
- **Responsive:** Desktop: 7/5 split. Tablet: stack, image on top. Mobile: same.
- **Acceptance:** Image with img-elevated treatment. Text teases the family legacy. Link to /about. grain-divider above section.

### Task 5.6: CTASection
- **File:** `src/components/home/CTASection.tsx`
- **Layout:** Full-bleed dark section (SectionFullBleed) with section-bg-gradient background. Centred text: type-section heading, type-body-lg subtext, btn-profile CTA. Grain overlay.
- **Animation:** None (intentional stillness). Let the words land.
- **Anti-pattern:** NOT busy. No images. No cards. Just powerful text + button.
- **Responsive:** Same at all sizes, text scales fluidly via type classes.
- **Acceptance:** Clean, powerful CTA. Phone number visible. "Get a Free Estimate" button. Grain texture visible.

---

## Phase 6 Tasks — Inner Pages

### Task 6.1: Services Page
- **File:** `src/app/services/page.tsx`
- **Layout:** Tabbed layout — 5 tabs (one per service). Each tab: hero image, detailed description, 3-step mini process, FAQ specific to that service. Page header with type-section title.
- **Animation:** Tab transitions with AnimatePresence.
- **Anti-pattern:** NOT just the homepage services copy duplicated. Each tab has 2-3 paragraphs + process steps.
- **Responsive:** Desktop: tabs horizontal. Mobile: tabs become vertical accordion.
- **Acceptance:** All 5 services have full content. Tabs work. FAQ per service. Canadian English.

### Task 6.2: About Page
- **File:** `src/app/about/page.tsx`
- **Layout:** Editorial magazine style. Hero area with "Three Generations of Landscape Craft" headline. Origin story section. Values grid (3 values in offset cards). Team placeholder section.
- **Animation:** Mixed — Fade Up for story, Scale Up for values.
- **Anti-pattern:** NOT a wall of text. Break into visual sections. Owner name (Marcus Thibault) appears HERE and only here.
- **Responsive:** Desktop: editorial with image floats. Tablet/Mobile: stack.
- **Acceptance:** Owner name present. Origin story told. Values displayed. Under 300 words for story section. Canadian English.

### Task 6.3: Contact Page
- **File:** `src/app/contact/page.tsx` + `src/app/api/contact/route.ts`
- **Layout:** Split layout — left: contact form (name, email, phone, service dropdown, message). Right: Google Maps embed + contact info (phone, email, address, hours).
- **Animation:** Fade Up.
- **Anti-pattern:** NOT just a form. Must have the map. Must have phone + email visible.
- **Responsive:** Desktop: 2-col split. Tablet/Mobile: stack, form first then map.
- **Acceptance:** Form submits to API route. Google Maps iframe renders. Phone/email clickable. Service dropdown populated from config.

---

## Phase 7 Tasks — SEO & Legal

### Task 7.1: robots.ts
- **File:** `src/app/robots.ts`

### Task 7.2: sitemap.ts
- **File:** `src/app/sitemap.ts`

### Task 7.3: opengraph-image.tsx
- **File:** `src/app/opengraph-image.tsx`
- Uses hex colours (Satori limitation), not OKLCH.

### Task 7.4: Privacy Policy
- **File:** `src/app/privacy/page.tsx`
- PIPEDA-compliant. Canadian English.

### Task 7.5: Terms of Service
- **File:** `src/app/terms/page.tsx`

### Task 7.6: llms.txt
- **File:** `public/llms.txt`

---

## Anti-Sameness Self-Review

- [x] Layout count: 1 centred (CTA). 5 non-centred. PASS.
- [x] Grid count: 1 bento grid (Gallery). 0 uniform card grids. PASS.
- [x] Asymmetry: Hero (lower-left text), About Preview (7/5 split), Services (zigzag). PASS.
- [x] Animation variety: 5 different entrance types (Clip, Blur, Slide, Rotate, Fade) + 1 None. PASS.
- [x] Intentional stillness: CTA has animation: none. PASS.
- [x] Spacing variety: Hero=spacious, Gallery=standard, Services=standard, Testimonials=standard, About=standard, CTA=spacious. Mixed. PASS.
- [x] Section backgrounds: deep (hero, CTA), gradient (services), texture (testimonials). 3 different. PASS.
- [x] Signature moves assigned: Spotlight cursor (global), Grain-line dividers (between sections), Fern-frond reveal (gallery). PASS.
