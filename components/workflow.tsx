"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Planung mit Claude",
    text: "Architektur, Strategie und Problemlösung. Claude denkt, ich entscheide.",
  },
  {
    number: "02",
    title: "UI mit v0.dev",
    text: "Detaillierte Prompts generieren professionelle UI-Komponenten in Minuten.",
  },
  {
    number: "03",
    title: "Code mit Claude Code",
    text: "Implementierung, Git-Operationen und Deployment. Vom Plan zum fertigen Produkt.",
  },
]

export function WorkflowSteps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
            methodik
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Meine Arbeitsweise
          </h2>
        </div>

        <div ref={ref} className="relative grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
              >
                <div className="mb-4">
                  <span className="rounded-full border border-primary/30 px-3 py-0.5 font-mono text-sm text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </motion.div>

              {/* Arrow connector between cards — desktop only */}
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 select-none text-lg text-muted-foreground/25 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
