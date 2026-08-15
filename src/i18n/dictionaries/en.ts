import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    getInTouch: "Get in Touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    badge: "Open for freelance projects",
    headingWords: ["Hi", "👋,", "I'm", "Atakan."],
    role: "Senior Full-Stack Developer",
    description:
      "I have 7 years of experience taking mobile and web products from idea to production. At Andora Apps, I help startups and ventures build scalable, modern, user-focused products.",
    viewWork: "View My Work",
    getInTouch: "Get in Touch",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Years Experience",
  },

  about: {
    eyebrow: "About",
    title: "From idea to production.",
    lede: {
      before:
        "I'm a senior full-stack developer with 7 years of experience turning ideas into real, shipped products. I work with Flutter and Swift on mobile, and Next.js, React, and TypeScript on the web. Today I build at ",
      strong: "Andora Apps",
      after:
        ", developing end-to-end products for startups and teams of different sizes. Previously, I was involved in founding ventures like Fuxi and Getarf Logistic and led engineering teams.",
    },

    stats: [
      { value: "7+", label: "Years Experience" },
      { value: "3", label: "Founder / Leadership Roles" },
      { value: "20+", label: "Products Shipped" },
      { value: "Full-Stack", label: "Mobile · Web · iOS" },
    ],

    timeline: [
      {
        period: "Now",
        role: "Full-Stack Developer",
        org: "Andora Apps",
        detail:
          "Building complete mobile and web solutions for startups, from technical architecture through development and launch.",
      },
      {
        period: "Prev",
        role: "Co-founder & CEO",
        org: "Fuxi",
        detail:
          "Designed and built a group-shopping mobile product from the ground up, with a scalable structure based on Flutter, Clean Architecture, and BLoC.",
      },
      {
        period: "Prev",
        role: "Senior Flutter Developer",
        org: "Lojimod",
        detail:
          "After Getarf's acquisition, worked on developing and scaling core Flutter applications supporting operational processes.",
      },
      {
        period: "Prev",
        role: "Co-founder & CTO",
        org: "Getarf Logistic",
        detail:
          "Led product and engineering processes, overseeing the development of the mobile apps and technical infrastructure. The company was later acquired by Lojimod.",
      },
      {
        period: "Prev",
        role: "Mobile Team Lead",
        org: "Pingpong University",
        detail:
          "Led the engineering team building the platform's core mobile apps and managed the product's mobile development processes.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "What can we build?",
    subtitle:
      "From bringing your idea to life to improving your existing product, I provide end-to-end support across architecture, development, and launch.",
    items: [
      {
        title: "Mobile App Development",
        description:
          "I build scalable cross-platform apps with Flutter and native iOS experiences with Swift: production-ready, performance-focused solutions ready for the store.",
        detail: "Flutter · Swift · BLoC · App Store & Google Play",
      },
      {
        title: "Web Application Development",
        description:
          "I build modern, fast, and scalable web applications with Next.js and React, from landing pages to full-scale SaaS and admin dashboards.",
        detail: "Next.js · React · TypeScript · Performance & Scalability",
      },
      {
        title: "Product & MVP Development",
        description:
          "I turn early-stage ideas into a working MVP, scoping things right and moving mobile and web products to production through fast iterations.",
        detail: "Product scoping · Prototyping · MVP · Path to production",
      },
      {
        title: "Technical Architecture & Consulting",
        description:
          "I build the right technical architecture for products that need to stay maintainable and scalable long-term. I analyze existing projects, reduce technical debt, and improve development processes.",
        detail: "Code review · System design · Clean Architecture · Scalability",
      },
    ],
  },

  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    subtitle:
      "A sample of the mobile and web products I've built for different needs, from founder-led products to client projects.",

    items: [
      {
        name: "TourSync",
        description:
          "AI-powered tour management platform for artists, DJs, and musicians. Mobile app, web platform, and landing page built end-to-end.",
      },
      {
        name: "Fuxi",
        description:
          "Group-shopping and deals mobile app built with Flutter, Clean Architecture, BLoC, and a feature-first modular structure.",
      },
      {
        name: "Kiraala",
        description:
          "A peer-to-peer mobile rental platform where users can list and rent out their items.",
      },
      {
        name: "Bulcar",
        description:
          "A transportation platform focused on matching and ride-sharing, with separate mobile apps for riders and drivers.",
      },
      {
        name: "Tazepaket",
        description:
          "A mobile app inspired by the Too Good To Go model, aimed at preventing surplus food waste. Built with Clean Architecture and BLoC.",
      },
    ],

    visitLabel: "View Project",
    githubLabel: "View on GitHub",
  },

  stack: {
    eyebrow: "Stack",
    title: "Technologies I use",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's build a product together.",
    subtitle:
      "Have a new project idea, or looking for an experienced developer for your existing product? I'm open for freelance work. Tell me a bit about your project.",
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project and your needs...",
      submit: "Send Message",
      sending: "Sending…",
      defaultSuccess: "Thanks! I've received your message and will get back to you soon.",
    },
  },

  footer: {
    tagline: "Senior Full-Stack Developer · Flutter · Next.js / React · Swift / iOS",
    rightsReserved: "All rights reserved.",
  },
};

export default dictionary;
