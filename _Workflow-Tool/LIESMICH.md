# 🛠️ Workflow: /firstaudit_website

**Stand:** 23.05.2026 · **Version:** 1.0

Ein universeller, wiederverwendbarer Workflow, der den kompletten Erst-Audit und das Onboarding für **jeden beliebigen Dienstleistungs-Betrieb** automatisiert: Ein Link rein – ein fertiger Wissens-Grundlayer raus.

---

## Was `/firstaudit_website` macht

Der Workflow nimmt **einen einzigen Link** zu einem Geschäft (Website, Google-Maps-Eintrag, Social-Media-Profil) und führt vollautomatisch denselben Prozess durch, der für das Café Bar Karibik manuell gemacht wurde:

1. **Online-Analyse** – Website tief durchsuchen, alle Unterseiten, Bilder, Social Media, Bewertungsportale, Branchenverzeichnisse, lokale Quellen.
2. **Audit** – alle Grunddaten strukturiert erfassen.
3. **Bilder-Sammlung** – alle auffindbaren Bilder & Medien als Links.
4. **Blindspot-Erkennung** – 12 universelle Schwachstellen-Kategorien prüfen und priorisieren.
5. **Marken-Hierarchie** – Haupt- und Sub-Angebote erkennen, Hierarchie vorschlagen.
6. **Grundlayer-Aufbau** – das vollständige Wissenssystem (Ordner 00–06) anlegen.

Funktioniert für **jede Dienstleistungs-Branche**: Gastronomie, Friseur & Beauty, Handwerk, Kanzleien, Praxen, Studios, Werkstätten, Agenturen, Einzelhandel mit Service, u. v. m.

---

## Das Tool besteht aus zwei Teilen

### 1. Der Skill (der Motor) → `firstaudit_website/`

Ein installierbarer Skill, der die komplette Pipeline als präzise Schritt-für-Schritt-Anleitung enthält. Sobald er installiert ist, **genügt der Befehl `/firstaudit_website` oder das Posten eines Geschäfts-Links** – der Workflow startet automatisch.

| Datei | Inhalt |
|---|---|
| `firstaudit_website/SKILL.md` | Die 6-Phasen-Pipeline mit 3 Kontrollpunkten |
| `firstaudit_website/blindspot-katalog.md` | Die 12 universellen Blindspot-Kategorien |
| `firstaudit_website/grundlayer-vorlage.md` | Die universelle Ordnerstruktur 00–06 |

**Installation:** Die Datei `firstaudit_website.skill` über den „Skill speichern"-Button installieren. Danach triggert der Skill automatisch bei `/firstaudit_website` oder bei jedem geposteten Geschäfts-Link.

> Hinweis: Falls noch ein älterer Skill unter dem früheren Namen `dienstleister-grundlayer` installiert ist, diesen entfernen – `/firstaudit_website` ersetzt ihn vollständig.

### 2. Das Cockpit (die Oberfläche) → `Cockpit.html`

Eine interaktive Seite, die den Workflow sichtbar macht: Link einfügen, fertigen Trigger-Befehl erzeugen und kopieren, die 6 Phasen, das Blindspot-Radar und die Grundlayer-Vorschau ansehen. Das Cockpit ist zusätzlich als Live-Artefakt im Cowork-Bereich verfügbar (jederzeit wieder aufrufbar).

---

## So benutzt du den Workflow

**Variante A – mit installiertem Skill (empfohlen):**
> `/firstaudit_website` aufrufen, oder einfach den Link zum Geschäft in den Chat posten. Der Workflow startet von selbst.

**Variante B – über das Cockpit:**
> Cockpit öffnen → Link einfügen → „Trigger-Prompt erzeugen" → kopieren → in den Chat einfügen.

**Variante C – ohne Skill:**
> Den Inhalt von `SKILL.md` zusammen mit dem Link in den Chat geben.

---

## Die 3 Kontrollpunkte

Der Workflow läuft weitgehend autonom, hält aber an drei Stellen kurz inne:

1. **Branche bestätigen** – nach der ersten Erfassung: Stimmt die erkannte Branche? Welche Tiefe/Quellen?
2. **Marken-Hierarchie bestätigen** – nach der Analyse: Stimmt die vorgeschlagene Haupt-/Sub-Struktur?
3. **Freigabe vor dem Anlegen** – vor dem Erstellen der Dateien: Format & Go.

Zwischen diesen Punkten arbeitet der Workflow selbstständig durch.

---

## Das Ergebnis (der „Grundlayer")

Pro Betrieb entsteht ein vollständiger Wissensordner – dieselbe Struktur wie beim Café Bar Karibik:

```
[Betriebsname]/
├── 00_UEBERSICHT.md
├── 01_Marke/              (Hierarchie, Positionierung, Zielgruppen)
├── 02_Dienstleistung/     (Leistungen + fertige Service-Texte)
├── 03_Social-Media/       (Strategie, Bios, Content-Säulen, Vorlagen)
├── 04_Creative-Wording/   (Markenstimme, Slogans, Textbausteine)
├── 05_Fakten-und-Assets/  (NAP, Öffnungszeiten, Bild-Index, Präsenzen)
└── 06_Analysen/           (Audit-Bericht, Online-Analyse mit Blindspots)
```

---

## Referenz-Implementierung

Der Ordner `Cafe-Bar-Karibik/` (00–06) ist das vollständig ausgearbeitete Muster-Ergebnis. Wer wissen will, wie ein fertiger Grundlayer aussieht, schaut dort.

---

## Zusatz: E2E-Design-Build-Test (`e2e-build/`)

Der Unterordner `e2e-build/` enthält ein separates Test-Kit für den **selbstlernenden Design-Workflow** (Discovery → IA → Copy → Visual-Prompt → Build-Plan → Reflector). Der Runner `run-e2e.mjs` schickt einen Grundlayer live über die Claude-API und weist die echten Token-Kosten pro Design aus.

| Datei | Inhalt |
|---|---|
| `e2e-build/grundlayer.md` | Echte, aus diesem Wissenssystem (01–05) kompilierte Datenquelle |
| `e2e-build/grundlayer.demo.md` | Ursprüngliche generische Demo-Datei |
| `e2e-build/run-e2e.mjs` | Der Runner (Node 20.6+) |
| `e2e-build/.env` | Hier den `ANTHROPIC_API_KEY` eintragen |
| `e2e-build/README.md` | Anleitung zum Ausführen |

Start: `.env` mit dem API-Key füllen, dann in `e2e-build/` `node --env-file=.env run-e2e.mjs` ausführen.

## Verwandte Dateien
- Skill-Motor → `firstaudit_website/SKILL.md`
- Blindspot-Katalog → `firstaudit_website/blindspot-katalog.md`
- Grundlayer-Vorlage → `firstaudit_website/grundlayer-vorlage.md`
- Cockpit → `Cockpit.html`
- E2E-Build-Test → `e2e-build/README.md`
