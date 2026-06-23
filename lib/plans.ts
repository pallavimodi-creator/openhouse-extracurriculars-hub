// Registry of the 3-5 programme planning docs surfaced in the hub for
// review. Files live in /planning/<slug>.md and are read at build time by
// the doc viewer (app/plan/docs/[slug]/page.tsx). Keep this client-safe —
// no fs here.

export interface PlanDoc {
  slug: string;
  title: string;
  group: string;
  blurb?: string;
}

export const PLAN_GROUPS: string[] = [
  "start here",
  "teacher programme notes",
  "the 2-hour day",
  "activity packs",
  "the experience book",
  "pilot & research",
];

export const PLAN_DOCS: PlanDoc[] = [
  {
    slug: "parent-positioning",
    title: "why art, stem & language — the parent story",
    group: "start here",
    blurb: "the one big why (school readiness) + the ladder to the 5+ programmes",
  },
  {
    slug: "2hr-ecc-research-and-testing-plan",
    title: "research base, draft structure & testing plan",
    group: "start here",
    blurb: "the evidence + the 2-hour frame + how we pilot it",
  },
  {
    slug: "language-programme-note",
    title: "language — programme & formats note",
    group: "teacher programme notes",
    blurb: "goal · why-no-letters · skills → LOs by level · segment→skill map",
  },
  {
    slug: "stem-programme-note",
    title: "stem — programme & formats note",
    group: "teacher programme notes",
    blurb: "skills · the 11-month number-sense milestone spiral · levels",
  },
  {
    slug: "art-programme-note",
    title: "art & design — programme & formats note",
    group: "teacher programme notes",
    blurb: "fine-motor=writing-readiness · the 4-rung ladders · levels",
  },
  {
    slug: "pilot-01-language-day-2hr",
    title: "language day — 2-hour structure",
    group: "the 2-hour day",
  },
  {
    slug: "pilot-05-art-day-2hr",
    title: "art day — 2-hour structure",
    group: "the 2-hour day",
  },
  {
    slug: "pilot-06-stem-day-2hr",
    title: "stem day — 2-hour structure",
    group: "the 2-hour day",
  },
  {
    slug: "pack-opening-circle",
    title: "opening circle — activity pack",
    group: "activity packs",
    blurb: "5 scripted moves · the 5 focus games · the song rota",
  },
  {
    slug: "pack-closing-reflection",
    title: "closing reflection — activity pack",
    group: "activity packs",
    blurb: "5 scripted moves · feelings check · calm-down set",
  },
  {
    slug: "pack-deepened-blocks",
    title: "extending sections — optional how-to",
    group: "activity packs",
    blurb: "do · notice · say — spending the extra minutes well",
  },
  {
    slug: "experience-book",
    title: "the experience book",
    group: "the experience book",
    blurb: "daily page + per-child milestone journey",
  },
  {
    slug: "how-to-fill-the-experience-book",
    title: "how to fill it — teacher guide",
    group: "the experience book",
  },
  {
    slug: "pilot-04-session-log-and-parent-pulse",
    title: "educator session log & parent pulse",
    group: "pilot & research",
  },
];

export function getPlanDoc(slug: string): PlanDoc | undefined {
  return PLAN_DOCS.find((d) => d.slug === slug);
}
