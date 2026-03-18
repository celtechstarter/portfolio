"use client"

import { useRef } from "react"
import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="kontakt" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card/50 p-8 text-center lg:p-12"
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">Kontakt</p>
          <h2 className="mb-3 text-2xl font-bold text-foreground">Interesse geweckt?</h2>
          <p className="mb-8 text-muted-foreground">
            Ich freue mich über eine Nachricht — per E-Mail, GitHub oder LinkedIn.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:marcel.welk87@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail size={16} />
              E-Mail schreiben
            </a>
            <a
              href="https://github.com/celtechstarter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Github size={16} />
              GitHub ansehen
            </a>
            <a
              href="https://linkedin.com/in/marcel-welk-572a412ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="/lebenslauf.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <FileText size={16} />
              Lebenslauf (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
