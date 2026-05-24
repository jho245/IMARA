# IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt) – Website

Statische HTML/CSS/JS-Website für die Reinigungsfirma IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt), Düsseldorf.

## Seiten

| Datei              | Inhalt                                                            |
| ------------------ | ----------------------------------------------------------------- |
| `index.html`       | Startseite – Hero, Leistungsüberblick, Vertrauenssignale, CTA     |
| `about.html`       | Über uns – Geschichte, Werte, Dienstleistungen, Zitat             |
| `services.html`    | Leistungen – 12 Service-Karten mit Kurztexten und Details         |
| `pricing.html`     | Preise – Angebotsfaktoren, Einsatzgebiet und FAQ                  |
| `contact.html`     | Kontakt – Adresse, Telefon, E-Mail, Bild                          |
| `impressum.html`   | Impressum gemäß § 5 DDG                                           |
| `datenschutz.html` | Datenschutzerklärung gemäß DSGVO                                  |
| `404.html`         | Fehlerseite                                                       |

## Projektstruktur

```
IMARA-Website/
├── index.html
├── about.html
├── services.html
├── pricing.html
├── contact.html
├── impressum.html
├── datenschutz.html
├── 404.html
├── assets/
│   ├── css/
│   │   ├── variables.css   ← Farben, Abstände, Typografie
│   │   ├── style.css       ← Hauptstyles
│   │   └── responsive.css  ← Mobile-Anpassungen
│   ├── js/
│   │   ├── main.js
│   │   └── services-modal.js  ← Popup-Logik für services.html
│   ├── images/
│   │   ├── logo/           ← logo_imara_small.png, logo_imara.png
│   │   ├── pictures/       ← bild_1.jpg, bild_2.jpg, bild_3.jpg, contact.jpg
│   │   └── flyer/
│   └── texts/              ← Quelltexte (services.md, contactdata.md, …)
├── config/
│   ├── sitemap.xml         ← Domain: imara-epc.de
│   ├── robots.txt
│   └── .htaccess
└── docs/
    ├── STYLE_GUIDE.md
    ├── SEO_CHECKLIST.md
    ├── TEXTQUALITY_SUGGESTIONS.md
    └── MAINTENANCE.md
```

## Technischer Stack

- Reines HTML5 / CSS3 / Vanilla JavaScript – kein Framework, kein Build-Tool
- Hosting: **Hostinger**
- Domain: **imara-epc.de** (aus E-Mail-Adresse info@imara-epc.de abgeleitet)
- Farbschema: Rot (`#c0392b`)
- SEO: Meta-Descriptions, Canonical URLs, LocalBusiness Schema Markup (JSON-LD)

## Lokale Entwicklung

```bash
# Einfacher lokaler Server (Python)
python3 -m http.server 8000
# Dann http://localhost:8000 im Browser öffnen
```

## Vor dem Launch

- [x] Echte Domain in `config/sitemap.xml`, `config/robots.txt` und allen `<link rel="canonical">` eintragen
- [x] SSL-Zertifikat bei Hostinger aktivieren
- [x] Dateien per FTP/SFTP hochladen
- [ ] Google Search Console einrichten & Sitemap einreichen
- [ ] Google Business Profile erstellen
- [x] Steuernummer im Impressum prüfen (aktuell: 133/5838/6163)
