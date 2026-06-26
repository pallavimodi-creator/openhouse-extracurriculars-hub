import Link from "next/link";
import { ChevronLeft, Music, BookOpen, MessageCircle, Pencil, Dice5, Sparkles, Grid3x3, Palette, Check, Blocks, Lightbulb, Hash, GraduationCap, Smile, Brain } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { DownloadBrochureButton } from "@/components/DownloadBrochureButton";

// What parents most want — the aspiration the programme is building toward.
const GOALS: { icon: typeof Smile; title: string; body: string }[] = [
  {
    icon: GraduationCap,
    title: "school-ready",
    body: "the focus, routines, listening and pencil-control that make starting big school feel easy.",
  },
  {
    icon: Smile,
    title: "confident & expressive",
    body: "a child who speaks up, tries new things, and shares their own ideas without fear.",
  },
  {
    icon: Brain,
    title: "strong early foundations",
    body: "early language & reading, early numeracy, and problem-solving — the academic groundwork, built through play.",
  },
];

// How the programme answers the two questions parents ask most: "how will
// my child learn to read?" and "if my child is older, what more do they get?"
const GROWS: { icon: typeof Smile; title: string; body: string }[] = [
  {
    icon: BookOpen,
    title: "how we teach reading",
    body: "reading has two halves — understanding language (comprehension) and sounding out words (decoding). at 3–5 we deliberately build the harder, slower half first: a big vocabulary, close listening, and real storytelling. younger children join in and name pictures; older ones retell whole stories and start hearing the sounds in words. so when letters arrive — at school, and in our 5+ programmes — your child reads with meaning from day one, not just barking at print.",
  },
  {
    icon: Hash,
    title: "numbers, age by age",
    body: "the same number game stretches to each child — a younger child counts to 10 and compares more / less; an older child takes away, builds patterns, and meets bigger numbers. nobody waits, and nobody is left behind.",
  },
  {
    icon: Smile,
    title: "always reaching further",
    body: "every activity meets a child by what they can do, not their birthday — so an older child is always stretched further in the very same game. that's how a 3-year-old and a 5-year-old thrive side by side.",
  },
];

// Parent-facing positioning brochure for the 3-5 at-centre programme.
// Adapted from the print brochure (at-apartment → at-centre, wonderworld →
// kitchen play).

type Strand = {
  key: string;
  dot: string;
  band: string;
  title: string;
  oneLine: string;
  image: string;
  headline: string;
  learn: string[];
  flow: { icon: typeof Music; label: string; hint: string }[];
};

const STRANDS: Strand[] = [
  {
    key: "language",
    dot: "bg-category-language",
    band: "bg-category-language/12",
    title: "language, through storytelling",
    oneLine: "listening, speaking, reading & writing — through stories.",
    image: "/brochure/language.png",
    headline: "the years language grows fastest.",
    learn: ["listening", "speaking", "reading", "vocabulary", "early writing"],
    flow: [
      { icon: Music, label: "roll & rhyme", hint: "rhyme songs" },
      { icon: BookOpen, label: "book'o'clock", hint: "story time" },
      { icon: MessageCircle, label: "wordsmiths", hint: "word games" },
      { icon: Pencil, label: "play-writes", hint: "early writing" },
      { icon: Dice5, label: "playground", hint: "skill games" },
    ],
  },
  {
    key: "art",
    dot: "bg-category-art",
    band: "bg-category-art/12",
    title: "art",
    oneLine: "fine motor, colour & the confidence to express.",
    image: "/brochure/art.png",
    headline: "where small hands learn focus and control.",
    learn: ["fine motor", "colour", "creative expression"],
    flow: [
      { icon: Sparkles, label: "art gym", hint: "fine motor" },
      { icon: Grid3x3, label: "art games", hint: "skill games" },
      { icon: Palette, label: "artiverse / artistotle", hint: "making art" },
      { icon: Check, label: "art care", hint: "tidy up" },
    ],
  },
  {
    key: "stem",
    dot: "bg-category-stem",
    band: "bg-category-stem/12",
    title: "stem",
    oneLine: "curiosity, early numeracy & problem-solving — through hands-on play.",
    image: "/brochure/stem.png",
    headline: "where curiosity turns into thinking.",
    learn: ["curiosity", "problem-solving", "number sense", "logic"],
    flow: [
      { icon: Blocks, label: "imagine playground / wonder world", hint: "build & explore" },
      { icon: Lightbulb, label: "logic lab", hint: "logic puzzles" },
      { icon: Hash, label: "number gym", hint: "number play" },
    ],
  },
];

function Header() {
  return (
    <div className="flex items-center justify-between rounded-t-2xl bg-brand-orange px-5 py-3.5 text-white">
      <p className="text-[12px] font-bold lowercase">raising curious humans, together.</p>
      <p className="text-[14px] font-extrabold lowercase">openhouse</p>
    </div>
  );
}

export default function BrochurePage() {
  return (
    <TeacherGate>
      <div className="flex flex-col items-center px-4 pt-4 pb-14">
        <div className="mb-3 flex w-full max-w-md items-center justify-between gap-2">
          <Link
            href="/plan"
            className="inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5 print:hidden"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> the 3–5 programme
          </Link>
          <DownloadBrochureButton />
        </div>

        <div id="brochure-pages" className="w-full max-w-md space-y-5">
          {/* ── COVER ── */}
          <section className="overflow-hidden rounded-2xl bg-brand-white shadow-float ring-1 ring-ink/5 print:break-inside-avoid">
            <Header />
            <div className="px-5 pb-6 pt-5">
              <p className="text-[11px] font-bold lowercase tracking-wide text-brand-orange">at-centre · ages 3–5</p>
              <h1 className="mt-1.5 text-[28px] font-extrabold lowercase leading-[1.05] text-ink">
                thoughtfully-designed, play-based learning.
              </h1>
              <span className="mt-2 block h-1.5 w-16 rounded-full bg-brand-orange/40" />
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                real skills, built through <span className="font-bold text-ink">our in-house games &amp; global play-based method</span>.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brochure/cover.png" alt="" className="mt-4 w-full rounded-xl" />
              <div className="mt-4 space-y-2">
                {STRANDS.map((s) => (
                  <div key={s.key} className={`rounded-xl ${s.band} p-3.5`}>
                    <p className="flex items-center gap-2 text-[14px] font-extrabold lowercase text-ink">
                      <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} /> {s.title}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">{s.oneLine}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── THE ASPIRATION (what parents want most) ── */}
          <section className="overflow-hidden rounded-2xl bg-brand-white shadow-float ring-1 ring-ink/5 print:break-inside-avoid">
            <Header />
            <div className="px-5 pb-6 pt-5">
              <p className="text-[11px] font-bold lowercase tracking-wide text-brand-orange">what they grow into</p>
              <h2 className="mt-1 text-[24px] font-extrabold lowercase leading-tight text-ink">ready for school, and for life.</h2>
              <span className="mt-1.5 block h-1.5 w-14 rounded-full bg-brand-orange/40" />
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                three years of thoughtful, play-based learning that add up to what matters most to you:
              </p>
              <div className="mt-4 space-y-2.5">
                {GOALS.map((g) => (
                  <div key={g.title} className="flex gap-3 rounded-xl bg-brand-cream/50 p-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                      <g.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[14px] font-extrabold lowercase text-ink">{g.title}</p>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-muted">{g.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── HOW IT GROWS — reading + age (the questions parents ask) ── */}
          <section className="overflow-hidden rounded-2xl bg-brand-white shadow-float ring-1 ring-ink/5 print:break-inside-avoid">
            <Header />
            <div className="px-5 pb-6 pt-5">
              <p className="text-[11px] font-bold lowercase tracking-wide text-brand-orange">grows with your child</p>
              <h2 className="mt-1 text-[24px] font-extrabold lowercase leading-tight text-ink">the questions parents ask us.</h2>
              <span className="mt-1.5 block h-1.5 w-14 rounded-full bg-brand-orange/40" />
              <div className="mt-4 space-y-3">
                {GROWS.map((g) => (
                  <div key={g.title} className="rounded-xl bg-brand-cream/50 p-3.5">
                    <p className="flex items-center gap-2 text-[14px] font-extrabold lowercase text-ink">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
                        <g.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      {g.title}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{g.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── ONE PAGE PER STRAND ── */}
          {STRANDS.map((s) => (
            <section key={s.key} className="overflow-hidden rounded-2xl bg-brand-white shadow-float ring-1 ring-ink/5 print:break-inside-avoid">
              <Header />
              <div className="px-5 pb-6 pt-5">
                <p className="text-[11px] font-semibold lowercase text-ink-subtle">ages 3–5</p>
                <h2 className="mt-1 flex items-center gap-2 text-[24px] font-extrabold lowercase leading-tight text-ink">
                  <span className={`h-3 w-3 rounded-full ${s.dot}`} /> {s.title}
                </h2>
                <span className={`mt-1.5 block h-1.5 w-14 rounded-full ${s.dot} opacity-40`} />
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">{s.oneLine}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt="" className="mt-4 w-full rounded-xl" />
                <p className="mt-4 text-[15px] font-extrabold text-ink">{s.headline}</p>

                <p className="mt-4 text-[11px] font-bold tracking-wide text-brand-orange">what they learn</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.learn.map((l) => (
                    <span key={l} className={`rounded-chip ${s.band} px-3 py-1 text-[12px] font-semibold text-ink`}>{l}</span>
                  ))}
                </div>

                <p className="mt-4 text-[11px] font-bold tracking-wide text-brand-orange">how the day flows</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">
                  we play the openhouse way — the day flows as games and discovery:
                </p>
                <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                  {s.flow.map((f) => (
                    <div key={f.label} className="flex items-center gap-2">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${s.band} text-ink`}>
                        <f.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[12.5px] font-semibold lowercase leading-tight text-ink">{f.label}</span>
                        <span className="block text-[10.5px] leading-tight text-ink-muted">{f.hint}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </TeacherGate>
  );
}
