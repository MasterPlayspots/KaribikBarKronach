# KaribikBarKronach

Repo für die **Web-App des Café Bar Karibik** (Kronach) — eine Marketing-Landingpage
plus eine QR-Tisch-Bestell-WebApp. Implementiert wird über **v0.dev** (Vercel),
deployt auf Vercel.

## Hier starten

➡️ **[IMPLEMENTIERUNG-v0.md](IMPLEMENTIERUNG-v0.md)** — die Schritt-für-Schritt-Anleitung.

## Was liegt wo

| Pfad | Inhalt |
|---|---|
| `Master-Prompt-v0dev.md` | Der fertige Prompt für v0.dev — beschreibt die komplette App. |
| `IMPLEMENTIERUNG-v0.md` | Schritt-für-Schritt von v0.dev bis Vercel-Deploy. |
| `Website/` | Lauffähige Next.js-Referenz-App (Landingpage + `/tisch/[nr]`). |
| `Website/public/` | Hier die echten Fotos ablegen — Namen in `_FOTOS-HIER-ABLEGEN.md`. |
| `Website/qr-codes/` | Erzeugte Tisch-QR-Codes + Druckbogen. |
| `00_UEBERSICHT.md` · `01_…` – `06_…` | Wissenssystem: Marke, Inhalte, Fakten, Analysen. |
| `_Workflow-Tool/` | Selbstlernender Design-Workflow + E2E-Test-Kit. |

## Tech

Next.js (App Router), React. WhatsApp-Anbindung per Klick-zu-Chat (`wa.me`).
Keine Datenbank, keine Tokens nötig. Vercel-deploybar.

## Zwei Wege zur fertigen Seite

- **Weg A — über v0.dev:** Aus `Master-Prompt-v0dev.md` in v0.dev neu generieren,
  iterieren, Code übernehmen. → `IMPLEMENTIERUNG-v0.md`.
- **Weg B — direkt:** Den bereits gebauten Stand in `Website/` ohne v0 deployen
  (`npm install && npm run build`, dann auf Vercel importieren).

## Offene Punkte

- Echte Fotos in `Website/public/` ablegen.
- Preise in `Website/app/menu-data.js` eintragen.
- WhatsApp-Nummer und Tischanzahl in `CONFIG` prüfen.
- QR-Codes nach dem Deploy mit der echten Domain neu erzeugen.
- Impressum und Datenschutz ergänzen.

## Hinweis

`.env`-Dateien (u. a. der API-Key im E2E-Test-Kit) sind über `.gitignore`
ausgeschlossen und gehören **nicht** ins Repo.
