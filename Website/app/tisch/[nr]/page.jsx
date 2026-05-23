import { CONFIG } from "../../menu-data";
import OrderApp from "./OrderApp";

export function generateStaticParams() {
  return Array.from({ length: CONFIG.tableCount }, (_, i) => ({ nr: String(i + 1) }));
}

export const metadata = {
  title: "Bestellen am Tisch — Café Bar Karibik",
};

export default async function TischPage({ params }) {
  const { nr } = await params;
  return <OrderApp tableNumber={nr} />;
}
