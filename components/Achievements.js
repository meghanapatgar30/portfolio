import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/content";

export default function Achievements() {
  return (
    <section id="achievements" className="sec wrap">
      <SectionHeading label="07 / ACHIEVEMENTS" title="Milestones, not finish lines." />
      <div className="grid2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}>
            <div className="card ach">
              <h3><Trophy size={18} className="ic" /> {a.title}</h3>
              <ul>{a.items.map(([big, small]) => <li key={small}><b>{big}</b><span>{small}</span></li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
