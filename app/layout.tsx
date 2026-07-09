import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '@/components/footer'
import { FloatingNav } from '@/components/floating-nav'
import { ChatWidget } from '@/components/chat-widget'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marcelwelk.de'),
  title: {
    default: 'Marcel Welk | Webdesign & Webentwicklung Dortmund',
    template: '%s | Marcel Welk',
  },
  description: 'Professionelles Webdesign und individuelle Webentwicklung aus Dortmund. Von der ersten Idee bis zur fertigen Online-Präsenz – modern, schnell und zielgerichtet.',
  keywords: [
    'Marcel Welk',
    'Webdesign Dortmund',
    'Webentwicklung Dortmund',
    'KI-Spezialist Dortmund',
    'Prompt Engineering Dortmund',
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
    canonical: 'https://www.marcelwelk.de',
  },
  authors: [{ name: 'Marcel Welk', url: 'https://www.marcelwelk.de' }],
  creator: 'Marcel Welk',
  robots: {
    index: true,
    follow: true,
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
    url: 'https://www.marcelwelk.de',
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
                "@id": "https://www.marcelwelk.de/#website",
                name: "Marcel Welk – Webdesign & Webentwicklung Dortmund",
                url: "https://www.marcelwelk.de",
                description: "Webentwickler & KI-Spezialist aus Dortmund. Bewerbungs- und Übungsportfolio: moderne Webentwicklung, KI-Integration und SEO/GEO-Optimierung.",
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
                jobTitle: "Webentwickler & KI-Spezialist",
                description: "KI-Nerd und Webentwickler aus Dortmund. Baut eigene Projekte von der Idee bis zum Live-Deployment – KI-Integration, Webentwicklung und Cloud. Auf der Suche nach einer Festanstellung.",
                url: "https://www.marcelwelk.de",
                image: "https://www.marcelwelk.de/cel.jpg",
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
                  "Claude Code",
                  "Workflow-Automatisierung",
                  "Vercel",
                  "Tailwind CSS",
                ],
                knowsLanguage: ["de", "en"],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Webentwickler & KI-Spezialist",
                  occupationLocation: {
                    "@type": "City",
                    name: "Dortmund",
                  },
                  skills: "Next.js, React, TypeScript, Tailwind CSS, KI-Integration, Claude Code, Workflow-Automatisierung, SEO, GEO",
                },
                alumniOf: {
                  "@type": "Organization",
                  name: "Techstarter GmbH",
                  description: "Weiterbildung: Expert:in für Cloud- und Webentwicklung (2024–2025)",
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
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}