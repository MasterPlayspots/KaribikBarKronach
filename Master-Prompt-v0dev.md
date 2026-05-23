# Master-Prompt — „Café Bar Karibik" Web-App (für v0.dev / Vercel)

> **So benutzen:** Diesen kompletten Text in v0.dev als Prompt einfügen. Er beschreibt
> eine vollständige, deploybare App. Bei Bedarf in v0 iterieren („mach den Hero höher" usw.).

---

## 1 · Auftrag

Baue eine **zweiteilige Next.js-Web-App (App Router)** für das **Café Bar Karibik** in
Kronach (Deutschland):

1. **Landingpage** (`/`) — Marketing-Startseite des Cafés.
2. **Tisch-Bestell-WebApp** (`/tisch/[nr]`) — Gäste scannen einen QR-Code am Tisch,
   wählen Speisen/Getränke und senden die Bestellung per WhatsApp ans Team.

Rahmen: **alles auf Deutsch**, **mobil-first** und voll responsiv, **keine Datenbank**,
keine externen Dienste außer WhatsApp-Links (`wa.me`). Auf **Vercel** deploybar.

---

## 2 · Marke

- **Hauptmarke:** Café Bar Karibik — immer **ohne Bindestrich** schreiben. Eine
  karibische Oase mitten in Kronach: tropischer Garten, Cocktails, hausgemachte
  Küche, Live-Musik.
- **Sub-Marke:** Galerie Ambiente — die Kunst von Martin Ludwig. Ein Bereich
  *innerhalb* der Karibik, nie als gleichrangige Marke auftreten lassen.
- **Haupt-Claim:** „Karibik. Mitten in Kronach."
- **Markenversprechen:** „Komm rein — und für ein paar Stunden bist du woanders."

---

## 3 · Tonalität (gilt für jeden Text auf der Seite)

Wie eine **warmherzige Gastgeberin**: entspannt, einladend, sinnlich-bildhaft, mit
einem kleinen Augenzwinkern. **Du-Form** durchgängig. Kurze, aktive Sätze, ein
Gedanke pro Satz. Jeder Abschnitt endet mit einer Einladung.

**Strikt vermeiden:**
- Klischees wie „exotisches Paradies" oder „kulinarische Reise"
- leere Superlative („das beste", „einzigartig")
- Anglizismus-Häufung im Fließtext
- künstliche Dringlichkeit („jetzt", „nur heute")
- mehrere Vorteile in einem Satz aufzählen — **ein Fokus pro Satz**

---

## 4 · Design-System

Warm, einladend, „Oase" — kein kühles Tech-Design. Großzügiger Weißraum.

**Farben (Hex):**
- Hintergrund / Sand: `#F4ECDD` · helle Fläche: `#FBF6EC` · Karten: `#FFFCF6`
- Text: `#2B2521` · gedämpfter Text: `#6A5F53`
- Tropisch-Grün: `#1E4B39` · dunkles Grün: `#143329`
- Terracotta (Akzent / Buttons): `#C2562F`
- Gold: `#D7A24A` · Koralle: `#E0795C`

**Typografie:** Serifenschrift für Überschriften (Stil wie „Playfair Display" oder
Georgia, warm-editorial), gut lesbare serifenlose Schrift für Fließtext.

**Formen:** großzügige Rundungen (~18 px), **Pill-Buttons** (vollrund), weiche,
tiefe Schatten, dezente Tags/Chips.

---

## 5 · Seite 1 — Landingpage (Route `/`)

**Sticky Header** (dunkelgrüner Hintergrund): Wortmarke „Café Bar Karibik"
(„Karibik" in Gold), Anker-Navigation *Garten · Küche · Events · Galerie · Kontakt*,
rechts ein Terracotta-Button mit der Telefonnummer `09261 51361` (Link `tel:`).

Sektionen in dieser Reihenfolge:

### Hero
- Hintergrund: stimmungsvolles Garten-Foto mit dunkel-warmem Verlaufs-Overlay
  (Platzhalter, bis echtes Foto vorliegt).
- Kleiner Obertitel: „Café · Bar · Galerie — Kronach"
- H1: **„Karibik. Mitten in Kronach."**
- Subline: „Der tropische Innenhof macht aus deinem Feierabend einen kleinen Urlaub."
- Buttons: **„Per WhatsApp reservieren"** (primär, Terracotta → WhatsApp-Link, s. §8)
  und „Zur Küche" (Anker `#kueche`).
- Meta-Zeile: „Stadtgraben 15, Kronach" · „Mittwoch bis Sonntag geöffnet" · „4,6 bei Google".

### Drei Säulen — „Warum es sich anfühlt wie woanders"
Einleitung: „Wir verkaufen keine Produkte, wir verkaufen Stimmung — einen kleinen
Ausstieg aus dem Alltag, freundlich, farbig und entspannt."
Drei Karten:
1. **Die Oase** — „Ein begrünter Innenhof mit Strelitzie, Palmenblättern und Teich.
   Überdacht und beheizt — fast bei jedem Wetter dein Lieblingsplatz."
2. **Genuss mit Haltung** — „Karibisch inspirierte Küche, regional gedacht: Roti,
   hausgemachte Kuchen, fränkisches Bier vom Fass. Viel Vegetarisches."
3. **Kunst und Live-Musik** — „An den Wänden hängt die Galerie Ambiente, auf der
   Bühne spielt Live-Musik. Jeder Besuch ist ein bisschen mehr als nur Kaffee."

### Garten (Anker `#garten`)
Zweispaltig: Text + Bild.
- Titel: „Dein Tapetenwechsel um die Ecke"
- Text: „Palmenblätter werfen Schatten auf bunte Tische, der Teich glitzert, zwischen
  den Pflanzen stehen Kunstskulpturen. Das historische Sandsteingebäude mit weißen
  Fensterläden bildet den Rahmen." — „Die überdachten, mit Heizstrahlern
  ausgestatteten Sitzbereiche machen den Garten fast wetterunabhängig — such dir
  eine Ecke, hier darf man bleiben."
- Tags: Sitzplätze im Freien · Überdacht und beheizt · Bedienung am Tisch · Kinderfreundlich

### Küche (Anker `#kueche`)
- Titel: „Karibisch inspiriert, fränkisch geerdet"
- Einleitung: „Karibik-Lebensgefühl trifft bewussten Genuss: regionale Bio-Partner,
  viel Vegetarisches, Hafermilch auf Wunsch."
- Vier Karten: **Roti** („Die Spezialität des Hauses: gefüllte indisch-karibische
  Teigfladen.") · **Burger** („100 % Weiderind, dazu Fisch- und vegetarische
  Varianten.") · **Bar und Cocktails** („Original Tobago Rum Punch und ‚Captain
  Karibik' vom Fass.") · **Café und Kuchen** („Hausgemachte Kuchen und Torten aus
  Urdinkelmehl.")
- Hinweiszeile: „Die ganze Karte: Roti, Burger, Toast, Salate und Karibik-Specials —
  dazu Bier vom Fass, regionale Weine und acht alkoholfreie Cocktails."

### Am Tisch bestellen (Hinweis-Sektion)
- Obertitel: „Neu — Scan und Order"
- Titel: „Am Tisch bestellen, ohne Warten"
- Text: „An jedem Tisch klebt ein QR-Code. Scannen, Speisen und Getränke wählen,
  absenden — die Bestellung geht direkt an unser Team."
- Button: „Beispiel ansehen — Tisch 1" (Link `/tisch/1`).

### Events (Anker `#events`, dunkelgrüne Sektion)
- Obertitel: „Live in der Karibik" · Titel: „Was bei uns los ist"
- Einleitung: „Open-Air-Bühne im Garten, Musikerstammtisch, Themenabende — Events
  machen aus dem Café einen Treffpunkt."
- Termin-Liste (Datum · Veranstaltung · Zeit):
  - Di · 17.06. — Musikerstammtisch — 19:30–22:30 — „Offene Session, Hobby- und Profimusiker musizieren spontan."
  - 27.06.–18.07. — Kunst im Sommergarten — täglich ab 18:00 — „Bilder von Martin Ludwig im Innenhof, bei trockenem Wetter."
  - Fr · 18.07. — TELEEMA, live — ab 20:00 — „Singer-Songwriter-Band auf der großen Open-Air-Bühne."
- Fußzeile: „Tische für Events bitte per WhatsApp oder telefonisch reservieren: 09261 51361."

### Galerie Ambiente (Anker `#galerie`)
- Titel: „Die Kunst im Café Bar Karibik"
- Einleitung: „An den Wänden hängt die Kunst von Martin Ludwig — und sie ist
  käuflich. Ein Café, das nebenbei eine lebende Galerie ist."
- Untertitel „Ansehen, kaufen, selber malen": „Originale und Digitaldrucke direkt
  vor Ort. Wenn dich ein Bild nicht mehr loslässt, darf es mit nach Hause." —
  „Donnerstags ist Maltag: Malkurse für Kinder und Erwachsene, kein Talent nötig.
  Dazu kreative Malreisen mit Martin Ludwig."
- Bildbereich: Porträt des Künstlers + kleine Galerie mit Kunstwerken (Platzhalter).

### CTA-Band (Terracotta, zentriert)
- Großer Satz: „Komm rein — und für ein paar Stunden bist du woanders."
- Button: „Per WhatsApp reservieren" (WhatsApp-Link, s. §8).

### Bewertungen
- Fünf goldene Sterne, „4,6 von 5 bei Google", darunter „aus 288 Rezensionen — und
  einem zweiten 4,6 bei Restaurant Guru".
- Reihe von Chips mit dem, was Gäste am häufigsten loben: „wie Urlaub" · der Garten ·
  die Cocktails · die Atmosphäre · die Kunst · das Personal.
  (Keine erfundenen namentlichen Zitate verwenden.)

### Footer / Kontakt (Anker `#kontakt`, dunkelgrün)
Drei Spalten:
1. Wortmarke + Kurzbeschreibung; Adresse **Stadtgraben 15, 96317 Kronach**;
   Telefon **09261 51361** · WhatsApp **0152 27658034**; E-Mail
   **info@galerie-ambiente.de**.
2. **Öffnungszeiten:** Mittwoch 19–22 · Donnerstag 19–22 · Freitag 17–24 ·
   Samstag 14–24 · Sonntag 14–22 · Montag + Dienstag Ruhetag.
3. **Gut zu wissen:** kostenlose Parkplätze · barrierefreier Zugang · WLAN und
   Kartenzahlung · kinderfreundlich · Reservierung telefonisch.
Fußzeile: „© 2026 Café Bar Karibik · Galerie Ambiente · Martin Ludwig" sowie
Links „Impressum" und „Datenschutz" (Platzhalter).

---

## 6 · Seite 2 — Tisch-Bestell-WebApp (Route `/tisch/[nr]`)

Dynamische Route; die **Tischnummer** kommt aus der URL (`/tisch/7` → Tisch 7).
Tische 1 bis 14. Eigene, fokussierte, mobil-optimierte Oberfläche **ohne** die
Landingpage-Navigation.

Aufbau:
- **Sticky-Kopf:** Wortmarke „Café Bar Karibik" links, rechts eine Terracotta-Pille
  mit „Tisch [Nr]".
- **Intro:** Titel „Bestellen am Tisch"; Text „Wähle Speisen und Getränke aus. Mit
  ‚Bestellung senden' geht alles per WhatsApp direkt an unser Team — wir bringen es
  an Tisch [Nr]."; Button **„Bedienung rufen"** (sendet eine kurze WhatsApp, s. §8).
- **Speisekarte:** nach Kategorien gegliedert (Daten in §7). Jede Zeile: Name +
  kurze Beschreibung, optional Preis, rechts ein **Stepper** (− / Anzahl / +).
  Ist kein Preis hinterlegt, keinen Preis anzeigen.
- **Sticky-Leiste unten:** zeigt „X Positionen gewählt" bzw. „Noch nichts gewählt"
  und einen großen Terracotta-Button **„Bestellung senden"** (deaktiviert, solange
  der Warenkorb leer ist).
- Nach dem Senden ein kurzer Hinweis: „WhatsApp wurde geöffnet — bitte dort auf
  ‚Senden' tippen."

Warenkorb-Logik: clientseitig (React-State), keine Persistenz nötig.

---

## 7 · Speisekarte (Daten für die Bestell-App)

Struktur je Eintrag: Name · Beschreibung · Preis (aktuell **leer** — die App muss
fehlende Preise sauber ausblenden; echte Preise werden später ergänzt).

**Roti — die Spezialität**
- Thunfisch Roti — Thunfisch, Zwiebel, fritierte Kapern, Gouda
- Greek Roti — Feta, Paprika, Oliven, Zwiebel, Zaziki
- Hot Roti Pistacchio — Pistaziencreme, Limette, Banane, Krokant (süß)

**Burger**
- Tobago Boy — 100 % Weiderind, Bacon, Cheddar, Ei, Hot Sauce
- Thunfisch Burger — Thunfisch, Gouda, Rucola, Limettenmayo
- Fish Burger — paniertes Seelachsfilet, Spitzkohl, Limettenmayo

**Warme Gerichte**
- Fish & Chips — paniertes Seelachsfilet, Kochbananenchips
- Crispy Chicken — Bio-Hähnchen in Hot Sauce

**Toast & Snacks**
- Hawaii Toast — Ananas, Kochschinken, Schmelzkäse, Preiselbeere
- Schinken-Käse-Toast — Kräuterdip, Kochschinken, Gouda
- Pão de Queijo — brasilianische Käsebällchen

**Salate**
- Greek Salat — Feta, Oliven, Zwiebel, Zaziki
- Crispy Chicken Salat — Bio-Hähnchen, Pinienkerne, Spitzkohl

**Cocktails**
- Original Tobago Rum Punch — Rezept aus Tobago
- Piña Colada — brauner und weißer Rum, Ananas, Sahne, Kokos
- Sex on the Beach — Aprikosenlikör, Vodka, Ananas, Grenadine
- Alkoholfreier Cocktail — z. B. Kibali, Summerbreeze, Blue Line

**Bier & Wein**
- Captain Karibik vom Fass — naturtrübes Helles, O-Bräu
- Carib Caribbean Lager — 0,33 l, Importbier aus der Karibik
- Wein, offen — Silvaner, Riesling, Primitivo u. a.

**Kaffee & Kuchen**
- Kaffeespezialität — Latte, Cappuccino, Espresso, Chai Latte
- Stück Kuchen — hausgemacht aus Urdinkelmehl

---

## 8 · WhatsApp-Integration (Klick-zu-Chat, `wa.me`)

Keine API, keine Tokens — reine `wa.me`-Links. Café-Nummer (international,
ohne `+`): **`4915227658034`** (= 0152 27658034).

- **Reservierung (Landingpage):** Link auf
  `https://wa.me/4915227658034?text=` + URL-codierte Nachricht
  „Hallo Café Bar Karibik — ich möchte gern einen Tisch reservieren für:".
- **Bestellung (Tisch-App):** „Bestellung senden" öffnet
  `https://wa.me/4915227658034?text=` + URL-codierte Nachricht im Format:
  ```
  Café Bar Karibik — Bestellung
  Tisch 7

  2x Thunfisch Roti
  1x Original Tobago Rum Punch

  (21:34 Uhr)
  ```
- **Bedienung rufen:** Nachricht „Café Bar Karibik — Tisch 7: Bitte einmal zum
  Tisch kommen. Danke!".

**QR-Codes:** Jeder Tisch hat einen QR-Code, der auf `…/tisch/<nr>` zeigt. Die
QR-Codes werden separat per Skript erzeugt — v0 baut nur die Web-Seiten, keine
QR-Generierung.

---

## 9 · Technik

- **Next.js (App Router)**, React, responsives Layout, mobil-first.
- Routen: `/` (Landingpage) und `/tisch/[nr]` (Tische 1–14, Nummer aus der URL).
- **Keine Datenbank, kein Backend.** Bestellungen und Reservierungen laufen
  ausschließlich über `wa.me`-Links.
- Sauber auf **Vercel** deploybar.

---

## 10 · Bilder

Echte Fotos der Location werden später in `/public` abgelegt (Hero-Garten,
Innenhof, Speisen, Bar, Galerie-Innenraum, Gebäude). Bis dahin: warme,
markenfarbige **Platzhalterflächen mit Beschriftung** (z. B. „Foto folgt — Garten").
**Keine KI-generierten Fantasie-Bilder** verwenden — die Platzhalter bleiben, bis
echte Fotos vorliegen.

---

## 11 · Abnahme-Checkliste

- [ ] Landingpage `/` mit allen Sektionen aus §5, exakt diese Texte.
- [ ] Bestell-App `/tisch/[nr]` funktioniert mit Warenkorb und Stepper.
- [ ] „Bestellung senden" öffnet WhatsApp mit Tischnummer und Positionen.
- [ ] Reservier-Buttons öffnen WhatsApp mit vorbereitetem Text.
- [ ] Warm-„Oase"-Design, Markenfarben, Serif-Überschriften, voll responsiv.
- [ ] Alles auf Deutsch, Tonalität und Verbotsliste aus §3 eingehalten.
- [ ] Keine Datenbank, Vercel-deploybar.
