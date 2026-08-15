import type { Locale } from "./types";

export const SITE_URL = "https://atakaneryildiz.com";

type LocaleSeo = {
  title: string;
  description: string;
  ogLocale: string;
};

export const LOCALE_SEO: Record<Locale, LocaleSeo> = {
  en: {
    title: "Atakan Eryıldız — Senior Full-Stack Developer",
    description:
      "Senior full-stack developer with 7+ years of experience building mobile and web products end-to-end: Flutter, Next.js/React, and native iOS/Swift. Building at Andora Apps.",
    ogLocale: "en_US",
  },
  es: {
    title: "Atakan Eryıldız — Desarrollador Full-Stack Senior",
    description:
      "Desarrollador full-stack senior con más de 7 años de experiencia creando productos móviles y web de principio a fin: Flutter, Next.js/React y iOS/Swift nativo. Construyendo en Andora Apps.",
    ogLocale: "es_ES",
  },
  de: {
    title: "Atakan Eryıldız — Senior Full-Stack-Entwickler",
    description:
      "Senior Full-Stack-Entwickler mit über 7 Jahren Erfahrung in der End-to-End-Entwicklung mobiler und Web-Produkte: Flutter, Next.js/React und natives iOS/Swift. Baue bei Andora Apps.",
    ogLocale: "de_DE",
  },
  tr: {
    title: "Atakan Eryıldız — Kıdemli Full-Stack Geliştirici",
    description:
      "Mobil ve web ürünlerini uçtan uca geliştirmede 7+ yıllık deneyime sahip kıdemli full-stack geliştirici: Flutter, Next.js/React ve native iOS/Swift. Andora Apps'te geliştiriyorum.",
    ogLocale: "tr_TR",
  },
};
