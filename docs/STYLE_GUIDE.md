# Style Guide – IMARA Elite Property Care

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
- Klickbar: Öffnet ein Popup-Modal mit Titel und Beschreibung

## Modal / Popup

- Overlay: `#service-modal` mit Klasse `.modal-overlay`
- Öffnen: Klick auf `.service-card[data-description]`
- Schließen: Klick außerhalb des Modals oder Escape-Taste
- Animation: `translateY(-12px)` → `translateY(0)`, 0.18s ease

## Bilder

- Ablageort: `assets/images/pictures/`
- Verwendete Dateien: `bild_1.jpg` (Startseite), `bild_2.jpg` (Über uns), `bild_3.jpg` (Preise), `contact.jpg` (Kontakt)
- Layout: Bild und Text nebeneinander via Flexbox (je `flex: 1`, max. 500px Bildbreite)
- Alt-Texte: keyword-reich, beschreibend, immer gesetzt

## Layout-Muster

Bild + Text nebeneinander (verwendet auf index, about, pricing, services):
```css
display: flex;
align-items: center;
gap: 2rem;
```

Float-Layout (verwendet auf about.html für Bild + mehrsektionigen Text):
```css
float: right;
width: 45%;
margin: 0 0 var(--spacing-lg) var(--spacing-lg);
```
