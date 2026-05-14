import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.marcelwelk.de"

  return {
    rules: [
      // Alle Crawler erlaubt (inkl. KI-Indexer für GEO)
      // Nur echte Scraper/SEO-Spammer blockieren
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/impressum", "/datenschutz", "/lebenslauf.pdf", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
