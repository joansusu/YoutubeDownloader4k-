import { i18n } from "@/i18n.config";
import { Metadata } from "next";


type Hreflangs = {
  [key in typeof i18n.locales[number]]: string;
} & { "x-default"?: string };

export function generateHreflang(lang: string, basePath: string): Metadata["alternates"] {
  // Handle homepage (empty basePath) vs other pages
  const canonicalPath = lang === "en" 
    ? (basePath ? `/${basePath}` : "/")
    : (basePath ? `/${lang}/${basePath}` : `/${lang}`);
  
  const hreflangs = i18n.locales.reduce((acc: Hreflangs, locale) => {
    const path = locale === "en" 
      ? (basePath ? `/${basePath}` : "/")
      : (basePath ? `/${locale}/${basePath}` : `/${locale}`);
    acc[locale] = `https://youtubedownloader4k.com${path}`;
    return acc;
  }, {} as Hreflangs);

  const defaultPath = basePath ? `/${basePath}` : "/";

  return {
    canonical: `https://youtubedownloader4k.com${canonicalPath}`,
    languages: {
      ...hreflangs,
      "x-default": `https://youtubedownloader4k.com${defaultPath}`,
    },
  };
}
