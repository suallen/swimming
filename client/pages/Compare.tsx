import { STROKES, REVIEWS } from "@/data/strokes";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-sun text-sun"
              : "fill-transparent text-muted-foreground/30",
          )}
        />
      ))}
    </div>
  );
}

function CompareTable() {
  const max = Math.max(...STROKES.map((s) => s.speed));
  return (
    <section className="py-24 md:py-32 bg-foam/40">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Side by side
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-black text-deep text-balance">
            Which stroke wins where?
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Elite top speeds, calorie burn and the muscles each stroke really
            sets on fire — at a glance.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white border border-border/60 shadow-xl shadow-deep/5 overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-12 items-center gap-4 px-6 py-4 bg-foam/60 border-b border-border/60">
            <div className="col-span-12 sm:col-span-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Stroke
            </div>
            <div className="hidden sm:block col-span-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Speed (elite)
            </div>
            <div className="hidden sm:block col-span-2 text-right text-xs font-bold uppercase tracking-wider text-muted-foreground">
              km/h
            </div>
            <div className="hidden sm:block col-span-2 text-right text-xs font-bold uppercase tracking-wider text-muted-foreground">
              kcal / 30m
            </div>
          </div>
          <div className="divide-y divide-border/60">
            {STROKES.map((s) => (
              <div
                key={s.id}
                className="grid grid-cols-12 items-center gap-4 px-6 py-5 hover:bg-foam/40 transition-colors"
              >
                <div className="col-span-12 sm:col-span-3 flex items-center gap-3">
                  <span className="text-2xl">{s.pattern}</span>
                  <div>
                    <div className="font-display font-bold text-deep text-lg">
                      {s.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {s.difficulty}
                    </div>
                  </div>
                </div>
                <div className="col-span-9 sm:col-span-5">
                  <div className="h-3 rounded-full bg-foam overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        s.accent,
                      )}
                      style={{ width: `${(s.speed / max) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2 text-right font-display font-black text-deep text-lg">
                  {s.speed}
                  <span className="text-xs text-muted-foreground font-sans font-medium">
                    {" "}
                    km/h
                  </span>
                </div>
                <div className="hidden sm:block col-span-2 text-right">
                  <span className="text-sm font-semibold text-deep">
                    {s.burn}
                  </span>
                  <span className="text-xs text-muted-foreground"> kcal</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Community voices
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black text-deep text-balance">
            What swimmers say
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Real takes from real swimmers on what each stroke actually feels
            like — not just the textbook answer.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {STROKES.map((stroke) => {
            const reviews = REVIEWS[stroke.id] ?? [];
            return (
              <div
                key={stroke.id}
                className="rounded-3xl bg-white border border-border/60 shadow-xl shadow-deep/5 overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div
                  className={cn(
                    "px-6 py-5 bg-gradient-to-r text-white flex items-center gap-3",
                    stroke.accent,
                  )}
                >
                  <span className="text-3xl">{stroke.pattern}</span>
                  <div>
                    <div className="font-display text-xl font-black">
                      {stroke.name}
                    </div>
                    <div className="text-xs font-medium text-white/70">
                      {stroke.tagline}
                    </div>
                  </div>
                </div>

                {/* Review tiles */}
                <div className="divide-y divide-border/60 flex-1">
                  {reviews.map((review, i) => (
                    <div key={i} className="px-6 py-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-deep text-sm">
                          {review.author}
                        </span>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Compare() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <CompareTable />
        <ReviewsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
