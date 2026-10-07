'use client'

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

const evidence = [
  { title: "Projekte", label: "Ausgewählte Repositories" },
  { title: "Verlauf", label: "Änderungen nachvollziehen" },
  { title: "KI-Workflow", label: "Umsetzung mit Agenten" },
]

export function GitHubActivity() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="github" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Einblicke in die Projektarbeit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            GitHub Aktivität
          </h2>
        </div>

        {/* Project evidence without stale hardcoded metrics */}
        <div className="mb-10 grid grid-cols-3 gap-4 sm:gap-6">
          {evidence.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/20 bg-card/30 px-3 sm:px-6 py-8 text-center">
              <p className="font-mono text-sm sm:text-xl font-bold text-primary">{item.title}</p>
              <p className="mt-2 text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-10 h-px bg-primary/10" />

        {/* Contribution Graph */}
        <div>
          {imgError ? (
            <div className="flex items-center justify-center rounded-xl py-12 font-mono text-sm border border-primary/20 text-white/25">
              Aktivitätsgrafik derzeit nicht verfügbar. Den aktuellen Verlauf findest du direkt auf GitHub.
            </div>
          ) : (
            <img // eslint-disable-line @next/next/no-img-element
              src="https://ghchart.rshah.org/f97316/celtechstarter"
              alt="GitHub Contribution Graph von celtechstarter"
              className="w-full rounded-xl opacity-85"
              style={{ maxWidth: "100%" }}
              onError={() => setImgError(true)}
            />
          )}

          {/* Link */}
          <div className="mt-4 text-center">
            <a
              href="https://github.com/celtechstarter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-primary/50 hover:text-primary transition-colors duration-200"
            >
              <Github size={13} />
              Auf GitHub ansehen
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
