# Projektdokumentation: Webseite für Reinigungsfirma

## 1. Projektübersicht

**Projekt:** Webpräsenz für kleine Reinigungsfirma
**Ziel:** Professionelle, benutzerfreundliche Website zur Kundengewinnung und Information
**Zielgruppe:** Geschäftskunden und Privathaushalte in der Region

---

## 2. Datei- und Ordnerstruktur

```
cleaning-website/
├── index.html                 # Startseite
├── about.html                 # Über uns
├── services.html              # Leistungen/Services
├── pricing.html               # Preisliste
├── contact.html               # Kontakt & Kontaktformular
├── impressum.html             # Impressum
├── datenschutz.html           # Datenschutzerklärung
├── 404.html                   # Fehlerseite
│
├── assets/
│   ├── css/
│   │   ├── style.css          # Hauptstyles
│   │   ├── responsive.css     # Mobile-Responsive Styles
│   │   └── variables.css      # CSS-Variablen (Farben, Fonts)
│   │
│   ├── js/
│   │   ├── main.js            # Hauptskripte
│   │   ├── form-handler.js    # Kontaktformular-Verarbeitung
│   │   └── performance.js     # Performance-Optimierungen
│   │
│   ├── images/
│   │   ├── logo.svg           # Logo (SVG für Skalierbarkeit)
│   │   ├── hero/              # Hero-Bilder (optimiert)
│   │   ├── services/          # Service-Fotos
│   │   ├── team/              # Teamfotos
│   │   └── icons/             # SVG-Icons
│   │
│   └── fonts/
│       ├── font-family-regular.woff2
│       └── font-family-bold.woff2
│
├── config/
│   ├── sitemap.xml            # XML-Sitemap für SEO
│   ├── robots.txt             # Robots.txt für Crawler
│   └── .htaccess              # Apache-Konfiguration (falls Apache)
│
├── docs/
│   ├── STYLE_GUIDE.md         # Design-Richtlinien
│   ├── SEO_CHECKLIST.md       # SEO-Optimierungen
│   └── MAINTENANCE.md         # Wartungshandbuch
│
└── README.md                  # Projekt-README

```

---

## 3. Seiten-Komponenten (Essentiell)

### 3.1 Startseite (index.html)
**Zweck:** Erste Eindruck, Überblick über das Unternehmen

**Inhalte:**
- Hero-Section mit ansprechendem Bild und Willkommenstext
- Kurze Unternehmensvorstellung (2-3 Sätze)
- Übersicht der Top-Services (3-4 Karten)
- Call-to-Action Button ("Angebot anfordern", "Kontaktieren Sie uns")
- Kurze Referenzen/Kundenzahl (Vertrauensaufbau)
- Newsletter-Anmeldung (optional)

**Struktur:**
```html
<header> <!-- Navigation, Logo -->
<section class="hero"> <!-- Willkommen -->
<section class="services-overview"> <!-- Services -->
<section class="cta"> <!-- Call-to-Action -->
<footer> <!-- Footer mit Links -->
```

---

### 3.2 Über uns (about.html)
**Zweck:** Vertrauensaufbau durch Unternehmensgeschichte und -werte

**Inhalte:**
- Unternehmensgeschichte (Gründung, Entwicklung)
- Unternehmenswerte und Mission
- Teamporträt mit Fotos
- Erfahrung und Qualifikationen
- Zertifizierungen (falls vorhanden)
- Warum wir? (Alleinstellungsmerkmale)

**Struktur:**
```html
<section class="company-story">
<section class="values">
<section class="team">
<section class="certifications">
<section class="why-us">
```

---

### 3.3 Services/Leistungen (services.html)
**Zweck:** Detaillierte Beschreibung aller angebotenen Services

**Inhalte:**
- Übersicht aller Service-Kategorien
- Einzelne Service-Karten mit:
  - Icon/Bild
  - Servicename
  - Kurzbeschreibung
  - Detaillierte Leistungen (Aufzählung)
  - "Mehr erfahren"-Link
  - Ggf. Beispielbilder (Vorher-Nachher)

**Service-Beispiele:**
- Büroreinigung
- Privathaushalt-Reinigung
- Fensterreinigung
- Spezialreinigungen
- Regelmäßige Wartungsreinigung

**Struktur:**
```html
<section class="services-grid">
  <div class="service-card">
    <!-- Service Details -->
  </div>
</section>
```

---

### 3.4 Preisliste (pricing.html)
**Zweck:** Transparente Preisgestaltung und Entscheidungshilfe

**Inhalte:**
- Preismodelle nach Service-Typ
- Tabellarische Darstellung:
  - Service-Typ
  - Leistungsumfang
  - Preis (ab...)
  - "Anfrage senden"-Button
- Optional: Preisrechner/Kalkulator
- Rabatte für regelmäßige Buchungen
- Hinweis: "Individuelle Angebote auf Anfrage"

**Struktur:**
```html
<section class="pricing-intro">
<section class="pricing-table">
<section class="pricing-calculator"> <!-- Optional -->
<section class="faq-pricing">
```

---

### 3.5 Kontakt (contact.html)
**Zweck:** Direkte Kommunikation mit dem Unternehmen

**Inhalte:**
- Kontaktformular mit Feldern:
  - Name (erforderlich)
  - E-Mail (erforderlich, validiert)
  - Telefon (optional)
  - Service-Auswahl (Dropdown)
  - Nachricht (Text-Area)
  - Datenschutz-Zustimmung (erforderlich)
  - Spam-Schutz (Honeypot oder reCAPTCHA)

- Kontaktinformationen:
  - Firmenname und Adresse
  - Telefonnummer(n)
  - E-Mail-Adresse
  - Öffnungszeiten
  - Ggf. Google Maps Embedded

- Kontaktformular-Verarbeitung:
  - Validierung auf Client-Seite
  - Versand per E-Mail oder zu Datenbank
  - Bestätigungsnachricht an Nutzer
  - Automatische Bestätigung an Firmenemail

**Struktur:**
```html
<section class="contact-form">
<section class="contact-info">
<section class="map">
```

---

### 3.6 Impressum (impressum.html)
**Zweck:** Rechtliche Anforderung (§ 5 TMG)

**Erforderliche Inhalte:**
- Vollständiger Name des Unternehmens
- Anschrift (Geschäftsadresse)
- Telefon und E-Mail
- Vertreter (Geschäftsführer, Inhaber)
- Registernummer (Falls eingetragen: HRB, HRA)
- Steuernummer / USt-ID
- Aufsichtsbehörde (falls relevant)
- Haftungsausschluss

---

### 3.7 Datenschutzerklärung (datenschutz.html)
**Zweck:** DSGVO-Compliance

**Erforderliche Abschnitte:**
- Verantwortlicher
- Zweck der Datenverarbeitung
- Rechtsgrundlage
- Speicherdauer
- Betroffenenrechte
- Kontaktdaten des Datenschutzbeauftragten (falls erforderlich)
- Cookies und externe Services (Google Analytics, Maps, etc.)
- Verwendung von Kontaktformularen
- SSL/TLS-Verschlüsselung

**Hinweis:** Juristisch korrekte Vorlage verwenden oder Anwalt konsultieren

---

## 4. Technische Anforderungen und Best Practices

### 4.1 Performance-Optimierung

**Bilder:**
- Moderne Formate (WebP mit PNG-Fallback)
- Responsive Bildgrößen (srcset)
- Lazy Loading für unterhalb der Fold
- Kompression (z.B. TinyPNG, ImageOptim)
- Max. 100KB pro Bild (auf Hero-Bildern optimieren)

**CSS & JavaScript:**
- CSS minimieren und zusammenfassen
- JavaScript asynchron laden (async/defer)
- Kritisches CSS inline laden
- Font-Subsetting (nur benötigte Zeichen laden)
- Moderne Formate (WOFF2 statt TTF)

**Caching:**
- Browser-Caching aktivieren (via .htaccess)
- Server-Caching konfigurieren
- CDN nutzen (z.B. Cloudflare kostenlos)

**Ziel:** Lighthouse Score > 90 (Performance, SEO, Best Practices, Accessibility)

### 4.2 Mobile-Responsiveness

**Breakpoints:**
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

**Anforderungen:**
- Mobiles Menü (Hamburger-Menü)
- Touch-freundliche Buttons (min. 48px)
- Lesbare Schriftgrößen auf mobil
- Optimierte Bilder für kleinere Screens
- Keine horizontalen Scrollbars

**Testing:** Chrome DevTools, BrowserStack, oder echte Geräte

### 4.3 SEO-Optimierung

**On-Page:**
- Meta-Descriptions (155-160 Zeichen)
- Title-Tags (50-60 Zeichen, Keyword + Brand)
- H1-H6 Struktur (eine H1 pro Seite)
- Keyword-Recherche (z.B. "Reinigung Konstanz")
- Interne Verlinkung
- Schema Markup (LocalBusiness, Service)

**Off-Page:**
- Google My Business Eintrag
- Local Citations (Branchenverzeichnisse)
- Backlinks von lokalen Seiten

**Technisch:**
- Sitemap.xml
- robots.txt
- SSL-Zertifikat (HTTPS)
- Canonical URLs
- Strukturierte Daten (JSON-LD)

### 4.4 Sicherheit

**HTTPS:**
- SSL-Zertifikat erforderlich (kostenlos via Let's Encrypt)
- HTTP → HTTPS Redirect

**Formulare:**
- CSRF-Token
- Honeypot-Feld gegen Spam
- Oder: reCAPTCHA v3 (unauffällig)
- Rate-Limiting (max. 5 Anfragen/IP/Stunde)
- Eingabe-Validierung (Server-Seite!)

**Datenschutz:**
- Datenschutzerklärung aktuell
- Cookie-Consent-Banner
- DSGVO-konforme Datenspeicherung
- Keine sensiblen Daten in URLs

### 4.5 Accessibility (A11y)

**Anforderungen (WCAG 2.1 Level AA):**
- Alt-Texte für alle Bilder
- Semantisches HTML (header, nav, main, footer)
- Ausreichender Farbkontrast (4.5:1 für Text)
- Keyboard-Navigation möglich
- Focus-Indikatoren sichtbar
- Formular-Label mit input-Elementen verknüpft
- Video-Untertitel (falls vorhanden)
- Lesbare Schriftgröße (min. 16px auf Mobile)

**Testing:** WAVE, Axe DevTools, Lighthouse

---

## 5. Hosting & Deployment

### 5.1 Hosting-Anforderungen

**Minimalanforderungen:**
- PHP 7.4+ (für Formularverarbeitung)
- 2 GB Speicher
- 10 GB Bandbreite/Monat (reicht für kleine Seite)
- E-Mail-Versand möglich

**Empfehlung:** Shared Hosting (z.B. Uberspace, 1&1, Hetzner) ab ~5€/Monat

### 5.2 Domain & SSL

- Domain registrieren (.de empfohlen)
- SSL-Zertifikat (kostenlos via Let's Encrypt)
- E-Mail-Adressen mit eigenem Domain-Namen (info@firmenname.de)

### 5.3 Deployment-Prozess

```bash
# 1. Lokale Entwicklung
git clone <repo>
cd cleaning-website
# Testen mit lokalem Server

# 2. Build & Optimierung
minify CSS & JS
optimize images
generate sitemap

# 3. Upload zum Server
scp -r assets/* user@host:/public_html/
# oder FTP/SFTP

# 4. Testing auf Live-Server
Performance-Test
SEO-Test
Formulare testen
```

---

## 6. Workflow & Checklisten

### 6.1 Vor dem Launch

- [ ] Alle Seiten sind responsive getestet
- [ ] Lighthouse Score > 90
- [ ] SSL-Zertifikat aktiv
- [ ] Sitemap.xml und robots.txt hochgeladen
- [ ] Google My Business erstellt
- [ ] Datenschutzerklärung und Impressum korrekt
- [ ] Kontaktformular getestet
- [ ] Alle Links funktionieren (intern & extern)
- [ ] 404-Seite existiert
- [ ] Google Analytics/Matomo eingebunden (optional)
- [ ] Backup erstellt

### 6.2 Nach dem Launch

- [ ] Bei Google Search Console anmelden
- [ ] Sitemap einreichen
- [ ] In Google My Business validieren
- [ ] In lokalen Branchenverzeichnissen eintragen
- [ ] Erste Rankings beobachten
- [ ] Nutzerfeedback sammeln
- [ ] Regelmäßige Backups einplanen

---

## 7. Technologie-Stack (Empfehlung)

**Frontend:**
- HTML5 (semantisch)
- CSS3 (flexbox, grid, responsive)
- Vanilla JavaScript (oder leichte Frameworks)

**Optional (für Komplexität):**
- Static Site Generator (Hugo, 11ty) – für bessere Performance
- React/Vue – falls viel Interaktivität
- Tailwind CSS – schnellere Styling

**Backend (Kontaktformular):**
- PHP (einfach, überall verfügbar)
- Node.js/Express (moderner)
- Python/Flask (flexibel)

**CMS (Alternative zu reinem Code):**
- WordPress (größer, aber komplexer)
- Statamic (leicht, sicher)
- Craft CMS (professionell)

---

## 8. Kosten-Übersicht

| Position | Kosten | Hinweise |
|----------|--------|----------|
| Domain (.de) | 5-15€/Jahr | ca. 1€/Monat |
| Hosting (Shared) | 5-20€/Monat | ausreichend für kleine Seite |
| SSL-Zertifikat | kostenlos | Let's Encrypt |
| Email (domain.de) | inklusive | meist im Hosting enthalten |
| Design & Entwicklung | 800-3000€ | Freelancer/Agentur oder selbst |
| **Gesamt (Start)** | **ca. 100-200€/Jahr** | ohne Entwicklung |

---

## 9. Wartung & Updates

**Regelmäßig (monatlich):**
- Backups überprüfen
- Security-Updates einspielen
- Inhalte aktualisieren (Blog, News)

**Halbjährlich:**
- SEO-Performance überprüfen
- Broken Links checken
- Performance-Audit (Lighthouse)
- Google Analytics auswerten

**Jährlich:**
- Datenschutzerklärung überprüfen
- Impressum aktualisieren
- Komplettes Website-Backup
- Security-Audit

---

## 10. Kontakt & Support

**Bei Fragen zur Implementierung:**
- Dokumentation lokales Backup speichern
- Version Control (Git) nutzen
- Changelog pflegen
- Kontakt zum Support/Developer halten

---

## 11. Zusammenfassung Timeline

| Phase | Dauer | Aufgaben |
|-------|-------|----------|
| Planung | 1-2 Wochen | Content sammeln, Design-Vorlage wählen |
| Entwicklung | 2-4 Wochen | HTML/CSS/JS schreiben, testen |
| QA & Testing | 1 Woche | Performance, Mobile, SEO, Accessibility |
| Launch-Vorbereitung | 1 Woche | Hosting, Domain, SSL, Datenschutz |
| Launch | 1 Tag | Deploy, Google Indexing starten |
| **Gesamt** | **6-9 Wochen** | Mit guter Planung machbar |

---

**Version:** 1.0
**Datum:** 2026
**Status:** Aktiv