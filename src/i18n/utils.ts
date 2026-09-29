import nl from './nl';
import en from './en';

export const languages = { nl, en } as const;
export type Lang = keyof typeof languages;
export type TKey = keyof typeof nl;

export function useTranslations(lang: Lang) {
  return (key: TKey): string => languages[lang][key] ?? languages.nl[key];
}

/** Page ids and their localized paths. NL keeps the original URLs. */
export const routes = {
  home: { nl: '/', en: '/en/' },
  about: { nl: '/over', en: '/en/about' },
  services: { nl: '/diensten', en: '/en/services' },
  contact: { nl: '/contact', en: '/en/contact' },
  check: { nl: '/website-check', en: '/en/website-check' },
  // Directory indexes (a sibling ontwerpen.html would 404 next to the ontwerpen/ folder on GitHub Pages)
  designs: { nl: '/ontwerpen/', en: '/en/designs/' },
  // Demo sites for fictional clients (noindex, not in the sitemap)
  demoLineup: { nl: '/ontwerpen/line-up', en: '/en/designs/line-up' },
  demoMenu: { nl: '/ontwerpen/menukaart', en: '/en/designs/menu' },
} as const;
export type PageId = keyof typeof routes;

export const path = (page: PageId, lang: Lang) => routes[page][lang];
