import type { Metadata } from "next"
import DevlogClient from "./DevlogClient"

export const metadata: Metadata = {
  title: "Devlog | Marcel Welk – Webentwicklung Dortmund",
  description:
    "Mein Build Journal: Chronologische Einblicke in die Entwicklung meiner Projekte – von BewerbungsPilot über Poke-Scan V2 bis zum Portfolio. Ehrlich geloggt von einem Webentwickler aus Dortmund.",
  openGraph: {
    title: "Devlog | Marcel Welk – Webentwicklung Dortmund",
    description:
      "Tägliche Entwicklungs-Logs, Problemlösungen und technische Entscheidungen – direkt aus der Praxis eines KI-gestützten Webentwicklers aus Dortmund.",
    url: "https://marcel-welk.de/devlog",
    siteName: "Marcel Welk Portfolio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlog | Marcel Welk – Webentwicklung Dortmund",
    description:
      "Ehrliche Build-Logs aus Dortmund: KI-Integration, Debugging, Deployments – so entsteht ein echtes Produkt.",
  },
}

export default function DevlogPage() {
  return <DevlogClient />
}
