import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '@/components/footer'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Marcel Welk | Freelance Webentwickler aus Dortmund',
  description: 'Freelance Webentwickler & KI-Spezialist aus Dortmund. Ich baue moderne Web-Apps mit React, Next.js und KI-Agenten – schnell, ehrlich und technisch am Puls der Zeit.',
  keywords: [
    'Marcel Welk',
    'Webdesign Dortmund',
    'Webentwicklung Dortmund',
    'Freelance Entwickler Dortmund',
    'Fullstack Developer Dortmund',
    'Freelance Webentwickler',
    'KI-Entwickler Dortmund',
    'Next.js Entwickler',
    'React Entwickler Dortmund',
    'IT-Support Dortmund',
    'AI Agentic Engineering',
    'KI',
    'Automatisierung',
    'TypeScript',
    'Vercel',
    'Portfolio',
  ],
  authors: [{ name: 'Marcel Welk' }],
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
    title: 'Marcel Welk | Freelance Webentwickler aus Dortmund',
    description: 'Freelance Webentwickler & KI-Spezialist aus Dortmund. Moderne Web-Apps mit React, Next.js und KI-Agenten.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://marcel-welk.vercel.app',
    siteName: 'Marcel Welk Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marcel Welk – Freelance Webentwickler aus Dortmund',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcel Welk | Freelance Webentwickler aus Dortmund',
    description: 'Freelance Webentwickler & KI-Spezialist aus Dortmund. Moderne Web-Apps mit React, Next.js und KI-Agenten.',
    images: ['/og-image.png'],
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
                jobTitle: "Freelance Webentwickler & KI-Spezialist",
                url: "https://marcel-welk.vercel.app",
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
                  "Webentwicklung",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "KI-Agenten",
                  "Agentic Engineering",
                  "Vercel",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Marcel Welk – Freelance Webentwicklung",
                description:
                  "Freelance Webentwickler & KI-Spezialist aus Dortmund. Moderne Web-Apps mit React, Next.js und KI-Agenten.",
                url: "https://marcel-welk.vercel.app",
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