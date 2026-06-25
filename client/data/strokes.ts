export type Stroke = {
  id: string;
  rank: number;
  name: string;
  tagline: string;
  description: string;
  speed: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  burn: string;
  bestFor: string;
  image: string;
  accent: string;
  pattern: string;
};

export type Review = {
  author: string;
  rating: number; // 1–5
  comment: string;
};

export const STROKES: Stroke[] = [
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

export const REVIEWS: Record<string, Review[]> = {
  freestyle: [
    {
      author: "Maya K.",
      rating: 5,
      comment:
        "Switched from breaststroke and never looked back. My lap times dropped by 20% in just a month.",
    },
    {
      author: "Tom R.",
      rating: 5,
      comment:
        "Perfect for long open-water swims. Once the breathing rhythm clicks, it's almost meditative.",
    },
    {
      author: "Priya S.",
      rating: 4,
      comment:
        "Great all-rounder. The bilateral breathing took a few weeks to nail but it was worth the effort.",
    },
  ],
  butterfly: [
    {
      author: "Jake M.",
      rating: 5,
      comment:
        "Hardest stroke to learn by far, but nothing compares to the full-body power you feel mid-pool.",
    },
    {
      author: "Sofia L.",
      rating: 4,
      comment:
        "Absolutely gruelling. I can manage 50m before my arms give out — but I'm addicted to improving.",
    },
    {
      author: "Chris D.",
      rating: 5,
      comment:
        "Best core workout in the water, period. My coach calls it 'flying' and that's exactly what it feels like.",
    },
  ],
  backstroke: [
    {
      author: "Elena P.",
      rating: 5,
      comment:
        "Great for my lower back issues. Staring at the ceiling while gliding through the water is surprisingly peaceful.",
    },
    {
      author: "Ben W.",
      rating: 4,
      comment:
        "Fantastic recovery stroke. I alternate backstroke and freestyle sets and leave the pool feeling balanced.",
    },
    {
      author: "Aisha N.",
      rating: 5,
      comment:
        "Improved my posture noticeably after six weeks. My physio actually recommended it.",
    },
  ],
  breaststroke: [
    {
      author: "Carlos V.",
      rating: 5,
      comment:
        "The glide phase is pure joy. Once you nail the timing it feels incredibly efficient.",
    },
    {
      author: "Hannah F.",
      rating: 4,
      comment:
        "I'm a total beginner and this was the easiest to pick up. The frog kick feels natural.",
    },
    {
      author: "Leo T.",
      rating: 4,
      comment:
        "Elite breaststroke is a completely different beast. My technique coach changed my race times by 3 seconds.",
    },
  ],
  sidestroke: [
    {
      author: "Dana O.",
      rating: 5,
      comment:
        "I swim two hours of open water every weekend with this stroke. Never gets tiring — it's incredibly efficient.",
    },
    {
      author: "Mike B.",
      rating: 5,
      comment:
        "Trained as a lifeguard and this is all we use. Practical, low-fatigue, and you can tow someone while doing it.",
    },
    {
      author: "Iris C.",
      rating: 4,
      comment:
        "Underrated for fitness. The scissor kick engages my hips way more than I expected.",
    },
  ],
};
