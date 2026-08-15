import Navbar from "../../components/sections/Navbar";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Services from "../../components/sections/Services";
import Projects from "../../components/sections/Projects";
import Stack from "../../components/sections/Stack";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import { LOCALES, type Locale } from "../../i18n/types";
import { LOCALE_SEO, SITE_URL } from "../../i18n/seo";

function isLocale(value: string): value is Locale {
  return LOCALES.some((l) => l.code === value);
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "en";
  const seo = LOCALE_SEO[resolvedLocale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Atakan Eryıldız",
    jobTitle: seo.title.split("—")[1]?.trim() ?? "Senior Full-Stack Developer",
    description: seo.description,
    url: `${SITE_URL}/${resolvedLocale}`,
    image: `${SITE_URL}/images/profile-image.png`,
    email: "mailto:atakaneryldz@gmail.com",
    sameAs: ["https://github.com/atakaneryldz"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Swift",
      "iOS Development",
      "Next.js",
      "React",
      "TypeScript",
    ],
  };

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
