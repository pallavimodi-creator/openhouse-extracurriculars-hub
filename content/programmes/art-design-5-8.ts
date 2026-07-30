import type {
  CurriculumProgramme,
  CurriculumActivity,
  CurriculumSessionEntry,
  CurriculumCheckpoint,
  ArtiverseUnit,
} from "@/content/types";
import { ART_TRIAL_SESSION_5_8 } from "./art-design-trial";

// ─── Artiverse units (25 units, 50 sessions) ────────────────

const PLACEHOLDER = "/artiverse/placeholder.svg";
void PLACEHOLDER;

const artiverseUnits: ArtiverseUnit[] = [
  {
    id: "unit-1",
    unitNumber: 1,
    medium: "Tempera",
    technique: "Fingerprinting — load a fingertip with paint, press cleanly onto paper, and add tiny details on top once dry.",
    whatChildrenMake: "Thumbprint animals & flowers",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "imagination & collaboration",
    ],
    topicOptions: [
      "Fingerprint animals",
      "Fingerprint flowers",
      "A fingerprint world I invented",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-1.png",
  },
  {
    id: "unit-2",
    unitNumber: 2,
    medium: "Oil pastel",
    technique: "Bold fill — draw the food's shape, then press the oil pastel hard to fill it with deep, solid colour.",
    whatChildrenMake: "A favourite food",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "A fruit I love",
      "A meal I had recently",
      "A food I invented that doesn't exist",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-2.png",
  },
  {
    id: "unit-3",
    unitNumber: 3,
    medium: "Watercolour",
    technique: "Brush control — load the brush, then vary pressure and direction to make different line types across the page.",
    whatChildrenMake: "A pattern of lines",
    days: 3,
    abilitiesCovered: [
      "line & texture",
    ],
    topicOptions: [
      "A rainbow of lines",
      "A busy city of lines",
      "Calm and wavy lines",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-3.png",
  },
  {
    id: "unit-4",
    unitNumber: 4,
    medium: "Tempera",
    technique: "Printing — paint one side of a leaf, press it firmly onto paper, and repeat to build up petals and pattern.",
    whatChildrenMake: "A leaf-print sunflower",
    days: 3,
    abilitiesCovered: [
      "line & texture",
      "colour & painting",
    ],
    topicOptions: [
      "A sunflower",
      "A tree in autumn",
      "A leafy jungle",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-4.png",
  },
  {
    id: "unit-5",
    unitNumber: 5,
    medium: "Oil pastel",
    technique: "Layering &amp; blending oil pastel — press light first, then hard; blend where two colours meet with a fingertip; add the little face last.",
    whatChildrenMake: "A sun with its own face",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A sleepy morning sun",
      "A cheeky sun",
      "A proud summer sun",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-5.png",
  },
  {
    id: "unit-6",
    unitNumber: 6,
    medium: "Oil pastel",
    technique: "Blending &amp; character — fill the star with blended blues and greens, then add a face and cheeks to give it personality.",
    whatChildrenMake: "A starry little character",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A happy star",
      "A shy star",
      "A shooting star with a face",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-6.png",
  },
  {
    id: "unit-7",
    unitNumber: 7,
    medium: "Oil pastel",
    technique: "Shape + texture — start from one big shape for the body, add smaller shapes for head and legs, then layer marks for surface texture.",
    whatChildrenMake: "An animal",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "A pet I know",
      "A wild animal",
      "An animal I invented",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-7.png",
  },
  {
    id: "unit-8",
    unitNumber: 8,
    medium: "Watercolour",
    technique: "Colour theory — group reds/oranges/yellows (warm) and blues/greens/purples (cool), mixing and placing each family on purpose.",
    whatChildrenMake: "A warm-and-cool study",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "A warm sun & a cool moon",
      "Fire and ice",
      "A warm and a cool half",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-8.png",
  },
  {
    id: "unit-9",
    unitNumber: 9,
    medium: "Mixed media",
    technique: "Shape play — cut and tear a variety of shapes, then arrange and glue them into a character before adding details.",
    whatChildrenMake: "A monster from shapes",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A friendly monster",
      "A silly monster",
      "A monster with too many eyes",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-9.png",
  },
  {
    id: "unit-10",
    unitNumber: 10,
    medium: "Mixed media",
    technique: "Collage still life — build the object from layered pieces (light and dark) so it looks rounded, not flat.",
    whatChildrenMake: "A pear still life with depth",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "balance & composition",
    ],
    topicOptions: [
      "A single pear",
      "A bowl of pears",
      "A pear and its shadow",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-10.png",
  },
  {
    id: "unit-11",
    unitNumber: 11,
    medium: "Acrylic",
    technique: "Wet-into-wet blending — apply one acrylic colour, then a second while it's still wet, and swirl where they meet.",
    whatChildrenMake: "Blended circles & shapes",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "Planets",
      "Bubbles",
      "A colour explosion",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-11.png",
  },
  {
    id: "unit-12",
    unitNumber: 12,
    medium: "Acrylic",
    technique: "Colour blocking — fill each area with even, solid colour right up to a clean edge, one colour at a time.",
    whatChildrenMake: "A bold rainbow",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
    ],
    topicOptions: [
      "A rainbow sky",
      "A rainbow animal",
      "Rainbow stripes",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-12.png",
  },
  {
    id: "unit-13",
    unitNumber: 13,
    medium: "Oil pastel",
    technique: "Shape + shimmer — build the body from one pointed oval, layer blue, silver and yellow, and blend for iridescence; add marks for scales.",
    whatChildrenMake: "One shimmering fish",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "A big fish",
      "A fish from the market",
      "A rainbow fish",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-13.png",
  },
  {
    id: "unit-14",
    unitNumber: 14,
    medium: "Oil pastel",
    technique: "Overlap &amp; composition — draw one fish, then a second that crosses it, so one appears in front of the other.",
    whatChildrenMake: "Two fish swimming together",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "balance & composition",
    ],
    topicOptions: [
      "Two fish",
      "A small shoal",
      "Fish crossing paths",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-14.png",
  },
  {
    id: "unit-15",
    unitNumber: 15,
    medium: "Watercolour",
    technique: "Bright washes + simple shapes — build each creature from an easy shape and fill with clean, bright watercolour.",
    whatChildrenMake: "A lively underwater world",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "shape & form",
    ],
    topicOptions: [
      "A crab and an octopus",
      "A rock pool",
      "A coral reef",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-15.png",
  },
  {
    id: "unit-16",
    unitNumber: 16,
    medium: "Mixed media",
    technique: "Shape play + pattern — build a creature from simple shapes, then fill it with your own patterns and marks.",
    whatChildrenMake: "An invented creature",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A friendly monster",
      "A magic fish",
      "A creature no one has seen",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-16.png",
  },
  {
    id: "unit-17",
    unitNumber: 17,
    medium: "Mixed media",
    technique: "Cut-paper composition — build the bird from a body, head, wing and tail cut from paper, arranging before gluing.",
    whatChildrenMake: "A bird built from paper",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "balance & composition",
    ],
    topicOptions: [
      "A city pigeon",
      "A garden bird",
      "A flock",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-17.png",
  },
  {
    id: "unit-18",
    unitNumber: 18,
    medium: "Mixed media",
    technique: "Composition + imagination — divide the page into shapes, colour them thoughtfully, and let the shapes suggest buildings, paths and places.",
    whatChildrenMake: "An imaginary city or world",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "balance & composition",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A city of shapes",
      "A castle world",
      "A world under the sea",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-18.png",
  },
  {
    id: "unit-19",
    unitNumber: 19,
    medium: "Mixed media",
    technique: "Story composition — make one element very large and others very small, and place them so the size difference tells a story.",
    whatChildrenMake: "A giant-fruit scene",
    days: 3,
    abilitiesCovered: [
      "balance & composition",
      "shape & form",
    ],
    topicOptions: [
      "A giant watermelon",
      "A huge strawberry with ants",
      "An enormous cake",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-19.png",
  },
  {
    id: "unit-20",
    unitNumber: 20,
    medium: "Acrylic",
    technique: "Shape simplification — look past the detail to the few big shapes that make the animal, and paint those confidently.",
    whatChildrenMake: "An animal from essential shapes",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "A bold cat",
      "A simple bird",
      "A favourite animal",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-20.png",
  },
  {
    id: "unit-21",
    unitNumber: 21,
    medium: "Acrylic",
    technique: "Collage + paint — paint the fruit, then add cut-paper highlights and details, arranging the group across the page.",
    whatChildrenMake: "A citrus still life",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "A bowl of citrus",
      "A cut lemon",
      "Oranges on a table",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-21.png",
  },
  {
    id: "unit-22",
    unitNumber: 22,
    medium: "Acrylic",
    technique: "Composition — place pots across the page with deliberate spacing and variety in size and colour so the whole page feels balanced.",
    whatChildrenMake: "A row of flower pots",
    days: 3,
    abilitiesCovered: [
      "balance & composition",
      "colour & painting",
    ],
    topicOptions: [
      "A windowsill of pots",
      "A market flower stall",
      "Pots big and small",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-22.png",
  },
  {
    id: "unit-23",
    unitNumber: 23,
    medium: "Mixed media",
    technique: "Construction + imagination — combine drawing, cut paper and found bits to build a robot, choosing each part on purpose.",
    whatChildrenMake: "An invented robot",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A helpful robot",
      "A silly robot",
      "A robot made of junk",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-23.png",
  },
  {
    id: "unit-24",
    unitNumber: 24,
    medium: "Painted-paper collage",
    technique: "Painted-paper collage — paint whole sheets with texture, dry them, then tear shapes and layer them into a bird.",
    whatChildrenMake: "A bright bird from painted paper",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A parrot",
      "A peacock",
      "A bird of my own",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-24.png",
  },
  {
    id: "unit-25",
    unitNumber: 25,
    medium: "Acrylic on black paper",
    technique: "Painting with light — on black paper, add light colours to make things appear to glow; a little light goes a long way against the dark.",
    whatChildrenMake: "A glowing night scene",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "Fireflies in a jar",
      "A dragonfly at dusk",
      "A glowing night pond",
    ],
    heroImageUrl: "/artiverse/art-5-8/unit-25.png",
  },
];

// ─── Activities ─────────────────────────────────────────────

const artGamesActivities: Record<string, CurriculumActivity> = {
  "match-me": {
    id: "match-me",
    segment: "art-games",
    title: "match me",
    setupLine:
      "each child has a 9-grid template. pick a bead from the bowl without looking. if it matches a square on your grid, place it.",
    howToPlay:
      "Coloured beads sit in a bowl or box in the centre. On their turn, a child picks one bead without looking, compares it to their grid, and places it if it matches. No match = bead goes back. First to finish a row or grid wins.",
    variations: [
      {
        name: "Variation 1 — Picture matching",
        description:
          "Child draws a picture card from a deck and places it on the matching colour grid. If no match, discard. First to finish a row or grid wins.",
      },
      {
        name: "Variation 2 — Pattern Bingo",
        description:
          "Educator calls out a colour + pattern combination (e.g. \"yellow straight lines\"). Children mark if present. First to finish a row or grid wins.",
      },
    ],
    materials: [
      "9-grid template card",
      "Coloured beads in a bowl or box",
      "Coloured object cards",
      "Timer",
      "Dry-erase markers (optional)",
    ],
    difficultyLevels: [
      { level: "Easy", description: "match colours only — with beads or picture cards." },
      { level: "Medium", description: "Pattern Bingo — educator calls out a colour + pattern combination and children mark if present." },
      { level: "Hard", description: "children play Bingo without educator's cues — each child takes a turn to call out a colour + pattern." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "colour-flip": {
    id: "colour-flip",
    segment: "art-games",
    title: "colour flip",
    setupLine:
      "56 colour cards face-down. flip two. matching colour = keep the pair. most pairs wins.",
    howToPlay:
      "Shuffle cards and place them face down. Children take turns flipping two cards on each turn.",
    variations: [
      {
        name: "Variation 1 — Colour matching",
        description:
          "Each player flips two Colour Cards on their turn. If both cards are the same colour, they keep the pair. If not, they flip the cards back. The player with the most pairs at the end wins.",
      },
      {
        name: "Variation 2 — Colour Mixing cards",
        description:
          "Each player starts with an Easy Mixing Card. On their turn, flip two Colour Cards from the grid. If the flipped colours match the formula on the Mixing Card, they keep the cards — if not, they place them back.",
      },
      {
        name: "Variation 3 — Missing mixing card",
        description:
          "The educator gives a Medium or Difficult Mixing Card with either 1 or 2 colours missing. Children find the matching pair by flipping 2 cards.",
      },
    ],
    materials: [
      "56 Colour Cards",
      "Easy Mixing Cards (14)",
      "Medium Mixing Cards (14)",
      "Difficult Mixing Cards (28)",
    ],
    difficultyLevels: [
      { level: "Easy", description: "Colour matching only." },
      { level: "Medium", description: "Easy and Medium Mixing Cards." },
      { level: "Hard", description: "Difficult Mixing Cards. Timer can be used to limit time." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "shape-stitch": {
    id: "shape-stitch",
    segment: "art-games",
    title: "shape stitch",
    setupLine:
      "sew through templates using shoelaces. running stitch, backstitch, or a pattern combining stitches of your choice.",
    howToPlay:
      "Children sew through templates using shoelaces. Running Stitch = dashed line. Backstitch = continuous joined line. Whip stitch = over the edges in a loop. Pattern Stitching = combines stitch types in a design of the child's choosing.",
    materials: [
      "Sewing templates (numbers, alphabets, and object outlines)",
      "Shoelaces",
      // reference links — appended here as there is no dedicated reference-links field.
      "reference: Running stitch — URL NOT PROVIDED (From Jennifer Sewing Board Stitch Tutorial)",
      "reference: whip stitch — https://youtube.com/shorts/4Z0qfHVjWQw?si=dC3Ib0D3rmSl7o9d",
      "reference: back stitch — URL NOT PROVIDED (From Jennifer Sewing Board Stitch Tutorial)",
    ],
    difficultyLevels: [
      { level: "Easy", description: "Running Stitch and Whip stitch." },
      { level: "Medium", description: "Backstitch." },
      { level: "Hard", description: "Pattern stitching." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "shape-fusion": {
    id: "shape-fusion",
    segment: "art-games",
    title: "shape fusion",
    setupLine:
      "build a subject from geometric pieces without speaking. your team guesses what you are making.",
    howToPlay:
      "Each child builds a subject from geometric pieces silently while their team guesses what it is.",
    variations: [
      {
        name: "Variation 1 — Child's choice",
        description:
          "The child picks which subject they want to create from the Shape Card and the other children guess.",
      },
      {
        name: "Variation 2 — Relay / race",
        description:
          "The group splits into teams and the teams compete to make the most subjects — whichever team finishes a card, or a set number of cards, first wins.",
      },
    ],
    materials: [
      "Two sets of 60 transparent geometric pieces",
      "Shape Cards B1 and B2",
    ],
    difficultyLevels: [
      { level: "Easy", description: "B1 cards, educator names category." },
      { level: "Medium", description: "B1 or B2, no hints." },
      { level: "Hard", description: "B2 cards, relay format." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "cue-cards-game": {
    id: "cue-cards-game",
    segment: "art-games",
    title: "cue cards",
    setupLine:
      "follow step-by-step drawing instructions from the card. then complete the extension challenge.",
    howToPlay:
      "One card placed centrally. Children follow step-by-step instructions simultaneously. Educator gives extension challenge after completion.",
    materials: [
      "Cue Card sets B1 and B2",
      "Drawing paper",
      "Fine-line markers or pencils",
    ],
    difficultyLevels: [
      { level: "Easy", description: "B1 cards, visible throughout, no timer." },
      { level: "Medium", description: "B1 or B2, educator names one thing to observe." },
      { level: "Hard", description: "B2 card shown for a minute then removed, drawn from memory." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "i-spy-i-make": {
    id: "i-spy-i-make",
    segment: "art-games",
    title: "i spy i make",
    setupLine:
      "scene card in the centre. i name an object — you find and draw it.",
    howToPlay:
      "Educator shows a scene card or places multiple line/texture cards in a row. Educator names a texture, line/shape, or texture. Child finds it, then draws.",
    materials: [
      "Scene cards (A5)",
      "Line / shape / texture cards",
      "Blank drawing sheets",
      "Pencils or crayons",
    ],
    difficultyLevels: [
      { level: "Easy", description: "Easy cards (scene cards) shown — child draws chosen object." },
      { level: "Medium", description: "Use of Texture or lines/shapes cards." },
      { level: "Hard", description: "Any card shown 30 seconds then removed, drawn from memory." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  artventure: {
    id: "artventure",
    segment: "art-games",
    title: "artventure",
    setupLine:
      "roll the dice, move your token, land on an art zone, draw a challenge card (draw, colour, build or mixed media), and complete it within the time limit.",
    howToPlay:
      "Set up board game. Roll dice, move, land on an art zone. Draw a challenge card (draw, colour, build or mixed media) and complete it within the time limit.",
    variations: [
      {
        name: "Cooperative variation",
        description:
          "The whole group plays as a team. Each child takes a turn rolling the dice, and all the children do the same challenge as on the card drawn by that child. Then the next player rolls.",
      },
    ],
    materials: [
      "Game board",
      "Player tokens",
      "Dice",
      "Timer",
      "Challenge card decks per zone",
      "Pencils or crayons",
      "Clay",
      "Blocks or pipe cleaners",
      "Colour sheets",
    ],
    difficultyLevels: [
      { level: "Easy", description: "B1 challenges from challenge cards." },
      { level: "Medium", description: "B2 challenges from challenge cards." },
      { level: "Hard", description: "B2 challenges with limited time." },
    ],
    promptHeading: "art zones",
    prompts: [
      "Sketch zone (Yellow tile/card) — children complete a simple sketch activity.",
      "Colour zone (Teal tile/card) — children complete a colouring activity on given sheets.",
      "Build zone (Pink tile/card) — children build a structure using blocks or pipe cleaners.",
      "Mixed media zone (Light blue tile/card) — children complete the given activity using mixed mediums.",
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "imagine-that": {
    id: "imagine-that",
    segment: "art-games",
    title: "imagine that",
    setupLine:
      "one child describes a card image without naming it. others draw what they hear.",
    howToPlay:
      "One child is the describer. The describer describes the card without naming the subject. The other children draw what they hear. After everyone is done, the describer picks the drawing that best matches what they had in mind. Variation — the child invents an imaginary subject and describes it while drawing simultaneously — for example, a whale with the body of a horse.",
    materials: [
      "Physical card decks — Animals and Objects",
      "Drawing paper",
      "Colour pencils or markers",
    ],
    difficultyLevels: [
      { level: "Easy", description: "easy cards — the guessing audience can ask the describer 2 questions." },
      { level: "Medium", description: "easy cards — no questions allowed." },
      { level: "Hard", description: "difficult cards — no clues allowed." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "doodle-dash": {
    id: "doodle-dash",
    segment: "art-games",
    title: "doodle dash",
    setupLine:
      "educator reads a prompt. everyone draws. unique drawings score a point, duplicates score zero.",
    howToPlay:
      "The educator reads out the prompt to draw. All children draw simultaneously for a set time, then reveal. Example prompt — \"something that starts with the letter C.\" If two or more children draw the same thing, they each score 0; a unique drawing scores a point. Bonus points for the funniest or most artistic drawing, voted by the group. Variation — children draw individually or as a team taking turns.",
    materials: [
      "Drawing prompts — https://wordwall.net/resource/86438051/sketch-it-up-deck-2",
      "Drawing paper or whiteboards",
      "Pencils or markers",
      "Timer",
    ],
    difficultyLevels: [
      { level: "Easy", description: "no time limit — take as long as you need." },
      { level: "Medium", description: "a set time per prompt — draw before the timer runs out." },
      { level: "Hard", description: "rapid sketching — a set number of prompts in a limited time, team or individual. must complete every drawing before time is up." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  // Art Gym entries — folded into the Art Games + Gym slot at this age.
  // Each runs as one of the 1–2 games per session (see segment objective).
  // No separate art-gym segment, no extension-day follow-on, no scribble book.
  "art-gym-book": {
    id: "art-gym-book",
    segment: "art-games",
    title: "art gym book",
    setupLine:
      "each child works in their own laminated art gym book at their own pace. 1–3 pages at a time, then a free replication on a sketch sheet.",
    howToPlay:
      "Children open the laminated art gym book to their next page and complete 1–3 pages with thread, clay, sequins, or erasable markers. Pages progress in order — page 1 to last — challenge increases page by page. Once the page is done, the child copies the same line / shape / pattern freely on a sketch sheet using a material of choice (crayon, colour pencil, brush pen, yarn + glue). No extension-day follow-on — the page and the sketch happen in the same slot.",
    materials: [
      "Laminated Art Gym Book (book 3 for 5-8, book 4 alternates)",
      "Erasable markers, thread, clay, sequins",
      "A4 sketch sheet",
      "Crayons, colour pencils, brush pens, yarn + glue (child's pick)",
    ],
    difficultyLevels: [
      { level: "Easy", description: "1 page from the book — child traces and replicates with the simplest material." },
      { level: "Medium", description: "2 pages — child picks from two materials and combines them on the sketch sheet." },
      { level: "Hard", description: "3 pages — child invents an extension on the sketch sheet (an object built from the practised line type)." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "art-gym-cue-card": {
    id: "art-gym-cue-card",
    segment: "art-games",
    title: "art gym cue card",
    setupLine:
      "educator picks one cue card from the pool. children follow the step-by-step illustrated prompt to draw on a fresh sketch sheet.",
    howToPlay:
      "Cue cards are illustrated step-by-step prompts the educator selects (rotates across types — animals, birds, buildings, food, nature, vehicles). Children read or follow the steps and complete a drawing on a sketch sheet. The educator walks around prompting each child to add one more detail their cue card didn't show. No extension-day follow-on — the cue card and any extension happen in the same slot.",
    materials: [
      "Cue card deck (laminated, age-appropriate)",
      "A4 sketch sheets",
      "Crayons, colour pencils, brush pens",
    ],
    difficultyLevels: [
      { level: "Easy", description: "child copies the cue card step by step." },
      { level: "Medium", description: "child completes the cue card then adds a background of their choice." },
      { level: "Hard", description: "child completes the cue card then invents one new step beyond it." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
};

// ─── Session Table ──────────────────────────────────────────

const sessionTable: CurriculumSessionEntry[] = [
  { sessionNumber: 0, artGym: "book-3", artGames: "match-me", artiverse: "unit-1", artiverseUnit: 0, artiverseDay: 0, artiverseUnitName: "trial session — art gym + extension combined, match me, tempera thumbprint animals & flowers", topicLayer: 0 },
  { sessionNumber: 1, artGym: "book-4", artGames: "colour-flip", artiverse: "unit-1", artiverseUnit: 1, artiverseDay: 1, artiverseUnitName: "tempera — thumbprint animals & flowers", topicLayer: 0 },
  { sessionNumber: 2, artGym: "cue-card-b1", artGames: "shape-stitch", artiverse: "unit-1", artiverseUnit: 1, artiverseDay: 2, artiverseUnitName: "tempera — thumbprint animals & flowers · develop & layer", topicLayer: 0 },
  { sessionNumber: 3, artGym: "cue-card-b2", artGames: "shape-fusion", artiverse: "unit-1", artiverseUnit: 1, artiverseDay: 3, artiverseUnitName: "tempera — thumbprint animals & flowers · finish & present", topicLayer: 0 },
  { sessionNumber: 4, artGym: "ext-book", artGames: "cue-cards-game", artiverse: "unit-2", artiverseUnit: 2, artiverseDay: 1, artiverseUnitName: "oil pastel — a favourite food", topicLayer: 0 },
  { sessionNumber: 5, artGym: "ext-cue-card", artGames: "i-spy-i-make", artiverse: "unit-2", artiverseUnit: 2, artiverseDay: 2, artiverseUnitName: "oil pastel — a favourite food · develop & layer", topicLayer: 0 },
  { sessionNumber: 6, artGym: "book-3", artGames: "artventure", artiverse: "unit-2", artiverseUnit: 2, artiverseDay: 3, artiverseUnitName: "oil pastel — a favourite food · finish & present", topicLayer: 0 },
  { sessionNumber: 7, artGym: "book-4", artGames: "imagine-that", artiverse: "unit-3", artiverseUnit: 3, artiverseDay: 1, artiverseUnitName: "watercolour — a pattern of lines", topicLayer: 0 },
  { sessionNumber: 8, artGym: "cue-card-b1", artGames: "doodle-dash", artiverse: "unit-3", artiverseUnit: 3, artiverseDay: 2, artiverseUnitName: "watercolour — a pattern of lines · develop & layer", topicLayer: 0 },
  { sessionNumber: 9, artGym: "cue-card-b2", artGames: "match-me", artiverse: "unit-3", artiverseUnit: 3, artiverseDay: 3, artiverseUnitName: "watercolour — a pattern of lines · finish & present", topicLayer: 0 },
  { sessionNumber: 10, artGym: "ext-book", artGames: "colour-flip", artiverse: "unit-4", artiverseUnit: 4, artiverseDay: 1, artiverseUnitName: "tempera — a leaf-print sunflower", topicLayer: 0 },
  { sessionNumber: 11, artGym: "ext-cue-card", artGames: "shape-stitch", artiverse: "unit-4", artiverseUnit: 4, artiverseDay: 2, artiverseUnitName: "tempera — a leaf-print sunflower · develop & layer", topicLayer: 0 },
  { sessionNumber: 12, artGym: "book-3", artGames: "shape-fusion", artiverse: "unit-4", artiverseUnit: 4, artiverseDay: 3, artiverseUnitName: "tempera — a leaf-print sunflower · finish & present", topicLayer: 0 },
  { sessionNumber: 13, artGym: "book-4", artGames: "cue-cards-game", artiverse: "unit-5", artiverseUnit: 5, artiverseDay: 1, artiverseUnitName: "oil pastel — a sun with its own face", topicLayer: 0 },
  { sessionNumber: 14, artGym: "cue-card-b1", artGames: "i-spy-i-make", artiverse: "unit-5", artiverseUnit: 5, artiverseDay: 2, artiverseUnitName: "oil pastel — a sun with its own face · develop & layer", topicLayer: 0 },
  { sessionNumber: 15, artGym: "cue-card-b2", artGames: "artventure", artiverse: "unit-5", artiverseUnit: 5, artiverseDay: 3, artiverseUnitName: "oil pastel — a sun with its own face · finish & present", topicLayer: 0 },
  { sessionNumber: 16, artGym: "ext-book", artGames: "imagine-that", artiverse: "unit-6", artiverseUnit: 6, artiverseDay: 1, artiverseUnitName: "oil pastel — a starry little character", topicLayer: 0 },
  { sessionNumber: 17, artGym: "ext-cue-card", artGames: "doodle-dash", artiverse: "unit-6", artiverseUnit: 6, artiverseDay: 2, artiverseUnitName: "oil pastel — a starry little character · develop & layer", topicLayer: 0 },
  { sessionNumber: 18, artGym: "book-3", artGames: "match-me", artiverse: "unit-6", artiverseUnit: 6, artiverseDay: 3, artiverseUnitName: "oil pastel — a starry little character · finish & present", topicLayer: 0 },
  { sessionNumber: 19, artGym: "book-4", artGames: "colour-flip", artiverse: "unit-7", artiverseUnit: 7, artiverseDay: 1, artiverseUnitName: "oil pastel — an animal", topicLayer: 0 },
  { sessionNumber: 20, artGym: "cue-card-b1", artGames: "shape-stitch", artiverse: "unit-7", artiverseUnit: 7, artiverseDay: 2, artiverseUnitName: "oil pastel — an animal · develop & layer", topicLayer: 0 },
  { sessionNumber: 21, artGym: "cue-card-b2", artGames: "shape-fusion", artiverse: "unit-7", artiverseUnit: 7, artiverseDay: 3, artiverseUnitName: "oil pastel — an animal · finish & present", topicLayer: 0 },
  { sessionNumber: 22, artGym: "ext-book", artGames: "cue-cards-game", artiverse: "unit-8", artiverseUnit: 8, artiverseDay: 1, artiverseUnitName: "watercolour — a warm-and-cool study", topicLayer: 0 },
  { sessionNumber: 23, artGym: "ext-cue-card", artGames: "i-spy-i-make", artiverse: "unit-8", artiverseUnit: 8, artiverseDay: 2, artiverseUnitName: "watercolour — a warm-and-cool study · develop & layer", topicLayer: 0 },
  { sessionNumber: 24, artGym: "book-3", artGames: "artventure", artiverse: "unit-8", artiverseUnit: 8, artiverseDay: 3, artiverseUnitName: "watercolour — a warm-and-cool study · finish & present", topicLayer: 0 },
  { sessionNumber: 25, artGym: "book-4", artGames: "imagine-that", artiverse: "unit-9", artiverseUnit: 9, artiverseDay: 1, artiverseUnitName: "mixed media — a monster from shapes", topicLayer: 0 },
  { sessionNumber: 26, artGym: "cue-card-b1", artGames: "doodle-dash", artiverse: "unit-9", artiverseUnit: 9, artiverseDay: 2, artiverseUnitName: "mixed media — a monster from shapes · develop & layer", topicLayer: 0 },
  { sessionNumber: 27, artGym: "cue-card-b2", artGames: "match-me", artiverse: "unit-9", artiverseUnit: 9, artiverseDay: 3, artiverseUnitName: "mixed media — a monster from shapes · finish & present", topicLayer: 0 },
  { sessionNumber: 28, artGym: "ext-book", artGames: "colour-flip", artiverse: "unit-10", artiverseUnit: 10, artiverseDay: 1, artiverseUnitName: "mixed media — a pear still life with depth", topicLayer: 0 },
  { sessionNumber: 29, artGym: "ext-cue-card", artGames: "shape-stitch", artiverse: "unit-10", artiverseUnit: 10, artiverseDay: 2, artiverseUnitName: "mixed media — a pear still life with depth · develop & layer", topicLayer: 0 },
  { sessionNumber: 30, artGym: "book-3", artGames: "shape-fusion", artiverse: "unit-10", artiverseUnit: 10, artiverseDay: 3, artiverseUnitName: "mixed media — a pear still life with depth · finish & present", topicLayer: 0 },
  { sessionNumber: 31, artGym: "book-4", artGames: "cue-cards-game", artiverse: "unit-11", artiverseUnit: 11, artiverseDay: 1, artiverseUnitName: "acrylic — blended circles & shapes", topicLayer: 0 },
  { sessionNumber: 32, artGym: "cue-card-b1", artGames: "i-spy-i-make", artiverse: "unit-11", artiverseUnit: 11, artiverseDay: 2, artiverseUnitName: "acrylic — blended circles & shapes · develop & layer", topicLayer: 0 },
  { sessionNumber: 33, artGym: "cue-card-b2", artGames: "artventure", artiverse: "unit-11", artiverseUnit: 11, artiverseDay: 3, artiverseUnitName: "acrylic — blended circles & shapes · finish & present", topicLayer: 0 },
  { sessionNumber: 34, artGym: "ext-book", artGames: "imagine-that", artiverse: "unit-12", artiverseUnit: 12, artiverseDay: 1, artiverseUnitName: "acrylic — a bold rainbow", topicLayer: 0 },
  { sessionNumber: 35, artGym: "ext-cue-card", artGames: "doodle-dash", artiverse: "unit-12", artiverseUnit: 12, artiverseDay: 2, artiverseUnitName: "acrylic — a bold rainbow · develop & layer", topicLayer: 0 },
  { sessionNumber: 36, artGym: "book-3", artGames: "match-me", artiverse: "unit-12", artiverseUnit: 12, artiverseDay: 3, artiverseUnitName: "acrylic — a bold rainbow · finish & present", topicLayer: 0 },
  { sessionNumber: 37, artGym: "book-4", artGames: "colour-flip", artiverse: "unit-13", artiverseUnit: 13, artiverseDay: 1, artiverseUnitName: "oil pastel — one shimmering fish", topicLayer: 0 },
  { sessionNumber: 38, artGym: "cue-card-b1", artGames: "shape-stitch", artiverse: "unit-13", artiverseUnit: 13, artiverseDay: 2, artiverseUnitName: "oil pastel — one shimmering fish · develop & layer", topicLayer: 0 },
  { sessionNumber: 39, artGym: "cue-card-b2", artGames: "shape-fusion", artiverse: "unit-13", artiverseUnit: 13, artiverseDay: 3, artiverseUnitName: "oil pastel — one shimmering fish · finish & present", topicLayer: 0 },
  { sessionNumber: 40, artGym: "ext-book", artGames: "cue-cards-game", artiverse: "unit-14", artiverseUnit: 14, artiverseDay: 1, artiverseUnitName: "oil pastel — two fish swimming together", topicLayer: 0 },
  { sessionNumber: 41, artGym: "ext-cue-card", artGames: "i-spy-i-make", artiverse: "unit-14", artiverseUnit: 14, artiverseDay: 2, artiverseUnitName: "oil pastel — two fish swimming together · develop & layer", topicLayer: 0 },
  { sessionNumber: 42, artGym: "book-3", artGames: "artventure", artiverse: "unit-14", artiverseUnit: 14, artiverseDay: 3, artiverseUnitName: "oil pastel — two fish swimming together · finish & present", topicLayer: 0 },
  { sessionNumber: 43, artGym: "book-4", artGames: "imagine-that", artiverse: "unit-15", artiverseUnit: 15, artiverseDay: 1, artiverseUnitName: "watercolour — a lively underwater world", topicLayer: 0 },
  { sessionNumber: 44, artGym: "cue-card-b1", artGames: "doodle-dash", artiverse: "unit-15", artiverseUnit: 15, artiverseDay: 2, artiverseUnitName: "watercolour — a lively underwater world · develop & layer", topicLayer: 0 },
  { sessionNumber: 45, artGym: "cue-card-b2", artGames: "match-me", artiverse: "unit-15", artiverseUnit: 15, artiverseDay: 3, artiverseUnitName: "watercolour — a lively underwater world · finish & present", topicLayer: 0 },
  { sessionNumber: 46, artGym: "ext-book", artGames: "colour-flip", artiverse: "unit-16", artiverseUnit: 16, artiverseDay: 1, artiverseUnitName: "mixed media — an invented creature", topicLayer: 0 },
  { sessionNumber: 47, artGym: "ext-cue-card", artGames: "shape-stitch", artiverse: "unit-16", artiverseUnit: 16, artiverseDay: 2, artiverseUnitName: "mixed media — an invented creature · develop & layer", topicLayer: 0 },
  { sessionNumber: 48, artGym: "book-3", artGames: "shape-fusion", artiverse: "unit-16", artiverseUnit: 16, artiverseDay: 3, artiverseUnitName: "mixed media — an invented creature · finish & present", topicLayer: 0 },
  { sessionNumber: 49, artGym: "book-4", artGames: "cue-cards-game", artiverse: "unit-17", artiverseUnit: 17, artiverseDay: 1, artiverseUnitName: "mixed media — a bird built from paper", topicLayer: 0 },
  { sessionNumber: 50, artGym: "cue-card-b1", artGames: "i-spy-i-make", artiverse: "unit-17", artiverseUnit: 17, artiverseDay: 2, artiverseUnitName: "mixed media — a bird built from paper · develop & layer", topicLayer: 0 },
  { sessionNumber: 51, artGym: "cue-card-b2", artGames: "artventure", artiverse: "unit-17", artiverseUnit: 17, artiverseDay: 3, artiverseUnitName: "mixed media — a bird built from paper · finish & present", topicLayer: 0 },
  { sessionNumber: 52, artGym: "ext-book", artGames: "imagine-that", artiverse: "unit-18", artiverseUnit: 18, artiverseDay: 1, artiverseUnitName: "mixed media — an imaginary city or world", topicLayer: 0 },
  { sessionNumber: 53, artGym: "ext-cue-card", artGames: "doodle-dash", artiverse: "unit-18", artiverseUnit: 18, artiverseDay: 2, artiverseUnitName: "mixed media — an imaginary city or world · develop & layer", topicLayer: 0 },
  { sessionNumber: 54, artGym: "book-3", artGames: "match-me", artiverse: "unit-18", artiverseUnit: 18, artiverseDay: 3, artiverseUnitName: "mixed media — an imaginary city or world · finish & present", topicLayer: 0 },
  { sessionNumber: 55, artGym: "book-4", artGames: "colour-flip", artiverse: "unit-19", artiverseUnit: 19, artiverseDay: 1, artiverseUnitName: "mixed media — a giant-fruit scene", topicLayer: 0 },
  { sessionNumber: 56, artGym: "cue-card-b1", artGames: "shape-stitch", artiverse: "unit-19", artiverseUnit: 19, artiverseDay: 2, artiverseUnitName: "mixed media — a giant-fruit scene · develop & layer", topicLayer: 0 },
  { sessionNumber: 57, artGym: "cue-card-b2", artGames: "shape-fusion", artiverse: "unit-19", artiverseUnit: 19, artiverseDay: 3, artiverseUnitName: "mixed media — a giant-fruit scene · finish & present", topicLayer: 0 },
  { sessionNumber: 58, artGym: "ext-book", artGames: "cue-cards-game", artiverse: "unit-20", artiverseUnit: 20, artiverseDay: 1, artiverseUnitName: "acrylic — an animal from essential shapes", topicLayer: 0 },
  { sessionNumber: 59, artGym: "ext-cue-card", artGames: "i-spy-i-make", artiverse: "unit-20", artiverseUnit: 20, artiverseDay: 2, artiverseUnitName: "acrylic — an animal from essential shapes · develop & layer", topicLayer: 0 },
  { sessionNumber: 60, artGym: "book-3", artGames: "artventure", artiverse: "unit-20", artiverseUnit: 20, artiverseDay: 3, artiverseUnitName: "acrylic — an animal from essential shapes · finish & present", topicLayer: 0 },
  { sessionNumber: 61, artGym: "book-4", artGames: "imagine-that", artiverse: "unit-21", artiverseUnit: 21, artiverseDay: 1, artiverseUnitName: "acrylic — a citrus still life", topicLayer: 0 },
  { sessionNumber: 62, artGym: "cue-card-b1", artGames: "doodle-dash", artiverse: "unit-21", artiverseUnit: 21, artiverseDay: 2, artiverseUnitName: "acrylic — a citrus still life · develop & layer", topicLayer: 0 },
  { sessionNumber: 63, artGym: "cue-card-b2", artGames: "match-me", artiverse: "unit-21", artiverseUnit: 21, artiverseDay: 3, artiverseUnitName: "acrylic — a citrus still life · finish & present", topicLayer: 0 },
  { sessionNumber: 64, artGym: "ext-book", artGames: "colour-flip", artiverse: "unit-22", artiverseUnit: 22, artiverseDay: 1, artiverseUnitName: "acrylic — a row of flower pots", topicLayer: 0 },
  { sessionNumber: 65, artGym: "ext-cue-card", artGames: "shape-stitch", artiverse: "unit-22", artiverseUnit: 22, artiverseDay: 2, artiverseUnitName: "acrylic — a row of flower pots · develop & layer", topicLayer: 0 },
  { sessionNumber: 66, artGym: "book-3", artGames: "shape-fusion", artiverse: "unit-22", artiverseUnit: 22, artiverseDay: 3, artiverseUnitName: "acrylic — a row of flower pots · finish & present", topicLayer: 0 },
  { sessionNumber: 67, artGym: "book-4", artGames: "cue-cards-game", artiverse: "unit-23", artiverseUnit: 23, artiverseDay: 1, artiverseUnitName: "mixed media — an invented robot", topicLayer: 0 },
  { sessionNumber: 68, artGym: "cue-card-b1", artGames: "i-spy-i-make", artiverse: "unit-23", artiverseUnit: 23, artiverseDay: 2, artiverseUnitName: "mixed media — an invented robot · develop & layer", topicLayer: 0 },
  { sessionNumber: 69, artGym: "cue-card-b2", artGames: "artventure", artiverse: "unit-23", artiverseUnit: 23, artiverseDay: 3, artiverseUnitName: "mixed media — an invented robot · finish & present", topicLayer: 0 },
  { sessionNumber: 70, artGym: "ext-book", artGames: "imagine-that", artiverse: "unit-24", artiverseUnit: 24, artiverseDay: 1, artiverseUnitName: "painted-paper collage — a bright bird from painted paper", topicLayer: 0 },
  { sessionNumber: 71, artGym: "ext-cue-card", artGames: "doodle-dash", artiverse: "unit-24", artiverseUnit: 24, artiverseDay: 2, artiverseUnitName: "painted-paper collage — a bright bird from painted paper · develop & layer", topicLayer: 0 },
  { sessionNumber: 72, artGym: "book-3", artGames: "match-me", artiverse: "unit-24", artiverseUnit: 24, artiverseDay: 3, artiverseUnitName: "painted-paper collage — a bright bird from painted paper · finish & present", topicLayer: 0 },
  { sessionNumber: 73, artGym: "book-4", artGames: "colour-flip", artiverse: "unit-25", artiverseUnit: 25, artiverseDay: 1, artiverseUnitName: "acrylic on black paper — a glowing night scene", topicLayer: 0 },
  { sessionNumber: 74, artGym: "cue-card-b1", artGames: "shape-stitch", artiverse: "unit-25", artiverseUnit: 25, artiverseDay: 2, artiverseUnitName: "acrylic on black paper — a glowing night scene · develop & layer", topicLayer: 0 },
  { sessionNumber: 75, artGym: "cue-card-b2", artGames: "shape-fusion", artiverse: "unit-25", artiverseUnit: 25, artiverseDay: 3, artiverseUnitName: "acrylic on black paper — a glowing night scene · finish & present", topicLayer: 0 },
  { sessionNumber: 76, artGym: "ext-book", artGames: "flex", artiverse: "review", artiverseUnit: 0, artiverseDay: 0, artiverseUnitName: "free making · revisit any technique from earlier", topicLayer: 0, isFlex: true },
];

// ─── Checkpoints ────────────────────────────────────────────

const checkpoints: CurriculumCheckpoint[] = [
  {
    afterSession: 8,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Makes marks freely but without intention.",
        developing: "Uses different line types occasionally with intention.",
        secure: "Uses different line types intentionally.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Draws shapes only when prompted.",
        developing: "Begins to combine shapes.",
        secure: "Combines two shapes to make something recognisable.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Uses colours without decision-making.",
        developing: "Chooses a colour because they want it.",
        secure: "Picks a colour and can say why.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Draws in a small area of the page.",
        developing: "Begins to fill more of the page.",
        secure: "Fills the whole page.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Experiments only when prompted.",
        developing: "Experiments freely with colours and marks.",
        secure: "Experiments freely and makes deliberate choices.",
      },
    ],
  },
  {
    afterSession: 16,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Line types present but not varied.",
        developing: "Begins to use repeated marks.",
        secure: "Uses repeated marks to build texture.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Shapes drawn but not combined.",
        developing: "Overlaps two shapes to build a subject.",
        secure: "Combines and overlaps shapes deliberately.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Colour mixing results accidental.",
        developing: "Notices when a mix works and tries to repeat.",
        secure: "Identifies warm and cool colours and makes deliberate choice.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Things placed randomly on page.",
        developing: "Begins to think about placement.",
        secure: "Uses foreground and background in at least one piece.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Ideas are conventional.",
        developing: "Makes at least one unexpected choice.",
        secure: "Generates original ideas.",
      },
    ],
  },
  {
    afterSession: 24,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Marks are confident but not yet controlled for texture.",
        developing: "Beginning to use marks to suggest texture.",
        secure: "Uses different marks deliberately to create texture.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Shapes are recognisable but not yet combined with variety.",
        developing: "Modifies shapes to create new forms.",
        secure: "Combines and modifies shapes creatively.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Colour use is confident but not yet expressive.",
        developing: "Uses colour to express feeling in at least one piece.",
        secure: "Uses warm and cool colour families expressively.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Composition not yet considered.",
        developing: "Uses foreground and background.",
        secure: "Draws overlapping shapes to show depth. Describes one specific decision about placement.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Ideas are conventional.",
        developing: "Says one thing about their own work.",
        secure: "Describes one specific decision they made.",
      },
    ],
  },
  {
    afterSession: 32,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Line work is steady but predictable.",
        developing: "Varies line intentionally across mediums.",
        secure: "Uses observed line and texture in drawing.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Shape use is adequate but not yet creative.",
        developing: "Combines shapes in unexpected ways.",
        secure: "Builds complex subjects from shapes deliberately.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Mixing is adequate but not yet controlled.",
        developing: "Creates tints and shades.",
        secure: "Uses tints, shades, and colour families with control.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Composition is present but not yet balanced.",
        developing: "Places objects with visual weight in mind.",
        secure: "Understands how colour and shape placement create balance.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Ideas conventional.",
        developing: "Makes unexpected choices.",
        secure: "Describes imagined subject before starting and follows through.",
      },
    ],
  },
  {
    afterSession: 40,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Individual skills developing but not working together.",
        developing: "Two skills work together in at least one piece.",
        secure: "Uses line, shape, and colour together with intention.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Individual skills developing but not working together.",
        developing: "Two skills work together in at least one piece.",
        secure: "Uses line, shape, and colour together with intention.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Individual skills developing but not working together.",
        developing: "Two skills work together in at least one piece.",
        secure: "Uses line, shape, and colour together with intention.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Compositional thinking emerging.",
        developing: "Things placed deliberately.",
        secure: "Work shows compositional thinking throughout.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Generates ideas but doesn't extend.",
        developing: "Extends ideas across sessions.",
        secure: "Chooses combination of tools that serves the marks.",
      },
    ],
  },
  {
    afterSession: 48,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference.",
        secure: "Uses all five skill areas together.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference.",
        secure: "Uses all five skill areas together.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference.",
        secure: "Uses all five skill areas together.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference.",
        secure: "Uses all five skill areas together.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Consistent willing maker.",
        developing: "Shows personal preference.",
        secure: "Makes choices independently. Talks about own work specifically.",
      },
    ],
  },
];

// ─── Programme export ───────────────────────────────────────

export const artDesign58: CurriculumProgramme = {
  id: "art-design-5-8",
  slug: "art-design-5-8",
  title: "art and design",
  category: "art",
  heroImageUrl: "/prog-art-5-8.gif",
  ageGroup: "5-8",
  ageLabel: "ages 5\u20138",
  tagline:
    "explore materials and techniques while building core artistic skills.",
  description:
    "builds line control, shape-making, colour mixing, composition, and imagination — through hands-on making.",
  totalSessions: 76,
  skillAreas: [
    {
      id: "lt",
      name: "Line & Texture",
      shortName: "L&T",
      abilities: [
        "Identifies marks different tools make",
        "Makes different line types with intention",
        "Combines line types to create texture",
        "Draws using observed line and texture",
      ],
    },
    {
      id: "sf",
      name: "Shape & Form",
      shortName: "S&F",
      abilities: [
        "Traces and draws basic 2D shapes",
        "Combines shapes to draw recognisable objects",
        "Modifies and combines shapes creatively",
        "Identifies and draws simple 3D forms",
      ],
    },
    {
      id: "cp",
      name: "Colour & Painting",
      shortName: "C&P",
      abilities: [
        "Paints with control and early mixing",
        "Mixes primary to secondary reliably",
        "Identifies warm and cool families",
        "Creates tints and shades",
      ],
    },
    {
      id: "bc",
      name: "Balance & Composition",
      shortName: "B&C",
      abilities: [
        "Fills whole page",
        "Understands foreground/background",
        "Draws overlapping for depth and horizon line",
        "Understands colour/shape placement for balance",
      ],
    },
    {
      id: "ic",
      name: "Imagination & Collaboration",
      shortName: "I&C",
      abilities: [
        "Experiments freely",
        "Generates unusual ideas",
        "Listens/contributes/decides together",
        "Describes imagined world with enough detail",
      ],
    },
  ],
  segmentDefinitions: [
    // Two-segment daily flow: Art Games + Gym (combined) → Artiverse
    // (the making block, longest slot) → Experience Book.
    // Total session = 25 + 55 + 10 = 90 min.
    // The laminated art-gym book pages and cue-card prompts are folded
    // into this combined segment as part of the rotation pool — they are
    // played as games, not as a separate segment. No scribble book and
    // no "extension" follow-on day at this age.
    {
      id: "art-games",
      name: "Art Games + Gym",
      durationRange: "25 min · 1–2 games per day",
      objective:
        "Build art skills through games. The educator picks 1–2 games per session from the combined pool — art games and the laminated art-gym book pages and cue-card prompts. They are all played as games (no separate art-gym segment, no extension-day follow-on, no scribble book). Each game has its own debrief; the segment closes once 1 or 2 games are done.",
      type: "rotating",
      // Pool: 9 art games plus 2 art-gym entries (book + cue card). The
      // art-gym entries are real activities — see artGymActivities below
      // — so the daily plan shows them when the session table assigns
      // one. They are played as games here, not as a separate segment.
      rotationPool: [
        "match-me", "colour-flip", "shape-stitch", "shape-fusion",
        "cue-cards-game", "i-spy-i-make", "artventure", "imagine-that", "doodle-dash",
        "art-gym-book", "art-gym-cue-card",
      ],
    },
    {
      id: "artiverse",
      name: "Artiverse",
      durationRange: "55 min",
      objective:
        "Children make on A3 paper. Educator reads brief and steps back. Artwork goes home. Time runs 55 min so the artwork is the centre of the session. Each unit runs 2 days per artwork — Day 1 sets up the piece, Day 2 completes and refines it. After all 18 units finish, leftover calendar sessions become free-making days where children revisit any earlier technique.",
      type: "fixed",
    },
    {
      id: "log-book",
      name: "Experience Book",
      durationRange: "10 min",
      objective:
        "Children fill in \"what happened in class today\" with the educator, who opens a short discussion: favourite part? What you enjoyed? What you didn't? What to do again? Every child speaks. After children leave, the educator fills in the skill-assessment part privately. These daily notes compile into the monthly report card that goes home.",
      type: "fixed",
    },
  ],
  sessionTable,
  activities: {
    ...artGamesActivities,
  },
  checkpoints,
  artiverseUnits,
  trialSession: ART_TRIAL_SESSION_5_8,
};
