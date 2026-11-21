import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Code2, Globe, Wrench, Sparkles } from "lucide-react";
import { skills } from "@/data/content";

const icons = { code: Code2, globe: Globe, wrench: Wrench, sparkles: Sparkles };

export default function Skills() {
  return (
    <section id="skills" className="sec wrap">
      <SectionHeading label="03 / SKILLS" title={"Tools I use.\nSkills I continue to build."} />
      <div className="grid2">
        {skills.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 80}>
              <div className="card skill">
                <Icon size={22} className="ic" />
                <h3>{g.title}</h3>
                <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
