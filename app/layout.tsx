import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ChatWidget } from "@/components/chat-widget";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcelwelk.de"),
  title: {
    default: "Marcel Welk | KI-Produktentwicklung & Automatisierung",
    template: "%s | Marcel Welk",
  },
  description:
    "Menschenzentrierte Web- und KI-Lösungen von Marcel Welk: Konzeption, KI-Agenten und Automatisierung. Bewerbungsportfolio aus Dortmund, remote bevorzugt.",
  keywords: [
    "Marcel Welk",
    "KI-gestützte Produktentwicklung",
    "Automatisierung",
    "Multi-Agent-Workflows",
    "Anforderungsstrukturierung",
    "KI-Prototyping",
    "Dortmund",
    "Bewerbungsportfolio",
  ],
  alternates: {
    canonical: "https://www.marcelwelk.de",
  },
  authors: [{ name: "Marcel Welk", url: "https://www.marcelwelk.de" }],
  creator: "Marcel Welk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Marcel Welk | KI-Produktentwicklung & Automatisierung",
    description:
      "Menschenzentrierte Web- und KI-Lösungen von Marcel Welk: Webanwendungen, API-Integration und Automatisierung. Bewerbungsportfolio aus Dortmund, remote bevorzugt.",
    type: "website",
    locale: "de_DE",
    url: "https://www.marcelwelk.de",
    siteName: "Marcel Welk – KI-Produktentwicklung & Automatisierung",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcel Welk – Menschenzentrierte Web- & KI-Lösungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcel Welk | KI-Produktentwicklung & Automatisierung",
    description:
      "KI-gestützte Produktentwicklung und Automatisierung. Anforderungen, Agentenkoordination und Ergebnisprüfung in eigenen Projekten.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32 16x16", type: "image/x-icon" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#101718",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${_inter.variable} ${_jetbrainsMono.variable}`}>
      {/* We add an explicit meta tag to prevent scraping of email/phone numbers by basic bots */}
      <head>
        <meta
          name="format-detection"
          content="telephone=no, email=no, address=no"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.marcelwelk.de/#website",
                name: "Marcel Welk – KI-Produktentwicklung & Automatisierung",
                url: "https://www.marcelwelk.de",
                description:
                  "KI-gestützte Produktentwicklung und Automatisierung aus Dortmund. Bewerbungsportfolio: menschenzentrierte Webanwendungen, KI-Integration und Automatisierung.",
                inLanguage: "de-DE",
                publisher: {
                  "@id": "https://www.marcelwelk.de/#person",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.marcelwelk.de/#person",
                name: "Marcel Welk",
                jobTitle: "KI-gestützte Produktentwicklung und Automatisierung",
                description:
                  "Konzipiert menschenzentrierte Webanwendungen und koordiniert ihre Umsetzung mit KI-Werkzeugen. Eigene Projektpraxis mit Anforderungen, Workflows und Ergebnisprüfung. Offen für eine Festanstellung, remote bevorzugt.",
                url: "https://www.marcelwelk.de",
                image: "https://www.marcelwelk.de/marcel-welk-portrait.png",
                sameAs: [
                  "https://github.com/celtechstarter",
                  "https://linkedin.com/in/marcel-welk-572a412ab/",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dortmund",
                  postalCode: "44319",
                  addressRegion: "Nordrhein-Westfalen",
                  addressCountry: "DE",
                },
                knowsAbout: [
                  "KI-gestützte Produktentwicklung",
                  "Anforderungsstrukturierung",
                  "Nutzerabläufe",
                  "Multi-Agent-Workflows",
                  "Claude Code",
                  "Claude Cowork",
                  "ChatGPT",
                  "Workflow-Automatisierung",
                  "n8n",
                  "Testkonzeption",
                  "SEO/GEO",
                  "Weiterbildung in Cloud- und Webentwicklung",
                ],
                knowsLanguage: ["de", "en"],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "KI-gestützte Produktentwicklung und Automatisierung",
                  occupationLocation: {
                    "@type": "City",
                    name: "Dortmund",
                  },
                  skills:
                    "Anforderungen, Nutzerabläufe, KI-Agentenkoordination, n8n-Prototypen, KI-gestützte Reviews, Testkonzeption",
                },
                alumniOf: {
                  "@type": "Organization",
                  name: "Techstarter GmbH",
                  description:
                    "Weiterbildung: Expert:in für Cloud- und Webentwicklung (2024–2025)",
                },
              },
            ]),
          }}
        />
      </head>
      <body
        id="seitenanfang"
        className="font-sans antialiased min-h-screen flex flex-col"
      >
        <a href="#hauptinhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="hauptinhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
