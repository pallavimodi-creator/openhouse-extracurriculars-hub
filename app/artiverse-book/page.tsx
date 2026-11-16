"use client";

import Link from "next/link";

/**
 * The artiverse book — ONE integrated, phone-readable book. Content and
 * images live together: for every project you see the skill (the objective),
 * then three worked examples — easy · medium · hard, each a DIFFERENT product
 * — to make it obvious the skill is the point, not the product. The educator
 * how-to sits right underneath. No separate flipbook + chapter notes.
 */

type Level = "easy" | "medium" | "hard";
type Example = { level: Level; product: string };
type Project = {
  slug: string; // matches /artiverse-book/examples/<slug>-<level>.png
  num: number;
  title: string;
  skill: string;
  child: string;
  ramp: string;
  examples: Example[];
  prep?: string[];
  steps: string[];
};
type Chapter = {
  key: "paper" | "crayon" | "paint";
  emoji: string;
  name: string;
  why: string;
  tint: string;
  projects: Project[];
};

const CHAPTERS: Chapter[] = [
  {
    key: "paper",
    emoji: "📄",
    name: "paper — folding, tearing & sticking",
    why: "Paper builds finger strength and a feel for shape and space. The objective is always the fold or the tear — never the animal it turns into.",
    tint: "bg-segment-yellow/25 ring-segment-yellow/50",
    projects: [
      {
        slug: "01-accordion",
        ramp: "easy → hard: more folds and more parts.",
        num: 1,
        title: "accordion folding",
        skill: "the accordion fold — a strip folded back and forth.",
        child: "fold a paper strip back and forth, like a concertina, then build something from it.",
        examples: [
          { level: "easy", product: "a caterpillar (one folded strip + a face)" },
          { level: "medium", product: "a giraffe (folded neck + head + spots)" },
          { level: "hard", product: "a peacock (a folded fan tail + body)" },
        ],
        prep: ["Paper strips (5–10 cm wide)", "Animal-face stencils", "Glue + crayons"],
        steps: ["Show folding back and forth.", "Help children press each fold.", "Stick the folded strip as a body, add a face and decorate."],
      },
      {
        slug: "02-circles",
        ramp: "easy → hard: more folds and more pieces.",
        num: 2,
        title: "circles folding",
        skill: "folding a circle — fold it, stick some flat, leave some open.",
        child: "fold paper circles in half, stick some down flat and leave some open like wings or fins.",
        examples: [
          { level: "easy", product: "a ladybug (one folded circle for wings)" },
          { level: "medium", product: "a fishbowl of folded-circle fish" },
          { level: "hard", product: "an owl from many stacked circles" },
        ],
        prep: ["Pre-cut circles in a few sizes"],
        steps: ["Children fold circles into halves or flaps.", "Stick some parts flat, leave some open.", "Arrange the circles into an object."],
      },
      {
        slug: "03-mosaics",
        ramp: "easy → hard: a bigger shape, smaller torn pieces.",
        num: 3,
        title: "mosaics",
        skill: "tear & place — tear paper small and fill a shape.",
        child: "tear coloured paper into little pieces and fill up a shape with them.",
        examples: [
          { level: "easy", product: "a heart, filled with torn pieces" },
          { level: "medium", product: "an elephant outline, filled in" },
          { level: "hard", product: "a rainbow peacock, many tiny pieces" },
        ],
        prep: ["Pre-torn coloured paper", "Simple outline sheets"],
        steps: ["Children tear more pieces.", "Fill the shape with pieces.", "Encourage their own colour choices."],
      },
      {
        slug: "04-loops",
        ramp: "easy → hard: more loops, more shaping.",
        num: 4,
        title: "loops & chains",
        skill: "looping — curl a strip into a loop and link them up.",
        child: "curl a paper strip into a loop, glue the ends, then link the loops into a chain.",
        examples: [
          { level: "easy", product: "a short caterpillar (4 loops + face)" },
          { level: "medium", product: "a bunny with a looped-chain body" },
          { level: "hard", product: "a long two-colour snake of loops" },
        ],
        prep: ["Short paper strips"],
        steps: ["Children curl strips into loops.", "Join loops into a chain.", "Add a face or details."],
      },
    ],
  },
  {
    key: "crayon",
    emoji: "🖍️",
    name: "crayons",
    why: "Crayons build grip control and intention — free marks first, then staying in the lines, then discovering a new colour.",
    tint: "bg-brand-orange/15 ring-brand-orange/30",
    projects: [
      {
        slug: "05-doodling",
        ramp: "easy → hard: more marks, denser patterns.",
        num: 5,
        title: "doodling",
        skill: "free mark-making — loops, lines, scribbles that go anywhere.",
        child: "make any marks you like — loops, dots, zig-zags — and fill the page.",
        examples: [
          { level: "easy", product: "a few simple lines and dots" },
          { level: "medium", product: "swirls, zig-zags and loops" },
          { level: "hard", product: "a whole page of patterns" },
        ],
        steps: ["Children make lines, dots and patterns.", "Fill the page with free marks and texture."],
      },
      {
        slug: "06-colouring",
        ramp: "easy → hard: smaller, more detailed areas to stay inside.",
        num: 6,
        title: "colouring",
        skill: "colouring inside a shape — filling it in and staying in.",
        child: "colour a shape in, trying to stay inside the lines.",
        examples: [
          { level: "easy", product: "one big shape, filled" },
          { level: "medium", product: "a few shapes, each a colour" },
          { level: "hard", product: "a detailed flower, part by part" },
        ],
        steps: ["Draw a few simple shapes.", "Children fill the colour inside, staying in the lines."],
      },
      {
        slug: "07-mixing",
        ramp: "easy → hard: more colours mixed, across a scene.",
        num: 7,
        title: "colour mixing",
        skill: "layering colour — one colour over another to make a new one.",
        child: "colour one colour over another and watch a new colour appear.",
        examples: [
          { level: "easy", product: "blue over yellow → green, in one circle" },
          { level: "medium", product: "a few shapes, each a new mix" },
          { level: "hard", product: "a blended sunset sky" },
        ],
        steps: ["Use two colours in one shape.", "Overlap them and watch the new colour appear."],
      },
    ],
  },
  {
    key: "paint",
    emoji: "🎨",
    name: "paint",
    why: "Paint is about movement, pressure and expression — a press, a fingertip, a dab, a dot, a blow.",
    tint: "bg-segment-blue/20 ring-segment-blue/40",
    projects: [
      {
        slug: "08-hand-painting",
        ramp: "easy → hard: more prints, combined into one picture.",
        num: 8,
        title: "hand painting",
        skill: "whole-hand printing — press a painted hand and lift it off.",
        child: "paint your hand, press it on the paper, lift it off — then build a picture from the print.",
        examples: [
          { level: "easy", product: "one handprint peacock" },
          { level: "medium", product: "a handprint tree with dab leaves" },
          { level: "hard", product: "a bouquet of handprint flowers" },
        ],
        prep: ["Paint trays", "Large sheets"],
        steps: ["Children dip a hand in paint.", "Press it flat and lift.", "Build an image from the prints."],
      },
      {
        slug: "09-finger-painting",
        ramp: "easy → hard: more finger-work, a whole scene.",
        num: 9,
        title: "finger painting",
        skill: "finger control in paint — spread, swirl and dot with fingertips.",
        child: "use your fingertips to dot, swirl and spread the paint.",
        examples: [
          { level: "easy", product: "scattered finger dots" },
          { level: "medium", product: "a leaf of finger-dot berries" },
          { level: "hard", product: "a finger-painted flower garden" },
        ],
        prep: ["Thick paint", "Trays"],
        steps: ["Children paint with their fingers.", "Make swirls, dots and spreads.", "Allow free mixing."],
      },
      {
        slug: "10-sponge",
        ramp: "easy → hard: more dabbing and texture.",
        num: 10,
        title: "sponge painting",
        skill: "dab & press — build texture by pressing a sponge.",
        child: "dip a sponge lightly and dab it to build up texture.",
        examples: [
          { level: "easy", product: "a fluffy sponge cloud" },
          { level: "medium", product: "a tree with sponge leaves" },
          { level: "hard", product: "a sponge-dabbed landscape" },
        ],
        prep: ["Sponge pieces", "Paint"],
        steps: ["Dip the sponge lightly.", "Dab it repeatedly.", "Build a pattern or object."],
      },
      {
        slug: "11-qtip",
        ramp: "easy → hard: more dots, placed more precisely.",
        num: 11,
        title: "q-tip painting",
        skill: "dotting — small, careful dots that build up an image.",
        child: "make small, careful paint dots with a cotton bud to build a picture.",
        examples: [
          { level: "easy", product: "a simple dot flower" },
          { level: "medium", product: "a flower with a dotted border" },
          { level: "hard", product: "a dot mandala" },
        ],
        prep: ["Q-tips", "Paint"],
        steps: ["Dip the tip in paint.", "Make dots and small patterns.", "Build an image out of dots."],
      },
      {
        slug: "12-blow-splatter",
        ramp: "easy → hard: more blowing and splatter, filling the page.",
        num: 12,
        title: "blow & splatter",
        skill: "moving paint without a brush — blow through a straw, or flick to splatter.",
        child: "drip thin paint, then blow it through a straw or flick it to splatter.",
        examples: [
          { level: "easy", product: "a few blown bursts" },
          { level: "medium", product: "a firework scene" },
          { level: "hard", product: "a splatter galaxy" },
        ],
        prep: ["Straws", "Thin paint", "Trays"],
        steps: ["Drip thin paint onto the page.", "Blow through a straw or flick to splatter.", "Let the shapes become their own thing."],
      },
    ],
  },
];

const LEVEL_STYLE: Record<Level, string> = {
  easy: "bg-category-language/25 text-ink",
  medium: "bg-segment-yellow/40 text-ink",
  hard: "bg-brand-orange/20 text-brand-orange",
};

function ExampleCard({ slug, ex }: { slug: string; ex: Example }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/[0.05]">
      <div className="aspect-square w-full bg-brand-cream/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/artiverse-book/examples/${slug}-${ex.level}.png`}
          alt={`${ex.level} — ${ex.product}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="flex flex-1 flex-col gap-1 p-3">
        <span className={`w-fit rounded-chip px-2 py-0.5 text-[10px] font-extrabold lowercase ${LEVEL_STYLE[ex.level]}`}>
          {ex.level}
        </span>
        <span className="text-[12.5px] leading-snug text-ink-muted">{ex.product}</span>
      </figcaption>
    </figure>
  );
}

export default function ArtiverseBookPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-14 pt-3 md:px-6">
      <Link href="/art-design-3-5/overview" className="text-[12px] font-bold text-brand-orange hover:underline">
        ← art &amp; design · ages 3–5
      </Link>

      {/* Cover */}
      <section className="mt-3 overflow-hidden rounded-3xl bg-segment-yellow shadow-card ring-1 ring-ink/5">
        <div className="aspect-[16/10] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/artiverse-book/cover.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="px-5 py-5 md:px-7">
          <p className="text-[11px] font-extrabold text-ink/50">oh · the educator reference book</p>
          <h1 className="mt-1 text-[26px] font-extrabold lowercase leading-tight text-ink md:text-[32px]">
            the artiverse book
          </h1>
          <p className="mt-1 text-[12px] font-semibold text-ink/60">art &amp; design · ages 3–5</p>
        </div>
      </section>

      {/* Intro */}
      <section className="mt-5 rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05] md:p-6">
        <p className="text-[14px] leading-relaxed text-ink md:text-[15px]">
          twelve projects across three media — paper, crayons, paint. each is{" "}
          <b>one artwork in one session</b>, and the objective is always the{" "}
          <b>skill</b> — the fold, the tear, the mark — never the picture.
        </p>
        <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
          that&rsquo;s why every project shows <b className="text-ink">three examples</b> —{" "}
          <span className="font-bold">easy · medium · hard</span>, each a different thing to make.
          same skill, different product and difficulty. children pick their own and take it home.
        </p>
      </section>

      {/* Chapters */}
      {CHAPTERS.map((ch) => (
        <section key={ch.key} className="mt-9">
          <div className={`rounded-2xl px-5 py-4 ring-1 ${ch.tint}`}>
            <h2 className="flex items-center gap-2 text-[17px] font-extrabold lowercase text-ink md:text-[19px]">
              <span aria-hidden>{ch.emoji}</span> {ch.name}
            </h2>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted md:text-[13px]">{ch.why}</p>
          </div>

          <div className="mt-5 space-y-9">
            {ch.projects.map((p) => (
              <article key={p.slug} className="scroll-mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-[13px] font-extrabold text-brand-orange">{String(p.num).padStart(2, "0")}</span>
                  <h3 className="text-[17px] font-extrabold lowercase text-ink md:text-[18px]">{p.title}</h3>
                </div>

                {/* the skill = the objective */}
                <div className="mt-2 rounded-xl bg-segment-yellow/20 px-3.5 py-2.5 ring-1 ring-segment-yellow/40">
                  <p className="text-[13px] leading-relaxed text-ink">
                    <span className="font-extrabold text-brand-orange">the skill:</span> {p.skill}
                  </p>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{p.child}</p>

                {/* three worked examples — easy / medium / hard */}
                <p className="mt-3.5 text-[11px] font-extrabold uppercase tracking-wide text-ink-subtle">
                  the same skill, three ways
                </p>
                <p className="mt-0.5 text-[12px] text-ink-muted">{p.ramp}</p>
                <div className="mt-2 grid grid-cols-3 gap-2.5">
                  {p.examples.map((ex) => (
                    <ExampleCard key={ex.level} slug={p.slug} ex={ex} />
                  ))}
                </div>

                {/* educator how-to */}
                <details className="mt-3 rounded-xl bg-brand-cream/60 px-4 py-2.5 ring-1 ring-ink/[0.05]">
                  <summary className="cursor-pointer text-[12px] font-extrabold lowercase text-ink-muted">
                    for the educator — how to run it
                  </summary>
                  {p.prep && (
                    <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                      <b className="text-ink">prep:</b> {p.prep.join(" · ")}
                    </p>
                  )}
                  <ol className="mt-1.5 space-y-0.5">
                    {p.steps.map((s, i) => (
                      <li key={s} className="text-[12px] leading-relaxed text-ink-muted">
                        {i + 1}. {s}
                      </li>
                    ))}
                  </ol>
                </details>
              </article>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-10 rounded-2xl border-2 border-dashed border-brand-orange/40 bg-brand-orange/5 p-4 text-center text-[12.5px] leading-relaxed text-ink md:p-5">
        the objective is the skill, never the specific object. the same skill can make many things —
        paper loops can be a snail, a bangle or a necklace. children choose their own, add their own
        details, and make their own version. mess and imperfection are part of learning.
      </p>
    </div>
  );
}
