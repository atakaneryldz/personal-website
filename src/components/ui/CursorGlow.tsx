"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import "../../../styles/cursor-glow.css";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  // Light spring — glow trails the cursor just enough to feel alive, not laggy.
  const springX = useSpring(x, { stiffness: 300, damping: 32, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const el = ref.current;
    if (!el) return;

    function handleMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function handleEnter() {
      el?.classList.add("cursor-glow-visible");
      dotRef.current?.classList.add("cursor-dot-visible");
      document.body.classList.add("cursor-dot-active");
    }

    function handleLeave() {
      el?.classList.remove("cursor-glow-visible");
      dotRef.current?.classList.remove("cursor-dot-visible");
      document.body.classList.remove("cursor-dot-active");
    }

    document.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerenter", handleEnter);
    document.addEventListener("pointerleave", handleLeave);

    return () => {
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerenter", handleEnter);
      document.removeEventListener("pointerleave", handleLeave);
      document.body.classList.remove("cursor-dot-active");
    };
  }, [prefersReducedMotion, x, y]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <motion.div
        ref={ref}
        className="cursor-glow"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ x, y }}
      />
    </>
  );
}
