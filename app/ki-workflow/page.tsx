import type { Metadata } from "next"
import KiWorkflowClient from "./KiWorkflowClient"

export const metadata: Metadata = {
  title: "KI-Workflow | Marcel Welk – Webentwicklung Dortmund",
  description:
    "Wie ich als Webentwickler aus Dortmund KI-Agenten, Agentic Engineering und moderne Tools wie Claude Code, v0.app und Vercel einsetze, um Ideen blitzschnell in funktionierende Produkte zu verwandeln.",
  openGraph: {
    title: "KI-Workflow | Marcel Welk – Webentwicklung Dortmund",
    description:
      "Mein digitales Hauptquartier: ADHS als Hyperfokus-Motor, KI als Navigator. Vom Konzept zum Deployment – so arbeitet ein Webentwickler aus Dortmund mit KI-Agenten.",
    url: "https://marcel-welk.de/ki-workflow",
    siteName: "Marcel Welk Portfolio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Workflow | Marcel Welk – Webentwicklung Dortmund",
    description:
      "Agentic Engineering aus Dortmund: Claude Code, v0.app, Vercel & mehr. Ehrlicher Einblick in meinen KI-gestützten Entwicklungs-Workflow.",
  },
}

export default function KIWorkflowPage() {
  return <KiWorkflowClient />
}
