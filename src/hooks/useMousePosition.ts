"use client";

import { useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";

export function useMousePosition() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = "ontouchstart" in window;
    if (isTouch.current) return;

    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return { x, y, isTouch: isTouch.current };
}
