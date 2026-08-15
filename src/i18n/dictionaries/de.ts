import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  nav: {
    home: "Start",
    about: "Über mich",
    services: "Leistungen",
    projects: "Projekte",
    stack: "Stack",
    contact: "Kontakt",
    getInTouch: "Kontakt aufnehmen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  hero: {
    badge: "Verfügbar für Freelance-Projekte",
    headingWords: ["Hi", "👋,", "ich", "bin", "Atakan."],
    role: "Senior Full-Stack-Entwickler",
    description:
      "Ich habe 7 Jahre Erfahrung darin, mobile und Web-Produkte von der Idee bis zur Produktion zu bringen. Bei Andora Apps helfe ich Startups und Projekten, skalierbare, moderne und nutzerorientierte Produkte zu entwickeln.",
    viewWork: "Meine Arbeiten ansehen",
    getInTouch: "Kontakt aufnehmen",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Jahre Erfahrung",
  },

  about: {
    eyebrow: "Über mich",
    title: "Von der Idee zur Produktion.",
    lede: {
      before:
        "Ich bin Senior Full-Stack-Entwickler mit 7 Jahren Erfahrung darin, Ideen in echte, veröffentlichte Produkte zu verwandeln. Ich arbeite mit Flutter und Swift im Mobile-Bereich sowie mit Next.js, React und TypeScript im Web. Heute baue ich bei ",
      strong: "Andora Apps",
      after:
        " End-to-End-Produkte für Startups und Teams unterschiedlicher Größe. Davor war ich an der Gründung von Projekten wie Fuxi und Getarf Logistic beteiligt und leitete Engineering-Teams.",
    },

    stats: [
      { value: "7+", label: "Jahre Erfahrung" },
      { value: "3", label: "Gründer- / Führungsrollen" },
      { value: "20+", label: "Produkte veröffentlicht" },
      { value: "Full-Stack", label: "Mobile · Web · iOS" },
    ],

    timeline: [
      {
        period: "Jetzt",
        role: "Full-Stack-Entwickler",
        org: "Andora Apps",
        detail:
          "Entwickle vollständige Mobile- und Web-Lösungen für Startups, von der technischen Architektur über die Entwicklung bis zum Launch.",
      },
      {
        period: "Zuvor",
        role: "Mitgründer & CEO",
        org: "Fuxi",
        detail:
          "Habe ein Gruppen-Shopping-Produkt von Grund auf konzipiert und entwickelt, mit einer skalierbaren Struktur auf Basis von Flutter, Clean Architecture und BLoC.",
      },
      {
        period: "Zuvor",
        role: "Senior Flutter-Entwickler",
        org: "Lojimod",
        detail:
          "Nach der Übernahme von Getarf an der Entwicklung und Skalierung zentraler Flutter-Anwendungen zur Unterstützung operativer Prozesse mitgewirkt.",
      },
      {
        period: "Zuvor",
        role: "Mitgründer & CTO",
        org: "Getarf Logistic",
        detail:
          "Leitete Produkt- und Engineering-Prozesse und verantwortete die Entwicklung der mobilen Apps sowie der technischen Infrastruktur. Das Unternehmen wurde später von Lojimod übernommen.",
      },
      {
        period: "Zuvor",
        role: "Mobile Team Lead",
        org: "Pingpong University",
        detail:
          "Leitete das Engineering-Team, das die Kern-Apps der Plattform entwickelte, und verantwortete die mobilen Entwicklungsprozesse des Produkts.",
      },
    ],
  },

  services: {
    eyebrow: "Leistungen",
    title: "Was können wir bauen?",
    subtitle:
      "Von der Umsetzung deiner Idee bis zur Weiterentwicklung deines bestehenden Produkts biete ich End-to-End-Unterstützung in Architektur, Entwicklung und Launch.",
    items: [
      {
        title: "Mobile-App-Entwicklung",
        description:
          "Ich baue skalierbare plattformübergreifende Apps mit Flutter und native iOS-Erlebnisse mit Swift: produktionsreife, performanceorientierte Lösungen, bereit für den Store.",
        detail: "Flutter · Swift · BLoC · App Store & Google Play",
      },
      {
        title: "Webanwendungsentwicklung",
        description:
          "Ich baue moderne, schnelle und skalierbare Webanwendungen mit Next.js und React, von Landingpages bis zu umfangreichen SaaS- und Admin-Dashboards.",
        detail: "Next.js · React · TypeScript · Performance & Skalierbarkeit",
      },
      {
        title: "Produkt- & MVP-Entwicklung",
        description:
          "Ich verwandle Ideen in frühem Stadium in ein funktionierendes MVP, definiere den richtigen Umfang und bringe Mobile- und Web-Produkte durch schnelle Iterationen in die Produktion.",
        detail: "Produktumfang · Prototyping · MVP · Weg zur Produktion",
      },
      {
        title: "Technische Architektur & Beratung",
        description:
          "Ich baue die richtige technische Architektur für Produkte, die langfristig wartbar und skalierbar bleiben müssen. Ich analysiere bestehende Projekte, reduziere technische Schulden und verbessere Entwicklungsprozesse.",
        detail: "Code-Reviews · System-Design · Clean Architecture · Skalierbarkeit",
      },
    ],
  },

  projects: {
    eyebrow: "Projekte",
    title: "Ausgewählte Arbeiten",
    subtitle:
      "Eine Auswahl der mobilen und Web-Produkte, die ich für unterschiedliche Anforderungen entwickelt habe, von eigenen Produkten bis zu Kundenprojekten.",

    items: [
      {
        name: "TourSync",
        description:
          "KI-gestützte Tourmanagement-Plattform für Künstler, DJs und Musiker. Mobile App, Web-Plattform und Landingpage vollständig selbst entwickelt.",
      },
      {
        name: "Fuxi",
        description:
          "Gruppen-Shopping- und Angebots-App, entwickelt mit Flutter, Clean Architecture, BLoC und einer feature-first modularen Struktur.",
      },
      {
        name: "Kiraala",
        description:
          "Mobile Peer-to-Peer-Vermietungsplattform, auf der Nutzer ihre Gegenstände listen und vermieten können.",
      },
      {
        name: "Bulcar",
        description:
          "Transportplattform mit Fokus auf Matching und Mitfahrgelegenheiten, mit separaten mobilen Apps für Mitfahrer und Fahrer.",
      },
      {
        name: "Tazepaket",
        description:
          "Eine an das Too-Good-To-Go-Modell angelehnte mobile App zur Vermeidung von Lebensmittelverschwendung. Entwickelt mit Clean Architecture und BLoC.",
      },
    ],

    visitLabel: "Projekt ansehen",
    githubLabel: "Auf GitHub ansehen",
  },

  stack: {
    eyebrow: "Stack",
    title: "Technologien, die ich nutze",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Lass uns gemeinsam ein Produkt bauen.",
    subtitle:
      "Hast du eine neue Projektidee oder suchst einen erfahrenen Entwickler für dein bestehendes Produkt? Ich bin offen für Freelance-Arbeit. Erzähl mir kurz von deinem Projekt.",
    form: {
      nameLabel: "Vor- und Nachname",
      namePlaceholder: "Dein Vor- und Nachname",
      emailLabel: "E-Mail",
      emailPlaceholder: "du@beispiel.com",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzähl mir von deinem Projekt und deinen Anforderungen...",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      defaultSuccess: "Danke! Ich habe deine Nachricht erhalten und melde mich bald bei dir.",
    },
  },

  footer: {
    tagline: "Senior Full-Stack-Entwickler · Flutter · Next.js / React · Swift / iOS",
    rightsReserved: "Alle Rechte vorbehalten.",
  },
};

export default dictionary;
