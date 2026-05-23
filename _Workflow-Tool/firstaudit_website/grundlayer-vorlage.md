# 🧱 Grundlayer-Vorlage (universal)

**Teil des Workflows `/firstaudit_website` · Phase 6**

Die universelle Ordnerstruktur, die für **jeden** Dienstleistungs-Betrieb angelegt wird. Gleiche Struktur, betriebsspezifischer Inhalt. Aufbau-Logik: *Wer wir sind → Was wir anbieten → Wo wir kommunizieren → Wie wir klingen → Womit (Fakten) → Woher wir es wissen.*

---

## Struktur

```
[Betriebsname]/
├── 00_UEBERSICHT.md
├── 01_Marke/
│   ├── Markenhierarchie.md
│   ├── Positionierung-und-Markenkern.md
│   └── Zielgruppen.md
├── 02_Dienstleistung/
│   ├── 00_Leistungsuebersicht.md
│   ├── [Hauptleistung]_*.md          (1–n Dateien, je Kern-Angebot)
│   ├── [Nebenleistung]_*.md          (falls Sub-Angebote vorhanden)
│   └── Service-Beschreibungen_fertig.md
├── 03_Social-Media/
│   ├── 00_Strategie.md
│   ├── Kanaluebersicht-und-Konsolidierung.md
│   ├── Profiltexte-Bios_fertig.md
│   ├── Content-Saeulen.md
│   ├── Hashtag-Sets.md
│   ├── Redaktionsplan_Vorlage.md
│   └── Post-Vorlagen.md
├── 04_Creative-Wording/
│   ├── Markenstimme-und-Tonfall.md
│   ├── Slogans-und-Claims.md
│   ├── Textbausteine-Bibliothek.md
│   └── Dos-and-Donts.md
├── 05_Fakten-und-Assets/
│   ├── Stammdaten-NAP.md
│   ├── Oeffnungszeiten-und-Ausstattung.md
│   ├── Bild-und-Medien-Index.md
│   └── Online-Praesenzen-und-Quellen.md
└── 06_Analysen/
    ├── Audit-Bericht_[Datum].md
    └── Online-Analyse-Ergaenzung_[Datum].md
```

---

## Zweck jeder Datei

### 00_UEBERSICHT.md
Master-Index: Markenhierarchie-Kurzfassung, komplette Ordnerstruktur, „Ich will…"-Schnellzugriffstabelle, Spielregeln, empfohlene erste Schritte, offene strategische Punkte.

### 01_Marke/
- **Markenhierarchie.md** – Haupt-/Sub-Marken-Logik, kanonische Namensschreibweise, wie sich die Hierarchie auf Website/Social/vor Ort zeigt. Bei nur einem Angebot: einfache Markendefinition statt Hierarchie.
- **Positionierung-und-Markenkern.md** – Markenkern in einem Satz, tragende Säulen, USPs, Wettbewerbsabgrenzung, Markenpersönlichkeit, Werte, Markenversprechen.
- **Zielgruppen.md** – Kern-Zielgruppen mit Ansprache-Hinweisen, Prioritäten-Matrix, gemeinsamer emotionaler Nenner.

### 02_Dienstleistung/
- **00_Leistungsuebersicht.md** – alle Angebote nach Hierarchie sortiert, Zusammenspiel der Leistungen, Service-Rahmendaten.
- **[Leistung]_*.md** – je Kern-Angebot eine Datei (Haupt-Angebote zuerst, dann Sub). Inhalt: Konzept, Details, Kommunikations-Anker.
- **Service-Beschreibungen_fertig.md** – einsatzbereite Texte in 3 Längen (kurz/mittel/lang) je Leistung, für Website/Verzeichnisse.

### 03_Social-Media/
- **00_Strategie.md** – Ziel, Grundsätze, Kanal-Prioritäten, Frequenz, Mix, Messgrößen, 30-Tage-Startplan.
- **Kanaluebersicht-und-Konsolidierung.md** – alle aufgefundenen Profile, Soll-Zustand, Schritt-für-Schritt-Konsolidierung.
- **Profiltexte-Bios_fertig.md** – fertige Bios/Beschreibungen je Plattform.
- **Content-Saeulen.md** – Themen-Säulen mit Ideen, Anteilen, Zielgruppen-Bezug.
- **Hashtag-Sets.md** – kopierbare Hashtag-Sets je Säule (falls für die Branche relevant).
- **Redaktionsplan_Vorlage.md** – ausfüllbare Monatsvorlage + Beispielwoche.
- **Post-Vorlagen.md** – pro Säule Vorlage + ausformuliertes Beispiel.

### 04_Creative-Wording/
- **Markenstimme-und-Tonfall.md** – Stimme in einem Satz, Tonfall-Prinzipien, Anrede, Schreibweise, Wortschatz (gern/vermeiden), Satzbau.
- **Slogans-und-Claims.md** – Haupt-Claim + Claims nach Einsatzzweck, Claim-Architektur.
- **Textbausteine-Bibliothek.md** – wiederverwendbare Satzbausteine nach Kategorie.
- **Dos-and-Donts.md** – Wording-Checkliste, Vorher/Nachher-Beispiele.

### 05_Fakten-und-Assets/
- **Stammdaten-NAP.md** – die *eine Wahrheit* für Name/Adresse/Telefon/E-Mail/Web, Kategorien, offene Baustellen, Änderungs-Logbuch.
- **Oeffnungszeiten-und-Ausstattung.md** – Öffnungszeiten, Attribute, besondere Merkmale, Bewertungslage.
- **Bild-und-Medien-Index.md** – alle gefundenen Bild-/Medien-Links, Asset-Bilanz, Foto-Bedarf.
- **Online-Praesenzen-und-Quellen.md** – alle Kanäle/Portale/Verzeichnisse mit Links und Pflege-Priorität.

### 06_Analysen/
- **Audit-Bericht_[Datum].md** – strukturierte Grunddaten (Phase 3).
- **Online-Analyse-Ergaenzung_[Datum].md** – vollständige Bilder-Sammlung, 12 Blindspots, alle weiteren Datenquellen, priorisierte Quick Wins (Phase 4).

---

## Regeln für die Befüllung

1. **Markenhierarchie zuerst.** Erst `01_Marke/Markenhierarchie.md`, sie steuert alle anderen Texte.
2. **Eine Wahrheit für Fakten.** Stammdaten/Öffnungszeiten nur in `05_Fakten-und-Assets/`; andere Dateien verweisen darauf.
3. **Fertig vs. Vorlage.** `*_fertig.md` = einsatzbereite Texte. `*Vorlage*` / `Post-Vorlagen` = Gerüste zum Befüllen.
4. **Datei-Konvention.** Jede Datei: Kopf mit Stand + Marke, Fuß mit „Verwandte Dateien".
5. **Branche statt Schema.** Datei*namen* sind fix; Datei*inhalte* werden konsequent aus dem realen Betrieb abgeleitet. Für einen Friseur stehen in `02_` andere Leistungen als für eine Kanzlei – die Struktur bleibt gleich.
6. **Nicht Zutreffendes.** Säulen/Abschnitte, die für die Branche nicht passen (z. B. Hashtags für eine reine B2B-Kanzlei), schlank halten oder als „für diese Branche optional" kennzeichnen – nicht ersatzlos streichen.
7. **Inhaltstiefe** gemäß Kontrollpunkt: Standard **Mischung** (Kerntexte ausformuliert, Wiederkehrendes als Vorlage).

---

## Anpassung an Betriebsgröße

- **Ein klares Angebot, keine Sub-Marke:** `01_Marke/Markenhierarchie.md` wird zur schlanken Markendefinition; `02_Dienstleistung/` hat entsprechend weniger Dateien.
- **Mehrere gleichrangige Angebote:** je Angebot eine `02_`-Datei, Hierarchie beschreibt die Gleichrangigkeit.
- **Haupt- + Sub-Angebot:** wie in der Referenz `Cafe-Bar-Karibik/` (Hauptmarke + eingebettete Sub-Marke).
