"use client"

import { Download, Wrench } from "lucide-react"

interface DevlogEntry {
  project: string
  color: string
  inDevelopment?: boolean
  day: number
  date?: string
  title: string
  description: string
  problemSolved?: string
  pdf?: string
}

const PROJECT_COLORS: Record<string, string> = {
  "BewerbungsPilot": "74, 222, 128",
  "Poke-Scan V2":    "207, 147, 54",
  "Portfolio":       "96, 165, 250",
  "CelDesk":         "167, 139, 250",
}

const entries: DevlogEntry[] = [
  // ── BewerbungsPilot ──────────────────────────────────────────────────────
  {
    project: "BewerbungsPilot",
    color: PROJECT_COLORS["BewerbungsPilot"],
    day: 1,
    title: "Idee und UI Aufbau",
    description:
      "Idee für einen KI-Bewerbungsgenerator gehabt. UI mit v0.dev generiert, Grundstruktur mit React und TypeScript aufgesetzt. Lebenslauf-Upload und Stellenanzeigen-Eingabe als Kernfeatures geplant. Abends schon den ersten Prototyp im Browser.",
  },
  {
    project: "BewerbungsPilot",
    color: PROJECT_COLORS["BewerbungsPilot"],
    day: 2,
    title: "KI-Integration und Go Live",
    description:
      "KI-Anbindung für die Anschreiben-Generierung eingebaut. Upload-Logik fertiggestellt, auf Vercel deployed und getestet. Das Ding funktioniert: Lebenslauf hochladen, Stellenanzeige reinkopieren, fertiges Anschreiben in Minuten. Repo auf privat gestellt.",
    problemSolved:
      "CORS-Fehler beim API Call → Vercel Serverless Function als Proxy eingesetzt",
  },

  // ── Poke-Scan V2 ─────────────────────────────────────────────────────────
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 1,
    date: "18.02.2026",
    title: "Projekt Kickoff & Server Setup",
    description:
      "VPS bei Hostinger gemietet und eingerichtet. OpenClaw installiert, Telegram Bot eingerichtet, erste Projektstruktur angelegt. Ziel: Pokémon-Karten via KI erkennen und bewerten.",
    pdf: "/docs/Daily_PokeScan_Tag1_18-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 2,
    date: "19.02.2026",
    title: "Repository & erste Tests",
    description:
      "Repository auf den VPS geklont, alle Abhängigkeiten installiert. Erste Tests mit der bestehenden Codebasis, Architektur analysiert und Entwicklungsplan für die KI-Integration festgelegt.",
    pdf: "/docs/Daily_PokeScan_Tag2_19-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 3,
    date: "20.02.2026",
    title: "OCR raus, KI Vision rein",
    description:
      "OCR-Ansatz komplett verworfen: holografische Karten hatten 0% Erkennungsrate. Strategischer Pivot zu KI-Vision mit Kimi K2.5. Neues Architekturkonzept für die Bildanalyse-Pipeline entwickelt.",
    problemSolved:
      "OCR versagt bei holografischen Karten → Entscheidung für KI-Vision (Kimi K2.5) als fundamentaler Ansatzwechsel",
    pdf: "/docs/Daily_PokeScan_Tag3_20-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 4,
    date: "21.02.2026",
    title: "NVIDIA NIM & Kartenerkennung live",
    description:
      "NVIDIA NIM API angebunden, Llama 3.2 Vision eingesetzt — Kartenerkennung funktioniert! 3-Modell-Fallback-Chain gebaut (NIM → Kimi → Fallback). Zwei UI-Designs parallel mit v0.dev erstellt und das bessere ausgewählt.",
    pdf: "/docs/Daily_PokeScan_Tag4_21-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 5,
    date: "22.02.2026",
    title: "Mobile, PWA & Kamera",
    description:
      "Mobile-Optimierung abgeschlossen, PWA-Support eingebaut. Direkte Kamera-Integration fürs Handy via getUserMedia — Karten jetzt direkt abfotografieren statt hochladen.",
    pdf: "/docs/Daily_PokeScan_Tag5_22-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 6,
    date: "23.02.2026",
    title: "Preissystem & Cleanup",
    description:
      "Vollständiges Preissystem aufgebaut: Cardmarket EUR, Pokémon TCG API und Supabase als Cache-Layer. Alte Lovable-Abhängigkeiten entfernt, Codebase bereinigt.",
    problemSolved:
      "CORS-Fehler bei der Preis-API → Serverless Function als Proxy, alte Lovable-Abhängigkeiten entfernt",
    pdf: "/docs/Daily_PokeScan_Tag6_23-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 7,
    date: "24.02.2026",
    title: "Präzision & Launch",
    description:
      "Set-Code-Erkennung verbessert, Vintage-Karten-Support eingebaut, Multi-Zonen-Scan implementiert. Erkennungsgenauigkeit durch intensives Prompt-Engineering auf ein neues Niveau gebracht. Deployment.",
    pdf: "/docs/Daily_PokeScan_Tag7_24-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 8,
    date: "16.03.2026",
    title: "Großer Cleanup: 130+ Dateien raus",
    description:
      "Kompletter Projekt-Cleanup durchgeführt. 130+ tote Dateien gelöscht.",
  },

  // ── Portfolio ─────────────────────────────────────────────────────────────
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 1,
    title: "Design und Grundgerüst",
    description:
      "Portfolio-Webseite mit v0.dev designed. Dark-Mode Tech-Style gewählt. Next.js-Projekt mit Tailwind CSS und shadcn/ui aufgesetzt. Hero Section, Projekte, Skills und Kontakt-Bereich geplant.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 2,
    title: "Anpassen und Live gehen",
    description:
      "Alle Links und Texte angepasst: Projekt-URLs, Email, GitHub. Mit Claude Code auf GitHub gepusht und auf Vercel deployed. URL auf marcel-welk.vercel.app. Profilbild eingebaut.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 3,
    title: "Projekte & Devlog",
    description:
      "Alle Projekte als Karten hinzugefügt (Poke-Scan, BewerbungsPilot, CV Boost, PromptCrafter). Devlog-Seite mit eingebetteten Daily-Report-PDFs erstellt. Reihenfolge der Projekte optimiert.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 4,
    title: "Kompletter Rewrite: Über mich",
    description:
      "Den alten \"Angehender IT-Fachmann\"-Text komplett überarbeitet. Neuer Titel: \"Builder. Problemlöser. KI-Nerd.\" Ehrlicher Text über Arbeitsweise mit KI, Pareto-Prinzip-Infobutton eingebaut. Zusammen mit einem Kollegen die Richtung festgelegt.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 5,
    title: "Animierter Hintergrund & Design Upgrade",
    description:
      "Canvas-basierte Floating-Thoughts-Animation gebaut: IT-Begriffe schweben durch den Raum, verbinden sich bei Mausnähe. Insider-Witze, mehrere Sprachen. GitHub-Activity-Bereich und Devlog-Timeline eingebaut. Copy-Buttons bei Kontakt-Karten.",
    problemSolved:
      "Z-Index-Konflikte zwischen Canvas-Animation und Content-Overlay → Fixed positioning mit isolierten Stacking Contexts",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 6,
    date: "16.03.2026",
    title: "Lebenslauf-Seite & Clean Code",
    description:
      "Eigene Lebenslauf-Seite gebaut mit Timeline-Design, Profilbild und Skills als Badge-Pills. Neue \"Meine Arbeitsweise\" Section für ehrliche Darstellung des KI-Workflows. Favicon aus Profilbild erstellt, SEO Meta-Tags und OpenGraph-Daten eingerichtet. Danach kompletter Cleanup: ungenutzte Komponenten und Dependencies entfernt, Dead Code und console.logs bereinigt.",
    problemSolved:
      "Inline-Lebenslauf wirkt professioneller als ein eingebetteter PDF-Viewer",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 7,
    title: "Bento-Redesign & Agentic Workflow",
    description:
      "Kompletter Design-Pivot auf ein symmetrisches Bento-Grid für Projekte und Workflow. Den KI-Stack radikal ehrlich dokumentiert: Strategiewechsel zu Gemini/Antigravity und Gemini Agents als primäre \"Daily Driver\" (nahezu Null API-Kosten). Claude Code nur als Backup eingesetzt, wenn Gemini-Kontingente erschöpft waren.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 8,
    title: "KI-Workflow & Authentizität",
    description:
      "Die Unterseite /ki-workflow neu aufgebaut. Fokus auf die 'Macher-Story': Hauptschulabschluss, ADHS als Hyperfokus-Motor und KI als Navigator. Interaktive KI-Pipeline integriert (Planung ➔ Engineering ➔ Deployment). Werkzeugkasten-Logik implementiert: Multimodales Battle-Testing zwischen Grok, Nano Banana und Firefly.",
    problemSolved:
      "Asymmetrisches Grid wirkte unruhig → Umstellung auf striktes, symmetrisches Bento-Layout für bessere UI-Ruhe",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 9,
    title: "Master-Audit & SEO Dortmund",
    description:
      "Vollständiges Portfolio-Audit durchgeführt: SEO-Fokus auf 'Webentwicklung Dortmund' geschärft. Metadata auf allen Unterseiten ergänzt (ki-workflow, devlog, impressum, datenschutz). Server/Client-Split für korrekte Next.js Metadata-Architektur implementiert. Dortmund-Keywords strategisch in Titles und Descriptions eingebaut.",
    problemSolved:
      "export const metadata funktioniert nicht in 'use client' Dateien → Server-Wrapper-Pattern: page.tsx als Server Component, UI-Logik in *Client.tsx ausgelagert",
  },

  // ── CelDesk ───────────────────────────────────────────────────────────────
  {
    project: "CelDesk",
    color: PROJECT_COLORS["CelDesk"],
    inDevelopment: true,
    day: 1,
    title: "Recherche und Konzept",
    description:
      "IT-Helpdesk-Tools recherchiert: Zendesk, Freshdesk, Jira Service Management, OTRS. Entschieden ein eigenes Mini-Helpdesk zu bauen um die Arbeitsweise von IT-Support-Teams zu verstehen. Features geplant: Ticketsystem, Asset-Verwaltung, Wissensdatenbank, optional KI-Chatbot.",
  },
  {
    project: "CelDesk",
    color: PROJECT_COLORS["CelDesk"],
    inDevelopment: true,
    day: 2,
    title: "UI Aufbau",
    description:
      "React-Projekt mit dem bewährten Stack aufgesetzt (React, TypeScript, Tailwind, Supabase). UI für das Ticketsystem gebaut: Dashboard mit Statistiken, Ticket-Erstellung, Status-Workflow (Offen → In Bearbeitung → Gelöst), Kategorien (Hardware, Software, Netzwerk). Backend-Anbindung an Supabase noch offen.",
  },
]

export default function DevlogClient() {
  return (
    <main
      className="min-h-screen px-6 py-24"
      style={{ background: "#0c0b09" }}
    >
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="mb-2 font-mono text-sm tracking-widest uppercase"
            style={{ color: "rgba(207, 147, 54, 0.7)" }}
          >
            Build Journal
          </p>
          <h1
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "rgba(207, 147, 54, 1)" }}
          >
            Development Log
          </h1>
          <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Alle Projekte · Chronologisch · Ehrlich geloggt
          </p>
        </div>

        {/* Legend */}
        <div
          className="mb-14 flex flex-wrap justify-center gap-x-6 gap-y-3 rounded-xl px-6 py-4"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {Object.entries(PROJECT_COLORS).map(([name, rgb]) => (
            <div key={name} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: `rgba(${rgb}, 0.9)` }}
              />
              <span
                className="font-mono text-xs"
                style={{ color: `rgba(${rgb}, 0.7)` }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-[11px] top-0 bottom-0 w-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          <div className="flex flex-col gap-10">
            {entries.map((entry, idx) => {
              const rgb = entry.color
              const isLast = idx === entries.length - 1

              return (
                <div key={`${entry.project}-${entry.day}`} className="relative flex gap-6">

                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div
                      className="h-[22px] w-[22px] rounded-full border-2 flex items-center justify-center"
                      style={{
                        background: "#0c0b09",
                        borderColor: `rgba(${rgb}, 0.6)`,
                      }}
                    >
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ background: `rgba(${rgb}, 0.9)` }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-2 ${!isLast ? "border-b border-white/[0.04] pb-10" : ""}`}>

                    {/* Project badge row */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="font-mono text-[10px] font-bold tracking-wider uppercase rounded-full px-2.5 py-0.5"
                          style={{
                            color: `rgba(${rgb}, 0.9)`,
                            background: `rgba(${rgb}, 0.1)`,
                            border: `1px solid rgba(${rgb}, 0.2)`,
                          }}
                        >
                          {entry.project}
                        </span>
                        {entry.inDevelopment && (
                          <span
                            className="font-mono text-[10px] tracking-wide rounded-full px-2 py-0.5"
                            style={{
                              color: "rgba(167, 139, 250, 0.6)",
                              border: "1px solid rgba(167, 139, 250, 0.15)",
                            }}
                          >
                            In Entwicklung
                          </span>
                        )}
                      </div>

                      {/* PDF download */}
                      {entry.pdf && (
                        <a
                          href={entry.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs transition-all duration-200"
                          style={{
                            color: `rgba(${rgb}, 0.45)`,
                            border: `1px solid rgba(${rgb}, 0.12)`,
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement
                            el.style.color = `rgba(${rgb}, 0.9)`
                            el.style.borderColor = `rgba(${rgb}, 0.45)`
                            el.style.background = `rgba(${rgb}, 0.05)`
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement
                            el.style.color = `rgba(${rgb}, 0.45)`
                            el.style.borderColor = `rgba(${rgb}, 0.12)`
                            el.style.background = "transparent"
                          }}
                        >
                          <Download size={11} />
                          PDF
                        </a>
                      )}
                    </div>

                    {/* Day + date */}
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-xs font-bold tracking-widest uppercase"
                        style={{ color: `rgba(${rgb}, 0.45)` }}
                      >
                        Tag {String(entry.day).padStart(2, "0")}
                      </span>
                      {entry.date && (
                        <span
                          className="font-mono text-xs"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          {entry.date}
                        </span>
                      )}
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

                    {/* Problem solved */}
                    {entry.problemSolved && (
                      <div
                        className="mt-3 flex items-start gap-2 rounded-lg px-3 py-2"
                        style={{
                          background: `rgba(${rgb}, 0.05)`,
                          border: `1px solid rgba(${rgb}, 0.18)`,
                        }}
                      >
                        <Wrench
                          size={13}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: `rgba(${rgb}, 0.65)` }}
                        />
                        <p
                          className="font-mono text-xs leading-relaxed"
                          style={{ color: `rgba(${rgb}, 0.65)` }}
                        >
                          {entry.problemSolved}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-16 text-center font-mono text-xs"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          // {entries.length} Einträge · {Object.keys(PROJECT_COLORS).length} Projekte
        </div>
      </div>
    </main>
  )
}
