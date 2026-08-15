import type { MetadataRoute } from "next";
import { LOCALES } from "../i18n/types";
import { SITE_URL } from "../i18n/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LOCALES.map(({ code }) => [code, `${SITE_URL}/${code}`])
  );
  languages["x-default"] = `${SITE_URL}/en`;

  return LOCALES.map(({ code }) => ({
    url: `${SITE_URL}/${code}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: code === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
