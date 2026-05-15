import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Waves,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Strokes", href: "/#strokes" },
    { label: "Compare", href: "/#compare" },
    { label: "Coach", href: "/#coach" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
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
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                l.href === "/contact"
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/#strokes"
            className="inline-flex items-center gap-2 rounded-full bg-deep text-white px-5 py-2.5 text-sm font-semibold hover:bg-ocean transition-colors"
          >
            Dive in
            <ArrowRight className="h-4 w-4" />
          </Link>
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
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#strokes"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-deep text-white px-5 py-3 text-sm font-semibold"
            >
              Dive in <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const strokes = ["Freestyle", "Butterfly", "Backstroke", "Breaststroke", "Sidestroke"];
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
            {strokes.map((s) => (
              <li key={s}>
                <Link
                  to={`/#${s.toLowerCase()}`}
                  className="hover:text-wave transition-colors"
                >
                  {s}
                </Link>
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
              <Link to="/#compare" className="hover:text-wave transition-colors">
                Compare
              </Link>
            </li>
            <li>
              <Link to="/#coach" className="hover:text-wave transition-colors">
                Coaching
              </Link>
            </li>
            <li>
              <Link to="/#faq" className="hover:text-wave transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-wave">
                Contact
              </Link>
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

const INFO_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@lanefive.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Aquatic Centre, Lane 5",
    sub: "Open water & pool coaching",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 6 am – 8 pm",
    sub: "Weekend sessions available",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ocean-gradient text-white py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 left-16 h-64 w-64 rounded-full bg-wave/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
          </div>
          <div className="container relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/80 mb-6">
              <Mail className="h-3.5 w-3.5" />
              Get in touch
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-balance">
              We&apos;d love to{" "}
              <span className="text-wave">hear from you</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto">
              Questions about technique, coaching inquiries, or just want to talk
              swimming? Drop us a line.
            </p>
          </div>
        </section>

        {/* Info cards */}
        <section className="py-16 bg-foam/40">
          <div className="container">
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {INFO_CARDS.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white border border-border/60 shadow-sm p-6 flex flex-col items-center text-center gap-3"
                >
                  <div className="h-12 w-12 rounded-2xl bg-ocean-gradient grid place-items-center shadow-md shadow-primary/20">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">
                    {label}
                  </div>
                  <div className="font-display font-bold text-deep">{value}</div>
                  <div className="text-sm text-foreground/60">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 md:py-32">
          <div className="container max-w-2xl">
            <div className="text-center mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Send a message
              </div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-black text-deep">
                What&apos;s on your mind?
              </h2>
            </div>

            {submitted ? (
              <div className="rounded-3xl bg-white border border-border/60 shadow-lg p-12 flex flex-col items-center gap-5 text-center">
                <div className="h-16 w-16 rounded-full bg-foam grid place-items-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-black text-deep">
                  Message sent!
                </h3>
                <p className="text-foreground/70 max-w-sm">
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours — now go swim some laps.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-semibold text-deep hover:bg-foam/60 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white border border-border/60 shadow-lg p-8 md:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-deep"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-deep"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-deep"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  >
                    <option value="" disabled>
                      Choose a topic…
                    </option>
                    <option value="coaching">Coaching inquiry</option>
                    <option value="technique">Technique question</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Site feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-deep"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind…"
                    className="rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-deep text-white px-6 py-3.5 text-sm font-semibold hover:bg-ocean transition-colors shadow-lg shadow-deep/20"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
