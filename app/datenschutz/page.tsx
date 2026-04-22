import type { Metadata } from "next"
import DatenschutzClient from "./DatenschutzClient"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung für die Website von Marcel Welk, Webdesigner und Webentwickler aus Dortmund. DSGVO-konform und transparent.",
  openGraph: {
    title: "Datenschutzerklärung | Marcel Welk",
    description: "DSGVO-konforme Datenschutzerklärung – Marcel Welk, Webdesign & Webentwicklung Dortmund.",
    url: "https://marcelwelk.de/datenschutz",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return <DatenschutzClient />
}
