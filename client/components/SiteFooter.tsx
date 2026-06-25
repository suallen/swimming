import { Link } from "react-router-dom";
import { Waves } from "lucide-react";
import { STROKES } from "@/data/strokes";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-white/80">
      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
              <Waves className="h-5 w-5 text-wave" />
            </div>
            <span className="font-display text-xl font-black text-white">
              Lane<span className="text-wave">Five</span>
            </span>
          </div>
          <p className="mt-4 text-sm max-w-sm text-white/60">
            A field guide to the five swimming styles every swimmer should know.
            Built by swimmers, for the lane next to yours.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-white">
            Strokes
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {STROKES.map((s) => (
              <li key={s.id}>
                <a
                  href={`/#${s.id}`}
                  className="hover:text-wave transition-colors"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-white">
            Lane Five
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/compare" className="hover:text-wave transition-colors">
                Compare
              </Link>
            </li>
            <li>
              <a href="/#coach" className="hover:text-wave transition-colors">
                Coaching
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-wave transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} LaneFive. Swim well.</div>
          <div>Made with chlorine and caffeine.</div>
        </div>
      </div>
    </footer>
  );
}
