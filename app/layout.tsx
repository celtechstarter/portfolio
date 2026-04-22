import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '@/components/footer'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Marcel Welk | Builder. Problemlöser. KINerd.',
  description: 'Leidenschaftlicher Entwickler mit Fokus auf KI-gestützte Effizienz. Ich baue Lösungen, die funktionieren – direkt, ehrlich und technisch am Puls der Zeit.',
  keywords: ['Marcel Welk', 'IT-Techniker', 'Entwickler', 'IT-Support', 'Cloud Administration', 'Linux', 'DevOps', 'React', 'TypeScript', 'Portfolio', 'AI Agentic Engineering', 'KI', 'Automatisierung', 'AWS', 'Azure', 'Vercel'],
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
    title: 'Marcel Welk | Builder. Problemlöser. KINerd.',
    description: 'Leidenschaftlicher Entwickler mit Fokus auf KI-gestützte Effizienz. Ich baue Lösungen, die funktionieren – direkt, ehrlich und technisch am Puls der Zeit.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://marcel-welk.vercel.app',
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