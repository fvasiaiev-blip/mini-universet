import { SineWave } from "@/components/ascii/SineWave";
import { CircuitRule } from "@/components/ascii/CircuitRule";
import { MinimalBox } from "@/components/ascii/MinimalBox";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 pb-12">
      <SineWave className="mb-2" />
      <CircuitRule className="mb-10" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted">
        <MinimalBox label="© 2026 Fedya Vasiaiev" />
        <div className="flex gap-6 font-mono text-xs">
          <a
            href="https://github.com/fvasiaiev-blip"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            github
          </a>
          <a
            href="mailto:hello@fedyavasiaiev.dev"
            className="hover:text-accent transition-colors duration-200"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
