// run-e2e.mjs — Echter E2E-Lauf des selbstlernenden Design-Workflows
// Node 18+ (nutzt eingebautes fetch). Start:  ANTHROPIC_API_KEY=... node run-e2e.mjs
// oder Key in .env (siehe .env.example) und:  node --env-file=.env run-e2e.mjs

import { readFileSync } from "node:fs";

const KEY = process.env.ANTHROPIC_API_KEY;
if (!KEY) { console.error("✗ ANTHROPIC_API_KEY fehlt (siehe .env.example)"); process.exit(1); }

// Datenquelle: lokale Grundlayer-Datei (oder per Argument ein anderes Projekt)
const PROJECT_FILE = process.argv[2] || "./grundlayer.md";
const project = readFileSync(PROJECT_FILE, "utf8");

// Aktuelle API-Preise (USD / Mio. Tokens, Stand Mai 2026)
const PRICE = {
  "claude-haiku-4-5-20251001": { in: 1.0, out: 5.0,  short: "Haiku 4.5" },
  "claude-sonnet-4-6":         { in: 3.0, out: 15.0, short: "Sonnet 4.6" },
};
const USD_EUR = 0.92;

// Branchen-Overlay (selbstlernend; hier Gastronomie) + Start-Verbotsliste
const branche = {
  name: "Gastronomie",
  overlay:
    "Branche: Gastronomie. Sprich Gäste sinnlich und konkret an (Geschmack, Atmosphäre, Anlass). " +
    "Lokaler Bezug schlägt generische Floskeln. Klare Handlung: Tisch / Anlass / Öffnungszeit. Du-Form.",
  forbidden: [
    "keine Klischees wie 'exotisches Paradies' oder 'kulinarische Reise'",
    "keine leeren Superlative ('das beste', 'einzigartig')",
    "keine Anglizismus-Häufung im Fließtext",
  ],
};

const HAIKU = "claude-haiku-4-5-20251001";
const SONNET = "claude-sonnet-4-6";

const NODES = [
  { id: "l1", name: "L1 · Discovery / Brief", model: HAIKU,
    task: "Erzeuge einen knappen Brief: Zielgruppe, Conversion-Ziel, 3 Must-Haves, Tonalität. Stichpunkte, max 12 Zeilen." },
  { id: "l2", name: "L2 · IA / Struktur", model: HAIKU,
    task: "Schlage die Section-Liste der Landingpage in Reihenfolge vor, je Section ein Halbsatz Begründung. Max 8 Sections." },
  { id: "l3", name: "L3 · Copy", model: SONNET,
    task: "Schreibe Hero-H1 (2 Varianten) + 1 Subline + 1 CTA-Button-Text. Markenstimme strikt einhalten. Knapp. Die Subline hat genau EINEN Fokus: ein Kernversprechen in einem Satz, KEINE Aufzaehlung mehrerer Vorteile/USPs." },
  { id: "l4", name: "L4 · Visual-Prompt", model: SONNET,
    task: "Formuliere EINEN Bild-Generierungs-Prompt (EN) für das Hero-Visual, Stil zur Marke passend, + Alt-Text (DE)." },
  { id: "l5", name: "L5 · Build-Plan", model: HAIKU, maxTokens: 1600,
    task: "Liste die zu verwendenden Section-Templates (aus content-blocks) + welche Copy/Visual-Slots gefüllt werden. Knapp." },
];

const learned = {
  overlayVersion: 2,
  forbidden: [
    ...branche.forbidden,
    "keine Aufzählung mehrerer USPs/Vorteile in einer Subline – ein Fokus pro Satz",
  ],
};

function buildSystem(node) {
  return (
    `Du bist ein spezialisierter Knoten (${node.name}) in einem Design-Workflow.\n` +
    `STUFE 1 — Basis: markenkonform, präzise, keine Floskeln. Antworte NUR mit dem Knoten-Output, keine Vorrede.\n` +
    `STUFE 2 — Branchen-Overlay (v${learned.overlayVersion}): ${branche.overlay}\n` +
    `ZIELGRUPPEN-AUSRICHTUNG: leite Ton & Beispiele aus dem Zielgruppen-Abschnitt des Projekts ab.\n` +
    `VERBOTSLISTE (was wir NICHT wollen): ${learned.forbidden.map((f) => "– " + f).join("  ")}`
  );
}

async function call(model, system, user, maxTokens = 1000) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model, max_tokens: maxTokens, system, messages: [{ role: "user", content: user }] }),
  });
  if (!r.ok) throw new Error(`API ${r.status}: ${await r.text()}`);
  const d = await r.json();
  const text = d.content.filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
  return { text, usage: d.usage };
}

function usd(model, u) {
  const p = PRICE[model];
  return (u.input_tokens * p.in + u.output_tokens * p.out) / 1e6;
}

(async () => {
  console.log(`\n■ E2E-Lauf · ${PROJECT_FILE} · Branche ${branche.name} · Overlay v${learned.overlayVersion}\n`);
  let total = 0;
  const outputs = {};

  for (const node of NODES) {
    const system = buildSystem(node);
    const user = `PROJEKT-GRUNDLAYER:\n${project}\n\nAUFGABE: ${node.task}`;
    const res = await call(node.model, system, user, node.maxTokens || 1000);
    const cost = usd(node.model, res.usage);
    total += cost;
    outputs[node.id] = res.text;
    console.log(`=== ${node.name}  [${PRICE[node.model].short}] ===`);
    console.log(res.text);
    console.log(`   ↳ tokens ${res.usage.input_tokens}/${res.usage.output_tokens} · $${cost.toFixed(5)}\n`);
  }

  // Lernschritt (Reflector): schlägt aus dem Copy-Output Verbots-/Verbesserungs-Deltas vor
  const refl = await call(
    HAIKU,
    "Du bist der Reflector eines selbstlernenden Workflows. Antworte knapp als JSON.",
    `Copy-Output:\n${outputs.l3}\n\nGib JSON: {"forbid":["<max 2 Anti-Muster>"],"refine":["<max 2 Overlay-Verfeinerungen>"]}`,
    300
  );
  total += usd(HAIKU, refl.usage);
  console.log(`=== Reflector (Lernschleife) [Haiku 4.5] ===`);
  console.log(refl.text);
  console.log(`   ↳ tokens ${refl.usage.input_tokens}/${refl.usage.output_tokens}\n`);

  const eur = total * USD_EUR;
  console.log("────────────────────────────────────────");
  console.log(`GESAMT LLM pro Design: $${total.toFixed(5)} ≈ €${eur.toFixed(5)}`);
  console.log(`+ Hero-Bild (Higgsfield, Schätzung): €0,12`);
  console.log(`≈ €${(eur + 0.12).toFixed(3)} pro Design  ·  ×50/Monat ≈ €${((eur + 0.12) * 50).toFixed(2)}`);
  console.log("Hinweis: mit Prompt-Caching (Basis+Overlay+Projekt konstant) sinkt der LLM-Anteil um ~80–90%.");
})();
