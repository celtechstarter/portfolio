import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.marcelwelk.de"

  return {
    rules: [
      // KI-Crawler explizit freigegeben (GEO – Generative Engine Optimization)
      { userAgent: "GPTBot",         allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai",   allow: "/" },
      { userAgent: "PerplexityBot",  allow: "/" },
      { userAgent: "CCBot",          allow: "/" },
      { userAgent: "Bytespider",     allow: "/" },
      // Alle anderen Crawler
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/impressum", "/datenschutz", "/lebenslauf.pdf", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
