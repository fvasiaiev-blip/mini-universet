import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { SineWave } from "@/components/ascii/SineWave";

export default function Home() {
  return (
    <>
      <Hero />
      <SineWave />
      <About />
      <SineWave />
      <Projects />
      <SineWave />
      <Contact />
    </>
  );
}
