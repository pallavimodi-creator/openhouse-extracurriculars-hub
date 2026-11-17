import type { CurriculumProgramme } from "@/content/types";

/* ───────────────────────────────────────────────────────────────
 * Music & Fitness — ages 3–5 (PLACEHOLDER).
 *
 * The fourth strand in the at-centre rotation (art → language → stem →
 * music & fitness). The opening and closing circle are the same as every
 * other strand; the games and activities in between are still being
 * designed and will be filled in. For now this renders as a clear
 * "in development" placeholder so the strand shows up everywhere it
 * should (rotation, calendar, home) without pretending to be finished.
 * ─────────────────────────────────────────────────────────────── */

export const musicFitness35: CurriculumProgramme = {
  id: "music-fitness-3-5",
  slug: "music-fitness-3-5",
  title: "music & fitness",
  category: "music",
  ageGroup: "3-5",
  ageLabel: "ages 3–5",
  heroImageUrl: "/openhouse-logo.png",
  tagline: "rhythm, movement and joyful fitness — through songs, beats and play.",
  description:
    "Music & Fitness is the fourth strand of the 3–5 rotation. Children sing, keep a beat, move their whole bodies, and build coordination, rhythm and strength — all through play. The full set of games and activities is being designed now; the opening and closing circle run exactly as they do on every other day.",
  totalSessions: 0, // placeholder — sessions to be designed
  skillAreas: [
    {
      id: "rhythm",
      name: "rhythm & beat",
      shortName: "rhythm",
      abilities: [
        { name: "listens", description: "Notices and responds to a steady beat or a change in the music." },
        { name: "keeps time", description: "Claps, taps or steps in time with a simple beat." },
        { name: "leads a beat", description: "Starts and holds a simple rhythm for others to follow.", isNorthStar: true },
      ],
    },
    {
      id: "movement",
      name: "movement & coordination",
      shortName: "movement",
      abilities: [
        { name: "moves", description: "Moves their whole body freely to music — big and small." },
        { name: "coordinates", description: "Combines two movements together (e.g. march and clap)." },
        { name: "controls", description: "Starts, stops and changes movement on a cue.", isNorthStar: true },
      ],
    },
    {
      id: "fitness",
      name: "strength & fitness",
      shortName: "fitness",
      abilities: [
        { name: "joins in", description: "Takes part in active play with energy." },
        { name: "balances", description: "Holds a balance or hops with growing control." },
        { name: "sustains", description: "Keeps going through a short active sequence.", isNorthStar: true },
      ],
    },
    {
      id: "expression",
      name: "expression & joy",
      shortName: "expression",
      abilities: [
        { name: "sings", description: "Joins in with songs and sounds." },
        { name: "expresses", description: "Shows a feeling or idea through movement or sound." },
        { name: "performs", description: "Shares a song, dance or movement with the group with confidence.", isNorthStar: true },
      ],
    },
  ],
  segmentDefinitions: [
    { id: "opening-circle", name: "opening circle", durationRange: "15 min", objective: "A warm start together — a hello and meet-and-greet, then a song or two to settle the group and wake up voices and bodies before the session begins. Pick songs from the song library — opening-circle set.", type: "fixed" },
    { id: "music-fitness", name: "music & fitness", durationRange: "35 min", objective: "The main music & fitness block — songs, beats, movement games and active play that build rhythm, coordination, fitness and joyful expression. The games and activities for this block are being designed now.", type: "fixed" },
    { id: "break", name: "break", durationRange: "10 min", objective: "A short rest and snack break in the middle of the longer two-hour class.", type: "fixed" },
    { id: "closing-circle", name: "closing circle", durationRange: "15 min", objective: "A calm finish together — a simple fitness / movement song to round off the class. Pick a movement song from the song library — closing-circle set.", type: "fixed" },
  ],
  sessionTable: [], // placeholder — daily plans to be designed
  activities: {},
  checkpoints: [],
};
