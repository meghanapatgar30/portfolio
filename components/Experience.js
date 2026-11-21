import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="sec wrap">
      <SectionHeading label="05 / EXPERIENCE & ACTIVITIES" title="Learning beyond the classroom." sub="I'm currently a student building experience through projects, competitions, technical learning, and collaborative activities." />
      <ol className="tl">
        {experience.map((e, i) => (
          <li key={e.title}><Reveal delay={i * 60}>
            <h3>{e.title}</h3><p className="tag">{e.tag}</p>
            <ul className="hl">{e.pts.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal></li>
        ))}
      </ol>
    </section>
  );
}
