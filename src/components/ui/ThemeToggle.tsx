"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import "../../../styles/theme-toggle.css";

const STORAGE_KEY = "theme";

function readStoredTheme(): "light" | "dark" {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function ThemeToggle() {
  // Server always renders "dark" (matching the <html> fallback in layout.tsx).
  // The inline blocking script sets the real theme on the DOM before paint,
  // but React's own state must start at the same default to avoid a
  // hydration mismatch, then sync from localStorage right after mount.
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setTheme(readStoredTheme());
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, etc.) — theme still applies for this session.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="moon"
            className="theme-toggle-icon"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.6 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.3, ease: "easeOut" }}
          >
            <Moon size={17} strokeWidth={2} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            className="theme-toggle-icon"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.6 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.3, ease: "easeOut" }}
          >
            <Sun size={17} strokeWidth={2} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
