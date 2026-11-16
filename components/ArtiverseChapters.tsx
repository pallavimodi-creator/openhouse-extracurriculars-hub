/**
 * Artiverse chapter notes — teacher handbook, aligned 1:1 to the book.
 *
 * Three chapters: paper · crayons · paint. Twelve projects, each a single
 * artwork made in one session. Every project leads with THE SKILL it
 * teaches — the fold, the tear, the mark — and frames the pictured artwork
 * as just one option. The specific animal/object is never the objective.
 */
interface Project {
  name: string;
  skill: string; // the technique/skill this project teaches — the real objective
  note: string; // the artwork is only one way to use the skill
  prep?: string[];
  steps: string[];
}

interface Chapter {
  name: string;
  emoji: string;
  band: { bg: string; ink: string };
  why: string;
  guidelines: string[];
  projects: Project[];
}

const CHAPTERS: Chapter[] = [
  {
    name: "paper folding & sticking",
    emoji: "📄",
    band: { bg: "bg-segment-yellow", ink: "text-ink" },
    why: "Paper builds finger strength and a feel for shape, space and construction. The objective is always the fold or the tear — not the animal it turns into.",
    guidelines: [
      "Pre-cut all materials; give face stencils if needed.",
      "Focus on folding, tearing and sticking — not drawing.",
      "The pictured animal is one option. Let children pick their own.",
      "Allow uneven, imperfect work.",
    ],
    projects: [
      {
        name: "accordion folding",
        skill: "the accordion fold — a strip folded back and forth.",
        note: "we start here because it's the simplest fold. a giraffe's neck, fish fins, a springy creature — any of them; the fold is the point.",
        prep: ["Paper strips (5–10 cm wide)", "Animal face stencils", "Glue + crayons"],
        steps: [
          "Show folding back and forth.",
          "Help children press each fold.",
          "Stick the folded strip as a body.",
          "Add a face and decorate.",
        ],
      },
      {
        name: "circles folding",
        skill: "folding a circle — in half, stick some flat, leave some open.",
        note: "a fishbowl, ladybugs, a stacked-circle bird — pick any; it's the fold that matters.",
        prep: ["Pre-cut circles in different sizes"],
        steps: [
          "Children fold circles into halves or flaps.",
          "Stick some parts flat, leave some open.",
          "Arrange the circles into an object.",
        ],
      },
      {
        name: "mosaics",
        skill: "tear & place — tear paper small and fill a shape.",
        note: "an elephant, a snail's shell, their own animal — the skill is the tearing and filling, not the picture.",
        prep: ["Pre-torn coloured paper", "Simple outline sheets"],
        steps: [
          "Children tear more pieces.",
          "Fill the shape with pieces.",
          "Encourage their own colour choices.",
        ],
      },
      {
        name: "loops & chains",
        skill: "looping — curl a strip into a loop and link them up.",
        note: "a caterpillar, a bunny, a two-colour garland — any of these; the loop is the point.",
        prep: ["Short paper strips"],
        steps: [
          "Children curl strips into loops.",
          "Join loops into a chain.",
          "Add a face or details.",
        ],
      },
    ],
  },
  {
    name: "crayons",
    emoji: "🖍️",
    band: { bg: "bg-brand-orange", ink: "text-white" },
    why: "Crayons build grip control and intention. Each project is about how the hand moves — free marks, then control, then discovering a new colour.",
    guidelines: [
      "Let children draw before they colour.",
      "Do not fix or redraw their work.",
      "Focus on the skill — control, not a perfect picture.",
    ],
    projects: [
      {
        name: "doodling",
        skill: "free mark-making — loops, lines, scribbles that go anywhere.",
        note: "the aim is a relaxed, confident grip; whatever it turns into is a bonus.",
        steps: [
          "Children make lines, dots and patterns.",
          "Fill the page with free marks and texture.",
        ],
      },
      {
        name: "colouring",
        skill: "colouring inside a shape — filling it in and staying in.",
        note: "colour it however they like; the skill is the control, not the picture.",
        steps: [
          "Draw a few simple shapes.",
          "Children fill the colour inside.",
        ],
      },
      {
        name: "colour mixing",
        skill: "layering colour — one colour over another to make a new one.",
        note: "the discovery is the mix; the drawing is just where it happens.",
        steps: [
          "Use two colours in one shape.",
          "Overlap them and watch the new colour appear.",
        ],
      },
    ],
  },
  {
    name: "paint",
    emoji: "🎨",
    band: { bg: "bg-segment-blue", ink: "text-ink" },
    why: "Paint is about movement, pressure and expression. Each project teaches one way of putting paint down — a press, a fingertip, a dab, a dot, a blow.",
    guidelines: [
      "Accept mess.",
      "Limit to 2–3 colours at first.",
      "Demonstrate lightly, then let them lead.",
    ],
    projects: [
      {
        name: "hand painting",
        skill: "whole-hand printing — press a painted hand and lift it off.",
        note: "a tree, a bird, a splashy pattern — the skill is the press and feeling at home with paint.",
        prep: ["Paint trays", "Large sheets"],
        steps: [
          "Children dip a hand in paint.",
          "Press it flat on the paper and lift.",
          "Build an image from the prints.",
        ],
      },
      {
        name: "finger painting",
        skill: "finger control in paint — spread, swirl and dot with fingertips.",
        note: "make anything; the point is leading the colour with a finger.",
        prep: ["Thick paint", "Trays"],
        steps: [
          "Children paint with their fingers.",
          "Make swirls, dots and spreads.",
          "Allow free mixing.",
        ],
      },
      {
        name: "sponge painting",
        skill: "dab & press — build texture by pressing a sponge.",
        note: "clouds, a bush, a patterned sky — the skill is the pressure and the dabbing.",
        prep: ["Sponge pieces", "Paint"],
        steps: [
          "Dip the sponge lightly.",
          "Dab it repeatedly.",
          "Build a pattern or object.",
        ],
      },
      {
        name: "q-tip painting",
        skill: "dotting — small, careful dots that build up an image.",
        note: "flowers, spots, a dotty pattern — the skill is the precise little dots.",
        prep: ["Q-tips", "Paint"],
        steps: [
          "Dip the tip in paint.",
          "Make dots and small patterns.",
          "Build an image out of dots.",
        ],
      },
      {
        name: "blow & splatter",
        skill: "moving paint without a brush — blow it through a straw, or flick to splatter.",
        note: "whatever the shapes become is theirs; the play is the point.",
        prep: ["Straws", "Thin paint", "Trays"],
        steps: [
          "Drip thin paint onto the page.",
          "Blow through a straw to move it — or flick to splatter.",
          "Let the shapes become their own thing.",
        ],
      },
    ],
  },
];

export function ArtiverseChapters({ compact = false }: { compact?: boolean }) {
  void compact;
  const total = CHAPTERS.reduce((sum, c) => sum + c.projects.length, 0);
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-segment-yellow/30 p-4 ring-1 ring-segment-yellow/50">
        <p className="text-[11px] font-bold tracking-normal text-brand-orange">
          three chapters · {total} projects · one artwork each
        </p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-ink md:text-[13px]">
          Artiverse helps children get comfortable and confident with art materials. Every project teaches one skill — a fold, a mark, a way of painting — in a single session. The reference image is only inspiration; children make their own version.
        </p>
      </div>

      {CHAPTERS.map((chapter, ci) => (
        <article
          key={chapter.name}
          className="overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/5"
        >
          <header
            className={`grid gap-3 px-5 py-5 md:grid-cols-[auto_1fr] md:items-center md:gap-6 md:px-7 md:py-6 ${chapter.band.bg} ${chapter.band.ink}`}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-white/40 text-[26px] backdrop-blur-sm md:h-14 md:w-14 md:text-[30px]"
                aria-hidden="true"
              >
                {chapter.emoji}
              </span>
              <div>
                <p className="text-[10px] font-bold opacity-70">
                  chapter {ci + 1} · {chapter.projects.length} projects
                </p>
                <h3 className="text-[20px] font-extrabold lowercase leading-tight md:text-[24px]">
                  {chapter.name}
                </h3>
              </div>
            </div>
            <div className="md:border-l md:border-white/30 md:pl-6">
              <p className="text-[12px] font-bold opacity-90 md:text-[12.5px]">
                why {chapter.name.split(" ")[0]} works
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed opacity-90 md:text-[13px]">
                {chapter.why}
              </p>
            </div>
          </header>

          {/* Teacher guidelines for the chapter */}
          <div className="border-b border-ink/5 bg-brand-cream/50 px-5 py-3 md:px-7">
            <p className="text-[10px] font-bold tracking-normal text-ink-subtle">
              teacher guidelines
            </p>
            <ul className="mt-1.5 space-y-1">
              {chapter.guidelines.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange/80" />
                  <span className="flex-1">{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="px-5 py-5 md:px-7 md:py-6">
            {chapter.projects.map((p, i) => (
              <li
                key={p.name}
                className={`relative flex items-start gap-4 ${
                  i < chapter.projects.length - 1 ? "pb-5" : ""
                }`}
              >
                {i < chapter.projects.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[15px] top-9 bottom-0 w-0 border-l-2 border-dotted border-ink/15"
                  />
                )}
                <span
                  className={`relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full text-[12px] font-extrabold ring-2 ring-brand-white ${chapter.band.bg} ${chapter.band.ink}`}
                >
                  {i + 1}
                </span>
                <div className="flex-1 pt-0.5">
                  <p className="text-[13.5px] font-extrabold lowercase text-ink md:text-[14px]">
                    {p.name}
                  </p>
                  {/* the skill is the objective — lead with it */}
                  <div className="mt-1.5 rounded-xl bg-segment-yellow/20 px-3 py-2 ring-1 ring-segment-yellow/40">
                    <p className="text-[12px] leading-relaxed text-ink">
                      <span className="font-extrabold text-brand-orange">the skill:</span>{" "}
                      {p.skill}
                    </p>
                    <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-muted">
                      {p.note}
                    </p>
                  </div>
                  {p.prep && (
                    <div className="mt-2">
                      <p className="text-[10px] font-bold tracking-normal text-ink-subtle">
                        teacher prep
                      </p>
                      <ul className="mt-1 space-y-0.5">
                        {p.prep.map((m) => (
                          <li
                            key={m}
                            className="text-[11px] leading-relaxed text-ink-muted"
                          >
                            · {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-2">
                    <p className="text-[10px] font-bold tracking-normal text-ink-subtle">
                      how to conduct
                    </p>
                    <ol className="mt-1 space-y-0.5">
                      {p.steps.map((s, si) => (
                        <li
                          key={s}
                          className="text-[11.5px] leading-relaxed text-ink-muted"
                        >
                          {si + 1}. {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>
      ))}

      <div className="rounded-2xl border-2 border-dashed border-brand-orange/40 bg-brand-orange/5 p-4 md:p-5">
        <p className="text-[11px] font-bold lowercase text-brand-orange">
          important — for both books
        </p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-ink md:text-[13px]">
          The objective is the skill, never the specific object. The same skill can make many things — paper loops can be a snail, a bangle or a necklace. Children choose their own colours, add their own details, and make their own version. Mess and imperfection are part of learning.
        </p>
      </div>
    </div>
  );
}
