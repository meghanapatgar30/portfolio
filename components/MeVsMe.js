"use client";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { journey, streaks } from "@/data/content";

export default function MeVsMe() {
  const ref = useRef(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const r = ref.current.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, (innerHeight * 0.65 - r.top) / r.height)));
    };
    f(); addEventListener("scroll", f, { passive: true }); addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, []);
  return (
    <section className="sec wrap mv">
      <SectionHeading label="06 / ME VS. ME" title="Me vs. Me" sub="I don't compete with the world. I compete with who I was yesterday." />
      <div className="two">
        <ol className="mvl" ref={ref}>
          <div className="mline"><div style={{ height: `${p * 100}%` }} /></div>
          {journey.map((j, i) => <li key={j} className={p > (i + 0.4) / journey.length ? "on" : ""}>{j}</li>)}
        </ol>
        <div className="streaks">
          {streaks.map(([a, b, c]) => (
            <div className="card" key={a}><p className="mini">{a}</p><h3>{b}</h3>{c && <p className="muted small">{c}</p>}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
