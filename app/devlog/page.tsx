import { FileText } from "lucide-react"

interface DevlogEntry {
  day: number
  date: string
  description: string
  pdf: string
}

const entries: DevlogEntry[] = [
  {
    day: 1,
    date: "18.02.2026",
    description: "Projekt-Start, React Setup",
    pdf: "/docs/Daily_PokeScan_Tag1_18-02-2026.pdf",
  },
  {
    day: 2,
    date: "19.02.2026",
    description: "KI-Vision Integration",
    pdf: "/docs/Daily_PokeScan_Tag2_19-02-2026.pdf",
  },
  {
    day: 3,
    date: "20.02.2026",
    description: "NVIDIA NIM API, Fallbacks",
    pdf: "/docs/Daily_PokeScan_Tag3_20-02-2026.pdf",
  },
  {
    day: 4,
    date: "21.02.2026",
    description: "Mobile & PWA Support",
    pdf: "/docs/Daily_PokeScan_Tag4_21-02-2026.pdf",
  },
  {
    day: 5,
    date: "22.02.2026",
    description: "Kamera-Integration, Bugfixes",
    pdf: "/docs/Daily_PokeScan_Tag5_22-02-2026.pdf",
  },
  {
    day: 6,
    date: "23.02.2026",
    description: "Preissystem-Aufbau",
    pdf: "/docs/Daily_PokeScan_Tag6_23-02-2026.pdf",
  },
  {
    day: 7,
    date: "24.02.2026",
    description: "Präzisions-Optimierung",
    pdf: "/docs/Daily_PokeScan_Tag7_24-02-2026.pdf",
  },
]

export default function DevlogPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Poke-Scan V2
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Development Log
          </h1>
          <p className="text-muted-foreground">
            Hier dokumentiere ich meinen Entwicklungsprozess Tag für Tag.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <a
              key={entry.day}
              href={entry.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {String(entry.day).padStart(2, "0")}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <FileText size={16} />
                </div>
              </div>

              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">
                  {entry.date}
                </p>
                <p className="font-medium text-foreground">{entry.description}</p>
              </div>

              <p className="mt-auto font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                PDF öffnen →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
