"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const items = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["journey", "Journey"], ["achievements", "Achievements"], ["contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
    const f = () => setScrolled(scrollY > 20);
    f(); addEventListener("scroll", f, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { removeEventListener("scroll", f); io.disconnect(); };
  }, []);

  const toggle = () => {
    const t = theme === "dark" ? "light" : "dark";
    setTheme(t); document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch {}
  };

  return (
    <header className={`nav ${scrolled || open ? "solid" : ""}`}>
      <div className="wrap nav-in">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>MEGHANA<small>DIGITAL PORTFOLIO</small></a>
        <nav aria-label="Primary" className={`links ${open ? "open" : ""}`}>
          {items.map(([id, l]) => (
            <a key={id} href={`#${id}`} className={active === id ? "act" : ""} aria-current={active === id ? "true" : undefined} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
        <div className="nav-r">
          <span className="avail"><i />OPEN TO OPPORTUNITIES</span>
          <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
