'use client'

import { Download, Wrench } from "lucide-react"

// TODO: Beschreibungen aus den PDFs anpassen — aktuell Platzhalter basierend auf Dateinamen
interface DevlogEntry {
  day: number
  date: string
  title: string
  description: string
  problemSolved?: string
  pdf: string
}

const entries: DevlogEntry[] = [
  {
    day: 1,
    date: "18.02.2026",
    title: "Projekt-Start & React Setup",
    description:
      "Poke Scan V2 von Grund auf neu aufgebaut. Next.js mit TypeScript und Tailwind eingerichtet, erste Komponenten-Struktur und Routing angelegt.",
    pdf: "/docs/Daily_PokeScan_Tag1_18-02-2026.pdf",
  },
  {
    day: 2,
    date: "19.02.2026",
    title: "KI-Vision API Integration",
    description:
      "Erste KI-Vision-Anbindung implementiert. Pokémon-Karten-Bilder werden an die API gesendet und die Erkennungsergebnisse strukturiert verarbeitet.",
    pdf: "/docs/Daily_PokeScan_Tag2_19-02-2026.pdf",
  },
  {
    day: 3,
    date: "20.02.2026",
    title: "NVIDIA NIM API & Fallbacks",
    description:
      "NVIDIA NIM Vision-Modell angebunden für präzisere Karten-Erkennung. Robuste Fallback-Logik implementiert falls der Endpunkt nicht verfügbar ist.",
    problemSolved:
      "NIM API Ratelimits führten zu Timeouts → Exponential Backoff und Fallback-Endpunkt implementiert",
    pdf: "/docs/Daily_PokeScan_Tag3_20-02-2026.pdf",
  },
  {
    day: 4,
    date: "21.02.2026",
    title: "Mobile Optimierung & PWA",
    description:
      "Progressive Web App Manifest eingebaut. Touch-Interaktionen und responsive Layouts für alle Bildschirmgrößen optimiert.",
    pdf: "/docs/Daily_PokeScan_Tag4_21-02-2026.pdf",
  },
  {
    day: 5,
    date: "22.02.2026",
    title: "Kamera-Integration & Bugfixes",
    description:
      "Direkte Kamera-Nutzung via getUserMedia eingebaut. Nutzer können Karten jetzt direkt abfotografieren statt Bilder hochzuladen.",
    problemSolved:
      "Schwarze Frames auf iOS-Safari → getUserMedia Constraints und Kamera-Permissions neu implementiert",
    pdf: "/docs/Daily_PokeScan_Tag5_22-02-2026.pdf",
  },
  {
    day: 6,
    date: "23.02.2026",
    title: "Preisdaten & Bewertungssystem",
    description:
      "Preis-API integriert und ein Bewertungssystem aufgebaut. Erkannte Karten werden jetzt mit aktuellem Marktwert angezeigt.",
    pdf: "/docs/Daily_PokeScan_Tag6_23-02-2026.pdf",
  },
  {
    day: 7,
    date: "24.02.2026",
    title: "Präzisions-Optimierung & Launch",
    description:
      "Erkennungsgenauigkeit durch intensives Prompt-Engineering deutlich verbessert. Finaler Schliff, letzte Bugfixes und Deployment auf Vercel.",
    pdf: "/docs/Daily_PokeScan_Tag7_24-02-2026.pdf",
  },
]

export default function DevlogPage() {
  return (
    <main
      className="min-h-screen px-6 py-24"
      style={{ background: "#0c0b09" }}
    >
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <p
            className="mb-2 font-mono text-sm tracking-widest uppercase"
            style={{ color: "rgba(207, 147, 54, 0.7)" }}
          >
            Poke-Scan V2
          </p>
          <h1
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "rgba(207, 147, 54, 1)" }}
          >
            Development Log
          </h1>
          <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            7 Tage · Täglich dokumentiert · Ehrlich geloggt
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-px"
            style={{ background: "rgba(207, 147, 54, 0.25)" }}
          />

          <div className="flex flex-col gap-12">
            {entries.map((entry, idx) => (
              <div key={entry.day} className="relative flex gap-6">
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <div
                    className="h-[22px] w-[22px] rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: "#0c0b09",
                      borderColor: "rgba(207, 147, 54, 0.7)",
                    }}
                  >
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ background: "rgba(207, 147, 54, 0.9)" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Day + date header */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-bold tracking-widest uppercase"
                        style={{ color: "rgba(207, 147, 54, 0.5)" }}
                      >
                        Tag {String(entry.day).padStart(2, "0")}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        {entry.date}
                      </span>
                    </div>

                    {/* PDF Download */}
                    <a
                      href={entry.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs transition-all duration-200"
                      style={{
                        color: "rgba(207, 147, 54, 0.5)",
                        border: "1px solid rgba(207, 147, 54, 0.15)",
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(207, 147, 54, 0.9)"
                        ;(
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderColor = "rgba(207, 147, 54, 0.5)"
                        ;(
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "rgba(207, 147, 54, 0.05)"
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(207, 147, 54, 0.5)"
                        ;(
                          e.currentTarget as HTMLAnchorElement
                        ).style.borderColor = "rgba(207, 147, 54, 0.15)"
                        ;(
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "transparent"
                      }}
                    >
                      <Download size={11} />
                      PDF
                    </a>
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-2 font-mono text-base font-semibold leading-snug"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {entry.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="font-mono text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {entry.description}
                  </p>

                  {/* Problem solved badge */}
                  {entry.problemSolved && (
                    <div
                      className="mt-3 flex items-start gap-2 rounded-lg px-3 py-2"
                      style={{
                        background: "rgba(207, 147, 54, 0.06)",
                        border: "1px solid rgba(207, 147, 54, 0.2)",
                      }}
                    >
                      <Wrench
                        size={13}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "rgba(207, 147, 54, 0.7)" }}
                      />
                      <p
                        className="font-mono text-xs leading-relaxed"
                        style={{ color: "rgba(207, 147, 54, 0.7)" }}
                      >
                        {entry.problemSolved}
                      </p>
                    </div>
                  )}

                  {/* Connector line hint for all but last */}
                  {idx < entries.length - 1 && (
                    <div className="mt-8" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div
          className="mt-16 text-center font-mono text-xs"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          // Platzhalter-Texte — aus PDFs anpassen sobald lesbar
        </div>
      </div>
    </main>
  )
}
