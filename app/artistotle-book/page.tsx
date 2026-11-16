"use client";

import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";

/**
 * The artistotle book — ONE integrated, phone-readable book. For each
 * illustrator, each project shows the SKILL (the technique that illustrator
 * teaches) and three worked examples — easy · medium · hard, each a different
 * product — so it's clear the objective is the skill, never a copy of the
 * artist. The educator how-to sits underneath.
 */

type Level = "easy" | "medium" | "hard";
type Example = { level: Level; product: string };
type Project = {
  slug: string;
  num: number;
  title: string;
  skill: string;
  child: string;
  ramp: string;
  examples: Example[];
  steps: string[];
};
type Artist = {
  key: string;
  emoji: string;
  name: string;
  childIntro: string;
  sayToChildren: string;
  why: string;
  tint: string;
  projects: Project[];
};

const ARTISTS: Artist[] = [
  {
    key: "carle",
    childIntro: 'Eric Carle made pictures from bright painted paper — he tore and stuck it into animals and bugs.',
    sayToChildren: "he tore and glued colourful paper to make animals — let's make our own!",
    emoji: "🐛",
    name: "eric carle",
    why: "Collage and texture — building a picture from layered, torn paper. The objective is the layering, never the creature it becomes.",
    tint: "bg-segment-yellow/25 ring-segment-yellow/50",
    projects: [
      {
        slug: "13-carle-stripes",
        ramp: "easy → hard: more strips, layered more carefully.",
        num: 1,
        title: "stripes collage",
        skill: "layering paper strips into a picture.",
        child: "overlap torn, textured paper strips and stick them down to make a picture.",
        examples: [
          { level: "easy", product: "a fish" },
          { level: "medium", product: "a butterfly" },
          { level: "hard", product: "a parrot" },
        ],
        steps: ["Children arrange the strips.", "Overlap them freely.", "Stick once they're happy."],
      },
      {
        slug: "14-carle-caterpillar",
        ramp: "easy → hard: more circles, arranged in trickier ways.",
        num: 2,
        title: "circle collage",
        skill: "overlapping textured-paper circles into a shape.",
        child: "overlap round paper circles and stick them — a body, a shell, some petals.",
        examples: [
          { level: "easy", product: "a caterpillar" },
          { level: "medium", product: "a snail" },
          { level: "hard", product: "a flower" },
        ],
        steps: ["Arrange circles in a line.", "Stick them down.", "Add a face and details."],
      },
      {
        slug: "15-carle-fruit-veg",
        ramp: "easy → hard: smaller, more torn pieces.",
        num: 3,
        title: "fruit & vegetable collage",
        skill: "tearing paper into organic shapes.",
        child: "tear textured paper into rounded shapes and fill in a fruit or vegetable.",
        examples: [
          { level: "easy", product: "an apple" },
          { level: "medium", product: "a carrot" },
          { level: "hard", product: "a bunch of grapes" },
        ],
        steps: ["Tear the paper.", "Arrange into a shape.", "Stick freely."],
      },
      {
        slug: "16-carle-jellyfish",
        ramp: "easy → hard: more strips around the shape.",
        num: 4,
        title: "round shape + strips",
        skill: "a round paper shape with strips around it.",
        child: "make a round shape, then add paper strips around it — tentacles, rays or a mane.",
        examples: [
          { level: "easy", product: "a jellyfish" },
          { level: "medium", product: "a sun" },
          { level: "hard", product: "a lion" },
        ],
        steps: ["Use a circle for the head.", "Add strips for tentacles.", "Layer the materials."],
      },
    ],
  },
  {
    key: "ehlert",
    childIntro: 'Lois Ehlert made pictures from big, bold shapes — flowers and animals in strong bright colours.',
    sayToChildren: 'she used big bright shapes — what shapes can you see?',
    emoji: "🌻",
    name: "lois ehlert",
    why: "Bold colour and clean shape — flowers built from dabs, strokes and simple forms.",
    tint: "bg-brand-orange/15 ring-brand-orange/30",
    projects: [
      {
        slug: "17-ehlert-sponge",
        ramp: "easy → hard: more dabbing to build a bigger shape.",
        num: 5,
        title: "sponge dabbing",
        skill: "sponge-dabbing — build a picture from dabbed marks.",
        child: "dip a sponge lightly and dab to build up a shape from marks.",
        examples: [
          { level: "easy", product: "a flower" },
          { level: "medium", product: "a tree" },
          { level: "hard", product: "a sheep" },
        ],
        steps: ["Dab the sponge lightly.", "Build the shape from repeated dabs.", "Add a few details."],
      },
      {
        slug: "18-ehlert-brush",
        ramp: "easy → hard: more strokes, a bigger shape.",
        num: 6,
        title: "brush strokes",
        skill: "bold brush strokes — a few strokes make a shape.",
        child: "make a shape from a few bold paintbrush strokes.",
        examples: [
          { level: "easy", product: "a flower" },
          { level: "medium", product: "a fish" },
          { level: "hard", product: "a palm tree" },
        ],
        steps: ["Load the brush.", "Make a shape with a few bold strokes.", "Add details."],
      },
      {
        slug: "19-ehlert-swirling",
        ramp: "easy → hard: a tighter, longer swirl.",
        num: 7,
        title: "swirling strokes",
        skill: "moving the brush in a circle — one swirl becomes a thing.",
        child: "swirl a loaded brush round and round to make a spiral shape.",
        examples: [
          { level: "easy", product: "a rose" },
          { level: "medium", product: "a snail" },
          { level: "hard", product: "a lollipop" },
        ],
        steps: ["Move the brush in a tight circle.", "Build the spiral outwards.", "Add a stem or stick."],
      },
      {
        slug: "20-ehlert-garden",
        ramp: "easy → hard: more added on the top layer.",
        num: 8,
        title: "two-layer scene",
        skill: "painting a background first, then adding things on top — building depth.",
        child: "paint the background, let it set, then add things on top.",
        examples: [
          { level: "easy", product: "a flower garden" },
          { level: "medium", product: "an underwater scene" },
          { level: "hard", product: "a night sky" },
        ],
        steps: ["Paint the background.", "Add flowers on top once dry enough."],
      },
    ],
  },
  {
    key: "gomi",
    childIntro: 'Taro Gomi draws in a loose, playful way — simple wobbly lines, like a child. he says everyone can draw.',
    sayToChildren: "he draws in a fun, wobbly way — there's no wrong way to draw!",
    emoji: "🖍️",
    name: "taro gomi",
    why: "Playful, fearless drawing — loose lines and the child's own ideas, never a perfect copy.",
    tint: "bg-segment-blue/20 ring-segment-blue/40",
    projects: [
      {
        slug: "21-gomi-colouring",
        ramp: "easy → hard: more of a world around it.",
        num: 9,
        title: "simple colouring",
        skill: "colouring an outline and adding your own world around it.",
        child: "colour the animal, then add details and a little world around it.",
        examples: [
          { level: "easy", product: "a bear" },
          { level: "medium", product: "a cat" },
          { level: "hard", product: "a dinosaur" },
        ],
        steps: ["Colour the animal outline.", "Add playful details and a background."],
      },
      {
        slug: "22-gomi-umbrella",
        ramp: "easy → hard: more parts, each with its own pattern.",
        num: 10,
        title: "line patterns · fill a shape",
        skill: "filling a shape with line patterns — dots, dashes, zig-zags, waves.",
        child: "fill each part of the shape with a different pattern of lines.",
        examples: [
          { level: "easy", product: "an umbrella" },
          { level: "medium", product: "a fish" },
          { level: "hard", product: "a hot-air balloon" },
        ],
        steps: ["Fill the shape with line patterns.", "Mix dots, dashes, zig-zags and waves."],
      },
      {
        slug: "23-gomi-burger",
        ramp: "easy → hard: more parts and tiers to pattern.",
        num: 11,
        title: "line patterns · part by part",
        skill: "giving each part its own line pattern.",
        child: "give every layer or part its own kind of line pattern.",
        examples: [
          { level: "easy", product: "a burger" },
          { level: "medium", product: "a rainbow" },
          { level: "hard", product: "a layered cake" },
        ],
        steps: ["Give each layer a different line pattern.", "Fill the whole shape."],
      },
      {
        slug: "24-gomi-character",
        ramp: "easy → hard: more features and a setting.",
        num: 12,
        title: "draw & colour · character",
        skill: "drawing a character and giving it a background.",
        child: "draw a character with loose, confident lines and place it in a little world.",
        examples: [
          { level: "easy", product: "a person" },
          { level: "medium", product: "a robot" },
          { level: "hard", product: "a mermaid" },
        ],
        steps: ["Draw a simple character.", "Colour it and add a background."],
      },
      {
        slug: "25-gomi-scene",
        ramp: "easy → hard: more things in the scene.",
        num: 13,
        title: "draw & colour · scene",
        skill: "drawing a whole scene — characters and a world.",
        child: "draw a whole little world, full of things.",
        examples: [
          { level: "easy", product: "a space scene" },
          { level: "medium", product: "an underwater scene" },
          { level: "hard", product: "a jungle scene" },
        ],
        steps: ["Draw a character.", "Build a fuller scene with extra elements."],
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
          src={`/artistotle-book/examples/${slug}-${ex.level}.png`}
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

export default function ArtistotleBookPage() {
  return (
    <TeacherGate>
      <div className="mx-auto w-full max-w-3xl px-4 pb-14 pt-3 md:px-6">
        <Link href="/art-design-3-5/overview" className="text-[12px] font-bold text-brand-orange hover:underline">
          ← art &amp; design · ages 3–5
        </Link>

        {/* Cover */}
        <section className="mt-3 overflow-hidden rounded-3xl bg-segment-blue/40 shadow-card ring-1 ring-ink/5">
          <div className="aspect-[16/10] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/artistotle-book/cover.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="px-5 py-5 md:px-7">
            <p className="text-[11px] font-extrabold text-ink/50">oh · the educator reference book</p>
            <h1 className="mt-1 text-[26px] font-extrabold lowercase leading-tight text-ink md:text-[32px]">
              the artistotle book
            </h1>
            <p className="mt-1 text-[12px] font-semibold text-ink/60">art &amp; design · ages 3–5 · three illustrators</p>
          </div>
        </section>

        {/* Intro */}
        <section className="mt-5 rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05] md:p-6">
          <p className="text-[14px] leading-relaxed text-ink md:text-[15px]">
            make <b>in the spirit of</b> three loved illustrators — eric carle, lois ehlert and taro gomi.
            the objective is the <b>technique</b> — the collage, the dab, the line — <b>never a copy</b> of the artist.
          </p>
          <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
            each project shows <b className="text-ink">three examples</b> —{" "}
            <span className="font-bold">easy · medium · hard</span>, each a different thing to make.
            same skill, different product and difficulty.
          </p>
        </section>

        {/* Illustrators */}
        {ARTISTS.map((a) => (
          <section key={a.key} className="mt-9">
            <div className={`rounded-2xl px-5 py-4 ring-1 ${a.tint}`}>
              <h2 className="flex items-center gap-2 text-[17px] font-extrabold lowercase text-ink md:text-[19px]">
                <span aria-hidden>{a.emoji}</span> {a.name}
              </h2>
              <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-ink md:text-[13.5px]">
                {a.childIntro}
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">
                <span className="font-extrabold text-brand-orange">say to the children:</span>{" "}
                &ldquo;{a.sayToChildren}&rdquo;
              </p>
              <p className="mt-1.5 text-[11.5px] italic leading-relaxed text-ink-subtle">
                the technique: {a.why}
              </p>
            </div>

            <div className="mt-5 space-y-9">
              {a.projects.map((p) => (
                <article key={p.slug} className="scroll-mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[13px] font-extrabold text-brand-orange">{String(p.num).padStart(2, "0")}</span>
                    <h3 className="text-[17px] font-extrabold lowercase text-ink md:text-[18px]">{p.title}</h3>
                  </div>

                  <div className="mt-2 rounded-xl bg-brand-orange/10 px-3.5 py-2.5 ring-1 ring-brand-orange/25">
                    <p className="text-[13px] leading-relaxed text-ink">
                      <span className="font-extrabold text-brand-orange">the skill:</span> {p.skill}
                    </p>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{p.child}</p>

                  <p className="mt-3.5 text-[11px] font-extrabold uppercase tracking-wide text-ink-subtle">
                    the same skill, three ways
                  </p>
                  <p className="mt-0.5 text-[12px] text-ink-muted">{p.ramp}</p>
                  <div className="mt-2 grid grid-cols-3 gap-2.5">
                    {p.examples.map((ex) => (
                      <ExampleCard key={ex.level} slug={p.slug} ex={ex} />
                    ))}
                  </div>

                  <details className="mt-3 rounded-xl bg-brand-cream/60 px-4 py-2.5 ring-1 ring-ink/[0.05]">
                    <summary className="cursor-pointer text-[12px] font-extrabold lowercase text-ink-muted">
                      for the educator — how to run it
                    </summary>
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
          the goal is never a perfect copy of the artist. the objective is the skill — the collage, the
          dab, the fearless line — so children feel confident, explore the materials, and make the
          artwork their own.
        </p>
      </div>
    </TeacherGate>
  );
}
