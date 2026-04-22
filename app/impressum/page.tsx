import type { Metadata } from "next"
import ImpressumClient from "./ImpressumClient"

export const metadata: Metadata = {
  title: "Impressum | Marcel Welk – Webentwickler Dortmund",
  description:
    "Impressum und Anbieterkennzeichnung gemäß § 5 TMG für das Portfolio von Marcel Welk, Webentwickler aus Dortmund.",
  openGraph: {
    title: "Impressum | Marcel Welk – Webentwickler Dortmund",
    description:
      "Impressum von Marcel Welk, Webentwickler und IT-Spezialist aus Dortmund.",
    url: "https://marcel-welk.de/impressum",
    siteName: "Marcel Welk Portfolio",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return <ImpressumClient />
}
