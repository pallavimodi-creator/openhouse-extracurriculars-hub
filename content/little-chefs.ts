/**
 * Little Chefs — the recipe book (WonderWorld, stem 3–5).
 *
 * Children run little food shops, making real choices about recipes,
 * ingredients, quantities, textures, colours, shapes, prices and methods —
 * the maths and science arise naturally from making food. Each shop is a
 * small set of reusable recipe + challenge cards, not one fixed activity.
 *
 * Format: one shop per session, three connected experiences — choose &
 * prepare the food, experiment with one feature of it, then complete a
 * shop order with a maths / logic constraint (a real 15–20 min play).
 *
 * The four skill domains (curiosity · problem solving · logic · number
 * sense) are INTERNAL curriculum tags on each challenge — not labels the
 * child sees. For 3–5, pricing stays simple: 1-coin prices, physical
 * counters, matching, or addition within 10.
 */

export type ChefDomain = "curiosity" | "problem-solving" | "logic" | "number-sense";

export type ChefChallenge = {
  name: string;
  play: string; // how children play
  skills: string[]; // internal domain tags, e.g. "curiosity — predicts · investigates ★"
};

export type ChefShop = {
  slug: string;
  emoji: string;
  name: string;
  tagline: string;
  menu: { label: string; options: string }[]; // the recipe-book "choose your…" lines
  steps: string[]; // make your … 1-2-3-4
  tryThis?: string; // the little experiment
  challenges: ChefChallenge[];
  materials: string;
  teacherPrep: string;
  // planning judgement: which domains this shop is strongest for
  domains: Record<ChefDomain, "strong" | "support">;
};

export const LITTLE_CHEFS: ChefShop[] = [
  {
    slug: "soup",
    emoji: "🍅",
    name: "soup shop",
    tagline: "mix, measure and price a bowl of soup.",
    menu: [
      { label: "tomato soup", options: "more red + less orange" },
      { label: "carrot soup", options: "more orange + less red" },
    ],
    steps: ["choose your soup", "measure and mix", "add toppings", "find the price"],
    tryThis: "which toppings float? which sink?",
    challenges: [
      { name: "make your flavour", play: "Choose tomato or carrot soup and combine different amounts of coloured water. Compare the resulting colour.", skills: ["curiosity — predicts · investigates ★", "number sense — relates"] },
      { name: "measure your soup", play: "Fill bowls to different marked levels using scoops — make small, medium or large portions.", skills: ["number sense — connects · applies ★"] },
      { name: "floating toppings", play: "Predict which toppings float or sink, add them, and watch what happens.", skills: ["curiosity — predicts · investigates ★", "logic — reasons ★"] },
      { name: "price your soup", play: "Choose toppings. Every topping costs 1 coin — count the total.", skills: ["number sense — connects · applies ★"] },
      { name: "a special order", play: "A customer wants more carrot than tomato, three toppings and a medium bowl. Prepare an order meeting all three conditions.", skills: ["problem solving — tries · solves ★", "logic — reasons ★"] },
    ],
    materials: "Transparent bowls, pots, measuring cups, ladles, red & orange coloured water, toy/felt vegetables, toppings of different materials, pretend coins.",
    teacherPrep: "Prepare red tomato and orange carrot soup bases (coloured water). Make reusable vegetable & topping pieces, menu cards and price labels. Pick some large water-safe objects that float and some that sink.",
    domains: { curiosity: "strong", "problem-solving": "support", logic: "support", "number-sense": "strong" },
  },
  {
    slug: "pasta",
    emoji: "🍝",
    name: "pasta shop",
    tagline: "sort shapes, mix sauces and build a bowl.",
    menu: [
      { label: "choose your pasta", options: "bows · spirals · tubes · shells" },
      { label: "choose your sauce", options: "🔴 red · 🟡 yellow · ⚪ white" },
      { label: "add your toppings", options: "🥦 vegetables · 🧀 cheese · 🍄 mushrooms" },
    ],
    steps: ["choose", "mix", "add", "count"],
    tryThis: "mix white + red sauce to make lighter and darker shades — line them up lightest to darkest.",
    challenges: [
      { name: "pasta shapes", play: "Sort pasta by shape, compare their properties, and make a mixed pasta bowl from chosen shapes.", skills: ["logic — sorts", "number sense — connects"] },
      { name: "mix your sauce", play: "Mix different proportions of coloured sauce bases to make lighter, darker or new colours.", skills: ["curiosity — predicts · investigates ★"] },
      { name: "pasta patterns", play: "Make a pattern using bow, spiral and tube pasta, then continue or change it.", skills: ["logic — patterns · predicts from a rule"] },
      { name: "count your toppings", play: "Add toppings and work out the price using coins or number cards.", skills: ["number sense — relates · applies ★"] },
      { name: "sauce challenge", play: "Make two bowls with matching sauce colours using the same ingredients and measuring tools.", skills: ["problem solving — tries · persists · solves ★"] },
    ],
    materials: "Large pretend pasta shapes (clay/foam), optional real dry pasta for supervised sensory play, clear cups, coloured water for sauces, bowls, spoons, toppings, pretend coins.",
    teacherPrep: "Make reusable pasta shapes — spirals, tubes, bows, shells — from clay or foam. Prepare coloured sauce bases, topping pieces, a pasta menu and price cards.",
    domains: { curiosity: "strong", "problem-solving": "support", logic: "strong", "number-sense": "strong" },
  },
  {
    slug: "cake",
    emoji: "🍰",
    name: "cake shop",
    tagline: "layer, balance, measure and budget a cake.",
    menu: [
      { label: "choose your flavours", options: "🍫 chocolate · 🍓 strawberry · 🍦 vanilla" },
      { label: "choose your layers", options: "1 · 2 · 3 · 4" },
      { label: "choose your toppings", options: "🍓 strawberry · 🍒 cherry · ⭐ sprinkles" },
    ],
    steps: ["choose flavours", "stack layers", "add toppings", "find the price"],
    tryThis: "a customer gives you six coins — decide how many layers and toppings. there's more than one right answer.",
    challenges: [
      { name: "layer your cake", play: "Choose flavours and build cakes with different numbers of layers. Compare height and order.", skills: ["number sense — connects · relates"] },
      { name: "cake stability", play: "Experiment with differently sized layers and find which arrangements make a stable tall cake.", skills: ["problem solving — recognises · tries · persists · solves ★"] },
      { name: "measure ingredients", play: "Follow recipes using scoops of dry material and cups of water. Compare wet and dry measurements.", skills: ["number sense — applies ★", "curiosity — investigates ★"] },
      { name: "cake patterns", play: "Create a colour or topping pattern across the cake layers.", skills: ["logic — patterns · predicts from a rule"] },
      { name: "cake pricing", play: "Add up layers and toppings. Make a cake within a given coin budget.", skills: ["number sense — applies ★", "problem solving — tries"] },
    ],
    materials: "Clay/foam cake layers, felt toppings, pretend cake stands, measuring cups, spoons, bowls, dry sensory ingredients, coloured water, pretend coins.",
    teacherPrep: "Make reusable cake layers in different colours and sizes, toppings, a flavour menu, layer-price cards and order cards. Prepare separate trays of dry and wet materials for measuring.",
    domains: { curiosity: "support", "problem-solving": "strong", logic: "strong", "number-sense": "strong" },
  },
  {
    slug: "pizza",
    emoji: "🍕",
    name: "pizza shop",
    tagline: "roll, shape, share and bake a pizza.",
    menu: [{ label: "choose your pizza", options: "round · square · triangle" }],
    steps: ["roll the dough", "choose toppings", "divide your pizza", "set the oven timer"],
    tryThis: "what makes pizza dough rise? compare a fresh ball and one that has already risen.",
    challenges: [
      { name: "make the dough", play: "Observe and compare dough before and after rising. Predict what will happen to a fresh sample.", skills: ["curiosity — notices · wonders · predicts · investigates ★"] },
      { name: "shape your pizza", play: "Roll dough into different shapes and cut geometric toppings. Count sides and corners.", skills: ["number sense — applies ★"] },
      { name: "add toppings", play: "Choose toppings, count the total and work out the price.", skills: ["number sense — connects · applies ★"] },
      { name: "share your pizza", play: "Divide the pizza into equal portions for two or four customers, and share the toppings fairly.", skills: ["number sense — relates · applies ★"] },
      { name: "bake your pizza", play: "Choose a pretend cooking time from picture cards showing undercooked, cooked and burnt pizza.", skills: ["number sense — connects", "logic — reasons ★"] },
    ],
    materials: "Clay or real pizza dough, foam/felt toppings, shape cutters, pizza plates, blunt cutters, a pretend oven, time cards, pretend coins.",
    teacherPrep: "Make reusable bases and toppings in different shapes. Prepare size templates, fraction/sharing cards, oven-timer cards, and a simple before-and-after risen-dough sample. Any real baking is done by an adult; children use a pretend oven.",
    domains: { curiosity: "strong", "problem-solving": "support", logic: "strong", "number-sense": "strong" },
  },
  {
    slug: "sushi",
    emoji: "🍣",
    name: "sushi shop",
    tagline: "layer, roll, cut and pattern a plate of sushi.",
    menu: [{ label: "choose your fillings", options: "🟢 cucumber · 🟠 carrot · 🟡 mango" }],
    steps: ["choose fillings", "arrange the layers", "roll the sushi", "cut into pieces", "arrange on a plate"],
    tryThis: "make a pattern with your sushi pieces.",
    challenges: [
      { name: "roll the sushi", play: "Experiment with different amounts of filling and discover how much fits inside a roll.", skills: ["problem solving — recognises · tries · solves ★"] },
      { name: "layers and shapes", play: "Arrange coloured layers, then roll and cut to discover the pattern inside.", skills: ["curiosity — notices · predicts · investigates ★"] },
      { name: "sushi patterns", play: "Arrange sushi pieces in AB, AAB, ABC, or colour-and-size patterns.", skills: ["logic — patterns · predicts from a rule"] },
      { name: "sushi portions", play: "Divide a roll into a chosen number of portions using marked guides.", skills: ["number sense — connects · relates"] },
      { name: "sushi platter", play: "Prepare a platter following sorting, quantity and pattern requirements.", skills: ["logic — sorts", "number sense — relates"] },
    ],
    materials: "Coloured clay/felt strips for rice, seaweed and fillings; rolling mats; blunt cutters; trays; pretend coins.",
    teacherPrep: "Make reusable coloured filling strips and sample cross-sections. Prepare visual cards showing how fillings look arranged before rolling and after rolling.",
    domains: { curiosity: "strong", "problem-solving": "strong", logic: "strong", "number-sense": "support" },
  },
  {
    slug: "coffee",
    emoji: "☕",
    name: "coffee shop",
    tagline: "mix, match and froth — proportions without the ratios.",
    menu: [{ label: "choose your coffee", options: "light · medium · dark" }],
    steps: ["add coffee", "add milk", "add sugar", "mix and make foam"],
    tryThis: "make your coffee lighter or darker — then make the same shade again.",
    challenges: [
      { name: "coffee strength", play: "Mix different amounts of milk and coffee, comparing lighter and darker colours.", skills: ["curiosity — predicts · investigates ★"] },
      { name: "coffee recipe", play: "Follow a visual recipe with set spoonfuls of coffee, milk and sugar substitutes.", skills: ["number sense — connects · relates"] },
      { name: "match the coffee", play: "Recreate a target coffee shade using measured amounts.", skills: ["problem solving — tries · persists · solves ★"] },
      { name: "froth your coffee", play: "Compare how spoons and whisks make foam. Try to make more or less.", skills: ["curiosity — predicts · investigates ★"] },
      { name: "price the coffee", play: "Give drinks a base price, then add a coin for each extra sugar, topping or foam.", skills: ["number sense — applies ★"] },
    ],
    materials: "Clear cups, spoons, scoops, water, brown coloured liquid, white liquid for milk, foam-cube sugar, whisks, foam-making materials.",
    teacherPrep: "Prepare coffee-coloured and milk-coloured child-safe liquids. Make foam-level cards, a colour-gradient card, foam sugar cubes and a strength menu.",
    domains: { curiosity: "strong", "problem-solving": "strong", logic: "support", "number-sense": "strong" },
  },
  {
    slug: "ice-cream",
    emoji: "🍦",
    name: "ice cream parlour",
    tagline: "scoop, stack, pattern and keep it standing.",
    menu: [
      { label: "choose your flavour", options: "🍓 strawberry · 🍫 chocolate · 🍦 vanilla" },
      { label: "choose your ice cream", options: "🍦 cone · 🍨 cup · 🍡 stick" },
    ],
    steps: ["choose", "scoop", "stack", "decorate"],
    tryThis: "make the tallest ice cream that still stays standing.",
    challenges: [
      { name: "flavour combinations", play: "Choose, sort and combine different flavours or colours.", skills: ["logic — sorts", "number sense — connects"] },
      { name: "scoop sizes", play: "Make small, medium and large scoops, then compare and arrange them.", skills: ["number sense — connects · relates"] },
      { name: "tallest ice cream", play: "Stack scoops and discover how to keep the tower balanced.", skills: ["problem solving — tries · persists · solves ★"] },
      { name: "popsicle patterns", play: "Make ice-cream sticks with repeated stripes or shapes in coloured felt/foam.", skills: ["logic — patterns · predicts from a rule"] },
      { name: "ice cream pricing", play: "Work out a price from scoops, flavours and toppings.", skills: ["number sense — applies ★"] },
      { name: "melting experiment", play: "Test how different materials slow the melting of real ice.", skills: ["curiosity — predicts · investigates ★"] },
    ],
    materials: "Paper/foam cones, ice-cream sticks, coloured foam, cotton balls/batting, clay, felt toppings, cups, scoops, optional real ice for experiments.",
    teacherPrep: "Make reusable cones, scoops and popsicles from foam, felt and cotton. Prepare flavour cards, scoop-size cards, topping cards and simple menus.",
    domains: { curiosity: "strong", "problem-solving": "strong", logic: "strong", "number-sense": "strong" },
  },
  {
    slug: "pickle",
    emoji: "🫙",
    name: "pickle bar",
    tagline: "pack, measure and fill a jar.",
    menu: [
      { label: "choose your vegetables", options: "🥕 carrot · 🥒 cucumber · 🟢 chilli" },
      { label: "choose your flavour", options: "mild · medium · spicy" },
    ],
    steps: ["choose vegetables", "add spices", "add liquid", "mix and pack"],
    tryThis: "can you fit more vegetables in the same jar?",
    challenges: [
      { name: "pickle combinations", play: "Make different pickles by changing the ingredients and amounts.", skills: ["number sense — relates", "logic — sorts"] },
      { name: "pack the jar", play: "Try different arrangements to fit more vegetables in the same container.", skills: ["problem solving — recognises · tries · solves ★"] },
      { name: "measure the liquid", play: "Add liquid with scoops and watch what happens to the level as vegetables go in.", skills: ["curiosity — notices · predicts · investigates ★"] },
      { name: "spices and liquids", play: "Experiment with salt, rice or other materials to see what dissolves or stays visible.", skills: ["curiosity — wonders · investigates ★"] },
      { name: "pickle pricing", play: "Count the vegetables and extras to work out the price of the jar.", skills: ["number sense — applies ★"] },
    ],
    materials: "Plastic jars, toy/foam vegetable pieces, coloured water, measuring cups, scoops, pretend spices, salt for supervised experiments, large spoons.",
    teacherPrep: "Make reusable vegetable pieces, spice containers and pickle labels. Prepare picture recipe cards of different vegetable / spice / liquid combinations. Keep the spices pretend and the pickling symbolic.",
    domains: { curiosity: "strong", "problem-solving": "strong", logic: "support", "number-sense": "support" },
  },
  {
    slug: "cookie",
    emoji: "🍪",
    name: "cookie shop",
    tagline: "cut shapes, make patterns and fill the tray.",
    menu: [
      { label: "choose your shape", options: "◯ circle · ▢ square · △ triangle · ☆ star" },
      { label: "choose your decorations", options: "🔴 red · 🟡 yellow · 🟢 green" },
    ],
    steps: ["roll", "cut", "decorate", "bake"],
    tryThis: "fit as many cookies as possible on your tray.",
    challenges: [
      { name: "cookie shapes", play: "Explore different cutters and compare their sides and corners.", skills: ["number sense — applies ★"] },
      { name: "cookie patterns", play: "Create designs using toppings in AB, AAB and ABC patterns.", skills: ["logic — patterns · predicts from a rule"] },
      { name: "fill the tray", play: "Arrange cookies to fit as many as possible without overlapping.", skills: ["problem solving — tries · persists · solves ★"] },
      { name: "cookie orders", play: "Make cookies in a set quantity and shape.", skills: ["number sense — connects · relates"] },
      { name: "cookie pricing", play: "Make different cookie boxes and work out the price with coins.", skills: ["number sense — applies ★"] },
    ],
    materials: "Playdough, rolling pins, shape cutters, felt/foam toppings, pretend baking sheets, coins, picture cards.",
    teacherPrep: "Make a reusable baking tray, decoration pieces, cookie shape cards and price labels.",
    domains: { curiosity: "support", "problem-solving": "strong", logic: "strong", "number-sense": "strong" },
  },
  {
    slug: "sweet",
    emoji: "🍬",
    name: "sweet shop",
    tagline: "sort, group and pack a box of sweets.",
    menu: [{ label: "choose your sweets", options: "🟡 laddoo · ◻️ barfi · 🟤 peda" }],
    steps: ["choose sweets", "count", "arrange", "pack"],
    tryThis: "make different boxes with the same number of sweets.",
    challenges: [
      { name: "sweet shapes", play: "Sort by colour, shape or size; explore different grouping rules.", skills: ["logic — sorts"] },
      { name: "make equal boxes", play: "Pack the same number of sweets into boxes arranged differently.", skills: ["number sense — relates"] },
      { name: "sweet combinations", play: "Make boxes within a fixed total, combining two or three varieties.", skills: ["number sense — applies ★"] },
      { name: "box patterns", play: "Arrange sweets in rows with a repeating pattern.", skills: ["logic — patterns · predicts from a rule"] },
      { name: "shop pricing", play: "Work out the price of boxes based on how many sweets they hold.", skills: ["number sense — applies ★"] },
    ],
    materials: "Clay, coloured felt/foam sweets, sweet boxes, compartment trays, coloured decorations, pretend coins.",
    teacherPrep: "Make reusable round laddoos, square barfi and other sweet shapes. Prepare sweet boxes, box-layout cards and menus.",
    domains: { curiosity: "support", "problem-solving": "support", logic: "strong", "number-sense": "strong" },
  },
];

export const CHEF_DOMAIN_LABELS: Record<ChefDomain, string> = {
  curiosity: "curiosity",
  "problem-solving": "problem solving",
  logic: "logic",
  "number-sense": "number sense",
};
