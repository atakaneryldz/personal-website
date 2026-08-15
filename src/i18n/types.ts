export type Dictionary = {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    stack: string;
    contact: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headingWords: string[];
    role: string;
    description: string;
    viewWork: string;
    getInTouch: string;
    tags: string;
    yearsExperience: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lede: {
      before: string;
      strong: string;
      after: string;
    };
    stats: { value: string; label: string }[];
    timeline: {
      period: string;
      role: string;
      org: string;
      detail: string;
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      detail: string;
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      description: string;
    }[];
    visitLabel: string;
    githubLabel: string;
  };
  stack: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      defaultSuccess: string;
    };
  };
  footer: {
    tagline: string;
    rightsReserved: string;
  };
};

export type Locale = "en" | "es" | "de" | "tr";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "tr", label: "Türkçe" },
];

export const DEFAULT_LOCALE: Locale = "en";
