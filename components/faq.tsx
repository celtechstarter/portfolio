"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Wer bist du und was machst du?",
    answer:
      "Ich bin Marcel Welk, KI-Nerd und Webentwickler aus Dortmund. Ich baue moderne Websites und Web-Apps – mit einem starken Fokus auf KI-Integration, SEO/GEO-Optimierung und sauberen Code.",
  },
  {
    question: "Welche Art von Projekten machst du am liebsten?",
    answer:
      "Mein Schwerpunkt liegt auf One-Pagern für Unternehmen, die eine veraltete Website haben oder kaum in Google und KI-Suchen sichtbar sind. Ich habe dafür sogar ein eigenes Scanning-Tool entwickelt, das den genauen SEO- und GEO-Status einer Website analysiert – bevor ich überhaupt anfange.",
  },
  {
    question: "Arbeitest du auch für kleine Unternehmen oder Selbstständige?",
    answer:
      "Ja, gerade kleine Unternehmen und Selbstständige profitieren am meisten. Viele haben veraltete Websites ohne SEO, keine KI-Sichtbarkeit und zahlen trotzdem zu viel für schlechte Ergebnisse. Genau da helfe ich.",
  },
  {
    question: "Was kostet eine Website bei dir?",
    answer:
      "Die Preise sind individuell und hängen vom Umfang ab. Ein One-Pager startet günstiger als ein mehrseitiges Projekt mit Backend. Schreib mir einfach – ich schaue mir deine aktuelle Situation an und mache dir ein faires Angebot.",
  },
  {
    question: "Wie lange dauert die Umsetzung einer Website?",
    answer:
      "Ein One-Pager ist oft in 1–2 Wochen fertig. Komplexere Projekte mit Buchungssystem, Backend oder KI-Integration dauern entsprechend länger. Nach dem ersten Gespräch bekommst du eine realistische Einschätzung.",
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
    question: "Kann ich meine bestehende Website verbessern lassen, ohne sie komplett neu zu bauen?",
    answer:
      "In vielen Fällen ja. Mit meinem Scanning-Tool analysiere ich zuerst, wo die größten Schwachstellen liegen – SEO, Ladezeit, Struktur, GEO-Readiness. Danach entscheiden wir gemeinsam, was sinnvoll ist.",
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
