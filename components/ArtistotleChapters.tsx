/**
 * Artistotle chapter notes — teacher handbook.
 *
 * Three illustrators: Eric Carle · Lois Ehlert · Taro Gomi. Every project
 * is a single artwork made in one session, and leads with THE SKILL the
 * illustrator's style teaches — not the character. Children work in each
 * artist's spirit while making their own choices.
 */
interface Project {
  name: string;
  skill: string; // the technique this project teaches — the real objective
  note: string; // the artwork is only one way to use the skill
  steps: string[];
}

interface ArtistotleChapter {
  illustrator: string;
  emoji: string;
  band: { bg: string; ink: string };
  why: string;
  projects: Project[];
}

const CHAPTERS: ArtistotleChapter[] = [
  {
    illustrator: "eric carle",
    emoji: "🐛",
    band: { bg: "bg-segment-yellow", ink: "text-ink" },
    why: "Collage and texture — building a picture from layered, torn and cut paper. The objective is the layering, never the creature it becomes.",
    projects: [
      {
        name: "stripes collage",
        skill: "layering paper strips into a picture.",
        note: "overlap them freely; the skill is the layering, not what it turns into.",
        steps: ["Children arrange the strips.", "Overlap them freely.", "Stick once they're happy."],
      },
      {
        name: "caterpillar collage",
        skill: "building a body from a row of circles.",
        note: "a caterpillar is one option; it's lining up and sticking the circles that matters.",
        steps: ["Arrange circles in a line.", "Stick them down.", "Add a face and details."],
      },
      {
        name: "fruit & vegetable collage",
        skill: "tearing paper into organic shapes.",
        note: "a fruit, a vegetable, anything round-ish — the skill is the tear and the fill.",
        steps: ["Tear the paper.", "Arrange into a shape.", "Stick freely."],
      },
      {
        name: "jellyfish collage",
        skill: "combining shape types — a round head, strip tentacles.",
        note: "the skill is mixing different shapes into one piece; the jellyfish is just the example.",
        steps: ["Use a circle for the head.", "Add strips for tentacles.", "Layer the materials."],
      },
    ],
  },
  {
    illustrator: "lois ehlert",
    emoji: "🌻",
    band: { bg: "bg-brand-orange", ink: "text-white" },
    why: "Bold colour and clean shape — flowers and animals built from dabs, strokes and simple forms.",
    projects: [
      {
        name: "sponge flowers",
        skill: "sponge-dabbing to build a flower from marks.",
        note: "any flower; the skill is the dab and repeating it for petals.",
        steps: ["Dab the sponge.", "Repeat for each petal."],
      },
      {
        name: "brush flowers",
        skill: "simple brush-stroke flowers.",
        note: "the skill is controlling the brush; the flower is up to the child.",
        steps: ["Use brush strokes.", "Build simple flowers."],
      },
      {
        name: "swirling flowers",
        skill: "moving the brush in circles for loose shapes.",
        note: "the skill is the swirling motion, not a neat flower.",
        steps: ["Move the brush in circles.", "Make loose, swirling shapes."],
      },
      {
        name: "two-layer garden",
        skill: "painting a background first, then adding on top — building depth.",
        note: "the skill is working in two layers; the garden is one way to show it.",
        steps: ["Paint the background.", "Add flowers on top once it's dry enough."],
      },
    ],
  },
  {
    illustrator: "taro gomi",
    emoji: "🖍️",
    band: { bg: "bg-segment-blue", ink: "text-ink" },
    why: "Playful, fearless drawing — loose lines and the child's own ideas, never a perfect copy.",
    projects: [
      {
        name: "simple colouring",
        skill: "colouring an outline and adding your own world around it.",
        note: "bear, tiger, anything — the skill is the colour and the details they add.",
        steps: ["Colour the animal outline.", "Add playful details and a background."],
      },
      {
        name: "line making 1",
        skill: "filling a shape with line patterns — dots, dashes, zigzags, waves.",
        note: "the skill is the variety of marks; the shape is just where they go.",
        steps: ["Fill the worksheet with line patterns.", "Mix dots, dashes, zigzags and waves."],
      },
      {
        name: "line making 2",
        skill: "giving each part its own line pattern.",
        note: "the skill is choosing a different pattern per section.",
        steps: ["Give each part a different line pattern.", "Fill the whole shape."],
      },
      {
        name: "draw & colour 1",
        skill: "drawing a character and giving it a background.",
        note: "any character; the skill is placing it in a little world.",
        steps: ["Draw a simple character.", "Colour it and add a background."],
      },
      {
        name: "draw & colour 2",
        skill: "building a fuller scene around your character.",
        note: "the skill is adding more of a world; the story is theirs.",
        steps: ["Draw a character.", "Build a fuller scene with extra elements."],
      },
    ],
  },
];

export function ArtistotleChapters({ compact = false }: { compact?: boolean }) {
  void compact;
  const totalProjects = CHAPTERS.reduce((s, c) => s + c.projects.length, 0);
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-brand-orange/15 p-4 ring-1 ring-brand-orange/30">
        <p className="text-[11px] font-bold tracking-normal text-brand-orange">
          three illustrators · {totalProjects} projects · one artwork each
        </p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-ink md:text-[13px]">
          Artistotle teaches art through the styles of well-known illustrators. Each project teaches one technique in a single session; children work in the artist&rsquo;s spirit while making their own choices — never copying.
        </p>
        <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-ink-muted">
          <li>· Introduce the artist simply (1–2 lines only).</li>
          <li>· Focus on the technique, not copying the artist.</li>
          <li>· The named artwork is one option — allow interpretation.</li>
        </ul>
      </div>

      {CHAPTERS.map((chapter, ci) => (
        <article
          key={chapter.illustrator}
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
                  artist {ci + 1} · {chapter.projects.length} projects
                </p>
                <h3 className="text-[20px] font-extrabold lowercase leading-tight md:text-[24px]">
                  {chapter.illustrator}
                </h3>
              </div>
            </div>
            <div className="md:border-l md:border-white/30 md:pl-6">
              <p className="text-[12px] font-bold opacity-90 md:text-[12.5px]">
                why {chapter.illustrator.split(" ")[0]} works
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed opacity-90 md:text-[13px]">
                {chapter.why}
              </p>
            </div>
          </header>

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
                  <div className="mt-1.5 rounded-xl bg-brand-orange/10 px-3 py-2 ring-1 ring-brand-orange/25">
                    <p className="text-[12px] leading-relaxed text-ink">
                      <span className="font-extrabold text-brand-orange">the skill:</span>{" "}
                      {p.skill}
                    </p>
                    <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-muted">
                      {p.note}
                    </p>
                  </div>
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
          final note
        </p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-ink md:text-[13px]">
          The goal is never a perfect copy of the artist. The objective is the skill — the collage, the dab, the fearless line — so children feel confident, explore the materials, and make the artwork their own.
        </p>
      </div>
    </div>
  );
}
