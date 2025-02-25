'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, usePathname } from 'next/navigation';

const languages = {
  en: 'English',
  zh: '中文',
  fr: 'français',
  de: 'Deutsch',
  es: 'Español',
};

const locales = ['en', 'zh', 'fr','de','es'];
const defaultLocale='en';

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const currentPathname = pathname;
    const segments = currentPathname.split("/").filter(Boolean);
  
    let newSegments;
    if (newLocale === defaultLocale) {
      
      newSegments = segments.filter(seg => !locales.includes(seg));
    } else {
      
      const hasExistingLocale = locales.includes(segments[0]);
      if (hasExistingLocale) {
        segments[0] = newLocale;
      } else {
        segments.unshift(newLocale);
      }
      newSegments = segments;
    }
  
    const newPath = newSegments.length > 0 ? `/${newSegments.join("/")}` : "/";
    router.push(newPath);
  };
  return (
    <Select value={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, name]) => (
          <SelectItem key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}