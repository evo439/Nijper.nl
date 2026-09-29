import type { TKey } from '../i18n/utils';

export interface Social {
  icon: string;
  url: string;
  alt: string;
}

export interface Member {
  name: string;
  img: string;
  alt: string;
  role: TKey;
  bio: TKey;
  bioShort: TKey;
  socials: Social[];
}

export const team: Member[] = [
  {
    name: 'Roel',
    img: '/assets/RoelProfiel.webp',
    alt: 'Roel - Mede-oprichter & Website Bouwer',
    role: 'role_roel',
    bio: 'bio_roel',
    bioShort: 'bio_roel_short',
    socials: [
      { icon: '/assets/linkedin.svg', url: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b', alt: 'LinkedIn' },
      { icon: '/assets/github.svg', url: 'https://github.com/BigRoelof', alt: 'GitHub' },
      { icon: '/assets/browser.svg', url: 'https://www.roelnijhuis.nl/', alt: 'Website' },
      { icon: '/assets/email_icon.svg', url: 'mailto:roel@nijper.nl', alt: 'Email' },
    ],
  },
  {
    name: 'Sarah',
    img: '/assets/SarahProfiel.webp',
    alt: 'Sarah - Mede-oprichter & Designer',
    role: 'role_sarah',
    bio: 'bio_sarah',
    bioShort: 'bio_sarah_short',
    socials: [
      { icon: '/assets/github.svg', url: 'https://github.com/evo439', alt: 'GitHub' },
      { icon: '/assets/email_icon.svg', url: 'mailto:sarah@nijper.nl', alt: 'Email' },
    ],
  },
];
