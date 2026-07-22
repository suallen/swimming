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
    <header className="sticky top-0 z-50 border-b border-[#79f2d0]/20 bg-[#063f3b]/95 text-white shadow-lg shadow-[#063f3b]/20 backdrop-blur-md">
      <div className="container flex h-[4.5rem] items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#79f2d0] text-[#063f3b] shadow-lg shadow-[#79f2d0]/20 transition-transform group-hover:-rotate-6">
              <Waves className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span className="absolute -inset-1 -z-10 rounded-2xl bg-[#79f2d0]/40 blur-md transition group-hover:bg-[#79f2d0]/70" />
          </div>
          <span className="font-display text-xl font-black tracking-tight text-white">
            Lane<span className="text-[#79f2d0]">Five</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#79f2d0]"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#79f2d0]"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/#strokes"
            className="inline-flex items-center gap-2 rounded-full bg-[#79f2d0] px-5 py-2.5 text-sm font-semibold text-[#063f3b] transition-colors hover:bg-white"
          >
            Dive in
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="-mr-2 rounded-xl p-2 text-[#79f2d0] transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#79f2d0]/20 bg-[#063f3b] md:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {links.map((l) =>
              l.href.startsWith("/#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-white/80 transition-colors hover:text-[#79f2d0]"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-white/80 transition-colors hover:text-[#79f2d0]"
                >
                  {l.label}
                </Link>
              ),
            )}
            <a
              href="/#strokes"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#79f2d0] px-5 py-3 text-sm font-semibold text-[#063f3b]"
            >
              Dive in <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
