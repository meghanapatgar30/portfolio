import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const interests = ["Web Development", "Artificial Intelligence", "Machine Learning", "Problem Solving", "Software Development", "Creative Technology"];
const exploring = ["Java", "Next.js", "AI-powered applications"];

export default function About() {
  return (
    <section className="sec wrap">
      <SectionHeading label="01 / ABOUT ME" title={"Curiosity drives me.\nConsistency defines me."} />
      <div className="two">
        <Reveal className="prose">
          <p>I&apos;m an Information Science and Engineering student who enjoys learning how technology works and transforming ideas into practical projects. My journey is driven by curiosity, continuous improvement, and the belief that small efforts made consistently create meaningful progress.</p>
          <p>I enjoy exploring web development, programming, artificial intelligence, and problem-solving. Rather than limiting myself to classroom learning, I try to apply my knowledge through projects, coding practice, competitions, and experimentation.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="card">
            <h3 className="mini">Interests</h3>
            <ul className="chips">{interests.map((i) => <li key={i}>{i}</li>)}</ul>
            <h3 className="mini" style={{ marginTop: 24 }}>Currently exploring</h3>
            <ul className="chips alt">{exploring.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
