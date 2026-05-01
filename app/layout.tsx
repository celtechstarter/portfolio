import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '@/components/footer'
import { FloatingNav } from '@/components/floating-nav'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://marcelwelk.de'),
  title: {
    default: 'Marcel Welk | Webdesign & Webentwicklung Dortmund',
    template: '%s | Marcel Welk',
  },
  description: 'Professionelles Webdesign und individuelle Webentwicklung aus Dortmund. Von der ersten Idee bis zur fertigen Online-Präsenz – modern, schnell und zielgerichtet.',
  keywords: [
    'Marcel Welk',
    'Webdesign Dortmund',
    'Webentwicklung Dortmund',
    'Freelance Webdesigner Dortmund',
    'Freelance Entwickler Dortmund',
    'UI/UX Design Dortmund',
    'Responsive Design',
    'Individuelle Programmierung',
    'SEO Optimierung Dortmund',
    'Digitale Lösungen Dortmund',
    'Next.js Entwickler',
    'React Entwickler Dortmund',
    'KI-Entwickler Dortmund',
    'Fullstack Developer Dortmund',
    'IT-Support Dortmund',
    'Webseite erstellen Dortmund',
    'Webprojekte NRW',
  ],
  alternates: {
    canonical: 'https://marcelwelk.de',
  },
  authors: [{ name: 'Marcel Welk', url: 'https://marcelwelk.de' }],
  creator: 'Marcel Welk',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Marcel Welk | Webdesign & Webentwicklung Dortmund',
    description: 'Professionelles Webdesign und individuelle Webentwicklung aus Dortmund. Von der ersten Idee bis zur fertigen Online-Präsenz – modern, schnell und zielgerichtet.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://marcelwelk.de',
    siteName: 'Marcel Welk – Webdesign & Webentwicklung',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcel Welk – Webdesign & Webentwicklung aus Dortmund',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcel Welk | Webdesign & Webentwicklung Dortmund',
    description: 'Professionelles Webdesign und individuelle Webentwicklung aus Dortmund. Modern, schnell und zielgerichtet.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32 16x16', type: 'image/x-icon' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0b09',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${_inter.variable} ${_jetbrainsMono.variable}`}>
      {/* We add an explicit meta tag to prevent scraping of email/phone numbers by basic bots */}
      <head>
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://marcelwelk.de/#website",
                name: "Marcel Welk – Webdesign & Webentwicklung Dortmund",
                url: "https://marcelwelk.de",
                description: "Freelance Webdesigner & Webentwickler aus Dortmund. Spezialisiert auf moderne One-Pager, KI-Integration und SEO/GEO-Optimierung.",
                inLanguage: "de-DE",
                publisher: {
                  "@id": "https://marcelwelk.de/#person",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://marcelwelk.de/#person",
                name: "Marcel Welk",
                jobTitle: "Freelance Webdesigner & Webentwickler",
                description: "KI-Nerd und Webentwickler aus Dortmund. Spezialisiert auf moderne One-Pager für Unternehmen mit schlechtem SEO/GEO, KI-Integration und schnelle Umsetzung digitaler Projekte.",
                url: "https://marcelwelk.de",
                image: "https://marcelwelk.de/cel.jpg",
                sameAs: [
                  "https://github.com/celtechstarter",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dortmund",
                  postalCode: "44319",
                  addressRegion: "Nordrhein-Westfalen",
                  addressCountry: "DE",
                },
                knowsAbout: [
                  "Webdesign",
                  "Webentwicklung",
                  "One-Pager",
                  "UI/UX Design",
                  "Responsive Design",
                  "SEO Optimierung",
                  "GEO – Generative Engine Optimization",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "KI-Integration",
                  "KI-Agenten",
                  "Agentic Engineering",
                  "Vercel",
                  "Tailwind CSS",
                ],
                knowsLanguage: ["de", "en"],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Freelance Webentwickler",
                  occupationLocation: {
                    "@type": "City",
                    name: "Dortmund",
                  },
                  skills: "Next.js, React, TypeScript, Tailwind CSS, KI-Integration, SEO, GEO",
                },
                alumniOf: {
                  "@type": "Organization",
                  name: "Techstarter GmbH",
                  description: "Weiterbildung: Expert:in für Cloud- und Webentwicklung (2024–2025)",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://marcelwelk.de/#business",
                name: "Marcel Welk – Webdesign & Webentwicklung Dortmund",
                description: "Freelance Webdesigner & Webentwickler aus Dortmund. Moderne One-Pager, KI-Integration und SEO/GEO-Optimierung für Unternehmen in NRW.",
                url: "https://marcelwelk.de",
                image: "https://marcelwelk.de/og-image.jpg",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dortmund",
                  postalCode: "44319",
                  addressRegion: "Nordrhein-Westfalen",
                  addressCountry: "DE",
                },
                areaServed: [
                  { "@type": "City", name: "Dortmund" },
                  { "@type": "State", name: "Nordrhein-Westfalen" },
                ],
                serviceType: [
                  "Webdesign",
                  "Webentwicklung",
                  "One-Pager",
                  "SEO-Optimierung",
                  "GEO-Optimierung",
                  "KI-Integration",
                ],
                priceRange: "$$",
                currenciesAccepted: "EUR",
                paymentAccepted: "Überweisung",
                openingHours: "Mo-Fr 09:00-18:00",
                founder: {
                  "@id": "https://marcelwelk.de/#person",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingNav />
        <Analytics />
      </body>
    </html>
  )
}