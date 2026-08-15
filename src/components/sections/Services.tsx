"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Smartphone, Globe, Rocket, Boxes } from "lucide-react";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/services.css";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: PREMIUM_EASE } },
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "linear" as const } },
};

const SERVICE_ICONS = [Smartphone, Globe, Rocket, Boxes];

export default function Services() {
  const prefersReducedMotion = useReducedMotion();
  const variant = prefersReducedMotion ? fadeUpReduced : fadeUp;
  const t = useTranslations();
  const services = t.services.items.map((item, i) => ({
    ...item,
    icon: SERVICE_ICONS[i],
  }));

  return (
    <section id="services" className="services section">
      <div className="section-inner">
        <motion.span
          className="section-eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.services.eyebrow}
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.services.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.services.subtitle}
        </motion.p>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                className="service-card"
                key={service.title}
                variants={variant}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span className="service-card-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="service-card-icon">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <p className="service-card-detail">
                  <span>{service.detail}</span>
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
