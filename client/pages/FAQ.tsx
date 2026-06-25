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
