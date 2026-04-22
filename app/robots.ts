import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = "https://marcel-welk.vercel.app"

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
