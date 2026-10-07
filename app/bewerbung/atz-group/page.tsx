import type { Metadata } from "next"
import AtzGroupClient from "./AtzGroupClient"

export const metadata: Metadata = {
  title: "Bewerbung ATZ Group",
  description:
    "Bewerbung mit Arbeitsproben: Therapieplatz Finder in praktischer Erprobung und ein n8n-Prototyp. Mein Beitrag: Anforderungen, KI-gestützte Umsetzung und Ergebnisprüfung.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.marcelwelk.de/bewerbung/atz-group",
  },
  openGraph: {
    title: "Bewerbung ATZ Group | Marcel Welk",
    description:
      "KI-gestützte Produktentwicklung und Automatisierung: Therapieplatz Finder und ein dokumentierter n8n-Prototyp.",
    url: "https://www.marcelwelk.de/bewerbung/atz-group",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bewerbung ATZ Group – Marcel Welk" }],
  },
}

export default function AtzGroupPage() {
  return <AtzGroupClient />
}
