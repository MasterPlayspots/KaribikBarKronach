---
name: firstaudit_website
description: >-
  Vollautomatischer Erst-Audit- und Onboarding-Workflow für Dienstleistungs-
  Betriebe jeder Branche (Gastronomie, Friseur & Beauty, Handwerk, Kanzleien,
  Praxen, Studios, Werkstätten, Agenturen, Einzelhandel mit Service u.v.m.).
  Auslöser: es wird ein Link / eine URL zu einem Geschäft gepostet (Website,
  Google-Maps-Eintrag, Social-Media-Profil), der Befehl /firstaudit_website
  genutzt, ODER ein "Audit", eine "Online-Analyse", ein "Erst-Audit", ein
  "Grundlayer", ein "Wissenssystem" oder ein "Onboarding" für einen Betrieb
  gewünscht. Führt aus: tiefe Online-Analyse, strukturierter Audit, Bilder- und
  Medien-Sammlung, Blindspot-Erkennung (12 universelle Kategorien), Marken- und
  Hierarchie-Analyse und legt den vollständigen Wissens-Grundlayer (Ordner
  00–06) an. Läuft mit 3 Kontrollpunkten weitgehend autonom durch.
---

# /firstaudit_website — Erst-Audit & Grundlayer-Workflow

Dieser Workflow heißt **`/firstaudit_website`**. Er verwandelt **einen einzigen Geschäfts-Link** in einen vollständigen, sauber sortierten Wissens-Grundlayer. Er ist **branchenuniversal** – er funktioniert für jeden Dienstleistungs-Betrieb, nicht nur für ein bestimmtes Gewerbe.

> **Referenz-Implementierung:** Der Ordner `Cafe-Bar-Karibik/` (Struktur 00–06) ist das vollständig ausgearbeitete Muster-Ergebnis dieses Workflows. Bei Unsicherheit über Tiefe, Tonfall oder Dateiinhalt dort nachsehen.

---

## Auslöser (wann dieser Workflow läuft)

Starte `/firstaudit_website`, sobald **eines** zutrifft:

- Der Befehl `/firstaudit_website` wird genutzt.
- Es wird ein Link/eine URL zu einem Geschäft gepostet (auch kommentarlos).
- Es wird ein „Erst-Audit", „Audit", eine „Online-Analyse", ein „Grundlayer" / „Grundlayer schaffen", ein „Wissenssystem" oder „Onboarding" für einen konkreten Betrieb gewünscht.
- Der Trigger-Prompt aus dem Cockpit wird eingefügt.

Wenn nur ein nackter Link ohne Kontext kommt: kurz bestätigen lassen, dass `/firstaudit_website` gewünscht ist, dann starten.

---

## Grundprinzipien

1. **Universal, nicht branchenspezifisch.** Keine Annahme über das Gewerbe treffen, bevor Phase 1 die Branche bestimmt hat. Alle Begriffe (Leistungen, Quellen, Zielgruppen) werden aus dem konkreten Betrieb abgeleitet.
2. **Primärquellen vor Annahmen.** Immer die echte Website und echte Suchergebnisse auswerten. Nichts erfinden. Was nicht belegt ist, wird als „zu prüfen" markiert.
3. **Weitgehend autonom, 3 Kontrollpunkte.** Zwischen den Kontrollpunkten ohne Rückfragen durcharbeiten. An den 3 Kontrollpunkten `AskUserQuestion` verwenden.
4. **Belastbarkeit kennzeichnen.** Website-Direktabruf = belastbar. Suchmaschinen-Ergebnisse = „Stichtag-abhängig, vor Verwendung prüfen".
5. **Aufgabenliste führen.** Zu Beginn mit `TaskCreate` eine Aufgabenliste der 6 Phasen anlegen, Fortschritt mit `TaskUpdate` pflegen.

---

## Die Pipeline – 6 Phasen, 3 Kontrollpunkte

```
PHASE 1  Erfassung & Branchen-Check ........... 🔵 KONTROLLPUNKT 1
PHASE 2  Online-Analyse (Datensammlung) ....... autonom
PHASE 3  Audit (Strukturierung) ............... autonom
PHASE 4  Blindspot-Erkennung .................. autonom
PHASE 5  Marken- & Hierarchie-Analyse ......... 🔵 KONTROLLPUNKT 2
PHASE 6  Grundlayer-Aufbau .................... 🔵 KONTROLLPUNKT 3 → Dateien
```

---

### PHASE 1 — Erfassung & Branchen-Check

1. Den gelieferten Link mit `web_fetch` abrufen. Bei Google-Maps-/Social-Links die Geschäftsdaten extrahieren und die echte Website ermitteln.
2. Erfassen: **Name, Branche/Kategorie, Standort, Art der Dienstleistung**, erste Kontaktdaten, im Header/Footer verlinkte Kanäle.
3. Den Betriebs-Typ einordnen (Beispiele): Gastronomie · Friseur/Beauty/Wellness · Handwerk/Bau · Kfz/Werkstatt · Gesundheit/Praxis · Recht/Beratung/Kanzlei · Fitness/Studio · Bildung/Kurse · Einzelhandel mit Service · Agentur/Kreativ · Eventdienstleister · Immobilien · sonstige.

🔵 **KONTROLLPUNKT 1** – `AskUserQuestion` mit (i) erkannte Branche bestätigen/korrigieren, (ii) Quellen-Tiefe (Standard: Social Media + Bewertungsportale + Branchenverzeichnisse + lokale Quellen + technische Quellen), (iii) Inhaltstiefe des späteren Grundlayers (Standard: **Mischung** = Kerntexte ausformuliert + Vorlagen für Wiederkehrendes).

---

### PHASE 2 — Online-Analyse (Datensammlung) · autonom

**2.1 Website tief auswerten**
- `sitemap.xml` und `robots.txt` abrufen.
- Alle Unterseiten aus Navigation **und** Sitemap durchgehen.
- Alle Bild-URLs sammeln (inkl. Galerie-/Produkt-/Speisekarten-Bilder).
- **Legacy-/Parallel-Strukturen erkennen:** abweichender Seiten-Generator, alte `.php`-Pfade neben modernen, `/printable/`-Versionen, zweite Navigationsbäume, doppelte Impressen.

**2.2 Social Media** – suchen nach `[Name] [Ort]` auf Facebook, Instagram, TikTok, YouTube, LinkedIn. Mehrfach-/Dubletten-Profile notieren.

**2.3 Bewertungsportale** – Google, TripAdvisor, Yelp, ProvenExpert, Trustpilot **plus branchenspezifische**:
Gastronomie → Restaurant Guru, OpenTable, Speisekartenportale · Gesundheit → Jameda, Doctolib · Handwerk → MyHammer, Wer kennt den Besten · Recht → Anwalt.de · Beauty → Treatwell · Hotellerie → Booking, HRS.

**2.4 Branchenverzeichnisse & lokale Quellen** – Gelbe Seiten, Das Örtliche, Cylex, 11880, Yelp-Verzeichnis; Stadt-/Tourismusseiten, Gewerbevereine, Lokalpresse, ggf. Event-/Buchungsplattformen.

**2.5 Presse & weitere Assets** – Presseberichte, PDFs, Videos, Blog-Erwähnungen.

Laufend mitschreiben: **NAP** (Name/Adresse/Telefon), Öffnungszeiten, Leistungen, Preise, Bewertungen, Attribute, rechtliche Angaben.

---

### PHASE 3 — Audit (Strukturierung) · autonom

Alle belegten Fakten zu einem strukturierten **Audit-Bericht** zusammenfassen: Grunddaten/Kontakt · Öffnungszeiten · Leistungen/Angebot · Preise (falls vorhanden) · Bewertungen · Attribute/Ausstattung · Rechtliches. Dieser Bericht wird später `06_Analysen/Audit-Bericht_[Datum].md`.

---

### PHASE 4 — Blindspot-Erkennung · autonom

Die **12 universellen Blindspot-Kategorien** aus `blindspot-katalog.md` Punkt für Punkt gegen die Funde prüfen. Pro Blindspot: Befund, Schweregrad (🔴 hoch / 🟠 mittel / 🟡 niedrig), konkrete Empfehlung. Ergebnis wird `06_Analysen/Online-Analyse-Ergaenzung_[Datum].md` mit: vollständiger Bilder-Sammlung, Blindspots, allen weiteren Datenquellen, priorisierten Quick Wins.

---

### PHASE 5 — Marken- & Hierarchie-Analyse

1. Haupt- und Neben-Angebote unterscheiden: Was bringt Frequenz/Reichweite? Was ist Spezial-/Zusatzangebot?
2. Prüfen, ob eine **Haupt-/Sub-Marken-Struktur** sinnvoll ist (z. B. ein Hauptbetrieb mit einem eingebetteten Spezialangebot). Wenn ja, Hierarchie + kanonische Namensschreibweise vorschlagen.
3. Namens-Inkonsistenzen/Tippfehler aus Phase 4 berücksichtigen.

🔵 **KONTROLLPUNKT 2** – `AskUserQuestion`: vorgeschlagene Marken-Hierarchie und Haupt-Namen bestätigen/anpassen. Hat der Betrieb nur ein klares Angebot, diesen Punkt knapp halten (nur Namensschreibweise bestätigen).

---

### PHASE 6 — Grundlayer-Aufbau

🔵 **KONTROLLPUNKT 3** – `AskUserQuestion`: Inhaltstiefe (falls in Phase 1 nicht final) und **Freigabe zum Anlegen der Dateien** einholen.

Dann den vollständigen Grundlayer nach `grundlayer-vorlage.md` anlegen:
- Neuer Ordner `[Betriebsname]/` (kebab-/lesbar) im Arbeitsverzeichnis.
- Struktur **00–06** vollständig befüllen, mit den belegten Daten dieses Betriebs.
- Markenhierarchie aus Phase 5, Tonfall universell-warm (an die Branche angepasst).
- `06_Analysen/` erhält Audit-Bericht (Phase 3) und Online-Analyse-Ergänzung (Phase 4).
- Abschließend `00_UEBERSICHT.md` als Index schreiben.

**Abschluss:** kurze Zusammenfassung im Chat – was angelegt wurde, wichtigste Blindspots, empfohlene erste Schritte. Dateien mit `present_files` zeigen. Optional anbieten, den Grundlayer wie das Café-Beispiel zusätzlich nach Google Drive zu spiegeln.

---

## Werkzeuge

- `web_fetch` / `WebSearch` – Recherche (Phasen 1–2).
- `AskUserQuestion` – die 3 Kontrollpunkte.
- `TaskCreate` / `TaskUpdate` – Fortschritt.
- `Write` – Grundlayer-Dateien (Phase 6).
- `present_files` – Abschlusspräsentation.

## Qualitätsregeln

- Niemals Fakten erfinden; Unbelegtes als „zu prüfen" kennzeichnen.
- NAP-Daten genau **einmal** als Wahrheit definieren (`05_Fakten-und-Assets/Stammdaten-NAP.md`), überall referenzieren.
- Jede Grundlayer-Datei bekommt Kopf (Stand, Marke) und „Verwandte Dateien"-Fuß.
- Sprache des Grundlayers = Sprache des Betriebs/der Nutzeranfrage (Standard: Deutsch).
- Eine abschließende Selbstprüfung: Struktur vollständig (00–06)? Alle Blindspots adressiert? NAP konsistent?

## Begleitdateien
- `blindspot-katalog.md` – die 12 universellen Blindspot-Kategorien (Phase 4).
- `grundlayer-vorlage.md` – die universelle Ordnerstruktur 00–06 mit Datei-Zweck (Phase 6).
