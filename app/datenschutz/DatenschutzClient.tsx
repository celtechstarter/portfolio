"use client"

import Link from "next/link"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function DatenschutzClient() {
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

          <div className="prose prose-invert prose-orange max-w-none space-y-4 text-muted-foreground text-sm leading-relaxed">

            <p>
              Diese Datenschutzerklärung klärt dich über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website auf. Sie gilt für alle Seiten unter dieser Domain. Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>

            {/* 1 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Marcel Welk<br />
              Kornacker 14<br />
              44319 Dortmund<br />
              E-Mail: {typeof window !== "undefined" ? atob("bWFyY2VsLndlbGs4N0BnbWFpbC5jb20=") : "wird geladen..."}
            </p>

            {/* 2 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              2. Hosting durch Vercel
            </h2>
            <p>
              Diese Website wird bei <strong className="text-white">Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf dieser Website werden technisch notwendige Verbindungsdaten automatisch verarbeitet, insbesondere:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>IP-Adresse (anonymisiert auf Stadt-/Länderebene)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seite / URL</li>
              <li>Browsertyp, Betriebssystem, Gerätetyp</li>
            </ul>
            <p className="mt-3">
              Diese Daten werden von Vercel zur Bereitstellung, Absicherung und Stabilisierung der Infrastruktur verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und fehlerfreien Betrieb der Website).
            </p>
            <p>
              <strong className="text-white">Drittlandtransfer:</strong> Vercel ist ein US-amerikanisches Unternehmen. Für die Übermittlung personenbezogener Daten in die USA stützt sich Vercel auf Standardvertragsklauseln (Standard Contractual Clauses, SCC) gemäß Art. 46 DSGVO sowie auf das EU-U.S. Data Privacy Framework. Ein unterzeichnetes Data Processing Addendum (DPA) ist verfügbar unter vercel.com/legal/dpa.
            </p>

            {/* 3 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              3. Vercel Analytics
            </h2>
            <p>
              Ich nutze <strong className="text-white">Vercel Analytics</strong>, ein datenschutzfreundliches Analysetool. Vercel Analytics setzt <strong className="text-white">keine Cookies</strong> und erstellt <strong className="text-white">keine Nutzerprofile</strong>. Erfasst werden ausschließlich anonymisierte, aggregierte Metriken wie Seitenaufrufe und Herkunftsland – ohne individuelle Identifizierbarkeit. Es findet keine Weitergabe der Daten an Dritte zu Werbezwecken statt.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse und Verbesserung der Website-Performance). Da keine personenbezogenen Daten im Sinne der DSGVO erhoben werden, ist eine Einwilligung nicht erforderlich.
            </p>

            {/* 4 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              4. Cookies
            </h2>
            <p>
              Diese Website setzt <strong className="text-white">keine Tracking-Cookies</strong>, Marketing-Cookies oder Analyse-Cookies. Es werden keine Cookies gesetzt, die einer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO bedürfen.
            </p>

            {/* 5 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              5. Google Fonts (lokal eingebunden)
            </h2>
            <p>
              Diese Website verwendet Google Fonts zur typografischen Gestaltung. Die Schriftarten sind jedoch <strong className="text-white">vollständig lokal</strong> über die Next.js-Infrastruktur eingebunden (<code className="text-orange-400 text-xs">next/font/google</code>). Beim Aufruf dieser Seite wird <strong className="text-white">keine Verbindung zu Google-Servern</strong> hergestellt und deine IP-Adresse nicht an Google übertragen.
            </p>

            {/* 6 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              6. Externe Links
            </h2>
            <p>
              Diese Website enthält Links zu externen Diensten wie GitHub und Vercel-Deployments. Diese Links sind mit <code className="text-orange-400 text-xs">rel=&quot;noopener noreferrer&quot;</code> versehen. Sobald du einen externen Link klickst, gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Ich habe keinen Einfluss auf deren Datenverarbeitung.
            </p>

            {/* 7 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              7. Interaktive Elemente (Rubbel-Impressum)
            </h2>
            <p>
              Das Impressum dieser Website nutzt eine Canvas-basierte Interaktion ("Rubbellos"), um Kontaktdaten vor automatisierten Scraping-Bots zu schützen. Diese Interaktion findet <strong className="text-white">ausschließlich lokal in deinem Browser</strong> (Client-Side) statt. Es werden dabei <strong className="text-white">keinerlei Mausbewegungen, Verhaltensmuster oder sonstige Nutzerdaten gespeichert, analysiert oder an mich oder Dritte übertragen</strong>.
            </p>

            {/* 8 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              8. Kontaktaufnahme per E-Mail
            </h2>
            <p>
              Wenn du per E-Mail Kontakt mit mir aufnimmst, werden die von dir mitgeteilten Daten (E-Mail-Adresse, Name, Nachrichteninhalt) ausschließlich zur Bearbeitung deiner Anfrage bei mir gespeichert. Eine Weitergabe an Dritte erfolgt nicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Du kannst deine Einwilligung jederzeit widerrufen; gespeicherte Daten werden auf Anfrage unverzüglich gelöscht, sofern keine gesetzliche Aufbewahrungspflicht entgegensteht.
            </p>

            {/* 9 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              9. SSL-Verschlüsselung
            </h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des Browsers mit <strong className="text-white">https://</strong> beginnt.
            </p>

            {/* 10 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              10. Deine Rechte als betroffene Person
            </h2>
            <p>Dir stehen gegenüber mir folgende Rechte zu:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong className="text-white">Auskunft</strong> über die verarbeiteten Daten (Art. 15 DSGVO)</li>
              <li><strong className="text-white">Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
              <li><strong className="text-white">Löschung</strong> deiner Daten (Art. 17 DSGVO)</li>
              <li><strong className="text-white">Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
              <li><strong className="text-white">Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong className="text-white">Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Wahrnehmung dieser Rechte wende dich per E-Mail an mich (siehe Abschnitt 1). Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
            </p>

            {/* 11 */}
            <h2 className="text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              11. Aktualität dieser Erklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und datiert vom <strong className="text-white">April 2026</strong>. Sie kann aufgrund geänderter gesetzlicher oder behördlicher Vorgaben oder durch Änderungen der Website aktualisiert werden.
            </p>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
