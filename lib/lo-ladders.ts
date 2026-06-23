// Learning-outcome ladders for the 3-5 programmes, surfaced on each
// overview. Each programme's ladder has its own scale (column headers) and
// a set of skill groups; a group either has one row (language/art — the
// skill IS the row) or several ability rows (stem — one row per ability).
// Source of truth: the programme notes + the imagine-playground doc. Keep
// cell text short — this is the scannable on-page version; the full prose
// lives in /plan/docs.

export interface LoLadder {
  scale: string[]; // column headers (the "levels")
  note?: string;
  groups: { skill: string; rows: { label?: string; cells: string[] }[] }[];
}

export const LO_LADDERS: Record<string, LoLadder> = {
  // ── STEM (robotics-3-5) — 4 skills × 4 abilities × easy/medium/hard ──
  "robotics-3-5": {
    scale: ["easy", "medium", "hard"],
    note: "spiral, not linear — easy/medium/hard differ by the independence, detail and reasoning expected. Same activity at every level.",
    groups: [
      {
        skill: "curiosity",
        rows: [
          { label: "notices", cells: ["obvious features/changes — colour, size, sound, a train stopping", "changes before/after testing, or when revisiting", "smaller details, repeated changes, differences across trials"] },
          { label: "wonders", cells: ["asks 'what' / responds to 'what do you see?'", "asks why/how about familiar events", "asks explanation-seeking questions, follows up on a result"] },
          { label: "predicts", cells: ["guesses when prompted ('will it move?')", "predicts before testing, gives a simple reason", "predicts using prior experience, evidence, or a rule"] },
          { label: "investigates", cells: ["tries an action to see what happens, with support", "changes one action/material, observes the result", "tests deliberately, compares prediction with result, explains"] },
        ],
      },
      {
        skill: "problem solving",
        rows: [
          { label: "recognises", cells: ["notices something is not working", "identifies where/what the problem is", "names the specific problem unprompted"] },
          { label: "tries", cells: ["attempts one action with support", "tries a different approach when the first fails", "tries 2+ strategies, selects one by result"] },
          { label: "persists", cells: ["tries again after encouragement", "returns to it after one failed attempt", "keeps testing/adjusting until the goal is reached"] },
          { label: "solves", cells: ["fixes a simple problem with help", "explains what changed to make it work", "names the cause + explains the fix: 'it stopped because… I changed…'"] },
        ],
      },
      {
        skill: "logic",
        rows: [
          { label: "sorts/classifies", cells: ["sorts by one feature (colour/shape/size/type)", "sorts by two features, or re-sorts by a new rule", "makes own rule + explains why items belong"] },
          { label: "patterns/sequences", cells: ["continues AB; first-next-last", "creates AB/AAB/ABB; orders 3–5 steps", "complex movement/signal/route patterns; names the rule"] },
          { label: "predicts from rule", cells: ["matches same colour/symbol/action", "uses a simple if-then rule", "uses two-condition rules / route constraints"] },
          { label: "reasons", cells: ["says what happened", "explains with 'because'", "explains multi-step cause-effect / rule-based outcome"] },
        ],
      },
      {
        skill: "number sense",
        rows: [
          { label: "connects quantity", cells: ["counts to 10; matches number to quantity", "counts to 20/30; records with drawings/objects", "counts sets to 50; writes to 50; rote to 100 (extension)"] },
          { label: "relates numbers", cells: ["more/less/same; before/after in routines", "before/after/between within 20/30; orders", "forward/backward within 50; compares two-digit"] },
          { label: "operates", cells: ["adds/removes informally in play", "join/take-away with objects within 15/20", "counting-on strategies; word problems within 20"] },
          { label: "measures/compares", cells: ["big/small, long/short, near/far, full/empty", "measures with non-standard units, compares", "records, orders + uses measurement/data to solve"] },
        ],
      },
    ],
  },

  // ── LANGUAGE — 5 skills × level 1/2/3 (the "going strong" cell at each
  // level; every LO carries a 👁 observe-check) ──
  "language-storytelling-3-5": {
    scale: ["level 1", "level 2", "level 3 ★"],
    note: "the cell is what 'going strong' looks like at that level. 👁 = the educator observes it (never a test). level is per-skill attainment, not age.",
    groups: [
      { skill: "listening", rows: [{ cells: ["sits for a short story & shows they're following 👁", "recalls 2–3 things that happened 👁", "hears & plays with sounds — rhyme, syllable-claps, first sound 👁"] }] },
      { skill: "speaking", rows: [{ cells: ["answers with a word or two 👁", "speaks in a full sentence; answers who/where 👁", "narrates an event / retells in sequence 👁"] }] },
      { skill: "storytelling & comprehension", rows: [{ cells: ["points to & names what's in the picture 👁", "describes what's happening; answers why ('because…') 👁", "retells with story-bones; changes the ending 👁"] }] },
      { skill: "vocabulary", rows: [{ cells: ["repeats & acts a new word (see→act→say) 👁", "shows they understand it (points/chooses) 👁", "uses the new word in their own talk that day 👁"] }] },
      { skill: "pre-writing", rows: [{ cells: ["makes marks & scribbles with control 👁", "copies patterns left-to-right (lllll, ////, ∿) 👁", "forms simple shapes / the shape of their own name 👁"] }] },
    ],
  },

  // ── ART — 3 skills × 4 rungs (starting out → ★ north star) ──
  "art-design-3-5": {
    scale: ["starting out", "getting there", "going strong", "★ north star"],
    note: "the same making activity holds all rungs — an L1 child explores the material while an L3 child plans a composition. 👁 = the educator observes it.",
    groups: [
      { skill: "fine motor", rows: [{ cells: ["holds & controls a tool, makes deliberate marks 👁", "traces a line/shape staying on the path 👁", "draws recognisable shapes & figures, repeats patterns 👁", "combines control in a detailed piece 👁"] }] },
      { skill: "colour", rows: [{ cells: ["explores colour & materials freely 👁", "names & matches colours 👁", "mixes colours & notices the result 👁", "uses colour with intention — warm/cool, mood 👁"] }] },
      { skill: "creative expression", rows: [{ cells: ["explores ideas & media freely, tries things 👁", "shows a feeling or idea in their work 👁", "makes deliberate choices — subject, placement 👁", "an intentional personal piece they can talk about 👁"] }] },
    ],
  },
};
