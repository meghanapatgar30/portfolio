"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => { const h = document.documentElement; setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)); };
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return <div className="progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />;
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(scrollY > 600);
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <button className={`totop ${show ? "show" : ""}`} aria-label="Back to top" tabIndex={show ? 0 : -1}
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={18} /></button>
  );
}
