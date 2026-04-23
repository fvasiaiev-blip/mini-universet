import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DnaTwist } from "@/components/ascii/DnaTwist";

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-32 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionHeader title="About" number="01" />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <div className="space-y-6">
          <ScrollReveal delay={0.1}>
            <p className="font-sans text-text/80 leading-relaxed text-lg">
              Hi — I&apos;m Fedya. I build software that&apos;s designed to be
              used, not just admired. I care about the details: clean
              architecture, readable code, and interfaces that feel effortless.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-muted leading-relaxed">
              I work across the stack — from data models and APIs to the pixels
              on the screen. I&apos;m most at home in Python and TypeScript
              ecosystems, and I believe good software is quiet: it just works.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-sans text-muted leading-relaxed">
              When I&apos;m not writing code, I&apos;m probably thinking about
              systems, languages, or how ancient cultures measured time.
            </p>
          </ScrollReveal>
        </div>

        {/* Accent column */}
        <ScrollReveal delay={0.15} className="flex flex-col items-center gap-8">
          <DnaTwist height={16} className="opacity-60" />
          <blockquote className="font-display italic text-2xl text-accent text-center leading-snug px-4 border-l-2 border-accent/30 pl-6">
            &ldquo;Good software is quiet. It just works.&rdquo;
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
