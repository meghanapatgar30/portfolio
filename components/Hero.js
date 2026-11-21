import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-txt">
        <p className="kicker">Information Science &amp; Engineering<br />Student • Developer • Lifelong Learner</p>
        <h1>Building ideas.<br />Turning them into <span className="grad">reality.</span></h1>
        <p className="lead">I&apos;m Meghana — an engineering student passionate about technology, problem-solving, web development, and exploring the possibilities of AI.</p>
        <div className="cta">
          <a className="btn pri" href="#projects">Explore My Work <ArrowRight size={16} /></a>
          <a className="btn" href="#contact">Let&apos;s Connect</a>
        </div>
      </div>
      <div className="orbit">
        <div className="rings" aria-hidden="true"><i className="r r1" /><i className="r r2" /><i className="r r3" /></div>
        <div className="glow" aria-hidden="true" />
        <figure className="portrait">
          <Image src="/images/megha.png" alt="Portrait of Meghana Mohan Patgar" fill priority sizes="(max-width: 900px) 340px, 470px" className="pimg" />
        </figure>
        <div className="stat s1"><b>100+</b><span>Coding problems solved</span></div>
        <div className="stat s2"><b>9.48</b><span>First-year CGPA</span></div>
        <div className="stat s3"><b>250+</b><span>Day coding streak (milestone)</span></div>
      </div>
      <a href="#about" className="scroll" aria-label="Scroll to About section"><ChevronDown size={22} /></a>
    </section>
  );
}
