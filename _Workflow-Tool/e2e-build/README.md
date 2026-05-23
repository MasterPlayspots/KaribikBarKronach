# E2E-Test in CoWork — Café Bar Karibik

Echter Lauf des selbstlernenden Design-Workflows: jeder Knoten geht live über die Claude-API,
mit **echten** Token-Zahlen → exakte Kosten (keine Schätzung, kein Fallback).

## Was im Ordner liegt
- `grundlayer.md` — die Datenquelle. **Echte Fassung für Café Bar Karibik**, am 23.05.2026 aus dem Wissenssystem (Ordner 01–05) kompiliert. Das ist die Datei, mit der der Build laufen soll.
- `grundlayer.demo.md` — die ursprüngliche generische Demo („Probe"). Nur zum schnellen Testen: `node --env-file=.env run-e2e.mjs ./grundlayer.demo.md`.
- `run-e2e.mjs` — der Runner. Braucht **Node 20.6 oder neuer** (für `--env-file`; `fetch` ist eingebaut). Älteres Node → Key inline setzen: `ANTHROPIC_API_KEY=sk-ant-... node run-e2e.mjs`.
- `.env` — schon angelegt; nur noch den echten Key eintragen (ersetzt `DEIN_KEY_HIER`).
- `.env.example` — Vorlage für den API-Key.

## In CoWork ausführen (Desktop-App, Pro/Max/Team/Enterprise)

1. Dieser Ordner liegt im Projekt `Cafe-Bar-Karibik` unter `_Workflow-Tool/e2e-build/`.
2. `.env` öffnen und `DEIN_KEY_HIER` durch deinen echten `ANTHROPIC_API_KEY` ersetzen (Key: console.anthropic.com → API Keys).
3. Claude Desktop öffnen → Reiter **Cowork** → unten **Work in a Folder** → den Projektordner wählen → Zugriff erlauben.
4. (Erste Session einmalig: `/setup-cowork` eingeben.)
5. Folgende Aufgabe einfügen:

```
Führe in `_Workflow-Tool/e2e-build/` den Befehl `node --env-file=.env run-e2e.mjs` aus.
Zeig mir die Knoten-Outputs, die echten Token-Zahlen pro Knoten und die
Gesamtkosten pro Design. Wenn ein Knoten-Output gegen die Verbotsliste verstößt,
markiere es. Danach: fasse zusammen, was der Reflector als neue Verbote vorschlägt.
```

Claude (CoWork) führt das Skript real aus und liefert Outputs + exakte Kosten direkt im Ordner.

## Eigenes / echtes Projekt statt der Probe
- Andere lokale Datei:  `node --env-file=.env run-e2e.mjs ./mein-projekt.md`
- Aus Google Drive: in CoWork sagen „lade den Grundlayer-Ordner von Betrieb X aus Drive
  und speichere ihn als grundlayer.md, dann führ den Runner aus" — CoWork zieht die Daten
  über den Drive-Connector.

## Was real ist vs. demonstriert
- **Real:** alle Knoten-Outputs (Discovery, IA, Copy, Visual-Prompt, Build-Plan) + der Reflector-Lernschritt,
  jeweils echte API-Calls mit echten `usage`-Tokens.
- **Geroutet:** Haiku 4.5 für Discovery/IA/Build, Sonnet 4.6 für Copy/Visual (= dein Produktions-Routing).
- **Schätzung:** nur die Hero-Bildkosten (Higgsfield) — die Sprachmodell-Kosten sind exakt.
