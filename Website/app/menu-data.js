/* Speisekarte + Konfiguration — Datenquelle für die Tisch-Bestell-WebApp.
   Inhalte aus dem Wissenssystem (02_Dienstleistung/Karibik_Speisekarte.md).
   PREISE: aus der Foto-Speisekarte noch nicht gesichert. Hier eintragen
   (price: 9.5 usw.). Bleibt der Wert null, wird kein Preis angezeigt. */

export const CONFIG = {
  restaurantName: "Café Bar Karibik",
  // WhatsApp-Nummer international, ohne + und ohne Leerzeichen (0152 27658034):
  whatsappNumber: "4915227658034",
  // Anzahl der Tische — bestimmt die /tisch/[nr]-Seiten und die QR-Codes:
  tableCount: 14,
};

export const MENU = [
  {
    category: "Roti — die Spezialität",
    items: [
      { id: "roti-thun", name: "Thunfisch Roti", desc: "Thunfisch, Zwiebel, fritierte Kapern, Gouda", price: null },
      { id: "roti-greek", name: "Greek Roti", desc: "Feta, Paprika, Oliven, Zwiebel, Zaziki", price: null },
      { id: "roti-pist", name: "Hot Roti Pistacchio", desc: "Pistaziencreme, Limette, Banane, Krokant — süß", price: null },
    ],
  },
  {
    category: "Burger",
    items: [
      { id: "bg-tobago", name: "Tobago Boy", desc: "100 % Weiderind, Bacon, Cheddar, Ei, Hot Sauce", price: null },
      { id: "bg-thun", name: "Thunfisch Burger", desc: "Thunfisch, Gouda, Rucola, Limettenmayo", price: null },
      { id: "bg-fish", name: "Fish Burger", desc: "Paniertes Seelachsfilet, Spitzkohl, Limettenmayo", price: null },
    ],
  },
  {
    category: "Warme Gerichte",
    items: [
      { id: "w-fishchips", name: "Fish & Chips", desc: "Paniertes Seelachsfilet, Kochbananenchips", price: null },
      { id: "w-crispy", name: "Crispy Chicken", desc: "Bio-Hähnchen in Hot Sauce", price: null },
    ],
  },
  {
    category: "Toast & Snacks",
    items: [
      { id: "t-hawaii", name: "Hawaii Toast", desc: "Ananas, Kochschinken, Schmelzkäse, Preiselbeere", price: null },
      { id: "t-schinken", name: "Schinken-Käse-Toast", desc: "Kräuterdip, Kochschinken, Gouda", price: null },
      { id: "t-pao", name: "Pão de Queijo", desc: "Brasilianische Käsebällchen", price: null },
    ],
  },
  {
    category: "Salate",
    items: [
      { id: "s-greek", name: "Greek Salat", desc: "Feta, Oliven, Zwiebel, Zaziki", price: null },
      { id: "s-chicken", name: "Crispy Chicken Salat", desc: "Bio-Hähnchen, Pinienkerne, Spitzkohl", price: null },
    ],
  },
  {
    category: "Cocktails",
    items: [
      { id: "c-tobago", name: "Original Tobago Rum Punch", desc: "Rezept aus Tobago", price: null },
      { id: "c-pina", name: "Piña Colada", desc: "Brauner und weißer Rum, Ananas, Sahne, Kokos", price: null },
      { id: "c-sex", name: "Sex on the Beach", desc: "Aprikosenlikör, Vodka, Ananas, Grenadine", price: null },
      { id: "c-afrei", name: "Alkoholfreier Cocktail", desc: "z. B. Kibali, Summerbreeze, Blue Line", price: null },
    ],
  },
  {
    category: "Bier & Wein",
    items: [
      { id: "b-captain", name: "Captain Karibik vom Fass", desc: "Naturtrübes Helles, O-Bräu", price: null },
      { id: "b-carib", name: "Carib Caribbean Lager", desc: "0,33 l — Importbier aus der Karibik", price: null },
      { id: "b-wein", name: "Wein, offen", desc: "Silvaner, Riesling, Primitivo u. a.", price: null },
    ],
  },
  {
    category: "Kaffee & Kuchen",
    items: [
      { id: "k-kaffee", name: "Kaffeespezialität", desc: "Latte, Cappuccino, Espresso, Chai Latte", price: null },
      { id: "k-kuchen", name: "Stück Kuchen", desc: "Hausgemacht aus Urdinkelmehl", price: null },
    ],
  },
];
