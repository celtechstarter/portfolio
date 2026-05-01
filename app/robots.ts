import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = "https://marcelwelk.de"

  return {
    rules: [
      // Trainings-Crawler blockieren (schadet SEO/GEO nicht)
      { userAgent: "GPTBot",        disallow: ["/"] },
      { userAgent: "Google-Extended", disallow: ["/"] },
      { userAgent: "CCBot",         disallow: ["/"] },
      { userAgent: "anthropic-ai",  disallow: ["/"] },
      { userAgent: "Bytespider",    disallow: ["/"] },
      { userAgent: "omgili",        disallow: ["/"] },
      { userAgent: "omgilibot",     disallow: ["/"] },
      // Alle anderen (inkl. Googlebot, Bing, Perplexity, ChatGPT-User)
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/impressum", "/datenschutz", "/lebenslauf.pdf", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
