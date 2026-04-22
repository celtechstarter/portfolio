import type { Metadata } from "next"
import DatenschutzClient from "./DatenschutzClient"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Marcel Welk – Dortmund",
  description:
    "Datenschutzerklärung für das Portfolio von Marcel Welk, Webentwickler aus Dortmund. Informationen zur Datenverarbeitung, Vercel Analytics und DSGVO-konformer Umsetzung.",
  openGraph: {
    title: "Datenschutzerklärung | Marcel Welk – Dortmund",
    description:
      "DSGVO-konforme Datenschutzerklärung für das Portfolio von Marcel Welk, Webentwickler aus Dortmund.",
    url: "https://marcel-welk.de/datenschutz",
    siteName: "Marcel Welk Portfolio",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return <DatenschutzClient />
}
