"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowDown, Github, ChevronDown, ChevronUp, Info } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle dot grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex flex-col items-center gap-2 rounded-xl border border-border/20 bg-emerald-500/5 px-5 py-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-[13px] font-medium text-emerald-400">Verfügbar für neue Herausforderungen</span>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {["IT-Support", "Cloud Admin", "Linux Sysadmin", "Junior DevOps"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border/30 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60">Dortmund · Vor Ort bevorzugt, Remote möglich</p>
        </motion.div>

        {/* Profilbild */}
        <div className="mb-6 flex justify-center">
          <div className="relative h-[150px] w-[150px] rounded-full ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
            <Image
              src="/cel.jpg"
              alt="Marcel Welk"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
          Builder. Problemlöser. KI Nerd.
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
          Marcel Welk
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Ich baue Webapps, löse IT Probleme und benutze KI nicht als Spielerei, sondern als tägliches Werkzeug. Mein Kopf braucht ständig neue Probleme, und in der IT gehen die zum Glück nie aus.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projekte"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Meine Projekte
            <ArrowDown size={16} />
          </a>
          <a
            href="https://github.com/celtechstarter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        {/* Über mich - Collapsible */}
        <AboutToggle />
      </div>
    </section>
  )
}

function AboutToggle() {
  const [paretoOpen, setParetoOpen] = useState(false)

  return (
    <details className="group mx-auto mt-10 max-w-lg">
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

      <div className="mt-4 space-y-4 text-left text-sm leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300">
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
            onClick={() => setParetoOpen(!paretoOpen)}
            className="inline-flex items-center gap-1 rounded border border-primary/30 px-1.5 py-0.5 text-xs text-primary/70 hover:border-primary hover:text-primary transition-colors font-mono"
            aria-expanded={paretoOpen}
          >
            <Info size={10} />
            Was ist das?
          </button>
        </p>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            paretoOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-xs leading-relaxed space-y-2">
            <p className="font-medium text-foreground/80">Das Pareto Prinzip (die 80/20 Regel)</p>
            <p>
              Das Pareto Prinzip sagt, dass man mit 20% des Aufwands 80% des Ergebnisses erreicht. In der IT bedeutet das: 20% des Codes sind für 80% der Funktionalität verantwortlich. 20% der Bugs verursachen 80% der Abstürze. Wer die richtigen 20% findet, spart massiv Zeit.
            </p>
            <p>
              Ich wende das doppelt an: Die 20% der 20% finden, also den absoluten Kern. Inspiriert hat mich dabei auch die Arbeitsweise von Peter Steinberger, dem Gründer von PSPDFKit und OpenClaw, der heute bei OpenAI arbeitet. Sein Ansatz: Nicht jede Codezeile selber lesen, sondern KI Agenten orchestrieren und sich auf Architektur und das Gesamtbild konzentrieren. Schnell ausliefern statt endlos perfektionieren. Diese Denkweise hab ich für mich übernommen.
            </p>
          </div>
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
