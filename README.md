# DERMOLYXA™ — Advanced Regenerative & Aesthetic Science

> **Skin • Hair • Aesthetic**  
> An international luxury house unifying clinical dermatology, robotic trichology & hair restoration surgery, regenerative aesthetic science, accredited practitioner education, and clinical formulation.

---

## ✦ Design System

Built strictly around the polished gold-on-pure-black luxury identity:

- **Color Palette**:
  - `--black`: `#000000` (Pure midnight black)
  - `--ink`: `#0A0A0A` (Deep surface elevation)
  - `--charcoal`: `#141414` (Elevated card background)
  - `--gold`: `#D4AF37` (Royal classic gold)
  - `--gold-light`: `#F5D77A` (Luminous champage gold)
  - `--gold-deep`: `#9A7B1E` (Warm antique gold accent)
  - `--ivory`: `#F4EFE6` (Warm pearl text tone)
- **Signature Gold Gradient**:
  `linear-gradient(135deg, #9A7B1E 0%, #F5D77A 40%, #D4AF37 60%, #7A5C10 100%)`
- **Typography**:
  - Headings: `Cinzel` & `Cormorant Garamond` (editorial luxury serifs)
  - Labels & Small-caps: `Montserrat` (wide letter-spacing, tracking `0.34em` to `0.5em`)
- **Signature Lux Elements**:
  - Gold shimmer text sweep (`shimmer-gold`)
  - Hairline gold divider rules with center rotating diamond ornament (`✦`)
  - Royal gold keyboard focus outlines for accessibility (`focus-visible:ring-gold-light`)

---

## ✦ "Next Level" Features & Page-Wide Effects

1. **Gold Light-Trail Cursor (`Cursor.jsx`)**:
   - Ultra-smooth canvas light-trail with multi-point particle interpolation and quadratic glow curves.
   - Interactive hover scale & magnetic responsiveness on buttons, links, inputs, and interactive cards.
   - Automatically disabled on touch screens and when `prefers-reduced-motion` is active.
2. **Magnetic Elements (`Magnetic.jsx`)**:
   - Physics-based spring pull (stiffness: 150, damping: 15) drawing buttons softly toward the cursor on hover.
   - Applied to Navbar CTA, Hero buttons, WhatsApp floating trigger, waitlist submission, and enquiry forms.
3. **Gold Scroll Progress Bar (`ScrollProgress.jsx`)**:
   - Fixed at the top viewport edge (`z-[150]`), tracking real-time scroll position with spring damping and a golden glow aura.
4. **Heading Text Scramble / Decoder (`ScrambleHeading.jsx`)**:
   - Headings enter viewport with a character reveal cycling through glyphs (`✦`, `·`, `◊`, `—`) before settling into the golden serif title.
   - Fully accessible: Screen readers and search engine crawlers always receive original text via `aria-label`.
5. **Subtle Film-Grain Overlay (`FilmGrain.jsx`)**:
   - Non-blocking SVG turbulence noise overlay (`opacity: 0.038`) providing a tactile, velvety analog depth over deep black.
6. **Accessibility & Prefers-Reduced-Motion**:
   - Full CSS & JS reduction: disables Three.js continuous spins, disables heavy framer-motion staggers, and provides static elegance for users requesting reduced motion.
   - WCAG AA contrast compliance with royal gold focus rings.

---

## ✦ Performance & 3D Architecture

- **Lazy-Loaded 3D WebGL Canvases (`Lazy3DContainer.jsx`)**:
  - Uses `IntersectionObserver` with a `250px` root margin.
  - Canvases only mount their WebGL contexts when approaching the viewport and unmount when offscreen, preventing GPU overhead and memory leaks.
- **Mobile-Optimized Lightweight Visuals**:
  - On screens < 768px or lower-tier devices, heavy 3D canvases seamlessly swap to lightweight, 60fps animated SVG/Canvas vector artworks:
    - **Hero**: `HeroMobileVisual.jsx` (animated sacred geometry rings and interactive mode-switching monogram).
    - **Scalp Anatomy**: `ScalpMobileVisual.jsx` (anatomical vector head profile with interactive glowing hotspot nodes A, B, and C).
    - **Serum Laboratory**: `SerumMobileVisual.jsx` (vector luxury gold dropper bottle with glowing liquid core).
- **Code-Splitting**:
  - All below-the-fold sections (`HairTransplantProcess`, `SkinCare`, `AestheticCare`, `BeforeAfter`, `Institute`, `Products`, `Testimonials`, `FAQ`, `Contact`) are code-split via `React.lazy` with Suspense.
  - Initial JavaScript bundle size is under **105 kB** (31 kB gzipped), targeting **Lighthouse 90+**.
- **Responsive & Compressed Assets**:
  - Modern WebP / auto-formatting Unsplash URLs with explicit aspect ratios, `loading="lazy"`, and `decoding="async"`.

---

## ✦ SEO & Rich Schemas

- **Search Engine Optimization**:
  - Comprehensive Title, Meta Description, Keywords, Canonical link, and theme-color `#000000`.
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
  - Twitter Card tags (`twitter:card`, `twitter:site`, `twitter:image`).
- **Structured Data (JSON-LD)**:
  - Combined `MedicalClinic` and `EducationalOrganization` schema graph.
  - Specifying medical specialties (Dermatology, Trichology, Aesthetic Surgery, Regenerative Medicine), surgical & non-surgical procedures, opening hours, contact channels, and institute courses.

---

## ✦ Architecture & Single Source of Truth

Every label, blurb, image, phone number, and link lives inside `src/data/content.js`. Components never hardcode copy; they map dynamically over data:

```
src/
├── data/
│   └── content.js               <-- Single source of truth
├── components/
│   ├── aesthetic/               <-- ConcernFinder, SkinLayers
│   ├── hair/                    <-- ScalpModel, ScalpMobileVisual, HairTimeline, etc.
│   ├── hero/                    <-- HeroMobileVisual
│   ├── products/                <-- SerumBottle, SerumMobileVisual
│   ├── AestheticCare.jsx
│   ├── BeforeAfter.jsx
│   ├── ClinicServices.jsx
│   ├── Contact.jsx
│   ├── Cursor.jsx               <-- Gold light-trail cursor
│   ├── Divider.jsx
│   ├── Divisions.jsx
│   ├── FAQ.jsx
│   ├── FilmGrain.jsx            <-- Film grain texture overlay
│   ├── Footer.jsx
│   ├── HairTransplantProcess.jsx
│   ├── Hero.jsx
│   ├── HeroScene.jsx            <-- Three.js 3D hero monogram
│   ├── Institute.jsx
│   ├── Lazy3DContainer.jsx      <-- Viewport 3D lazy loader
│   ├── Loading.jsx
│   ├── Magnetic.jsx             <-- Magnetic button wrapper
│   ├── MobileBar.jsx
│   ├── Navbar.jsx
│   ├── Products.jsx
│   ├── ScrambleHeading.jsx      <-- Heading scramble decoder
│   ├── ScrollProgress.jsx       <-- Gold scroll progress line
│   ├── SkinCare.jsx
│   ├── Testimonials.jsx
│   ├── UiIcons.jsx
│   └── WhatsAppButton.jsx
├── hooks/
│   └── useDeviceTier.js         <-- Hardware concurrency & WebGL capability check
├── lib/
│   ├── lenis.js                 <-- Smooth Lenis scroll engine
│   └── scroll.js                <-- Lenis-aware smooth anchor scrolling
├── App.jsx
├── index.css
└── main.jsx
```

---

## ✦ Getting Started & Run Locally

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Run Linter
```bash
npm run lint
```

---

## ✦ Deployment Guide (Vercel)

This project is built on Vite and is 100% zero-config compatible with Vercel:

### Deploy via Vercel CLI
```bash
npx vercel
```
For production release:
```bash
npx vercel --prod
```

### Deploy via Vercel Dashboard (GitHub / GitLab / Bitbucket)
1. Push this repository to GitHub or your Git provider.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select this repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your site is live on an edge CDN with automatic HTTPS!
#   d e r m o l y x a - w e b  
 