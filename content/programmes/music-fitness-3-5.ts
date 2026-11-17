import type { CurriculumActivity, CurriculumProgramme } from "@/content/types";

/* ───────────────────────────────────────────────────────────────
 * Music & Fitness — ages 3–5.
 *
 * The fourth strand of the at-centre rotation. A day runs:
 *   opening circle → active listening (10m) → singing & voice (placeholder)
 *   → break → movement games (15m · two games) → closing circle.
 *
 * Four skills (grounded in early-childhood music + fundamental-movement
 * frameworks — Dalcroze/Kodály listening & musicianship, and the FMS
 * agility/coordination/balance/strength model):
 *   • listening  • musicality  • creative expression  • fitness
 *
 * Every game is tagged to the skills it builds (skillIds) so coverage —
 * and the gaps — are visible on the overview's "games by skill" grid.
 * ─────────────────────────────────────────────────────────────── */

/* ── Active listening & music games (the 10-minute listening block) ── */
const listeningGames: Record<string, CurriculumActivity> = {
  "ml-body-percussion": {
    id: "ml-body-percussion",
    segment: "active-listening",
    title: "body percussion",
    setupLine: "Make music with your body — clap, stomp, pat — to the beat of a song.",
    howToPlay:
      "Children discover the sounds their bodies make (clap, stomp, pat, click) and perform a pattern of body-percussion cues along to a medium-fast song, in sequence or together.",
    players: "whole group · 1 educator",
    duration: "10 min",
    materials: ["7 dice with a body part on each face", "A medium-fast song", "Body-percussion videos (TV)"],
    skillIds: ["musicality", "listening"],
    easierVariation: "Level 1 — sing & clap along; the educator gives a pattern of beats on different body parts and children copy.",
    harderVariation:
      "Level 2 — in a circle, each child rolls a body-part die and does the action; then play on the beat in sequence (try two dice at once). Level 3 — follow a body-percussion video.",
    namedBlocks: [
      {
        title: "video bank (level 3)",
        body:
          "youtube.com/watch?v=3ZV0vNHiJCw · =1GaDczCwFcw · =r6PVNEMHpcQ · =hqZeWsUwRb0 · =xshgioG7zjE · =D0J5DneSHxI · =s3kIWk-tGZ4",
      },
    ],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ml-london-bridge": {
    id: "ml-london-bridge",
    segment: "active-listening",
    title: "london bridge",
    setupLine: "A traditional singing game — act out each verse as you sing.",
    howToPlay:
      "This folk song has many verses (iron bars, needles & pins, silver & gold, a prisoner). Children act out each verse as they sing — storytelling through music. Pick only the verses you want to use.",
    players: "whole group · 1 educator",
    duration: "10 min",
    materials: ["Space to form a bridge with two children's arms"],
    skillIds: ["listening", "musicality"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ml-charlie-ocean": {
    id: "ml-charlie-ocean",
    segment: "active-listening",
    title: "charlie over the ocean",
    setupLine: "A sung Duck-Duck-Goose — internalise the melody as you play.",
    howToPlay:
      "Everyone sits in a circle. One child walks the outside singing the song and, on the last word (\"me\"), tags the child in front, who chases to see if the first child can reach the empty spot. Perfect for larger groups; children internalise the melody while they play.",
    players: "whole group · 1 educator",
    duration: "10 min",
    materials: ["A circle of space"],
    skillIds: ["listening", "musicality"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ml-dancing-forest": {
    id: "ml-dancing-forest",
    segment: "active-listening",
    title: "we are dancing in the forest",
    setupLine: "Dance while the 'wolf' is away — listen for the moment to run!",
    howToPlay:
      "One child is the wolf in the centre; the rest dance and sing on the other side. When they ask \"wolf, are you there?\" the wolf answers with something funny (\"I'm brushing my teeth!\") — or shouts \"Yes!\" and chases. Children listen for the cue and run to the far side without being tagged; whoever is tagged becomes the next wolf. Sneaks in improvisation as the wolf invents new answers.",
    players: "whole group · 1 educator",
    duration: "10 min",
    materials: ["An open space with two sides"],
    skillIds: ["listening", "creative-expression"],
    debriefPrompts: [],
    type: "physical-game",
  },
  "ml-musical-chairs": {
    id: "ml-musical-chairs",
    segment: "active-listening",
    title: "musical chairs",
    setupLine: "Walk to the music; when it stops, find a chair — active listening & self-control.",
    howToPlay:
      "Chairs in a circle, one fewer than the children. Children walk around while the music plays; when it stops they find a chair. Remove one chair each round. Builds active listening, rhythm awareness and self-regulation.",
    players: "whole group · 1 educator",
    duration: "10 min",
    materials: ["1 chair per child (minus 1)", "Music or an instrument"],
    skillIds: ["listening", "fitness"],
    easierVariation: "Recorded music.",
    harderVariation: "Live instrument — a rotating child is the 'musician'; children must find a chair when the playing stops.",
    debriefPrompts: [],
    type: "physical-game",
  },
  "ml-fruit-basket": {
    id: "ml-fruit-basket",
    segment: "active-listening",
    title: "fruit basket",
    setupLine: "Listen for your fruit, then dash to a new seat.",
    howToPlay:
      "Each child is a fruit; all sit in a circle with one child in the middle. The caller names two fruits — those children swap seats while the middle child tries to steal a seat. The child left standing becomes the caller. \"Fruit basket turnover!\" means everyone swaps. Builds listening, reflexes and social interaction.",
    players: "whole group · 1 educator",
    duration: "10 min",
    materials: ["1 chair per child (minus 1)"],
    skillIds: ["listening", "fitness"],
    easierVariation: "Call 2 familiar fruit names.",
    harderVariation: "Call 3–4+ names, or mix themes (animals, vegetables, objects) — quicker reactions.",
    debriefPrompts: [],
    type: "physical-game",
  },
  "ml-hidden-objects": {
    id: "ml-hidden-objects",
    segment: "active-listening",
    title: "hidden objects hunt",
    setupLine: "Listen to the clue, then find the hidden object.",
    howToPlay:
      "Hide objects of different shapes, colours and sizes around the area. The educator gives a clue; children listen and search for the matching object. Builds listening, observation, memory and attention to detail.",
    players: "whole group · 1 educator",
    duration: "10 min",
    materials: ["Objects of different sizes, shapes & colours", "Timer (optional)"],
    skillIds: ["listening"],
    easierVariation: "Direct clue (\"find the red ball\"); find 1–2 objects at own pace.",
    harderVariation: "Multi-step riddles / abstract clues; find a set (e.g. 1 red, 1 big, 1 round) against a 1-minute timer.",
    debriefPrompts: [],
    type: "physical-game",
  },
};

/* ── Movement & fitness games (the 15-minute block — two games a day) ── */
const movementGames: Record<string, CurriculumActivity> = {
  "mv-balancing-act": {
    id: "mv-balancing-act",
    segment: "movement",
    title: "balancing act",
    setupLine: "In pairs, balance an object between two body parts and walk to the finish.",
    howToPlay:
      "Pairs roll a body-part die (palm-to-palm, finger-to-finger, elbow-to-elbow, shoulder-to-shoulder, head-to-head, back-to-back), choose an object, and walk from start to finish balancing it between those parts without holding it. If it drops, restart. Builds coordination, balance, teamwork and body awareness.",
    players: "pairs · 1 educator",
    duration: "15 min",
    materials: ["Objects of different shapes/sizes (soft toy, cup, ball)", "1 body-parts die", "Cones (start/finish)", "Timer"],
    skillIds: ["fitness", "creative-expression"],
    easierVariation: "No timer; short 2 m distance; soft toy.",
    harderVariation: "15-second timer; 6 m with turns; rubber ball (unstable).",
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-triathlon": {
    id: "mv-triathlon",
    segment: "movement",
    title: "mini triathlon",
    setupLine: "Stack, carry and drop — race through three zones in sequence.",
    howToPlay:
      "A three-zone course: stack/unstack cones at the Cone Zone, carry a ball through the Ball Transfer Zone, then drop it in the bucket at the Bucket Drop Zone. Relay mode: tag the next teammate. If an object falls, restart that zone. Builds coordination, speed and memory of sequences.",
    players: "teams or solo · 1 educator",
    duration: "15 min",
    materials: ["Cones / cups", "Balls", "Buckets", "Timer"],
    skillIds: ["fitness"],
    easierVariation: "No timer; 2 m; 1 stack of 2 items.",
    harderVariation: "30-second timer; 6 m with zig-zags; 4+ stacks of 4.",
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-bowling": {
    id: "mv-bowling",
    segment: "movement",
    title: "bowling",
    setupLine: "Roll the ball and knock down the pins.",
    howToPlay:
      "Players stand behind the line and roll the ball to knock down pins — two tries per round; reset after each turn; count the pins. Play solo, in teams, or as a relay. Builds hand-eye coordination, motor skills and aim.",
    players: "teams or solo · 1 educator",
    duration: "15 min",
    materials: ["Bowling pins", "Bowling balls", "Cones (lanes)"],
    skillIds: ["fitness"],
    easierVariation: "0.5 m roll; 5 pins close together; side barriers.",
    harderVariation: "1.5 m roll; 10+ pins spaced apart; no barriers.",
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-ball-toss": {
    id: "mv-ball-toss",
    segment: "movement",
    title: "ball toss",
    setupLine: "Toss the ball into the hoop or bucket from the line.",
    howToPlay:
      "From the throw line, children toss a ball into hoops or buckets and score by accuracy. Take turns solo or in teams. Builds hand-eye coordination and gross motor skills.",
    players: "teams or solo · 1 educator",
    duration: "15 min",
    materials: ["Balls of various sizes", "Hoops or buckets", "Timer"],
    skillIds: ["fitness"],
    easierVariation: "0.5 m; large soft ball; wide bucket; no timer.",
    harderVariation: "1.5 m / around obstacles; small ball; narrow hoop; 15-second rapid round.",
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-paper-tunnels": {
    id: "mv-paper-tunnels",
    segment: "movement",
    title: "paper tunnels",
    setupLine: "Roll the ball through the paper arches without knocking them down.",
    howToPlay:
      "Tape sheets of paper into arches on the floor in a line or zig-zag. The child rolls a soft ball gently so it passes cleanly under every arch without collapsing one. Builds hand-eye coordination, ball control and focus.",
    players: "solo or relay · 1 educator",
    duration: "15 min",
    materials: ["A4/A3 paper", "Floor-safe masking tape", "Small soft balls", "Cones"],
    skillIds: ["fitness"],
    easierVariation: "Large A3 arches; no timer.",
    harderVariation: "Narrow / half-size arches; 30-second scoring challenge.",
    namedBlocks: [{ title: "demo", body: "instagram.com/reel/DEocNuIxbC4" }],
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-pool-noodle": {
    id: "mv-pool-noodle",
    segment: "movement",
    title: "pool-noodle foot balance",
    setupLine: "Balance a pool noodle on your foot and lift it onto the buckets.",
    howToPlay:
      "The child rests a pool noodle on the top of their foot, walks slowly to two inverted buckets, and lifts the noodle to rest across them — no hands. If it falls, try again. Builds balance, coordination and precision.",
    players: "solo or relay · 1 educator",
    duration: "15 min",
    materials: ["Pool noodles", "2 inverted buckets per station", "Cones", "Timer"],
    skillIds: ["fitness"],
    easierVariation: "Short noodle; low buckets; dominant foot.",
    harderVariation: "Long noodle; tall/stacked buckets; hop while balancing.",
    namedBlocks: [{ title: "demo", body: "instagram.com/reel/DJODBpmSDmf" }],
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-balloon-highfive": {
    id: "mv-balloon-highfive",
    segment: "movement",
    title: "balloon high-five",
    setupLine: "Keep the balloon up, high-five your partner, and move to the finish.",
    howToPlay:
      "In pairs: one taps the balloon up and high-fives their partner three times while keeping it afloat, then the partner takes over — moving toward the finish line. If the balloon lands, return to the last checkpoint. Builds teamwork, coordination and timing.",
    players: "pairs · 1 educator",
    duration: "15 min",
    materials: ["1 balloon per pair", "Cones (start/finish)", "Floor markers"],
    skillIds: ["fitness", "creative-expression"],
    easierVariation: "1 high-five per turn; straight path; no timer.",
    harderVariation: "5 high-fives per turn; obstacle path; fastest time wins.",
    namedBlocks: [{ title: "demo", body: "instagram.com/reel/DJCHPaYy7Oq" }],
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-hoop-cup-stack": {
    id: "mv-hoop-cup-stack",
    segment: "movement",
    title: "hoop-jump cup stack",
    setupLine: "Jump side-to-side in the hoops, carrying cups to stack them.",
    howToPlay:
      "Two hoops per child (one per foot). Jump side-to-side (feet inside the hoops) to the cup line, pick up one cup, jump back and stack it — repeat until all cups are stacked. Race solo, in a relay, or against the clock. Builds agility, jumping and coordination.",
    players: "solo or relay · 1 educator",
    duration: "15 min",
    materials: ["2 hula hoops per player", "5–10 plastic cups per set", "Timer"],
    skillIds: ["fitness"],
    easierVariation: "3 cups; hoops close together.",
    harderVariation: "10 cups; hoops wide apart; 1-minute limit.",
    namedBlocks: [{ title: "demo", body: "instagram.com/reel/DHNf2N5x7eY" }],
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-tunnel-ball": {
    id: "mv-tunnel-ball",
    segment: "movement",
    title: "tunnel ball",
    setupLine: "Roll the ball through a tunnel of legs without touching anyone.",
    howToPlay:
      "Players stand in a line, legs wide apart, facing away. One child rolls the ball underhand through the 'tunnel' of legs so it passes to the far end without touching a leg; tunnel players may shuffle to align. Switch the roller after a successful roll. Builds coordination, accuracy and teamwork.",
    players: "whole group · 1 educator",
    duration: "15 min",
    materials: ["1 soft medium ball", "Cones", "Stopwatch (optional)"],
    skillIds: ["fitness"],
    easierVariation: "4 players; large soft ball; just pass through.",
    harderVariation: "8+ players; small ball; must hit a goal cone at the end.",
    namedBlocks: [{ title: "demo", body: "instagram.com/reel/DGO7dBQzJRC" }],
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-cup-blow": {
    id: "mv-cup-blow",
    segment: "movement",
    title: "cup blow race",
    setupLine: "Blow the paper cup along the string — breath control, no hands.",
    howToPlay:
      "A paper cup is threaded onto a taut string between two chairs. The child blows air to push the cup from one chair to the other — no touching. Builds breath control, focus and oral-motor coordination (great for singing & voice too).",
    players: "solo or relay · 1 educator",
    duration: "15 min",
    materials: ["2 chairs", "String/yarn (1–2 m)", "A paper cup threaded on the string", "Stopwatch"],
    skillIds: ["musicality", "fitness"],
    easierVariation: "Short 1 m string; lower level.",
    harderVariation: "2 m string at chest height (crouch); 15-second race.",
    namedBlocks: [{ title: "demo", body: "instagram.com/reel/DJA52PuzbNx" }],
    debriefPrompts: [],
    type: "physical-game",
  },
  "mv-hoop-cone-relay": {
    id: "mv-hoop-cone-relay",
    segment: "movement",
    title: "hoop cone relay",
    setupLine: "Shift the team's cone hoop-by-hoop back to the start.",
    howToPlay:
      "A line of hoops with the team's cone in the furthest one. Player 1 runs out, moves the cone to the next closest hoop, runs back and tags Player 2 — repeat until the cone reaches the first hoop. Builds agility, sequencing and teamwork.",
    players: "teams · 1 educator",
    duration: "15 min",
    materials: ["6–8 hula hoops", "2 cones (per team)", "Start-line markers", "Stopwatch (optional)"],
    skillIds: ["fitness"],
    harderVariation: "Add a movement (skip/hop) between hoops.",
    namedBlocks: [{ title: "demo", body: "instagram.com/reel/DCpG2cSN8sj" }],
    debriefPrompts: [],
    type: "physical-game",
  },
};

const allActivities: Record<string, CurriculumActivity> = {
  ...listeningGames,
  ...movementGames,
};

export const musicFitness35: CurriculumProgramme = {
  id: "music-fitness-3-5",
  slug: "music-fitness-3-5",
  title: "music & fitness",
  category: "music",
  ageGroup: "3-5",
  ageLabel: "ages 3–5",
  heroImageUrl: "/openhouse-logo.png",
  tagline: "listen, sing, move — rhythm, musicality and joyful fitness through play.",
  description:
    "Music & Fitness is the fourth strand of the 3–5 rotation. A day moves through active listening and music games, singing & voice, and a block of movement & fitness games. Children build four skills — listening, musicality, creative expression and fitness — all through play. Every game is tagged to the skills it builds.",
  totalSessions: 0, // day-by-day plan to be sequenced once the singing block is designed
  skillAreas: [
    {
      id: "listening",
      name: "listening",
      shortName: "listening",
      abilities: [
        { name: "notices", description: "Attends to a sound, a change, or a musical cue — without being told what to listen for." },
        { name: "discriminates", description: "Tells sounds apart — loud/soft, fast/slow, high/low, one instrument from another." },
        { name: "responds", description: "Acts on a musical cue — starts, stops, or moves when the music tells them to." },
        { name: "anticipates", description: "Internalises a melody or pattern and predicts what comes next.", isNorthStar: true },
      ],
    },
    {
      id: "musicality",
      name: "musicality",
      shortName: "musicality",
      abilities: [
        { name: "keeps a beat", description: "Claps, taps or steps a steady beat." },
        { name: "follows rhythm", description: "Copies and follows a rhythm or body-percussion pattern." },
        { name: "uses voice", description: "Joins in singing, matches pitch, and controls their breath." },
        { name: "creates", description: "Makes up a rhythm, sound or verse of their own.", isNorthStar: true },
      ],
    },
    {
      id: "creative-expression",
      name: "creative expression",
      shortName: "expression",
      abilities: [
        { name: "moves", description: "Moves their whole body freely to music — big and small." },
        { name: "expresses", description: "Shows a feeling or an idea through movement." },
        { name: "improvises", description: "Invents a movement or a response in the moment." },
        { name: "performs", description: "Shares a movement, song or idea with the group with confidence.", isNorthStar: true },
      ],
    },
    {
      id: "fitness",
      name: "fitness",
      shortName: "fitness",
      abilities: [
        { name: "coordinates", description: "Combines movements and controls hand-eye / foot-eye actions." },
        { name: "agility", description: "Changes direction, reacts and moves quickly and safely." },
        { name: "balances", description: "Holds and controls balance while still or moving." },
        { name: "strength & stamina", description: "Sustains effort through an active sequence.", isNorthStar: true },
      ],
    },
  ],
  segmentDefinitions: [
    { id: "opening-circle", name: "opening circle", durationRange: "15 min", objective: "A warm start together — a hello and meet-and-greet, then a song or two to settle the group and wake up voices and bodies. Pick songs from the song library — opening-circle set.", type: "fixed" },
    {
      id: "active-listening",
      name: "active listening",
      durationRange: "10 min",
      objective:
        "A music & listening game — body percussion, singing games and listening games that build active listening, beat and musicality. One game per session, rotating through the set.",
      type: "rotating",
      rotationPool: Object.keys(listeningGames),
    },
    {
      id: "singing",
      name: "singing & voice",
      durationRange: "10 min",
      objective:
        "The singing & voice block — songs, pitch and vocal play that build the voice. This block is being designed now; for now the time can flow into opening-circle songs and the listening games.",
      type: "fixed",
    },
    { id: "break", name: "break", durationRange: "10 min", objective: "A short rest and snack break in the middle of the longer class.", type: "fixed" },
    {
      id: "movement",
      name: "movement & fitness",
      durationRange: "15 min",
      objective:
        "Two movement & fitness games a session — balance, coordination, agility and strength through active, playful challenges. Each game runs easy → medium → hard so it fits every child.",
      type: "rotating",
      rotationPool: Object.keys(movementGames),
    },
    { id: "closing-circle", name: "closing circle", durationRange: "15 min", objective: "A calm finish together — a simple fitness / movement song to round off the class. Pick a movement song from the song library — closing-circle set.", type: "fixed" },
  ],
  sessionTable: [], // to be sequenced
  activities: allActivities,
  checkpoints: [],
};
