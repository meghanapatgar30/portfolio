# 🌌 MY UNIVERSE — MEGHANA

### Meghana Mohan Patgar | Developer Portfolio

A responsive, interactive, single-page developer portfolio built using **Next.js, React, CSS, and Lucide icons**.

The portfolio showcases my academic journey, technical skills, projects, achievements, and experience through a futuristic design inspired by the idea of *My Universe*.

## ✨ Features

- Responsive design for desktop, tablet, and mobile.
- Sticky navigation with active-section highlighting.
- Dark and light theme with localStorage persistence.
- Animated orbit-style hero section.
- Project filtering: All, Web, Python, AI, and Research.
- Scroll-reveal animations.
- Interactive "Me vs. Me" timeline.
- Validated contact form using `mailto:`.
- Scroll progress indicator.
- Back-to-top button.
- Reduced-motion accessibility support.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Frontend:** React 18
- **Styling:** CSS
- **Icons:** Lucide React
- **Fonts:** Space Grotesk, Inter, JetBrains Mono
- **Development Tools:** VS Code, Git, GitHub

## 📂 Project Structure

```text
meghana-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── icon.svg
├── components/
├── data/
│   └── content.js
├── public/
│   └── images/
│       └── megha.png
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Run Locally

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd meghana-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Check the production build:

```bash
npm run build
```

## ✏️ Customize Content

All portfolio text, projects, links, and statistics are maintained in:

`data/content.js`

Update this file to customize the portfolio content. Set a project's `github` or `demo` property to a URL to display its corresponding button. Set it to `null` to hide the button.

## 🌐 Deployment

This project is ready for deployment on **Vercel**.

1. Push the project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Deploy using the automatically detected Next.js settings.

## 👩‍💻 Author

**Meghana Mohan Patgar**

Information Science and Engineering Student  
Sahyadri College of Engineering & Management, Mangaluru

---

*Building my future, one step at a time. Me vs. Me.* ✨# Meghana Mohan Patgar — Developer Portfolio

A responsive single-page portfolio built with Next.js (App Router), React and Lucide icons. Theme: **MY UNIVERSE — MEGHANA**.

## Features
Sticky navbar with active-section highlight and mobile menu · dark/light theme (saved in localStorage) · animated CSS orbit hero · project filter (All / Web / Python / AI / Research) · scroll-reveal animations · scroll-driven "Me vs. Me" timeline · validated contact form (opens your email app via `mailto:`) · scroll progress bar · back-to-top · reduced-motion support.

## Tech
Next.js 14 · React 18 · plain CSS · lucide-react · next/font (Space Grotesk, Inter, JetBrains Mono)

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Edit content
All text, projects, links and stats live in `data/content.js`. Set a project's `github` or `demo` to a URL to show that button; `null` hides it.

## Deploy
Push to GitHub, then import the repo at vercel.com — no extra configuration needed.
