"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowDown, Github, ChevronDown, ChevronUp, Info, Cpu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
  const slogan = "Builder. Problemlöser. KINerd."

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
              <span className="text-[13px] font-medium text-emerald-400">Verfügbar für neue Herausforderungen</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['Webentwicklung', 'KI-Automatisierung', 'Rapid Prototyping', 'Junior DevOps', 'Cloud Basics', 'IT-Support', 'Freelance'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/30 bg-black/20 px-2 py-1 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60">Dortmund · Remote bevorzugt, vor Ort möglich</p>
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
              src="/cel.jpg"
              alt="Marcel Welk"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* AI Typing Slogan */}
        <div className="mb-4 h-6 flex justify-center items-center">
          <p className="font-mono text-sm tracking-widest text-primary uppercase flex items-center">
            {slogan.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 0.5 + index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
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
          Fokussiert auf effiziente Entwicklung und moderne KI-Workflows. Ich schließe die Lücke zwischen Idee und fertigem Deployment.
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
  const [paretoOpen, setParetoOpen] = useState(false)

  return (
    <details className="group mx-auto mt-12 max-w-lg relative z-20">
      <summary className="flex cursor-pointer items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary list-none">
        <span className="group-open:hidden inline-flex items-center gap-1.5">
          Mehr anzeigen
          <ChevronDown size={14} />
        </span>
        <span className="hidden group-open:inline-flex items-center gap-1.5">
          Weniger anzeigen
          <ChevronUp size={14} />
        </span>
      </summary>

      <div className="mt-6 space-y-4 text-left text-sm leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300 relative z-20">
        <p>
          Mein Kopf arbeitet am besten wenn er an fünf Sachen gleichzeitig denkt. Das klingt chaotisch, ist es manchmal auch, aber genau das macht mich gut in dem was ich tue. Ich mach abends den Rechner aus, leg mich hin, und nach zwei Stunden fällt mir plötzlich ein wie ich das Problem von vorhin lösen kann. Dann steh ich wieder auf, setz mich an den PC und bin im Tunnel. Im positiven Sinn. Da fließen tausend Ideen gleichzeitig und ich muss die alle festhalten bevor sie wieder weg sind.
        </p>

        <p>
          Mein Werkzeug dafür: KI. Ob Claude, ChatGPT, Gemini, DeepSeek oder Open Source Modelle wie Llama und Kimi, ist mir erstmal egal. Ich schau mir an, welches Modell für mein aktuelles Problem oder Projekt am meisten Sinn macht, was es kostet und wo die Stärken liegen. Dann nehme ich einfach das richtige Werkzeug. Sich in neue Tools und Modelle einzuarbeiten ist für mich kein Aufwand, sondern normal. Das Feld ändert sich ständig und genau das finde ich gut.
        </p>

        <p>
          Und dann passiert was Interessantes. Beim Schreiben meiner Gedanken fallen mir meistens schon die Lösungen ein. Die KI ist dabei weniger Codegenerator und mehr Sparringspartner. Ich nutze oft mehrere KIs parallel mit dem gleichen Problem, weil jedes Modell anders denkt. Am Ende vom Tag nehme ich mir von allem das Beste, kombiniere es und baue daraus etwas das besser ist als jede einzelne Antwort.
        </p>

        <p>
          Mein Arbeitsprinzip: Schnell bauen, schnell testen, schnell lernen. Mein IT Lehrer hat mir mal das Pareto Prinzip erklärt und ich hab es für mich weitergedreht. Nicht Perfektion, sondern Impact. Erst den Kern treffen, dann schauen ob mehr nötig ist. Meistens reicht der Kern.{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setParetoOpen(!paretoOpen);
            }}
            className="inline-flex items-center gap-1 rounded border border-primary/30 px-1.5 py-0.5 text-xs text-primary/70 hover:border-primary hover:text-primary transition-colors font-mono relative z-30"
            aria-expanded={paretoOpen}
          >
            <Info size={10} />
            Was ist das?
          </button>
        </p>

        <div className="overflow-hidden">
          <AnimatePresence>
            {paretoOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-md p-5 text-xs leading-relaxed space-y-3 my-4 shadow-[inset_0_0_20px_rgba(249,115,22,0.05)]">
                  <p className="font-medium text-primary">Das Pareto Prinzip (die 80/20 Regel)</p>
                  <p className="text-muted-foreground">
                    Das Pareto Prinzip sagt, dass man mit 20% des Aufwands 80% des Ergebnisses erreicht. In der IT bedeutet das: 20% des Codes sind für 80% der Funktionalität verantwortlich. 20% der Bugs verursachen 80% der Abstürze. Wer die richtigen 20% findet, spart massiv Zeit.
                  </p>
                  <p className="text-muted-foreground">
                    Ich wende das doppelt an: Die 20% der 20% finden, also den absoluten Kern. Inspiriert hat mich dabei auch die Arbeitsweise von Peter Steinberger, dem Gründer von PSPDFKit und OpenClaw, der heute bei OpenAI arbeitet. Sein Ansatz: Nicht jede Codezeile selber lesen, sondern KI Agenten orchestrieren und sich auf Architektur und das Gesamtbild konzentrieren. Schnell ausliefern statt endlos perfektionieren. Diese Denkweise hab ich für mich übernommen.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p>
          Für meine eigenen Projekte heißt das: Code auf GitHub pushen. Wenn es funktioniert, gut. Wenn nicht, dann kommt der Teil der mir am meisten Spaß macht. Problemlösung. Wie krieg ich das hin? Woran liegt es? Da geh ich voll drauf. Das ist so was von mein Ding. In Teams und professionellen Umgebungen arbeite ich natürlich strukturierter, das sind verschiedene Welten.
        </p>

        <p>
          Ich setze meine Projekte auf verschiedenen Wegen um. Manchmal lokal mit VSCode und Claude Code, manchmal auf meinem eigenen VPS Server, deployed wird über Vercel, Code liegt auf GitHub. Ich probiere ständig neue Tools aus und lerne dabei. Nicht weil ich muss, sondern weil ich Bock drauf habe.
        </p>

        <p>
          Ich hab mir über die Jahre viel Wissen angeeignet und vieles davon auch wieder vergessen. Aber wenn ich das Wissen brauche, weiß ich wo ich es finde und wie ich es abfrage. Man kann sich nicht alles merken. Muss man auch nicht. Wenn man einmal die Grundlagen verstanden hat, reicht das aus um jedes Problem kreativ zu lösen.
        </p>

        <p>
          Ich suche keinen Arbeitgeber der alte Strukturen abarbeitet. Ich suche ein Unternehmen das modern denkt, neue Wege ausprobiert und mit jemandem klarkommt, der manchmal fünf Ideen gleichzeitig hat. Wenn das passt, dann kriegt das Unternehmen einen Mitarbeiter der nicht aufhört Probleme zu lösen bis sie gelöst sind.
        </p>
      </div>
    </details>
  )
}
