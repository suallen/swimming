import { Link } from "react-router-dom";
import {
  Waves,
  Timer,
  Flame,
  Gauge,
  HeartPulse,
  Trophy,
  ArrowRight,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { STROKES, type Stroke } from "@/data/strokes";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ocean-gradient text-white">
      {/* decorative bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-wave/30 blur-3xl animate-wave-float" />
        <div className="absolute bottom-10 right-1/4 h-56 w-56 rounded-full bg-accent/30 blur-3xl animate-wave-float [animation-delay:2s]" />
        <div className="absolute top-1/3 right-10 h-24 w-24 rounded-full bg-sun/40 blur-2xl animate-wave-float [animation-delay:4s]" />
      </div>

      <div className="container relative pt-20 pb-32 md:pt-28 md:pb-44">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ring-1 ring-white/20">
              <Star className="h-3.5 w-3.5 fill-sun text-sun" />
              The definitive guide · 2025 edition
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-balance">
              Five strokes.
              <br />
              <span className="bg-gradient-to-r from-foam via-wave to-sun bg-clip-text text-transparent">
                One open lane.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl text-balance">
              From the explosive butterfly to the quietly efficient sidestroke —
              meet the five swimming styles every swimmer should know, ranked by
              what they actually do for your body.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#strokes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-deep px-7 py-4 text-base font-bold shadow-xl shadow-deep/30 hover:bg-foam transition-colors"
              >
                Explore the five
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/compare"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 px-7 py-4 text-base font-semibold hover:bg-white/20 transition-colors"
              >
                Compare them
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-[17px] text-white/70">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-sun" />
                Olympic-grade technique
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-accent" />
                Full-body, zero-impact
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-wave" />
                Up to 550 kcal / 30 min
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-deep/40">
                <img
                  src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1200&q=80"
                  alt="Swimmer underwater"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white text-deep rounded-2xl p-5 shadow-2xl shadow-deep/30 max-w-[220px]">
                <div className="text-3xl font-display font-black">8.6</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  km/h elite freestyle
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-foam overflow-hidden">
                  <div className="h-full w-[86%] bg-ocean-gradient" />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-sun text-deep rounded-2xl p-4 shadow-xl rotate-3">
                <div className="text-xs font-bold uppercase">Top stroke</div>
                <div className="font-display text-xl font-black">Freestyle</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-background"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}

function StrokeCard({ stroke }: { stroke: Stroke }) {
  const isReverse = stroke.rank % 2 === 0;
  return (
    <article
      id={stroke.id}
      className={cn(
        "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center group",
        isReverse && "lg:[&>div:first-child]:order-2",
      )}
    >
      <div className="relative">
        <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-deep/20">
          <img
            src={stroke.image}
            alt={stroke.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-tr opacity-50 mix-blend-multiply",
              stroke.accent,
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
          <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur text-deep px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            <span>{stroke.pattern}</span> #{stroke.rank}
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="text-xs uppercase tracking-[0.2em] opacity-80">
              Best for
            </div>
            <div className="font-semibold">{stroke.bestFor}</div>
          </div>
        </div>
        <div
          className={cn(
            "absolute -z-10 -inset-6 rounded-[2.5rem] bg-gradient-to-br opacity-30 blur-2xl",
            stroke.accent,
          )}
        />
      </div>

      <div>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-7xl md:text-8xl font-black text-primary/20 leading-none">
            0{stroke.rank}
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {stroke.difficulty}
          </span>
        </div>
        <h3 className="mt-2 font-display text-4xl md:text-5xl font-black text-deep">
          {stroke.name}
        </h3>
        <p className="mt-2 text-lg text-primary font-semibold italic">
          {stroke.tagline}
        </p>
        <p className="mt-5 text-base md:text-lg text-foreground/70 leading-relaxed">
          {stroke.description}
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <Stat icon={<Gauge />} label="Top speed" value={`${stroke.speed} km/h`} />
          <Stat icon={<Flame />} label="Calories / 30m" value={stroke.burn} />
          <Stat icon={<Timer />} label="Skill" value={stroke.difficulty} />
        </div>
      </div>
    </article>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-border/60 p-4 shadow-sm">
      <div className="h-8 w-8 rounded-lg bg-foam grid place-items-center text-primary [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
        {label}
      </div>
      <div className="font-display text-lg font-bold text-deep leading-tight">
        {value}
      </div>
    </div>
  );
}

function CoachCTA() {
  return (
    <section id="coach" className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ocean-gradient text-white p-10 md:p-16">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sun/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
                <HeartPulse className="h-3.5 w-3.5" />
                Personal program
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-black text-balance">
                Pick a stroke. We'll build the plan.
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg">
                Six weeks of guided sessions, drills and pace targets — built
                around the stroke that matches your goal.
              </p>
              <a
                href="#strokes"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-deep px-7 py-4 text-base font-bold hover:bg-foam transition-colors"
              >
                Start with a stroke
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "12k+", v: "Swimmers coached" },
                { k: "4.9★", v: "Average review" },
                { k: "6 wks", v: "To real progress" },
                { k: "100%", v: "Money-back" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-6"
                >
                  <div className="font-display text-4xl font-black">{s.k}</div>
                  <div className="mt-1 text-sm text-white/70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <section id="strokes" className="py-24 md:py-32 bg-wave-radial">
          <div className="container">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                The countdown
              </div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-black text-blue-600 text-balance">
                The five best swimming styles, ranked.
              </h2>
              <p className="mt-4 text-lg text-foreground/70 max-w-xl">
                We weighed speed, calorie burn, technique, joint impact and
                real-world usefulness. Here's the lane assignment.
              </p>
            </div>
            <div className="mt-20 space-y-28 md:space-y-40">
              {STROKES.map((s) => (
                <StrokeCard key={s.id} stroke={s} />
              ))}
            </div>
          </div>
        </section>
        <CoachCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
