import { links } from "@/data/content";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <p>Designed &amp; built by Meghana. © {new Date().getFullYear()}</p>
        <p className="muted">Learning. Building. Evolving.</p>
        <p><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a> • <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> • <a href={`mailto:${links.email}`}>Email</a></p>
      </div>
    </footer>
  );
}
