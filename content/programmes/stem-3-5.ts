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
  "kg-sort-guess": {
    id: "kg-sort-guess",
    segment: "wonder-world",
    title: "little kitchen · sort & guess",
    setupLine: "Sort real foods by a true rule, then guess a hidden one by ruling out.",
    howToPlay:
      "Children sort the food cards into two piles by a true rule, count each pile, then one child hides a card and gives clues while the others rule cards out until they name it.",
    players: "2–4 children · 1 educator",
    duration: "15–20 min",
    goal: "the child sorts food cards by a true rule, then names a hidden card from clues.",
    steps: [
      "lay out the food cards face-up.",
      "name a true rule — fruit / vegetable, or grows underground / above ground (by the part we eat).",
      "sort the cards into two piles on the table.",
      "count each pile and find its number on the mat's number track — which has more?",
      "one child hides a card and gives clues in their own words; the others turn ruled-out cards face-down, then name the card and say the \"because…\".",
    ],
    endsWhen: "the hidden card is named.",
    easierVariation:
      "one rule, teacher-named; sort and count one pile; skip the guess (level a, 3–4).",
    harderVariation:
      "the child chooses the rule, compares both piles, then gives free spoken clues for the guess (level b, 4–5).",
    skillIds: ["logic", "number-sense", "curiosity"],
    materials: [
      "Fruit cards (10) + vegetable cards (10)",
      "The cooking mat's number track (1–20)",
    ],
    educatorNote:
      "A rule must be TRUE. Underground foods are potato, carrot, radish, onion, beetroot — everything else grows above ground. Never sort by colour (apple, grapes come in more than one).",
    variations: [
      { name: "Two children", description: "One sorts, one checks and counts." },
      { name: "Small group", description: "Each child owns a pile." },
      { name: "Level up", description: "Sort by both rules in turn." },
      { name: "Level down", description: "The teacher places the first card." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "kg-cooking": {
    id: "kg-cooking",
    segment: "wonder-world",
    title: "little kitchen · cooking",
    setupLine: "Follow a picture recipe — count with dots and put the steps in order.",
    howToPlay:
      "Children pick a dish card, count one play-dough portion per dot on the recipe, lay the action cards in order, then cook the dish on the mat's plate.",
    players: "2–4 children · 1 educator",
    duration: "15–20 min",
    goal: "the child cooks a dish by counting play-dough portions to the dots and sequencing the action cards.",
    steps: [
      "pick a dish card and turn it over to the recipe (count-dots, a ½-glass, numbered steps).",
      "place one play-dough portion per dot and find the total on the mat's number track.",
      "lay the action cards in a row to match the numbered steps.",
      "cook on the plate — mould the dish, halve on the ½ / ¼ lines, fill the glass to ½.",
      "check and re-do any step that misfired.",
    ],
    endsWhen: "the dish is cooked and served.",
    easierVariation:
      "a 2–3 ingredient ★ dish (fruit bowl, lassi); count to ~10, one portion per dot (level a).",
    harderVariation:
      "a 3–4 ingredient ★★ dish; add two dot-groups within 10 and place the number token for the total, then halve on the ½ line (level b).",
    skillIds: ["number-sense", "problem-solving", "logic"],
    materials: [
      "Dish / recipe cards (18 dishes, ★ and ★★ rings)",
      "Ingredient + action cards",
      "The cooking mat (number track + ½ / ¼ plate + glass)",
      "Play-dough + number tokens (1–10)",
    ],
    namedBlocks: [
      {
        title: "how to read a recipe — no words",
        body:
          "Pick a dish by its front picture, then turn it over: the dots tell you how many of each ingredient (one play-dough portion per dot), a ½-glass means fill to half, and the numbered little pictures show the order of the actions.",
      },
    ],
    variations: [
      { name: "Kitchen line", description: "Each child does one action in turn." },
      { name: "Read & cook", description: "One child reads the dots, one cooks." },
      { name: "Level up", description: "Halve or share a portion." },
      { name: "Level down", description: "The teacher pre-places the portions, the child counts." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "kg-restaurant": {
    id: "kg-restaurant",
    segment: "wonder-world",
    title: "little kitchen · restaurant",
    setupLine: "Run a café — take orders, cook, bill and make change with pretend money.",
    howToPlay:
      "Children take roles (customer, chef, cashier), order off the menu, cook the dish, then bill and make change with pretend money on the invoice mat.",
    players: "2–4 children · 1 educator",
    duration: "15–20 min",
    goal: "the child runs a café off the menu and invoice — ordering, cooking, billing and making change.",
    steps: [
      "set up — flip one mat to its menu | invoice back; take roles customer · chef · cashier (with two children, one is chef and cashier).",
      "the customer orders off the menu by pointing, and sets the table.",
      "the chef cooks the dish on the plate (as in cooking).",
      "bill by token — drop each dish's price-coin into an invoice row and stack the coins in the total box.",
      "pay, then put the change in the change box.",
    ],
    endsWhen: "the bill is paid and change is given.",
    easierVariation:
      "order, cook and serve; count the plates — no money (level a).",
    harderVariation:
      "menu ₹1–₹10; pay and make change within 10 — a ₹6 bill paid with ₹10 gives ₹4 change (level b).",
    skillIds: ["number-sense", "problem-solving", "curiosity"],
    materials: [
      "Two cooking mats (one on its menu | invoice back)",
      "Dish cards",
      "Pretend money — ₹1 · ₹2 · ₹5 · ₹10",
    ],
    variations: [
      { name: "Swap roles", description: "Change roles each order." },
      { name: "Busy café", description: "More orders come in at once." },
      { name: "Level up", description: "A 2-dish bill, total ≤ ₹10." },
      { name: "Level down", description: "Every dish costs ₹1." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "kg-recipe-dev": {
    id: "kg-recipe-dev",
    segment: "wonder-world",
    title: "little kitchen · recipe development",
    setupLine: "Invent your own dish from the cards, predict it, then say why it works.",
    howToPlay:
      "Children choose ingredients into the tray, sequence their own action cards toward a goal, predict an observable, make and name the dish, then say why it works.",
    players: "2–4 children · 1 educator",
    duration: "15–20 min",
    goal: "the child invents a dish, predicts an observable, makes it, and says the \"because…\".",
    steps: [
      "choose ingredients into the tray (no recipe card).",
      "lay your own action cards in order toward a goal (\"make it drinkable in the glass\").",
      "predict an observable — colour, count, pieces, halves or shape (\"it'll be 3 yellow pieces\").",
      "make it on the plate, name it, and check — did the prediction hold?",
      "say the \"because…\"; the teacher notes it.",
    ],
    endsWhen: "the child names the dish and says why it works.",
    easierVariation:
      "combine 2–3 cards and name it; the teacher prompts one sense (level a).",
    harderVariation:
      "order the actions, predict an observable and check it, then justify the \"because\" (level b).",
    skillIds: ["curiosity", "problem-solving", "logic"],
    materials: [
      "Ingredient + action cards",
      "The small tray + the cooking mat",
      "Play-dough",
    ],
    variations: [
      { name: "Why-taster", description: "One invents, one keeps asking \"why?\"." },
      { name: "Menu of the day", description: "Invent a dish to add to the café menu." },
      { name: "Level up", description: "Add a constraint — \"use a vegetable\"." },
      { name: "Level down", description: "\"What could these two make?\"" },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
};

/* ─── 60-session table — WonderWorld (Little Kitchen) is the one
 * exploration segment; Logic Lab and NumbersGym run every session too. ─ */

const buildWonderWorld = (n: number): string => {
  // Little Kitchen — the four games rotate in a fixed order and are replayed
  // across the Session-B slots. Re-playing a game is the point: the same game
  // runs easy (3–4) then medium (4–5), deepening every time; 18 dishes mean a
  // class can cook for months without repeating.
  const cycle = ["kg-sort-guess", "kg-cooking", "kg-restaurant", "kg-recipe-dev"];
  return cycle[(n - 1) % cycle.length];
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
        "Imagination through everyday things. Children meet stem concepts — sorting, sequencing, fractions, classification — through the Little Kitchen kit — a repeatable kitchen board game played with food cards, two cooking mats and play-dough (no blocks). One kit, four games that grow with the child: sort & guess (logic), cooking (number sense), restaurant (money) and recipe development (invention). The same game is played two ways — easy for 3–4, medium for 4–5 — so it deepens across the year; 18 dishes mean a class can cook for months without repeating. No scores, no winners — the educator reads the play as observation. This is the exploration segment every session; more games can be added to the kit over time.",
      type: "rotating",
      rotationPool: Object.keys(wonderWorldActivities),
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
    {
      id: "experience-book",
      name: "Experience Book",
      durationRange: "10 min",
      objective:
        "Each child has a personal Experience Book. The educator writes one specific sentence about what the child did that day — a project they built, a question they asked, a number they counted, a 'because' they explained. The child adds a drawing or stamp. The book goes home regularly so parents can see growth. This is also where Number Sense level transitions are recorded.",
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
