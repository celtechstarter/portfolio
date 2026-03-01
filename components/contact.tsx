import { Mail, Github } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    value: "marcel.welk87@gmail.com",
    href: "mailto:marcel.welk87@gmail.com",
    icon: <Mail size={24} />,
  },
  {
    label: "GitHub",
    value: "celtechstarter",
    href: "https://github.com/celtechstarter",
    icon: <Github size={24} />,
  },
]

export function Contact() {
  return (
    <section id="kontakt" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Kontakt
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Lass uns reden
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                {link.icon}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{link.label}</p>
                <p className="font-medium text-foreground">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
