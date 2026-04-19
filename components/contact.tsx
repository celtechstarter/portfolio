"use client"

import { useRef, useState } from "react"
import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { motion, useInView } from "framer-motion"

// Base64 encoded email for bot protection
const ENCODED_EMAIL = "bWFyY2VsLndlbGs4N0BnbWFpbC5jb20="

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [showEmail, setShowEmail] = useState(false)

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!showEmail) {
      e.preventDefault()
      setShowEmail(true)
    }
  }

  return (
    <section id="kontakt" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card/50 p-8 text-center lg:p-12 relative overflow-hidden"
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase relative z-10">Kontakt</p>
          <h2 className="mb-3 text-2xl font-bold text-foreground relative z-10">Interesse geweckt?</h2>
          <p className="mb-8 text-muted-foreground relative z-10">
            Ich freue mich über eine Nachricht — per E-Mail, GitHub oder LinkedIn.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <a
              href={showEmail ? `mailto:${atob(ENCODED_EMAIL)}` : "#"}
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              <Mail size={16} />
              {showEmail ? atob(ENCODED_EMAIL) : "E-Mail anzeigen"}
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
            
            {/* Simple honeypot protection for the PDF link. 
                Instead of href="/lebenslauf.pdf" which crawlers easily follow, 
                we use a click handler to trigger the download programmatically. */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/lebenslauf.pdf';
                link.download = 'Lebenslauf_Marcel_Welk.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <FileText size={16} />
              Lebenslauf (PDF)
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
