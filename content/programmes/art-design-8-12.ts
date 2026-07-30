import type {
  CurriculumProgramme,
  CurriculumActivity,
  CurriculumSessionEntry,
  CurriculumCheckpoint,
  ArtiverseUnit,
} from "@/content/types";
import { ART_TRIAL_SESSION_8_12 } from "./art-design-trial";

// ─── Artiverse units (14 units · 2 days per unit) ───

const PLACEHOLDER = "/artiverse/placeholder.svg";
void PLACEHOLDER;

const artiverseUnits: ArtiverseUnit[] = [
  {
    id: "unit-1",
    unitNumber: 1,
    medium: "Oil pastels",
    technique: "Bold shapes, controlled filling — draw clean shapes, then press firmly to fill each with flat, even colour, keeping edges crisp.",
    whatChildrenMake: "A bold still life",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "A single tomato",
      "A bowl of tomatoes",
      "A market stall",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-1.png",
  },
  {
    id: "unit-2",
    unitNumber: 2,
    medium: "Watercolour",
    technique: "Light washes, colour placement — load a watery brush, lay clean transparent washes, and let colours meet softly.",
    whatChildrenMake: "A loose watercolour flower study",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "line & texture",
    ],
    topicOptions: [
      "A single bloom",
      "A bunch of flowers",
      "Flowers in a jar",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-2.png",
  },
  {
    id: "unit-3",
    unitNumber: 3,
    medium: "Acrylic",
    technique: "Finger painting, movement — apply acrylic with the fingers and hands, sweeping and dragging to make marks full of movement.",
    whatChildrenMake: "A gestural wave painting",
    days: 3,
    abilitiesCovered: [
      "line & texture",
      "colour & painting",
    ],
    topicOptions: [
      "Ocean waves",
      "A storm",
      "A calm sea",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-3.png",
  },
  {
    id: "unit-4",
    unitNumber: 4,
    medium: "Acrylic",
    technique: "Flat fill, colour blocking — fill each area with even, solid colour up to a clean edge, one at a time.",
    whatChildrenMake: "A bold, appetising donut",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "A sprinkled donut",
      "A box of donuts",
      "A bitten donut",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-4.png",
  },
  {
    id: "unit-5",
    unitNumber: 5,
    medium: "Watercolour",
    technique: "Colour theory — mix a clean colour for each square and place warm and cool families thoughtfully.",
    whatChildrenMake: "A grid of mixed colours",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "A warm-cool grid",
      "A rainbow grid",
      "A tone grid",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-5.png",
  },
  {
    id: "unit-6",
    unitNumber: 6,
    medium: "Watercolour",
    technique: "Wash + stencil + collage layering — lay a wash, add stencilled shapes, then collage torn paper to build layers.",
    whatChildrenMake: "A layered citrus study",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
      "line & texture",
    ],
    topicOptions: [
      "A cut orange",
      "Oranges and leaves",
      "A citrus arrangement",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-6.png",
  },
  {
    id: "unit-7",
    unitNumber: 7,
    medium: "Watercolour",
    technique: "Paint + collage composition — divide the page into shapes, paint each thoughtfully, and let them build a city.",
    whatChildrenMake: "An imaginary city of shapes",
    days: 3,
    abilitiesCovered: [
      "balance & composition",
      "shape & form",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A city of shapes",
      "A castle town",
      "A world of colour",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-7.png",
  },
  {
    id: "unit-8",
    unitNumber: 8,
    medium: "Watercolour",
    technique: "Monochrome tonal work — pick one colour and build the whole image using its lightest to darkest tones.",
    whatChildrenMake: "A monochrome tonal study",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "A cat in one colour",
      "A repeated pet",
      "A pop-art portrait",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-8.png",
  },
  {
    id: "unit-9",
    unitNumber: 9,
    medium: "Oil pastels",
    technique: "Layering, tonal build-up — lay the sky and far layers first, then build nearer layers on top.",
    whatChildrenMake: "A layered landscape",
    days: 3,
    abilitiesCovered: [
      "balance & composition",
      "colour & painting",
    ],
    topicOptions: [
      "A sunset",
      "Mountains",
      "A field at dusk",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-9.png",
  },
  {
    id: "unit-10",
    unitNumber: 10,
    medium: "Watercolour",
    technique: "Light washes, layering — lay a clean wash for each petal, letting the white paper show, and deepen tone where petals overlap.",
    whatChildrenMake: "A blue lotus in clean washes",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "line & texture",
    ],
    topicOptions: [
      "A lotus",
      "A water lily",
      "A single bloom",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-10.png",
  },
  {
    id: "unit-11",
    unitNumber: 11,
    medium: "Watercolour",
    technique: "Glazing — let each wash dry, then add another transparent layer on top to deepen colour and build roundness.",
    whatChildrenMake: "A glowing pear",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "shape & form",
    ],
    topicOptions: [
      "A single pear",
      "A pair of pears",
      "A pear and its shadow",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-11.png",
  },
  {
    id: "unit-12",
    unitNumber: 12,
    medium: "Mixed media",
    technique: "Geometric portrait — divide a face into circles, triangles and rectangles, then fill with warm, balanced colour.",
    whatChildrenMake: "A face built from shapes",
    days: 3,
    abilitiesCovered: [
      "balance & composition",
      "shape & form",
      "imagination & collaboration",
    ],
    topicOptions: [
      "A face of shapes",
      "A portrait in warm colour",
      "A Senecio of my own",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-12.png",
  },
  {
    id: "unit-13",
    unitNumber: 13,
    medium: "Acrylic",
    technique: "Layering, tonal build-up — start dark, then add progressively lighter layers to build form and highlights.",
    whatChildrenMake: "A rich, rounded fruit study",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "shape & form",
    ],
    topicOptions: [
      "A cut pomegranate",
      "A bowl of fruit",
      "A single glowing fruit",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-13.png",
  },
  {
    id: "unit-14",
    unitNumber: 14,
    medium: "Watercolour",
    technique: "Wet-into-wet — wet the paper, drop in colour and let it bloom softly; pull long trailing tentacles with a fine brush.",
    whatChildrenMake: "A drifting jellyfish",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "line & texture",
    ],
    topicOptions: [
      "A single jellyfish",
      "A bloom of jellyfish",
      "A deep-sea drift",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-14.png",
  },
  {
    id: "unit-15",
    unitNumber: 15,
    medium: "Watercolour",
    technique: "Form &amp; movement — build the body with a wash, then pull curling arms with a loaded brush, varying the pressure.",
    whatChildrenMake: "A curling octopus",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "An octopus",
      "A squid",
      "A sea creature in motion",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-15.png",
  },
  {
    id: "unit-16",
    unitNumber: 16,
    medium: "Watercolour",
    technique: "Expressive colour — paint the face in confident, unexpected colours that capture a feeling rather than exact likeness.",
    whatChildrenMake: "An expressive self-portrait",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "imagination & collaboration",
      "balance & composition",
    ],
    topicOptions: [
      "Me in bold colour",
      "My face, my mood",
      "A fearless portrait",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-16.png",
  },
  {
    id: "unit-17",
    unitNumber: 17,
    medium: "Oil pastels",
    technique: "Expressive marks — layer oil pastel in swirling, directional strokes so the whole scene seems to move.",
    whatChildrenMake: "A landscape full of movement",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "line & texture",
    ],
    topicOptions: [
      "Cypresses",
      "A wheatfield",
      "A swirling sky",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-17.png",
  },
  {
    id: "unit-18",
    unitNumber: 18,
    medium: "Mixed media",
    technique: "Spatial composition — use size, overlap and placement to make some things feel near and others far.",
    whatChildrenMake: "A scene with real depth",
    days: 3,
    abilitiesCovered: [
      "balance & composition",
      "shape & form",
    ],
    topicOptions: [
      "Reaching a kite",
      "A tall tower",
      "Looking up at the sky",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-18.png",
  },
  {
    id: "unit-19",
    unitNumber: 19,
    medium: "Chalk pastels",
    technique: "Layering, blending, atmosphere — lay broad areas of chalk pastel and blend with fingers to build soft, glowing colour.",
    whatChildrenMake: "A glowing aurora sky",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "Northern lights",
      "A glowing night",
      "A magical sky",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-19.png",
  },
  {
    id: "unit-20",
    unitNumber: 20,
    medium: "Pencil",
    technique: "Light, shadow, 3D form — pick a light direction, then shade each face lighter or darker so the shape looks solid.",
    whatChildrenMake: "A solid 3D form",
    days: 3,
    abilitiesCovered: [
      "shape & form",
      "colour & painting",
    ],
    topicOptions: [
      "A cube",
      "Stacked blocks",
      "A row of 3D shapes",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-20.png",
  },
  {
    id: "unit-21",
    unitNumber: 21,
    medium: "Acrylic on black paper",
    technique: "Painting with light — on black paper, add light and bright colours so the creature appears to glow against the dark.",
    whatChildrenMake: "A glowing night creature",
    days: 3,
    abilitiesCovered: [
      "colour & painting",
      "balance & composition",
    ],
    topicOptions: [
      "A dragonfly",
      "Fireflies in a jar",
      "A glowing pond",
    ],
    heroImageUrl: "/artiverse/art-8-12/unit-21.png",
  },
];

// ─── Activities ─────────────────────────────────────────────

const artGamesActivities: Record<string, CurriculumActivity> = {
  "i-spot": {
    id: "i-spot",
    segment: "art-games",
    title: "i spot tool/medium",
    setupLine:
      "look at this finished artwork. name the tool or medium used. what specific mark tells you?",
    howToPlay:
      "Educator shows image card of finished artwork. Children examine and name the tool/medium. Group discusses. Educator confirms and names the mark characteristic.",
    variations: [
      {
        name: "Variation — Making",
        description:
          "After guessing, children make the drawing using the identified tool or medium.",
      },
    ],
    materials: [
      "Image cards showing finished artworks (A5, laminated)",
      "Drawing paper",
      "Pencils, crayons, and the identified tools/mediums",
    ],
    difficultyLevels: [
      { level: "Easy", description: "identify tool or medium only." },
      { level: "Medium", description: "use that tool or medium to replicate the drawing." },
      { level: "Hard", description: "use the tool or medium to draw creatively." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "cue-cards-game": {
    id: "cue-cards-game",
    segment: "art-games",
    title: "cue cards",
    setupLine:
      "follow step-by-step drawing instructions. then complete the extension challenge.",
    howToPlay:
      "Card placed centrally. Follow step-by-step. At 8-12, educator always adds extension challenge after completion — e.g. 'change angle by 45 degrees' or 'redraw at twice the scale.' Portrait and Landscape card sets available.",
    materials: [
      "Cue Card sets B1 and B2 including Portrait and Landscape",
      "Drawing paper",
      "Fine-line pens or pencils",
    ],
    difficultyLevels: [
      { level: "Easy", description: "B1 cards, visible throughout." },
      { level: "Medium", description: "B1 or B2, educator names one thing to observe." },
      { level: "Hard", description: "B2 card shown for a minute then removed, drawn from memory. Extension required." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "shape-fusion": {
    id: "shape-fusion",
    segment: "art-games",
    title: "shape fusion",
    setupLine:
      "build with transparent geometric pieces — either silently for your team to guess, or from a educator cue, then sketch it capturing proportions and negative space.",
    howToPlay:
      "Two ways to play — see variations.",
    variations: [
      {
        name: "Variation 1 — Build and guess",
        description:
          "Each child builds a subject from geometric pieces silently while their team guesses what it is. Child's choice: the child picks which subject they want to create from the Shape Card and the other children guess. Relay / race: the group splits into teams and the teams compete to make the most subjects — whichever team finishes a card, or a set number of cards, first wins.",
      },
      {
        name: "Variation 2 — Composition from cues",
        description:
          "Each child builds a composition from transparent geometric pieces based on educator cues (for example: educator says \"build a composition with one dominant shape supported by two smaller ones\"). After building, sketch the arrangement on paper capturing proportions and negative space. Compare sketch to tile arrangement.",
      },
    ],
    materials: [
      "Two sets of 60 transparent geometric pieces",
      "Shape Cards B1 and B2",
    ],
    difficultyLevels: [
      { level: "Easy", description: "Variation 1 — build and guess." },
      { level: "Medium", description: "Variation 2 — standard gameplay." },
      { level: "Hard", description: "The opposite team chooses specific geometric shapes to be used, or gives cues instead of the educator." },
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
      "roll the dice, move your token, land on an art zone, draw a challenge card (draw, colour, build or mixed media), and complete it within the time limit. after completing the challenge, child gives one sentence explaining one decision they made.",
    howToPlay:
      "Set up board game. Roll dice, move, land on an art zone. Draw a challenge card (draw, colour, build or mixed media) and complete it within the time limit. After completing the challenge, the child gives one sentence explaining one decision they made.",
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
  "colour-flip": {
    id: "colour-flip",
    segment: "art-games",
    title: "colour flip",
    setupLine:
      "56 colour cards face-down. flip two. matching colour = keep the pair. most pairs wins.",
    howToPlay:
      "Children take turns flipping two cards. Match = keep pair. No match = flip back. Variation 2: each child has a Difficult Mixing Card primary and flips to find formula colours. Palette Build variation: educator names mood/time of day, children select 3-4 cards as palette.",
    materials: [
      "56 Colour Cards",
      "Easy Mixing Cards (14)",
      "Medium Mixing Cards (14)",
      "Difficult Mixing Cards (28)",
    ],
    difficultyLevels: [
      { level: "Easy", description: "colour recognition only." },
      { level: "Medium", description: "Difficult cards." },
      { level: "Hard", description: "Palette Build, child names colour and explains behaviour in painting." },
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
      "Children open the laminated art gym book (level 5 → level 6) to their next page and complete 1–3 pages with thread, clay, sequins, or erasable markers. Pages progress in order — page 1 to last — challenge increases page by page. Once the page is done, the child copies the same line / shape / pattern freely on a sketch sheet using a material of choice (brush pen, colour pencil, charcoal, ink). No extension-day follow-on — the page and the sketch happen in the same slot.",
    materials: [
      "Laminated Art Gym Book (book 5 → book 6)",
      "Erasable markers, thread, clay, sequins",
      "A3 sketch sheet",
      "Brush pens, colour pencils, charcoal, ink (child's pick)",
    ],
    difficultyLevels: [
      { level: "Easy", description: "1 page from the book — child traces and replicates with the simplest material." },
      { level: "Medium", description: "2 pages — child combines two materials on the sketch sheet." },
      { level: "Hard", description: "3 pages — child invents an extension on the sketch sheet (apply the line type to a real-world object)." },
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
      "Cue cards are illustrated step-by-step prompts the educator selects (rotates across types — animals, birds, buildings, food, nature, vehicles, plus 8-12-only landscape and portrait backgrounds). Children read or follow the steps and complete a drawing on a sketch sheet. The educator prompts each child to add one more detail their cue card didn't show. No extension-day follow-on — the cue card and any extension happen in the same slot.",
    materials: [
      "Cue card deck (laminated, age-appropriate, B1 + B2 + landscape and portrait backgrounds)",
      "A3 sketch sheets",
      "Brush pens, colour pencils, charcoal",
    ],
    difficultyLevels: [
      { level: "Easy", description: "child copies the cue card step by step." },
      { level: "Medium", description: "child completes the cue card then adds a background or context of their choice." },
      { level: "Hard", description: "child completes the cue card then invents one new step beyond it (a view from a different angle, a hidden detail)." },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
};

// ─── Session Table ──────────────────────────────────────────

const sessionTable: CurriculumSessionEntry[] = [
  { sessionNumber: 0, artGym: "book-5", artGames: "i-spot", artiverse: "unit-1", artiverseUnit: 0, artiverseDay: 0, artiverseUnitName: "trial session — art gym + extension combined, i spot, oil pastels a bold still life", topicLayer: 0 },
  { sessionNumber: 1, artGym: "book-6", artGames: "colour-flip", artiverse: "unit-1", artiverseUnit: 1, artiverseDay: 1, artiverseUnitName: "oil pastels — a bold still life", topicLayer: 0 },
  { sessionNumber: 2, artGym: "cue-card-b1", artGames: "artventure", artiverse: "unit-1", artiverseUnit: 1, artiverseDay: 2, artiverseUnitName: "oil pastels — a bold still life · develop & layer", topicLayer: 0 },
  { sessionNumber: 3, artGym: "cue-card-b2", artGames: "cue-cards-game", artiverse: "unit-1", artiverseUnit: 1, artiverseDay: 3, artiverseUnitName: "oil pastels — a bold still life · finish & present", topicLayer: 0 },
  { sessionNumber: 4, artGym: "ext-book", artGames: "i-spy-i-make", artiverse: "unit-2", artiverseUnit: 2, artiverseDay: 1, artiverseUnitName: "watercolour — a loose watercolour flower study", topicLayer: 0 },
  { sessionNumber: 5, artGym: "ext-cue-card", artGames: "imagine-that", artiverse: "unit-2", artiverseUnit: 2, artiverseDay: 2, artiverseUnitName: "watercolour — a loose watercolour flower study · develop & layer", topicLayer: 0 },
  { sessionNumber: 6, artGym: "book-5", artGames: "shape-fusion", artiverse: "unit-2", artiverseUnit: 2, artiverseDay: 3, artiverseUnitName: "watercolour — a loose watercolour flower study · finish & present", topicLayer: 0 },
  { sessionNumber: 7, artGym: "book-6", artGames: "doodle-dash", artiverse: "unit-3", artiverseUnit: 3, artiverseDay: 1, artiverseUnitName: "acrylic — a gestural wave painting", topicLayer: 0 },
  { sessionNumber: 8, artGym: "cue-card-b1", artGames: "i-spot", artiverse: "unit-3", artiverseUnit: 3, artiverseDay: 2, artiverseUnitName: "acrylic — a gestural wave painting · develop & layer", topicLayer: 0 },
  { sessionNumber: 9, artGym: "cue-card-b2", artGames: "colour-flip", artiverse: "unit-3", artiverseUnit: 3, artiverseDay: 3, artiverseUnitName: "acrylic — a gestural wave painting · finish & present", topicLayer: 0 },
  { sessionNumber: 10, artGym: "ext-book", artGames: "artventure", artiverse: "unit-4", artiverseUnit: 4, artiverseDay: 1, artiverseUnitName: "acrylic — a bold, appetising donut", topicLayer: 0 },
  { sessionNumber: 11, artGym: "ext-cue-card", artGames: "cue-cards-game", artiverse: "unit-4", artiverseUnit: 4, artiverseDay: 2, artiverseUnitName: "acrylic — a bold, appetising donut · develop & layer", topicLayer: 0 },
  { sessionNumber: 12, artGym: "book-5", artGames: "i-spy-i-make", artiverse: "unit-4", artiverseUnit: 4, artiverseDay: 3, artiverseUnitName: "acrylic — a bold, appetising donut · finish & present", topicLayer: 0 },
  { sessionNumber: 13, artGym: "book-6", artGames: "imagine-that", artiverse: "unit-5", artiverseUnit: 5, artiverseDay: 1, artiverseUnitName: "watercolour — a grid of mixed colours", topicLayer: 0 },
  { sessionNumber: 14, artGym: "cue-card-b1", artGames: "shape-fusion", artiverse: "unit-5", artiverseUnit: 5, artiverseDay: 2, artiverseUnitName: "watercolour — a grid of mixed colours · develop & layer", topicLayer: 0 },
  { sessionNumber: 15, artGym: "cue-card-b2", artGames: "doodle-dash", artiverse: "unit-5", artiverseUnit: 5, artiverseDay: 3, artiverseUnitName: "watercolour — a grid of mixed colours · finish & present", topicLayer: 0 },
  { sessionNumber: 16, artGym: "ext-book", artGames: "i-spot", artiverse: "unit-6", artiverseUnit: 6, artiverseDay: 1, artiverseUnitName: "watercolour — a layered citrus study", topicLayer: 0 },
  { sessionNumber: 17, artGym: "ext-cue-card", artGames: "colour-flip", artiverse: "unit-6", artiverseUnit: 6, artiverseDay: 2, artiverseUnitName: "watercolour — a layered citrus study · develop & layer", topicLayer: 0 },
  { sessionNumber: 18, artGym: "book-5", artGames: "artventure", artiverse: "unit-6", artiverseUnit: 6, artiverseDay: 3, artiverseUnitName: "watercolour — a layered citrus study · finish & present", topicLayer: 0 },
  { sessionNumber: 19, artGym: "book-6", artGames: "cue-cards-game", artiverse: "unit-7", artiverseUnit: 7, artiverseDay: 1, artiverseUnitName: "watercolour — an imaginary city of shapes", topicLayer: 0 },
  { sessionNumber: 20, artGym: "cue-card-b1", artGames: "i-spy-i-make", artiverse: "unit-7", artiverseUnit: 7, artiverseDay: 2, artiverseUnitName: "watercolour — an imaginary city of shapes · develop & layer", topicLayer: 0 },
  { sessionNumber: 21, artGym: "cue-card-b2", artGames: "imagine-that", artiverse: "unit-7", artiverseUnit: 7, artiverseDay: 3, artiverseUnitName: "watercolour — an imaginary city of shapes · finish & present", topicLayer: 0 },
  { sessionNumber: 22, artGym: "ext-book", artGames: "shape-fusion", artiverse: "unit-8", artiverseUnit: 8, artiverseDay: 1, artiverseUnitName: "watercolour — a monochrome tonal study", topicLayer: 0 },
  { sessionNumber: 23, artGym: "ext-cue-card", artGames: "doodle-dash", artiverse: "unit-8", artiverseUnit: 8, artiverseDay: 2, artiverseUnitName: "watercolour — a monochrome tonal study · develop & layer", topicLayer: 0 },
  { sessionNumber: 24, artGym: "book-5", artGames: "i-spot", artiverse: "unit-8", artiverseUnit: 8, artiverseDay: 3, artiverseUnitName: "watercolour — a monochrome tonal study · finish & present", topicLayer: 0 },
  { sessionNumber: 25, artGym: "book-6", artGames: "colour-flip", artiverse: "unit-9", artiverseUnit: 9, artiverseDay: 1, artiverseUnitName: "oil pastels — a layered landscape", topicLayer: 0 },
  { sessionNumber: 26, artGym: "cue-card-b1", artGames: "artventure", artiverse: "unit-9", artiverseUnit: 9, artiverseDay: 2, artiverseUnitName: "oil pastels — a layered landscape · develop & layer", topicLayer: 0 },
  { sessionNumber: 27, artGym: "cue-card-b2", artGames: "cue-cards-game", artiverse: "unit-9", artiverseUnit: 9, artiverseDay: 3, artiverseUnitName: "oil pastels — a layered landscape · finish & present", topicLayer: 0 },
  { sessionNumber: 28, artGym: "ext-book", artGames: "i-spy-i-make", artiverse: "unit-10", artiverseUnit: 10, artiverseDay: 1, artiverseUnitName: "watercolour — a blue lotus in clean washes", topicLayer: 0 },
  { sessionNumber: 29, artGym: "ext-cue-card", artGames: "imagine-that", artiverse: "unit-10", artiverseUnit: 10, artiverseDay: 2, artiverseUnitName: "watercolour — a blue lotus in clean washes · develop & layer", topicLayer: 0 },
  { sessionNumber: 30, artGym: "book-5", artGames: "shape-fusion", artiverse: "unit-10", artiverseUnit: 10, artiverseDay: 3, artiverseUnitName: "watercolour — a blue lotus in clean washes · finish & present", topicLayer: 0 },
  { sessionNumber: 31, artGym: "book-6", artGames: "doodle-dash", artiverse: "unit-11", artiverseUnit: 11, artiverseDay: 1, artiverseUnitName: "watercolour — a glowing pear", topicLayer: 0 },
  { sessionNumber: 32, artGym: "cue-card-b1", artGames: "i-spot", artiverse: "unit-11", artiverseUnit: 11, artiverseDay: 2, artiverseUnitName: "watercolour — a glowing pear · develop & layer", topicLayer: 0 },
  { sessionNumber: 33, artGym: "cue-card-b2", artGames: "colour-flip", artiverse: "unit-11", artiverseUnit: 11, artiverseDay: 3, artiverseUnitName: "watercolour — a glowing pear · finish & present", topicLayer: 0 },
  { sessionNumber: 34, artGym: "ext-book", artGames: "artventure", artiverse: "unit-12", artiverseUnit: 12, artiverseDay: 1, artiverseUnitName: "mixed media — a face built from shapes", topicLayer: 0 },
  { sessionNumber: 35, artGym: "ext-cue-card", artGames: "cue-cards-game", artiverse: "unit-12", artiverseUnit: 12, artiverseDay: 2, artiverseUnitName: "mixed media — a face built from shapes · develop & layer", topicLayer: 0 },
  { sessionNumber: 36, artGym: "book-5", artGames: "i-spy-i-make", artiverse: "unit-12", artiverseUnit: 12, artiverseDay: 3, artiverseUnitName: "mixed media — a face built from shapes · finish & present", topicLayer: 0 },
  { sessionNumber: 37, artGym: "book-6", artGames: "imagine-that", artiverse: "unit-13", artiverseUnit: 13, artiverseDay: 1, artiverseUnitName: "acrylic — a rich, rounded fruit study", topicLayer: 0 },
  { sessionNumber: 38, artGym: "cue-card-b1", artGames: "shape-fusion", artiverse: "unit-13", artiverseUnit: 13, artiverseDay: 2, artiverseUnitName: "acrylic — a rich, rounded fruit study · develop & layer", topicLayer: 0 },
  { sessionNumber: 39, artGym: "cue-card-b2", artGames: "doodle-dash", artiverse: "unit-13", artiverseUnit: 13, artiverseDay: 3, artiverseUnitName: "acrylic — a rich, rounded fruit study · finish & present", topicLayer: 0 },
  { sessionNumber: 40, artGym: "ext-book", artGames: "i-spot", artiverse: "unit-14", artiverseUnit: 14, artiverseDay: 1, artiverseUnitName: "watercolour — a drifting jellyfish", topicLayer: 0 },
  { sessionNumber: 41, artGym: "ext-cue-card", artGames: "colour-flip", artiverse: "unit-14", artiverseUnit: 14, artiverseDay: 2, artiverseUnitName: "watercolour — a drifting jellyfish · develop & layer", topicLayer: 0 },
  { sessionNumber: 42, artGym: "book-5", artGames: "artventure", artiverse: "unit-14", artiverseUnit: 14, artiverseDay: 3, artiverseUnitName: "watercolour — a drifting jellyfish · finish & present", topicLayer: 0 },
  { sessionNumber: 43, artGym: "book-6", artGames: "cue-cards-game", artiverse: "unit-15", artiverseUnit: 15, artiverseDay: 1, artiverseUnitName: "watercolour — a curling octopus", topicLayer: 0 },
  { sessionNumber: 44, artGym: "cue-card-b1", artGames: "i-spy-i-make", artiverse: "unit-15", artiverseUnit: 15, artiverseDay: 2, artiverseUnitName: "watercolour — a curling octopus · develop & layer", topicLayer: 0 },
  { sessionNumber: 45, artGym: "cue-card-b2", artGames: "imagine-that", artiverse: "unit-15", artiverseUnit: 15, artiverseDay: 3, artiverseUnitName: "watercolour — a curling octopus · finish & present", topicLayer: 0 },
  { sessionNumber: 46, artGym: "ext-book", artGames: "shape-fusion", artiverse: "unit-16", artiverseUnit: 16, artiverseDay: 1, artiverseUnitName: "watercolour — an expressive self-portrait", topicLayer: 0 },
  { sessionNumber: 47, artGym: "ext-cue-card", artGames: "doodle-dash", artiverse: "unit-16", artiverseUnit: 16, artiverseDay: 2, artiverseUnitName: "watercolour — an expressive self-portrait · develop & layer", topicLayer: 0 },
  { sessionNumber: 48, artGym: "book-5", artGames: "i-spot", artiverse: "unit-16", artiverseUnit: 16, artiverseDay: 3, artiverseUnitName: "watercolour — an expressive self-portrait · finish & present", topicLayer: 0 },
  { sessionNumber: 49, artGym: "book-6", artGames: "colour-flip", artiverse: "unit-17", artiverseUnit: 17, artiverseDay: 1, artiverseUnitName: "oil pastels — a landscape full of movement", topicLayer: 0 },
  { sessionNumber: 50, artGym: "cue-card-b1", artGames: "artventure", artiverse: "unit-17", artiverseUnit: 17, artiverseDay: 2, artiverseUnitName: "oil pastels — a landscape full of movement · develop & layer", topicLayer: 0 },
  { sessionNumber: 51, artGym: "cue-card-b2", artGames: "cue-cards-game", artiverse: "unit-17", artiverseUnit: 17, artiverseDay: 3, artiverseUnitName: "oil pastels — a landscape full of movement · finish & present", topicLayer: 0 },
  { sessionNumber: 52, artGym: "ext-book", artGames: "i-spy-i-make", artiverse: "unit-18", artiverseUnit: 18, artiverseDay: 1, artiverseUnitName: "mixed media — a scene with real depth", topicLayer: 0 },
  { sessionNumber: 53, artGym: "ext-cue-card", artGames: "imagine-that", artiverse: "unit-18", artiverseUnit: 18, artiverseDay: 2, artiverseUnitName: "mixed media — a scene with real depth · develop & layer", topicLayer: 0 },
  { sessionNumber: 54, artGym: "book-5", artGames: "shape-fusion", artiverse: "unit-18", artiverseUnit: 18, artiverseDay: 3, artiverseUnitName: "mixed media — a scene with real depth · finish & present", topicLayer: 0 },
  { sessionNumber: 55, artGym: "book-6", artGames: "doodle-dash", artiverse: "unit-19", artiverseUnit: 19, artiverseDay: 1, artiverseUnitName: "chalk pastels — a glowing aurora sky", topicLayer: 0 },
  { sessionNumber: 56, artGym: "cue-card-b1", artGames: "i-spot", artiverse: "unit-19", artiverseUnit: 19, artiverseDay: 2, artiverseUnitName: "chalk pastels — a glowing aurora sky · develop & layer", topicLayer: 0 },
  { sessionNumber: 57, artGym: "cue-card-b2", artGames: "colour-flip", artiverse: "unit-19", artiverseUnit: 19, artiverseDay: 3, artiverseUnitName: "chalk pastels — a glowing aurora sky · finish & present", topicLayer: 0 },
  { sessionNumber: 58, artGym: "ext-book", artGames: "artventure", artiverse: "unit-20", artiverseUnit: 20, artiverseDay: 1, artiverseUnitName: "pencil — a solid 3d form", topicLayer: 0 },
  { sessionNumber: 59, artGym: "ext-cue-card", artGames: "cue-cards-game", artiverse: "unit-20", artiverseUnit: 20, artiverseDay: 2, artiverseUnitName: "pencil — a solid 3d form · develop & layer", topicLayer: 0 },
  { sessionNumber: 60, artGym: "book-5", artGames: "i-spy-i-make", artiverse: "unit-20", artiverseUnit: 20, artiverseDay: 3, artiverseUnitName: "pencil — a solid 3d form · finish & present", topicLayer: 0 },
  { sessionNumber: 61, artGym: "book-6", artGames: "imagine-that", artiverse: "unit-21", artiverseUnit: 21, artiverseDay: 1, artiverseUnitName: "acrylic on black paper — a glowing night creature", topicLayer: 0 },
  { sessionNumber: 62, artGym: "cue-card-b1", artGames: "shape-fusion", artiverse: "unit-21", artiverseUnit: 21, artiverseDay: 2, artiverseUnitName: "acrylic on black paper — a glowing night creature · develop & layer", topicLayer: 0 },
  { sessionNumber: 63, artGym: "cue-card-b2", artGames: "doodle-dash", artiverse: "unit-21", artiverseUnit: 21, artiverseDay: 3, artiverseUnitName: "acrylic on black paper — a glowing night creature · finish & present", topicLayer: 0 },
  { sessionNumber: 64, artGym: "ext-book", artGames: "flex", artiverse: "review", artiverseUnit: 0, artiverseDay: 0, artiverseUnitName: "free making · revisit any technique from earlier", topicLayer: 0, isFlex: true },
];

// ─── Checkpoints ────────────────────────────────────────────

const checkpoints: CurriculumCheckpoint[] = [
  {
    afterSession: 8,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Makes marks freely but without control over line type.",
        developing: "Uses different line types with some control.",
        secure: "Uses different line types with control.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Draws shapes but not yet 3D forms.",
        developing: "Begins to identify basic 3D forms.",
        secure: "Identifies and draws basic 3D forms.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Mixes colours but results are unpredictable.",
        developing: "Mixes to produce some tertiary colours.",
        secure: "Mixes to produce tertiary colours.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Places elements without considering balance.",
        developing: "Begins to use size and placement for balance.",
        secure: "Uses size and placement for visual balance.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Draws from imagination with limited detail.",
        developing: "Creates drawings from imagination with some detail.",
        secure: "Creates detailed drawings from imagination.",
      },
    ],
  },
  {
    afterSession: 16,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Line types present but textures not yet observed.",
        developing: "Begins to observe and draw textures from real objects.",
        secure: "Observes and draws textures from real objects.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "3D forms drawn but proportions inconsistent.",
        developing: "Combines shapes with some recognisable proportions.",
        secure: "Combines shapes with recognisable proportions.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Layering attempted but not yet effective.",
        developing: "Uses layering for some gradients or highlights.",
        secure: "Uses layering for gradients/highlights/shadows.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Foreground/background not yet distinct.",
        developing: "Creates foreground and background with some intention.",
        secure: "Creates foreground/middle ground/background with intention.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Combines materials but not yet intentionally.",
        developing: "Begins to combine materials and techniques with some intention.",
        secure: "Combines materials and techniques intentionally.",
      },
    ],
  },
  {
    afterSession: 24,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Hatching attempted but not yet controlled.",
        developing: "Uses hatching or cross-hatching with some control.",
        secure: "Uses hatching/cross-hatching/stippling to build texture.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Proportions approximate but not yet observed.",
        developing: "Begins to observe proportions and adjust.",
        secure: "Observes proportions and adjusts.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Colour use confident but depth not yet shown.",
        developing: "Begins to use colour to show depth.",
        secure: "Uses colour to show depth (warm advances cool recedes).",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Depth attempted but not yet convincing.",
        developing: "Uses overlap or spacing for some depth.",
        secure: "Uses overlap/spacing/perspective for depth.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Works with others but avoids creative differences.",
        developing: "Begins to work through creative differences.",
        secure: "Works with others on creative differences.",
      },
    ],
  },
  {
    afterSession: 32,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Texture techniques present but not yet layered.",
        developing: "Begins to create multi-layered artworks with texture.",
        secure: "Creates multi-layered artworks where texture is a compositional choice.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Forms accurate but compositions simple.",
        developing: "Begins to create complex compositions.",
        secure: "Creates complex compositions with accurate forms.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Palette choices intuitive but not yet justified.",
        developing: "Begins to choose a palette for specific mood.",
        secure: "Chooses and justifies a palette for specific mood.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Focal point not yet established.",
        developing: "Begins to use contrast to draw eye.",
        secure: "Uses contrast to draw eye to focal point.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Makes choices but cannot yet articulate why.",
        developing: "Begins to articulate some choices.",
        secure: "Makes intentional choices and articulates why.",
      },
    ],
  },
  {
    afterSession: 40,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Individual skills developing but not yet integrated.",
        developing: "Two or more texture skills work together in at least one piece.",
        secure: "Uses line, texture, and layering together with intention.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Individual skills developing but not yet integrated.",
        developing: "Two or more form skills work together in at least one piece.",
        secure: "Uses form, proportion, and composition together with intention.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Individual skills developing but not yet integrated.",
        developing: "Two or more colour skills work together in at least one piece.",
        secure: "Uses colour mixing, layering, and palette together with intention.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Compositional thinking emerging but inconsistent.",
        developing: "Compositional decisions are deliberate in at least one piece.",
        secure: "Work shows compositional thinking throughout.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Generates ideas but doesn't extend them.",
        developing: "Extends ideas across sessions.",
        secure: "Chooses combination of tools and techniques that serves the vision.",
      },
    ],
  },
  {
    afterSession: 48,
    descriptors: [
      {
        skillArea: "Line & Texture",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference and control.",
        secure: "Uses all five skill areas together. Line and texture choices are deliberate.",
      },
      {
        skillArea: "Shape & Form",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference and control.",
        secure: "Uses all five skill areas together. Form and proportion choices are deliberate.",
      },
      {
        skillArea: "Colour & Painting",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference and control.",
        secure: "Uses all five skill areas together. Colour choices are deliberate and justified.",
      },
      {
        skillArea: "Balance & Composition",
        beginning: "Consistent maker. Needs prompts to extend.",
        developing: "Makes confidently across all mediums. Shows preference and control.",
        secure: "Uses all five skill areas together. Compositional decisions are intentional.",
      },
      {
        skillArea: "Imagination & Collaboration",
        beginning: "Consistent willing maker.",
        developing: "Shows personal voice and preference.",
        secure: "Makes choices independently. Talks about own work with specificity and intention.",
      },
    ],
  },
];

// ─── Programme export ───────────────────────────────────────

export const artDesign812: CurriculumProgramme = {
  id: "art-design-8-12",
  slug: "art-design-8-12",
  title: "art and design",
  category: "art",
  heroImageUrl: "/prog-art-8-12.gif",
  ageGroup: "8-12",
  ageLabel: "ages 8\u201312",
  tagline:
    "develop advanced skills in drawing, colour, composition, and imagination.",
  description:
    "builds observation, proportion, layering, palette, and intentional choice \u2014 across multiple mediums, with children able to explain the thinking behind their work.",
  totalSessions: 64,
  skillAreas: [
    {
      id: "lt",
      name: "Line & Texture",
      shortName: "L&T",
      abilities: [
        "Uses different line types with control",
        "Observes and draws textures from real objects",
        "Uses hatching/cross-hatching/stippling to build texture",
        "Creates multi-layered artworks where texture is a compositional choice",
      ],
    },
    {
      id: "sf",
      name: "Shape & Form",
      shortName: "S&F",
      abilities: [
        "Identifies and draws basic 3D forms",
        "Combines shapes with recognisable proportions",
        "Observes proportions and adjusts",
        "Creates complex compositions with accurate forms",
      ],
    },
    {
      id: "cp",
      name: "Colour & Painting",
      shortName: "C&P",
      abilities: [
        "Mixes to produce tertiary colours",
        "Uses layering for gradients/highlights/shadows",
        "Uses colour to show depth (warm advances cool recedes)",
        "Chooses and justifies a palette for specific mood",
      ],
    },
    {
      id: "bc",
      name: "Balance & Composition",
      shortName: "B&C",
      abilities: [
        "Uses size and placement for visual balance",
        "Creates foreground/middle ground/background with intention",
        "Uses overlap/spacing/perspective for depth",
        "Uses contrast to draw eye to focal point",
      ],
    },
    {
      id: "ic",
      name: "Imagination & Collaboration",
      shortName: "I&C",
      abilities: [
        "Creates detailed drawings from imagination",
        "Combines materials and techniques intentionally",
        "Works with others on creative differences",
        "Makes intentional choices and articulates why",
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
      rotationPool: [
        "i-spot", "cue-cards-game", "shape-fusion",
        "i-spy-i-make", "artventure", "imagine-that", "doodle-dash", "colour-flip",
        "art-gym-book", "art-gym-cue-card",
      ],
    },
    {
      id: "artiverse",
      name: "Artiverse",
      durationRange: "55 min",
      objective:
        "Children make on A3 paper. 3-minute thumbnail before each new piece. Educator reads brief and steps back. Artwork goes home. Time runs 55 min so the artwork is the centre of the session. Each unit runs 2 days per artwork — Day 1 sets up the piece, Day 2 completes and refines it. After all 14 units finish, leftover calendar sessions become free-making days where children revisit any earlier technique.",
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
  trialSession: ART_TRIAL_SESSION_8_12,
};
