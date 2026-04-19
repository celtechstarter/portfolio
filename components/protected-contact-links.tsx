"use client"

import { Phone, Mail, Globe, Github, Download } from "lucide-react"

export function ProtectedContactLinks() {
  return (
    <>
      {/* Contact row */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 md:justify-start">
        <button
          onClick={() => {
            window.location.href = `tel:${atob("KzQ5MTUxMTE1ODk5MjY=")}`;
          }}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer"
        >
          <Phone size={13} />
          +49 151 11589926
        </button>
        <button
          onClick={() => {
            window.location.href = `mailto:${atob("bWFyY2VsLndlbGs4N0BnbWFpbC5jb20=")}`;
          }}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer"
        >
          <Mail size={13} />
          {atob("bWFyY2VsLndlbGs4N0BnbWFpbC5jb20=")}
        </button>
        <a
          href="https://marcel-welk.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Globe size={13} />
          marcel-welk.vercel.app
        </a>
        <a
          href="https://github.com/celtechstarter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Github size={13} />
          github.com/celtechstarter
        </a>
      </div>

      {/* PDF download */}
      <div className="mt-7 flex justify-center md:justify-start">
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/lebenslauf.pdf';
            link.download = 'Lebenslauf_Marcel_Welk.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
        >
          <Download size={15} />
          PDF herunterladen
        </button>
      </div>
    </>
  )
}
