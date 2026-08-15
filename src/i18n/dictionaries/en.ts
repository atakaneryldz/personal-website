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
    badge: "Open for Freelance",
    headingWords: ["Hi", "👋,", "I'm", "Atakan."],
    role: "Senior Full-Stack Developer",
    description:
      "7 years of experience building mobile and web products end to end. Freelancing through Andora Apps, I help startups ship polished apps and platforms, from idea to production.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Years Experience",
  },
  about: {
    eyebrow: "About",
    title: "Building for the world.",
    lede: {
      before:
        "Senior full-stack developer with 7 years of experience turning ideas into shipped products — Flutter for mobile, Next.js/React for the web, and native iOS with Swift. Today I freelance through ",
      strong: "Andora Apps",
      after:
        "; before that, I founded and led engineering at several startups, including Fuxi and Getarf Logistic (acquired by Lojimod).",
    },
    stats: [
      { value: "7+", label: "Years Experience" },
      { value: "3", label: "Companies Founded / Led" },
      { value: "20+", label: "Products Shipped" },
      { value: "Full-Stack", label: "Mobile, Web & iOS" },
    ],
    timeline: [
      {
        period: "Now",
        role: "Freelance Developer",
        org: "Andora Apps",
        detail:
          "Delivering complete mobile and web solutions for startups — from architecture to launch.",
      },
      {
        period: "Prev",
        role: "Co-founder & CEO",
        org: "Fuxi",
        detail:
          "Built a group-shopping Flutter app from the ground up with Clean Architecture.",
      },
      {
        period: "Prev",
        role: "Senior Flutter Developer",
        org: "Lojimod",
        detail:
          "Built and scaled core Flutter applications after Getarf's acquisition.",
      },
      {
        period: "Prev",
        role: "Co-founder & CTO",
        org: "Getarf Logistic",
        detail:
          "Led product and engineering; company was later acquired by Lojimod.",
      },
      {
        period: "Prev",
        role: "Mobile Team Lead",
        org: "Pingpong University",
        detail:
          "Led the mobile engineering team building the platform's core apps.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What I can build for you",
    subtitle:
      "End-to-end product development — I handle everything from architecture to launch, or plug into an existing team.",
    items: [
      {
        title: "Mobile App Development",
        description:
          "Cross-platform apps with Flutter and native iOS apps with Swift — production-ready, App Store-ready, built to scale.",
        detail: "Flutter · Swift · BLoC · App Store & Play Store delivery",
      },
      {
        title: "Web Application Development",
        description:
          "Fast, modern web apps and marketing sites with Next.js and React — from landing pages to full product dashboards.",
        detail: "Next.js · React · TypeScript · Performance-first builds",
      },
      {
        title: "Product / MVP Development",
        description:
          "0-to-1 builds for founders — turning a concept into a working, shippable product across mobile and web.",
        detail: "Scoping · rapid prototyping · launch-ready in weeks, not months",
      },
      {
        title: "Technical Architecture & Consulting",
        description:
          "Clean, maintainable architecture from day one — Clean Architecture, BLoC, and scalable project structure.",
        detail: "Code review · system design · scalable project structure",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    subtitle: "A mix of founder-led products and client work across mobile and web.",
    items: [
      {
        name: "TourSync",
        description:
          "AI-powered tour management platform for artists, DJs, and musicians — mobile, web, and landing page, built end-to-end.",
      },
      {
        name: "Fuxi",
        description:
          "Group-shopping and deals app built with Clean Architecture + BLoC and a feature-first modular structure.",
      },
      {
        name: "Kiraala",
        description: "Peer-to-peer rental marketplace mobile application.",
      },
      {
        name: "Bulcar",
        description: "Carpooling platform with separate rider and driver apps.",
      },
      {
        name: "Tazepaket",
        description:
          "A Too Good To Go-style app for rescuing surplus food, built with Clean Architecture + BLoC.",
      },
    ],
    visitLabel: "Visit",
    githubLabel: "on GitHub",
  },
  stack: {
    eyebrow: "Stack",
    title: "Tools I reach for",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s build something.",
    subtitle:
      "Have a project in mind, or just want to talk shop? I’m currently open for freelance work — send a message or reach out directly.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      sending: "Sending…",
      defaultSuccess: "Thanks — I'll get back to you soon.",
    },
  },
  footer: {
    tagline: "Senior Full-Stack Developer — Flutter, Next.js/React & Swift/iOS.",
    rightsReserved: "All rights reserved.",
  },
};

export default dictionary;
