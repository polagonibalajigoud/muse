# MUSE — Digital Creative Playground

> **Ideas need room.**

MUSE is a digital creative playground designed for discovering unexpected connections between thoughts, memories, shapes, textures, and concepts. It is an interactive digital art experience for creativity that guides users through a 4-step creative journey:

**SPARK → CONNECT → EXPLORE → CREATE**

---

## 🎨 Creative Direction & Visual Identity

MUSE rejects dark futuristic technology tropes and generic SaaS aesthetics. Instead, it adopts a warm, artistic editorial visual identity:

- **Primary Background**: Warm Ivory & Soft Cream (`#FAF7F2`)
- **Typography**: Deep Charcoal (`#171717`) with editorial serif display fonts (*Syne* & *Cormorant Garamond*) paired with *Plus Jakarta Sans*.
- **Intentional Accent Palette**:
  - Cobalt Blue (`#0047AB`)
  - Vermilion Red (`#E34234`)
  - Soft Lilac (`#B8A1D9`)
  - Muted Yellow (`#E5C158`)
- **Aesthetic**: Modern Art Gallery + Editorial Magazine + Experimental Creative Studio.

---

## ✨ Core Interactive Features

### 00. Living Creative Canvas (Hero)
- Enormous editorial typography: **IDEAS NEED ROOM.**
- Floating canvas with 12+ dynamic interactive floating objects (blobs, rings, sketches, paper scraps, typography fragments).
- Physics-based mouse magnet reaction: items float, drift, scale, and shift saturation on cursor approach.
- **Hero Transformation**: Scroll or click to unify scattered thoughts into a structured creative idea motif (*Scattered Thoughts → Creative Idea*).

### 01. Section 01 — SPARK
- **EVERYTHING STARTS SMALL.**
- 12 scattered floating word nodes (`FILM`, `MUSIC`, `ARCHITECTURE`, `MEMORY`, `TRAVEL`, `FASHION`, `NATURE`, `LIGHT`, `SOUND`, `PEOPLE`, `MOVEMENT`, `COLOR`).
- Hovering over a word activates SVG bezier connection lines to complementary concepts and displays synthesized emergent ideas (e.g. *MUSIC + ARCHITECTURE → SPATIAL SOUND*).

### 02. Section 02 — CONNECT
- **WHAT HAPPENS WHEN TWO IDEAS MEET?**
- Interactive two-concept collision engine with a live distance slider.
- Collide paired concepts to witness color mixing, shape overlapping, and typography transformations. Includes 4 curated pairs:
  - `ARCHITECTURE + MUSIC` → `SPATIAL SOUND`
  - `NOSTALGIA + TECHNOLOGY` → `MEMORY MACHINE`
  - `NATURE + FASHION` → `ORGANIC FORM`
  - `FILM + ARCHITECTURE` → `MOVING SPACE`

### 03. Section 03 — EXPLORE
- **FOLLOW YOUR CURIOSITY.**
- Asymmetric editorial art gallery collage with parallax speeds, oversized geometric forms, and interactive exhibit modal inspection.

### 04. Section 04 — CREATIVE DNA
- **WHAT KIND OF CREATOR ARE YOU?**
- Artistic orbital radar visualization with concentric glowing rings representing personality traits:
  - `CURIOUS (82%)`
  - `VISUAL (91%)`
  - `EXPERIMENTAL (76%)`
  - `EMOTIONAL (68%)`
  - `ANALYTICAL (54%)`
- Interactive sliders allow real-time archetype rebalancing.

### 05. Section 05 — MAKE
- **DON'T WAIT FOR THE PERFECT IDEA. START WITH SOMETHING UNFINISHED.**
- Interactive drag & drop digital studio canvas prototype.
- Toolbar tools: `+ TEXT`, `+ SHAPE`, `+ BLOB`, `COLOR SELECTOR`, `SNAPSHOT`, `CLEAR`.
- Compose floating elements live on an open composition stage.

### 06. Cinematic Epilogue & Footer
- **GO MAKE SOMETHING.**
- Minimalist climax canvas featuring an expanding geometric shape aura that reacts to the primary CTA.
- Minimal editorial footer.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Grain Generator
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Particle FX**: `canvas-confetti`

---

## 📁 Project Structure

```
muse/
├── public/
│   ├── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SparkSection.tsx
│   │   ├── ConnectSection.tsx
│   │   ├── ExploreGallery.tsx
│   │   ├── CreativeDNA.tsx
│   │   ├── MakeSection.tsx
│   │   ├── CinematicEnding.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Local Setup & Installation

1. **Navigate to project directory**:
   ```bash
   cd C:\Users\Charitha Reddy Mule\.gemini\antigravity\scratch\muse
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 📦 Production Build & Preview

To build for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment (Vercel)

This project is structured for 1-click deployment on **Vercel** or Netlify:

1. Push code to GitHub repository.
2. Import project into Vercel dashboard.
3. Build command: `npm run build`
4. Output directory: `dist`

---

## 🔗 Links

- **Live Demo**: *[https://muse-creative.vercel.app](https://muse-creative.vercel.app)*
- **Author**: *Antigravity Creative Labs*
