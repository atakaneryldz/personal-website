import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  nav: {
    home: "Anasayfa",
    about: "Hakkımda",
    services: "Hizmetler",
    projects: "Projeler",
    stack: "Teknolojiler",
    contact: "İletişim",
    getInTouch: "İletişime Geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
  },

  hero: {
    badge: "Freelance projelere açığım",
    headingWords: ["Merhaba", "👋,", "ben", "Atakan."],
    role: "Kıdemli Full-Stack Geliştirici",
    description:
      "Mobil ve web ürünlerini fikir aşamasından üretime taşımada 7 yıllık deneyime sahibim. Andora Apps'te startup'ların ve girişimlerin ölçeklenebilir, modern ve kullanıcı odaklı ürünler geliştirmesine yardımcı oluyorum.",
    viewWork: "Projelerimi Gör",
    getInTouch: "İletişime Geç",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Yıl Deneyim",
  },

  about: {
    eyebrow: "Hakkımda",
    title: "Fikirden üretime.",
    lede: {
      before:
        "Fikirleri gerçek ve yayınlanmış ürünlere dönüştürme konusunda 7 yıllık deneyime sahip kıdemli full-stack geliştiriciyim. Mobil tarafta Flutter ve Swift, web tarafında ise Next.js, React ve TypeScript ile çalışıyorum. Bugün ",
      strong: "Andora Apps",
      after:
        "'te startup'lar ve farklı ölçeklerdeki ekipler için uçtan uca ürünler geliştiriyorum. Daha önce Fuxi ve Getarf Logistic gibi girişimlerin kuruluşunda yer aldım ve mühendislik ekiplerine liderlik ettim.",
    },

    stats: [
      { value: "7+", label: "Yıl Deneyim" },
      { value: "3", label: "Kurucu / Yönetici Rolü" },
      { value: "20+", label: "Yayınlanan Ürün" },
      { value: "Full-Stack", label: "Mobil · Web · iOS" },
    ],

    timeline: [
      {
        period: "Günümüz",
        role: "Full-Stack Geliştirici",
        org: "Andora Apps",
        detail:
          "Startup'lar için teknik mimariden geliştirme ve lansmana kadar uçtan uca mobil ve web çözümleri geliştiriyorum.",
      },
      {
        period: "Öncesi",
        role: "Kurucu Ortak & CEO",
        org: "Fuxi",
        detail:
          "Grup alışverişi odaklı mobil ürünü sıfırdan tasarlayıp geliştirdim. Flutter, Clean Architecture ve BLoC tabanlı ölçeklenebilir bir yapı kurdum.",
      },
      {
        period: "Öncesi",
        role: "Kıdemli Flutter Geliştirici",
        org: "Lojimod",
        detail:
          "Getarf'ın satın alınmasının ardından, operasyonel süreçleri destekleyen temel Flutter uygulamalarının geliştirilmesi ve ölçeklendirilmesinde görev aldım.",
      },
      {
        period: "Öncesi",
        role: "Kurucu Ortak & CTO",
        org: "Getarf Logistic",
        detail:
          "Ürün ve mühendislik süreçlerine liderlik ettim; mobil uygulamaların ve teknik altyapının geliştirilmesini yönettim. Şirket daha sonra Lojimod tarafından satın alındı.",
      },
      {
        period: "Öncesi",
        role: "Mobil Ekip Lideri",
        org: "Pingpong University",
        detail:
          "Platformun temel mobil uygulamalarını geliştiren mühendislik ekibine liderlik ettim ve ürünün mobil geliştirme süreçlerini yönettim.",
      },
    ],
  },

  services: {
    eyebrow: "Hizmetler",
    title: "Ne geliştirebiliriz?",
    subtitle:
      "Fikrinizi hayata geçirmekten mevcut ürününüzü geliştirmeye kadar; mimari, geliştirme ve lansman süreçlerinde uçtan uca destek oluyorum.",
    items: [
      {
        title: "Mobil Uygulama Geliştirme",
        description:
          "Flutter ile ölçeklenebilir çapraz platform uygulamalar, Swift ile native iOS deneyimleri geliştiriyorum. Üretime ve mağaza yayınına hazır, performans odaklı çözümler.",
        detail: "Flutter · Swift · BLoC · App Store & Google Play",
      },
      {
        title: "Web Uygulama Geliştirme",
        description:
          "Next.js ve React ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyorum. Landing page'lerden kapsamlı SaaS ve yönetim panellerine kadar.",
        detail: "Next.js · React · TypeScript · Performans & Ölçeklenebilirlik",
      },
      {
        title: "Ürün & MVP Geliştirme",
        description:
          "Fikir aşamasındaki ürünleri çalışan bir MVP'ye dönüştürüyorum. Doğru kapsamı belirleyerek hızlı iterasyonlarla mobil ve web ürünlerini üretime taşıyorum.",
        detail: "Ürün kapsamı · Prototipleme · MVP · Üretime geçiş",
      },
      {
        title: "Teknik Mimari & Danışmanlık",
        description:
          "Uzun vadede sürdürülebilir ve ölçeklenebilir ürünler için doğru teknik mimariyi oluşturuyorum. Mevcut projeleri analiz ediyor, teknik borcu azaltıyor ve geliştirme süreçlerini iyileştiriyorum.",
        detail: "Kod inceleme · Sistem tasarımı · Clean Architecture · Ölçeklenebilirlik",
      },
    ],
  },

  projects: {
    eyebrow: "Projeler",
    title: "Seçilmiş çalışmalar",
    subtitle:
      "Kurucusu olduğum ürünlerden müşteri projelerine kadar, farklı ihtiyaçlar için geliştirdiğim mobil ve web ürünlerinden bazıları.",

    items: [
      {
        name: "TourSync",
        description:
          "Sanatçılar, DJ'ler ve müzisyenler için yapay zeka destekli tur yönetim platformu. Mobil uygulama, web platformu ve landing page uçtan uca geliştirildi.",
      },
      {
        name: "Fuxi",
        description:
          "Grup alışverişi ve fırsat odaklı mobil uygulama. Flutter, Clean Architecture, BLoC ve feature-first modüler yapı kullanılarak geliştirildi.",
      },
      {
        name: "Kiraala",
        description:
          "Kullanıcıların ürünlerini listeleyip kiralayabildiği, kullanıcıdan kullanıcıya çalışan mobil kiralama platformu.",
      },
      {
        name: "Bulcar",
        description:
          "Yolcular ve sürücüler için ayrı mobil uygulamalara sahip, eşleşme ve yolculuk paylaşımı odaklı ulaşım platformu.",
      },
      {
        name: "Tazepaket",
        description:
          "Fazla gıdaların israf edilmesini önlemeyi amaçlayan, Too Good To Go modelinden ilham alan mobil uygulama. Clean Architecture ve BLoC ile geliştirildi.",
      },
    ],

    visitLabel: "Projeyi Gör",
    githubLabel: "GitHub'da Gör",
  },

  stack: {
    eyebrow: "Teknolojiler",
    title: "Kullandığım teknolojiler",
  },

  contact: {
    eyebrow: "İletişim",
    title: "Birlikte bir ürün geliştirelim.",
    subtitle:
      "Yeni bir proje fikriniz mi var veya mevcut ürününüz için deneyimli bir geliştirici mi arıyorsunuz? Freelance projelere açığım. Bana kısaca projenizden bahsedin.",
    form: {
      nameLabel: "Ad Soyad",
      namePlaceholder: "Adınız Soyadınız",
      emailLabel: "E-posta",
      emailPlaceholder: "siz@ornek.com",
      messageLabel: "Mesaj",
      messagePlaceholder: "Projenizden ve ihtiyaçlarınızdan bahsedin...",
      submit: "Mesaj Gönder",
      sending: "Gönderiliyor…",
      defaultSuccess: "Teşekkürler! Mesajınızı aldım, en kısa sürede size dönüş yapacağım.",
    },
  },

  footer: {
    tagline:
      "Kıdemli Full-Stack Geliştirici · Flutter · Next.js / React · Swift / iOS",
    rightsReserved: "Tüm hakları saklıdır.",
  },
};

export default dictionary;