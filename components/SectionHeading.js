import Reveal from "./Reveal";

export default function SectionHeading({ label, title, sub }) {
  return (
    <Reveal className="sh">
      <p className="label">{label}</p>
      <h2>{title.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}
