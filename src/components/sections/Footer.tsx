"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "../ui/icons";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/footer.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/atakaneryldz",
    icon: <GithubIcon size={17} />,
  },
  {
    label: "Email",
    href: "mailto:atakaneryldz@gmail.com",
    icon: <Mail size={17} strokeWidth={1.8} />,
  },
  {
    label: "Phone",
    href: "tel:+905073985406",
    icon: <Phone size={17} strokeWidth={1.8} />,
  },
];

export default function Footer() {
  const t = useTranslations();
  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div className="footer-brand-col" variants={fadeUp}>
          <a href="#hero" className="footer-logo">
            <span className="footer-logo-mark">
              <Image src="/images/profile-image.png" alt="" width={30} height={30} />
            </span>
            <span>Atakan Eryıldız</span>
          </a>
          <p className="footer-tagline">{t.footer.tagline}</p>
          <div className="footer-social-icons">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="footer-social-icon"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.nav className="footer-nav" variants={fadeUp} aria-label="Footer">
          <ul className="footer-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Atakan Eryıldız. {t.footer.rightsReserved}
        </p>
      </div>
    </footer>
  );
}
