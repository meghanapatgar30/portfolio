# Meghana Mohan Patgar — Developer Portfolio

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
