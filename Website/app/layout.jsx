import "./globals.css";

export const metadata = {
  title: "Café Bar Karibik – Karibik mitten in Kronach",
  description:
    "Die karibische Oase mitten in Kronach: tropischer Garten, Cocktails, hausgemachte Küche, Live-Musik und die Galerie Ambiente. Mittwoch bis Sonntag geöffnet.",
};

export const viewport = {
  themeColor: "#1A3D2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" style={{ background: '#F5EDE0' }}>
      <body>{children}</body>
    </html>
  );
}
