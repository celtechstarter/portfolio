import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = "https://marcelwelk.de"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/impressum", "/datenschutz"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
