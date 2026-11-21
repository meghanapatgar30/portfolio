import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ p, n }) {
  return (
    <article className="card pcard">
      <div className="pvis" aria-hidden="true"><span>{String(n).padStart(2, "0")}</span><em>{p.note}</em></div>
      <h3>{p.title}</h3>
      <p className="muted">{p.desc}</p>
      {p.highlights.length > 0 && <ul className="hl">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
      <ul className="chips sm">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="pbtn">
        {p.github && <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</a>}
        {p.demo && <a className="btn pri" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Live Demo</a>}
      </div>
    </article>
  );
}
