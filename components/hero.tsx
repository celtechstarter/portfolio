"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowDown, Github, ChevronDown, ChevronUp, Cpu } from "lucide-react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href: string
  target?: string
  rel?: string
}

function MagneticButton({ children, className, href, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export function Hero() {
  const slogan = "Menschenzentrierte Web- & KI-Lösungen."

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Aurora Background */}
      <div className="pointer-events-none absolute inset-0 aurora-bg opacity-40 mix-blend-screen" />
      
      {/* Subtle dot grid background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center pt-20">
        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 inline-flex flex-col items-center gap-2 rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-xl px-6 py-4 shadow-[0_0_30px_rgba(249,115,22,0.15)]"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[13px] font-medium text-emerald-400">Offen für eine Festanstellung</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['KI-Produktentwicklung', 'Automatisierung', 'Prototyping', 'APIs', 'Multi-Agent-Workflows', 'Testkonzeption'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/30 bg-black/20 px-2 py-1 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Werkzeuge: Claude Code · Claude Cowork · ChatGPT · Lovable · n8n</p>
          <p className="text-xs text-muted-foreground/60">Dortmund · Remote bevorzugt</p>
        </motion.div>

        {/* Profilbild */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative h-[150px] w-[150px] rounded-full ring-2 ring-primary/40 ring-offset-4 ring-offset-background shadow-[0_0_40px_rgba(249,115,22,0.2)]">
            <Image
              src="/marcel-welk-portrait.png"
              alt="Marcel Welk"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* AI Typing Slogan */}
        <div className="mb-4 min-h-6 flex justify-center items-center">
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
              {slogan}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: 0.5 }}
              className="inline-block w-2 h-4 bg-primary ml-1"
            />
          </p>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-6 text-6xl font-bold tracking-tight text-foreground md:text-8xl text-balance bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40"
        >
          Marcel Welk
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          Ich konzipiere menschenzentrierte Webanwendungen und steuere ihre Umsetzung mit KI-Werkzeugen und Agenten — von der Anforderung bis zur nutzbaren Lösung.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap"
        >
          <MagneticButton
            href="#projekte"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
          >
            Meine Projekte
            <ArrowDown size={16} />
          </MagneticButton>
          
          <MagneticButton
            href="/ki-workflow"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-primary/10 backdrop-blur-md px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
          >
            <Cpu size={16} />
            Zum KI-Workflow
          </MagneticButton>

          <MagneticButton
            href="https://github.com/celtechstarter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-white/5 backdrop-blur-md px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Github size={16} />
            GitHub
          </MagneticButton>
        </motion.div>

        {/* Über mich - Collapsible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <AboutToggle />
        </motion.div>
      </div>
    </section>
  )
}

function AboutToggle() {


  return (
    <details className="group mx-auto mt-12 max-w-lg relative z-20">
      <summary className="flex cursor-pointer items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary list-none">
        <span className="group-open:hidden inline-flex items-center gap-1.5">
          Über mich
          <ChevronDown size={14} />
        </span>
        <span className="hidden group-open:inline-flex items-center gap-1.5">
          Über mich schließen
          <ChevronUp size={14} />
        </span>
      </summary>

      <div className="mt-6 space-y-4 text-left text-sm leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300 relative z-20">
        <p>
          Ich bin Marcel Welk aus Dortmund. Mein Schwerpunkt ist KI-gestützte Produktentwicklung: Ich strukturiere Anforderungen, plane verständliche Nutzerabläufe und koordiniere die Umsetzung mit KI-Werkzeugen. So entstehen Webanwendungen und Automatisierungen, die konkrete Aufgaben erleichtern.
        </p>
        <p>
          Ich teile Aufgaben in überschaubare Arbeitspakete auf, formuliere Anweisungen und wähle Modelle passend zur Aufgabe. Claude Cowork, Claude Code und ChatGPT nutze ich auch parallel für Umsetzung, Gegenprüfung und Fehlersuche. Die Programmierung erfolgt KI-gestützt; mein Beitrag liegt in Konzeption, Steuerung und der Bewertung der Ergebnisse anhand der Anforderungen.
        </p>
        <p>
          Mein Therapieplatz Finder unterstützt Menschen bei Recherche, Kontaktaufnahme und Dokumentation während der Therapieplatzsuche. Die Anwendung wird derzeit im ambulant betreuten Wohnen für die Arbeit mit Klient:innen erprobt. Rückmeldungen aus dieser Erprobung und der Austausch mit einem Psychotherapeuten helfen mir, die Anwendung weiterzuentwickeln.
        </p>
        <p>
          Aus meiner Weiterbildung bringe ich Grundlagen in JavaScript, Python, Frontend- und Backend-Frameworks sowie Cloud-Technologien mit. Darauf und auf meiner Gameserver- und VPS-Praxis von 2017 bis 2024 habe ich meinen eigenen KI-Workflow aufgebaut. Ich suche eine Festanstellung in KI-gestützter Produktentwicklung oder Automatisierung, bevorzugt remote — mit Fokus auf Konzeption, Workflows und Qualitätssicherung statt manueller Programmierung.
        </p>
      </div>
    </details>
  )
}
