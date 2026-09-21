# kajoester.my.id — Personal Portfolio

**Fikri Chaerul Insan**  
*DevOps Engineer • Web Developer • UI/UX Designer*

A fresh, minimalist, and high-performance personal portfolio website built with modern HTML5, vanilla CSS3 design system, and ES6+ JavaScript.

---

## ✨ Features

- **Ultra-Fast & Lightweight:** Zero external heavy JavaScript dependencies. Sub-second initial load time with 100% Lighthouse score optimization.
- **Modern Minimalist Aesthetics:**
  - Obsidian dark mode default with seamless Light Mode toggle (persists in `localStorage`).
  - Frosted glassmorphism navigation with scroll spy.
  - Interactive mouse-following radial gradient glow on Bento grid cards.
  - Ambient background glow & subtle isometric grid pattern.
  - Typewriter dynamic role animation.
- **Curated Showcases & Interactive Filters:**
  - Project filters: *All*, *DevOps & Cloud*, *Web Applications*, and *UI/UX Design*.
  - Modal case-study quick view dialog for in-depth architecture and screenshots.
- **Tech Arsenal & Skills:**
  - Visual skill bars and categorized badges covering Cloud/DevOps (Docker, K8s, CI/CD, Linux), Web (React, JS, CSS, Node), and Design (Figma, Prototyping).
- **Interactive Contact:**
  - 1-Click "Copy Email" with animated floating toast notification.
  - Functional contact form simulation with instant feedback.
  - Direct links to GitHub (`@fikrici`), LinkedIn (`@fikrixjoe`), and Instagram (`@kajovent`).
- **Live Local Time:** Dynamic real-time Jakarta time badge (`WIB / UTC+7`) in footer.

---

## 📁 File Structure

```
├── index.html           # Main semantic HTML structure & SEO meta tags
├── css/
│   ├── style.css        # CSS variables, tokens, light/dark themes, bento grid & responsive rules
│   └── animations.css   # Keyframe animations, ambient effects, and scroll-reveal
├── js/
│   ├── main.js          # Theme toggle, typewriter, scroll spy, toast, and contact form
│   ├── projects.js      # Project catalog data, filtering logic, and modal viewer
│   └── glow.js          # Interactive mouse-tracking card glow effect
└── assets/
    └── images/          # High-resolution project showcase mockups
```

---

## 🚀 How to Run Locally

You can serve the portfolio locally using Python:

```bash
# In this directory:
python -m http.server 3000
```

Then open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌐 How to Deploy to Vercel / Custom Domain (`kajoester.my.id`)

### Option A: Vercel (Recommended)
1. Push this project to your GitHub repository (e.g. `github.com/fikrici/kajoester-portfolio` or similar).
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository. Since this is pure static HTML/CSS/JS, Vercel will automatically configure it without any build command.
4. In Project Settings -> **Domains**, add `kajoester.my.id` and follow the DNS CNAME/A record instructions from your domain registrar.

### Option B: GitHub Pages
1. In your GitHub repository, go to **Settings** -> **Pages**.
2. Set the Source branch to `main` (or `master`) and folder to `/ (root)`.
3. Enter `kajoester.my.id` in the **Custom domain** field and save.
