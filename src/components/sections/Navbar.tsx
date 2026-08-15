"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/navbar.css";

type SpotlightLinkProps = {
  href: string;
  className: string;
  children: React.ReactNode;
  whileHover?: { scale: number };
  whileTap?: { scale: number };
};

function SpotlightLink({ href, className, children, whileHover, whileTap }: SpotlightLinkProps) {
  function handlePointerMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.a
      href={href}
      className={`navbar-spotlight ${className}`}
      onPointerMove={handlePointerMove}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.a>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations();

  const LINKS = [
    { href: "#hero", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = lastScrollY.current;
    const delta = current - previous;

    if (current < 80) {
      setIsHidden(false);
    } else if (Math.abs(delta) > 4) {
      setIsHidden(delta > 0);
      if (delta > 0) setIsMenuOpen(false);
    }

    lastScrollY.current = current;
  });

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-shell"
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-130%" },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <div className="navbar-inner">
          <div className="navbar-links">
            {LINKS.map((link) => (
              <SpotlightLink key={link.href} href={link.href} className="navbar-link">
                {link.label}
              </SpotlightLink>
            ))}
          </div>

          <div className="navbar-actions">
            <LanguageSwitcher />
            <ThemeToggle />

            <SpotlightLink
              href="#contact"
              className="navbar-btn"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
            >
              {t.nav.getInTouch}
            </SpotlightLink>

            <button
              type="button"
              className="navbar-menu-btn"
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="navbar-mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="navbar-mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
