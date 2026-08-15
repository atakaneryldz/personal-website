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
    badge: "Freelance İşlere Açığım",
    headingWords: ["Merhaba", "👋,", "ben", "Atakan."],
    role: "Kıdemli Full-Stack Geliştirici",
    description:
      "Mobil ve web ürünlerini uçtan uca geliştirmede 7 yıllık deneyim. Andora Apps çatısı altında freelance çalışarak, startup'ların fikirden üretime kusursuz uygulama ve platformlar çıkarmasına yardımcı oluyorum.",
    viewWork: "Çalışmalarımı Gör",
    getInTouch: "İletişime Geç",
    tags: "Flutter · Next.js · React · Swift · TypeScript",
    yearsExperience: "Yıl Deneyim",
  },
  about: {
    eyebrow: "Hakkımda",
    title: "Dünya için geliştiriyorum.",
    lede: {
      before:
        "Fikirleri yayınlanmış ürünlere dönüştürmede 7 yıllık deneyime sahip kıdemli full-stack geliştirici — mobil için Flutter, web için Next.js/React ve Swift ile native iOS. Bugün ",
      strong: "Andora Apps",
      after:
        " çatısı altında freelance çalışıyorum; öncesinde Fuxi ve Getarf Logistic (Lojimod tarafından satın alındı) dahil çeşitli startup'lar kurup mühendislik ekiplerine liderlik ettim.",
    },
    stats: [
      { value: "7+", label: "Yıl Deneyim" },
      { value: "3", label: "Kurulan / Yönetilen Şirket" },
      { value: "20+", label: "Yayınlanan Ürün" },
      { value: "Full-Stack", label: "Mobil, Web & iOS" },
    ],
    timeline: [
      {
        period: "Şimdi",
        role: "Freelance Geliştirici",
        org: "Andora Apps",
        detail:
          "Startup'lar için mimariden lansmana uçtan uca mobil ve web çözümleri sunuyorum.",
      },
      {
        period: "Önceki",
        role: "Kurucu Ortak & CEO",
        org: "Fuxi",
        detail:
          "Clean Architecture ile sıfırdan grup alışverişi Flutter uygulaması geliştirdim.",
      },
      {
        period: "Önceki",
        role: "Kıdemli Flutter Geliştirici",
        org: "Lojimod",
        detail:
          "Getarf'ın satın alınmasının ardından temel Flutter uygulamalarını geliştirip ölçeklendirdim.",
      },
      {
        period: "Önceki",
        role: "Kurucu Ortak & CTO",
        org: "Getarf Logistic",
        detail:
          "Ürün ve mühendislik ekiplerine liderlik ettim; şirket daha sonra Lojimod tarafından satın alındı.",
      },
      {
        period: "Önceki",
        role: "Mobil Ekip Lideri",
        org: "Pingpong University",
        detail:
          "Platformun temel uygulamalarını geliştiren mobil mühendislik ekibine liderlik ettim.",
      },
    ],
  },
  services: {
    eyebrow: "Hizmetler",
    title: "Sizin için neler geliştirebilirim",
    subtitle:
      "Uçtan uca ürün geliştirme — mimariden lansmana kadar her şeyi ben üstleniyorum ya da mevcut bir ekibe dahil oluyorum.",
    items: [
      {
        title: "Mobil Uygulama Geliştirme",
        description:
          "Flutter ile çapraz platform uygulamalar ve Swift ile native iOS uygulamaları — üretime hazır, App Store'a hazır, ölçeklenebilir şekilde geliştirilir.",
        detail: "Flutter · Swift · BLoC · App Store & Play Store yayınlama",
      },
      {
        title: "Web Uygulama Geliştirme",
        description:
          "Next.js ve React ile hızlı, modern web uygulamaları ve tanıtım siteleri — açılış sayfalarından tam kapsamlı ürün panellerine kadar.",
        detail: "Next.js · React · TypeScript · Performans odaklı geliştirme",
      },
      {
        title: "Ürün / MVP Geliştirme",
        description:
          "Kurucular için 0'dan 1'e geliştirme — bir konsepti mobil ve webde çalışan, yayınlanabilir bir ürüne dönüştürüyorum.",
        detail: "Kapsam belirleme · hızlı prototipleme · aylar değil haftalar içinde lansmana hazır",
      },
      {
        title: "Teknik Mimari & Danışmanlık",
        description:
          "İlk günden itibaren temiz, sürdürülebilir mimari — Clean Architecture, BLoC ve ölçeklenebilir proje yapısı.",
        detail: "Kod incelemesi · sistem tasarımı · ölçeklenebilir proje yapısı",
      },
    ],
  },
  projects: {
    eyebrow: "Projeler",
    title: "Seçilmiş çalışmalar",
    subtitle: "Mobil ve web alanında kurucu odaklı ürünler ile müşteri projelerinin bir karışımı.",
    items: [
      {
        name: "TourSync",
        description:
          "Sanatçılar, DJ'ler ve müzisyenler için yapay zeka destekli tur yönetim platformu — mobil, web ve açılış sayfası, uçtan uca geliştirildi.",
      },
      {
        name: "Fuxi",
        description:
          "Clean Architecture + BLoC ve feature-first modüler yapı ile geliştirilmiş grup alışverişi ve fırsat uygulaması.",
      },
      {
        name: "Kiraala",
        description: "Kullanıcıdan kullanıcıya kiralama pazar yeri mobil uygulaması.",
      },
      {
        name: "Bulcar",
        description: "Yolcu ve sürücü için ayrı uygulamaları olan yolculuk paylaşım platformu.",
      },
      {
        name: "Tazepaket",
        description:
          "Fazla gıdayı kurtarmak için Too Good To Go tarzında, Clean Architecture + BLoC ile geliştirilmiş bir uygulama.",
      },
    ],
    visitLabel: "Ziyaret et",
    githubLabel: "GitHub'da",
  },
  stack: {
    eyebrow: "Teknolojiler",
    title: "Kullandığım araçlar",
  },
  contact: {
    eyebrow: "İletişim",
    title: "Birlikte bir şeyler inşa edelim.",
    subtitle:
      "Aklınızda bir proje mi var, yoksa sadece sohbet mi etmek istiyorsunuz? Şu anda freelance işlere açığım — bir mesaj gönderin ya da doğrudan ulaşın.",
    form: {
      nameLabel: "Ad",
      namePlaceholder: "Adınız",
      emailLabel: "E-posta",
      emailPlaceholder: "siz@ornek.com",
      messageLabel: "Mesaj",
      messagePlaceholder: "Projenizden bahsedin...",
      submit: "Mesaj gönder",
      sending: "Gönderiliyor…",
      defaultSuccess: "Teşekkürler — en kısa sürede size döneceğim.",
    },
  },
  footer: {
    tagline: "Kıdemli Full-Stack Geliştirici — Flutter, Next.js/React & Swift/iOS.",
    rightsReserved: "Tüm hakları saklıdır.",
  },
};

export default dictionary;
