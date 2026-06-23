import { artDesignL1 } from "@/content/programmes/art-design-l1";
import { artDesignL1Skills } from "@/content/programmes/art-design-l1.skills";
import { artDesignL1Resources } from "@/content/programmes/art-design-l1.resources";
import { artDesignL1Sessions } from "@/content/programmes/art-design-l1.sessions";
import generatedAssets from "@/content/generated/assets.json";
import type {
  Programme,
  Resource,
  Session,
  Skill,
  SkillTag,
  ResourceType,
  DigitalAsset,
} from "@/content/types";

const PROGRAMMES: Programme[] = [artDesignL1];

// Merge synced assets into resources at module-load time.
const assetMap = generatedAssets as Record<string, Record<string, DigitalAsset[]>>;
const RESOURCES: Resource[] = artDesignL1Resources.map((r) => {
  const fromAssets = assetMap[r.programmeId]?.[r.id];
  return fromAssets && fromAssets.length > 0
    ? { ...r, digitalAssets: fromAssets }
    : r;
});
const SESSIONS: Session[] = artDesignL1Sessions;
const SKILLS: Skill[] = artDesignL1Skills;

export function listProgrammes(): Programme[] {
  return PROGRAMMES;
}

export function getProgramme(id: string): Programme | undefined {
  return PROGRAMMES.find((p) => p.id === id);
}

export function getSkillsForProgramme(programmeId: string): Skill[] {
  // v1: only Art & Design L1 has skills seeded
  if (programmeId === "art-design-l1") return SKILLS;
  return [];
}

export function getSkillByTag(tag: SkillTag): Skill | undefined {
  return SKILLS.find((s) => s.tag === tag);
}

export function listResources(programmeId: string): Resource[] {
  return RESOURCES.filter((r) => r.programmeId === programmeId);
}

export function getResource(id: string): Resource | undefined {
  return RESOURCES.find((r) => r.id === id);
}

export function listResourcesByType(
  programmeId: string,
  type: ResourceType
): Resource[] {
  return RESOURCES.filter(
    (r) => r.programmeId === programmeId && r.type === type
  );
}

export function listSessions(programmeId: string): Session[] {
  return SESSIONS.filter((s) => s.programmeId === programmeId);
}

export function getSession(id: string): Session | undefined {
  return SESSIONS.find((s) => s.id === id);
}

export interface ResourceFilters {
  types?: ResourceType[];
  skills?: SkillTag[];
  query?: string;
}

export function filterResources(
  resources: Resource[],
  filters: ResourceFilters
): Resource[] {
  const q = filters.query?.trim().toLowerCase();
  return resources.filter((r) => {
    if (filters.types && filters.types.length > 0) {
      if (!filters.types.includes(r.type)) return false;
    }
    if (filters.skills && filters.skills.length > 0) {
      if (!r.skills.some((s) => filters.skills!.includes(s))) return false;
    }
    if (q) {
      const hay = [r.title, r.subtitle ?? "", r.description]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function searchAll(query: string, programmeId: string) {
  const q = query.trim().toLowerCase();
  if (!q) return { resources: [], sessions: [] };
  const resources = listResources(programmeId).filter((r) =>
    [r.title, r.subtitle ?? "", r.description]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
  const sessions = listSessions(programmeId).filter((s) =>
    [s.name, `s${s.index}`].join(" ").toLowerCase().includes(q)
  );
  return { resources, sessions };
}

export const RESOURCE_TYPE_LABEL: Record<ResourceType, string> = {
  "art-gym": "Art Gym",
  artgame: "ArtGames",
  artistotle: "Artistotle",
  artiverse: "Artiverse",
  "art-care": "Art Care",
};

export const SKILL_COLOR_CLASS: Record<SkillTag, string> = {
  "L&T": "bg-skill-lt/10 text-skill-lt ring-skill-lt/20",
  "S&F": "bg-skill-sf/10 text-skill-sf ring-skill-sf/20",
  "C&P": "bg-skill-cp/10 text-skill-cp ring-skill-cp/20",
  "I&E": "bg-skill-ie/10 text-skill-ie ring-skill-ie/20",
  Responsibility: "bg-skill-resp/10 text-skill-resp ring-skill-resp/20",
};

export const SKILL_DOT_CLASS: Record<SkillTag, string> = {
  "L&T": "bg-skill-lt",
  "S&F": "bg-skill-sf",
  "C&P": "bg-skill-cp",
  "I&E": "bg-skill-ie",
  Responsibility: "bg-skill-resp",
};

// ─── Curriculum website accessors ───────────────────────────

import { curriculumProgrammes } from "@/content/programmes/curriculum-registry";
import type {
  CurriculumProgramme,
  CurriculumActivity,
  CurriculumSessionEntry,
  Category,
  ProgrammeStage,
} from "@/content/types";

export function listCurriculumProgrammes(): CurriculumProgramme[] {
  return curriculumProgrammes;
}

// Which track a programme belongs to on the hub landing page. Honours an
// explicit `stage` on the programme record; otherwise derives it from age
// group — the three 3-5 programmes are "trial", everything else is "live".
export function getProgrammeStage(p: CurriculumProgramme): ProgrammeStage {
  return p.stage ?? (p.ageGroup === "3-5" ? "trial" : "live");
}

export function getCurriculumProgramme(
  slug: string
): CurriculumProgramme | undefined {
  return curriculumProgrammes.find((p) => p.slug === slug);
}

export function getSessionPlan(
  slug: string,
  sessionNumber: number
): CurriculumSessionEntry | undefined {
  const prog = getCurriculumProgramme(slug);
  if (!prog) return undefined;
  return prog.sessionTable.find((s) => s.sessionNumber === sessionNumber);
}

export function getActivity(
  slug: string,
  activityId: string
): CurriculumActivity | undefined {
  const prog = getCurriculumProgramme(slug);
  if (!prog) return undefined;
  return prog.activities[activityId];
}

export function getAllActivities(slug: string): CurriculumActivity[] {
  const prog = getCurriculumProgramme(slug);
  if (!prog) return [];
  return Object.values(prog.activities);
}

export const CATEGORY_COLOR_CLASS: Record<Category, string> = {
  art: "bg-category-art",
  language: "bg-category-language",
  music: "bg-category-music",
  movement: "bg-category-movement",
  stem: "bg-category-stem",
};

export const CATEGORY_TEXT_CLASS: Record<Category, string> = {
  art: "text-category-art",
  language: "text-category-language",
  music: "text-category-music",
  movement: "text-category-movement",
  stem: "text-category-stem",
};

// ─── Activity image lookup ─────────────────────────────────
// Maps CurriculumActivity.id → static image URL. If no entry, the activity
// popup falls back to the gradient + icon placeholder.
export const ACTIVITY_IMAGES: Record<string, string> = {
  // Public Speaking games
  "script-flip": "/games/ps/script-flip.png",
  "tale-trail": "/games/ps/tale-trail.png",
  "body-talk": "/games/ps/body-talk.png",
  "watch-your-step": "/games/ps/watch-your-step.png",
  "train-of-thoughts": "/games/ps/train-of-thoughts.png",
  "guess-me": "/games/ps/guess-me.png",
  spaggle: "/games/ps/spaggle.png",
  "pitch-perfect": "/games/ps/pitch-perfect.png",
  "speech-a-palooza": "/games/ps/speech-a-palooza.png",
  "debate-duel": "/games/ps/debate-duel.png",
  "improv-survival": "/games/ps/improv-survival.png",
  "whats-that-sound": "/games/ps/whats-that-sound.png",
  body: "/games/ps/every-body-says.png",
  shuffle: "/games/ps/shuffle.png",
  "magic-box": "/games/ps/magic-box.svg",
  // Art games
  "match-me": "/games/art/match-me.png",
  "colour-flip": "/games/art/colour-flip.png",
  "shape-stitch": "/games/art/shape-stitch.png",
  "shape-fusion": "/games/art/shape-fusion.png",
  "cue-cards-game": "/games/art/cue-cards-game.png",
  // Alias for slug derived from title "cue cards" (used on the overview tab).
  "cue-cards": "/games/art/cue-cards-game.png",
  "i-spy-i-make": "/games/art/i-spy-i-make.png",
  "i-spot": "/games/art/i-spot.png",
  // Alias for slug derived from title "i spot tool/medium".
  "i-spot-tool/medium": "/games/art/i-spot.png",
  artventure: "/games/art/artventure.png",
  "imagine-that": "/games/art/imagine-that.png",
  "doodle-dash": "/games/art/doodle-dash.png",
  // Art & Design 3-5 game renders
  "shape-stitch-3-5": "/games/art-3-5/shape-stitch.png",
  "stitch-me": "/games/art-3-5/stitch-me.png",
  "mix-it-up": "/games/art-3-5/mix-it-up.png",
  "colour-riddles": "/games/art-3-5/colour-riddles.png",
  // The activity title was renamed to "ryb riddles" but the asset
  // file lives under the original colour-riddles slug. The overview
  // SEGMENTS accordion looks the image up by slug-from-title — alias
  // the new slug to the same file.
  "ryb-riddles": "/games/art-3-5/colour-riddles.png",
  "mini-artventure": "/games/art-3-5/mini-artventure.png",
  "i-spot-texture": "/games/art-3-5/i-spot-texture.png",
  "magna-tiles": "/games/art-3-5/magna-tiles.png",
  "shape-art": "/games/art-3-5/shape-art.png",
  "imagine-that-3-5": "/games/art-3-5/imagine-that.png",
  // STEM 3-5 — Logic Lab game renders
  "ll-logical-road-builder": "/games/stem-3-5/logical-road-builder.png",
  "ll-stitch-me": "/games/stem-3-5/stitch-me.png",
  "ll-candy-sort": "/games/stem-3-5/candy-sort.png",
  "ll-magna-tiles": "/games/stem-3-5/magna-tiles.png",
  "ll-dot-grid": "/games/stem-3-5/dot-grid.png",
  // STEM 3-5 — Imagine Playground: the 11 build projects share the
  // segment illustration.
  "ip-train-time": "/games/stem-3-5/imagine-playground.png",
  "ip-first-trip": "/games/stem-3-5/imagine-playground.png",
  "ip-load-the-train": "/games/stem-3-5/imagine-playground.png",
  "ip-longest-track": "/games/stem-3-5/imagine-playground.png",
  "ip-train-sound": "/games/stem-3-5/imagine-playground.png",
  "ip-o-shaped-track": "/games/stem-3-5/imagine-playground.png",
  "ip-y-shaped-track": "/games/stem-3-5/imagine-playground.png",
  "ip-trouble-on-the-road": "/games/stem-3-5/imagine-playground.png",
  "ip-ramps": "/games/stem-3-5/imagine-playground.png",
  "ip-chain-reaction": "/games/stem-3-5/imagine-playground.png",
  "ip-probability": "/games/stem-3-5/imagine-playground.png",
  // STEM 3-5 — Kitchen Play: the 3 themed games share the segment image.
  "kp-sort-and-guess": "/games/stem-3-5/kitchen-play.png",
  "kp-cooking": "/games/stem-3-5/kitchen-play.png",
  "kp-restaurant": "/games/stem-3-5/kitchen-play.png",
  // Language through Storytelling — 3-5 playground games. The two
  // names that overlap with public-speaking IDs are suffixed `-lang`
  // so each programme gets its own render.
  "whats-that-sound-lang": "/games/language/whats-that-sound.png",
  "guess-me-lang": "/games/language/guess-me.png",
  // Reuses the public-speaking "every body says" render — same game,
  // same hero image, just rotated through the language playground pool.
  "every-body-says-lang": "/games/ps/every-body-says.png",
  "syllable-sprint": "/games/language/syllable-sprint.png",
  "story-cube": "/games/language/story-cube.png",
  "language-wheel": "/games/language/language-wheel.png",
  "i-spy": "/games/language/i-spy.png",
  "swat-it-snap-it": "/games/language/swat-it-snap-it.png",
  "story-construction": "/games/language/story-construction.png",
  "think-fast": "/games/language/think-fast.png",
  "rhyming-house": "/games/language/rhyming-house.png",
  "rhyme-house": "/games/language/rhyming-house.png",
  "rhyming-ornaments": "/games/language/rhyming-ornaments.png",
  // Wordsmiths resources — 3 vocabulary tools rotated through the
  // Wordsmiths segment.
  "emotion-tiles": "/games/language/emotion-tiles.png",
  "story-calendar": "/games/language/story-calendar.png",
  // Robotics — experiment cue cards. Each card has its own thumbnail (first
  // page of that experiment's split PDF) so every session shows a distinct
  // image. Note: experiment ids use "pulleys" (plural) but the files are
  // named "pulley" (singular).
  "l1-levers-e1": "/robotics-manuals/l1-levers-e1.png",
  "l1-levers-e2": "/robotics-manuals/l1-levers-e2.png",
  "l1-levers-e3": "/robotics-manuals/l1-levers-e3.png",
  "l1-levers-e4": "/robotics-manuals/l1-levers-e4.png",
  "l2-levers-e1": "/robotics-manuals/l2-levers-e1.png",
  "l2-levers-e2": "/robotics-manuals/l2-levers-e2.png",
  "l2-levers-e3": "/robotics-manuals/l2-levers-e3.png",
  "l2-levers-e4": "/robotics-manuals/l2-levers-e4.png",
  "l2-levers-e5": "/robotics-manuals/l2-levers-e5.png",
  "l2-levers-e6": "/robotics-manuals/l2-levers-e6.png",
  "l1-pulleys-e1": "/robotics-manuals/l1-pulley-e1.png",
  "l1-pulleys-e2": "/robotics-manuals/l1-pulley-e2.png",
  "l1-pulleys-e3": "/robotics-manuals/l1-pulley-e3.png",
  "l1-pulleys-e4": "/robotics-manuals/l1-pulley-e4.png",
  "l1-pulleys-e5": "/robotics-manuals/l1-pulley-e5.png",
  "l2-pulleys-e1": "/robotics-manuals/l2-pulley-e1.png",
  "l2-pulleys-e4": "/robotics-manuals/l2-pulley-e4.png",
  "l2-pulleys-e5": "/robotics-manuals/l2-pulley-e5.png",
  "l1-gears-e1": "/robotics-manuals/l1-gears-e1.png",
  "l1-gears-e2": "/robotics-manuals/l1-gears-e2.png",
  "l1-gears-e3": "/robotics-manuals/l1-gears-e3.png",
  "l1-gears-e4": "/robotics-manuals/l1-gears-e4.png",
  "l2-gears-e1": "/robotics-manuals/l2-gears-e1.png",
  "l1-wheel-axle-e2": "/robotics-manuals/l1-wheel-axle-e2.png",
  "l1-wheel-axle-e3": "/robotics-manuals/l1-wheel-axle-e3.png",
  "l2-wheel-axle-e2": "/robotics-manuals/l2-wheel-axle-e2.png",
  "l2-wheel-axle-e3": "/robotics-manuals/l2-wheel-axle-e3.png",
  "l2-wheel-axle-e4": "/robotics-manuals/l2-wheel-axle-e4.png",
  "l2-wheel-axle-e5": "/robotics-manuals/l2-wheel-axle-e5.png",
  // Robotics — model manuals (thumbnail = first page of each model's manual)
  "build-see-saw": "/robotics-manuals/see-saw.png",
  "build-weighing-scale": "/robotics-manuals/weighing-scale.png",
  "build-crane": "/robotics-manuals/crane.png",
  "build-fishing-rod": "/robotics-manuals/fishing-rod.png",
  "build-copter": "/robotics-manuals/copter.png",
  "build-rickshaw": "/robotics-manuals/rickshaw.png",
  "build-wind-turbine": "/robotics-manuals/wind-turbine.png",
  "build-drawbridge": "/robotics-manuals/drawbridge.png",
  "build-tow-truck": "/robotics-manuals/tow-truck.png",
  "build-bulldozer": "/robotics-manuals/bulldozer.png",
  // Art gym book + cue card thumbnails — both 5-8 and 8-12 art programmes
  // fold these into Art Games + Gym. We point at the 5-8 book by default;
  // the 8-12 programme uses book 5/6 visually but the same activity slot
  // in the rotation pool, so a single thumbnail per id is fine.
  "art-gym-book": "/gym-books/book-3.png",
  "art-gym-cue-card": "/games/art/cue-cards-game.png",
};

// Art gym book images, keyed by book number.
export const GYM_BOOK_IMAGES: Record<number, string> = {
  3: "/gym-books/book-3.png",
  4: "/gym-books/book-4.png",
  5: "/gym-books/book-5.png",
  6: "/gym-books/book-6.png",
};

export function getActivityImage(id: string): string | undefined {
  return ACTIVITY_IMAGES[id];
}

// ─── Activity video lookup ─────────────────────────────────
// Maps CurriculumActivity.id → video URL. Two kinds are supported:
//   · YouTube URL — rendered as a responsive youtube-nocookie iframe
//   · Self-hosted /public/…mp4 — rendered with the HTML <video> tag
// The popup auto-detects YouTube URLs via extractYouTubeId().
export const ACTIVITY_VIDEOS: Record<string, string> = {
  // Public Speaking
  "tale-trail": "https://youtu.be/i4uz_IFvLpU",
  "watch-your-step": "https://youtu.be/AoDBt-FEi5w",
  "speech-a-palooza": "https://youtu.be/bEZCo9Ay0Lk",
  spaggle: "https://youtu.be/bvpnvWKhhws",
  "improv-survival": "https://youtu.be/QoufaYiNAmE",
  // Art & Design
  "colour-flip": "https://youtu.be/Um9c5L71xGE",
};

export function getActivityVideo(id: string): string | undefined {
  return ACTIVITY_VIDEOS[id];
}

export const SEGMENT_COLORS: Record<string, string> = {
  "roll-call": "bg-brand-orange/12 text-brand-orange",
  playground: "bg-brand-orange/12 text-brand-orange",
  showtime: "bg-brand-orange/12 text-brand-orange",
  "sign-off": "bg-brand-orange/12 text-brand-orange",
  "log-book": "bg-brand-orange/12 text-brand-orange",
  "art-gym": "bg-brand-orange/12 text-brand-orange",
  "art-games": "bg-brand-orange/12 text-brand-orange",
  artiverse: "bg-brand-orange/12 text-brand-orange",
  "art-care": "bg-brand-orange/12 text-brand-orange",
  experiment: "bg-brand-orange/12 text-brand-orange",
  build: "bg-brand-orange/12 text-brand-orange",
  "experience-book": "bg-brand-orange/12 text-brand-orange",
};
