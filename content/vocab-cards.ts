// Wordsmiths vocabulary flashcards — two decks (easy / hard) for the
// language-through-storytelling 3-5 programme. Each word is drawn from a
// storybook the children have read. Front of card = the word (+ a picture);
// back = book cover, meaning, word type, and "pairs with" words. The
// educator plays the 4-task game (emote · enact · use in a sentence · ask
// what/why/where/how) with the class.
//
// Source: the centre's "Vocabulary Final" sheet. NOTE: the easy/hard split
// below is a first pass by word difficulty (easy = common Tier-1, hard =
// sophisticated Tier-2) — verify against the colour coding and adjust.
// Per-word picture art is not yet supplied, so the front falls back to the
// book cover; swap in `image` paths when the art is ready.

export type VocabLevel = "easy" | "hard";

export interface VocabCard {
  word: string;
  book: string;
  bookCover: string;
  /** Optional per-word picture; falls back to the book cover. */
  image?: string;
  meaning: string;
  sentence: string; // the line from the book
  wordType: "noun" | "verb" | "adjective" | "adverb";
  pairs: string[]; // words it pairs / goes with
  level: VocabLevel;
}

const BEAR = "/language-books/01-bear-hunt.png";
const GIRAFFE = "/language-books/03-giraffes-cant-dance.png";
const LION = "/language-books/05-lion-inside.png";
const GRUFFALO = "/language-books/07-gruffalo.png";
const MONSTER = "/language-books/04-color-monster.png";

export const VOCAB_CARDS: VocabCard[] = [
  // ── We're Going on a Bear Hunt ──
  { word: "hunt", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to look for something", sentence: "We're going on a bear hunt.", wordType: "verb", pairs: ["treasure hunt", "animal hunt", "hunt around"], level: "easy" },
  { word: "wavy", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "having soft curves like waves", sentence: "Long wavy grass.", wordType: "adjective", pairs: ["hair", "lines", "pattern"], level: "easy" },
  { word: "splash", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to make water or mud fly about", sentence: "Splash splosh!", wordType: "verb", pairs: ["water", "painting", "big splash"], level: "easy" },
  { word: "deep", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "something that goes far down or far inside", sentence: "A deep cold river.", wordType: "adjective", pairs: ["hole", "water", "burrow"], level: "easy" },
  { word: "oozy", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "wet and sticky with something", sentence: "Thick oozy mud.", wordType: "adjective", pairs: ["slime", "mud"], level: "hard" },
  { word: "squelch", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to make a splashing, sucking sound when squeezed", sentence: "Squelch squerch.", wordType: "verb", pairs: ["muddy", "wet", "squelch through"], level: "hard" },
  { word: "dark", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "having little or no light", sentence: "A big dark forest.", wordType: "adjective", pairs: ["room", "cave", "night", "sky"], level: "easy" },
  { word: "stumble", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to trip or almost fall", sentence: "Stumble trip!", wordType: "verb", pairs: ["stumble over", "stumble on"], level: "hard" },
  { word: "swirling", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "moving round and round", sentence: "A swirling whirling snowstorm.", wordType: "adjective", pairs: ["leaves", "wind", "water"], level: "hard" },
  { word: "gloomy", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "dark or sad", sentence: "A narrow gloomy cave.", wordType: "adjective", pairs: ["clouds", "sky", "face"], level: "hard" },
  { word: "tiptoe", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to walk quietly on your toes", sentence: "Tiptoe! Tiptoe! Tiptoe!", wordType: "verb", pairs: ["quietly", "across", "around"], level: "easy" },
  { word: "furry", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "covered with soft hair", sentence: "Two big furry ears!", wordType: "adjective", pairs: ["animal", "tail", "ears"], level: "easy" },

  // ── Giraffes Can't Dance ──
  { word: "slim", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "thin and narrow", sentence: "Whose neck was long and slim.", wordType: "adjective", pairs: ["very slim", "slim neck"], level: "easy" },
  { word: "munching", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "to chew noisily", sentence: "And munching shoots off trees.", wordType: "verb", pairs: ["carrots", "snacks", "loudly"], level: "easy" },
  { word: "buckled", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "to bend or fall apart", sentence: "He buckled at the knees.", wordType: "verb", pairs: ["knees", "road"], level: "hard" },
  { word: "prance", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "to walk in a lively, happy way", sentence: "Turns up to skip and prance.", wordType: "verb", pairs: ["around", "along", "gently"], level: "hard" },
  { word: "waltzing", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "a dance where two people go in circles", sentence: "The warthogs started waltzing.", wordType: "verb", pairs: ["dancers", "slowly", "together"], level: "hard" },
  { word: "elegant", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "fine or rich in quality", sentence: "Which was elegant and bold.", wordType: "adjective", pairs: ["dance", "swan", "dress"], level: "hard" },
  { word: "splendid", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "graceful and beautiful", sentence: "For a splendid Scottish reel.", wordType: "adjective", pairs: ["day", "view", "party"], level: "hard" },
  { word: "clumsy", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "moving awkwardly", sentence: "Hey, look at clumsy Gerald.", wordType: "adjective", pairs: ["footsteps", "bear", "puppy"], level: "easy" },
  { word: "swaying", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "moving slowly from side to side", sentence: "Listen to the swaying grass.", wordType: "verb", pairs: ["grass", "leaves", "branches"], level: "easy" },
  { word: "somersault", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "a roll where your body turns over in the air", sentence: "Then he did a backwards somersault.", wordType: "noun", pairs: ["jump", "roll"], level: "hard" },

  // ── The Lion Inside ──
  { word: "mighty", book: "The Lion Inside", bookCover: LION, meaning: "having great power, strength, or size", sentence: "Stood a mighty flat rock.", wordType: "adjective", pairs: ["lion", "superhero", "elephant"], level: "hard" },
  { word: "meekest", book: "The Lion Inside", bookCover: LION, meaning: "the quietest, who easily agrees with others", sentence: "Lived the littlest, quietest, meekest brown mouse.", wordType: "adjective", pairs: ["mouse", "lamb"], level: "hard" },
  { word: "mane", book: "The Lion Inside", bookCover: LION, meaning: "the long hair around the neck of some animals", sentence: "He was so very tiny, so incredibly small.", wordType: "noun", pairs: ["lion", "horse", "golden mane"], level: "easy" },
  { word: "trod", book: "The Lion Inside", bookCover: LION, meaning: "walked or stepped on something", sentence: "He got trod on and sat on.", wordType: "verb", pairs: ["softly", "along"], level: "hard" },
  { word: "roar", book: "The Lion Inside", bookCover: LION, meaning: "to make a long loud cry, usually by a lion", sentence: "By how loud he could ROAR!", wordType: "verb", pairs: ["lion", "tiger", "dragon"], level: "easy" },
  { word: "impressed", book: "The Lion Inside", bookCover: LION, meaning: "feeling amazed or pleased by something", sentence: "All were impressed by this mighty King Cat.", wordType: "adjective", pairs: ["crowd", "friends", "teacher"], level: "hard" },
  { word: "cleverest", book: "The Lion Inside", bookCover: LION, meaning: "the smartest of all", sentence: "The cleverest thought popped into his head.", wordType: "adjective", pairs: ["fox", "detective", "child"], level: "easy" },
  { word: "slumbering", book: "The Lion Inside", bookCover: LION, meaning: "sleeping peacefully", sentence: "To the slumbering lion reclining on top.", wordType: "verb", pairs: ["bear", "baby", "cat"], level: "hard" },
  { word: "reclining", book: "The Lion Inside", bookCover: LION, meaning: "lying back", sentence: "To the slumbering lion reclining on top.", wordType: "verb", pairs: ["sofa", "cushion", "bed"], level: "hard" },
  { word: "frightened", book: "The Lion Inside", bookCover: LION, meaning: "feeling scared that something bad might happen", sentence: "This lion was frightened of mice.", wordType: "adjective", pairs: ["monkey", "spider", "kitten"], level: "easy" },

  // ── The Gruffalo ──
  { word: "stroll", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "to walk slowly in a relaxed way", sentence: "The mouse took a stroll through the deep dark wood.", wordType: "verb", pairs: ["park", "road", "beach"], level: "hard" },
  { word: "underground", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "under the ground", sentence: "Come and have lunch in my underground house.", wordType: "adjective", pairs: ["tunnel", "rabbit", "roots"], level: "easy" },
  { word: "roasted", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "cooked with heat until warm or brown", sentence: "And his favourite food is roasted fox.", wordType: "adjective", pairs: ["marshmallow", "campfire", "chicken"], level: "easy" },
  { word: "treetop", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "the very top part of a tree", sentence: "Come and have tea in my treetop house.", wordType: "noun", pairs: ["nest", "squirrel", "birds"], level: "easy" },
  { word: "knobbly", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "full of little bumps", sentence: "He has knobbly knees, turned-out toes.", wordType: "adjective", pairs: ["potato", "tree trunk", "ginger"], level: "hard" },
  { word: "poisonous", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "not safe to eat or touch — it can make you sick", sentence: "And a poisonous wart at the end of his nose.", wordType: "adjective", pairs: ["snake", "mushroom", "scorpion"], level: "hard" },
  { word: "prickles", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "tiny sharp points that can poke", sentence: "He has purple prickles all over his back.", wordType: "noun", pairs: ["cactus", "rose", "porcupine"], level: "hard" },
  { word: "scrambled", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "moved with urgency or panic; or mixed up", sentence: "And his favourite food is scrambled snake.", wordType: "verb", pairs: ["eggs", "wires", "puzzle"], level: "hard" },
  { word: "astounding", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "very surprising or amazing", sentence: "“Astounding!” said the gruffalo.", wordType: "adjective", pairs: ["rainbow", "waterfall", "castle"], level: "hard" },
  { word: "fled", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "ran away quickly", sentence: "And quick as the wind he turned and fled.", wordType: "verb", pairs: ["deer", "bird", "fly away"], level: "hard" },

  // ── The Colour Monster ──
  { word: "confused", book: "The Colour Monster", bookCover: MONSTER, meaning: "not understanding something", sentence: "Today he's all mixed up and very confused.", wordType: "adjective", pairs: ["maze", "question", "map"], level: "easy" },
  { word: "stirred", book: "The Colour Monster", bookCover: MONSTER, meaning: "mixed something by moving it around", sentence: "Your feelings are all stirred together.", wordType: "verb", pairs: ["soup", "paint", "bowl"], level: "hard" },
  { word: "gentle", book: "The Colour Monster", bookCover: MONSTER, meaning: "being kind, calm, and careful", sentence: "Calm is soft and gentle.", wordType: "adjective", pairs: ["voice", "smile", "hands"], level: "easy" },
  { word: "bright", book: "The Colour Monster", bookCover: MONSTER, meaning: "giving off a lot of light", sentence: "Happiness is bright like the sun.", wordType: "adjective", pairs: ["sun", "light", "colours"], level: "easy" },
  { word: "stomp", book: "The Colour Monster", bookCover: MONSTER, meaning: "to take big, heavy, noisy steps", sentence: "Anger can make you want to stomp.", wordType: "verb", pairs: ["storm", "volcano", "feet"], level: "easy" },
  { word: "blazes", book: "The Colour Monster", bookCover: MONSTER, meaning: "burns brightly with big flames", sentence: "It blazes red like fire.", wordType: "verb", pairs: ["fire", "torch", "dragon"], level: "hard" },
  { word: "afraid", book: "The Colour Monster", bookCover: MONSTER, meaning: "a feeling of being scared or worried", sentence: "Fear feels small and dark.", wordType: "adjective", pairs: ["monster", "thunder", "dark"], level: "easy" },
  { word: "fair", book: "The Colour Monster", bookCover: MONSTER, meaning: "treating everyone equally", sentence: "Let's share so it's fair.", wordType: "adjective", pairs: ["game", "share", "rule"], level: "easy" },
  { word: "calm", book: "The Colour Monster", bookCover: MONSTER, meaning: "quiet and peaceful", sentence: "This is calm.", wordType: "adjective", pairs: ["sea", "breeze", "voice"], level: "easy" },
];

export function vocabByLevel(level: VocabLevel): VocabCard[] {
  return VOCAB_CARDS.filter((c) => c.level === level);
}

// The four word-game tasks the educator runs with each card.
export const VOCAB_TASKS: { key: string; label: string; prompt: string }[] = [
  { key: "emote", label: "emote", prompt: "show the word on your face — what feeling does it have?" },
  { key: "enact", label: "enact", prompt: "act it out with your body — no saying the word." },
  { key: "sentence", label: "use it in a sentence", prompt: "make your own sentence with the word." },
  { key: "ask", label: "word conversation", prompt: "ask & answer: what is it? why? where? how? — keep the talk going." },
];
