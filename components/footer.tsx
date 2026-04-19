import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black py-8 mt-auto relative z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} Marcel Welk.
        </p>
        <nav className="flex items-center gap-8">
          <Link 
            href="/impressum" 
            className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            Impressum
          </Link>
          <Link 
            href="/datenschutz" 
            className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  )
}
