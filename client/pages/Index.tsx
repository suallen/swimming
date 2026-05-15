import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Waves,
  Timer,
  Flame,
  Gauge,
  HeartPulse,
  Trophy,
  ArrowRight,
  Menu,
  X,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Stroke = {
  id: string;
  rank: number;
  name: string;
  tagline: string;
  description: string;
  speed: number; // km/h elite
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  burn: string; // kcal / 30 min
  bestFor: string;
  image: string;
  accent: string; // tailwind class for accent color
  pattern: string;
};

const STROKES: Stroke[] = [
  {
    id: "freestyle",
    rank: 1,
    name: "Freestyle",
    tagline: "The fastest way through water",
    description:
      "Also called the front crawl, freestyle is the swimmer's go-to. A continuous flutter kick paired with alternating arm strokes delivers unmatched speed, smooth breathing, and effortless distance.",
    speed: 8.6,
    difficulty: "Beginner",
    burn: "350–450",
    bestFor: "Distance · Speed · Triathlon",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80",
    accent: "from-wave to-accent",
    pattern: "🏊",
  },
  {
    id: "butterfly",
    rank: 2,
    name: "Butterfly",
    tagline: "Power, rhythm, raw athleticism",
    description:
      "Butterfly demands an undulating dolphin kick and simultaneous over-water arm recovery. It's the most physically demanding stroke—and arguably the most beautiful to watch.",
    speed: 8.0,
    difficulty: "Expert",
    burn: "450–550",
    bestFor: "Power · Core · Competition",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80",
    accent: "from-sun to-accent",
    pattern: "🦋",
  },
  {
    id: "backstroke",
    rank: 3,
    name: "Backstroke",
    tagline: "Float, breathe, glide",
    description:
      "The only competitive stroke swum on your back. Continuous breathing, a relaxed body line, and alternating arm pulls make it perfect for posture, lung capacity and recovery days.",
    speed: 7.2,
    difficulty: "Intermediate",
    burn: "300–400",
    bestFor: "Posture · Recovery · Spine",
    image:
      "https://images.unsplash.com/photo-1622629797619-c100e3e67e2e?auto=format&fit=crop&w=1400&q=80",
    accent: "from-wave to-primary",
    pattern: "🌊",
  },
  {
    id: "breaststroke",
    rank: 4,
    name: "Breaststroke",
    tagline: "The thinking swimmer's stroke",
    description:
      "Frog kick, glide, sweep, breathe. Breaststroke rewards timing over force and is the easiest stroke to master at a relaxed pace—while remaining brutally technical at the elite level.",
    speed: 6.4,
    difficulty: "Intermediate",
    burn: "250–350",
    bestFor: "Technique · Endurance · Beginners",
    image:
      "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=1400&q=80",
    accent: "from-accent to-primary",
    pattern: "🐸",
  },
  {
    id: "sidestroke",
    rank: 5,
    name: "Sidestroke",
    tagline: "Quiet, efficient, lifesaving",
    description:
      "An asymmetric stroke swum on one side using a scissor kick. Less competitive, more practical—it's the stroke of lifeguards, open-water swimmers and anyone who wants to swim forever.",
    speed: 5.0,
    difficulty: "Beginner",
    burn: "200–300",
    bestFor: "Endurance · Rescue · Open water",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80",
    accent: "from-deep to-ocean",
    pattern: "🌀",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Strokes", href: "#strokes" },
    { label: "Compare", href: "#compare" },
    { label: "Coach", href: "#coach" },
    { label: "FAQ", href: "#faq" },
  ];
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#strokes"
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
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#strokes"
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
              <a
                href="#compare"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 px-7 py-4 text-base font-semibold hover:bg-white/20 transition-colors"
              >
                Compare them
              </a>
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

function Compare() {
  const max = Math.max(...STROKES.map((s) => s.speed));
  return (
    <section id="compare" className="py-24 md:py-32 bg-foam/40">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Side by side
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black text-deep text-balance">
            Which stroke wins where?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Elite top speeds, calorie burn and the muscles each stroke really
            sets on fire — at a glance.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white border border-border/60 shadow-xl shadow-deep/5 overflow-hidden">
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
                <div className="col-span-9 sm:col-span-7">
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
                    {" "}km/h
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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

function FAQ() {
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
  return (
    <section id="faq" className="py-24 md:py-32 bg-foam/40">
      <div className="container max-w-4xl">
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Frequently asked
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black text-deep">
            Before you jump in
          </h2>
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
              <p className="mt-4 text-foreground/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
            A field guide to the five swimming styles every swimmer should
            know. Built by swimmers, for the lane next to yours.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-white">
            Strokes
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {STROKES.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-wave transition-colors">
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
            <li><a href="#compare" className="hover:text-wave">Compare</a></li>
            <li><a href="#coach" className="hover:text-wave">Coaching</a></li>
            <li><a href="#faq" className="hover:text-wave">FAQ</a></li>
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

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
        <Compare />
        <CoachCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
