"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/about.css";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: PREMIUM_EASE } },
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "linear" as const } },
};

const clipReveal = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  show: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease: PREMIUM_EASE },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const variant = prefersReducedMotion ? fadeUpReduced : fadeUp;
  const t = useTranslations();
  const stats = t.about.stats;
  const timeline = t.about.timeline;

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="section-inner about-inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.span className="section-eyebrow" variants={variant}>
            {t.about.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title about-title-clip"
            variants={prefersReducedMotion ? fadeUpReduced : clipReveal}
          >
            {t.about.title}
          </motion.h2>
          <motion.p className="about-lede" variants={variant}>
            {t.about.lede.before}
            <strong>{t.about.lede.strong}</strong>
            {t.about.lede.after}
          </motion.p>

          <motion.div className="about-stats" variants={variant}>
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.ol
          className="about-timeline"
          ref={timelineRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {!prefersReducedMotion && (
            <motion.div
              className="about-timeline-progress"
              style={{ scaleY: lineProgress }}
            />
          )}
          {timeline.map((item) => (
            <motion.li
              className="about-timeline-item"
              key={`${item.org}-${item.role}`}
              variants={variant}
            >
              <div className="about-timeline-marker" />
              <div className="about-timeline-content">
                <span className="about-timeline-period">{item.period}</span>
                <h3 className="about-timeline-role">{item.role}</h3>
                <span className="about-timeline-org">{item.org}</span>
                <p className="about-timeline-detail">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
