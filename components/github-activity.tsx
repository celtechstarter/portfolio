'use client'

import { useState } from "react"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

// TODO: Werte aus https://github.com/celtechstarter manuell aktualisieren
const stats = [
  { value: "15", label: "Public Repos" },
  { value: "200+", label: "Commits 2026" },
  { value: "4", label: "Projekte deployed" },
]

export function GitHubActivity() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="github" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="mb-2 font-mono text-sm tracking-widest uppercase"
            style={{ color: "rgba(207, 147, 54, 0.7)" }}
          >
            Open Source
          </p>
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl text-balance"
            style={{ color: "rgba(207, 147, 54, 1)" }}
          >
            GitHub Aktivität
          </h2>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-mono text-3xl font-bold sm:text-4xl md:text-5xl"
                style={{ color: "rgba(207, 147, 54, 0.95)" }}
              >
                {stat.value}
              </p>
              <p
                className="mt-2 font-mono text-xs tracking-wider"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-10 h-px"
          style={{ background: "rgba(207, 147, 54, 0.12)" }}
        />

        {/* Contribution Graph */}
        <div>
          {imgError ? (
            <div
              className="flex items-center justify-center rounded-xl py-12 font-mono text-sm"
              style={{
                border: "1px solid rgba(207, 147, 54, 0.15)",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              GitHub Aktivität laden...
            </div>
          ) : (
            <Image
              src="https://ghchart.rshah.org/CF9336/celtechstarter"
              alt="GitHub Contribution Graph von celtechstarter"
              width={800}
              height={128}
              className="w-full rounded-xl"
              style={{ filter: "opacity(0.85)" }}
              onError={() => setImgError(true)}
            />
          )}

          {/* Link */}
          <div className="mt-4 text-center">
            <a
              href="https://github.com/celtechstarter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs transition-colors duration-200"
              style={{ color: "rgba(207, 147, 54, 0.45)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(207, 147, 54, 0.9)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(207, 147, 54, 0.45)")
              }
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
