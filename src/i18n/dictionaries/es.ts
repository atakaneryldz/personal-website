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
    badge: "Disponible para freelance",
    headingWords: ["Hola", "👋,", "soy", "Atakan."],
    role: "Desarrollador Full-Stack Senior",
    description:
      "7 años de experiencia creando productos móviles y web de principio a fin. En Andora Apps, ayudo a startups a lanzar apps y plataformas pulidas, desde la idea hasta producción.",
    viewWork: "Ver trabajo",
    getInTouch: "Contactar",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Años de experiencia",
  },
  about: {
    eyebrow: "Acerca de",
    title: "De la idea a la producción.",
    lede: {
      before:
        "Desarrollador full-stack senior con 7 años de experiencia convirtiendo ideas en productos lanzados: Flutter para móvil, Next.js/React para web, e iOS nativo con Swift. Hoy construyo en ",
      strong: "Andora Apps",
      after:
        ". Antes, fundé y lideré ingeniería en varias startups, incluyendo Fuxi y Getarf Logistic (adquirida por Lojimod).",
    },
    stats: [
      { value: "7+", label: "Años de experiencia" },
      { value: "3", label: "Empresas fundadas / lideradas" },
      { value: "20+", label: "Productos lanzados" },
      { value: "Full-Stack", label: "Móvil, Web e iOS" },
    ],
    timeline: [
      {
        period: "Ahora",
        role: "Desarrollador",
        org: "Andora Apps",
        detail:
          "Entrego soluciones móviles y web completas para startups, desde la arquitectura hasta el lanzamiento.",
      },
      {
        period: "Antes",
        role: "Cofundador y CEO",
        org: "Fuxi",
        detail:
          "Construí una app Flutter de compras grupales desde cero con Clean Architecture.",
      },
      {
        period: "Antes",
        role: "Desarrollador Flutter Senior",
        org: "Lojimod",
        detail:
          "Construí y escalé aplicaciones Flutter principales tras la adquisición de Getarf.",
      },
      {
        period: "Antes",
        role: "Cofundador y CTO",
        org: "Getarf Logistic",
        detail:
          "Lideré producto e ingeniería; la empresa fue luego adquirida por Lojimod.",
      },
      {
        period: "Antes",
        role: "Líder de equipo móvil",
        org: "Pingpong University",
        detail:
          "Lideré el equipo de ingeniería móvil que construyó las apps principales de la plataforma.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Qué puedo construir para ti",
    subtitle:
      "Desarrollo de producto de principio a fin: me encargo de todo, desde la arquitectura hasta el lanzamiento, o me integro a un equipo existente.",
    items: [
      {
        title: "Desarrollo de apps móviles",
        description:
          "Apps multiplataforma con Flutter y apps nativas de iOS con Swift: listas para producción, listas para la App Store, construidas para escalar.",
        detail: "Flutter · Swift · BLoC · Entrega en App Store y Play Store",
      },
      {
        title: "Desarrollo de aplicaciones web",
        description:
          "Apps web rápidas y modernas y sitios de marketing con Next.js y React: desde landing pages hasta dashboards completos.",
        detail: "Next.js · React · TypeScript · Builds orientados al rendimiento",
      },
      {
        title: "Desarrollo de producto / MVP",
        description:
          "Construcciones de 0 a 1 para fundadores: convirtiendo un concepto en un producto funcional y lanzable en móvil y web.",
        detail: "Definición de alcance · prototipado rápido · listo para lanzar en semanas, no meses",
      },
      {
        title: "Arquitectura técnica y consultoría",
        description:
          "Arquitectura limpia y mantenible desde el primer día: Clean Architecture, BLoC y estructura de proyecto escalable.",
        detail: "Revisión de código · diseño de sistemas · estructura de proyecto escalable",
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Trabajo seleccionado",
    subtitle: "Una mezcla de productos propios y trabajo con clientes en móvil y web.",
    items: [
      {
        name: "TourSync",
        description:
          "Plataforma de gestión de giras impulsada por IA para artistas, DJs y músicos: móvil, web y landing page, construida de principio a fin.",
      },
      {
        name: "Fuxi",
        description:
          "App de compras grupales y ofertas construida con Clean Architecture + BLoC y una estructura modular por funcionalidades.",
      },
      {
        name: "Kiraala",
        description: "Aplicación móvil de alquiler entre particulares.",
      },
      {
        name: "Bulcar",
        description: "Plataforma de viajes compartidos con apps separadas para pasajero y conductor.",
      },
      {
        name: "Tazepaket",
        description:
          "Una app estilo Too Good To Go para rescatar excedentes de comida, construida con Clean Architecture + BLoC.",
      },
    ],
    visitLabel: "Visitar",
    githubLabel: "en GitHub",
  },
  stack: {
    eyebrow: "Tecnologías",
    title: "Herramientas que uso",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Construyamos algo.",
    subtitle:
      "¿Tienes un proyecto en mente, o solo quieres charlar? Actualmente estoy disponible para trabajo freelance, envíame un mensaje o contáctame directamente.",
    form: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      defaultSuccess: "¡Gracias! Te responderé pronto.",
    },
  },
  footer: {
    tagline: "Desarrollador Full-Stack Senior, Flutter, Next.js/React y Swift/iOS.",
    rightsReserved: "Todos los derechos reservados.",
  },
};

export default dictionary;
