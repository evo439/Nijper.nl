import type { ImageMetadata } from 'astro';
import type { TKey } from '../i18n/utils';
import roel from '../assets/RoelProfiel.webp';
import sarah from '../assets/SarahProfiel.webp';

export interface Social {
  label: string;
  url: string;
}

export interface Member {
  name: string;
  img: ImageMetadata;
  alt: string;
  role: TKey;
  bio: TKey;
  bioShort: TKey;
  socials: Social[];
}

export const team: Member[] = [
  {
    name: 'Roel',
    img: roel,
    alt: 'Roel - Mede-oprichter & Website Bouwer',
    role: 'role_roel',
    bio: 'bio_roel',
    bioShort: 'bio_roel_short',
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b' },
      { label: 'GitHub', url: 'https://github.com/BigRoelof' },
      { label: 'Website', url: 'https://www.roelnijhuis.nl/' },
      { label: 'roel@nijper.nl', url: 'mailto:roel@nijper.nl' },
    ],
  },
  {
    name: 'Sarah',
    img: sarah,
    alt: 'Sarah - Mede-oprichter & Designer',
    role: 'role_sarah',
    bio: 'bio_sarah',
    bioShort: 'bio_sarah_short',
    socials: [
      { label: 'GitHub', url: 'https://github.com/evo439' },
      { label: 'sarah@nijper.nl', url: 'mailto:sarah@nijper.nl' },
    ],
  },
];
