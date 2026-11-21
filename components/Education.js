import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GraduationCap } from "lucide-react";

const nums = [["SSLC", "94.56%"], ["PUC", "92.5%"], ["Semester 1 SGPA", "9.40"], ["Semester 2 SGPA", "9.55"], ["First-year CGPA", "9.48"]];

export default function Education() {
  return (
    <section className="sec wrap" style={{ paddingTop: 0 }}>
      <SectionHeading label="02 / EDUCATION" title="Where I'm learning." />
      <Reveal className="card edu">
        <GraduationCap size={26} className="ic" />
        <h3>Bachelor of Engineering — Information Science and Engineering</h3>
        <p className="muted">Sahyadri College of Engineering &amp; Management · Mangaluru, Karnataka, India</p>
        <p className="muted">Currently pursuing 2nd year.</p>
        <dl className="nums">{nums.map(([l, n]) => <div key={l}><dt>{l}</dt><dd>{n}</dd></div>)}</dl>
      </Reveal>
    </section>
  );
}
