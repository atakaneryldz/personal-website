"use client";

import { useActionState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { sendContactMessage, type ContactFormState } from "../../app/actions";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/contact.css";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: PREMIUM_EASE } },
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "linear" as const } },
};

const initialState: ContactFormState = { status: "idle" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );
  const prefersReducedMotion = useReducedMotion();
  const variant = prefersReducedMotion ? fadeUpReduced : fadeUp;
  const t = useTranslations();

  return (
    <section id="contact" className="contact section">
      <div className="section-inner contact-inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="contact-info"
        >
          <motion.span className="section-eyebrow" variants={variant}>
            {t.contact.eyebrow}
          </motion.span>
          <motion.h2 className="section-title" variants={variant}>
            {t.contact.title}
          </motion.h2>
          <motion.p className="section-subtitle" variants={variant}>
            {t.contact.subtitle}
          </motion.p>

          <motion.div className="contact-links" variants={variant}>
            <a href="mailto:atakaneryldz@gmail.com" className="contact-link">
              <Mail size={16} />
              <span>atakaneryldz@gmail.com</span>
            </a>
            <a href="tel:+905073985406" className="contact-link">
              <Phone size={16} />
              <span>+90 507 398 5406</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.form
          action={formAction}
          className="contact-form"
          noValidate
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {/* Honeypot field — hidden from real users, catches bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="contact-honeypot"
            aria-hidden="true"
          />

          <div className="contact-field">
            <label htmlFor="name" className="contact-label">
              {t.contact.form.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="contact-input"
              placeholder={t.contact.form.namePlaceholder}
              disabled={pending}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              {t.contact.form.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="contact-input"
              placeholder={t.contact.form.emailPlaceholder}
              disabled={pending}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message" className="contact-label">
              {t.contact.form.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="contact-textarea"
              placeholder={t.contact.form.messagePlaceholder}
              disabled={pending}
            />
          </div>

          <button type="submit" className="contact-submit" disabled={pending}>
            <span>{pending ? t.contact.form.sending : t.contact.form.submit}</span>
            <Send size={15} />
          </button>

          {state.status === "success" && (
            <p
              className="contact-form-status contact-form-status-success"
              role="status"
            >
              {state.message ?? t.contact.form.defaultSuccess}
            </p>
          )}
          {state.status === "error" && (
            <p
              className="contact-form-status contact-form-status-error"
              role="alert"
            >
              {state.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
