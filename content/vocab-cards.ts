// Wordsmiths vocabulary flashcards for the language-through-storytelling
// 3-5 programme. Each word is drawn from a storybook the children have read.
// Cards are landscape (the per-word art is landscape). Front = the word +
// picture; back = meaning, word type (in kid-friendly language) and the
// word pairs it goes with. The educator plays the 4-task game with the class.
//
// Decks can be browsed two ways: by difficulty (easy / hard) or by story.

export type VocabLevel = "easy" | "hard";

// kept as grammatical type in the data; shown to children as
// "naming / action / describing word" in the UI.
export type WordType = "noun" | "verb" | "adjective" | "adverb";

export interface VocabCard {
  word: string;
  book: string;
  bookCover: string;
  /** Optional per-word picture; falls back to the uniform tile. */
  image?: string;
  meaning: string;
  sentence: string; // the line from the book
  wordType: WordType;
  pairs: string[]; // word pairs that include the word, e.g. "wavy hair"
  level: VocabLevel;
}

const BEAR = "/language-books/01-bear-hunt.png";
const GIRAFFE = "/language-books/03-giraffes-cant-dance.png";
const LION = "/language-books/05-lion-inside.png";
const GRUFFALO = "/language-books/07-gruffalo.png";
const MONSTER = "/language-books/04-color-monster.png";

// The five storybooks, in reading order — used by the "sort by story" tab.
export const VOCAB_BOOKS: { name: string; cover: string }[] = [
  { name: "We're Going on a Bear Hunt", cover: BEAR },
  { name: "Giraffes Can't Dance", cover: GIRAFFE },
  { name: "The Lion Inside", cover: LION },
  { name: "The Gruffalo", cover: GRUFFALO },
  { name: "The Colour Monster", cover: MONSTER },
];

export const VOCAB_CARDS: VocabCard[] = [
  // ── We're Going on a Bear Hunt ──
  { word: "hunt", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to look for something", sentence: "We're going on a bear hunt.", wordType: "verb", pairs: ["bear hunt", "treasure hunt", "hunt around"], level: "easy" },
  { word: "wavy", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "having soft curves like waves", sentence: "Long wavy grass.", wordType: "adjective", pairs: ["wavy grass", "wavy hair", "wavy lines"], level: "easy" },
  { word: "splash", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to make water or mud fly about", sentence: "Splash splosh!", wordType: "verb", pairs: ["big splash", "splash water", "splash about"], level: "easy" },
  { word: "deep", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "something that goes far down or far inside", sentence: "A deep cold river.", wordType: "adjective", pairs: ["deep river", "deep hole", "deep water"], level: "easy" },
  { word: "oozy", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "wet and sticky with something", sentence: "Thick oozy mud.", wordType: "adjective", pairs: ["oozy mud", "oozy slime"], level: "hard" },
  { word: "squelch", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to make a splashing, sucking sound when squeezed", sentence: "Squelch squerch.", wordType: "verb", pairs: ["squelch through mud", "wet squelch"], level: "hard" },
  { word: "dark", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "having little or no light", sentence: "A big dark forest.", wordType: "adjective", pairs: ["dark forest", "dark cave", "dark night"], level: "easy" },
  { word: "stumble", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to trip or almost fall", sentence: "Stumble trip!", wordType: "verb", pairs: ["stumble over", "stumble and trip"], level: "hard" },
  { word: "swirling", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "moving round and round", sentence: "A swirling whirling snowstorm.", wordType: "adjective", pairs: ["swirling snow", "swirling leaves", "swirling wind"], level: "hard" },
  { word: "gloomy", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "dark or sad", sentence: "A narrow gloomy cave.", wordType: "adjective", pairs: ["gloomy cave", "gloomy sky", "gloomy clouds"], level: "hard" },
  { word: "tiptoe", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "to walk quietly on your toes", sentence: "Tiptoe! Tiptoe! Tiptoe!", wordType: "verb", pairs: ["tiptoe quietly", "tiptoe across"], level: "easy" },
  { word: "furry", book: "We're Going on a Bear Hunt", bookCover: BEAR, meaning: "covered with soft hair", sentence: "Two big furry ears!", wordType: "adjective", pairs: ["furry ears", "furry animal", "furry tail"], level: "easy" },

  // ── Giraffes Can't Dance ──
  { word: "slim", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "thin and narrow", sentence: "Whose neck was long and slim.", wordType: "adjective", pairs: ["slim neck", "very slim"], level: "easy" },
  { word: "munching", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "to chew noisily", sentence: "And munching shoots off trees.", wordType: "verb", pairs: ["munching leaves", "munching loudly", "munching snacks"], level: "easy" },
  { word: "buckled", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "to bend or fall apart", sentence: "He buckled at the knees.", wordType: "verb", pairs: ["buckled at the knees", "buckled and fell"], level: "hard" },
  { word: "prance", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "to walk in a lively, happy way", sentence: "Turns up to skip and prance.", wordType: "verb", pairs: ["prance around", "skip and prance"], level: "hard" },
  { word: "waltzing", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "a dance where two people go in circles", sentence: "The warthogs started waltzing.", wordType: "verb", pairs: ["waltzing together", "waltzing slowly"], level: "hard" },
  { word: "elegant", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "fine or rich in quality", sentence: "Which was elegant and bold.", wordType: "adjective", pairs: ["elegant dance", "elegant swan", "elegant dress"], level: "hard" },
  { word: "splendid", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "graceful and beautiful", sentence: "For a splendid Scottish reel.", wordType: "adjective", pairs: ["splendid day", "splendid view", "splendid party"], level: "hard" },
  { word: "clumsy", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "moving awkwardly", sentence: "Hey, look at clumsy Gerald.", wordType: "adjective", pairs: ["clumsy footsteps", "clumsy puppy"], level: "easy" },
  { word: "swaying", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "moving slowly from side to side", sentence: "Listen to the swaying grass.", wordType: "verb", pairs: ["swaying grass", "swaying branches", "swaying leaves"], level: "easy" },
  { word: "somersault", book: "Giraffes Can't Dance", bookCover: GIRAFFE, meaning: "a roll where your body turns over in the air", sentence: "Then he did a backwards somersault.", wordType: "noun", pairs: ["backwards somersault", "big somersault"], level: "hard" },

  // ── The Lion Inside ──
  { word: "mighty", book: "The Lion Inside", bookCover: LION, meaning: "having great power, strength, or size", sentence: "Stood a mighty flat rock.", wordType: "adjective", pairs: ["mighty lion", "mighty roar", "mighty elephant"], level: "hard" },
  { word: "meekest", book: "The Lion Inside", bookCover: LION, meaning: "the quietest, who easily agrees with others", sentence: "Lived the littlest, quietest, meekest brown mouse.", wordType: "adjective", pairs: ["meekest mouse", "the meekest of all"], level: "hard" },
  { word: "mane", book: "The Lion Inside", bookCover: LION, meaning: "the long hair around the neck of some animals", sentence: "A great golden mane.", wordType: "noun", pairs: ["golden mane", "lion's mane", "fluffy mane"], level: "easy" },
  { word: "trod", book: "The Lion Inside", bookCover: LION, meaning: "walked or stepped on something", sentence: "He got trod on and sat on.", wordType: "verb", pairs: ["trod on", "trod softly"], level: "hard" },
  { word: "roar", book: "The Lion Inside", bookCover: LION, meaning: "to make a long loud cry, usually by a lion", sentence: "By how loud he could ROAR!", wordType: "verb", pairs: ["loud roar", "lion's roar", "roar loudly"], level: "easy" },
  { word: "impressed", book: "The Lion Inside", bookCover: LION, meaning: "feeling amazed or pleased by something", sentence: "All were impressed by this mighty King Cat.", wordType: "adjective", pairs: ["impressed the crowd", "very impressed"], level: "hard" },
  { word: "cleverest", book: "The Lion Inside", bookCover: LION, meaning: "the smartest of all", sentence: "The cleverest thought popped into his head.", wordType: "adjective", pairs: ["cleverest thought", "the cleverest of all"], level: "easy" },
  { word: "slumbering", book: "The Lion Inside", bookCover: LION, meaning: "sleeping peacefully", sentence: "To the slumbering lion reclining on top.", wordType: "verb", pairs: ["slumbering lion", "slumbering peacefully"], level: "hard" },
  { word: "reclining", book: "The Lion Inside", bookCover: LION, meaning: "lying back", sentence: "To the slumbering lion reclining on top.", wordType: "verb", pairs: ["reclining on top", "reclining back"], level: "hard" },
  { word: "frightened", book: "The Lion Inside", bookCover: LION, meaning: "feeling scared that something bad might happen", sentence: "This lion was frightened of mice.", wordType: "adjective", pairs: ["frightened of mice", "frightened face"], level: "easy" },

  // ── The Gruffalo ──
  { word: "stroll", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "to walk slowly in a relaxed way", sentence: "The mouse took a stroll through the deep dark wood.", wordType: "verb", pairs: ["take a stroll", "stroll through the wood"], level: "hard" },
  { word: "underground", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "under the ground", sentence: "Come and have lunch in my underground house.", wordType: "adjective", pairs: ["underground house", "underground tunnel"], level: "easy" },
  { word: "roasted", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "cooked with heat until warm or brown", sentence: "And his favourite food is roasted fox.", wordType: "adjective", pairs: ["roasted fox", "roasted nuts"], level: "easy" },
  { word: "treetop", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "the very top part of a tree", sentence: "Come and have tea in my treetop house.", wordType: "noun", pairs: ["treetop house", "treetop nest"], level: "easy" },
  { word: "knobbly", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "full of little bumps", sentence: "He has knobbly knees, turned-out toes.", wordType: "adjective", pairs: ["knobbly knees", "knobbly tree trunk"], level: "hard" },
  { word: "poisonous", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "not safe to eat or touch — it can make you sick", sentence: "And a poisonous wart at the end of his nose.", wordType: "adjective", pairs: ["poisonous wart", "poisonous snake", "poisonous mushroom"], level: "hard" },
  { word: "prickles", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "tiny sharp points that can poke", sentence: "He has purple prickles all over his back.", wordType: "noun", pairs: ["purple prickles", "sharp prickles"], level: "hard" },
  { word: "scrambled", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "moved with urgency or panic; or mixed up", sentence: "And his favourite food is scrambled snake.", wordType: "verb", pairs: ["scrambled snake", "scrambled away"], level: "hard" },
  { word: "astounding", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "very surprising or amazing", sentence: "“Astounding!” said the gruffalo.", wordType: "adjective", pairs: ["astounding sight", "truly astounding"], level: "hard" },
  { word: "fled", book: "The Gruffalo", bookCover: GRUFFALO, meaning: "ran away quickly", sentence: "And quick as the wind he turned and fled.", wordType: "verb", pairs: ["turned and fled", "fled quickly"], level: "hard" },

  // ── The Colour Monster ──
  { word: "confused", book: "The Colour Monster", bookCover: MONSTER, meaning: "not understanding something", sentence: "Today he's all mixed up and very confused.", wordType: "adjective", pairs: ["very confused", "mixed up and confused"], level: "easy" },
  { word: "stirred", book: "The Colour Monster", bookCover: MONSTER, meaning: "mixed something by moving it around", sentence: "Your feelings are all stirred together.", wordType: "verb", pairs: ["stirred together", "stirred the soup"], level: "hard" },
  { word: "gentle", book: "The Colour Monster", bookCover: MONSTER, meaning: "being kind, calm, and careful", sentence: "Calm is soft and gentle.", wordType: "adjective", pairs: ["soft and gentle", "gentle voice", "gentle hands"], level: "easy" },
  { word: "bright", book: "The Colour Monster", bookCover: MONSTER, meaning: "giving off a lot of light", sentence: "Happiness is bright like the sun.", wordType: "adjective", pairs: ["bright like the sun", "bright light", "bright colours"], level: "easy" },
  { word: "stomp", book: "The Colour Monster", bookCover: MONSTER, meaning: "to take big, heavy, noisy steps", sentence: "Anger can make you want to stomp.", wordType: "verb", pairs: ["stomp your feet", "stomp around"], level: "easy" },
  { word: "blazes", book: "The Colour Monster", bookCover: MONSTER, meaning: "burns brightly with big flames", sentence: "It blazes red like fire.", wordType: "verb", pairs: ["blazes red", "blazes like fire"], level: "hard" },
  { word: "afraid", book: "The Colour Monster", bookCover: MONSTER, meaning: "a feeling of being scared or worried", sentence: "Fear feels small and dark.", wordType: "adjective", pairs: ["afraid of the dark", "feeling afraid"], level: "easy" },
  { word: "fair", book: "The Colour Monster", bookCover: MONSTER, meaning: "treating everyone equally", sentence: "Let's share so it's fair.", wordType: "adjective", pairs: ["a fair game", "share so it's fair"], level: "easy" },
  { word: "calm", book: "The Colour Monster", bookCover: MONSTER, meaning: "quiet and peaceful", sentence: "This is calm.", wordType: "adjective", pairs: ["calm and quiet", "calm sea", "calm voice"], level: "easy" },
];

export function vocabByLevel(level: VocabLevel): VocabCard[] {
  return VOCAB_CARDS.filter((c) => c.level === level);
}

export function vocabByBook(book: string): VocabCard[] {
  return VOCAB_CARDS.filter((c) => c.book === book);
}

// Grammatical type → kid-friendly label (icons live in the component).
export const WORD_TYPE_LABEL: Record<WordType, string> = {
  noun: "naming word",
  verb: "action word",
  adjective: "describing word",
  adverb: "describing word",
};

// The four word-game tasks the educator runs with each card.
export const VOCAB_TASKS: { key: string; label: string; prompt: string }[] = [
  { key: "emote", label: "emote", prompt: "show the word on your face — what feeling does it have?" },
  { key: "enact", label: "enact", prompt: "act it out with your body — no saying the word." },
  { key: "sentence", label: "use it in a sentence", prompt: "make your own sentence with the word." },
  { key: "ask", label: "word conversation", prompt: "ask & answer: what is it? why? where? how? — keep the talk going." },
];
