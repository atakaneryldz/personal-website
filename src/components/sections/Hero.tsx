"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/hero.css";

// Premium ease — smooth deceleration, no linear feel.
const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const HERO_START_DELAY = 0.15;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: PREMIUM_EASE },
  },
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "linear" as const } },
};

const wordContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: HERO_START_DELAY },
  },
};

const wordReveal = {
  hidden: { y: "110%", rotate: 4 },
  show: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.9, ease: PREMIUM_EASE },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations();
  const HEADING_WORDS = t.hero.headingWords;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 18, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 18, mass: 0.5 });
  const portraitX = useTransform(springX, [-1, 1], [-14, 14]);
  const portraitY = useTransform(springY, [-1, 1], [-14, 14]);
  const glowX = useTransform(springX, [-1, 1], [8, -8]);
  const glowY = useTransform(springY, [-1, 1], [8, -8]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const contentVariant = prefersReducedMotion ? fadeUpReduced : fadeUp;
  const startDelay = prefersReducedMotion ? 0 : HERO_START_DELAY;
  const staggerDelay = prefersReducedMotion ? 0 : 0.12;

  const imageInitial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 32, scale: 0.94 };
  const imageAnimate = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1 };
  const imageTransition = prefersReducedMotion
    ? { duration: 0.3, ease: "linear" as const }
    : { duration: 0.9, ease: PREMIUM_EASE, delay: startDelay + 0.25 };

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero-bg">
        <div className="hero-bg-glow hero-bg-glow-1" />
        <div className="hero-bg-glow hero-bg-glow-2" />
        <div className="hero-bg-grid" />
      </div>

      <div
        className="hero-inner"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: staggerDelay,
                delayChildren: startDelay,
              },
            },
          }}
        >
          <motion.div className="hero-badge" variants={contentVariant}>
            <span className="hero-badge-dot" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {prefersReducedMotion ? (
            <motion.h1 className="hero-heading" variants={contentVariant}>
              {HEADING_WORDS.slice(0, -1).join(" ")}{" "}
              <span className="hero-heading-accent">
                {HEADING_WORDS[HEADING_WORDS.length - 1]}
              </span>
            </motion.h1>
          ) : (
            <motion.h1
              className="hero-heading"
              initial="hidden"
              animate="show"
              variants={wordContainer}
            >
              {HEADING_WORDS.map((word, i) => (
                <span className="hero-heading-word-mask" key={word}>
                  <motion.span
                    className={`hero-heading-word${i === HEADING_WORDS.length - 1 ? " hero-heading-accent" : ""}`}
                    variants={wordReveal}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          )}

          <motion.p className="hero-role" variants={contentVariant}>
            {t.hero.role}
          </motion.p>

          <motion.p className="hero-description" variants={contentVariant}>
            {t.hero.description}
          </motion.p>

          <motion.div className="hero-ctas" variants={contentVariant}>
            <motion.a
              href="#projects"
              className="hero-cta-primary"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            >
              <span>{t.hero.viewWork}</span>
              <span className="hero-cta-arrow">
                <ArrowRight size={16} />
                <ArrowRight size={16} />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              className="hero-cta-secondary"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            >
              <span>{t.hero.getInTouch}</span>
              <span className="hero-cta-arrow">
                <ArrowUpRight size={16} />
                <ArrowUpRight size={16} />
              </span>
            </motion.a>
          </motion.div>

          <motion.div className="hero-tags" variants={contentVariant}>
            <Sparkles size={14} />
            <span>{t.hero.tags}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={imageInitial}
          animate={imageAnimate}
          transition={imageTransition}
          style={prefersReducedMotion ? undefined : { x: portraitX, y: portraitY }}
        >
          <motion.div
            className="hero-portrait-glow"
            style={prefersReducedMotion ? undefined : { x: glowX, y: glowY }}
          />
          <div className="hero-portrait-frame">
            <Image
              src="/images/profile-image.png"
              alt="Atakan Eryıldız"
              width={520}
              height={520}
              priority
              className="hero-portrait-img"
            />
          </div>
          <div className="hero-portrait-badge">
            <span className="hero-portrait-badge-value">7+</span>
            <span className="hero-portrait-badge-label">
              {t.hero.yearsExperience}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
