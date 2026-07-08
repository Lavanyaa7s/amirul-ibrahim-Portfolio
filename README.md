# ⚡ DevHQ-Style 3D Interactive Developer Portfolio

A high-performance, dark-mode single-page developer portfolio inspired by [DevHQ](https://aakarsh-devhq.vercel.app). Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Three.js**, and **GSAP**. Features immersive 3D animations, interactive physics, custom cursor hover effects, and a 100% mobile-responsive layout.

![Portfolio Preview](https://img.shields.io/badge/Status-Live_Ready-a855f7?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## ✨ Key Features & Interactive Physics

- 🌌 **3D Particle Starfield**: Custom WebGL `PointsMaterial` starfield that dynamically rotates with mouse movement.
- ⌨️ **Role Cycling Animation**: Hero section dynamically types, pauses, and backspaces through professional roles (`DEVELOPER`, `DESIGNER`, `PROGRAMMER`, `WRITER`, `CODER`).
- 🧊 **Real 3D Perspective Tilt**: The "About Me" glassmorphism card tracks mouse coordinates in real time to tilt in 3D space with layered `translateZ` depth.
- 🎯 **Interactive Neon Cursor**: Custom cursor outline that smoothly expands and glows purple (`#a855f7`) when hovering over interactive links, buttons, and cards.
- 🌊 **Liquid Wave Skill Badges**: Hovering over tech stack icons triggers a rising purple liquid wave fill animation.
- 📜 **Scroll-Progress Timeline**: Alternating left/right work experience timeline with a glowing neon purple progress bar that grows dynamically down the center as you scroll.
- 📱 **100% Mobile & Touch Responsive**: Full hamburger menu drawer, responsive CSS grid layouts, and automatic touchscreen optimization (disables custom cursor on mobile touchscreens).
- 🖨️ **Printable HTML & PDF Resume**: Integrated resume viewer modal with a one-click **"🖨️ Print / Save as PDF"** export button (`public/resume.html` & `RESUME.md`).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & React Server Components)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Physics & Animations
- **3D Graphics**: [Three.js](https://threejs.org/) + native WebGL Canvas
- **Animations**: [GSAP](https://greensock.com/gsap/) + ScrollTrigger & CSS `@keyframes`
- **Contact Form**: [Web3Forms API](https://web3forms.com/) (No backend server required)
- **Deployment**: [Vercel](https://vercel.com/) / GitHub Pages

---

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Lavanyaa7s/amirul-ibrahim-Portfolio.git
   cd amirul-ibrahim-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the interactive portfolio!

---

## ✏️ Customizing Your Content

All website content, links, work experiences, projects, skills, and certifications are managed in a single central data file:
👉 **`src/data/portfolio.ts`**

To update your email or add new projects, simply edit `src/data/portfolio.ts` and save — the website will hot-reload automatically!

---

## 📦 Production Build & Deployment

To verify the production build locally:
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using the [Vercel CLI](https://vercel.com/cli) or by importing your GitHub repository into the Vercel Dashboard:
```bash
npx vercel --prod
```

---

## 📄 License & Credits

Designed and built by **Amirul Ibrahim**. Inspired by the modern dark-mode aesthetic of DevHQ.
