"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const nodes = [
  { id: "01", title: "Planung", desc: "Strategie & Architektur" },
  { id: "02", title: "Realisierung", desc: "Code & Engineering" },
  { id: "03", title: "Veredelung", desc: "Assets & Design" },
  { id: "04", title: "Deployment", desc: "Live auf Vercel" },
]

export function WorkflowSteps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="px-6 py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-20 text-center">
          <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
            Der Workflow
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Mein Entwicklungs-Workflow
          </h2>
        </div>

        <div ref={ref} className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {nodes.map((node, i) => (
            <div key={node.id} className="relative flex-1 w-full md:w-auto flex flex-col items-center">

              {/* Connecting Line */}
              {i < nodes.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] right-[-40%] h-[1px] bg-white/10 z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.2, ease: "easeInOut" }}
                    className="h-full bg-primary origin-left shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                  />
                  {/* Flowing particle */}
                  <motion.div
                    className="absolute top-[-2px] w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#f97316]"
                    animate={{ x: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                  />
                </div>
              )}

              {/* Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center group cursor-default"
              >
                {/* Glowing Orb */}
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-black border border-white/20 mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-sm" />
                  <span className="relative font-mono text-sm font-bold text-primary">{node.id}</span>
                </div>

                <h3 className="mb-1 font-semibold text-foreground text-center group-hover:text-primary transition-colors">{node.title}</h3>
                <p className="text-xs text-muted-foreground text-center font-mono">{node.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
