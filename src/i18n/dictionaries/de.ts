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
      "7 Jahre Erfahrung in der End-to-End-Entwicklung mobiler und Web-Produkte. Als Freelancer bei Andora Apps helfe ich Startups, ausgereifte Apps und Plattformen zu liefern — von der Idee bis zur Produktion.",
    viewWork: "Arbeiten ansehen",
    getInTouch: "Kontakt aufnehmen",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Jahre Erfahrung",
  },
  about: {
    eyebrow: "Über mich",
    title: "Für die Welt entwickeln.",
    lede: {
      before:
        "Senior Full-Stack-Entwickler mit 7 Jahren Erfahrung darin, Ideen in fertige Produkte zu verwandeln — Flutter für Mobile, Next.js/React für das Web und natives iOS mit Swift. Heute arbeite ich freiberuflich bei ",
      strong: "Andora Apps",
      after:
        "; davor habe ich mehrere Startups mitgegründet und deren Engineering geleitet, darunter Fuxi und Getarf Logistic (übernommen von Lojimod).",
    },
    stats: [
      { value: "7+", label: "Jahre Erfahrung" },
      { value: "3", label: "Unternehmen gegründet / geleitet" },
      { value: "20+", label: "Produkte veröffentlicht" },
      { value: "Full-Stack", label: "Mobile, Web & iOS" },
    ],
    timeline: [
      {
        period: "Jetzt",
        role: "Freelance-Entwickler",
        org: "Andora Apps",
        detail:
          "Liefere vollständige Mobile- und Web-Lösungen für Startups — von der Architektur bis zum Launch.",
      },
      {
        period: "Zuvor",
        role: "Mitgründer & CEO",
        org: "Fuxi",
        detail:
          "Habe eine Flutter-App für Gruppen-Shopping von Grund auf mit Clean Architecture entwickelt.",
      },
      {
        period: "Zuvor",
        role: "Senior Flutter-Entwickler",
        org: "Lojimod",
        detail:
          "Habe zentrale Flutter-Anwendungen nach der Übernahme von Getarf entwickelt und skaliert.",
      },
      {
        period: "Zuvor",
        role: "Mitgründer & CTO",
        org: "Getarf Logistic",
        detail:
          "Leitete Produkt und Engineering; das Unternehmen wurde später von Lojimod übernommen.",
      },
      {
        period: "Zuvor",
        role: "Mobile Team Lead",
        org: "Pingpong University",
        detail:
          "Leitete das Mobile-Engineering-Team, das die Kern-Apps der Plattform entwickelte.",
      },
    ],
  },
  services: {
    eyebrow: "Leistungen",
    title: "Was ich für dich bauen kann",
    subtitle:
      "End-to-End-Produktentwicklung — ich übernehme alles von der Architektur bis zum Launch oder integriere mich in ein bestehendes Team.",
    items: [
      {
        title: "Mobile-App-Entwicklung",
        description:
          "Plattformübergreifende Apps mit Flutter und native iOS-Apps mit Swift — produktionsreif, App-Store-tauglich und skalierbar gebaut.",
        detail: "Flutter · Swift · BLoC · Auslieferung im App Store & Play Store",
      },
      {
        title: "Webanwendungsentwicklung",
        description:
          "Schnelle, moderne Webanwendungen und Marketing-Websites mit Next.js und React — von Landingpages bis zu vollständigen Produkt-Dashboards.",
        detail: "Next.js · React · TypeScript · Performance-orientierte Builds",
      },
      {
        title: "Produkt- / MVP-Entwicklung",
        description:
          "0-zu-1-Entwicklung für Gründer — ich verwandle ein Konzept in ein funktionierendes, marktreifes Produkt für Mobile und Web.",
        detail: "Konzeption · schnelles Prototyping · launch-bereit in Wochen statt Monaten",
      },
      {
        title: "Technische Architektur & Beratung",
        description:
          "Saubere, wartbare Architektur von Anfang an — Clean Architecture, BLoC und skalierbare Projektstruktur.",
        detail: "Code-Reviews · System-Design · skalierbare Projektstruktur",
      },
    ],
  },
  projects: {
    eyebrow: "Projekte",
    title: "Ausgewählte Arbeiten",
    subtitle: "Eine Mischung aus eigenen Produkten und Kundenprojekten im Mobile- und Web-Bereich.",
    items: [
      {
        name: "TourSync",
        description:
          "KI-gestützte Tourmanagement-Plattform für Künstler, DJs und Musiker — Mobile, Web und Landingpage, vollständig selbst entwickelt.",
      },
      {
        name: "Fuxi",
        description:
          "Gruppen-Shopping- und Angebots-App mit Clean Architecture + BLoC und einer feature-first modularen Struktur.",
      },
      {
        name: "Kiraala",
        description: "Mobile Peer-to-Peer-Vermietungsplattform.",
      },
      {
        name: "Bulcar",
        description: "Mitfahr-Plattform mit separaten Apps für Mitfahrer und Fahrer.",
      },
      {
        name: "Tazepaket",
        description:
          "Eine App im Stil von Too Good To Go zur Rettung überschüssiger Lebensmittel, entwickelt mit Clean Architecture + BLoC.",
      },
    ],
    visitLabel: "Besuchen",
    githubLabel: "auf GitHub",
  },
  stack: {
    eyebrow: "Stack",
    title: "Werkzeuge, die ich nutze",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lass uns etwas bauen.",
    subtitle:
      "Hast du ein Projekt im Kopf oder möchtest einfach nur fachsimpeln? Ich bin derzeit offen für Freelance-Arbeit — schreib mir eine Nachricht oder melde dich direkt.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Dein Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "du@beispiel.com",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzähl mir von deinem Projekt...",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      defaultSuccess: "Danke — ich melde mich bald bei dir.",
    },
  },
  footer: {
    tagline: "Senior Full-Stack-Entwickler — Flutter, Next.js/React & Swift/iOS.",
    rightsReserved: "Alle Rechte vorbehalten.",
  },
};

export default dictionary;
