"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/content";

const filters = ["All", "Web", "Python", "AI / Research"];

export default function Projects() {
  const [f, setF] = useState("All");
  const list = projects.map((p, i) => ({ p, n: i + 1 })).filter(({ p }) => f === "All" || p.tags.includes(f));
  return (
    <section id="projects" className="sec wrap">
      <SectionHeading label="04 / SELECTED PROJECTS" title={"Things I've built.\nIdeas I've explored."} />
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((x) => <button key={x} className={f === x ? "on" : ""} aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>)}
      </div>
      <div className="grid2 pgrid">{list.map(({ p, n }) => <ProjectCard key={p.title} p={p} n={n} />)}</div>
    </section>
  );
}
