import type { Metadata } from "next"
import DevlogClient from "./DevlogClient"

export const metadata: Metadata = {
  title: "Devlog",
  description:
    "Mein Build Journal: Ehrliche Einblicke in die Entwicklung meiner Webdesign- und Webentwicklungs-Projekte aus Dortmund – von der ersten Zeile Code bis zum Live-Deployment.",
  openGraph: {
    title: "Devlog | Marcel Welk",
    description:
      "Chronologische Entwicklungs-Logs aus Dortmund: UI/UX-Entscheidungen, KI-Integration, Debugging und Deployments – so entstehen digitale Lösungen.",
    url: "https://marcelwelk.de/devlog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Devlog – Marcel Welk Dortmund" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlog | Marcel Welk",
    description:
      "Webdesign & Webentwicklung aus Dortmund: Ehrliche Build-Logs – so entstehen moderne digitale Lösungen.",
    images: ["/og-image.png"],
  },
}

export default function DevlogPage() {
  return <DevlogClient />
}
