# TRGC Website - AI Coding Agent Instructions

## Project Overview
**TRGC** (The Risen Generation Church) is a React-based church website using modern styling with Tailwind CSS, custom SVG components, and real-time countdown features. Built with Create React App (CRA), routing via React Router v7, and deployed via GitHub Pages.

## Architecture

### Core Structure
- **Entry**: `src/index.js` → `src/App.js` (routing root)
- **Pages**: Five main routes in `src/pages/` (Home, About, Leadership, Ministry, Give)
- **Components**: Reusable UI in `src/Components/` with specialized `ui/` subfolder for visual effects
- **Styling**: Tailwind CSS with custom extended fonts (Oswald, Lato, Raleway)
- **Public Assets**: Logo, backgrounds, and merchandise images in `public/img/` and `public/backgrounds/`

### Key Components
- `App.js`: Handles navigation, scroll detection for navbar glassmorphism effect
- `Header.js`: Currently unused (empty file)
- `Footer.js`: Global footer with contact, social links, quick navigation
- `ui/Brushstroke.js`: SVG-based gradient text backgrounds with canvas texture overlay (accepts color array)
- `Helper/Countdown.js`: Timezone-aware countdown (Asia/Manila) with "LIVE NOW!" display during service hours (9:30-11:40 AM)

### Visual Effect Components
Located in `src/Components/ui/`: `Brushstroke.js`, `CosmicNoise.js`, `DiagonalGrid.js`, `Heading.js`, `Mark.js`, `PrismaticAurora.js`, `VolcanicEmber.js` — used selectively in page headers and highlights.

## Development Workflow

### Build & Deploy
```bash
npm start          # Dev server at http://localhost:3000 (HMR enabled)
npm run build      # Optimized production build to `build/` folder
npm run deploy     # Builds and deploys to GitHub Pages
npm test           # Jest + React Testing Library in watch mode
```

**Key Setting**: `HashRouter` in `App.js` enables client-side routing for GitHub Pages (hash-based URLs like `#/about`).

## Styling Conventions

### Tailwind Extensions
In `tailwind.config.js`:
- Custom fonts: `font-oswald`, `font-lato`, `font-raleway`
- Base layer rules in `src/index.css` apply `font-raleway` to `<p>` and `<li>`, default `<span>` to bold

### Color Scheme
- Primary accent: orange-500 (active nav links)
- Dark backgrounds: `bg-slate-900`, `bg-black`
- Hover effects: `hover:text-orange-400`, `hover:opacity-80`
- Special glass effect: `bg-white/10 backdrop-blur-md border-white/20` (navbar on scroll)

### Pattern: Scroll Detection
`App.js` uses `useEffect` with scroll listener to toggle `isScrolled` state → conditionally applies navbar glassmorphism. **Reuse this pattern** for other scroll-triggered effects.

## Component Patterns

### SVG Gradient Components (Brushstroke)
- Uses `useId()` to generate unique `<linearGradient>` IDs (prevents hydration mismatches in React 19)
- Accepts `colors` prop as array (default: `["#ffb700", "#ff6f61"]`)
- Returns SVG as background layer with `z-10` child content
- **Usage**: Wrap text like `<Brushstroke colors={["#0000ff", "#87ceeb"]}>TEXT</Brushstroke>`

### Time/Timezone Logic (Countdown)
- Hardcoded timezone: `Asia/Manila` (change if needed)
- Service window: Sundays 9:30 AM - 11:40 AM
- Recalculates every 1 second with interval cleanup on unmount
- Inline mode: `<Countdown inline />` returns `<span>`

## Critical Conventions

### File Organization
- Component files use default export, PascalCase filenames
- Pages live in `src/pages/`, utilities in `src/Components/Helper/`
- UI effects isolated in `src/Components/ui/`

### Naming Patterns
- CSS classes: Tailwind utility-first (avoid custom `.css` unless unavoidable)
- React hooks: `useState`, `useEffect`, `useId` (React 19 compatible)
- SVG IDs: Always use `useId()` + template literal for uniqueness

### Routing
- Uses `HashRouter` with `basename="/"` in `App.js`
- NavLink with `isActive` class: `className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "..."}`

## External Integrations
- **Icons**: `react-icons/fa` (FontAwesome), `react-icons/fi` (Feather)
- **Build Tool**: `react-scripts` v5 (CRA standard)
- **Deployment**: GitHub Pages (`npm run deploy` → `gh-pages` package)

## Common Tasks

### Adding a Page
1. Create `src/pages/NewPage.js` with export default component
2. Add route in `App.js`: `<Route path="/newpage" element={<NewPage />} />`
3. Add NavLink in navbar

### Styling a New Component
- Use Tailwind classes exclusively
- Reference custom fonts: `font-oswald lg:text-8xl xl:text-9xl` (see Home.js)
- Apply glass effect to modals/overlays: `bg-black/70 backdrop-blur-md`

### Custom SVG Backgrounds
- Copy `Brushstroke.js` pattern: define `<linearGradient>` with unique ID via `useId()`
- Wrap SVG in `<div className="relative">` to position content with `z-10`

## Testing Notes
- Test configuration in `.eslintConfig` extends `react-app` and `react-app/jest`
- Run `npm test` to launch Jest in watch mode
- Tests located in `src/tests/` (currently has placeholder `.html` files)
