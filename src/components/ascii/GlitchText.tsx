"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface Props {
  text: string;
  className?: string;
}

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@|";

function scramble(text: string, progress: number): string {
  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < Math.floor(progress * text.length)) return char;
      return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    })
    .join("");
}

export function GlitchText({ text, className = "" }: Props) {
  const [displayed, setDisplayed] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const duration = 600;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayed(scramble(text, progress));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayed(text);
      }
    },
    [text]
  );

  const handleMouseEnter = useCallback(() => {
    if (prefersReduced.current) return;
    setIsHovered(true);
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setDisplayed(text);
  }, [text]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`font-mono transition-colors duration-200 ${isHovered ? "text-accent" : ""} ${className}`}
    >
      {displayed}
    </span>
  );
}
