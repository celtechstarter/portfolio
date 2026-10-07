import type { Metadata } from "next"
import KiWorkflowClient from "./KiWorkflowClient"

export const metadata: Metadata = {
  title: "KI-Workflow & Automatisierung",
  description:
    "Von Anforderungen zur nutzbaren Anwendung: meine Arbeitsweise mit KI, APIs, Automatisierung, Tests und Deployment.",
  alternates: {
    canonical: 'https://www.marcelwelk.de/ki-workflow',
  },
  openGraph: {
    title: "KI-Workflow | Marcel Welk",
    description:
      "So verbinde ich Nutzeranforderungen, KI-gestützte Entwicklung und die Prüfung von Ergebnissen in eigenen Webprojekten.",
    url: "https://www.marcelwelk.de/ki-workflow",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "KI-Workflow – Marcel Welk Dortmund" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Workflow | Marcel Welk",
    description:
      "Menschenzentrierte Web- und KI-Lösungen: Anforderungen strukturieren, Funktionen entwickeln und Ergebnisse prüfen.",
    images: ["/og-image.jpg"],
  },
}

export default function KIWorkflowPage() {
  return <KiWorkflowClient />
}
