import { ExternalLink, Github, Sparkles, Brain, Briefcase, Send, Lock } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  liveUrl?: string
  githubUrl?: string
  githubPrivate?: boolean
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: "Poke-Scan V2",
    description:
      "Pokemon-Karten Scanner mit KI-Vision. Foto machen, Preis erfahren. Läuft auf Desktop und Handy.",
    tags: ["React", "TypeScript", "NVIDIA NIM", "Vercel"],
    icon: <Sparkles size={24} />,
    liveUrl: "https://poke-scan-v2.vercel.app",
    githubUrl: "https://github.com/celtechstarter/poke-scan-v2",
  },
  {
    title: "BewerbungsPilot",
    description:
      "KI-gestützter Bewerbungsgenerator. Lebenslauf hochladen, Stellenanzeige einfügen, fertiges Anschreiben in 5 Minuten.",
    tags: ["React", "TypeScript", "KI", "Vercel"],
    icon: <Send size={24} />,
    liveUrl: "https://bewerbungspilot.vercel.app/",
    githubPrivate: true,
  },
  {
    title: "Marcel CV Boost",
    description:
      "Barrierearme Bewerbungshilfe-Plattform. Upload von Bewerbungsunterlagen, Buchungssystem für Beratungstermine und Admin-Dashboard. DSGVO-konform mit Supabase-Backend.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: <Briefcase size={24} />,
    liveUrl: "https://marcel-cv-boost.lovable.app",
    githubUrl: "https://github.com/celtechstarter/marcel-cv-boost",
  },
  {
    title: "PromptCrafter",
    description:
      "KI-Lernplattform für Prompt Engineering. Entwickelt beim $40k Hackathon in 48 Stunden.",
    tags: ["React", "Node.js", "Gemini API", "Vercel"],
    icon: <Brain size={24} />,
    liveUrl: "https://promptcrafter.vercel.app",
    githubUrl: "https://github.com/celtechstarter/promptcrafter",
  },
]

export function Projects() {
  return (
    <section id="projekte" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Meine Projekte
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
        project.comingSoon ? "opacity-60" : ""
      }`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {project.icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {!project.comingSoon && (
        <div className="flex items-center gap-4 border-t border-border pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
          {project.githubPrivate && (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/40 cursor-not-allowed select-none">
              <Github size={14} />
              <Lock size={12} />
              Privat
            </span>
          )}
        </div>
      )}
    </div>
  )
}