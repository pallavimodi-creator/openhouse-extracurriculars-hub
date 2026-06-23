import type {
  CurriculumProgramme,
  CurriculumActivity,
  CurriculumSessionEntry,
} from "@/content/types";

/* ─── STEM 3–5 — programme spec ────────────────────────────────────
 * Ages 3–5 · 90 minutes per session · 2 sessions per week
 * 60 sessions across ~7.5 months.
 *
 * Session structure (A and B alternate; Imagine Playground and
 * Kitchen Play are exploration-based segments that swap places):
 *
 *   imagine-playground / wonder-world    35 min
 *   logic-lab                            20 min
 *   numbers-gym                          25 min
 *   experience-book                      10 min
 *
 * Scheduling Note: The duration of Imagine Playground / Kitchen Play
 * sessions may be adjusted based on the scope of the activity. If a
 * project needs more time, educators may shorten Number Gym, Logic
 * Lab, or other components to ensure meaningful engagement and
 * completion of the project.
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

/* ─── Imagine Playground — 11 core build projects + 4 maker fillers ─
 * Each project listed here is a CurriculumActivity so it can be
 * surfaced via the library / segment popups. Lesson-plan detail
 * lives in components/ImaginePlaygroundBookModal.tsx (used as the
 * educator reference book on the overview page). ───────────────── */

const imaginePlaygroundProjects: Record<string, CurriculumActivity> = {
  "ip-train-time": {
    id: "ip-train-time",
    segment: "imagine-playground",
    title: "train time",
    setupLine: "Build a track and number the train cars.",
    howToPlay:
      "Children join track pieces, attach train cars, count pieces as they connect, and stick numbers on each car in order. Low-stakes entry to the block system; counting while building makes Number Sense visible from Day 1.",
    materials: ["Track pieces", "Train cars", "Number sticky notes"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-first-trip": {
    id: "ip-first-trip",
    segment: "imagine-playground",
    title: "first trip",
    setupLine: "Build a station, build a destination, take the train across.",
    howToPlay:
      "Children build a double-ended track and discover that a coloured action brick (red) changes the train's behaviour — first exposure to cause-and-effect bricks.",
    materials: ["Track pieces", "Train", "Red action bricks", "Red stop brick", "Green action bricks"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-load-the-train": {
    id: "ip-load-the-train",
    segment: "imagine-playground",
    title: "load the train",
    setupLine: "Pick a number card, load that many bricks.",
    howToPlay:
      "Direct number-to-quantity mapping. Children see 5 on a card, count 5 bricks, and load them. Number Sense made physical.",
    materials: ["Train cars", "Number bricks or notes", "Small loadable objects"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-longest-track": {
    id: "ip-longest-track",
    segment: "imagine-playground",
    title: "longest track",
    setupLine: "Build the longest track and measure it.",
    howToPlay:
      "Standard and non-standard measurement. Children build a track from a wall outwards, measure with a tape, and compare. Then they build towers and measure height.",
    materials: ["Track pieces", "Tape measure", "Number bricks for non-standard measuring"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-train-sound": {
    id: "ip-train-sound",
    segment: "imagine-playground",
    title: "train sound",
    setupLine: "Plan a journey using yellow, blue, and white bricks.",
    howToPlay:
      "Yellow, blue, and white action bricks change the train's behaviour. Children plan a journey before the train moves — first experience of forward planning and sequencing. White bricks light up inside a tunnel.",
    materials: ["Track pieces", "Train", "Action bricks (yellow, blue, white)", "Tunnel cutout"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-o-shaped-track": {
    id: "ip-o-shaped-track",
    segment: "imagine-playground",
    title: "o-shaped track",
    setupLine: "Build a looping track.",
    howToPlay:
      "Introduces looping — the same journey repeated. Children compare the O-track with a double-ended track. Foundation of computational thinking.",
    materials: ["Curved track pieces", "Straight track pieces", "Train", "Action bricks"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-y-shaped-track": {
    id: "ip-y-shaped-track",
    segment: "imagine-playground",
    title: "y-shaped track",
    setupLine: "Coloured tickets decide the path.",
    howToPlay:
      "First if-then thinking. If red ticket, then go to red stop. Children build a Y-track with a switch and use coloured bricks as tickets. Foundation of conditional logic.",
    materials: ["Y-shaped track", "Track switch", "Coloured bricks (tickets and stops)"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-trouble-on-the-road": {
    id: "ip-trouble-on-the-road",
    segment: "imagine-playground",
    title: "trouble on the road",
    setupLine: "Read the traffic signs and solve the route problem.",
    howToPlay:
      "Children apply route planning to solve traffic problems. The educator places action bricks randomly along the track — children identify the problem and choose the right traffic sign to fix it.",
    materials: ["Y-shaped track", "Building cards", "Action bricks", "Traffic sign set"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-ramps": {
    id: "ip-ramps",
    segment: "imagine-playground",
    title: "ramps",
    setupLine: "Build a ramp with magna tiles. Predict and measure how far cars roll.",
    howToPlay:
      "Children build ramps using magna tiles and other materials, then roll cars down. Before each roll they predict where the car will stop, then mark the actual stopping point on a number track and record results on a graph. Introduces motion, gravity, prediction.",
    materials: ["Magna Tiles", "Cars or rolling objects", "Track template pages", "Number bricks", "Result graphs"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-chain-reaction": {
    id: "ip-chain-reaction",
    segment: "imagine-playground",
    title: "chain reaction",
    setupLine: "One event triggers the next.",
    howToPlay:
      "Cause-and-effect at its richest. Children build trigger sequences in pairs, then combine all the pairs' work into one long chain reaction. They explain first cause, first event, and last event.",
    materials: ["Building pieces", "Objects that move, fall, push, or trigger"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ip-probability": {
    id: "ip-probability",
    segment: "imagine-playground",
    title: "probability",
    setupLine: "Predict, spin, record. Build a prize from what you collect.",
    howToPlay:
      "A spinner with coloured sections. Children predict, spin, and record outcomes across many rounds. They notice that more spaces of one colour means a better chance — but never a guarantee. Foundation of statistical thinking.",
    materials: ["Wheel model", "Coloured bricks (red, yellow, blue, turquoise)", "Result graphs"],
    debriefPrompts: [],
    type: "physical-game",
  },

};

/* ─── Kitchen Play — 3 rotating games (segment id stays "wonder-world")
 * STEM through real kitchen actions: sorting food, following recipes,
 * and running a café. Game 1 (Sort & Guess) and Game 2 (Cooking)
 * alternate from the start; Game 3 (Restaurant) unlocks after ~20
 * sessions (≈5 Cooking sessions in), then all three rotate.
 *
 * TODO(asset): Kitchen Play book + recipe list to be added soon
 * (from user). The old WonderWorldBookModal placeholder remains in
 * components/ until the new book is provided.
 *
 * FLAG: the segment id below is still "wonder-world" under the hood
 * (display name is "Kitchen Play") to avoid type churn. */

const wonderWorldActivities: Record<string, CurriculumActivity> = {
  // Game 1 — Sort & Guess
  "kp-sort-and-guess": {
    id: "kp-sort-and-guess",
    segment: "wonder-world",
    title: "sort & guess",
    setupLine: "Sort food by its traits, flip to match, then guess the mystery food.",
    howToPlay:
      "Three game types — Sort, Flip, and Guess — run in order over several sessions, with the rule getting harder each time. Type 1 (Sort) builds the trait language; Type 2 (Flip) adds memory and matching; Type 3 (Guess) only opens once Sort is learned.",
    materials: [
      "food cards (start with half the deck, fruits + vegetables only)",
      "2 hoops (or 2 marked floor areas)",
      "a chalk line for above/below",
    ],
    example:
      "Progress from colour recognition to category sorting, then above/below ground, then guessing. Ensure each skill is independently and consistently demonstrated before moving on. If a child sorts wrong, place their card beside the correct one and ask 'why did you sort this here?' / 'does this match the rule you chose?' — let them notice, don't tell.",
    variations: [
      {
        name: "Type 1 · Sort",
        description:
          "Run these in order over several sessions; same setup, the rule gets harder. Colour: assign one colour to each hoop; the educator sorts 3–4 cards to show how, then children sort the rest. Category: two areas = fruit/vegetable; the educator fixes the rule before starting and keeps it fixed (if tomato is a fruit today, it stays a fruit). Above/below ground: draw a line; cards go above or below by where the food grows; once secure, add a third zone 'on the ground'. Individual: each child gets a set number of cards and takes turns sorting into categories. Group: the educator assigns a category to each group and they sort their cards into it.",
      },
      {
        name: "Type 2 · Flip (memory + match)",
        description:
          "All cards face-up 20–30 sec; children look, then flip all face-down. Each child turns one card and hunts for its match, keeping the pair if it matches, returning it if not. Match rule rises with level: same colour → same category → same colour and category → the exact same food card.",
      },
      {
        name: "Type 3 · Guess (only after Sort is learned)",
        description:
          "One child picks a mystery food (kept secret). Others ask yes/no questions ('is it a fruit?', 'does it grow underground?'). Children can ask only 3 yes/no questions. After each answer, remove the ruled-out cards. Guess the food, then the finder explains 'because…' to connect the clues.",
      },
    ],
    difficultyLevels: [
      {
        level: "Easy",
        description:
          "Children sort on a single rule (e.g. fruit/vegetable); in Guess, no limited questions; educator supports if needed.",
      },
      {
        level: "Hard",
        description:
          "The educator gives a combination of traits (colour + category, or colour + above/below ground, or category + above/below ground) e.g. 'red fruit', 'yellow vegetable that grows above ground'; in Guess, the educator assigns a limited number of questions; children play independently or add a time constraint.",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },

  // Game 2 — Cooking
  "kp-cooking": {
    id: "kp-cooking",
    segment: "wonder-world",
    title: "cooking",
    setupLine: "Lay the recipe steps, collect the play-dough, cook station by station.",
    howToPlay:
      "Follow the recipe. The instruction is dictated by the educator according to the child's level (e.g. an easier 3–4 step instruction, and a harder variation, even on the same mat with the same recipe; extra steps for the harder recipe can be prompted by the educator separately to that group). Following the instructions, children lay the action cards and ingredient cards in order on the mat = the cooking steps. Collect the play-dough of the specific colour from the educator matching your ingredients (educators can make a portion of each clay and ask kids to collect). Follow the steps on the mat. Cut, pour, mix, mould — child performs these on their mat. Scoop, freeze, heat, blend — carry the mat to the station, do the action, run the station timer if needed and count the cook time, bring it back. Finish on the work-plate/glass; check & serve. educators can assign roles — one child reads the recipe and counts portions; the other walks the stations and cooks.",
    materials: [
      "recipe cards (easy / medium / hard — same recipe)",
      "fruit/vegetable cards as ingredients",
      "action cards (cut · mix · mould · pour · blend · heat · cool · scoop)",
      "cooking mat (work-plate with ½/¼ lines — mat A)",
      "play-dough + clay tools",
      "action station set around the room + a timer/clock (Heat · Cool/Freeze · Blend · Scoop — handled by educator at the station)",
    ],
    example:
      "Progression: counting before adding; adding before halving. Let a child notice a wrong step (e.g. 'the soup has no water') and fix it — that noticing-and-fixing is the problem-solving skill, not the finished dish.",
    variations: [
      {
        name: "Fractions & Adding (harder)",
        description:
          "After the dish is made, add the ½/¼ concept: halve a portion on the ½ line, quarter it on the ¼ line.",
      },
    ],
    difficultyLevels: [
      {
        level: "Easy",
        description: "Easy/medium recipe cards, type 1 gameplay",
      },
      {
        level: "Hard",
        description: "Difficult recipe cards, type 2 gameplay",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },

  // Game 3 — Restaurant (unlocks after ~20 sessions / ~5 Cooking sessions)
  "kp-restaurant": {
    id: "kp-restaurant",
    segment: "wonder-world",
    title: "restaurant",
    setupLine: "Order, cook, bill and pay — run the café in two rounds.",
    howToPlay:
      "Pre-game setup: the educator places the recipe cards on the menu card (max 5) and sets prices as a number of tokens; gives a set number of tokens to the customer; educators can divide them into groups with roles as customers and chef+cashier. Play 2 rounds and swap roles for the 2nd round. Stage 1 · Order & Cook: customer orders from the menu by pointing; one child/group is both chef and cashier; the chef takes the order and places the recipe card on the invoice side of the card; the chef cooks the dish on the kitchen mat; the chef discusses the recipe requirements with the customer and can ask the customer to choose the required ingredients (fruit/vegetable/toppings etc). Stage 2 · Bill & Pay: the cashier totals the bill (adding extra price for add-ons if used) on the invoice; the customer pays the total; the cashier gives change.",
    materials: [
      "two areas: a kitchen (the cooking mat) and a restaurant counter",
      "one menu card (educator sets the prices)",
      "pretend money — tokens",
      "the cooked dishes",
    ],
    example:
      "Don't add money until counting and serving are smooth: paying → making change → re-totalling for add-ons.",
    variations: [
      {
        name: "Add-ons (harder)",
        description:
          "The chef offers add-ons — 'extra cheese? butter? a vegetable?' — and tells the prices; the child chooses add-ons based on the tokens left. Add-ons cost ₹1–₹4 extra, so the bill must be re-totalled on the invoice.",
      },
    ],
    difficultyLevels: [
      {
        level: "Easy",
        description: "Customers and chefs with a single recipe",
      },
      {
        level: "Hard",
        description:
          "Chefs with multiple food items, cooking specified portions (e.g. ½ portion sandwich + ½ portion vegetable salad + 1 glass of orange juice)",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
};

/* ─── 60-session table — Imagine Playground / Kitchen Play alternate
 * Sessions 1, 3, 5… are Session A (Imagine Playground).
 * Sessions 2, 4, 6… are Session B (Kitchen Play; entry field is still
 * `wonderWorld` and segment id is still "wonder-world").
 * Logic Lab and NumbersGym run every session. ──────────────────── */

const buildPlayground = (n: number): string => {
  // 30 Session-A slots covering 11 core projects in fixed order.
  // Sessions 1–11 introduce each project once; the remaining 19
  // Session-As cycle revisits in fixed order so children meet each
  // project 2–3 times across the year, deeper each time.
  const order = [
    "ip-train-time",
    "ip-first-trip",
    "ip-load-the-train",
    "ip-longest-track",
    "ip-train-sound",
    "ip-o-shaped-track",
    "ip-y-shaped-track",
    "ip-trouble-on-the-road",
    "ip-ramps",
    "ip-chain-reaction",
    "ip-probability",
  ];
  return order[(n - 1) % order.length];
};

const buildKitchenPlay = (n: number): string => {
  // 30 Session-B slots (n = 1..30). Kitchen Play has 3 games.
  // Sessions begin alternating Game 1 (Sort & Guess) and Game 2
  // (Cooking). Game 3 (Restaurant) unlocks only after ~20 sessions,
  // by when children have done ~5 Cooking sessions; from then on all
  // three games rotate. (Segment id stays "wonder-world".)
  const SORT_AND_GUESS = "kp-sort-and-guess";
  const COOKING = "kp-cooking";
  const RESTAURANT = "kp-restaurant";

  // Slots 1–10 (Session-B 1–10 ≈ overall sessions 2–20): alternate
  // Sort & Guess / Cooking. From slot 11 onward, rotate all three.
  if (n <= 10) {
    return n % 2 === 1 ? SORT_AND_GUESS : COOKING;
  }
  const rotation = [SORT_AND_GUESS, COOKING, RESTAURANT];
  return rotation[(n - 11) % rotation.length];
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
  let aIndex = 1;
  let bIndex = 1;
  for (let i = 1; i <= 60; i++) {
    const isSessionA = i % 2 === 1;
    const entry: CurriculumSessionEntry = {
      sessionNumber: i,
      sessionType: isSessionA ? "A" : "B",
      logicLab: LOGIC_LAB_CYCLE[(i - 1) % LOGIC_LAB_CYCLE.length],
      numbersGym: `ng-l1-pg-${i}`, // placeholder marker — children pace themselves
      experienceBook: "experience-book",
      topicLayer: 1,
    };
    if (isSessionA) {
      entry.imaginePlayground = buildPlayground(aIndex);
      aIndex += 1;
    } else {
      entry.wonderWorld = buildKitchenPlay(bIndex);
      bIndex += 1;
    }
    out.push(entry);
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
    {
      id: "imagine-playground",
      name: "Imagine Playground",
      durationRange: "35 min",
      objective:
        "Imagination through building. Children meet stem concepts — math, physics, sequencing, conditionals, probability — through stories and hands-on building. Materials are blocks of different kinds: Math Train, Coding Express, STEAM Park, ramp materials, magna tiles, general blocks. The educator sets a challenge, lays out materials, and steps back. 11 core projects run in a fixed order, each met 2–3 times across the year — deeper every time. Why it alternates with Kitchen Play: both build curiosity, problem solving, and creation, but Imagine Playground works in the language of blocks and structures, while Kitchen Play works in the language of everyday kitchen actions. Children need both. Scheduling Note: The duration of Imagine Playground / Kitchen Play sessions may be adjusted based on the scope of the activity. If a project needs more time, educators may shorten Number Gym, Logic Lab, or other components to ensure meaningful engagement and completion of the project. Runs on Session A only.",
      type: "rotating",
      rotationPool: Object.keys(imaginePlaygroundProjects),
    },
    {
      // NOTE: the internal segment id stays "wonder-world" to avoid type
      // churn across the session table and CurriculumSessionEntry; the
      // display name and content are now "Kitchen Play". FLAG: a later
      // rename of the id string to "kitchen-play" is possible if wanted.
      id: "wonder-world",
      name: "Kitchen Play",
      durationRange: "35 min",
      objective:
        "STEM concepts — sorting, sequencing, fractions, classification — through real kitchen actions: sorting food, following recipes, and running a café. Kitchen Play activities rotate. Sessions begin alternating between Game 1 (Sort & Guess) and Game 2 (Cooking). Game 3 (Restaurant) unlocks only after 20 sessions when children have completed about 5 Cooking sessions; from then on, all three games rotate. Materials: action cards · food cards · recipe cards · category cards · cooking mat with menu template on reverse · play-dough + clay tools · pretend-money tokens. Runs on Session B only.",
      type: "rotating",
      rotationPool: Object.keys(wonderWorldActivities),
    },
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
  ],
  sessionTable: buildSessionTable(),
  activities: {
    ...imaginePlaygroundProjects,
    ...wonderWorldActivities,
    ...logicLabGames,
  },
  checkpoints: [],
};
