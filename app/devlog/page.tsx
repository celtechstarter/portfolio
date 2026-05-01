import type { Metadata } from "next"
import DevlogClient from "./DevlogClient"

export const metadata: Metadata = {
  title: "Devlog – Projekte & Builds",
  description:
    "Mein Build Journal: Ehrliche Einblicke in die Entwicklung meiner Webdesign- und Webentwicklungs-Projekte aus Dortmund – von der ersten Zeile Code bis zum Live-Deployment.",
  alternates: {
    canonical: 'https://marcelwelk.de/devlog',
  },
  openGraph: {
    title: "Devlog | Marcel Welk",
    description:
      "Chronologische Entwicklungs-Logs aus Dortmund: UI/UX-Entscheidungen, KI-Integration, Debugging und Deployments – so entstehen digitale Lösungen.",
    url: "https://marcelwelk.de/devlog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Devlog – Marcel Welk Dortmund" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlog | Marcel Welk",
    description:
      "Webdesign & Webentwicklung aus Dortmund: Ehrliche Build-Logs – so entstehen moderne digitale Lösungen.",
    images: ["/og-image.jpg"],
  },
}

export default function DevlogPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://marcelwelk.de" },
      { "@type": "ListItem", position: 2, name: "Devlog", item: "https://marcelwelk.de/devlog" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <DevlogClient />
    </>
  )
}
