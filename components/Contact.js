"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { links } from "@/data/content";

const fields = [["name", "Name", "text"], ["email", "Email", "email"], ["subject", "Subject", "text"]];

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [err, setErr] = useState({});
  const [st, setSt] = useState("idle");

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) x.email = "Enter a valid email address.";
    if (!f.subject.trim()) x.subject = "Add a subject.";
    if (f.message.trim().length < 10) x.message = "Write at least 10 characters.";
    setErr(x);
    if (Object.keys(x).length) { setSt("error"); return; }
    setSt("loading");
    setTimeout(() => {
      const body = `${f.message}\n\n— ${f.name} (${f.email})`;
      window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
      setSt("done");
    }, 600);
  };

  return (
    <section id="contact" className="sec wrap">
      <SectionHeading label="08 / CONTACT" title="Let's create something meaningful." sub="I'm always interested in learning, collaborating, exploring opportunities, and building meaningful projects." />
      <div className="two">
        <div className="clinks">
          <a className="card" href={`mailto:${links.email}`}><Mail size={20} className="ic" /> {links.email}</a>
          <a className="card" href={links.github} target="_blank" rel="noopener noreferrer"><Github size={20} className="ic" /> GitHub</a>
          <a className="card" href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="ic" /> LinkedIn</a>
        </div>
        <form className="card form" onSubmit={submit} noValidate>
          {fields.map(([k, l, t]) => (
            <div key={k}>
              <label htmlFor={k}>{l}</label>
              <input id={k} type={t} required value={f[k]} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined}
                onChange={(e) => setF({ ...f, [k]: e.target.value })} />
              {err[k] && <p className="err" id={`${k}-e`}>{err[k]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} required value={f.message} aria-invalid={!!err.message}
              onChange={(e) => setF({ ...f, message: e.target.value })} />
            {err.message && <p className="err">{err.message}</p>}
          </div>
          <button className="btn pri" type="submit" disabled={st === "loading"}>{st === "loading" ? "Opening your email app…" : <>Send message <Send size={15} /></>}</button>
          <p className="muted small" role="status" aria-live="polite">
            {st === "error" && "Please fix the highlighted fields."}
            {st === "done" && "Your email app should now be open with the message filled in. It is only sent once you press Send there."}
            {st === "idle" && "This opens your email app with the message pre-filled."}
          </p>
        </form>
      </div>
    </section>
  );
}
