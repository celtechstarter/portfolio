import type { Metadata } from "next"
import DatenschutzClient from "./DatenschutzClient"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Datenverarbeitung auf dem Bewerbungsportfolio von Marcel Welk.",
  openGraph: {
    title: "Datenschutzerklärung | Marcel Welk",
    description: "Datenschutzerklärung zum Portfolio von Marcel Welk.",
    url: "https://www.marcelwelk.de/datenschutz",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return <DatenschutzClient />
}
