import { useState } from "react";
import { Link } from "react-router-dom";
import { Waves, ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Strokes", href: "/#strokes" },
  { label: "Compare", href: "/compare" },
  { label: "Coach", href: "/#coach" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="h-9 w-9 rounded-xl bg-ocean-gradient grid place-items-center shadow-lg shadow-primary/20">
              <Waves className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="absolute -inset-1 rounded-xl bg-wave/30 blur-md -z-10 group-hover:bg-wave/50 transition" />
          </div>
          <span className="font-display text-xl font-black tracking-tight text-deep">
            Lane<span className="text-primary">Five</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#strokes"
            className="inline-flex items-center gap-2 rounded-full bg-deep text-white px-5 py-2.5 text-sm font-semibold hover:bg-ocean transition-colors"
          >
            Dive in
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-deep"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) =>
              l.href.startsWith("/#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-foreground/80"
                >
                  {l.label}
                </Link>
              ),
            )}
            <a
              href="/#strokes"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-deep text-white px-5 py-3 text-sm font-semibold"
            >
              Dive in <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
