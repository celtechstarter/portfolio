import {
  Monitor,
  Code2,
  Bot,
  Cloud,
  Award,
} from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

interface Certificate {
  title: string
  issuer: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Systeme",
    icon: <Monitor size={20} />,
    skills: ["Windows", "Linux", "VPS", "Docker", "SSH"],
  },
  {
    title: "Web Dev",
    icon: <Code2 size={20} />,
    skills: ["React", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    title: "KI-Tools",
    icon: <Bot size={20} />,
    skills: ["Claude", "ChatGPT", "Perplexity", "Gemini"],
  },
  {
    title: "Cloud",
    icon: <Cloud size={20} />,
    skills: ["AWS", "Azure", "Git", "CI/CD"],
  },
]

const certificates: Certificate[] = [
  { title: "Cloud & Web Expert", issuer: "Techstarter" },
  { title: "LPIC-1", issuer: "Linux" },
  { title: "AWS re/Start", issuer: "Amazon Web Services" },
  { title: "Azure Fundamentals", issuer: "Microsoft" },
]

export function Skills() {
  return (
    <section id="skills" className="bg-card/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Technologien
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Skills & Tools
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div>
          <div className="mb-8 flex items-center justify-center gap-3">
            <Award size={20} className="text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Zertifikate
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="rounded-lg border border-border/50 bg-card px-5 py-4 text-center transition-all duration-300 hover:border-primary/30"
              >
                <p className="font-medium text-foreground">{cert.title}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
