"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/stack.css";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: PREMIUM_EASE } },
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "linear" as const } },
};

const stack = [
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "Dart", icon: "/icons/dart.svg" },
  { name: "Swift", icon: "/icons/swift.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "iOS", icon: "/icons/apple.svg" },
  { name: "Android", icon: "/icons/android.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
];

export default function Stack() {
  const prefersReducedMotion = useReducedMotion();
  const variant = prefersReducedMotion ? fadeUpReduced : fadeUp;
  const marqueeItems = [...stack, ...stack];
  const t = useTranslations();

  return (
    <section id="stack" className="stack section">
      <div className="section-inner">
        <motion.span
          className="section-eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.stack.eyebrow}
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.stack.title}
        </motion.h2>
      </div>

      <motion.div
        className="stack-marquee-wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={variant}
      >
        <div className={`stack-marquee${prefersReducedMotion ? " stack-marquee-static" : ""}`}>
          <div className="stack-marquee-track">
            {marqueeItems.map((tech, i) => (
              <div className="stack-tile" key={`${tech.name}-${i}`}>
                <Image
                  src={tech.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="stack-tile-icon"
                  aria-hidden="true"
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
