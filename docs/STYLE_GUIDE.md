# Style Guide – IMARA Elite Property Care Düsseldorf UG (haftungsbeschränkt)

## Farben

| Name | Wert | Verwendung |
|------|------|------------|
| Primary | `#c0392b` | Buttons, Links, Akzente |
| Primary Dark | `#922b21` | Hover-Zustände |
| Background | `#ffffff` | Seitenhintergrund |
| Secondary | `#f5f5f5` | Footer-Hintergrund |
| Accent | `#fdecea` | Hero-Section Hintergrund |
| Text | `#222222` | Fließtext |
| Text Light | `#555555` | Sekundärer Text |
| Border | `#dddddd` | Rahmen, Trennlinien |

Alle Farben sind als CSS-Variablen in `assets/css/variables.css` definiert.

## Logo

- Datei: `assets/images/logo/logo_imara_small.png`
- Darstellungsgröße im Header: `width="150"`
- Das Logo verlinkt auf `index.html`

## Typografie

- **Schriftart:** Arial, Helvetica, sans-serif
- **Basisgröße:** 16px
- **Zeilenhöhe:** 1.6
- **H1:** 2rem (`--font-size-2xl`)
- **H2:** 1.5rem (`--font-size-xl`)
- **Klein:** 0.875rem (`--font-size-sm`)

## Abstände

Einheitlich über CSS-Variablen (`assets/css/variables.css`):

| Variable | Wert |
|----------|------|
| `--spacing-xs` | 0.25rem |
| `--spacing-sm` | 0.5rem |
| `--spacing-md` | 1rem |
| `--spacing-lg` | 2rem |
| `--spacing-xl` | 4rem |

## Buttons

- Klasse: `.btn-primary`
- Mindesthöhe: 48px (Touch-freundlich)
- Hintergrund: `--color-primary` (`#c0392b`) mit weißem Text
- Hover: `--color-primary-dark` (`#922b21`)
- Border-radius: `--border-radius` (4px)

## Service-Karten

- Klasse: `.service-card`
- Mindestbreite im Grid: 320px (`minmax(320px, 1fr)`)
- Hover-Effekt: `translateY(-4px)` + verstärkter Schatten (Transition: 0.2s)
- Jede Karte enthält Titel, Kurztext und einen Button `.service-card__button`
- Der Button öffnet ein Popup-Modal mit Titel und Beschreibung aus den `data-*`-Attributen

## Modal / Popup

- Overlay: `#service-modal` mit Klasse `.modal-overlay`
- Öffnen: Klick auf `.service-card__button` innerhalb einer `.service-card[data-description]`
- Schließen: Klick außerhalb des Modals oder Escape-Taste
- Animation: `translateY(-12px)` → `translateY(0)`, 0.18s ease

## Bilder

- Ablageort: `assets/images/pictures/`
- Verwendete Dateien: `bild_1.jpg` (Startseite), `bild_2.jpg` (Über uns), `bild_3.jpg` (Preise), `bild_4.jpg` (Leistungen), `contact.jpg` (Kontakt)
- Startseite und Kontakt nutzen `.layout-split` für Bild und Text nebeneinander.
- Über-uns-, Leistungs- und Preisseite nutzen auf Desktop ein Float-Bild rechts und auf Mobilgeräten Bild und Text in gleicher Containerbreite. Auf der Leistungsseite laufen Intro und Service-Karten im selben Float-Container am Bild vorbei.
- Alt-Texte: keyword-reich, beschreibend, immer gesetzt

## Layout-Muster

Bild + Text nebeneinander (verwendet auf index und contact):
```css
display: flex;
align-items: center;
gap: 2rem;
```

Float-Layout (verwendet auf about.html, services.html und pricing.html für Bild + mehrsektionigen Text):
```css
float: right;
width: 45%;
margin: 0 0 var(--spacing-lg) var(--spacing-lg);
```

Mobile Container-Logik fuer about.html, services.html und pricing.html:
```css
padding: 0 var(--spacing-lg);
```

Die Bilder werden auf Mobilgeräten auf `width: 100%` innerhalb dieses gepaddeten Containers gesetzt, damit sie die gleiche Breite wie der Text haben.
