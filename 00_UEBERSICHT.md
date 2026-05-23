# 🧭 00 · ÜBERSICHT – Wissenssystem Café Bar Karibik

**Stand:** 23.05.2026 · **Hauptmarke:** Café Bar Karibik · **Sub-Marke:** Galerie Ambiente

Dies ist die Startdatei. Sie erklärt, wie das Wissenssystem aufgebaut ist und wo was steht.

---

## Die wichtigste Entscheidung zuerst: die Markenhierarchie

```
        ☀️ CAFÉ BAR KARIBIK  (Hauptmarke – „der Ort")
                  │
        🎨 GALERIE AMBIENTE  (Sub-Marke – „die Kunst darin",
                               wo Martin Ludwig seine Bilder verkauft)
```

**Café Bar Karibik** ist die Hauptmarke und das Schaufenster nach außen: Garten, Cocktails, Küche, Live-Musik.
**Galerie Ambiente** ist ein Teil davon – der Kunst-Bereich, in dem Martin Ludwig seine Bilder zeigt und verkauft, plus Malkurse und Malreisen.

Diese Hierarchie gilt für **alles**: Website, Social Media, Texte, Schilder. Volle Begründung → `01_Marke/Markenhierarchie.md`.

---

## Ordnerstruktur (komplett)

```
Cafe-Bar-Karibik/
│
├── 00_UEBERSICHT.md  ......................... diese Datei
│
├── 01_Marke/  ................................ WER wir sind
│   ├── Markenhierarchie.md
│   ├── Positionierung-und-Markenkern.md
│   └── Zielgruppen.md
│
├── 02_Dienstleistung/  ....................... WAS wir anbieten
│   ├── 00_Leistungsuebersicht.md
│   ├── Karibik_Gastronomie.md  ............... Hauptmarke
│   ├── Karibik_Speisekarte.md  ............... Hauptmarke
│   ├── Karibik_Events-und-Livemusik.md  ...... Hauptmarke
│   ├── Ambiente_Kunstverkauf.md  ............. Sub-Marke
│   ├── Ambiente_Malkurse.md  ................. Sub-Marke
│   ├── Ambiente_Malreisen.md  ................ Sub-Marke
│   └── Service-Beschreibungen_fertig.md  ..... fertige Texte
│
├── 03_Social-Media/  ......................... WO & WIE wir kommunizieren
│   ├── 00_Strategie.md
│   ├── Kanaluebersicht-und-Konsolidierung.md
│   ├── Profiltexte-Bios_fertig.md  ........... fertige Bios
│   ├── Content-Saeulen.md
│   ├── Hashtag-Sets.md
│   ├── Redaktionsplan_Vorlage.md  ............ Vorlage
│   └── Post-Vorlagen.md  ..................... Vorlagen + Beispiele
│
├── 04_Creative-Wording/  ..................... WIE wir klingen
│   ├── Markenstimme-und-Tonfall.md
│   ├── Slogans-und-Claims.md
│   ├── Textbausteine-Bibliothek.md
│   └── Dos-and-Donts.md
│
├── 05_Fakten-und-Assets/  .................... HARTE DATEN & Material
│   ├── Stammdaten-NAP.md  .................... „eine Wahrheit" für Name/Adresse/Tel.
│   ├── Oeffnungszeiten-und-Ausstattung.md
│   ├── Bild-und-Medien-Index.md  ............. alle Bild-Links
│   └── Online-Praesenzen-und-Quellen.md  ..... alle Profile & Portale
│
└── 06_Analysen/  ............................. RECHERCHE & Hintergrund
    ├── Audit-Bericht_2026-05-23.md
    └── Online-Analyse-Ergaenzung_2026-05-23.md
```

---

## Die Logik dahinter (warum diese Reihenfolge?)

Die Ordner folgen einer Kette von der Identität zur Umsetzung:

> **01 Wer wir sind** → **02 Was wir anbieten** → **03 Wo wir es sagen** → **04 Wie wir klingen** → **05 Womit (Daten/Assets)** → **06 Woher wir es wissen**

Die beiden Schwerpunkte deiner Anfrage – **Social Media** (Ordner 03) und **Creative Wording** (Ordner 04) – haben jeweils einen eigenen Ordner. Die **Dienstleistungen** (Ordner 02) sind sauber nach der Markenhierarchie sortiert: zuerst Karibik (Haupt), dann Ambiente (Sub).

---

## „Ich will …" – Schnellzugriff

| Ich will … | → Datei |
|---|---|
| die Markenlogik verstehen | `01_Marke/Markenhierarchie.md` |
| einen Social-Media-Post schreiben | `03_Social-Media/Post-Vorlagen.md` |
| wissen, was ich posten soll | `03_Social-Media/Content-Saeulen.md` |
| den Monat planen | `03_Social-Media/Redaktionsplan_Vorlage.md` |
| eine Profil-Bio eintragen | `03_Social-Media/Profiltexte-Bios_fertig.md` |
| Hashtags | `03_Social-Media/Hashtag-Sets.md` |
| den richtigen Ton treffen | `04_Creative-Wording/Markenstimme-und-Tonfall.md` |
| einen Slogan / Claim | `04_Creative-Wording/Slogans-und-Claims.md` |
| schnell fertige Sätze | `04_Creative-Wording/Textbausteine-Bibliothek.md` |
| die Speisekarte (Speisen & Getränke) sehen | `02_Dienstleistung/Karibik_Speisekarte.md` |
| einen Beschreibungstext (Website/Google) | `02_Dienstleistung/Service-Beschreibungen_fertig.md` |
| Öffnungszeiten / Kontakt / Fakten | `05_Fakten-und-Assets/` |
| Bild-Links | `05_Fakten-und-Assets/Bild-und-Medien-Index.md` |
| wissen, wo wir überall gelistet sind | `05_Fakten-und-Assets/Online-Praesenzen-und-Quellen.md` |
| Hintergrund / Recherche | `06_Analysen/` |

---

## Spielregeln für das System

1. **Markenhierarchie immer wahren:** Café Bar Karibik = Haupt, Galerie Ambiente = Sub.
2. **Eine Wahrheit für Fakten:** Stammdaten, Öffnungszeiten, Preise nur in `05_Fakten-und-Assets/` ändern – dann überall nachziehen.
3. **Fertige Texte** (`*_fertig.md`) sind sofort einsetzbar. **Vorlagen** (`*Vorlage*`, `Post-Vorlagen`) werden befüllt.
4. **Schreibweise:** „Café Bar Karibik", „Galerie Ambiente", „Martin Ludwig" – nie „Amiente".
5. **Datei wächst mit:** gute neue Formulierungen in die Textbaustein-Bibliothek, Änderungen ins NAP-Logbuch.

---

## Empfohlene erste Schritte (Reihenfolge)

1. `01_Marke/Markenhierarchie.md` lesen – das Fundament.
2. `03_Social-Media/00_Strategie.md` lesen – inkl. 30-Tage-Startplan.
3. Profile aufräumen mit `03_Social-Media/Kanaluebersicht-und-Konsolidierung.md`.
4. Bios eintragen aus `03_Social-Media/Profiltexte-Bios_fertig.md`.
5. Ersten Monat planen mit `Redaktionsplan_Vorlage.md` + `Post-Vorlagen.md`.
6. Offene Baustellen aus `06_Analysen/Online-Analyse-Ergaenzung_2026-05-23.md` abarbeiten (Impressum, „Amiente"-Tippfehler, Datenschutz).

---

## Offene strategische Punkte (im Blick behalten)

- **Domain:** `galerie-ambiente.de` passt nicht mehr zur neuen Hierarchie – mittelfristig Karibik-Domain als Hauptadresse.
- **Website-Startseite** sollte inhaltlich die Karibik zeigen, Galerie Ambiente als Unterseite.
- **Doppelte Website (Legacy)** klären – siehe Online-Analyse.
- **Rechtliches:** Impressum & Datenschutz vervollständigen.

---

*Wissenssystem angelegt am 23.05.2026. Alle Inhalte basieren auf dem Audit-Bericht und der Online-Analyse in `06_Analysen/`.*
