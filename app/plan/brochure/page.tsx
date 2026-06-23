import Link from "next/link";
import { ChevronLeft, Music, BookOpen, MessageCircle, Pencil, Dice5, Sparkles, Grid3x3, Palette, Check, Blocks, Lightbulb, Hash } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";

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
  flow: { icon: typeof Music; label: string }[];
  favourite: string;
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
      { icon: Music, label: "roll & rhyme" },
      { icon: BookOpen, label: "book'o'clock" },
      { icon: MessageCircle, label: "wordsmiths" },
      { icon: Pencil, label: "play-writes" },
      { icon: Dice5, label: "playground" },
    ],
    favourite: "rhyme house — name a word, and everyone adds one that rhymes.",
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
      { icon: Sparkles, label: "art gym" },
      { icon: Grid3x3, label: "art games" },
      { icon: Palette, label: "artiverse / artistotle" },
      { icon: Check, label: "art care" },
    ],
    favourite: "mix it up — match, compare and predict colours.",
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
      { icon: Blocks, label: "imagine playground / kitchen play" },
      { icon: Lightbulb, label: "logic lab" },
      { icon: Hash, label: "number gym" },
    ],
    favourite: "imagine playground — build curiosity by hand with blocks, ramps and more.",
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
        <Link
          href="/plan"
          className="mb-3 inline-flex w-fit items-center gap-1.5 self-start rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> the 3–5 programme
        </Link>

        <div className="w-full max-w-md space-y-5">
          {/* ── COVER ── */}
          <section className="overflow-hidden rounded-2xl bg-brand-white shadow-float ring-1 ring-ink/5">
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

          {/* ── ONE PAGE PER STRAND ── */}
          {STRANDS.map((s) => (
            <section key={s.key} className="overflow-hidden rounded-2xl bg-brand-white shadow-float ring-1 ring-ink/5">
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

                <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-brand-orange">what they learn</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.learn.map((l) => (
                    <span key={l} className={`rounded-chip ${s.band} px-3 py-1 text-[12px] font-semibold text-ink`}>{l}</span>
                  ))}
                </div>

                <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-brand-orange">how the day flows</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">
                  we play the openhouse way — the day flows as games and discovery:
                </p>
                <div className="mt-2.5 grid grid-cols-2 gap-2">
                  {s.flow.map((f) => (
                    <div key={f.label} className="flex items-center gap-2">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${s.band} text-ink`}>
                        <f.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="text-[12.5px] font-semibold lowercase text-ink">{f.label}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[12.5px] leading-relaxed text-ink-muted">
                  <span className="font-bold text-brand-orange">a favourite:</span> {s.favourite}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </TeacherGate>
  );
}
