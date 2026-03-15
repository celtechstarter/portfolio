import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingThoughts } from "@/components/floating-thoughts"
import { GitHubActivity } from "@/components/github-activity"

export default function Home() {
  return (
    <>
      <FloatingThoughts />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <GitHubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
