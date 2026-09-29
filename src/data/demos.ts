/**
 * Content for the example designs. Both businesses are fictional; the pages
 * say so and are noindex. Rename or rewrite freely here.
 */
import type { Lang } from '../i18n/utils';

type L<T> = Record<Lang, T>;

export const euro = (lang: Lang, amount: number) =>
  new Intl.NumberFormat(lang === 'nl' ? 'nl-NL' : 'en-GB', { style: 'currency', currency: 'EUR' }).format(amount);

/* ───────────────────────── Line-up: Zomerzwerm festival ───────────────────────── */

export interface Slot {
  time: string;
  act: string;
  stage: 'main' | 'tent';
}

export const festival = {
  name: 'Zomerzwerm',
  year: '2027',
  dates: { nl: '2 t/m 4 juli 2027', en: '2 to 4 July 2027' } as L<string>,
  place: 'Nijmegen',
  pre: { nl: 'Drie dagen muziek aan de Waal', en: 'Three days of music by the Waal' } as L<string>,
  intro: {
    nl: 'Zomerzwerm is een klein festival met twee podia, veel groen en genoeg ruimte om te dansen. Van middag tot middernacht speelt nieuwe Nederlandse muziek.',
    en: 'Zomerzwerm is a small festival with two stages, lots of green and plenty of room to dance. New Dutch music plays from noon to midnight.',
  } as L<string>,
  nav: {
    nl: { programme: 'Programma', tickets: 'Tickets', info: 'Info' },
    en: { programme: 'Programme', tickets: 'Tickets', info: 'Info' },
  } as L<Record<'programme' | 'tickets' | 'info', string>>,
  buy: { nl: 'Koop tickets', en: 'Buy tickets' } as L<string>,
  stages: {
    nl: { main: 'Hoofdpodium', tent: 'De Tent' },
    en: { main: 'Main stage', tent: 'The Tent' },
  } as L<Record<Slot['stage'], string>>,
  // Headliners first: they head the poster
  headliners: ['Mira & de Meeuwen', 'Zuiderlicht', 'Luna Lichtschip'],
  undercard: ['Het Lage Water', 'Kwartet Klaproos', 'Sonic Dijkgraaf', 'Lisa Loper', 'Bram Boeg', 'Koor Kade', 'DJ Stroming'],
  days: [
    {
      label: { nl: 'Vrijdag 2 juli', en: 'Friday 2 July' },
      slots: [
        { time: '17:30', act: 'Lisa Loper', stage: 'tent' },
        { time: '19:00', act: 'Het Lage Water', stage: 'main' },
        { time: '20:45', act: 'Kwartet Klaproos', stage: 'tent' },
        { time: '22:15', act: 'Mira & de Meeuwen', stage: 'main' },
      ],
    },
    {
      label: { nl: 'Zaterdag 3 juli', en: 'Saturday 3 July' },
      slots: [
        { time: '14:00', act: 'Bram Boeg', stage: 'tent' },
        { time: '16:30', act: 'Sonic Dijkgraaf', stage: 'main' },
        { time: '19:00', act: 'DJ Stroming', stage: 'tent' },
        { time: '21:30', act: 'Zuiderlicht', stage: 'main' },
      ],
    },
    {
      label: { nl: 'Zondag 4 juli', en: 'Sunday 4 July' },
      slots: [
        { time: '13:00', act: 'Koor Kade', stage: 'main' },
        { time: '15:30', act: 'Kwartet Klaproos', stage: 'tent' },
        { time: '18:00', act: 'Het Lage Water', stage: 'tent' },
        { time: '20:30', act: 'Luna Lichtschip', stage: 'main' },
      ],
    },
  ] as { label: L<string>; slots: Slot[] }[],
  tickets: [
    { name: { nl: 'Dagkaart', en: 'Day ticket' }, price: 39, note: { nl: 'Eén festivaldag naar keuze', en: 'One festival day of your choice' } },
    { name: { nl: 'Weekendkaart', en: 'Weekend ticket' }, price: 89, note: { nl: 'Alle drie de dagen', en: 'All three days' }, featured: true },
    { name: { nl: 'Camping', en: 'Camping' }, price: 25, note: { nl: 'Bij een weekendkaart, per persoon', en: 'With a weekend ticket, per person' } },
  ] as { name: L<string>; price: number; note: L<string>; featured?: boolean }[],
  faq: [
    {
      q: { nl: 'Hoe kom ik er?', en: 'How do I get there?' },
      a: {
        nl: 'Het festivalterrein ligt op tien minuten fietsen van station Nijmegen. Er is een grote bewaakte fietsenstalling bij de ingang.',
        en: 'The festival grounds are a ten-minute bike ride from Nijmegen station. There is a large guarded bike park at the entrance.',
      },
    },
    {
      q: { nl: 'Is het festival toegankelijk?', en: 'Is the festival accessible?' },
      a: {
        nl: 'Ja. Er zijn verharde paden, een verhoogd platform bij beide podia en aangepaste toiletten. Een begeleider komt gratis mee.',
        en: 'Yes. There are paved paths, a raised platform at both stages and accessible toilets. A companion gets in for free.',
      },
    },
    {
      q: { nl: 'Mag ik eten en drinken meenemen?', en: 'Can I bring food and drink?' },
      a: {
        nl: 'Een lege drinkfles mag mee; die vul je gratis bij de watertappunten. Op het terrein staan foodtrucks met vegetarische en veganistische opties.',
        en: 'You can bring an empty bottle and refill it for free at the water points. Food trucks on site serve vegetarian and vegan options.',
      },
    },
    {
      q: { nl: 'Is er een minimumleeftijd?', en: 'Is there a minimum age?' },
      a: {
        nl: 'Kinderen tot 12 jaar zijn gratis welkom onder begeleiding van een volwassene.',
        en: 'Children up to 12 get in free when accompanied by an adult.',
      },
    },
  ] as { q: L<string>; a: L<string> }[],
  faqTitle: { nl: 'Goed om te weten', en: 'Good to know' } as L<string>,
  programmeTitle: { nl: 'Programma', en: 'Programme' } as L<string>,
  ticketsTitle: { nl: 'Tickets', en: 'Tickets' } as L<string>,
};

/* ───────────────────────── Menukaart: Eetcafé De Kiezel ───────────────────────── */

export interface Dish {
  name: L<string>;
  desc: L<string>;
  price: number;
}

export const cafe = {
  name: 'De Kiezel',
  kind: { nl: 'Eetcafé', en: 'Eetcafé' } as L<string>,
  headline: { nl: 'Eerlijk eten, van lunch tot laat', en: 'Honest food, from lunch till late' } as L<string>,
  intro: {
    nl: 'Eetcafé De Kiezel is een buurtcafé in het centrum van Nijmegen. We koken met seizoensproducten uit de regio en schenken lokaal bier van de tap.',
    en: 'Eetcafé De Kiezel is a neighbourhood café in the centre of Nijmegen. We cook with seasonal produce from the region and pour local beer on tap.',
  } as L<string>,
  nav: {
    nl: { menu: 'Menukaart', hours: 'Openingstijden', reserve: 'Reserveren' },
    en: { menu: 'Menu', hours: 'Opening hours', reserve: 'Reservations' },
  } as L<Record<'menu' | 'hours' | 'reserve', string>>,
  reserveBtn: { nl: 'Reserveer een tafel', en: 'Book a table' } as L<string>,
  menuBtn: { nl: 'Bekijk de menukaart', en: 'View the menu' } as L<string>,
  today: {
    title: { nl: 'Vandaag op de kaart', en: 'On the menu today' },
    note: { nl: 'Wisselt dagelijks', en: 'Changes daily' },
    dishes: [
      { name: { nl: 'Soep van de dag', en: 'Soup of the day' }, desc: { nl: 'Met brood van de bakker om de hoek', en: 'With bread from the baker around the corner' }, price: 6.5 },
      { name: { nl: 'Dagschotel', en: 'Dish of the day' }, desc: { nl: 'Vraag het ons', en: 'Just ask us' }, price: 17.5 },
      { name: { nl: 'Kiezeltaart', en: 'Kiezel tart' }, desc: { nl: 'Appel en walnoot, met slagroom', en: 'Apple and walnut, with whipped cream' }, price: 5 },
    ] as Dish[],
  },
  menuTitle: { nl: 'Menukaart', en: 'Menu' } as L<string>,
  courses: [
    {
      title: { nl: 'Lunch', en: 'Lunch' },
      time: { nl: 'tot 16:00', en: 'until 4 pm' },
      dishes: [
        { name: { nl: 'Uitsmijter', en: 'Uitsmijter' }, desc: { nl: 'Drie eieren met ham, kaas of beide', en: 'Three fried eggs on bread with ham, cheese or both' }, price: 9.5 },
        { name: { nl: 'Broodje kroket', en: 'Croquette sandwich' }, desc: { nl: 'Twee rundvleeskroketten met grove mosterd', en: 'Two beef croquettes with wholegrain mustard' }, price: 8.5 },
        { name: { nl: 'Salade geitenkaas', en: 'Goat cheese salad' }, desc: { nl: 'Met peer, honing en walnoot', en: 'With pear, honey and walnut' }, price: 12.5 },
      ],
    },
    {
      title: { nl: 'Diner', en: 'Dinner' },
      time: { nl: 'vanaf 17:00', en: 'from 5 pm' },
      dishes: [
        { name: { nl: 'Stoofvlees', en: 'Beef stew' }, desc: { nl: 'Met friet, appelmoes en salade', en: 'With fries, apple sauce and salad' }, price: 19.5 },
        { name: { nl: 'Vis van de dag', en: 'Fish of the day' }, desc: { nl: 'Met seizoensgroenten en beurre blanc', en: 'With seasonal vegetables and beurre blanc' }, price: 22 },
        { name: { nl: 'Risotto', en: 'Risotto' }, desc: { nl: 'Paddenstoelen, Parmezaan en tijm (vegetarisch)', en: 'Mushrooms, Parmesan and thyme (vegetarian)' }, price: 18 },
        { name: { nl: 'Kiezelburger', en: 'Kiezel burger' }, desc: { nl: 'Rund of bonen, met ui-chutney en friet', en: 'Beef or bean, with onion chutney and fries' }, price: 17.5 },
      ],
    },
    {
      title: { nl: 'Borrel', en: 'Drinks & bites' },
      time: { nl: 'de hele dag', en: 'all day' },
      dishes: [
        { name: { nl: 'Bitterballen', en: 'Bitterballen' }, desc: { nl: 'Acht stuks, met mosterd', en: 'Eight pieces, with mustard' }, price: 7.5 },
        { name: { nl: 'Kaasplank', en: 'Cheese board' }, desc: { nl: 'Drie Nederlandse kazen met notenbrood', en: 'Three Dutch cheeses with nut bread' }, price: 11 },
      ],
    },
  ] as { title: L<string>; time: L<string>; dishes: Dish[] }[],
  hoursTitle: { nl: 'Openingstijden', en: 'Opening hours' } as L<string>,
  hours: [
    { day: { nl: 'Maandag', en: 'Monday' }, time: { nl: 'Gesloten', en: 'Closed' } },
    { day: { nl: 'Dinsdag t/m donderdag', en: 'Tuesday to Thursday' }, time: { nl: '11:00 – 23:00', en: '11:00 – 23:00' } },
    { day: { nl: 'Vrijdag en zaterdag', en: 'Friday and Saturday' }, time: { nl: '11:00 – 01:00', en: '11:00 – 01:00' } },
    { day: { nl: 'Zondag', en: 'Sunday' }, time: { nl: '12:00 – 22:00', en: '12:00 – 22:00' } },
  ] as { day: L<string>; time: L<string> }[],
  address: { nl: 'In het centrum van Nijmegen', en: 'In the centre of Nijmegen' } as L<string>,
  reserveTitle: { nl: 'Reserveren', en: 'Reservations' } as L<string>,
  reserveIntro: {
    nl: 'Voor groepen tot 8 personen. Voor grotere groepen maken we graag een menu op maat.',
    en: 'For groups of up to 8. For larger groups we are happy to put together a set menu.',
  } as L<string>,
  form: {
    nl: { name: 'Naam', date: 'Datum', time: 'Tijd', people: 'Aantal personen', submit: 'Reserveer' },
    en: { name: 'Name', date: 'Date', time: 'Time', people: 'Number of people', submit: 'Book' },
  } as L<Record<'name' | 'date' | 'time' | 'people' | 'submit', string>>,
};
