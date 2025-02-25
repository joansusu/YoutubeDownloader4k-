
import { i18n } from "@/i18n.config";
import { Metadata } from "next";


type Hreflangs = {
  [key in typeof i18n.locales[number]]: string;
} & { "x-default"?: string };

export function generateHreflang(lang: string, basePath: string): Metadata["alternates"] {
  const canonicalPath = lang === "en" ? `/${basePath}` : `/${lang}/${basePath}`;
  
  const hreflangs = i18n.locales.reduce((acc: Hreflangs, locale) => {
    const path = locale === "en" ? `/${basePath}` : `/${locale}/${basePath}`;
    acc[locale] = `https://youtubedownloader4k.com${path}`;
    return acc;
  }, {} as Hreflangs);

  return {
    canonical: `https://youtubedownloader4k.com${canonicalPath}`,
    languages: {
      ...hreflangs,
      "x-default": `https://youtubedownloader4k.com/${basePath}`,
    },
  };
}
