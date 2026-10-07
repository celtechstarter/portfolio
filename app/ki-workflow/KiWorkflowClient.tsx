"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Bot, Wand2, Code2, Rocket, Brain, Search, Server, Flame, Terminal, ShieldCheck, Database } from "lucide-react"

// ─── Spotlight Card ─────────────────────────────────────────────────────────
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-xl transition-all duration-300 hover:border-orange-400/30 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(249,115,22,0.12), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────
const pipeline = [
  { step: "01", title: "Anforderungen", desc: "Problem, Nutzerablauf und Prüfkriterien", tool: "Claude Cowork / ChatGPT", icon: <Brain size={20} className="text-orange-400" /> },
  { step: "02", title: "Aufgabenverteilung", desc: "Arbeitspakete, Modelle und Anweisungen", tool: "KI-Agenten", icon: <Wand2 size={20} className="text-orange-400" /> },
  { step: "03", title: "KI-Umsetzung", desc: "Prototypen, Funktionen und Schnittstellen", tool: "Claude Code / Lovable / n8n", icon: <Code2 size={20} className="text-orange-400" /> },
  { step: "04", title: "Gegenprüfung", desc: "Tests, Logik und Nutzerabläufe", tool: "Weitere Modelle / Testläufe", icon: <ShieldCheck size={20} className="text-orange-400" /> },
  { step: "05", title: "Weiterentwicklung", desc: "Veröffentlichen, Feedback und Dokumentation", tool: "GitHub / Vercel", icon: <Rocket size={20} className="text-orange-400" /> },
]

const arsenal = [
  {
    eyebrow: "Konzeption",
    title: "Vom Problem zum Arbeitspaket",
    description: "Ich formuliere Anforderungen, plane Nutzerabläufe und teile Aufgaben in überschaubare Schritte auf. Mein Beitrag liegt darin, das Ziel verständlich zu machen und die KI-gestützte Umsetzung daran auszurichten.",
    tags: ["Anforderungen", "Nutzerabläufe", "Prüfkriterien"],
    icon: <Brain size={26} />,
  },
  {
    eyebrow: "Multi-Agent-Workflows",
    title: "Werkzeuge und Agenten koordinieren",
    description: "Claude Cowork, Claude Code und ChatGPT nutze ich auch parallel. Ich wähle Modelle passend zur Aufgabe und lasse abgegrenzte Arbeitspakete bearbeiten. Die Programmierung erfolgt mit KI; ich steuere die Aufgaben und gleiche Ergebnisse mit den Anforderungen ab.",
    tags: ["Claude Cowork", "Claude Code", "ChatGPT"],
    icon: <Terminal size={26} />,
  },
  {
    eyebrow: "Automatisierung & APIs",
    title: "Abläufe verbinden",
    description: "Ich konzipiere Abläufe mit Datenabruf, Verarbeitung und Ausgabe und setze sie KI-gestützt um. Mein n8n-Prototyp verbindet HTTP-Abruf, JavaScript-Verarbeitung, einen KI-Bericht und E-Mail-Versand. Weitergehende Automatisierungen kennzeichne ich als geplant.",
    tags: ["n8n", "HTTP / JSON", "APIs"],
    icon: <Bot size={26} />,
  },
  {
    eyebrow: "Qualitätsprüfung",
    title: "Tests und modellübergreifende Reviews",
    description: "Ich lasse Tests für Funktionen, Fehlerfälle und behobene Fehler erstellen und erweitern. Weitere Modelle setze ich für Code- und Logikreviews ein. Ein Ziel von beispielsweise 80 % Testabdeckung ist eine Vorgabe, keine Behauptung über den aktuellen Stand aller Projekte. Testläufe und reproduzierbare Befunde zählen mehr als die Zustimmung eines Modells.",
    tags: ["Testkonzeption", "Regressionstests", "KI-gestützte Reviews"],
    icon: <ShieldCheck size={26} />,
  },
  {
    eyebrow: "Wartbarkeit",
    title: "Refactoring und Dokumentation",
    description: "Ich beauftrage die Überarbeitung auf klarere Zuständigkeiten, verständliche Namen und weniger Wiederholungen. Dokumentation soll Zweck, Schnittstellen und wichtige Entscheidungen erklären. Änderungen sollen bestehende Funktionen erhalten und durch passende Tests begleitet werden.",
    tags: ["Refactoring mit KI", "Dokumentation", "Nachvollziehbarkeit"],
    icon: <Code2 size={26} />,
  },
  {
    eyebrow: "Inhalte & Auffindbarkeit",
    title: "Textlogik, SEO und GEO",
    description: "Mein Prüfprozess bezieht auch sichtbare Texte, Metadaten, Links und strukturierte Daten ein. Ich lasse Widersprüche zwischen Beschreibung und Funktion suchen und Verbesserungen ausarbeiten. Daraus leite ich keine Garantie für Rankings oder Empfehlungen durch KI-Suchen ab.",
    tags: ["Textprüfung", "SEO / GEO", "Strukturierte Daten"],
    icon: <Search size={26} />,
  },
  {
    eyebrow: "Technische Datenschutzaspekte",
    title: "Datenflüsse und Risiken hinterfragen",
    description: "Ich lasse prüfen, welche Daten verarbeitet werden und ob Aussagen im Interface dazu passen. KI-gestützte Sicherheits- und Datenschutzchecks helfen, mögliche Probleme zu erkennen. Sie ersetzen weder eine fachliche Rechtsprüfung noch einen unabhängigen Sicherheitsnachweis.",
    tags: ["Datenflüsse", "Risikofragen", "Offene Punkte"],
    icon: <Database size={26} />,
  },
]

// Eigene Projektpraxis: keine Darstellung als unabhängiger Auditdienstleister.
// ─── Component ───────────────────────────────────────────────────────────────
export default function KiWorkflowClient() {
  const pipelineRef = useRef(null)
  const pipelineInView = useInView(pipelineRef, { once: true, margin: "-80px" })

  return (
    <div className="min-h-screen bg-black text-foreground selection:bg-primary/30">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 aurora-bg opacity-30 mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 space-y-32">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-mono text-sm tracking-widest text-orange-400 uppercase">
              Mein Antrieb
            </p>
            <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance">
              Von der Anforderung zur Anwendung:{" "}
              <span className="text-orange-400">So arbeite ich mit KI</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ich strukturiere Anforderungen und koordiniere die Umsetzung mit KI-Werkzeugen und Agenten.
              Automatisierte Tests, zusätzliche Modellreviews und praktische Nutzungsszenarien gehören zu meinem Ablauf.
              Diesen Workflow habe ich auf Grundlage meiner Weiterbildung in eigenen Projekten entwickelt.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
              <Flame size={18} className="text-orange-400 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Ich wähle Werkzeuge passend zu Anforderungen, Schnittstellen und dem jeweiligen Entwicklungsschritt.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── 2. PIPELINE ─────────────────────────────────────────────────── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="mb-2 font-mono text-sm tracking-widest text-orange-400 uppercase">
              Der Prozess
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Von der Anforderung zur Anwendung
            </h2>
          </motion.div>

          <div ref={pipelineRef} className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {pipeline.map((node, i) => (
              <div key={node.step} className="relative flex-1 w-full md:w-auto flex flex-col items-center">

                {/* Connecting line */}
                {i < pipeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] right-[-40%] h-[1px] bg-white/10 z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={pipelineInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.2, ease: "easeInOut" }}
                      className="h-full bg-orange-400/60 origin-left"
                    />
                    <motion.div
                      className="absolute top-[-2px] w-1.5 h-1.5 rounded-full bg-orange-400"
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                    />
                  </div>
                )}

                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={pipelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center group cursor-default"
                >
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-black border border-white/20 mb-4 transition-all duration-300 group-hover:border-orange-400/50 group-hover:shadow-[0_0_24px_rgba(249,115,22,0.3)]">
                    <div className="absolute inset-2 rounded-full bg-orange-400/10 blur-sm" />
                    <span className="relative">{node.icon}</span>
                  </div>
                  <span className="font-mono text-[10px] text-orange-400/60 mb-1">{node.step}</span>
                  <h3 className="font-semibold text-sm text-foreground text-center group-hover:text-orange-400 transition-colors">
                    {node.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground text-center font-mono mt-0.5">{node.desc}</p>
                  <span className="mt-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {node.tool}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. ARSENAL ──────────────────────────────────────────────────── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="mb-2 font-mono text-sm tracking-widest text-orange-400 uppercase">
              Werkzeuge & Prüfschritte
            </p>
            <h2 className="text-3xl font-bold text-foreground">Mein Werkzeugkasten</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arsenal.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="h-full"
              >
                <SpotlightCard className="h-full flex flex-col">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 border border-orange-400/20 text-orange-400 transition-all duration-300 hover:bg-orange-400/20">
                    {card.icon}
                  </div>
                  <p className="mb-1 font-mono text-[10px] tracking-widest text-orange-400/70 uppercase">
                    {card.eyebrow}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[10px] sm:text-xs text-muted-foreground backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
