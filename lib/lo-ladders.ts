// Learning-outcome ladders for the 3-5 programmes, surfaced on each
// overview. See planning/levels-and-skills-model.md. There are TWO kinds of
// skill at 3-5, and they are modelled differently:
//
//  • kind "levels" — a content / learning-trajectory skill. Each level is a
//    GENUINELY DIFFERENT target with its OWN milestone (north star). Two
//    children can be doing different things in the same activity. Some have
//    two ladders at once (vocabulary = the words × using them).
//
//  • kind "ladder" — a disposition (curiosity, problem-solving, creative
//    expression). ONE ladder of rungs toward ONE milestone; children sit at
//    different rungs and move at their own pace, but the goal is the same.
//    These are NOT "levels" — calling them that was the old mistake.
//
// 👁 = the educator observes it in play (never a test).

export interface LoLevel {
  name: string; // "level 1", "level 2", "level 3 ★"
  los: string[]; // what the child is learning at THIS level
  milestone: string; // the north star for this level — what "going strong" looks like
}

export interface LoLadderDim {
  dimension?: string; // present only for two-ladder skills (e.g. vocabulary)
  levels: LoLevel[];
}

export type LoSkill =
  | { skill: string; kind: "levels"; note?: string; ladders: LoLadderDim[] }
  | {
      skill: string;
      kind: "ladder";
      note?: string;
      rungs: { label: string; detail: string }[];
      milestone: string;
    };

export interface LoProgramme {
  levelNote?: string;
  skills: LoSkill[];
}

// helper to keep the data terse
const lv = (name: string, milestone: string, los: string[]): LoLevel => ({ name, milestone, los });
const L1 = "level 1";
const L2 = "level 2";
const L3 = "level 3 ★";

export const LO_LADDERS: Record<string, LoProgramme> = {
  // ─────────────────────────────── STEM ───────────────────────────────
  "robotics-3-5": {
    levelNote:
      "level is per-skill attainment, not age. for the two 'levels' skills the same game carries a different target per child — one child counts while another takes away, and 'winning' differs. the two dispositions are one ladder: the goal is the same for everyone, they just sit at different rungs.",
    skills: [
      {
        skill: "number sense",
        kind: "levels",
        ladders: [
          {
            levels: [
              lv(L1, "counts a set up to 10, says how many, and tells which of two small groups has more 👁", [
                "counts to 10 with one-to-one matching",
                "subitises 1–3 at a glance",
                "says 'how many' in a small set (cardinality)",
                "more / less / same with small groups",
              ]),
              lv(L2, "solves a simple 'how many altogether / how many left' with objects, within ~15 👁", [
                "counts to 20; before / after / between within 20",
                "joins and takes away with objects",
                "orders numbers; records with marks or objects",
              ]),
              lv(L3, "counts on to add and uses tens-and-ones to handle numbers past 20 👁", [
                "counts on from a number; counts back to take away",
                "tens & ones — groups of ten",
                "simple word problems within 20",
              ]),
            ],
          },
        ],
      },
      {
        skill: "logic",
        kind: "levels",
        ladders: [
          {
            dimension: "sorting & classifying",
            levels: [
              lv(L1, "sorts a mixed set by one feature they choose 👁", ["sorts by one feature — colour / shape / size / type"]),
              lv(L2, "re-sorts the same objects a second way when asked 👁", ["sorts by two features, or re-sorts by a new rule"]),
              lv(L3, "invents a sorting rule and explains why things belong 👁", ["makes own rule; explains why items belong / don't"]),
            ],
          },
          {
            dimension: "patterns & sequences",
            levels: [
              lv(L1, "continues an AB pattern (red-blue-red-blue…) 👁", ["copies & continues AB; first–next–last"]),
              lv(L2, "makes their own repeating pattern 👁", ["creates AB / AAB / ABB; orders 3–5 steps"]),
              lv(L3, "states the rule of a pattern and predicts what comes next 👁", ["complex patterns; names the rule; predicts & explains"]),
            ],
          },
        ],
      },
      {
        skill: "curiosity",
        kind: "ladder",
        note: "a disposition — grown by being around curious adults, not taught in steps. one goal; children sit where they sit.",
        rungs: [
          { label: "notices", detail: "spots obvious features & changes — colour, size, sound, a train stopping" },
          { label: "wonders", detail: "asks 'what / why / how' about what they see" },
          { label: "predicts", detail: "guesses what will happen and gives a simple reason" },
          { label: "investigates", detail: "tries things to find out, and compares what happened" },
        ],
        milestone: "asks their own questions and tries things out to find the answer 👁",
      },
      {
        skill: "problem solving",
        kind: "ladder",
        note: "a disposition — about persistence and flexibility. one goal; children sit where they sit.",
        rungs: [
          { label: "recognises", detail: "notices something isn't working" },
          { label: "tries", detail: "attempts an approach; tries another when it fails" },
          { label: "persists", detail: "keeps going after a setback" },
          { label: "solves", detail: "finds a fix and can say what worked" },
        ],
        milestone: "keeps trying different ways until they solve it, and can say what worked 👁",
      },
    ],
  },

  // ───────────────────────────── LANGUAGE ─────────────────────────────
  "language-storytelling-3-5": {
    levelNote:
      "every skill here is a 'levels' skill — the target itself changes by level, so the same story-game is run with a different aim per child. level is per-skill attainment, not age.",
    skills: [
      {
        skill: "speaking & listening",
        kind: "levels",
        ladders: [
          {
            levels: [
              lv(L1, "sits through a short story and answers a simple question about it 👁", [
                "listens to a short story & shows they follow",
                "answers with a word or two",
                "follows a one-step instruction",
              ]),
              lv(L2, "tells you 2–3 things that happened, in full sentences 👁", [
                "speaks in full sentences; answers who / what / where",
                "follows a two-step instruction",
                "recalls 2–3 things that happened",
              ]),
              lv(L3, "narrates an event or retells in order, with reasons, and takes turns in talk 👁", [
                "narrates / retells in sequence; gives reasons",
                "follows multi-step talk; takes conversational turns",
              ]),
            ],
          },
        ],
      },
      {
        skill: "vocabulary",
        kind: "levels",
        note: "two ladders at once — a child can be high on one and low on the other.",
        ladders: [
          {
            dimension: "the words (which words)",
            levels: [
              lv(L1, "names the everyday things and actions in a story 👁", ["tier-1 everyday words — objects, actions, feelings around them"]),
              lv(L2, "understands the new 'book words' from the week's story 👁", ["tier-2 story words met in books — 'enormous', 'gobble', 'whisper'"]),
              lv(L3, "chooses a precise word and knows a near-opposite 👁", ["precise / abstract words & word families — shades of a feeling, opposites"]),
            ],
          },
          {
            dimension: "using them (how well)",
            levels: [
              lv(L1, "copies and acts out a new word (see → act → say) 👁", ["repeats & acts the new word"]),
              lv(L2, "shows the new word's meaning when asked 👁", ["understands it — points, chooses, matches"]),
              lv(L3, "uses the new word spontaneously, somewhere new 👁", ["uses it in their own talk, in a new situation"]),
            ],
          },
        ],
      },
      {
        skill: "sound-play (the bridge to reading)",
        kind: "levels",
        note: "phonological awareness — the continuum from big sound units to small. level 3 often emerges at the top of this age band / into reception.",
        ladders: [
          {
            levels: [
              lv(L1, "claps the beats (syllables) in their name and spots a rhyme 👁", [
                "joins in rhymes; hears when two words rhyme",
                "claps syllables in names & words",
              ]),
              lv(L2, "tells you the first sound of a word and finds another that starts the same 👁", [
                "hears the first (and last) sound of a word",
                "matches words by first sound; blends onset-rime (c-at → cat)",
              ]),
              lv(L3, "blends c-a-t into 'cat' and breaks a short word into its sounds 👁", [
                "blends 3 sounds into a word; segments a short word",
                "swaps a sound to make a new word",
              ]),
            ],
          },
        ],
      },
      {
        skill: "storytelling & comprehension",
        kind: "levels",
        ladders: [
          {
            levels: [
              lv(L1, "names what's in the pictures and joins the repeated refrain 👁", [
                "points to & names what's in the picture",
                "joins in a repeated line",
              ]),
              lv(L2, "says what's happening and answers a 'why / what next' question 👁", [
                "describes what's happening; answers 'why' with 'because…'",
                "predicts what might happen next",
              ]),
              lv(L3, "retells a story in order with its main parts, and can change the ending 👁", [
                "retells with story-bones — who, where, problem, end",
                "changes / invents an ending; relates it to their life",
              ]),
            ],
          },
        ],
      },
      {
        skill: "early writing (pre-writing)",
        kind: "levels",
        ladders: [
          {
            levels: [
              lv(L1, "makes deliberate marks and big strokes — lines, circles 👁", ["marks & scribbles with control; big arm / shoulder movements"]),
              lv(L2, "copies a row of pattern shapes, left to right 👁", ["copies patterns left-to-right (lllll, ////, ∿∿); traces lines & shapes"]),
              lv(L3, "writes the shapes / letters of their own name 👁", ["forms simple shapes & letters; writes the shape of their name"]),
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────── ART ────────────────────────────────
  "art-design-3-5": {
    levelNote:
      "fine motor and colour are 'levels' skills — the target changes by level. creative expression is one ladder: the goal is the same for everyone, they just sit at different rungs.",
    skills: [
      {
        skill: "fine motor",
        kind: "levels",
        ladders: [
          {
            levels: [
              lv(L1, "holds a tool with a comfortable grip and makes the marks they intend 👁", ["holds & controls a tool; whole-hand → tripod grip; deliberate marks"]),
              lv(L2, "traces a shape staying on the line, and snips with scissors 👁", ["traces a line / shape staying on the path; uses scissors & glue with control"]),
              lv(L3, "draws recognisable shapes & figures and manages a detailed make 👁", ["draws recognisable shapes & figures; combines fine actions in a detailed piece"]),
            ],
          },
        ],
      },
      {
        skill: "colour",
        kind: "levels",
        ladders: [
          {
            levels: [
              lv(L1, "explores and notices colours as they make 👁", ["explores colour & materials freely; notices colour"]),
              lv(L2, "names the main colours and matches / sorts by colour 👁", ["names & matches colours; sorts by colour"]),
              lv(L3, "mixes two colours to make a new one and chooses colour on purpose 👁", ["mixes colours to make new ones; chooses colour with intent — warm / cool, mood"]),
            ],
          },
        ],
      },
      {
        skill: "creative expression",
        kind: "ladder",
        note: "a disposition — the urge to make and express. one goal; children sit where they sit.",
        rungs: [
          { label: "explores", detail: "tries ideas & media freely" },
          { label: "expresses", detail: "shows a feeling or idea in their work" },
          { label: "chooses", detail: "makes deliberate choices — subject, placement, colour" },
          { label: "authors", detail: "an intentional personal piece they can talk about" },
        ],
        milestone: "makes something that's their own idea and can tell you about it 👁",
      },
    ],
  },
};
