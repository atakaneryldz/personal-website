"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import en from "./dictionaries/en";
import es from "./dictionaries/es";
import de from "./dictionaries/de";
import tr from "./dictionaries/tr";
import type { Dictionary, Locale } from "./types";

const STORAGE_KEY = "locale";

const dictionaries: Record<Locale, Dictionary> = { en, es, de, tr };

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // localStorage unavailable (private mode, etc.) — locale still applies for this session.
    }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, t: dictionaries[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

export function useTranslations() {
  return useLanguage().t;
}
