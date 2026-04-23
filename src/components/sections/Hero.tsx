"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeIn } from "@/lib/motion";

const ASCII_SIG = `
███████╗███████╗██████╗ ██╗   ██╗ █████╗
██╔════╝██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗
█████╗  █████╗  ██║  ██║ ╚████╔╝ ███████║
██╔══╝  ██╔══╝  ██║  ██║  ╚██╔╝  ██╔══██║
██║     ███████╗██████╔╝   ██║   ██║  ██║
╚═╝     ╚══════╝╚═════╝    ╚═╝   ╚═╝  ╚═╝`.trim();

interface Particle {
  x: number;
  y: number;
  char: string;
  opacity: number;
  speed: number;
  phase: number;
}

const STAR_CHARS = ["*", "·", "✦", "·", "·", "*", "·"];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Reinitialise particles on resize
      particlesRef.current = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: STAR_CHARS[Math.floor(Math.random() * STAR_CHARS.length)],
        opacity: Math.random() * 0.4 + 0.05,
        speed: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px monospace";
      particlesRef.current.forEach((p) => {
        const pulse = Math.sin(t * p.speed + p.phase) * 0.5 + 0.5;
        ctx.globalAlpha = p.opacity * pulse;
        ctx.fillStyle = "#a8ff78";
        ctx.fillText(p.char, p.x, p.y);
      });
      t += 0.02;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Star field canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4"
        >
          {/* Name — staggered words */}
          <div className="overflow-hidden">
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text leading-none tracking-tight"
            >
              Fedya
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={fadeUp}
              custom={0.25}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text leading-none tracking-tight"
            >
              Vasiaiev
            </motion.h1>
          </div>

          {/* Role */}
          <motion.p
            variants={fadeIn}
            custom={0.6}
            className="font-sans text-muted text-sm tracking-[0.3em] uppercase mt-2"
          >
            Software Developer
          </motion.p>

          {/* ASCII signature */}
          <motion.pre
            variants={fadeIn}
            custom={1.0}
            aria-hidden="true"
            className="font-mono text-[7px] sm:text-[9px] text-muted select-none leading-tight mt-4 opacity-30"
          >
            {ASCII_SIG}
          </motion.pre>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: { delay: 1.3, duration: 0.5 },
            y: { delay: 1.3, duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent font-mono text-sm select-none"
          aria-hidden="true"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
