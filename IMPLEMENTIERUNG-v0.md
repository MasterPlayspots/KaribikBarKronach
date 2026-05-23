# Implementierung über v0.dev — Schritt für Schritt

Ziel: aus dem Master-Prompt in **v0.dev** die fertige Web-App bauen und auf
**Vercel** deployen. Geschätzter Aufwand: ein konzentrierter Nachmittag.

---

## Schritt 0 · Vorbereiten

- **Repo:** Dieses Projekt liegt als GitHub-Repo `KaribikBarKronach` vor
  (Push-Anleitung am Ende dieser Datei).
- **Fotos bereitlegen:** die echten Location-Fotos nach `Website/public/` —
  exakte Dateinamen siehe `Website/public/_FOTOS-HIER-ABLEGEN.md`.
- **Preise:** in `Website/app/menu-data.js` im Feld `price` eintragen.
- **WhatsApp-Nummer prüfen:** `CONFIG.whatsappNumber` (aktuell `4915227658034`
  = 0152 27658034) und `CONFIG.tableCount` (aktuell 14).

## Schritt 1 · v0.dev öffnen

v0.dev aufrufen, mit dem Vercel-Konto einloggen, einen neuen Chat/ein neues
Projekt starten.

## Schritt 2 · Master-Prompt einfügen

Den **kompletten Inhalt von `Master-Prompt-v0dev.md`** kopieren, in v0.dev als
Prompt einfügen und absenden. v0 erzeugt die Landingpage und die Bestell-App
`/tisch/[nr]`.

## Schritt 3 · In v0 iterieren

- Ergebnis gegen die **Abnahme-Checkliste** (Abschnitt 11 im Master-Prompt) prüfen.
- Mit kurzen Folge-Prompts nachschärfen, z. B.: „Hero höher und Foto dunkler
  abtönen", „Bestell-App: Stepper-Buttons größer für Handys", „Footer dreispaltig".
- Auf Tonalität und Verbotsliste (Abschnitt 3 im Master-Prompt) achten.

## Schritt 4 · Echte Bilder einsetzen

Die Fotos aus `Website/public/` in v0 hochladen und den Platzhaltern zuordnen:

| Slot | Foto |
|---|---|
| Hero | Innenhof mit Bistrotischen (`hero-innenhof`) |
| Garten | Pergola mit Lampions (`garten-pergola`) |
| Küche / Café | Kaffeespezialitäten (`cafe-drinks`) · Bar (`bar-innen`) |
| Galerie | Galerie-Innenraum (`galerie-innen`) |
| Standort | Gebäude am Abend (`gebaeude-abend`) |

Keine KI-Fantasiebilder verwenden — nur die echten Aufnahmen.

## Schritt 5 · Code übernehmen

v0 erlaubt, den generierten Code zu exportieren oder das v0-Projekt direkt mit
dem GitHub-Repo zu verbinden. Den Code in dieses Repo übernehmen (eigener Branch
oder Ersatz für `Website/`). Die Referenz-App in `Website/` zeigt den Zielzustand.

## Schritt 6 · Lokal prüfen

```bash
cd Website        # bzw. der Ordner mit dem v0-Code
npm install
npm run dev       # http://localhost:3000  und  /tisch/1 testen
npm run build     # muss fehlerfrei durchlaufen
```

## Schritt 7 · QR-Codes erzeugen

Sobald die Domain feststeht:

```bash
npm run qr -- https://deine-echte-domain.de 14
```

Ergebnis in `qr-codes/`: ein QR je Tisch plus `druckbogen.html` — ausdrucken,
ausschneiden, auf die Tische stellen.

## Schritt 8 · Deploy auf Vercel

- vercel.com → **New Project** → das GitHub-Repo `KaribikBarKronach` importieren.
- Next.js wird automatisch erkannt → **Deploy**.
- Eigene Domain verbinden.

## Schritt 9 · Nacharbeiten

- Impressum und Datenschutz ergänzen.
- Preise final eintragen, WhatsApp-Nummer final bestätigen.
- QR-Codes mit der echten Domain neu erzeugen (Schritt 7).

---

## Anhang · Repo zu GitHub pushen

Das Projekt ist lokal bereits ein Git-Repo mit einem ersten Commit. Es fehlt nur
die Verbindung zu GitHub:

1. Auf **github.com** ein **leeres** Repo `KaribikBarKronach` anlegen
   (ohne README/`.gitignore` — die liegen schon hier).
2. Im Projektordner ausführen (`DEIN-GITHUB-NAME` ersetzen):

```bash
git remote add origin https://github.com/DEIN-GITHUB-NAME/KaribikBarKronach.git
git branch -M main
git push -u origin main
```

Danach ist alles auf GitHub und kann in Schritt 8 von Vercel importiert werden.
