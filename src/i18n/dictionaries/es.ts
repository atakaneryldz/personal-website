import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    projects: "Proyectos",
    stack: "Tecnologías",
    contact: "Contacto",
    getInTouch: "Contactar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },

  hero: {
    badge: "Disponible para proyectos freelance",
    headingWords: ["Hola", "👋,", "soy", "Atakan."],
    role: "Desarrollador Full-Stack Senior",
    description:
      "Tengo 7 años de experiencia llevando productos móviles y web desde la idea hasta la producción. En Andora Apps, ayudo a startups y proyectos a crear productos escalables, modernos y centrados en el usuario.",
    viewWork: "Ver mi trabajo",
    getInTouch: "Contactar",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Años de experiencia",
  },

  about: {
    eyebrow: "Acerca de",
    title: "De la idea a la producción.",
    lede: {
      before:
        "Soy desarrollador full-stack senior con 7 años de experiencia convirtiendo ideas en productos reales y lanzados. Trabajo con Flutter y Swift en móvil, y Next.js, React y TypeScript en web. Hoy construyo en ",
      strong: "Andora Apps",
      after:
        ", desarrollando productos de principio a fin para startups y equipos de distintos tamaños. Antes, participé en la fundación de proyectos como Fuxi y Getarf Logistic y lideré equipos de ingeniería.",
    },

    stats: [
      { value: "7+", label: "Años de experiencia" },
      { value: "3", label: "Roles de fundador / liderazgo" },
      { value: "20+", label: "Productos lanzados" },
      { value: "Full-Stack", label: "Móvil · Web · iOS" },
    ],

    timeline: [
      {
        period: "Ahora",
        role: "Desarrollador Full-Stack",
        org: "Andora Apps",
        detail:
          "Construyo soluciones móviles y web completas para startups, desde la arquitectura técnica hasta el desarrollo y el lanzamiento.",
      },
      {
        period: "Antes",
        role: "Cofundador y CEO",
        org: "Fuxi",
        detail:
          "Diseñé y construí desde cero un producto móvil de compras grupales, con una estructura escalable basada en Flutter, Clean Architecture y BLoC.",
      },
      {
        period: "Antes",
        role: "Desarrollador Flutter Senior",
        org: "Lojimod",
        detail:
          "Tras la adquisición de Getarf, trabajé en el desarrollo y la escalabilidad de las aplicaciones Flutter principales que dan soporte a los procesos operativos.",
      },
      {
        period: "Antes",
        role: "Cofundador y CTO",
        org: "Getarf Logistic",
        detail:
          "Lideré los procesos de producto e ingeniería, supervisando el desarrollo de las apps móviles y la infraestructura técnica. La empresa fue luego adquirida por Lojimod.",
      },
      {
        period: "Antes",
        role: "Líder de equipo móvil",
        org: "Pingpong University",
        detail:
          "Lideré el equipo de ingeniería que construyó las apps principales de la plataforma y gestioné los procesos de desarrollo móvil del producto.",
      },
    ],
  },

  services: {
    eyebrow: "Servicios",
    title: "¿Qué podemos construir?",
    subtitle:
      "Desde dar vida a tu idea hasta mejorar tu producto existente, ofrezco apoyo de principio a fin en arquitectura, desarrollo y lanzamiento.",
    items: [
      {
        title: "Desarrollo de apps móviles",
        description:
          "Construyo apps multiplataforma escalables con Flutter y experiencias nativas de iOS con Swift: soluciones listas para producción, orientadas al rendimiento y listas para la tienda.",
        detail: "Flutter · Swift · BLoC · App Store y Google Play",
      },
      {
        title: "Desarrollo de aplicaciones web",
        description:
          "Construyo aplicaciones web modernas, rápidas y escalables con Next.js y React, desde landing pages hasta SaaS completos y paneles de administración.",
        detail: "Next.js · React · TypeScript · Rendimiento y escalabilidad",
      },
      {
        title: "Desarrollo de producto y MVP",
        description:
          "Convierto ideas en etapa temprana en un MVP funcional, definiendo bien el alcance y llevando productos móviles y web a producción mediante iteraciones rápidas.",
        detail: "Definición de alcance · Prototipado · MVP · Camino a producción",
      },
      {
        title: "Arquitectura técnica y consultoría",
        description:
          "Construyo la arquitectura técnica adecuada para productos que necesitan mantenerse escalables y mantenibles a largo plazo. Analizo proyectos existentes, reduzco la deuda técnica y mejoro los procesos de desarrollo.",
        detail: "Revisión de código · Diseño de sistemas · Clean Architecture · Escalabilidad",
      },
    ],
  },

  projects: {
    eyebrow: "Proyectos",
    title: "Trabajo seleccionado",
    subtitle:
      "Una muestra de los productos móviles y web que he construido para distintas necesidades, desde productos propios hasta proyectos con clientes.",

    items: [
      {
        name: "TourSync",
        description:
          "Plataforma de gestión de giras impulsada por IA para artistas, DJs y músicos. App móvil, plataforma web y landing page construidas de principio a fin.",
      },
      {
        name: "Fuxi",
        description:
          "App móvil de compras grupales y ofertas construida con Flutter, Clean Architecture, BLoC y una estructura modular por funcionalidades.",
      },
      {
        name: "Kiraala",
        description:
          "Plataforma móvil de alquiler entre particulares donde los usuarios pueden publicar y alquilar sus artículos.",
      },
      {
        name: "Bulcar",
        description:
          "Plataforma de transporte centrada en el emparejamiento y el viaje compartido, con apps móviles separadas para pasajeros y conductores.",
      },
      {
        name: "Tazepaket",
        description:
          "App móvil inspirada en el modelo de Too Good To Go, orientada a evitar el desperdicio de excedentes de comida. Construida con Clean Architecture y BLoC.",
      },
    ],

    visitLabel: "Ver proyecto",
    githubLabel: "Ver en GitHub",
  },

  stack: {
    eyebrow: "Tecnologías",
    title: "Tecnologías que uso",
  },

  contact: {
    eyebrow: "Contacto",
    title: "Construyamos un producto juntos.",
    subtitle:
      "¿Tienes una nueva idea de proyecto o buscas un desarrollador con experiencia para tu producto actual? Estoy disponible para trabajo freelance. Cuéntame brevemente sobre tu proyecto.",
    form: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto y tus necesidades...",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      defaultSuccess: "¡Gracias! He recibido tu mensaje y te responderé pronto.",
    },
  },

  footer: {
    tagline: "Desarrollador Full-Stack Senior · Flutter · Next.js / React · Swift / iOS",
    rightsReserved: "Todos los derechos reservados.",
  },
};

export default dictionary;
