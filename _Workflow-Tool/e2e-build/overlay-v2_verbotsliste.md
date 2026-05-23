# Overlay v2 — Verbotsliste (Branche Gastronomie)

**Stand:** 23.05.2026 · **Gilt für:** run-e2e.mjs · **Vorgänger:** Overlay v1

Dieses Dokument hält fest, wie aus dem ersten E2E-Lauf (Overlay v1) die **bereinigte Verbotsliste v2** entstanden ist. Es ist der menschliche Kontrollpunkt der Lernschleife: Der Reflector schlägt vor – ein Mensch entscheidet, was übernommen wird.

---

## Verbotsliste v2 (aktiv im Runner)

1. Keine Klischees wie „exotisches Paradies" oder „kulinarische Reise". *(aus v1)*
2. Keine leeren Superlative („das beste", „einzigartig"). *(aus v1)*
3. Keine Anglizismus-Häufung im Fließtext. *(aus v1)*
4. **Keine Aufzählung mehrerer USPs/Vorteile in einer Subline – ein Fokus pro Satz.** *(neu in v2)*

---

## Herkunft: Reflector-Vorschläge aus dem v1-Lauf

Der Reflector lieferte nach dem v1-Lauf zwei `forbid`- und zwei `refine`-Vorschläge. Bewertung:

| Vorschlag (Reflector) | Typ | Entscheidung | Begründung |
|---|---|---|---|
| „Geografische Inkonsistenz: ‚Kronach' vs. ‚Karibik'" | forbid | ❌ **abgelehnt** | „Karibik. Mitten in Kronach." **ist** der Haupt-Claim und Markenkern. Dieses Verbot würde den Workflow die Markenidee sabotieren lassen. |
| „Zu viele USPs in der Subline" | forbid | ✅ **übernommen** → Punkt 4 | Berechtigt: die v1-Subline reihte Garten + Küche + Cocktails aneinander. Ein Fokus pro Satz schärft die Botschaft. |
| „Hero-Varianten auf ein klares Motiv einigen" | refine | 🔶 **notiert** | Sinnvoll, aber eine Overlay-*Verfeinerung*, kein Verbot. Optional in den `overlay`-Text aufnehmen. |
| Subline kürzen, Beispiel „…Jetzt Tisch sichern" | refine | 🔶 **teilweise** | Idee (Subline kürzen) ist gut und steckt schon in Punkt 4. Der konkrete Textvorschlag „Jetzt Tisch sichern" wird **nicht** übernommen – „Jetzt"/„sichern" sind künstliche Dringlichkeit und gegen die Markenstimme. |

---

## Lehre aus dem ersten Lauf

Der Reflector arbeitet technisch sauber, aber **2 von 4 Vorschlägen hätten der Marke geschadet** (Verbot des Markenkerns; Dringlichkeits-Wording). Deshalb gilt: Reflector-Output **nie automatisch** in die nächste Overlay-Version übernehmen – immer kurz gegen Markenhierarchie und Markenstimme prüfen.

Verwandte Dateien: `01_Marke/Markenhierarchie.md`, `04_Creative-Wording/Markenstimme-und-Tonfall.md`, `04_Creative-Wording/Dos-and-Donts.md`.

---

## Nachtrag (23.05.2026): L3-Copy-Task geschärft

Der v2-Lauf zeigte: Die reine Verbotslisten-Regel (Punkt 4) hat die Subline noch **nicht** fokussiert — L3 reihte weiter mehrere Vorteile aneinander. Konsequenz: Die Regel wurde zusätzlich **direkt in den L3-Knoten-Task** geschrieben („Die Subline hat genau EINEN Fokus … KEINE Aufzählung mehrerer Vorteile/USPs").

Verifikation per L3-Einzel-Lauf (Overlay v2, identischer Prompt-Aufbau):

| Stand | Subline |
|---|---|
| v2-Lauf (nur Verbotsliste) | „Tropischer Garten, Roti, Rum Punch — und ab Freitag schon ab 17 Uhr." → 3 Vorteile |
| nach L3-Task-Schärfung | „Der tropische Innenhof macht aus deinem Feierabend einen kleinen Urlaub." → ein Fokus ✅ |

**Lehre:** Eine Verbotsliste wirkt schwächer als eine positive Aufgaben-Anweisung im jeweiligen Knoten. Regeln, die nur einen bestimmten Knoten betreffen, gehören in dessen `task`; die globale Verbotsliste fängt den allgemeinen Fall ab.
