"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Wer bist du und was machst du?",
    answer:
      "Ich bin Marcel Welk, KI-Nerd und Webentwickler aus Dortmund. Ich baue moderne Websites und Web-Apps – mit einem starken Fokus auf KI-Integration, SEO/GEO-Optimierung und sauberen Code. Aktuell suche ich eine Festanstellung im Bereich Webentwicklung, KI oder Cloud – dieses Portfolio ist mein Bewerbungs- und Übungsprojekt.",
  },
  {
    question: "Welche Art von Projekten machst du am liebsten?",
    answer:
      "Projekte mit KI-Integration: Vision-APIs wie bei Poke-Scan V2, eigene Chatbots wie MARCEL.AI, Automatisierung. Und alles, wo ich schnell von der Idee zum Live-Deployment komme. Für SEO/GEO-Analysen hab ich mir aus Neugier mal ein eigenes Scanning-Tool gebaut, das Websites automatisiert auf technische und rechtliche Schwachstellen prüft (SSL, Impressum, Barrierefreiheit, DSGVO). Die Idee, damit Kaltakquise zu machen, hab ich schnell wieder verworfen — Leute ungefragt anzuschreiben ist einfach nicht meins.",
  },
  {
    question: "Nimmst du Kundenaufträge an?",
    answer:
      "Nein. Ich biete keine bezahlten Dienstleistungen an – ich suche eine Festanstellung. Die Websites in meinen Referenzen sind Lernprojekte, ehrenamtliche Arbeiten oder Freundschaftsdienste, mit denen ich Erfahrung und Referenzen aufgebaut habe.",
  },
  {
    question: "Was kostet eine Website bei dir?",
    answer:
      "Nichts – ich verkaufe keine Websites. Ich kann sie bauen (siehe Projekte), aber diese Seite dient Trainings- und Übungszwecken. Wer mit mir arbeiten möchte, kann mir gerne ein Jobangebot schicken.",
  },
  {
    question: "Wie schnell setzt du Projekte um?",
    answer:
      "BewerbungsPilot ging in 2 Tagen von der Idee bis zum Live-Deployment – als bewusster Speed-Benchmark. Möglich macht das mein KI-Workflow: Planung mit Claude, UI-Generierung mit v0, Implementierung mit Claude Code.",
  },
  {
    question: "Was bedeutet GEO – und warum ist das wichtig?",
    answer:
      "GEO steht für Generative Engine Optimization. Das bedeutet: Deine Website so aufzubauen, dass KI-Systeme wie ChatGPT, Gemini oder Perplexity deine Inhalte verstehen und weiterempfehlen. Wer heute nur auf klassisches SEO setzt, verliert langfristig Sichtbarkeit.",
  },
  {
    question: "Baust du auch Websites mit KI-Funktionen?",
    answer:
      "Ja. Von KI-generierten Anschreiben über Bild-Analyse bis zu automatisierten Workflows – ich integriere KI dort, wo sie echten Mehrwert bringt, nicht nur als Buzzword.",
  },
  {
    question: "Welche KI-Tools setzt du ein?",
    answer:
      "Ich nutze immer die neuesten und besten Tools – je nachdem, was das Projekt braucht. Ob Webentwicklung, Musik, Bilder, Videos oder Icons: Ich wähle das Tool, das für den jeweiligen Anwendungsfall am stärksten ist, nicht das, das ich immer schon kannte.",
  },
  {
    question: "Warum sieht dieses Portfolio aus wie eine Agentur-Website?",
    answer:
      "Weil es gleichzeitig mein SEO/GEO-Übungsprojekt ist. Ich habe die Seite bewusst auf Sichtbarkeit für Begriffe wie Webdesign Dortmund optimiert, um klassisches SEO und Generative Engine Optimization in der Praxis zu lernen – mit strukturierten Daten, KI-Crawler-Steuerung und Datenschutz-Experimenten wie den freirubbelbaren Kontaktdaten. Das Ranking-Ergebnis ist Teil des Portfolios.",
  },
  {
    question: "Wie nehme ich Kontakt auf?",
    answer:
      "Am einfachsten per E-Mail oder über das Kontaktformular auf dieser Seite. Ich antworte in der Regel innerhalb von 24 Stunden.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
            Alles Wichtige auf einen Blick – von Preisen über KI-Tools bis zur Zusammenarbeit.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass-card glow-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-primary"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
