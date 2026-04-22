"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Sparkles, Brain, Briefcase, Send, Lock, Headset, Construction, X, Globe } from "lucide-react"

type ProjectStatus = "aktiv" | "fertig" | "in_arbeit"

interface Project {
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  image?: string
  liveUrl?: string
  githubUrl?: string
  githubPrivate?: boolean
  comingSoon?: boolean
  wip?: boolean
  status?: ProjectStatus
  badge?: string
}

const aiProjects: Project[] = [
  {
    title: "Poke-Scan V2",
    description:
      "Pokemon-Karten Scanner. Lovable-Abhängigkeiten komplett entfernt, OCR durch echte KI Vision ersetzt (Tag 03).",
    tags: ["React", "TypeScript", "KI Vision", "Vercel"],
    icon: <Sparkles size={24} />,
    image: "/projects/pokescan.png",
    liveUrl: "https://poke-scan-v2.vercel.app",
    githubUrl: "https://github.com/celtechstarter/poke-scan-v2",
    status: "aktiv",
  },
  {
    title: "BewerbungsPilot",
    description:
      "KI-gestützter Bewerbungsgenerator. Lebenslauf hochladen, Stellenanzeige einfügen, fertiges Anschreiben in 5 Minuten.",
    tags: ["React", "TypeScript", "KI", "Vercel"],
    icon: <Send size={24} />,
    image: "/projects/bewerbungspilot.png",
    liveUrl: "https://bewerbungspilot.vercel.app/",
    githubPrivate: true,
    status: "fertig",
  },
  {
    title: "CELDESK",
    description:
      "IT-Service-Portal mit Ticketsystem, Asset-Verwaltung, Wissensdatenbank und Onboarding-Checklisten. Inkl. Dashboard, Dark Mode und Detail-Panels — wie Zendesk, selbst gebaut.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: <Headset size={24} />,
    image: "/projects/celdesk.png",
    wip: true,
    status: "in_arbeit",
  },
  {
    title: "Marcel CV Boost",
    description:
      "Barrierearme Bewerbungshilfe-Plattform. Upload von Bewerbungsunterlagen, Buchungssystem für Beratungstermine und Admin-Dashboard. DSGVO-konform mit Supabase-Backend.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: <Briefcase size={24} />,
    image: "/projects/cvboost.png",
    liveUrl: "https://marcel-cv-boost.lovable.app",
    githubUrl: "https://github.com/celtechstarter/marcel-cv-boost",
    status: "fertig",
  },
]

const webProjects: Project[] = [
  {
    title: "Coaching Knobling",
    description:
      "Moderner Webauftritt für ein Coaching-Unternehmen. Fokus auf seriöses Design und klare Nutzerführung.",
    tags: ["Next.js", "Tailwind CSS", "UI/UX", "Vercel"],
    icon: <Globe size={24} />,
    image: "/projects/coachknobling.png",
    liveUrl: "https://coaching-knobling.vercel.app/",
    status: "fertig",
    badge: "Freelance Projekt",
  },
  {
    title: "Hawaii Cards",
    description:
      "Landingpage und digitaler Katalog für ein Sammelkarten-Business. Visuell ansprechende Produktpräsentation.",
    tags: ["Webentwicklung", "Responsive Design", "Asset-Optimierung"],
    icon: <Globe size={24} />,
    image: "/projects/hawaiicards.png",
    liveUrl: "https://hawaii-cards.vercel.app/",
    status: "fertig",
    badge: "Freelance Projekt",
  },
  {
    title: "Gesunder Fuß",
    description:
      "Lokaler Webauftritt für eine Praxis im Gesundheitsbereich. Fokus auf Übersichtlichkeit und lokale Sichtbarkeit.",
    tags: ["Lokale SEO", "Clean Design", "Mobile First"],
    icon: <Globe size={24} />,
    image: "/projects/gesunderfuss.png",
    liveUrl: "https://gesunderfuss.vercel.app/",
    status: "fertig",
    badge: "Freelance Projekt",
  },
]

function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "aktiv") {
    return (
      <div className="flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5" fill="#1D9E75" opacity="0.25">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="7" cy="7" r="3.5" fill="#1D9E75" />
        </svg>
        <span className="font-mono text-xs" style={{ color: "#1D9E75" }}>aktiv</span>
      </div>
    )
  }

  if (status === "fertig") {
    return (
      <div className="flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="6" stroke="#378ADD" strokeWidth="1.5" />
          <path d="M4.5 7L6.5 9L9.5 5" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-mono text-xs" style={{ color: "#378ADD" }}>fertig</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5" stroke="#EF9F27" strokeWidth="1.5" strokeDasharray="3.5 2">
          <animateTransform attributeName="transform" type="rotate" from="0 7 7" to="360 7 7" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
      <span className="font-mono text-xs" style={{ color: "#EF9F27" }}>in arbeit</span>
    </div>
  )
}

export function Projects() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="projekte" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl space-y-24">

        {/* Sektion 1: KI & App Development */}
        <div>
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              KI & App Development
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Eigene Projekte & Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onImageClick={setLightboxImage}
              />
            ))}
          </div>
        </div>

        {/* Sektion 2: Webdesign & Referenzen */}
        <div>
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              Webdesign & Referenzen
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Kundenprojekte
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onImageClick={setLightboxImage}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Bild schließen"
          >
            <X size={28} />
          </button>
          <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1280}
              height={720}
              className="h-auto max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({ project, onImageClick }: { project: Project; onImageClick: (img: { src: string; alt: string }) => void }) {
  return (
    <div className="glass-card glow-border group flex flex-col overflow-hidden rounded-2xl h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]">
      {/* Thumbnail */}
      <div
        className={`relative w-full shrink-0 overflow-hidden bg-black/60 aspect-video flex items-center justify-center ${project.image ? "cursor-pointer" : ""}`}
        onClick={() => project.image && onImageClick({ src: project.image, alt: project.title })}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50 z-20 pointer-events-none">
              <span className="rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100 border border-white/10 translate-y-4 group-hover:translate-y-0">
                Vergrößern
              </span>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-primary/50 transition-all duration-500 group-hover:text-primary group-hover:scale-110">
            {project.icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 z-10 relative bg-gradient-to-b from-transparent to-black/20">
        {/* Badge */}
        {project.badge && (
          <span className="mb-3 inline-block w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 font-mono text-[10px] text-primary uppercase tracking-wider">
            {project.badge}
          </span>
        )}

        {/* Title + Status Badge */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.status && <div className="mt-1"><StatusBadge status={project.status} /></div>}
        </div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[10px] sm:text-xs text-muted-foreground backdrop-blur-sm group-hover:border-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {!project.comingSoon && !project.wip && (
          <div className="flex items-center gap-4 border-t border-border/50 pt-4 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all hover:text-primary hover:gap-2"
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
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all hover:text-foreground hover:gap-2"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.githubPrivate && (
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/50 cursor-not-allowed select-none">
                <Lock size={12} />
                Privat
              </span>
            )}
          </div>
        )}
        {project.wip && (
          <div className="flex items-center gap-2 border-t border-border/50 pt-4 mt-auto">
            <Construction size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">In Entwicklung</span>
          </div>
        )}
      </div>
    </div>
  )
}
