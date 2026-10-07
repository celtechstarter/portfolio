"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
export function Navbar({ basePath = "" }: { basePath?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = pathname === "/" ? basePath : "/";
  const links = [
    { label: "Projekte", href: home + "#projekte" },
    { label: "Arbeitsweise", href: "/ki-workflow" },
    { label: "Über mich", href: home + "#ueber-mich" },
    { label: "Lebenslauf", href: "/lebenslauf" },
  ];
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Hauptnavigation">
        <a href="/" className="brand" aria-label="Marcel Welk – Startseite">
          <span className="brand-mark">
            M<span>W</span>
          </span>
          <span className="brand-name">Marcel Welk</span>
        </a>
        <div className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a className="button button-primary" href={home + "#kontakt"}>
            Kontakt <ArrowUpRight size={16} />
          </a>
        </div>
        <button
          className="mobile-menu-toggle"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation shell"
          aria-label="Mobile Navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="button button-primary"
            href={home + "#kontakt"}
            onClick={() => setOpen(false)}
          >
            Kontakt aufnehmen <ArrowUpRight size={16} />
          </a>
          <p>Dortmund · Remote bevorzugt</p>
        </nav>
      )}
    </header>
  );
}
