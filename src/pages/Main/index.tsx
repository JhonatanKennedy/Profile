import { Navigation } from "./sections/Navigation";
import { About } from "./sections/About";
import { Impact } from "./sections/Impact";
import { Marquee } from "@/components/Marquee";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Projects } from "./sections/Projects";

export function Main() {
  return (
    <div>
      <Navigation />
      <About />
      <Impact />
      <Marquee text="ARQUITETURA · PERFORMANCE · QUALIDADE · EXPERIÊNCIA DO USUÁRIO · FULL STACK" />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
