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
  {
    step: "01",
    title: "Strategie",
    desc: "Anforderungen klären, Architektur planen",
    tool: "Claude / Gemini",
    icon: <Brain size={20} className="text-orange-400" />,
  },
  {
    step: "02",
    title: "Prototyping",
    desc: "UI schnell zum Anfassen bringen",
    tool: "v0.dev",
    icon: <Wand2 size={20} className="text-orange-400" />,
  },
  {
    step: "03",
    title: "Engineering",
    desc: "Agentic Coding, direkt im Code",
    tool: "Claude Code / Cowork",
    icon: <Code2 size={20} className="text-orange-400" />,
  },
  {
    step: "04",
    title: "Backend & KI-Integration",
    desc: "Datenpipelines, KI-Features im Produkt",
    tool: "Python / Anthropic API",
    icon: <Bot size={20} className="text-orange-400" />,
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Live stellen, absichern, testen",
    tool: "Vercel / Supabase",
    icon: <Rocket size={20} className="text-orange-400" />,
  },
]

const arsenal = [
  {
    eyebrow: "Agentic Coding · Täglich im Einsatz",
    title: "Claude Code & Cowork",
    description:
      "Mein Hauptwerkzeug für echte Projekte, nicht nur Demos: Claude Code für tiefe Codebase-Arbeit im Terminal, Cowork für Datei- und Rechercheaufgaben nebenher. Von der ersten Zeile bis zum fertigen Commit.",
    tags: ["Claude Code", "Cowork", "VS Code"],
    icon: <Terminal size={26} />,
  },
  {
    eyebrow: "Backend · Automatisierung",
    title: "Python-Pipelines & Web-Scraping",
    description:
      "Playwright für automatisiertes Auslesen echter Webseiten, robuste Fehlerbehandlung für lange, unbeaufsichtigte Läufe, eigene Testsuite mit pytest. Kein Frontend-Bling, sondern Daten, die am Ende stimmen.",
    tags: ["Python", "Playwright", "pytest"],
    icon: <Server size={26} />,
  },
  {
    eyebrow: "KI-Integration · Anthropic API",
    title: "KI direkt im Produkt",
    description:
      "Nicht nur KI zum Bauen nutzen, sondern KI ins fertige Produkt einbauen: automatische Profil-Bewertung im Backend, ein eigener Chat-Assistent im Frontend — abgesichert gegen Prompt-Injection und mit Rate-Limiting.",
    tags: ["Anthropic API", "Prompt Engineering", "Rate-Limiting"],
    icon: <Bot size={26} />,
  },
  {
    eyebrow: "Backend-as-a-Service",
    title: "Supabase & Auth",
    description:
      "Login-Systeme mit Magic Link und OAuth, Datenbank, serverseitig geprüfte Tokens statt Klartext-Passwortvergleich. Kein selbstgebautes Auth-Rad — sondern der Teil, den man nicht falsch machen darf.",
    tags: ["Supabase", "Auth", "PostgreSQL"],
    icon: <Database size={26} />,
  },
  {
    eyebrow: "Security-Mindset",
    title: "Sicherheit ist kein Nachgedanke",
    description:
      "Vor größeren Änderungen: Wer könnte das missbrauchen, reicht die Eingabevalidierung? Eigene Security-Audits, Cloudflare Turnstile gegen Bots, CSP-Header, Rate-Limits — nicht weil ein Kunde es verlangt, sondern weil es dazugehört.",
    tags: ["Security-Audits", "Cloudflare Turnstile", "CSP"],
    icon: <ShieldCheck size={26} />,
  },
  {
    eyebrow: "UI · Beschleunigung",
    title: "v0.dev fürs Frontend",
    description:
      "Der Gamechanger fürs Frontend-Tempo: KI-generierte UI-Komponenten, die ich direkt in Next.js integriere und weiterbaue — kein Figma-Klick-Overhead.",
    tags: ["v0.dev", "Next.js", "Tailwind CSS"],
    icon: <Wand2 size={26} />,
  },
  {
    eyebrow: "Sichtbarkeit · SEO & GEO",
    title: "SEO wird GEO",
    description:
      "Klassisches SEO reicht nicht mehr. Ich baue Seiten auch dafür, dass KI-Suchen wie ChatGPT oder Perplexity sie verstehen und zitieren — llms.txt, sauberes JSON-LD, gezielt freigegebene KI-Crawler statt pauschal alles zu sperren.",
    tags: ["SEO", "GEO", "JSON-LD"],
    icon: <Search size={26} />,
  },
]

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
              ADHS, Hyperfokus & KI:{" "}
              <span className="text-orange-400">Mein Weg zum Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ehrlich: Hauptschulabschluss, keine Ausbildung, vor 5 Jahren die Kurve bekommen.
              Heute nutze ich ADHS nicht als Hindernis, sondern als Hyperfokus-Motor.
              KI ist mein Navigator, der mir hilft, meine PS auf die Straße zu bringen.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
              <Flame size={18} className="text-orange-400 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Kein Fanboy-Ranking. Ich nehme das Tool, das für die jeweilige Aufgabe passt — Label ist mir egal.
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
              Interaktive Pipeline
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
              Das Agentic Arsenal
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
