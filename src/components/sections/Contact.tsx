import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CircuitRule } from "@/components/ascii/CircuitRule";
import { MagneticButton } from "@/components/ui/MagneticButton";

const links = [
  { label: "hello@fedyavasiaiev.dev", href: "mailto:hello@fedyavasiaiev.dev", external: false },
  { label: "github", href: "https://github.com/fvasiaiev-blip", external: true },
  { label: "linkedin", href: "https://linkedin.com/in/fedyavasiaiev", external: true },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-32 max-w-6xl mx-auto">
      <ScrollReveal>
        <CircuitRule className="mb-16" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SectionHeader title="Contact" number="03" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="font-display text-3xl md:text-4xl text-text/80 mb-16 max-w-lg leading-snug">
          Let&apos;s build something worth using.
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-6">
        {links.map(({ label, href, external }, i) => (
          <ScrollReveal key={label} delay={0.25 + i * 0.1}>
            <MagneticButton
              href={href}
              external={external}
              className="font-sans text-xl md:text-2xl text-muted pb-1"
            >
              {label}
            </MagneticButton>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
