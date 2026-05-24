# Projektdokumentation: IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt)

## 1. Projektübersicht

**Projekt:** Webpräsenz für IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt)
**Unternehmen:** IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt), gegründet 2024 von Imane Samini
**Standort:** Düsseldorf (Karl-Anton-Str. 17, 40211 Düsseldorf)
**Domain:** [www.imara-epc.de](https://www.imara-epc.de)
**Ziel:** Professionelle, benutzerfreundliche Website zur Kundengewinnung und Information
**Zielgruppe:** Geschäftskunden (Büros, Praxen, Gewerbe) und Privathaushalte in Düsseldorf

---

## 2. Datei- und Ordnerstruktur

```
IMARA_EPC/
├── index.html                 # Startseite
├── about.html                 # Über uns
├── services.html              # Leistungen/Services
├── pricing.html               # Preisliste
├── contact.html               # Kontakt
├── impressum.html             # Impressum
├── datenschutz.html           # Datenschutzerklärung
├── 404.html                   # Fehlerseite
├── README.md                  # Projekt-README
│
├── assets/
│   ├── css/
│   │   ├── style.css          # Hauptstyles
│   │   ├── responsive.css     # Mobile-Responsive Styles
│   │   └── variables.css      # CSS-Variablen (Farben, Systemschriften)
│   │
│   ├── js/
│   │   ├── main.js            # Hauptskripte (Navigation, allg. Interaktion)
│   │   └── services-modal.js  # Modal-Overlay für Leistungsdetails
│   │
│   ├── images/
│   │   ├── flyer/
│   │   │   └── flyer_imara.jpeg    # Unternehmensflyer
│   │   ├── icons/
│   │   │   └── favicon.ico         # Favicon
│   │   ├── logo/
│   │   │   ├── logo_imara.png      # Logo (groß)
│   │   │   └── logo_imara_small.png # Logo (klein, für Navigation)
│   │   └── pictures/
│   │       ├── bild_1.jpg          # Hero-Bild Startseite
│   │       ├── bild_2.jpg          # Bild Über-uns-Seite
│   │       ├── bild_3.jpg          # Bild Preisseite
│   │       ├── bild_4.jpg          # Bild Leistungsseite
│   │       └── contact.jpg         # Bild Kontaktseite
│   │
│   └── texts/
│       ├── contactdata.md     # Kontaktdaten (Referenz)
│       ├── services.md        # Leistungsbeschreibungen (Referenz)
│       └── startpage.md       # Startseitentexte (Referenz)
│
├── config/
│   ├── sitemap.xml            # XML-Sitemap für SEO
│   ├── robots.txt             # Robots.txt für Crawler
│   └── .htaccess              # Apache-Konfiguration
│
└── docs/
    ├── STYLE_GUIDE.md         # Design-Richtlinien
    ├── SEO_CHECKLIST.md       # SEO-Optimierungen
    ├── TEXTQUALITY_SUGGESTIONS.md # Redaktionelle Textnotizen
    └── MAINTENANCE.md         # Wartungshandbuch
```

---

## 3. Seiten-Komponenten

### 3.1 Startseite (index.html)
**Zweck:** Erster Eindruck, Überblick über das Unternehmen

**Inhalte:**
- Hero-Section mit Bild (bild_1.jpg) und Willkommenstext
- Intro-Absatz: Kurze Unternehmensvorstellung
- Übersicht der Top-Services (4 Karten)
- Trust-Section: Vertrauensmerkmale (USPs)
- Call-to-Action: Links zu Kontakt und Preisliste

**Seitenstruktur:**
```html
<header>                        <!-- Navigation, Logo -->
<section class="hero layout-split">     <!-- Willkommen + Bild -->
<section class="intro">                 <!-- Kurzbeschreibung -->
<section class="services-overview">     <!-- 4 Service-Karten -->
<section class="trust">                 <!-- Vertrauenspunkte -->
<section class="cta">                   <!-- Call-to-Action -->
<footer>                        <!-- Footer mit Links -->
```

**Service-Karten auf Startseite:**
1. Zuhause – Haushaltsreinigung
2. Arbeitsplatz – Büroreinigung
3. Fenster – Fensterreinigung
4. Sonderaufgaben – Spezialreinigung

**Schema Markup:** `LocalBusiness` (JSON-LD) mit Adresse, Telefon, Öffnungszeiten, Geo-Koordinaten

---

### 3.2 Über uns (about.html)
**Zweck:** Vertrauensaufbau durch Unternehmensgeschichte und -werte

**Inhalte:**
- Unternehmensgeschichte (Gründung 2024, Imane Samini)
- Unternehmenswerte (Zuverlässigkeit, Qualität, Respekt, Nachhaltigkeit, persönlicher Kontakt)
- Warum-wir-Section (Alleinstellungsmerkmale)
- Dienstleistungsübersicht (Liste aller 12 Leistungen)
- Zitat von Imane Samini (CEO-Quote)

**Seitenstruktur:**
```html
<section class="company-story">    <!-- Geschichte + schwebendes Bild rechts -->
<section class="values">           <!-- Unternehmenswerte -->
<section class="why-us">           <!-- Alleinstellungsmerkmale -->
<section class="services-overview"><!-- Leistungsliste -->
<section class="quote">            <!-- Zitat der Gründerin -->
```

**Hinweis:** Kein Team-Bereich mit Fotos, keine Zertifizierungs-Section. Bild (bild_2.jpg) wird auf Desktop per CSS-Float rechts eingebunden und auf Mobilgeräten in gleicher Breite wie der Text dargestellt.

---

### 3.3 Leistungen (services.html)
**Zweck:** Detaillierte Beschreibung aller 12 angebotenen Services

**Inhalte:**
- Intro-Text
- Bild (bild_4.jpg) als Desktop-Float rechts; Intro und Service-Karten laufen im selben Container am Bild vorbei. Auf Mobilgeräten haben Bild und Textcontainer die gleiche Breite.
- 12 Service-Karten im Grid, je mit Titel, Kurztext und Modal-Beschreibung
- Modal-Overlay: Klick auf den Button "Details ansehen" öffnet die Detailbeschreibung (services-modal.js)

**Die 12 Leistungen:**
1. **Gewerbereinigung** – Verkaufsflächen, Lager, Kundenbereiche
2. **Praxisreinigung** – Medizinische Einrichtungen, Desinfektion
3. **Büroreinigung** – Arbeitsplätze, täglich oder wöchentlich
4. **Grundreinigung** – Intensivreinigung, hartnäckige Verschmutzungen
5. **Leerstandreinigung** – Übergabereinigung für Immobilien
6. **Haushaltsreinigung** – Private Wohnräume nach individuellen Wünschen
7. **Ferienwohnung** – Reinigung zwischen Aufenthalten
8. **Treppenhausreinigung** – Treppenhäuser, Eingangsbereiche und Gemeinschaftsflächen
9. **Aufenthaltsreinigung** – Kantinen, Pausenräume, Umkleiden
10. **Events-Reinigung** – Vor/nach Veranstaltungen
11. **Sonderreinigung** – Spezialaufgaben mit speziellem Gerät
12. **Objektbetreuung** – Gebäudemanagement, Haustechnik-Kontrolle

**Seitenstruktur:**
```html
<h1>Unsere Leistungen</h1>
<p>                              <!-- Intro -->
<section class="services-grid"> <!-- 12 service-card Divs mit Kurztexten, Buttons und data-Attributen -->
<div id="service-modal">        <!-- Modal-Overlay -->
```

---

### 3.4 Preisliste (pricing.html)
**Zweck:** Transparente Preisgestaltung und Entscheidungshilfe

**Inhalte:**
- Hinweis auf individuelle Angebote auf Anfrage
- Bild (bild_3.jpg) als Desktop-Float rechts; auf Mobilgeräten gleiche Breite wie der Textcontainer
- Angebotsfaktoren wie Objektart, Fläche, Umfang und Häufigkeit
- Einsatzgebiet Düsseldorf und Umgebung
- FAQ zu Preisen und regelmäßigen Reinigungsterminen

---

### 3.5 Kontakt (contact.html)
**Zweck:** Direkte Kommunikation mit dem Unternehmen

**Kontaktdaten:**
- Telefon: +49 152 26857715
- E-Mail: info@imara-epc.de
- Adresse: Karl-Anton-Str. 17, 40211 Düsseldorf
- Öffnungszeiten: Mo–Fr, 08:00–18:00 Uhr

**Seitenstruktur:**
```html
<section class="contact-info">
```

**Hinweis:** Die Kontaktaufnahme erfolgt über Telefon- und `mailto:`-Links. Es gibt aktuell kein Kontaktformular, kein EmailJS und keine serverseitige Formularverarbeitung.

---

### 3.6 Impressum (impressum.html)
**Zweck:** Rechtliche Anforderung (§ 5 DDG)

**Erforderliche Inhalte:**
- Vollständiger Name: IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt) / Imane Samini
- Adresse: Karl-Anton-Str. 17, 40211 Düsseldorf
- Telefon und E-Mail
- Steuernummer / USt-ID
- Haftungsausschluss

---

### 3.7 Datenschutzerklärung (datenschutz.html)
**Zweck:** DSGVO-Compliance

**Erforderliche Abschnitte:**
- Verantwortlicher (IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt))
- Zweck der Datenverarbeitung
- Rechtsgrundlage
- Speicherdauer
- Betroffenenrechte
- Cookies und externe Services
- SSL/TLS-Verschlüsselung

---

## 4. Technische Anforderungen und Best Practices

### 4.1 Performance-Optimierung

**Bilder:**
- Formate: JPEG und PNG (vorhanden), WebP/srcset als mögliches Ziel
- Responsive Bildgrößen (srcset) empfohlen
- Lazy Loading für unterhalb der Falz
- Zielgröße: vorhandene Inhaltsbilder möglichst unter ca. 350 KB halten; weitere Optimierung über WebP/srcset möglich

**CSS & JavaScript:**
- CSS aufgeteilt in variables.css, style.css, responsive.css
- JavaScript asynchron (defer) geladen
- Kein externer Framework-Overhead – Vanilla JS

**Caching:**
- Browser-Caching via .htaccess aktiviert
- Kein externer JavaScript-/Font-CDN-Einsatz vorgesehen; Hosting-Caching oder Cloudflare optional prüfen

**Ziel:** Lighthouse Score > 90 (Performance, SEO, Best Practices, Accessibility)

### 4.2 Mobile-Responsiveness

**Breakpoints (responsive.css):**
- Mobile: 320px – 768px
- Tablet: 768px – 1024px
- Desktop: 1024px+

**Anforderungen:**
- Hamburger-Menü (nav-toggle, main.js)
- Touch-freundliche Buttons (min. 48px)
- Lesbare Schriftgrößen auf Mobilgeräten
- Keine horizontalen Scrollbars

### 4.3 SEO-Optimierung

**On-Page:**
- Meta-Descriptions (155–160 Zeichen) auf allen Seiten
- Title-Tags (50–60 Zeichen, Keyword + Brand)
- H1–H6 Struktur (eine H1 pro Seite)
- Keywords: "Gebäudereinigung Düsseldorf", "Büroreinigung Düsseldorf", etc.
- Canonical URLs auf jeder Seite
- Schema Markup: `LocalBusiness` (JSON-LD, index.html)

**Technisch:**
- sitemap.xml (config/)
- robots.txt (config/)
- SSL-Zertifikat (HTTPS)
- favicon.ico vorhanden

### 4.4 Sicherheit

**HTTPS:** SSL-Zertifikat erforderlich (kostenlos via Let's Encrypt), HTTP → HTTPS Redirect via .htaccess

**Formulare:**
- Aktuell kein Formular vorhanden
- Bei späterer Formular-Erweiterung: Honeypot-Feld, Eingabevalidierung und Rate-Limiting einplanen

**Datenschutz:**
- Datenschutzerklärung vorhanden (datenschutz.html)
- Cookie-Consent-Banner prüfen
- DSGVO-konforme Datenspeicherung

### 4.5 Accessibility (A11y)

**Anforderungen (WCAG 2.1 Level AA):**
- Alt-Texte für alle Bilder
- Semantisches HTML (`header`, `nav`, `main`, `footer`, `section`)
- Hamburger-Menü mit aria-label und aria-expanded
- Formular-Labels mit input-Elementen verknüpfen, falls später ein Formular ergänzt wird
- Ausreichender Farbkontrast (4.5:1 für Text)
- Keyboard-Navigation möglich (inkl. Modal)
- Focus-Indikatoren sichtbar

---

## 5. Hosting & Deployment

### 5.1 Hosting-Anforderungen

- SSL-Zertifikat aktiv
- E-Mail-Adresse konfiguriert (info@imara-epc.de)

### 5.2 Domain & SSL

- Domain: **imara-epc.de** (.de)
- SSL: Let's Encrypt (kostenlos)
- E-Mail: info@imara-epc.de

### 5.3 Deployment-Prozess

```bash
# 1. Lokale Entwicklung
git clone <repo>
cd IMARA_EPC
# Testen mit lokalem Server (z.B. Live Server in VS Code)

# 2. Optimierung
# CSS/JS minimieren
# Bilder komprimieren (TinyPNG, ImageOptim)
# sitemap.xml aktualisieren

# 3. Upload zum Server
# FTP/SFTP oder scp
scp -r . user@host:/public_html/

# 4. Testing auf Live-Server
# Performance-Test (Lighthouse)
# SEO-Test
# Telefon- und Mailto-Links testen
# Mobile-Test
```

---

## 6. Checklisten

### 6.1 Vor dem Launch

- [ ] Alle Seiten sind responsive getestet
- [ ] Lighthouse Score > 90
- [ ] SSL-Zertifikat aktiv
- [ ] sitemap.xml und robots.txt hochgeladen
- [ ] Google Business Profile erstellt
- [ ] Datenschutzerklärung und Impressum korrekt und vollständig
- [ ] Telefon- und E-Mail-Links getestet
- [ ] Alle internen und externen Links funktionieren
- [ ] 404-Seite vorhanden
- [ ] Modal auf services.html getestet (alle 12 Karten)
- [ ] Backup erstellt

### 6.2 Nach dem Launch

- [ ] Bei Google Search Console anmelden
- [ ] Sitemap einreichen
- [ ] Google Business Profile validieren
- [ ] In lokalen Branchenverzeichnissen eintragen (Düsseldorf)
- [ ] Erste Rankings beobachten
- [ ] Nutzerfeedback sammeln
- [ ] Regelmäßige Backups einplanen

---

## 7. Technologie-Stack

**Frontend:**
- HTML5 (semantisch)
- CSS3 (Flexbox, Grid, responsive – aufgeteilt in 3 Dateien)
- Vanilla JavaScript (keine externen Frameworks)

**JavaScript-Module:**
- `main.js` – Navigation (Hamburger-Menü), allgemeine Interaktion
- `services-modal.js` – Modal-Overlay für Leistungsdetails (services.html)

**Kein CMS, kein Framework** – statische HTML-Seiten für maximale Performance und einfache Wartung.

---

## 8. Kosten-Übersicht

| Position | Kosten | Hinweise |
|---|---|---|
| Domain (imara-epc.de) | 5–15 €/Jahr | ca. 1 €/Monat |
| Hosting (Shared) | 5–20 €/Monat | ausreichend für statische Seite |
| SSL-Zertifikat | kostenlos | Let's Encrypt |
| E-Mail (info@imara-epc.de) | inklusive | meist im Hosting enthalten |
| **Gesamt (laufend)** | **ca. 80–260 €/Jahr** | ohne Entwicklungskosten |

---

## 9. Wartung & Updates

**Regelmäßig (monatlich):**
- Backups überprüfen
- Inhalte aktualisieren (Preise, Leistungen)
- Kontaktlinks testen

**Halbjährlich:**
- SEO-Performance überprüfen (Google Search Console)
- Broken Links prüfen
- Performance-Audit (Lighthouse)

**Jährlich:**
- Datenschutzerklärung überprüfen (DSGVO-Änderungen)
- Impressum aktualisieren
- Vollständiges Website-Backup
- Security-Audit (.htaccess, HTTPS, Security-Header, externe Skripte)

---

## 10. Zusammenfassung Timeline

| Phase | Dauer | Aufgaben |
|---|---|---|
| Planung | 1–2 Wochen | Inhalte sammeln, Design festlegen |
| Entwicklung | 2–4 Wochen | HTML/CSS/JS, alle 8 Seiten |
| QA & Testing | 1 Woche | Performance, Mobile, SEO, Accessibility, Modal |
| Launch-Vorbereitung | 1 Woche | Hosting, Domain, SSL, Datenschutz |
| Launch | 1 Tag | Deploy, Google Indexing starten |
| **Gesamt** | **5–8 Wochen** | – |

---

**Version:** 1.2
**Datum:** 2026-05-24
**Status:** Aktiv
