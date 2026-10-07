import type { Metadata } from "next"
import ImpressumClient from "./ImpressumClient"

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Angaben zum Verantwortlichen für das Bewerbungsportfolio von Marcel Welk.",
  openGraph: {
    title: "Impressum | Marcel Welk",
    description: "Impressum zum Portfolio von Marcel Welk – Webentwicklung und KI-Integration.",
    url: "https://www.marcelwelk.de/impressum",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return <ImpressumClient />
}
