import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import MeVsMe from "@/components/MeVsMe";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgress, BackToTop } from "@/components/Utils";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <div id="about"><About /><Education /></div>
        <Skills />
        <Projects />
        <div id="journey"><Experience /><MeVsMe /></div>
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
