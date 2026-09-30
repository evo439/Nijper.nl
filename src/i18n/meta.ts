import { useTranslations, type Lang, type PageId } from './utils';
import { team } from '../data/team';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const meta: Record<PageId, Record<Lang, PageMeta>> = {
  home: {
    nl: {
      title: 'Nijper | Website Bouwer in Nijmegen voor Horeca & Festivals',
      description: 'Website laten bouwen in Nijmegen? Nijper is dé website bouwer voor cafés, restaurants en festivals: snel, vindbaar in Google en in jouw huisstijl.',
      keywords: 'website bouwer Nijmegen, webdesign Nijmegen, SEO Nijmegen, horeca website bouwen, festival website bouwen',
      ogTitle: 'Nijper | Website Bouwer in Nijmegen voor Horeca & Festivals',
      ogDescription: 'Professionele website laten bouwen in Nijmegen? Nijper is dé website bouwer voor cafés, restaurants en festivals, gespecialiseerd in SEO.',
      twitterTitle: 'Nijper | Website Bouwer in Nijmegen',
      twitterDescription: 'Dé website bouwer voor cafés, restaurants en festivals, gespecialiseerd in SEO.',
    },
    en: {
      title: 'Nijper | Web Developer in Nijmegen for Hospitality & Festivals',
      description: 'Need a professional website in Nijmegen? Nijper builds websites for cafés, restaurants and festivals: fast, easy to find on Google and in your own brand style.',
      keywords: 'web developer Nijmegen, web design Nijmegen, SEO Nijmegen, hospitality website, festival website',
      ogTitle: 'Nijper | Web Developer in Nijmegen for Hospitality & Festivals',
      ogDescription: 'Looking for a professional website built in Nijmegen? Nijper builds websites for cafés, restaurants and festivals, specialised in SEO.',
      twitterTitle: 'Nijper | Web Developer in Nijmegen',
      twitterDescription: 'Websites for cafés, restaurants and festivals, specialised in SEO.',
    },
  },
  about: {
    nl: {
      title: 'Over Ons | Nijper Website Bouwer in Nijmegen',
      description: 'Maak kennis met Roel en Sarah, het team achter Nijper: gepassioneerde website bouwers uit Nijmegen die robuuste websites bouwen voor lokale bedrijven.',
      keywords: 'over ons, website bouwer Nijmegen, webdesign team, Roel en Sarah',
      ogTitle: 'Over Ons | Nijper Website Bouwer in Nijmegen',
      ogDescription: 'Maak kennis met het team achter Nijper. Wij zijn gepassioneerde website bouwers uit Nijmegen.',
      twitterTitle: 'Over Ons | Nijper Website Bouwer in Nijmegen',
      twitterDescription: 'Maak kennis met het team achter Nijper. Wij zijn gepassioneerde website bouwers uit Nijmegen.',
    },
    en: {
      title: 'About Us | Nijper Web Developer in Nijmegen',
      description: 'Meet Roel and Sarah, the team behind Nijper: passionate web developers from Nijmegen who build fast websites for local cafés, restaurants and festivals.',
      keywords: 'about us, web developer Nijmegen, web design team, Roel and Sarah',
      ogTitle: 'About Us | Nijper Web Developer in Nijmegen',
      ogDescription: 'Meet the team behind Nijper. We are passionate web developers from Nijmegen.',
      twitterTitle: 'About Us | Nijper Web Developer in Nijmegen',
      twitterDescription: 'Meet the team behind Nijper. We are passionate web developers from Nijmegen.',
    },
  },
  services: {
    nl: {
      title: 'Onze Diensten | SEO & Webdesign in Nijmegen | Nijper',
      description: 'Van optimale Google SEO en Sanity CMS tot ontwikkeling op maat. Bekijk de diensten en website pakketten van Nijper, website bouwer voor horeca in Nijmegen.',
      keywords: 'webdesign diensten, SEO Nijmegen, Sanity CMS, website pakketten, website bouwer',
      ogTitle: 'Onze Diensten | SEO & Webdesign in Nijmegen | Nijper',
      ogDescription: 'Van optimale Google SEO en Sanity CMS tot ontwikkeling op maat. Bekijk de diensten en pakketten van Nijper.',
      twitterTitle: 'Onze Diensten | SEO & Webdesign in Nijmegen',
      twitterDescription: 'Van optimale Google SEO en Sanity CMS tot ontwikkeling op maat.',
    },
    en: {
      title: 'Our Services | SEO & Web Design in Nijmegen | Nijper',
      description: 'From optimal Google SEO and Sanity CMS to custom development. Explore the services and website packages of Nijper, web developer for hospitality in Nijmegen.',
      keywords: 'web design services, SEO Nijmegen, Sanity CMS, website packages, web developer',
      ogTitle: 'Our Services | SEO & Web Design in Nijmegen | Nijper',
      ogDescription: 'From optimal Google SEO and Sanity CMS to custom development. Explore the services and packages of Nijper.',
      twitterTitle: 'Our Services | SEO & Web Design in Nijmegen',
      twitterDescription: 'From optimal Google SEO and Sanity CMS to custom development.',
    },
  },
  contact: {
    nl: {
      title: 'Contact | Nijper Website Bouwer in Nijmegen',
      description: 'Klaar voor een nieuwe website? Neem contact op met Nijper, jouw website bouwer in Nijmegen, voor een vrijblijvend gesprek over je café, restaurant of festival.',
      keywords: 'contact webdesign Nijmegen, website bouwer, SEO advies, horeca website',
      ogTitle: 'Contact | Nijper Website Bouwer in Nijmegen',
      ogDescription: 'Klaar voor een nieuwe website? Neem contact op met Nijper, jouw website bouwer in Nijmegen.',
      twitterTitle: 'Contact | Nijper Website Bouwer in Nijmegen',
      twitterDescription: 'Neem contact op met Nijper voor een vrijblijvend gesprek.',
    },
    en: {
      title: 'Contact | Nijper Web Developer in Nijmegen',
      description: 'Ready for a new website? Get in touch with Nijper, your web developer in Nijmegen, for a free consultation about your café, restaurant or festival.',
      keywords: 'contact web design Nijmegen, web developer, SEO advice, hospitality website',
      ogTitle: 'Contact | Nijper Web Developer in Nijmegen',
      ogDescription: 'Ready for a new website? Get in touch with Nijper, your web developer in Nijmegen.',
      twitterTitle: 'Contact | Nijper Web Developer in Nijmegen',
      twitterDescription: 'Get in touch with Nijper for a free consultation.',
    },
  },
  check: {
    nl: {
      title: 'Gratis Website Check & SEO Rapport | Nijper',
      description: 'Test gratis hoe snel en vindbaar jouw website is. De Nijper Website Check meet je performance- en SEO-score met Google Lighthouse, direct zichtbaar.',
      keywords: 'gratis website check, SEO rapport, website prestaties, website bouwer Nijmegen',
      ogTitle: 'Gratis Website Check & SEO Rapport | Nijper',
      ogDescription: 'Test gratis hoe snel en vindbaar jouw website is, met de performance- en SEO-score van Google Lighthouse.',
      twitterTitle: 'Gratis Website Check & SEO Rapport',
      twitterDescription: 'Test gratis hoe snel en vindbaar jouw website is.',
    },
    en: {
      title: 'Free Website Check & SEO Report | Nijper',
      description: 'Test for free how fast and findable your website is. The Nijper Website Check measures your performance and SEO scores with Google Lighthouse, instantly.',
      keywords: 'free website check, SEO report, website performance, web developer Nijmegen',
      ogTitle: 'Free Website Check & SEO Report | Nijper',
      ogDescription: 'Test for free how fast and findable your website is, with performance and SEO scores from Google Lighthouse.',
      twitterTitle: 'Free Website Check & SEO Report',
      twitterDescription: 'Test for free how fast and findable your website is.',
    },
  },
  designs: {
    nl: {
      title: 'Voorbeeldontwerpen | Websites voor Horeca & Festivals | Nijper',
      description: 'Bekijk voorbeeldontwerpen van Nijper: complete websites voor een festival en een eetcafé. Zo zie je welke kwaliteit je krijgt, in een eigen ontwerp op maat.',
      keywords: 'voorbeeld website horeca, festival website voorbeeld, webdesign Nijmegen, website ontwerp',
      ogTitle: 'Voorbeeldontwerpen | Nijper',
      ogDescription: 'Complete voorbeeldwebsites voor een festival en een eetcafé. Zo zie je welke kwaliteit je van ons krijgt.',
      twitterTitle: 'Voorbeeldontwerpen | Nijper',
      twitterDescription: 'Complete voorbeeldwebsites voor een festival en een eetcafé.',
    },
    en: {
      title: 'Example Designs | Websites for Hospitality & Festivals | Nijper',
      description: 'Explore example designs by Nijper: complete websites for a festival and a café. See the quality you can expect, delivered as an original design for you.',
      keywords: 'hospitality website example, festival website example, web design Nijmegen, website design',
      ogTitle: 'Example designs | Nijper',
      ogDescription: 'Complete example websites for a festival and a café. See the quality you can expect from us.',
      twitterTitle: 'Example designs | Nijper',
      twitterDescription: 'Complete example websites for a festival and a café.',
    },
  },
  demoLineup: {
    nl: {
      title: 'Zomerzwerm Festival | Voorbeeldontwerp Line-up | Nijper',
      description: 'Voorbeeldontwerp "Line-up" van Nijper: een festivalwebsite voor het fictieve festival Zomerzwerm, met programma, tickets en praktische info.',
      keywords: 'festival website ontwerp, voorbeeld festivalwebsite',
      ogTitle: 'Zomerzwerm | Voorbeeldontwerp door Nijper',
      ogDescription: 'Een festivalwebsite in de stijl "Line-up", gemaakt als voorbeeld door Nijper.',
      twitterTitle: 'Zomerzwerm | Voorbeeldontwerp door Nijper',
      twitterDescription: 'Een festivalwebsite in de stijl "Line-up".',
    },
    en: {
      title: 'Zomerzwerm Festival | Example Design Line-up | Nijper',
      description: 'Example design "Line-up" by Nijper: a festival website for the fictional festival Zomerzwerm, with programme, tickets and practical info.',
      keywords: 'festival website design, festival website example',
      ogTitle: 'Zomerzwerm | Example design by Nijper',
      ogDescription: 'A festival website in the "Line-up" style, made as an example by Nijper.',
      twitterTitle: 'Zomerzwerm | Example design by Nijper',
      twitterDescription: 'A festival website in the "Line-up" style.',
    },
  },
  demoMenu: {
    nl: {
      title: 'Eetcafé De Kiezel | Voorbeeldontwerp Menukaart | Nijper',
      description: 'Voorbeeldontwerp "Menukaart" van Nijper: een website voor het fictieve Eetcafé De Kiezel, met menukaart, openingstijden en reserveren.',
      keywords: 'restaurant website ontwerp, eetcafé website voorbeeld',
      ogTitle: 'Eetcafé De Kiezel | Voorbeeldontwerp door Nijper',
      ogDescription: 'Een horecawebsite in de stijl "Menukaart", gemaakt als voorbeeld door Nijper.',
      twitterTitle: 'Eetcafé De Kiezel | Voorbeeldontwerp door Nijper',
      twitterDescription: 'Een horecawebsite in de stijl "Menukaart".',
    },
    en: {
      title: 'Eetcafé De Kiezel | Example Design Menu Card | Nijper',
      description: 'Example design "Menu card" by Nijper: a website for the fictional Eetcafé De Kiezel, with menu, opening hours and reservations.',
      keywords: 'restaurant website design, café website example',
      ogTitle: 'Eetcafé De Kiezel | Example design by Nijper',
      ogDescription: 'A hospitality website in the "Menu card" style, made as an example by Nijper.',
      twitterTitle: 'Eetcafé De Kiezel | Example design by Nijper',
      twitterDescription: 'A hospitality website in the "Menu card" style.',
    },
  },
  notFound: {
    nl: {
      title: 'Pagina niet gevonden | Nijper',
      description: 'Deze pagina bestaat niet (meer). Ga terug naar de homepage van Nijper, website bouwer in Nijmegen.',
      keywords: '',
      ogTitle: 'Pagina niet gevonden | Nijper',
      ogDescription: 'Deze pagina bestaat niet (meer).',
      twitterTitle: 'Pagina niet gevonden | Nijper',
      twitterDescription: 'Deze pagina bestaat niet (meer).',
    },
    en: {
      title: 'Page not found | Nijper',
      description: 'This page does not exist (any more). Go back to the Nijper homepage, web developer in Nijmegen.',
      keywords: '',
      ogTitle: 'Page not found | Nijper',
      ogDescription: 'This page does not exist (any more).',
      twitterTitle: 'Page not found | Nijper',
      twitterDescription: 'This page does not exist (any more).',
    },
  },
};

/** One ProfessionalService (a LocalBusiness subtype) describes Nijper on every page. */
export function schemaFor(page: PageId, lang: Lang) {
  // Demo sites describe fictional businesses: no Nijper business schema there
  if (page === 'demoLineup' || page === 'demoMenu' || page === 'notFound') return null;
  const t = useTranslations(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://nijper.nl/#organization',
    name: 'Nijper Web Solutions',
    url: 'https://nijper.nl/',
    logo: 'https://nijper.nl/apple-touch-icon.png',
    image: 'https://nijper.nl/assets/nijper-website-bouwer-nijmegen.png',
    // Google Business Profile (Knowledge Graph id, stable unlike share links)
    sameAs: ['https://www.google.com/search?kgmid=/g/11z85twr7y'],
    description:
      lang === 'nl'
        ? 'Dé website bouwer in Nijmegen voor horeca, cafés, restaurants en festivals. Gespecialiseerd in SEO en maatwerk.'
        : 'Web developer in Nijmegen for hospitality, cafés, restaurants and festivals. Specialised in SEO and custom work.',
    email: 'info@nijper.nl',
    priceRange: '€€',
    address: { '@type': 'PostalAddress', addressLocality: 'Nijmegen', addressRegion: 'Gelderland', addressCountry: 'NL' },
    geo: { '@type': 'GeoCoordinates', latitude: 51.8514, longitude: 5.8713 },
    areaServed: { '@type': 'City', name: 'Nijmegen' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    founder: team.map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: t(m.role),
      sameAs: m.socials.map((s) => s.url).filter((u) => u.startsWith('http')),
    })),
  };
}
