"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  Dumbbell,
  Gamepad2,
  Palette,
  Notebook,
  RotateCw,
  Lock,
  Zap,
  Star,
  BookOpen,
  ChevronRight,
  ChevronDown,
  FlaskConical,
  Wrench,
  Droplet,
  Brush,
  Pencil,
  Hand,
  Layers,
  Sparkles,
  Lightbulb,
  PenTool,
  Moon,
  CirclePlus,
  Crosshair,
  PenLine,
  Eye,
  Heart,
  Wand2,
  Ear,
  MessageCircle,
  Music,
  Search,
  Hash,
  Puzzle,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { getCurriculumProgramme, getActivityImage, GYM_BOOK_IMAGES } from "@/lib/content";
import { LO_LADDERS } from "@/lib/lo-ladders";
import { cn } from "@/lib/utils";
import { TeacherGate } from "@/components/TeacherGate";
import { ArtiverseChapters } from "@/components/ArtiverseChapters";
import { ArtistotleChapters } from "@/components/ArtistotleChapters";
import { ArtiverseBookModal, ArtiverseCoverArt } from "@/components/ArtiverseBookModal";
import { ArtiverseAgeCover } from "@/components/ArtiverseAgeCover";
import { ArtistotleBookModal } from "@/components/ArtistotleBookModal";
import {
  ImaginePlaygroundBookModal,
  ImaginePlaygroundCoverArt,
} from "@/components/ImaginePlaygroundBookModal";
import {
  WonderWorldBookModal,
  WonderWorldCoverArt,
} from "@/components/WonderWorldBookModal";
import {
  NumbersGymBookModal,
  NumbersGymCoverArt,
} from "@/components/NumbersGymBookModal";
import { PlayWritesBookModal } from "@/components/PlayWritesBookModal";
import { LanguageBooksGrid } from "@/components/LanguageBooksGrid";
import { SongsPlaylist } from "@/components/SongsPlaylist";

// Where each ability lives (by skill id + ability index).
// NOTE: 5-8 / 8-12 art now folds the laminated art-gym book pages and
// cue-card prompts into the Art Games segment — there is no separate
// "art gym" segment and no "extension" follow-on day at this age. The
// chips below say "art gym book (in art games)" to make that explicit
// to a teacher reading the abilities table.
const abilityLocations: Record<string, string[]> = {
  "lt-0": ["art gym book (in art games)", "shape stitch", "reference artworks"],
  "lt-1": ["art gym book (in art games)", "shape stitch", "reference artworks"],
  "lt-2": ["reference artworks"],
  "lt-3": ["cue cards", "reference artworks"],
  "sf-0": ["art gym book (in art games)"],
  "sf-1": ["art gym cue card (in art games)", "shape fusion", "cue cards", "artventure"],
  "sf-2": ["shape fusion", "imagine that", "artventure"],
  "sf-3": ["reference artworks"],
  "cp-0": ["reference artworks"],
  "cp-1": ["colour flip", "reference artworks"],
  "cp-2": ["colour flip", "match me", "reference artworks"],
  "cp-3": ["reference artworks"],
  "bc-0": ["cue cards", "reference artworks"],
  "bc-1": ["reference artworks"],
  "bc-2": ["reference artworks"],
  "bc-3": ["reference artworks"],
  "ic-0": ["artventure", "doodle dash", "reference artworks"],
  "ic-1": ["imagine that", "doodle dash", "reference artworks"],
  "ic-2": ["imagine that"],
  "ic-3": ["imagine that"],
};

// ─── Main component ───────────────────────────────────────────

export default function ProgrammeOverviewPage() {
  return (
    <TeacherGate>
      <ProgrammeOverviewContent />
    </TeacherGate>
  );
}

function ProgrammeOverviewContent() {
  const params = useParams();
  const slug = params.programmeSlug as string;
  const programme = getCurriculumProgramme(slug);
  // Skills are always-visible posters now — no toggle state needed.
  // Artiverse + Artistotle books — open as full-screen popups from the
  // books row.
  const [artiverseBookOpen, setArtiverseBookOpen] = useState(false);
  const [artistotleBookOpen, setArtistotleBookOpen] = useState(false);
  const [imaginePlaygroundBookOpen, setImaginePlaygroundBookOpen] = useState(false);
  const [wonderWorldBookOpen, setWonderWorldBookOpen] = useState(false);
  const [numbersGymBookOpen, setNumbersGymBookOpen] = useState(false);
  // Play-writes (language 3-5) — Level 1 / Level 2 workbook flipbooks.
  const [playWritesLevel, setPlayWritesLevel] = useState<1 | 2 | null>(null);

  if (!programme) {
    notFound();
    return null;
  }

  // The 3-5 (centre) programmes are now open — their overviews render the
  // same way as the 5+ programmes (daily structure · skills · games with
  // images). The combined "about the programme" intro + the shared planner
  // live under /plan.

  const isArt = programme.category === "art";
  const isRobotics = programme.category === "stem";
  const isLanguage = programme.category === "language";

  // Every overview has the same four top-level sections now: daily flow
  // · skills · segments (each segment card contains its full info inline)
  // · checkpoints. No per-category overrides needed.
  const SECTION_NUM: Record<string, string> = {
    "daily-flow": "01",
    "skills": "02",
    "segment-logic": "03",
    "books": "04",
    "checkpoints": "05",
    // Language-specific section numbering — only used when the
    // category === "language" branch renders these sections.
    "how-it-works": "04",
    "six-day-arc": "05",
    "language-books": "06",
    "songs": "07",
    "why-it-works": "08",
  };
  const sectionNum = (key: string) => SECTION_NUM[key] ?? "—";

  // Build skills list from this programme's own skill areas so the abilities
  // match the age group & category.
  // Optional Lucide icons for skills + abilities. Currently used by the
  // Art & Design 3-5 programme; other programmes fall back to the numeric /
  // letter badge below.
  const skillIcon: Record<string, LucideIcon> = {
    // 3-5 art skill families
    fm: Hand,
    co: Palette,
    ce: Sparkles,
    // Language through Storytelling — 3-5 skill families
    listening: Ear,
    speaking: MessageCircle,
    reading: BookOpen,
    vocabulary: Sparkles,
    "play-writes": PenLine,
    // STEM 3-5 — four skill families
    curiosity: Search,
    "problem-solving": Wrench,
    logic: Puzzle,
    "number-sense": Hash,
  };
  const abilityIcon: Record<string, LucideIcon> = {
    // Fine Motor abilities (4)
    "fm-0": Crosshair, // Tool Precision
    "fm-1": PenLine, // Tracing
    "fm-2": Pencil, // Drawing Figures and Patterns
    "fm-3": Sparkles, // Fine Motor Integration ★
    // Colour abilities (4)
    "co-0": Droplet, // Explores freely
    "co-1": Eye, // Names and recognises
    "co-2": Layers, // Mixes and notices
    "co-3": Palette, // Colour Integration ★
    // Creative Expression abilities (4)
    "ce-0": Layers, // Explores Artistic Concepts
    "ce-1": Heart, // Emotional Expression through Art
    "ce-2": Wand2, // Integrating Artistic Choices
    "ce-3": Sparkles, // Visual Arts Integration ★
    // Language — Listening (3 abilities, 3rd is north star)
    "listening-0": Ear,
    "listening-1": Eye,
    "listening-2": Sparkles,
    // Language — Speaking
    "speaking-0": MessageCircle,
    "speaking-1": MessageCircle,
    "speaking-2": Sparkles,
    // Language — Reading
    "reading-0": BookOpen,
    "reading-1": Lightbulb,
    "reading-2": Sparkles,
    // Language — Vocabulary
    "vocabulary-0": Eye,
    "vocabulary-1": Hand,
    "vocabulary-2": Sparkles,
    // Language — Play-Writes
    "play-writes-0": Brush,
    "play-writes-1": PenLine,
    "play-writes-2": Sparkles,
    // STEM 3-5 — Curiosity (4 abilities · 4th is north star)
    "curiosity-0": Eye, // notices
    "curiosity-1": Lightbulb, // wonders
    "curiosity-2": Compass, // predicts
    "curiosity-3": Sparkles, // investigates ★
    // STEM 3-5 — Problem Solving (4 abilities · 4th is north star)
    "problem-solving-0": Eye, // recognises
    "problem-solving-1": Wrench, // tries
    "problem-solving-2": Heart, // persists
    "problem-solving-3": Sparkles, // solves ★
    // STEM 3-5 — Logic (4 abilities · 4th is north star)
    "logic-0": Layers, // sorts
    "logic-1": Puzzle, // patterns
    "logic-2": Compass, // predicts from a rule
    "logic-3": Sparkles, // reasons ★
    // STEM 3-5 — Number Sense (3 abilities · 3rd is north star)
    "number-sense-0": Hash, // connects
    "number-sense-1": Layers, // relates
    "number-sense-2": Sparkles, // applies ★
  };

  const skillStyle: Record<string, { color: string; accent: string }> = {
    // art skill families
    lt: { color: "bg-segment-yellow", accent: "border-segment-yellow" },
    sf: { color: "bg-segment-blue", accent: "border-segment-blue" },
    cp: { color: "bg-segment-pink", accent: "border-segment-pink" },
    bc: { color: "bg-segment-green", accent: "border-segment-green" },
    ic: { color: "bg-brand-orange", accent: "border-brand-orange" },
    // 3-5 art skill families
    fm: { color: "bg-segment-yellow", accent: "border-segment-yellow" },
    co: { color: "bg-segment-pink", accent: "border-segment-pink" },
    ce: { color: "bg-segment-blue", accent: "border-segment-blue" },
    // public speaking skill families
    cs: { color: "bg-segment-yellow", accent: "border-segment-yellow" },
    bl: { color: "bg-segment-blue", accent: "border-segment-blue" },
    vs: { color: "bg-segment-pink", accent: "border-segment-pink" },
    // robotics skill families (lt re-uses the art lt colour — not shown together on any page)
    bm: { color: "bg-segment-pink", accent: "border-segment-pink" },
    ps: { color: "bg-segment-blue", accent: "border-segment-blue" },
    ou: { color: "bg-segment-green", accent: "border-segment-green" },
    // language — five skill families, each with its own segment-tone colour
    listening: { color: "bg-segment-yellow", accent: "border-segment-yellow" },
    speaking: { color: "bg-brand-orange", accent: "border-brand-orange" },
    reading: { color: "bg-segment-blue", accent: "border-segment-blue" },
    vocabulary: { color: "bg-segment-pink", accent: "border-segment-pink" },
    "play-writes": { color: "bg-segment-green", accent: "border-segment-green" },
    // STEM 3-5 — four skill families, each with its own segment-tone
    // colour so the cards on the overview match the programme's
    // visual language. Curiosity (yellow) is the warm-up energy;
    // problem solving (green) is the hands-on making energy; logic
    // (blue) is the focused work; number sense (orange) is the
    // dedicated daily workout.
    curiosity: { color: "bg-segment-yellow", accent: "border-segment-yellow" },
    "problem-solving": { color: "bg-segment-green", accent: "border-segment-green" },
    logic: { color: "bg-segment-blue", accent: "border-segment-blue" },
    "number-sense": { color: "bg-brand-orange", accent: "border-brand-orange" },
  };

  const skills = programme.skillAreas.map((s) => ({
    id: s.id,
    name: s.name.toLowerCase(),
    color: skillStyle[s.id]?.color ?? "bg-ink/10",
    accent: skillStyle[s.id]?.accent ?? "border-ink/20",
    // Brand voice: ability names are short labels (lowercase). The
    // description is body copy and stays as-written (sentence case from
    // the source content).
    abilities: s.abilities.map((a) =>
      typeof a === "string"
        ? a
        : { ...a, name: a.name.toLowerCase(), description: a.description }
    ),
  }));

  return (
    <div className="flex flex-col pb-6">

      {/* ─── HERO BAND ─── */}
      <section className="mt-4 px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-brand-cream ring-1 ring-ink/5">
          <div className="grid gap-5 p-5 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-7">
            {programme.heroImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={programme.heroImageUrl}
                alt={programme.title}
                className="mx-auto h-32 w-auto rounded-xl bg-brand-white object-contain ring-1 ring-ink/10 md:h-40"
                style={{ mixBlendMode: "multiply" }}
              />
            )}
            <div>
              <p className="text-[11px] font-bold text-ink-subtle">programme overview</p>
              <h1 className="mt-2 text-[28px] font-extrabold lowercase leading-[1.05] tracking-tight text-ink md:text-[40px]">
                {programme.title}
              </h1>
              <p className="mt-2 inline-block rounded-chip bg-brand-orange/10 px-2.5 py-0.5 text-[11px] font-bold lowercase text-brand-orange">
                {programme.ageLabel}
              </p>
              {programme.slug !== "art-design-3-5" &&
                programme.slug !== "language-storytelling-3-5" && (
                  <div className="mt-4 border-l-[3px] border-brand-orange pl-4">
                    <p className="text-[13px] leading-relaxed text-ink md:text-[14px]">
                      {programme.description}
                    </p>
                  </div>
                )}
            </div>
          </div>

        </div>
      </section>

      {/* ─── HOW THIS PROGRAMME WORKS — category-specific approach ─── */}
      {(isArt || isRobotics || isLanguage) && (
        <section className="mt-4 px-4 md:px-8">
          <div className="rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/5 md:p-5">
            <p className="text-[11px] font-bold text-brand-orange">how this programme works</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink md:text-[14px]">
              {isRobotics
                ? "this overview covers mechanics. robotics at openhouse spans three strands — mechanics, electronics, and coding — and this is the mechanics programme."
                : isArt
                  ? "the skills below are built through a combination of games, making artworks, and practice in the art gym."
                  : "the skills below are built through a combination of games."}
            </p>
          </div>
        </section>
      )}

      {/* ─── WELCOME — 3-5 art only ─── */}
      {programme.slug === "art-design-3-5" && (
        <section className="mt-10 px-4 md:px-8">
          <h2 className="text-[20px] font-extrabold lowercase leading-tight text-ink md:text-[24px]">
            welcome to openhouse art &amp; design
          </h2>

          <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-ink-muted md:text-[14px]">
            <p>
              At Openhouse, art &amp; design is built to help children develop two essential skills at this age:{" "}
              <span className="font-semibold text-ink">fine motor control</span> and{" "}
              <span className="font-semibold text-ink">creative expression</span>. Every experience is designed to strengthen how children use their hands and fingers with greater control, while also helping them express their own ideas visually.
            </p>
            <p>
              Children explore curated artworks, learn through the right mediums and techniques, and draw inspiration from artists and illustrators known for deeply understanding children&apos;s art and imagination.
            </p>
            <p>
              What makes the programme uniquely play-based is that there is{" "}
              <span className="font-semibold text-ink">no fixed, instruction-led final product</span>. Children learn through games, choices, exploration, and creating artworks that feel personal and meaningful to them.
            </p>
          </div>
        </section>
      )}

      {/* ─── HOW THE CLASS LOOKS & FEELS — 3-5 art only ─── */}
      {programme.slug === "art-design-3-5" && (
        <section className="mt-10 px-4 md:px-8">
          <SectionTitle num="·" label="class look &amp; feel">
            how the openhouse art &amp; design class looks &amp; feels
          </SectionTitle>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              {
                emoji: "🎨",
                title: "like an atelier",
                body: "Always spread out the resources children will need, hand them their aprons, keep water in wash glasses, keep pencils sharpened. Set up the class like a real-life art studio.",
                ring: "ring-segment-yellow",
              },
              {
                emoji: "🌿",
                title: "open &amp; free-spirited",
                body: "Keep the class moving — play the game on a mat on the floor, do the artwork on chairs and tables. Movement is part of how the class feels.",
                ring: "ring-segment-green",
              },
              {
                emoji: "🤝",
                title: "involving children",
                body: "Involve children in setting up and putting things back. Let them pick materials. Before each activity, tell them what you have planned and ask how they feel about it. After, ask how it went.",
                ring: "ring-segment-pink",
              },
              {
                emoji: "✨",
                title: "usable &amp; accessible",
                body: "Keep materials laid out so children can see and pick them on their own. Nothing important should be out of reach.",
                ring: "ring-brand-orange",
              },
            ].map((row) => (
              <div
                key={row.title}
                className={cn("rounded-2xl bg-brand-white p-4 ring-2", row.ring)}
              >
                <p className="text-[14px] font-extrabold lowercase text-ink">
                  <span aria-hidden className="mr-1.5 text-[16px]">{row.emoji}</span>
                  <span dangerouslySetInnerHTML={{ __html: row.title }} />
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">
                  <span dangerouslySetInnerHTML={{ __html: row.body }} />
                </p>
              </div>
            ))}
          </div>

          {/* Clean & uncluttered — has its own bullet list */}
          <div className="mt-3 rounded-2xl bg-brand-white p-4 ring-2 ring-segment-blue">
            <p className="text-[14px] font-extrabold lowercase text-ink">
              <span aria-hidden className="mr-1.5 text-[16px]">🧺</span>
              clean &amp; uncluttered
            </p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">
              Encourage children — and model — cleanliness:
            </p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Always keep bags at a particular place.",
                "Don't litter — always throw in the dustbin.",
                "Make sure there is a dustbin and tissue paper close at hand.",
                "Keep things back at their place when done.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-segment-blue/80" />
                  <span className="flex-1">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Class rules — co-created with children */}
          <div className="mt-3 rounded-2xl bg-brand-white p-4 ring-2 ring-segment-yellow">
            <p className="text-[14px] font-extrabold lowercase text-ink">
              <span aria-hidden className="mr-1.5 text-[16px]">📜</span>
              the class has rules
            </p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">
              Lay simple rules for the class and involve children in making them and agreeing to them. Start with simple yes/no questions:
            </p>
            <ul className="mt-2 space-y-1.5">
              {[
                "Will we all put our bags back?",
                "Will we all use our polite voices?",
                "Will we all keep our hands and legs to ourselves?",
                "Will we all try to be helpful and nice to each other?",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-segment-yellow/80" />
                  <span className="flex-1">{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 rounded-lg bg-brand-cream p-2.5 text-[12px] leading-relaxed text-ink">
              And in the end — always be smiling and kind yourself.
            </p>
          </div>
        </section>
      )}

      {/* ─── WELCOME — language storytelling 3-5 only ─── */}
      {programme.slug === "language-storytelling-3-5" && (
        <section className="mt-10 px-4 md:px-8">
          <h2 className="text-[20px] font-extrabold lowercase leading-tight text-ink md:text-[24px]">
            welcome to openhouse language through storytelling
          </h2>

          <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-ink-muted md:text-[14px]">
            <p>
              At Openhouse, language is learnt through{" "}
              <span className="font-semibold text-ink">the world of stories</span>.
            </p>
            <p>
              This is a holistic language programme that builds all core skills —{" "}
              <span className="font-semibold text-ink">listening, speaking, reading, and early writing</span> — through the formats that children learn best from: books, songs, games, and playful practice.
            </p>
            <p>
              Every part of the programme is rooted in context. Children don&apos;t learn words in isolation — they meet them in stories, use them in conversation, revisit them through games, and gradually make them their own. Our writing work is also meaning-driven, with children expressing ideas from stories through drawing, mark-making, and early writing.
            </p>
            <p className="rounded-xl bg-brand-white p-3 ring-1 ring-ink/10">
              This is an{" "}
              <span className="font-semibold text-ink">emergent literacy programme</span>. Children first understand what reading is — how books work, how print carries meaning, and how language flows — before learning to decode it.
            </p>
            <p>
              We intentionally do not begin with phonics or alphabet-led reading at this stage. At ages 3–5, children learn language best through rich exposure, repetition, and meaningful use. This approach builds strong vocabulary, confident expression, and a deep connection to books — forming the foundation for formal reading and writing that follows.
            </p>
            <p>
              Across sessions, stories act as the anchor. Words, ideas, and expressions are encountered again and again, until they are{" "}
              <span className="font-semibold text-ink">understood, used, and truly owned</span>.
            </p>
          </div>
        </section>
      )}


      {/* ─── SKILLS & ABILITIES ─── */}
      <section className="mt-10 px-4 md:px-8">
        <SectionTitle num={sectionNum("skills")} label="skills & abilities">
          {skills.length} skills · {skills[0]?.abilities.length ?? 0} abilities each
        </SectionTitle>

        {/* Explainer — for the 3-5 art programme only. Why these
            skills matter, how the class builds them, and how to
            explain it to children and parents. */}
        {programme.slug === "art-design-3-5" && (
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/5 md:p-5">
              <p className="text-[11px] font-bold tracking-normal text-brand-orange">
                why we observe skills &amp; abilities
              </p>
              <div className="mt-2 space-y-2 text-[12.5px] leading-relaxed text-ink-muted md:text-[13px]">
                <p>
                  At Openhouse, we don&apos;t only look at the final artwork a child creates. We also observe the smaller skills and abilities children build consistently through repeated experiences in class.
                </p>
                <p>
                  <span className="font-semibold text-ink">Skills</span> are the larger areas of development children are building through art. <span className="font-semibold text-ink">Abilities</span> are the smaller observable actions within each skill that help us understand how a child is progressing over time.
                </p>
                <p>
                  For example, &ldquo;fine motor&rdquo; is a skill, while &ldquo;holding and controlling a tool carefully&rdquo; is an ability within that skill.
                </p>
                <p className="rounded-lg bg-brand-cream p-3 text-[12px] leading-relaxed text-ink">
                  The goal is not perfection or making all children create the same artwork. The goal is for children to gradually become more <span className="font-semibold">confident, expressive, independent, intentional, and capable</span> in how they create and communicate through art.
                </p>
              </div>
            </div>

            {/* How each segment of class builds these abilities */}
            {/* Plain skills + abilities explainer (no heading) */}
            <div className="rounded-2xl bg-segment-yellow/15 p-4 ring-1 ring-segment-yellow/40 md:p-5">
              <div className="space-y-2 text-[12.5px] leading-relaxed text-ink-muted md:text-[13px]">
                <p>
                  <span className="font-semibold text-ink">Skills</span> are the big things we are learning to get better at. <span className="font-semibold text-ink">Abilities</span> are the small things we practise every day that help us build those skills.
                </p>
                <p>
                  For example, if drawing is a big skill, then holding a pencil carefully, making lines, colouring with control, and choosing colours intentionally are all smaller abilities that help us get better at drawing.
                </p>
                <p>
                  We build these abilities slowly by practising them again and again — through games, making, experimenting, and trying in different ways.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="overflow-hidden rounded-xl bg-brand-white shadow-card ring-1 ring-ink/5"
            >
              <div className="flex items-center gap-3 p-4">
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white",
                    skill.color
                  )}
                >
                  {(() => {
                    const SkillIcon = skillIcon[skill.id];
                    return SkillIcon ? (
                      <SkillIcon className="h-5 w-5" strokeWidth={2} />
                    ) : (
                      skill.id
                    );
                  })()}
                </span>
                <div className="flex-1">
                  <p className="text-[14px] font-extrabold lowercase text-ink">{skill.name}</p>
                  <p className="text-[10px] text-ink-muted">{skill.abilities.length} abilities</p>
                </div>
              </div>

              <div className="space-y-3 border-t border-ink/5 bg-brand-cream/40 p-4">
                {skill.abilities.map((ability, i) => {
                  const locs = abilityLocations[`${skill.id}-${i}`] || [];
                  // Ability may be either a plain string (legacy) or a
                  // richer object with name + description + ★.
                  const isObj = typeof ability === "object" && ability !== null;
                  const abilityName = isObj ? (ability as { name: string }).name : null;
                  const abilityDesc = isObj ? (ability as { description: string }).description : (ability as string);
                  const isNorthStar = isObj && (ability as { isNorthStar?: boolean }).isNorthStar;
                  const AbilityIcon = abilityIcon[`${skill.id}-${i}`];
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-extrabold text-white",
                          skill.color
                        )}
                      >
                        {AbilityIcon ? (
                          <AbilityIcon className="h-3.5 w-3.5" strokeWidth={2.4} />
                        ) : (
                          i + 1
                        )}
                      </span>
                      <div className="flex-1">
                        {abilityName && (
                          <p className="text-[12.5px] font-extrabold lowercase text-ink md:text-[13.5px]">
                            {abilityName}
                            {isNorthStar && (
                              <span
                                aria-label="north star ability"
                                className="ml-1.5 text-brand-orange"
                              >
                                ★
                              </span>
                            )}
                          </p>
                        )}
                        <p className={cn("text-[12px] leading-relaxed md:text-[13px]", abilityName ? "mt-0.5 text-ink-muted" : "text-ink")}>
                          {abilityDesc}
                        </p>
                        {locs.length > 0 && (
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {locs.map((loc) => (
                              <span
                                key={loc}
                                className="rounded-chip bg-ink/5 px-2 py-0.5 text-[9px] font-medium text-ink-muted"
                              >
                                {loc}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Debrief lines — teacher-friendly phrases for noticing
            skills + abilities with 3-5 year olds. Art programme only. */}
        {programme.slug === "art-design-3-5" && (
          <div className="mt-5 rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/5 md:p-5">
            <p className="text-[11px] font-bold tracking-normal text-brand-orange">
              talking to children about what they&apos;re building
            </p>
            <p className="mt-1 text-[12px] italic leading-relaxed text-ink-muted">
              Speak about skills and abilities simply and naturally — encouraging and conversational, not like testing. Pick one or two of these in passing during class.
            </p>
            <ul className="mt-3 grid gap-1.5 md:grid-cols-2">
              {[
                "Today we practised controlling our fingers carefully.",
                "I noticed you made your lines very slowly and carefully.",
                "You kept trying even when it felt tricky.",
                "You chose your colours very thoughtfully today.",
                "I saw you using your imagination.",
                "You made something in your own special way.",
                "Your hands are getting stronger with tools.",
                "You remembered how to use the material independently.",
                "You tried a new idea today.",
                "You worked very patiently on your artwork.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange/80" />
                  <span className="flex-1">&ldquo;{line}&rdquo;</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] leading-relaxed text-ink-muted">
              The focus of these conversations: helping children notice effort, encouraging independence, appreciating creative choices, building confidence, and helping children feel proud of learning and trying.
            </p>
          </div>
        )}
      </section>

      {/* ─── LEARNING OUTCOMES BY LEVEL (3-5 programmes) ─── */}
      {LO_LADDERS[programme.slug] && (() => {
        const ladder = LO_LADDERS[programme.slug];
        return (
          <section className="mt-10 px-4 md:px-8">
            <SectionTitle num="·" label="learning outcomes — by level">
              what &ldquo;going strong&rdquo; looks like at each level. the same activity runs at every level — only the rung changes, by attainment not age.
            </SectionTitle>
            {ladder.note && (
              <p className="mt-2 text-[11px] italic leading-relaxed text-ink-muted">{ladder.note}</p>
            )}
            <div className="mt-4 space-y-4">
              {ladder.groups.map((g) => {
                const hasLabels = g.rows.some((r) => r.label);
                return (
                  <div key={g.skill} className="overflow-hidden rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/5">
                    <p className="mb-2 text-[13px] font-extrabold lowercase text-ink">{g.skill}</p>
                    <div className="-mx-1 overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            {hasLabels && <th className="w-24" />}
                            {ladder.scale.map((s) => (
                              <th key={s} className="border-b border-ink/10 px-2 py-1.5 text-left text-[10px] font-extrabold lowercase text-brand-orange">
                                {s}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {g.rows.map((row, i) => (
                            <tr key={i} className="align-top">
                              {hasLabels && (
                                <td className="border-b border-ink/5 px-2 py-2 text-[11px] font-bold lowercase text-ink-muted">
                                  {row.label}
                                </td>
                              )}
                              {row.cells.map((c, j) => (
                                <td key={j} className="border-b border-ink/5 px-2 py-2 text-[11px] leading-relaxed text-ink-muted">
                                  {c}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-[11px] text-ink-subtle">
              promotion = securing the ★/hardest rung independently, more than once. the full prose lives in the{" "}
              <Link href="/plan/docs" className="font-semibold text-brand-orange">planning docs</Link>.
            </p>
          </section>
        );
      })()}

      {/* ═══════════════════════════════════════════════════════
          LANGUAGE-ONLY SECTIONS — only render for the language
          programme. Five core ideas, the 6-day book arc, the four
          group activity types, the 8 books grid, and the songs
          playlist. These plug in between the SEGMENTS accordion
          and the BOOKS ROW so the page reads top-to-bottom in the
          same order the user understands the programme.
          ═══════════════════════════════════════════════════════ */}
      {isLanguage && programme.languageBooks && programme.songs && (
        <>
          {/* ─── BOOK READING FORMAT — 3 days, interval, 3 days ─── */}
          <section className="mt-10 px-4 md:px-8">
            <SectionTitle num={sectionNum("how-it-works")} label="book reading format" />

            <p className="mt-2 text-[13px] font-medium leading-relaxed text-ink md:text-[14px]">
              Each book runs across two 3-day blocks with two other books in between. The first block introduces the book; the gap turns memorising into understanding; the second block returns to it as Version 2.0.
            </p>

            {/* Visual: 3 days · interval (2 books) · 3 days */}
            <div className="mt-4 overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/5">
              <div className="flex flex-col gap-px bg-ink/5 md:flex-row">
                <div className="flex-1 bg-segment-blue/15 p-4">
                  <p className="text-[10px] font-bold tracking-normal text-brand-orange">block 1 · days 1–3</p>
                  <p className="mt-1 text-[13px] font-extrabold lowercase text-ink md:text-[14px]">
                    book introduced
                  </p>
                  <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-ink-muted">
                    <li>· Day 1 — print knowledge (before &amp; during reading)</li>
                    <li>· Day 2 — narrative (during &amp; after reading)</li>
                    <li>· Day 3 — narration + group activity (easy level)</li>
                  </ul>
                </div>
                <div className="bg-brand-cream p-4 md:w-[180px]">
                  <p className="text-[10px] font-bold tracking-normal text-ink-subtle">interval</p>
                  <p className="mt-1 text-[13px] font-extrabold lowercase text-ink md:text-[14px]">
                    two other books
                  </p>
                  <p className="mt-2 text-[11.5px] leading-relaxed text-ink-muted">
                    The gap before the book returns is what turns memorising into understanding.
                  </p>
                </div>
                <div className="flex-1 bg-segment-yellow/20 p-4">
                  <p className="text-[10px] font-bold tracking-normal text-brand-orange">block 2 · days 4–6</p>
                  <p className="mt-1 text-[13px] font-extrabold lowercase text-ink md:text-[14px]">
                    book returns — version 2.0
                  </p>
                  <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-ink-muted">
                    <li>· Day 1 — directionality of print (revisited vocabulary)</li>
                    <li>· Day 2 — major actions / events (deeper narrative)</li>
                    <li>· Day 3 — group reconstruction + activity (hard level)</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-3 text-[11px] italic leading-relaxed text-ink-muted">
              Tap a book in section {sectionNum("language-books")} below to open its full plan — both blocks, day-by-day.
            </p>
          </section>

          {/* ─── BOOK READING — the 6-day arc ─── */}
          <section className="mt-10 px-4 md:px-8">
            <SectionTitle num={sectionNum("six-day-arc")} label="the 6-day book arc">
              How each book is read across 6 days, with a deliberate gap in the middle.
            </SectionTitle>

            <div className="mt-4 overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/5">
              <div className="grid gap-px bg-ink/5 md:grid-cols-3">
                {[
                  {
                    day: 1,
                    title: "Print knowledge — first read",
                    body:
                      "Read aloud all the way through. Point to words. Count words in the title. Build word awareness.",
                  },
                  {
                    day: 2,
                    title: "Narrative — during and after",
                    body:
                      "Identify setting and characters. Summarise events. Recall what happened.",
                  },
                  {
                    day: 3,
                    title: "Group activity (easy)",
                    body:
                      "Children act, perform, or build using the story.",
                  },
                ].map((d) => (
                  <div key={d.day} className="bg-segment-blue/15 p-4">
                    <span className="inline-flex h-6 items-center rounded-chip bg-brand-white px-2 text-[10px] font-extrabold text-ink ring-1 ring-ink/10">
                      Day {d.day}
                    </span>
                    <p className="mt-2 text-[12.5px] font-extrabold leading-tight text-ink md:text-[13px]">
                      {d.title.toLowerCase()}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 bg-brand-orange/10 px-4 py-3 text-center">
                <span className="text-[10px] font-bold tracking-normal text-brand-orange">
                  Two-book interval
                </span>
                <span className="text-[11px] italic text-ink-muted">
                  Children read other books before this one returns
                </span>
              </div>
              <div className="grid gap-px bg-ink/5 md:grid-cols-3">
                {[
                  {
                    day: 4,
                    title: "Print knowledge — version 2",
                    body:
                      "Print directionality. Sight words. Environmental print.",
                  },
                  {
                    day: 5,
                    title: "Narrative — version 2",
                    body:
                      "Children produce stories with a beginning, middle, and end.",
                  },
                  {
                    day: 6,
                    title: "Group activity (hard)",
                    body:
                      "The same activity from day 3, deepened.",
                  },
                ].map((d) => (
                  <div key={d.day} className="bg-segment-blue/15 p-4">
                    <span className="inline-flex h-6 items-center rounded-chip bg-brand-white px-2 text-[10px] font-extrabold text-ink ring-1 ring-ink/10">
                      Day {d.day}
                    </span>
                    <p className="mt-2 text-[12.5px] font-extrabold leading-tight text-ink md:text-[13px]">
                      {d.title.toLowerCase()}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Four group activity types */}
            <div className="mt-5">
              <p className="text-[12px] font-bold text-ink">The four group activity types</p>
              <p className="mt-1 text-[11px] italic leading-relaxed text-ink-muted">
                Each book gets one group activity that runs in two variations across days 3 and 6.
              </p>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {[
                  {
                    title: "Story re-enactment",
                    body: "Children act out parts of the story as a group.",
                  },
                  {
                    title: "Change story endings",
                    body: "Children invent and act out new endings.",
                  },
                  {
                    title: "Vocabulary reproduction",
                    body: "Small teams use target words in a skit or short conversation.",
                  },
                  {
                    title: "Puppet character",
                    body: "Each child takes on a character through a puppet, with a 60-second presentation.",
                  },
                ].map((a) => (
                  <div
                    key={a.title}
                    className="rounded-xl bg-segment-yellow/15 p-3 ring-1 ring-ink/5"
                  >
                    <p className="text-[12px] font-extrabold lowercase text-ink">
                      {a.title.toLowerCase()}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl bg-brand-orange/5 p-3 ring-1 ring-brand-orange/15">
                <p className="text-[11.5px] leading-relaxed text-ink-muted">
                  <span className="font-bold text-ink">educator note:</span> educators may use puppets from the story while conducting these activities. Children can either participate individually by taking turns, or be divided into small puppet groups, each group assigned a different character. Group members should discuss and agree on their responses or actions before participating in the activity.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 8 BOOKS IN ORDER ─── */}
          <section className="mt-10 px-4 md:px-8">
            <SectionTitle num={sectionNum("language-books")} label="the 8 books">
              In reading order. Tap a book to see why it sits in this position.
            </SectionTitle>
            <div className="mt-4">
              <LanguageBooksGrid books={programme.languageBooks} />
            </div>
            <p className="mt-4 text-[11px] italic leading-relaxed text-ink-muted">
              Books 1–2 build participation. Books 3–4 build describing and feeling language. Books 5–6 build
              complex character understanding. Books 7–8 build personal storytelling and dense vocabulary.
            </p>
          </section>

          {/* ─── COMMUNITY SINGING ─── */}
          <section className="mt-10 px-4 md:px-8">
            <SectionTitle num={sectionNum("songs")} label="community singing">
              A whole-class warm-up — each song builds rhyme, vocabulary, joining-in, and concepts at once.
            </SectionTitle>
            <div className="mt-4">
              <SongsPlaylist songs={programme.songs} />
            </div>
            {/* How to introduce — simple rule + the order in which
                the songs are added. */}
            <div className="mt-5 rounded-xl bg-brand-cream p-4 ring-1 ring-ink/5">
              <p className="text-[11px] font-bold tracking-normal text-brand-orange">
                How to introduce them
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted md:text-[13px]">
                Sing one song for <span className="font-semibold text-ink">5 sessions</span>. Then add the next song — sing both together for the next <span className="font-semibold text-ink">5 sessions</span>. Continue adding one song every 5 sessions in this order.
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted md:text-[13px]">
                Knick Knack Paddy Whack returns three times — first verses 1–3, then verses 4–6, then all 10 — so the song scales with the child.
              </p>
            </div>

          </section>

          {/* ─── PLAY-WRITES WORKBOOKS — educator reference ─── */}
          <section className="mt-10 px-4 md:px-8">
            <SectionTitle num="·" label="educator reference books">
              playwrites 1 &amp; playwrites 2
            </SectionTitle>
            <p className="mt-2 text-[13px] font-medium leading-relaxed text-ink md:text-[14px]">
              A play-based writing workbook used in the play-writes segment. Two levels — children move from level 1 to level 2 as they grow. Each chapter pairs with one of the eight books.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setPlayWritesLevel(lvl as 1 | 2)}
                  className="group flex flex-col items-center gap-3 rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift hover:ring-ink/[0.08]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/play-writes-${lvl}/page-01.png`}
                    alt={`play-writes level ${lvl} cover`}
                    className="h-44 w-auto rounded-md bg-brand-cream object-contain shadow-[0_6px_18px_rgba(44,43,40,0.10)] transition group-hover:shadow-[0_10px_24px_rgba(44,43,40,0.16)]"
                  />
                  <div className="text-center">
                    <p className="text-[14px] font-extrabold lowercase text-ink">
                      playwrites {lvl}
                    </p>
                    <p className="mt-1 text-[11px] italic text-ink-muted">
                      educator reference · 27 pages · 8 chapters
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange">
                      open the book →
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ─── BOOKS ROW ─── */}
      {(() => {
        type BookEntry = {
          cover: string;
          title: string;
          subtitle: string;
        } & (
          | { kind: "route"; href: string }
          | {
              kind: "modal";
              modalKey:
                | "artiverse-3-5"
                | "artistotle-3-5"
                | "imagine-playground-3-5"
                | "wonderworld-3-5"
                | "numbersgym-3-5";
            }
        );
        const books: BookEntry[] = [];
        if (programme.slug === "art-design-3-5") {
          books.push({
            kind: "modal",
            modalKey: "artiverse-3-5",
            cover: "/artiverse-book/01-accordion.png",
            title: "artwork references",
            subtitle: "reference artworks for the age — educators pick their own",
          });
          books.push({
            kind: "modal",
            modalKey: "artistotle-3-5",
            cover: "/artistotle-book/01-cover.png",
            title: "the artistotle book",
            subtitle: "educator reference · 3 artists · 13 projects",
          });
        }
        // 5-8 / 8-12 art programmes — each has its own artiverse book
        // generated from programme.artiverseUnits via the shared
        // ArtiverseFlipbook component. Cover = the first unit's hero image.
        if (programme.slug === "art-design-5-8") {
          const firstUnit = programme.artiverseUnits?.[0];
          books.push({
            kind: "route",
            href: "/artiverse-book-5-8",
            cover: firstUnit?.heroImageUrl ?? "/artiverse/art-5-8/unit-1.png",
            title: "artwork references",
            subtitle: `reference artworks · ${programme.artiverseUnits?.length ?? 0} artworks`,
          });
        }
        if (programme.slug === "art-design-8-12") {
          const firstUnit = programme.artiverseUnits?.[0];
          books.push({
            kind: "route",
            href: "/artiverse-book-8-12",
            cover: firstUnit?.heroImageUrl ?? "/artiverse/art-8-12/unit-1.png",
            title: "artwork references",
            subtitle: `reference artworks · ${programme.artiverseUnits?.length ?? 0} artworks`,
          });
        }
        // STEM 3–5 — two educator reference books built like the
        // artiverse / artistotle books.
        if (programme.slug === "robotics-3-5") {
          books.push({
            kind: "modal",
            modalKey: "imagine-playground-3-5",
            cover: "/prog-stem-3-5.png",
            title: "the imagine playground book",
            subtitle: "educator reference · 11 build projects",
          });
          books.push({
            kind: "modal",
            modalKey: "wonderworld-3-5",
            cover: "/prog-stem-3-5.png",
            title: "the wonderworld book",
            subtitle: "educator reference · 3 chapters · 15 activities",
          });
          books.push({
            kind: "modal",
            modalKey: "numbersgym-3-5",
            cover: "/prog-stem-3-5.png",
            title: "the numbersgym book",
            subtitle: "educator reference · 3 levels · self-paced",
          });
        }
        // The experience book is not surfaced in the hub — no card here.
        if (books.length === 0) return null;
        return (
          <section className="mt-10 px-4 md:px-8">
            <SectionTitle num={sectionNum("books")} label="educator reference books">
              flip through every reference book — for educators, not children
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => {
                const cardClasses =
                  "group flex flex-col items-center gap-3 rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift hover:ring-ink/[0.08]";
                // Artiverse uses a built JSX cover for its modal — render
                // the same artwork as the card thumbnail so the preview
                // matches what opens. Other books still show their cover
                // image file.
                // For books with a JSX cover, render the cover component
                // as the thumbnail so the card matches what opens. Modal
                // books use their own cover components; the route-based
                // 5-8 / 8-12 artiverse books share ArtiverseAgeCover.
                let thumbInner: React.ReactNode = null;
                if (book.kind === "modal") {
                  if (book.modalKey === "artiverse-3-5") {
                    thumbInner = <ArtiverseCoverArt size="thumb" />;
                  } else if (book.modalKey === "imagine-playground-3-5") {
                    thumbInner = <ImaginePlaygroundCoverArt size="thumb" />;
                  } else if (book.modalKey === "wonderworld-3-5") {
                    thumbInner = <WonderWorldCoverArt size="thumb" />;
                  } else if (book.modalKey === "numbersgym-3-5") {
                    thumbInner = <NumbersGymCoverArt size="thumb" />;
                  }
                } else if (book.kind === "route") {
                  if (book.href === "/artiverse-book-5-8") {
                    thumbInner = (
                      <ArtiverseAgeCover
                        size="thumb"
                        ageLabel="5–8"
                        unitCount={programme.artiverseUnits?.length ?? 0}
                        mediums={["tempera", "oil pastel", "watercolour", "acrylic", "mixed media"]}
                      />
                    );
                  } else if (book.href === "/artiverse-book-8-12") {
                    thumbInner = (
                      <ArtiverseAgeCover
                        size="thumb"
                        ageLabel="8–12"
                        unitCount={programme.artiverseUnits?.length ?? 0}
                        mediums={["watercolour", "acrylic", "oil pastels", "chalk pastels", "mixed media"]}
                      />
                    );
                  }
                }
                const thumb = thumbInner ? (
                  <div className="h-40 w-[110px] overflow-hidden rounded-md ring-1 ring-ink/10 shadow-[0_6px_18px_rgba(44,43,40,0.10)] transition group-hover:shadow-[0_10px_24px_rgba(44,43,40,0.16)]">
                    {thumbInner}
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-40 w-auto rounded-md bg-brand-cream object-contain shadow-[0_6px_18px_rgba(44,43,40,0.10)] transition group-hover:shadow-[0_10px_24px_rgba(44,43,40,0.16)]"
                  />
                );
                const inner = (
                  <>
                    {thumb}
                    <div className="text-center">
                      <p className="text-[14px] font-extrabold lowercase text-ink">{book.title}</p>
                      <p className="mt-1 text-[11px] italic text-ink-muted">{book.subtitle}</p>
                      <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange">
                        open the book →
                      </p>
                    </div>
                  </>
                );
                if (book.kind === "modal") {
                  const onClick =
                    book.modalKey === "artistotle-3-5"
                      ? () => setArtistotleBookOpen(true)
                      : book.modalKey === "imagine-playground-3-5"
                        ? () => setImaginePlaygroundBookOpen(true)
                        : book.modalKey === "wonderworld-3-5"
                          ? () => setWonderWorldBookOpen(true)
                          : book.modalKey === "numbersgym-3-5"
                            ? () => setNumbersGymBookOpen(true)
                            : () => setArtiverseBookOpen(true);
                  return (
                    <button
                      key={book.modalKey}
                      type="button"
                      onClick={onClick}
                      className={cardClasses}
                    >
                      {inner}
                    </button>
                  );
                }
                return (
                  <Link key={book.href} href={book.href} className={cardClasses}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })()}

      {/* ─── ARTIVERSE BOOK MODAL — opens from the books row ─── */}
      <ArtiverseBookModal
        isOpen={artiverseBookOpen}
        onClose={() => setArtiverseBookOpen(false)}
      />
      <ArtistotleBookModal
        isOpen={artistotleBookOpen}
        onClose={() => setArtistotleBookOpen(false)}
      />
      <ImaginePlaygroundBookModal
        isOpen={imaginePlaygroundBookOpen}
        onClose={() => setImaginePlaygroundBookOpen(false)}
      />
      <WonderWorldBookModal
        isOpen={wonderWorldBookOpen}
        onClose={() => setWonderWorldBookOpen(false)}
      />
      <NumbersGymBookModal
        isOpen={numbersGymBookOpen}
        onClose={() => setNumbersGymBookOpen(false)}
      />
      <PlayWritesBookModal
        level={playWritesLevel}
        isOpen={playWritesLevel !== null}
        onClose={() => setPlayWritesLevel(null)}
      />

    </div>
  );
}

// ─── helper components ───

function SectionTitle({
  num,
  label,
  children,
}: {
  num: string;
  label: string;
  children?: React.ReactNode;
}) {
  // Number chip is purely decorative — skip it when no number is
  // assigned so unnumbered sections (e.g. "the approach") don't show
  // a misaligned dot/bullet.
  const hasNum = num && num !== "·" && num !== "—";
  return (
    <div>
      <div className="flex items-center gap-2">
        {hasNum && (
          <span className="rounded-chip bg-brand-orange/10 px-2 py-0.5 text-[10px] font-bold text-brand-orange">
            {num}
          </span>
        )}
        <span className="text-[11px] font-bold tracking-normal text-ink-subtle">
          {label}
        </span>
      </div>
      {children && (
        <h2 className="mt-1.5 text-[20px] font-extrabold leading-tight text-ink md:text-[24px]">
          {children}
        </h2>
      )}
    </div>
  );
}
