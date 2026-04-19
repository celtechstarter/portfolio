"use client"

import Link from "next/link"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black text-foreground relative selection:bg-primary/30 px-6 py-24">
      {/* Background Aurora */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 aurora-bg opacity-30 mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zum Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card glow-border p-8 md:p-12 rounded-2xl"
        >
          <div className="mb-8 flex items-center gap-3 text-primary">
            <ShieldCheck size={32} />
            <h1 className="font-bold text-3xl text-white">Datenschutzerklärung</h1>
          </div>

          <div className="prose prose-invert prose-orange max-w-none space-y-6 text-muted-foreground">
            <p>
              Ich nehme den Schutz deiner persönlichen Daten sehr ernst. Diese Datenschutzerklärung klärt dich über die Art, den Umfang und den Zweck der Verarbeitung von personenbezogenen Daten innerhalb meines Entwickler-Portfolios auf.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
              Marcel Welk<br />
              Kornacker 14, 44319 Dortmund<br />
              E-Mail: {typeof window !== 'undefined' ? atob("bWFyY2VsLndlbGs4N0BnbWFpbC5jb20=") : "wird geladen..."}
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">2. Datenerfassung auf dieser Website (Hosting)</h2>
            <p>
              <strong>Vercel & Vercel Analytics:</strong> Diese Website wird bei Vercel Inc. gehostet. Wenn du meine Seite besuchst, werden automatisch technische Verbindungsdaten wie IP-Adresse, Datum und Uhrzeit, Browsertyp und aufgerufene Seiten übertragen. Diese Logs sind technisch notwendig, um die Website sicher und stabil auszuliefern. Zusätzlich nutze ich Vercel Analytics, ein datenschutzfreundliches Analysetool ohne Cookies, das nur aggregierte, anonymisierte Daten sammelt, um die Performance der Seite zu messen.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">3. Cookies & Google Fonts</h2>
            <p>
              Diese Website verwendet <strong>keine Tracking-Cookies</strong> oder Marketing-Cookies. Es werden lediglich technisch notwendige Session-Daten verarbeitet. Zur ansprechenden Darstellung nutze ich Google Fonts. Diese sind jedoch lokal oder serverseitig in der Next.js App eingebunden, sodass beim Aufruf der Seite keine Verbindung zu Google-Servern aufgebaut wird und deine IP-Adresse nicht an Google übertragen wird.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">4. Das "Rubbel-Impressum" (Anti-Bot Schutz)</h2>
            <p>
              Mein Impressum nutzt eine interaktive Canvas-Komponente ("Rubbellos"), um meine privaten Kontaktdaten vor automatisierten Scraping-Bots zu schützen. 
              <strong>Wichtig:</strong> Die Interaktion mit diesem Element (Mausbewegungen, Rubbel-Aktionen) findet zu 100% lokal in deinem Browser (Client-Side) statt. Es werden dabei <strong>keinerlei Nutzerdaten, Mausbewegungen oder Verhaltensmuster gespeichert, analysiert oder an mich übertragen</strong>. Es ist eine reine UI-Sicherheitsmaßnahme.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">5. Kontaktaufnahme</h2>
            <p>
              Wenn du per E-Mail Kontakt mit mir aufnimmst, werden deine Angaben (E-Mail-Adresse, Name, Inhalt) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">6. Deine Rechte</h2>
            <p>
              Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
