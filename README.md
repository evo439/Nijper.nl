# Nijper - Web Solutions 🚀

Welkom bij de repository van **Nijper**, een webontwikkelingsbureau gevestigd in Nijmegen. Wij ontwerpen en bouwen snelle, robuuste en unieke websites op maat voor lokale ondernemingen zoals cafés, restaurants en festivals.

De website is te bezoeken via: [nijper.nl](https://nijper.nl)

---

## 🌟 Kenmerken

- **Volledig Responsive Design**: Een moderne, 'mobile-first' lay-out geoptimaliseerd voor telefoons, tablets en desktops.
- **Meertalige Ondersteuning (i18n)**: Eenvoudig wisselen tussen Nederlands (NL) en Engels (EN) zonder pagina-refresh, dankzij een custom client-side vertaalsysteem.
- **Modulaire Architectuur**:
  - Overzichtelijke en gescheiden CSS-bestanden per component.
  - Modulaire JavaScript-structuur voor interacties (zoals modals, navigatie en animaties).
- **Premium Styling**: Een donker thema met subtiele gradients, glow-effecten en 'glassmorphism' componenten (Outfit-lettertype).
- **SEO Geoptimaliseerd**: Geïntegreerde JSON-LD Local Business Schema-metadata, een correcte heading-structuur (`h1`-`h6`), en `robots.txt`/`sitemap.xml` configuratie.
- **Contactformulier**: Een werkend contactformulier aangedreven door Web3Forms.

---

## 📂 Project Structuur

Hieronder vind je een overzicht van de belangrijkste mappen en bestanden:

```text
Nijper/
├── assets/                  # Afbeeldingen, iconen en logo's (o.a. profielfoto's, SEO webp)
├── css/                     # Styling bestanden
│   ├── base.css             # CSS variabelen en globale resets
│   ├── style.css            # Hoofdbestand dat alle component-styles importeert
│   └── components/          # CSS componenten (navbar, buttons, hero, portfolio, etc.)
├── js/                      # JavaScript logica
│   ├── components/          # Interactieve componenten (navbar, modal, language, scroll, animations)
│   └── locales/             # Vertalingsbestanden (nl.js en en.js)
├── CNAME                    # Domeinconfiguratie voor GitHub Pages (nijper.nl)
├── index.html               # De hoofdpagina (HTML5)
├── robots.txt               # Instructies voor zoekmachines
├── sitemap.xml              # Sitemap voor betere SEO-indexering
└── README.md                # Dit bestand
```

---

## 🛠️ Lokale Ontwikkeling

Omdat dit een statische frontend-website is, heb je geen build-tools nodig. Je kunt de website lokaal starten met een eenvoudige HTTP-server

### optie 1: NPX HTTP Server
Als je Python op je computer hebt geïnstalleerd, kun je in de hoofdmap van het project de volgende opdracht uitvoeren:

```bash
npx http-server --ext html
```
Testen kan gebeuren via meerdere devices.

### Optie 2: Python HTTP Server (Aanbevolen)
Als je Python op je computer hebt geïnstalleerd, kun je in de hoofdmap van het project de volgende opdracht uitvoeren:

```bash
python3 -m http.server 3000
```
Open vervolgens `http://localhost:3000` in je browser.

### Optie 3: VS Code Live Server
Als je Visual Studio Code gebruikt, kun je de extensie **Live Server** installeren. Klik vervolgens rechtsonder in de statusbalk op **"Go Live"** om de website te bekijken en live herlaadfuncties te gebruiken bij codewijzigingen.

---

## 🚀 Technologieën

- **HTML5 & CSS3** (Vanilla, CSS Variables, Flexbox, Grid)
- **Vanilla JavaScript** (ES6+ classes en modules)
- **Google Fonts** (Outfit)
- **Web3Forms API** (voor het contactformulier)

---

## 👥 Het Team

- **Roel Nijhuis**: Mede-oprichter & Developer (Gespecialiseerd in backend architecturen, Computing & Information Science aan de Radboud Universiteit).
- **Sarah Kuijper**: Mede-oprichter & Designer (Gespecialiseerd in frontend development en intuïtief design, Computing Science aan de Radboud Universiteit).

---

© 2026 **Nijper** Web Solutions. Alle rechten voorbehouden.
