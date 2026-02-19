# TechTalk · UI/UX & Product Design Industry Preparation

> A polished, fully-responsive presentation web app built with **Vite + React + Tailwind CSS** — designed for a guest TechTalk session delivered to Higher Diploma in Software Engineering students.

---

## Overview

This project is a single-page interactive presentation covering everything a software engineering student needs to know about entering the UI/UX & Product Design industry — from understanding the roles, reading the market, surviving the AI wave, to actually making money from it.

**Speaker:** UI/UX Designer & Engineer · Freelance Product Designer  
**Audience:** Higher Diploma in Software Engineering students  
**Format:** Relaxed talk + open Q&A

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **The Roles** | UI Designer vs UX Designer vs Product Designer vs UI/UX Engineer |
| 2 | **The Market** | Sri Lanka & global salary data, hiring companies, growth trends |
| 3 | **AI Impact** | AI tools in use, what AI can/cannot replace, personal workflow |
| 4 | **Career & Freelancing** | Job vs freelance breakdown, beginner freelance roadmap, pricing mindset |
| 5 | **Tools & Self-Learning** | Personal toolkit of 16 tools + 12-month learning roadmap + curated sources |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite 5](https://vite.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI framework |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Chart.js 4](https://www.chartjs.org) + [react-chartjs-2](https://react-chartjs-2.js.org) | Interactive data charts |
| [Font Awesome 6](https://fontawesome.com) | Icons (CDN) |
| [Google Fonts](https://fonts.google.com) | Outfit + Playfair Display (CDN) |

---

## Project Structure

```
web-techtalk-ui-ux_designer/
├── public/                    # Static assets (if any)
├── src/
│   ├── components/            # All page section components
│   │   ├── Navbar.jsx         # Fixed top navigation with mobile menu
│   │   ├── Hero.jsx           # Intro + live icebreaker poll (Bar chart)
│   │   ├── Landscape.jsx      # Role cards — UI / UX / Product / Engineer
│   │   ├── Market.jsx         # SL & global market data + charts
│   │   ├── AIImpact.jsx       # AI tools, survival guide, personal workflow
│   │   ├── CareerPaths.jsx    # Job vs Freelance + beginner roadmap accordion
│   │   ├── Toolkit.jsx        # Tools grid, filter, roadmap, learning sources
│   │   └── Footer.jsx         # TL;DR takeaways + Q&A + social links
│   ├── App.jsx                # Root layout + scroll-reveal IntersectionObserver
│   ├── index.css              # Tailwind directives + global styles + chart sizes
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell — loads fonts + Font Awesome CDN
├── vite.config.js             # Vite config (React plugin)
├── tailwind.config.js         # Tailwind content paths
├── postcss.config.js          # PostCSS pipeline (Tailwind + Autoprefixer)
├── package.json               # Dependencies & scripts
└── .gitignore                 # Excludes node_modules, dist, .env
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm v9 or higher

### Install & Run

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd web-techtalk-ui-ux_designer

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Key Features

- **Live Icebreaker Poll** — Audience votes update a real-time Bar chart on screen
- **Interactive Role Cards** — Click to expand salary, tools, and day-in-life details
- **Tabbed AI Section** — Switch between Tools / Survival / Workflow tabs
- **Job vs Freelance Toggle** — Full comparison with accordion roadmap steps
- **Tools Filter** — Filter 16 tools by category (Design / Code / AI / Productivity)
- **Scroll Animations** — Sections fade in on scroll via IntersectionObserver
- **Fully Responsive** — Designed for mobile (320px) through desktop (1280px+)

---

## Responsive Design Breakpoints

| Breakpoint | Width | Layout adjustments |
|------------|-------|--------------------|
| Mobile | < 640px | Single column, stacked tabs, scaled headings |
| Tablet | 640px–767px | 2-column grids, horizontal tab row |
| Desktop | 768px+ | Full multi-column layouts |
| Wide | 1024px+ | Max-width 1152px centered container |

---

## Development Notes

- **No TypeScript** — Kept as plain JSX for simplicity and fast iteration
- **Chart.js registration** — Each component registers only its needed Chart.js modules (no global registration to avoid bundle bloat)
- **CSS validator warning** — VS Code's built-in CSS linter flags `@tailwind` directives; this is suppressed in `.vscode/settings.json` — PostCSS handles them correctly
- **Fonts & Icons via CDN** — FontAwesome and Google Fonts are loaded from CDN in `index.html` to keep the JS bundle lean

---

## Deployment

This is a static site — deploy the `dist/` folder to any static host:

| Platform | Command / Method |
|----------|-----------------|
| **GitHub Pages** | Push `dist/` to `gh-pages` branch, or use [gh-pages](https://www.npmjs.com/package/gh-pages) package |
| **Vercel** | Connect repo → auto-detects Vite → deploys on push |
| **Netlify** | Drag & drop `dist/` folder, or connect repo |
| **Surge.sh** | `npm i -g surge && surge dist/` |

---

## License

This project is for educational / personal use. Content, slides, and data are original material prepared by the speaker.
