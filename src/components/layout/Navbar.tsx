"use client";

import { motion } from "framer-motion";
import { GlitchText } from "@/components/ascii/GlitchText";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  const progress = useScrollProgress();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#" className="font-mono text-sm text-text tracking-widest">
          <GlitchText text="FV" />
        </a>
        <ul className="flex gap-6 md:gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-sans text-sm text-text/70 hover:text-text transition-colors duration-200 tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Scroll progress bar */}
      <motion.div
        className="h-px bg-accent origin-left"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
