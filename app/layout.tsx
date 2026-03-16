import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Marcel Welk | IT-Techniker & Entwickler',
  description: 'IT-Techniker und Entwickler aus Deutschland. Spezialisiert auf Cloud Administration, Linux, Web Development mit React & TypeScript und KI-gestützte Automatisierung. Portfolio mit Projekten zu AI Agentic Engineering, DevOps und modernen Webapplikationen.',
  keywords: ['Marcel Welk', 'IT-Techniker', 'Entwickler', 'IT-Support', 'Cloud Administration', 'Linux', 'DevOps', 'React', 'TypeScript', 'Portfolio', 'AI Agentic Engineering', 'KI', 'Automatisierung', 'AWS', 'Azure', 'Vercel'],
  authors: [{ name: 'Marcel Welk' }],
  openGraph: {
    title: 'Marcel Welk | IT-Techniker & Entwickler',
    description: 'IT-Techniker und Entwickler. Cloud Administration, Linux, React, TypeScript und KI-gestützte Automatisierung.',
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}