import { ArrowDown, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
          IT-Techniker & Developer
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
          Marcel Welk
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Ich baue Web-Apps mit KI-Tools. 7 Jahre Gameserver-Admin, jetzt Cloud
          & Web Development.
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
      </div>
    </section>
  )
}
