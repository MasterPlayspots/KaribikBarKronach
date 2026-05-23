/* QR-Codes pro Tisch erzeugen.
   Aufruf:  node scripts/generate-qr.mjs <BASIS-URL> [ANZAHL-TISCHE]
   Beispiel nach dem Deploy:
            node scripts/generate-qr.mjs https://cafe-bar-karibik.de 14
   Ergebnis: qr-codes/tisch-1.svg ... + qr-codes/druckbogen.html */

import QRCode from "qrcode";
import { writeFileSync, mkdirSync } from "node:fs";

const BASE = (process.argv[2] || "https://DEINE-DOMAIN.de").replace(/\/+$/, "");
const COUNT = Number(process.argv[3] || 14);

mkdirSync("qr-codes", { recursive: true });

let cards = "";
for (let n = 1; n <= COUNT; n++) {
  const url = `${BASE}/tisch/${n}`;
  const svg = await QRCode.toString(url, {
    type: "svg",
    margin: 1,
    color: { dark: "#143329", light: "#ffffff" },
  });
  writeFileSync(`qr-codes/tisch-${n}.svg`, svg);
  cards +=
    `<div class="card"><div class="qr">${svg}</div>` +
    `<div class="num">Tisch ${n}</div>` +
    `<div class="hint">QR scannen und bequem am Tisch bestellen</div></div>\n`;
}

const sheet = `<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<title>Tisch-QR-Codes — Café Bar Karibik</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; margin: 0; padding: 20px; color: #143329; }
  h1 { font-size: 1.3rem; }
  .note { font-size: .85rem; color: #666; margin-bottom: 16px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .card { border: 1.5px dashed #aaa; border-radius: 14px; padding: 16px 12px;
          text-align: center; page-break-inside: avoid; }
  .qr svg { width: 170px; height: 170px; }
  .num { font-size: 1.35rem; font-weight: 700; margin-top: 8px; }
  .hint { font-size: .78rem; color: #555; }
  @media print { .note { display: none; } }
</style></head>
<body>
  <h1>Café Bar Karibik — Tisch-QR-Codes</h1>
  <p class="note">Basis-URL: ${BASE} · ${COUNT} Tische · ausdrucken, ausschneiden, auf die Tische stellen.</p>
  <div class="grid">${cards}</div>
</body></html>`;

writeFileSync("qr-codes/druckbogen.html", sheet);
console.log(`Erzeugt: ${COUNT} QR-Codes in qr-codes/  (Basis-URL: ${BASE})`);
console.log("Druckbogen zum Ausdrucken: qr-codes/druckbogen.html");
