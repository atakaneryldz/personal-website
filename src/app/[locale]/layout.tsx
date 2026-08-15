import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import "../globals.css";
import SmoothScroll from "../../components/ui/SmoothScroll";
import CursorGlow from "../../components/ui/CursorGlow";
import { LanguageProvider } from "../../i18n/LanguageContext";
import { LOCALES, type Locale } from "../../i18n/types";
import { LOCALE_SEO, SITE_URL } from "../../i18n/seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

function isLocale(value: string): value is Locale {
  return LOCALES.some((l) => l.code === value);
}

export function generateStaticParams() {
  return LOCALES.map(({ code }) => ({ locale: code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const seo = LOCALE_SEO[locale];
  const languages = Object.fromEntries(
    LOCALES.map(({ code }) => [code, `${SITE_URL}/${code}`])
  );
  languages["x-default"] = `${SITE_URL}/en`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seo.title,
      template: "%s | Atakan Eryıldız",
    },
    description: seo.description,
    keywords: [
      "Atakan Eryıldız",
      "Flutter developer",
      "Next.js developer",
      "React developer",
      "iOS developer",
      "Swift developer",
      "Full-stack developer",
      "Mobile app development",
      "Freelance developer Istanbul",
    ],
    authors: [{ name: "Atakan Eryıldız" }],
    creator: "Atakan Eryıldız",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${locale}`,
      siteName: "Atakan Eryıldız",
      title: seo.title,
      description: seo.description,
      locale: seo.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

// Runs before first paint: applies the stored theme (defaulting to dark for
// first-time visitors) so there is no flash of the wrong theme.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetBrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <SmoothScroll />
        <CursorGlow />
        <LanguageProvider locale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
