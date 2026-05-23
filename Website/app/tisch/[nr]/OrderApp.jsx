"use client";

import { useState } from "react";
import { MENU, CONFIG } from "../../menu-data";

export default function OrderApp({ tableNumber }) {
  const [cart, setCart] = useState({});
  const [sent, setSent] = useState(false);

  const change = (id, delta) =>
    setCart((c) => {
      const qty = (c[id] || 0) + delta;
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const lines = [];
  for (const cat of MENU) {
    for (const it of cat.items) {
      if (cart[it.id]) lines.push({ name: it.name, qty: cart[it.id] });
    }
  }
  const count = lines.reduce((sum, l) => sum + l.qty, 0);

  const waLink = (text) =>
    "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(text);

  const sendOrder = () => {
    if (count === 0) return;
    const now = new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    let msg = CONFIG.restaurantName + " — Bestellung\n";
    msg += "Tisch " + tableNumber + "\n\n";
    for (const l of lines) msg += l.qty + "x " + l.name + "\n";
    msg += "\n(" + now + " Uhr)";
    window.open(waLink(msg), "_blank");
    setSent(true);
  };

  const callService = () => {
    const msg =
      CONFIG.restaurantName + " — Tisch " + tableNumber +
      ": Bitte einmal zum Tisch kommen. Danke!";
    window.open(waLink(msg), "_blank");
  };

  return (
    <div className="order">
      <header className="order-top">
        <div className="order-brand">Café Bar <b>Karibik</b></div>
        <div className="order-table">Tisch {tableNumber}</div>
      </header>

      <div className="order-intro">
        <h1>Bestellen am Tisch</h1>
        <p>
          Wähle Speisen und Getränke aus. Mit „Bestellung senden" geht alles per
          WhatsApp direkt an unser Team — wir bringen es an Tisch {tableNumber}.
        </p>
        <button type="button" className="order-call" onClick={callService}>
          Bedienung rufen
        </button>
      </div>

      <main className="order-menu">
        {MENU.map((cat) => (
          <section key={cat.category}>
            <h2>{cat.category}</h2>
            {cat.items.map((it) => (
              <div className="order-item" key={it.id}>
                <div className="order-item-text">
                  <span className="order-item-name">{it.name}</span>
                  {it.desc ? <span className="order-item-desc">{it.desc}</span> : null}
                </div>
                {it.price != null ? (
                  <span className="order-item-price">{it.price.toFixed(2)} €</span>
                ) : null}
                <div className="stepper">
                  <button
                    type="button"
                    onClick={() => change(it.id, -1)}
                    disabled={!cart[it.id]}
                    aria-label="weniger"
                  >
                    −
                  </button>
                  <span>{cart[it.id] || 0}</span>
                  <button type="button" onClick={() => change(it.id, 1)} aria-label="mehr">
                    +
                  </button>
                </div>
              </div>
            ))}
          </section>
        ))}
        <p className="order-note">
          Preise findest du auf der Karte am Tisch. Allergien oder Sonderwünsche?
          Sag der Bedienung Bescheid oder nutze „Bedienung rufen".
        </p>
      </main>

      <div className="order-bar">
        <div className="order-bar-info">
          {count > 0
            ? count + (count === 1 ? " Position gewählt" : " Positionen gewählt")
            : "Noch nichts gewählt"}
        </div>
        <button
          type="button"
          className="order-send"
          onClick={sendOrder}
          disabled={count === 0}
        >
          Bestellung senden
        </button>
      </div>

      {sent ? (
        <p className="order-sent">
          WhatsApp wurde geöffnet — bitte dort auf „Senden" tippen.
        </p>
      ) : null}
    </div>
  );
}
