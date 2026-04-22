import type { Metadata } from "next"
import ImpressumClient from "./ImpressumClient"

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum gemäß § 5 TMG – Marcel Welk, Webdesigner und Webentwickler aus Dortmund.",
  openGraph: {
    title: "Impressum | Marcel Welk",
    description: "Impressum – Marcel Welk, Webdesign & Webentwicklung Dortmund.",
    url: "https://marcelwelk.de/impressum",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return <ImpressumClient />
}
