import type {
  CurriculumProgramme,
  CurriculumActivity,
  CurriculumSessionEntry,
} from "@/content/types";

/* ─── STEM 3–5 — programme spec ────────────────────────────────────
 * Ages 3–5 · 90 minutes per session · 2 sessions per week
 * 60 sessions across ~7.5 months.
 *
 * Session structure (WonderWorld is the exploration segment — the
 * Little Kitchen game; more games can be plugged into the kit later):
 *
 *   wonder-world                         35 min
 *   logic-lab                            20 min
 *   numbers-gym                          25 min
 *   experience-book                      10 min
 *
 * Scheduling Note: The duration of WonderWorld may be adjusted based on
 * the scope of the activity. If a game needs more time, educators may
 * shorten Numbers Gym, Logic Lab, or other components.
 * ----------------------------------------------------------------- */

/* ─── Logic Lab games ─────────────────────────────────────────────
 * 6 games rotate across all 60 sessions. Each game has 4 difficulty
 * layers built in so the same game can run in Month 1 and Month 6,
 * deeper each time. ───────────────────────────────────────────── */

const logicLabGames: Record<string, CurriculumActivity> = {
  // TODO(image): Candy Sort needs file "Candy sort .png" (from user)
  "ll-candy-sort": {
    id: "ll-candy-sort",
    segment: "logic-lab",
    title: "candy sort",
    setupLine: "Sort, spot the pattern, match and find — candies by their traits.",
    howToPlay:
      "Three gameplay areas, each with several games that progress in the order listed.\n\nSORT — Children group or identify candies by a shared trait — sort, guess, or find the odd one based on colour, shape, or pattern.\n\nPATTERN — Children observe a candy sequence, understand the rule, and predict what comes next, taking turns adding the correct candy.\n\nMATCH/FIND — Children listen to a cue, number, or matching trait and search for the correct candy, taking turns picking, matching, and naming aloud.",
    example:
      "Each gameplay area (Sort, Pattern, Match/Find) contains several games that progress in the order listed — work through them in sequence. Within any one game, the educator sets the support level (Easy/Medium/Hard) to match the child, so a child might be at 'Easy' on a new Pattern game while already at 'Hard' on a familiar Sort game.",
    variations: [
      {
        name: "Sort · Venn Sort",
        description:
          "Divide the class into 2–3 groups. Give each group a pile of candy cards in the centre. The educator shows one sorting rule (e.g. colour: red candies / shape: round candies / pattern: striped candies). The educator first picks and sorts 3–4 candies that follow the rule. Children look through the pile and take turns picking one candy at a time; each checks if it matches the rule and, if so, places it in the correct group. Continue until all children have had a turn or the pile is sorted.",
      },
      {
        name: "Sort · Candy Sort",
        description:
          "Divide into small groups of 2–3. Give each group a pile in the centre. The educator gives each child/group one sorting rule (colour: red/blue/yellow; shape: round/wavy/umbrella; pattern: striped/dotted/plain). Children find all candies matching their rule, then count how many they found; the educator can also ask them to count the ones that don't match. If a group finds candies belonging to another group's rule, they exchange them. To make it harder, add a second rule within the sorted set (e.g. 'from your blue candies, now find only the wavy blue candies'). Start with colour, then shape, then patterns.",
      },
      {
        name: "Sort · Secret Rule",
        description:
          "Divide into groups of 2–3. Place a small group of candy cards in front of each group, all following one secret rule (e.g. all red / all round / all striped). Children look carefully and guess what is the same about all the candies; each takes a turn to share an idea and name the rule aloud (e.g. 'the rule is red candies'). The educator guides with 'what do you notice?' / 'what is the same?'",
      },
      {
        name: "Sort · Odd Candy Out",
        description:
          "Divide into groups of 2–3. Place a small row of candy cards; most share one trait (colour/shape/pattern) and one is different. Children find the candy that doesn't belong and say why (e.g. 'this one is not round').",
      },
      {
        name: "Pattern · What's Next?",
        description:
          "Divide into groups of 2–3. Place a few candy cards in a simple pattern (e.g. colour: red, blue, red, blue / shape: round, wavy, round, wavy). Children observe, guess what candy comes next, and take turns adding one candy to the pattern chain. Continue until every child has a turn or the pattern is complete. Start with colour patterns, then shape, then more complex sequences.",
      },
      {
        name: "Match/Find · Roll & Hunt",
        description:
          "Divide into groups of 2–3 with a pile in the centre. Each child rolls the die and picks candies based on the number shown. For a challenge, roll two dice (up to 6 candies). Continue until every child has a turn.",
      },
      {
        name: "Match/Find · Sweet Relay",
        description:
          "Divide into groups of 2–3 with a pile in the centre. One child picks any candy; the next child picks another candy that has one matching trait and says it aloud (e.g. 'my candy is red too'). Continue until no matching candies are left; the educator can start a new relay with a different candy and trait.",
      },
      {
        name: "Match/Find · I Spy Candy",
        description:
          "Divide into groups of 2–3. Place all candy cards visible. The educator or a child secretly chooses one candy and gives a clue (e.g. 'I spy a candy shaped like an umbrella'). Others look and take turns guessing; continue with a new candy and clue.",
      },
    ],
    difficultyLevels: [
      {
        level: "Easy",
        description: "educator demonstrates first and assists whenever required",
      },
      {
        level: "Medium",
        description: "children play the game independently",
      },
      {
        level: "Hard",
        description:
          "children take on the level-up version — a second sorting rule, two dice, child-given clues, or a time limit",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },

  "ll-stitch-me": {
    id: "ll-stitch-me",
    segment: "logic-lab",
    title: "stitch me",
    setupLine: "Pair up. Solve the prompt. Lace the bead.",
    howToPlay:
      "Each child is given one base template card (start with Level Easy) along with a shoelace and beads. The kids start lacing according to the pattern on the card. All kids start at Level Easy then gradually progress to Level Hard.",
    materials: [
      "Stitch me pattern cards (easy, medium, difficult)",
      "Sewing bases (beads, numbers)",
      "Shoelaces",
    ],
    variations: [
      {
        name: "Free pattern",
        description:
          "educator increases the difficulty level; at the harder level the kids are free to make their own pattern.",
      },
      {
        name: "Scavenger prompt",
        description:
          "The educator gives a verbal prompt including colour and number and the kids find them in the scavenger bin (box). Example: \"Blue 2, yellow 1…\".",
      },
      {
        name: "Riddle relay",
        description:
          "The whole class is divided into two groups, each with their own lace. The educator reads a riddle; a child from both groups races to pick the matching bead or number and lace it. Examples: \"I'm the same colour as a strawberry\" → red bead; \"I'm what comes after 2 and before 5\" → number 3 or 4. educator note: since there is only one set of number cards, the riddles should allow multiple possible answers.",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },

  "ll-dot-grid": {
    id: "ll-dot-grid",
    segment: "logic-lab",
    title: "dot grid",
    setupLine: "Pick a card, place disks, check by laying the card on top.",
    howToPlay:
      "Setup: place the play mat in the centre with the four colour disks beside it. Sort the cards by level. One child picks a card, observes the puzzle type, follows the instructions and recreates it on the mat. Children take turns placing the colour disks on the mat to solve the puzzle. After completing the card, try the bonus challenge on the other side of the card. Note: the bonus-round prompts are examples; educators may create similar prompts based on the children's learning and interests to extend gameplay.",
    materials: [
      "Dot grid mat",
      "See and predict cards - 16",
      "See and match cards - 16",
      "Coloured disks",
    ],
    variations: [
      {
        name: "Game Types · Copy",
        description:
          "Direct visual replication. Children build exactly what they see on the card.",
      },
      {
        name: "Game Types · Finish the Pattern",
        description:
          "Pattern recognition + completion. Children continue an existing pattern into the next row or column.",
      },
      {
        name: "Game Types · Mirror It Across",
        description:
          "Spatial reflection (left → right). Children build the mirror image on the next half, matching the first half.",
      },
      {
        name: "Game Types · Count How Many?",
        description:
          "Counting and comparison (more/less). Children arrange the dot pattern on the mat and count to answer 'how many?'",
      },
      {
        name: "Game Types · What Comes Next?",
        description:
          "Identifying rules and predicting. Children look at a sequence and place disks to show what comes next in a given cell.",
      },
      {
        name: "Team Challenge",
        description:
          "One pair or team creates a pattern/arrangement on the grid. The other team copies it exactly or solves the puzzle on their own board.",
      },
      {
        name: "Create & Challenge",
        description:
          "A child creates a pattern/arrangement on the grid; their partner then solves it. Use with card types Mirror It Across, How Many?, Finish the Pattern, or What Comes Next?",
      },
    ],
    difficultyLevels: [
      {
        level: "Easy",
        description: "Easy cards",
      },
      {
        level: "Medium",
        description: "Medium cards, Create & Challenge variation",
      },
      {
        level: "Hard",
        description: "Hard cards, Team Challenge variation",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },

  // TODO(image): Logical Road Builder needs file "Logical road builder.png" (from user)
  "ll-logical-road-builder": {
    id: "ll-logical-road-builder",
    segment: "logic-lab",
    title: "logical road builder",
    setupLine: "Build straight, then curvy paths — graduate to the puzzle book.",
    howToPlay:
      "Place tiles on the board one by one to create a connected road from the starting point to the end point. Choose between straight and curved tiles to make the path fit and flow without any gaps or dead ends. educators can initially start with just one base board, then add more base boards. educator can add a timer to increase difficulty in later variations.",
    materials: [
      "Logical Road Builder game board",
      "Road tiles",
    ],
    variations: [
      {
        name: "Variation 1",
        description:
          "The educator can give the child a limited number of tiles (example: 6 straight, 4 straight and 1 curved) and the child builds the road using only the given pieces.",
      },
      {
        name: "Variation 2",
        description:
          "educator gives more than 2 final points and the child builds a path reaching destination 1 then travelling to destination 2.",
      },
      {
        name: "Variation 3",
        description:
          "educator asks two kids to start from opposite ends with one final destination; both race to reach it first in a relay.",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },

  // TODO(image): Magna-Tiles needs file "Magnatiles .png" (from user)
  "ll-magna-tiles": {
    id: "ll-magna-tiles",
    segment: "logic-lab",
    title: "magna tiles",
    setupLine: "Match a flashcard, build the shape — five levels of difficulty.",
    howToPlay:
      "Children build using Magna-Tiles. The educator shows a prompt flashcard (laminated for reuse). Each card specifies the level — children match colours, count tiles, copy structure, fill borders, or invent freely. Children can play individually or as a group, depending on the card level.",
    materials: [
      "Magnatiles set",
      "Prompt cards (level 1 to 5)",
    ],
    variations: [
      {
        name: "Free Play",
        description:
          "Children use the Magna-Tiles to explore, create, and build freely — their own shapes, structures, objects, or designs — following their imagination, with no set rules.",
      },
    ],
    difficultyLevels: [
      {
        level: "Easy",
        description: "Level 1 cards, free play",
      },
      {
        level: "Medium",
        description: "Level 2, 3 cards",
      },
      {
        level: "Hard",
        description: "Level 4, 5 cards",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
};

/* ─── WonderWorld — the Little Kitchen game (segment id "wonder-world")
 * One kit, four repeatable games that grow with the child (played two
 * ways: easy 3–4 · medium 4–5): sort & guess, cooking, restaurant,
 * recipe development. No scores, no winners — the educator reads the
 * play as observation. Source: lexagod little_kitchen game design. */

const wonderWorldActivities: Record<string, CurriculumActivity> = {
  // The Little Kitchen kit — one kit, four repeatable games that grow with the
  // child (played two ways: easy 3–4 · medium 4–5). Replaces the earlier
  // one-off tiffin activities. No scores, no winners — the educator reads the
  // play as observation. Source: lexagod little_kitchen game design.
  // The Little Kitchen game — ONE kit, played four ways (its subtypes). The
  // educator picks the mode for the day; the game deepens across the year
  // (easy 3–4 · medium 4–5). No scores, no winners — the play is the
  // observation. Source: lexagod little_kitchen game design.
  "kg-little-kitchen": {
    id: "kg-little-kitchen",
    segment: "wonder-world",
    title: "little kitchen",
    setupLine: "One kitchen kit, played four ways — the educator picks the mode for the day.",
    howToPlay:
      "A repeatable kitchen board game with food cards, two cooking mats and play-dough (no blocks). It has four modes — the educator picks one each session. The same mode runs easy for 3–4 and medium for 4–5, so it deepens across the year; 18 dishes mean a class can cook for months without repeating.",
    players: "2–4 children · 1 educator",
    duration: "15–20 min",
    goal: "the child plays one of the four kitchen modes at their own level.",
    materials: [
      "Food cards (fruit + vegetable) + dish / recipe cards (18 dishes)",
      "Two cooking mats (number track · ½/¼ plate · menu | invoice back)",
      "Play-dough, number tokens (1–10), pretend money (₹1 · ₹2 · ₹5 · ₹10)",
    ],
    namedBlocks: [
      {
        title: "mode 1 · sort & guess (logic)",
        body:
          "Sort the food cards into two piles by a true rule (fruit/vegetable, grows under/above ground), count each pile, then one child hides a card and gives clues while the others rule cards out and name it. Easy: one rule, one pile, no guess. Medium: child picks the rule, compares both piles, gives free spoken clues.",
      },
      {
        title: "mode 2 · cooking (number sense)",
        body:
          "Pick a dish card, count one play-dough portion per dot on the recipe, lay the action cards in order, then cook on the plate (halve on the ½/¼ lines). Easy: a 2–3 ingredient dish, count to ~10. Medium: add two dot-groups within 10, then halve.",
      },
      {
        title: "mode 3 · restaurant (money)",
        body:
          "Take roles — customer, chef, cashier — order off the menu, cook the dish, then bill and make change with pretend money on the invoice mat. Easy: order, cook, count plates, no money. Medium: menu ₹1–₹10, pay and make change within 10.",
      },
      {
        title: "mode 4 · recipe development (invention)",
        body:
          "Choose ingredients into the tray (no recipe), sequence your own action cards toward a goal, predict an observable, make and name the dish, then say the \"because…\". Easy: combine 2–3 cards and name it. Medium: order the actions, predict and check, then justify.",
      },
    ],
    skillIds: ["logic", "number-sense", "problem-solving", "curiosity"],
    educatorNote:
      "Pick ONE mode per session and run it at the group's level. A sorting rule must be TRUE (never sort by colour). Keep money simple — 1-coin prices, change within 10.",
    debriefPrompts: [],
    type: "physical-game",
  },
  // Little Chefs — a pretend-play activity (not a game). One of ten food shops
  // per session, run from the Little Chefs recipe book.
  "lc-little-chefs": {
    id: "lc-little-chefs",
    segment: "wonder-world",
    title: "little chefs · pretend-play",
    setupLine: "Open one pretend food shop today — the child chooses, makes, experiments, and fills a shop order.",
    howToPlay:
      "A pretend-play activity (not a fixed game): run one of the ten food shops from the Little Chefs recipe book. Three connected experiences — choose & make the food, experiment with one feature of it, then fill a shop order with a maths or logic twist. Pick a few of the shop's challenge cards and repeat shops across the term — each shop comes round about three times over the year, deeper each time.",
    players: "small groups · 1 educator",
    duration: "15–20 min",
    materials: [
      "The Little Chefs recipe book",
      "Toy / felt / foam / clay / play-dough food materials + pretend coins",
    ],
    debriefPrompts: [],
    type: "facilitated",
  },
};

/* ─── 60-session table — WonderWorld runs every session and rotates its two
 * activities: Little Kitchen (a game) ↔ Little Chefs (pretend-play). Logic
 * Lab and NumbersGym run every session too. ──────────────────────────────── */

const buildWonderWorld = (n: number): string => {
  // WonderWorld rotates its TWO games: the Little Kitchen game (the educator
  // picks one of its four modes that day) ↔ Little Chefs (pretend-play, one
  // shop from the recipe book). They simply alternate across the 60 sessions.
  return n % 2 === 0 ? "lc-little-chefs" : "kg-little-kitchen";
};

const LOGIC_LAB_CYCLE = [
  "ll-candy-sort",
  "ll-stitch-me",
  "ll-dot-grid",
  "ll-logical-road-builder",
  "ll-magna-tiles",
];

const buildSessionTable = (): CurriculumSessionEntry[] => {
  const out: CurriculumSessionEntry[] = [];
  for (let i = 1; i <= 60; i++) {
    out.push({
      sessionNumber: i,
      sessionType: "A",
      logicLab: LOGIC_LAB_CYCLE[(i - 1) % LOGIC_LAB_CYCLE.length],
      numbersGym: `ng-l1-pg-${i}`,
      experienceBook: "experience-book",
      wonderWorld: buildWonderWorld(i),
      topicLayer: 1,
    });
  }
  return out;
};

/* ─── Programme ──────────────────────────────────────────────────── */

export const stem35: CurriculumProgramme = {
  id: "stem-3-5",
  slug: "robotics-3-5",
  title: "stem",
  category: "stem",
  ageGroup: "3-5",
  ageLabel: "ages 3–5",
  heroImageUrl: "/prog-stem-3-5.gif",
  tagline:
    "build curiosity, problem solving, logic, and number sense — through hands-on play.",
  description:
    "Children between 3 and 5 are natural scientists. They observe, question, test, and try again without being taught to. This programme takes that instinct seriously. Every session gives children something to build, something to investigate, something to figure out logically, and a number concept to hold in their hands. Four skills — Curiosity, Problem Solving, Logic, and Number Sense — grow across every session.",
  totalSessions: 60,
  skillAreas: [
    {
      id: "curiosity",
      name: "curiosity",
      shortName: "curiosity",
      abilities: [
        { name: "notices", description: "Pays attention to a specific detail or change — without being told what to look at." },
        { name: "wonders", description: "Asks a why or how question about something they observed — unprompted." },
        { name: "predicts", description: "Makes a guess about what will happen before testing — if I do this, then that." },
        { name: "investigates", description: "Tries something deliberately to find out — and connects what happened to something they already knew.", isNorthStar: true },
      ],
    },
    {
      id: "problem-solving",
      name: "problem solving",
      shortName: "problem solving",
      abilities: [
        { name: "recognises", description: "Notices that something is not working or a problem exists — without being told." },
        { name: "tries", description: "Attempts a different approach when the first one fails." },
        { name: "persists", description: "Keeps going through difficulty — returns to the problem without giving up." },
        { name: "solves", description: "Names the specific cause of the problem and explains what they changed to fix it.", isNorthStar: true },
      ],
    },
    {
      id: "logic",
      name: "logic",
      shortName: "logic",
      abilities: [
        { name: "sorts", description: "Groups objects or events by one clear rule — colour, shape, size, or type." },
        { name: "patterns", description: "Recognises, continues, or creates a repeating sequence." },
        { name: "predicts from a rule", description: "Uses a pattern or rule to say what comes next — before seeing it." },
        { name: "reasons", description: "Explains why something happened using because — connects cause to effect.", isNorthStar: true },
      ],
    },
    {
      id: "number-sense",
      name: "number sense",
      shortName: "number sense",
      abilities: [
        { name: "connects", description: "Counts to 10, matches numbers to quantities, recognises small quantities, understands in/on/under, arranges by size, sequences 1–4 steps." },
        { name: "relates", description: "Counts to 20, before/after/between, groups into sets, compares more/less/equal, arranges smallest to largest, continues patterns, sorts using rules." },
        { name: "applies", description: "Adds within 10, uses tens and ones up to 50, identifies odd/even, counts in 2s and 10s, measures with non-standard units, identifies 2D shapes by sides and corners.", isNorthStar: true },
      ],
    },
  ],
  segmentDefinitions: [
    { id: "opening-circle", name: "opening circle", durationRange: "15 min", objective: "A warm start together — a hello and meet-and-greet, then a song or two to settle the group and wake up voices and bodies before the session begins. Pick songs from the circle & songs bank — opening-circle set.", type: "fixed" },
    {
      // NOTE: the internal segment id stays "wonder-world" to avoid type
      // churn across the session table and CurriculumSessionEntry; the
      // display name and content are now "WonderWorld". FLAG: a later
      // rename of the id string to "kitchen-play" is possible if wanted.
      id: "wonder-world",
      name: "WonderWorld",
      durationRange: "35 min",
      objective:
        "Imagination through everyday things — children meet stem concepts (sorting, sequencing, fractions, classification) through two games that rotate across the year. One is the Little Kitchen game: one kit, played four ways — sort & guess (logic), cooking (number sense), restaurant (money) and recipe development (invention). The educator picks a mode each session, and the same mode runs easy for 3–4 and medium for 4–5, so it deepens over time. The other is Little Chefs: a recipe book of 10 pretend food shops (soup, pasta, cake, pizza, sushi, coffee, ice cream, pickle, cookie, sweet) where children choose recipes, mix, measure, pattern and price — the maths and science come out of making the food, one shop per session. No scores, no winners — the educator reads the play as observation.",
      type: "rotating",
      rotationPool: ["kg-little-kitchen", "lc-little-chefs"],
    },
    { id: "break", name: "break", durationRange: "10 min", objective: "A short rest and snack break in the middle of the longer two-hour class.", type: "fixed" },
    {
      id: "logic-lab",
      name: "Logic Lab",
      durationRange: "20 min",
      objective:
        "One game per session — rules explained once at first play, by the third session children know the rules and the educator only observes. 6 games rotate (Candy Sort, Stitch Me, Dot Grid, Logical Road Builder, Where Does It Go?, Magna Tiles). Each game has 4 difficulty layers built in so the same game runs deeper across the year.",
      type: "rotating",
      rotationPool: Object.keys(logicLabGames),
    },
    {
      id: "numbers-gym",
      name: "NumbersGym",
      durationRange: "25 min",
      objective:
        "Every child works in their personal gamebook at their own level. Three level books (1 → 2 → 3); a child moves up when they demonstrate the current level confidently across two independent sessions. The gamebook is a surface for thinking with objects — every page uses physical materials (coloured tiles, threading beads, balance scales, number tracks, counters, sorting trays).",
      type: "fixed",
    },
    { id: "closing-circle", name: "closing circle", durationRange: "15 min", objective: "A calm finish together — a simple fitness / movement song to round off the class. Pick a movement song from the circle & songs bank — closing-circle set.", type: "fixed" },
  ],
  sessionTable: buildSessionTable(),
  activities: {
    ...wonderWorldActivities,
    ...logicLabGames,
  },
  checkpoints: [],
};
