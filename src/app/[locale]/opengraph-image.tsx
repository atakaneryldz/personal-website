import { ImageResponse } from "next/og";
import { LOCALES, type Locale } from "../../i18n/types";
import { LOCALE_SEO } from "../../i18n/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function isLocale(value: string): value is Locale {
  return LOCALES.some((l) => l.code === value);
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "en";
  return [
    {
      id: "og",
      alt: LOCALE_SEO[resolvedLocale].title,
      size,
      contentType,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : "en";
  const seo = LOCALE_SEO[resolvedLocale];
  const [name, role] = seo.title.split("—").map((part) => part.trim());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#fafaf9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#a1a1aa",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22c55e",
              display: "flex",
            }}
          />
          Open for Freelance
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          {name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 500,
            color: "#c9c9ce",
            marginTop: 16,
          }}
        >
          {role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#8b8b93",
            marginTop: 36,
          }}
        >
          Flutter · Next.js · React · Swift · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
