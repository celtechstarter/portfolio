import Image from "next/image"
import { ArrowDown, Github, ChevronDown, ChevronUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
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
          Angehender IT-Fachmann
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
          Marcel Welk
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          7 Jahre Gameserver-Administration, Weiterbildung in Cloud & Web Development, und seitdem bau ich alles was mir in die Finger kommt.
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
  return (
    <details className="group mx-auto mt-10 max-w-lg">
      <summary className="flex cursor-pointer items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary list-none">
        <span className="group-open:hidden inline-flex items-center gap-1.5">
          Über mich
          <ChevronDown size={14} />
        </span>
        <span className="hidden group-open:inline-flex items-center gap-1.5">
          Weniger anzeigen
          <ChevronUp size={14} />
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300">
        Mit 16 hab ich angefangen Gameserver zu betreiben — Linux, Netzwerke und Troubleshooting hab ich mir dabei selbst beigebracht. Nach einer zertifizierten Weiterbildung in Cloud & Web Development (AWS, Azure, LPIC-1) baue ich jetzt Webapps mit React und TypeScript. Mein Ziel: ein Einstieg in den IT-Support, wo ich technisches Verständnis und Problemlösungskompetenz zusammenbringen kann.
      </p>
    </details>
  )
}