# The Risen Generation Church — Website

An informational React website for **The Risen Generation Church (TRGC)**, a local church based in the Philippines. The site presents the church's identity, leadership, ministries, programs, and giving options to the public.

---

## 🛠️ Tech Stack

- **React** (Create React App)
- **Tailwind CSS** — utility-first styling
- **React Router DOM** (HashRouter) — client-side routing
- **React Icons / Lucide React** — icon sets
- **Google Fonts** — Oswald, Lato, Raleway

---

## 📄 Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Landing page with hero, service schedule, programs, merch, and map |
| `/about` | About | Church identity, mission/vision, beliefs, and logo symbolism |
| `/leadership` | Leadership | Church history timeline and leadership team profiles |
| `/ministry` | Ministry | Grid of all church ministries with hover details |
| `/give` | Give | Tithing info, giving methods (GCash, Maya, PNB, In Person), and giving purpose |

---

## 🧩 Shared Components

| Component | Description |
|---|---|
| `App.js` | Root layout — fixed navbar with scroll glass effect, routing, footer |
| `Footer.js` | Site-wide footer with logo, quick links, contact info, and social media |
| `HeaderBanner.js` | Reusable page hero banner with animated title and decorative particles |
| `Countdown.js` | Live countdown to the next Sunday 9:30 AM service |
| `Mark.js` | Inline text highlight with brushstroke/marker style |
| `Brushstroke.js` | Animated brushstroke text highlight |
| `Heading.js` | Styled section heading component |
| `PrismaticAurora.js` | Dark gradient background wrapper with aurora effect |
| `DiagonalGrid.js` | Light background wrapper with diagonal grid pattern |
| `CosmicNoise.js` | Noise/texture background wrapper |
| `VolcanicEmber.js` | Ember particle background effect |
| `ParallaxSection.js` | Parallax image section (available, partially used) |

---

## 🖼️ Assets

- `public/backgrounds/` — Full-page background images (BG1, BG2, TornPaper)
- `public/img/` — Church photos, logo variants, merch images

---

## 🚀 Running the Project

```bash
npm install
npm start       # dev server at http://localhost:3000
npm run build   # production build
```

---

## ⚠️ Known Placeholders

- Leadership page uses placeholder names and missing images (`/img/foundation-group.jpg`, etc.)
- Ministry page uses a single test image for all ministry cards
- Footer copyright year is hardcoded as 2023
- Some lorem ipsum text remains in the About page

---

## 🎨 Design Notes

See `PAGES_AND_IMPROVEMENTS.md` for a detailed breakdown of every page's sections and suggested improvements in typography, color, responsiveness, and UI principles.
