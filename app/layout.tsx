import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '@/components/footer'

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
                "@type": "Person",
                name: "Marcel Welk",
                jobTitle: "Freelance Webdesigner & Webentwickler",
                url: "https://marcelwelk.de",
                sameAs: [
                  "https://github.com/celtechstarter",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dortmund",
                  postalCode: "44319",
                  addressCountry: "DE",
                },
                knowsAbout: [
                  "Webdesign",
                  "Webentwicklung",
                  "UI/UX Design",
                  "Responsive Design",
                  "SEO Optimierung",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "KI-Agenten",
                  "Agentic Engineering",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Marcel Welk – Webdesign & Webentwicklung Dortmund",
                description:
                  "Professionelles Webdesign und individuelle Webentwicklung aus Dortmund. Von der ersten Idee bis zur fertigen Online-Präsenz.",
                url: "https://marcelwelk.de",
                telephone: "",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Kornacker 14",
                  addressLocality: "Dortmund",
                  postalCode: "44319",
                  addressCountry: "DE",
                },
                areaServed: {
                  "@type": "City",
                  name: "Dortmund",
                },
                priceRange: "$$",
                currenciesAccepted: "EUR",
                paymentAccepted: "Überweisung",
                openingHours: "Mo-Fr 09:00-18:00",
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
        <Analytics />
      </body>
    </html>
  )
}