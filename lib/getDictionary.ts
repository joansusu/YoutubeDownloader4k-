import 'server-only';
import { i18n, Locale } from '@/i18n.config'; 

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};


export const getDictionary = async (locale: string) => {
  if (!i18n.locales.includes(locale as Locale)) {
    locale = i18n.defaultLocale; 
  }
  return dictionaries[locale as Locale]();
};