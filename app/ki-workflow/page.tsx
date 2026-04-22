import type { Metadata } from "next"
import KiWorkflowClient from "./KiWorkflowClient"

export const metadata: Metadata = {
  title: "KI-Workflow",
  description:
    "Wie ich als Webdesigner und Webentwickler aus Dortmund KI-Agenten, moderne Tools und digitale Lösungen einsetze, um Projekte von der Idee bis zum Deployment zu bringen.",
  openGraph: {
    title: "KI-Workflow | Marcel Welk",
    description:
      "Ehrlicher Einblick in meinen Workflow: ADHS als Hyperfokus-Motor, KI als Navigator. Webdesign & Webentwicklung aus Dortmund – effizient und modern.",
    url: "https://marcelwelk.de/ki-workflow",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KI-Workflow – Marcel Welk Dortmund" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Workflow | Marcel Welk",
    description:
      "Webdesign & Webentwicklung aus Dortmund: So nutze ich KI-Agenten, v0.app und moderne Tools für digitale Lösungen.",
    images: ["/og-image.png"],
  },
}

export default function KIWorkflowPage() {
  return <KiWorkflowClient />
}
