import "./globals.css";

export const metadata = {
  title: "Café Bar Karibik – Karibik mitten in Kronach",
  description:
    "Die karibische Oase mitten in Kronach: tropischer Garten, Cocktails, hausgemachte Küche, Live-Musik und die Galerie Ambiente. Mittwoch bis Sonntag geöffnet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
