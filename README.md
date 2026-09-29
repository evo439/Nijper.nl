# Nijper - Web Solutions 🚀

Welkom bij de repository van **Nijper**, een webontwikkelingsbureau gevestigd in Nijmegen. Wij ontwerpen en bouwen snelle, robuuste en unieke websites op maat voor lokale ondernemingen zoals cafés, restaurants en festivals.

De website is te bezoeken via: [nijper.nl](https://nijper.nl)

---

## 🌟 Kenmerken

- **Astro**: statische site, gebouwd met [Astro](https://astro.build). Geen JavaScript-framework in de browser; alleen kleine scripts per component.
- **Meertalig (i18n)**: Nederlands op `/`, `/over`, `/diensten`, `/contact`, `/website-check`; Engels onder `/en/` (`/en/about`, `/en/services`, …). Beide versies worden vooraf gerenderd en zijn met `hreflang` aan elkaar gekoppeld.
- **SEO**: per pagina title/description/OG-tags, JSON-LD (LocalBusiness / ProfessionalService), automatisch gegenereerde sitemap, `robots.txt` en `llm.txt`.
- **Contactformulier**: via Web3Forms.
- **Website Check**: gratis Lighthouse-analyse (performance & SEO) via een Cloudflare Worker-proxy (`Cloudflare/worker.js`), plus een lead via Web3Forms.

---

## 📂 Project Structuur

```text
Nijper/
├── public/                 # Statische bestanden, 1-op-1 gekopieerd (assets/, CNAME, robots.txt, llm.txt)
├── src/
│   ├── pages/              # Routes: NL in de root, EN in pages/en/
│   ├── views/              # Pagina-inhoud, gedeeld door NL en EN
│   ├── components/         # Secties (Hero, Team, Services, Packages, Contact, WebsiteCheck, …)
│   ├── layouts/Base.astro  # <head> met SEO, nav en footer
│   ├── i18n/               # nl.ts, en.ts (teksten), meta.ts (SEO per pagina), utils.ts (routes)
│   ├── data/team.ts        # Teamleden en social links
│   ├── scripts/            # Gedeelde client-side scripts
│   └── styles/
├── Cloudflare/worker.js    # PageSpeed-proxy (los gedeployed op Cloudflare)
└── .github/workflows/      # Build & deploy naar GitHub Pages
```

Nieuwe tekst toevoegen: zet de sleutel in zowel `src/i18n/nl.ts` als `src/i18n/en.ts` en gebruik `t('sleutel')` in een component.

---

## 🛠️ Lokale Ontwikkeling

Vereist Node.js 22+.

```bash
npm install
npm run dev       # ontwikkelserver op http://localhost:4321
npm run build     # productiebuild naar dist/
npm run preview   # bekijk de build lokaal
```

## 🚀 Deployen

Elke push naar `main` bouwt de site en publiceert `dist/` via GitHub Actions naar GitHub Pages (Settings → Pages → Source: **GitHub Actions**).

---

## 👥 Het Team

- **Roel Nijhuis**: Mede-oprichter & Developer (Gespecialiseerd in backend architecturen, Computing & Information Science aan de Radboud Universiteit).
- **Sarah Kuijper**: Mede-oprichter & Designer (Gespecialiseerd in frontend development en intuïtief design, Computing Science aan de Radboud Universiteit).

---

© 2026 **Nijper** Web Solutions. Alle rechten voorbehouden.
