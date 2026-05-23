# Café Bar Karibik — Web-App

Next.js-App (App Router) mit zwei Teilen:

1. **Landingpage** (`/`) — Café, Garten, Küche, Events, Galerie Ambiente, Kontakt.
   Reservierung per WhatsApp-Klick (wa.me).
2. **Tisch-Bestell-WebApp** (`/tisch/1` … `/tisch/14`) — Gast scannt den QR-Code
   am Tisch, wählt Speisen und Getränke, sendet die Bestellung. Sie geht per
   WhatsApp mit Tischnummer an das Team.

## Starten

```bash
npm install
npm run dev      # http://localhost:3000
```

Tisch-Ansicht testen: http://localhost:3000/tisch/1

## Build / Deploy

```bash
npm run build
npm run start
```

Vercel-fähig ohne Anpassung: Ordner auf vercel.com importieren — Next.js wird
automatisch erkannt.

## QR-Codes erzeugen

Pro Tisch ein QR-Code, der auf `…/tisch/<nr>` zeigt. **Nach dem Deploy** mit der
echten Domain neu erzeugen:

```bash
npm run qr -- https://deine-echte-domain.de 14
```

Ergebnis in `qr-codes/`: ein `tisch-N.svg` je Tisch plus `druckbogen.html`
(ausdrucken, ausschneiden, auf die Tische stellen).

## Konfiguration — `app/menu-data.js`

- `CONFIG.whatsappNumber` — WhatsApp-Nummer des Cafés (international, ohne `+`).
  Aktuell `4915227658034` (= 0152 27658034) — bitte prüfen.
- `CONFIG.tableCount` — Anzahl der Tische (aktuell 14). Steuert die `/tisch/*`-
  Seiten und die QR-Codes.
- `MENU` — die Speisekarte. **Preise sind noch nicht gesetzt** (`price: null`);
  echte Preise hier eintragen, dann erscheinen sie automatisch in der App.

## So funktioniert die Bestellung

Gast scannt QR → `/tisch/7` → wählt Positionen → „Bestellung senden" öffnet
WhatsApp mit einer fertigen Nachricht an die Café-Nummer (inkl. Tischnummer).
Das Team nimmt die Bestellungen auf einem Gerät mit WhatsApp entgegen
(z. B. Tablet am Tresen). „Bedienung rufen" schickt eine kurze WhatsApp.

Vorteil: sofort einsatzbereit, kein Server, keine Datenbank, keine Meta-Tokens.
Grenze: WhatsApp muss auf dem Gastgerät vorhanden sein; der Gast tippt das
finale „Senden" selbst. Ein echtes Live-Bestellboard mit eigener Datenbank
(Status „in Arbeit / serviert", keine WhatsApp-Abhängigkeit) wäre der Ausbauschritt.

## Aufbau

```
Website/
├── app/
│   ├── layout.jsx
│   ├── page.jsx              Landingpage
│   ├── globals.css
│   ├── menu-data.js          Speisekarte + Konfiguration
│   └── tisch/[nr]/
│       ├── page.jsx          Tisch-Route
│       └── OrderApp.jsx      Bestell-Oberfläche (Warenkorb)
├── scripts/generate-qr.mjs   QR-Code-Generator
├── public/                   Fotos (siehe _FOTOS-HIER-ABLEGEN.md)
└── qr-codes/                 erzeugte QR-Codes + Druckbogen
```

## Offene Punkte

- Echte Fotos in `public/` ablegen (siehe `public/_FOTOS-HIER-ABLEGEN.md`).
- Preise in `app/menu-data.js` eintragen.
- WhatsApp-Nummer und Tischanzahl in `CONFIG` prüfen.
- QR-Codes nach dem Deploy mit der echten Domain neu erzeugen.
- Impressum und Datenschutz ergänzen.
