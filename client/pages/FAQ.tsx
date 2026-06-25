import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const faqs = [
  {
    q: "Which stroke should a complete beginner learn first?",
    a: "Freestyle. The continuous flutter kick and alternating arm pull translate well to every other stroke, and side-breathing teaches the rhythm beginners need most.",
  },
  {
    q: "Is butterfly really that hard?",
    a: "Yes — but the difficulty is mostly timing, not strength. Once the dolphin kick syncs with the arm recovery, butterfly suddenly clicks. Most swimmers can learn a clean 25m within a few weeks.",
  },
  {
    q: "What stroke burns the most calories?",
    a: "Butterfly, by a wide margin — up to 550 kcal in 30 minutes at race pace. Freestyle is a close second when swum continuously for distance.",
  },
  {
    q: "Is sidestroke still useful today?",
    a: "Absolutely. It's the stroke of choice for lifeguards and long open-water sessions because it's quiet, sustainable, and lets you keep one eye above water.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-24 md:py-32 bg-foam/40">
          <div className="container max-w-4xl">
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Frequently asked
              </div>
              <h1 className="mt-3 font-display text-4xl md:text-5xl font-black text-deep">
                Before you jump in
              </h1>
              <p className="mt-4 text-lg text-foreground/70">
                Quick answers to the questions swimmers ask before choosing a
                stroke to learn, train, or race.
              </p>
            </div>
            <blockquote className="mt-12 relative rounded-3xl bg-ocean-gradient text-white px-8 py-10 md:px-12 overflow-hidden">
              <div className="pointer-events-none absolute -top-6 -left-4 text-[10rem] font-display font-black text-white/10 leading-none select-none">
                "
              </div>
              <p className="relative font-display text-2xl md:text-3xl font-bold italic leading-snug text-balance">
                Water is the one substance from which the Earth can conceal nothing. Sooner or later, everything ends up in the sea.
              </p>
              <footer className="relative mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/20" />
                <cite className="not-italic text-sm font-semibold text-white/70">
                  Jacques-Yves Cousteau
                </cite>
              </footer>
            </blockquote>

            <div className="mt-12 space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-white border border-border/60 p-6 shadow-sm open:shadow-md transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-display text-lg md:text-xl font-bold text-deep pr-6">
                      {f.q}
                    </span>
                    <span className="h-8 w-8 grid place-items-center rounded-full bg-foam text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
