"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Smile,
  Drama,
  MessageSquareText,
  MessagesSquare,
  Sparkles,
  Mountain,
  Music,
  Cat,
  Trees,
  Heart,
  Tag,
  Zap,
  Palette,
  type LucideIcon,
} from "lucide-react";
import {
  vocabByLevel,
  vocabByBook,
  VOCAB_BOOKS,
  WORD_TYPE_LABEL,
  type VocabLevel,
  type WordType,
} from "@/content/vocab-cards";
import { VOCAB_IMAGES } from "@/lib/vocab-images";

// word-type → colour + kid-friendly icon
const TYPE_TONE: Record<WordType, string> = {
  noun: "bg-segment-blue/50 text-ink",
  verb: "bg-segment-green/50 text-ink",
  adjective: "bg-segment-pink/50 text-ink",
  adverb: "bg-segment-yellow/60 text-ink",
};
const TYPE_ICON: Record<WordType, LucideIcon> = {
  noun: Tag,
  verb: Zap,
  adjective: Palette,
  adverb: Palette,
};

// each story gets one icon (used instead of a shrunk cover)
const BOOK_META: Record<string, { icon: LucideIcon; short: string }> = {
  "We're Going on a Bear Hunt": { icon: Mountain, short: "bear hunt" },
  "Giraffes Can't Dance": { icon: Music, short: "giraffes" },
  "The Lion Inside": { icon: Cat, short: "lion inside" },
  "The Gruffalo": { icon: Trees, short: "gruffalo" },
  "The Colour Monster": { icon: Heart, short: "colour monster" },
};

const TASKS = [
  { icon: Smile, label: "emote", prompt: "show the word on your face — what feeling does it have?" },
  { icon: Drama, label: "enact", prompt: "act it out with your body — don't say the word." },
  { icon: MessageSquareText, label: "use it", prompt: "make your own sentence with the word." },
  { icon: MessagesSquare, label: "talk it", prompt: "ask & answer — what? why? where? how?" },
] as const;

export function VocabFlashcards({ level }: { level: VocabLevel }) {
  const [mode, setMode] = useState<"difficulty" | "story">("difficulty");
  const [diff, setDiff] = useState<VocabLevel>(level);
  const [book, setBook] = useState<string>(VOCAB_BOOKS[0].name);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = mode === "difficulty" ? vocabByLevel(diff) : vocabByBook(book);
  const reset = () => { setI(0); setFlipped(false); };

  if (cards.length === 0) {
    return <p className="text-[13px] text-ink-subtle">no cards in this deck yet.</p>;
  }
  const card = cards[Math.min(i, cards.length - 1)];
  const img = VOCAB_IMAGES[card.word.toLowerCase()] ?? card.image ?? null;
  const lvl = card.level;
  const accent = lvl === "easy" ? "bg-segment-yellow" : "bg-brand-orange";
  const taskTone = lvl === "easy" ? "bg-segment-yellow/40" : "bg-brand-orange/15";
  const StoryIcon = BOOK_META[card.book]?.icon ?? Sparkles;
  const TypeIcon = TYPE_ICON[card.wordType];

  const go = (d: number) => {
    setFlipped(false);
    setI((p) => (p + d + cards.length) % cards.length);
  };

  const pill = (on: boolean) =>
    `rounded-chip px-3 py-1 text-[11px] font-bold lowercase transition ${on ? "bg-brand-white text-ink shadow-sm" : "text-ink-muted hover:text-ink"}`;
  const sub = (on: boolean) =>
    `inline-flex items-center gap-1 rounded-chip px-2.5 py-1 text-[11px] font-bold lowercase transition ${on ? "bg-brand-orange text-white" : "bg-brand-white text-ink-muted ring-1 ring-ink/10 hover:bg-ink/5"}`;

  return (
    <div className="flex flex-col items-center">
      {/* ── sort tabs: by difficulty / by story ── */}
      <div className="mb-3 flex flex-col items-center gap-2">
        <div className="inline-flex rounded-chip bg-ink/5 p-0.5">
          <button onClick={() => { setMode("difficulty"); reset(); }} className={pill(mode === "difficulty")}>by difficulty</button>
          <button onClick={() => { setMode("story"); reset(); }} className={pill(mode === "story")}>by story</button>
        </div>
        {mode === "difficulty" ? (
          <div className="flex gap-1.5">
            {(["easy", "hard"] as VocabLevel[]).map((l) => (
              <button key={l} onClick={() => { setDiff(l); reset(); }} className={sub(diff === l)}>{l}</button>
            ))}
          </div>
        ) : (
          <div className="flex max-w-[340px] flex-wrap justify-center gap-1.5">
            {VOCAB_BOOKS.map((b) => {
              const Ic = BOOK_META[b.name]?.icon ?? Sparkles;
              return (
                <button key={b.name} onClick={() => { setBook(b.name); reset(); }} className={sub(book === b.name)}>
                  <Ic className="h-3 w-3" /> {BOOK_META[b.name]?.short ?? b.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* progress dots */}
      <div className="mb-3 flex max-w-[420px] flex-wrap items-center justify-center gap-1.5">
        {cards.map((_, n) => (
          <button
            key={n}
            aria-label={`card ${n + 1}`}
            onClick={() => { setFlipped(false); setI(n); }}
            className={n === i ? `h-2 w-5 rounded-full ${accent}` : "h-2 w-2 rounded-full bg-ink/15 transition hover:bg-ink/30"}
          />
        ))}
      </div>

      {/* ── the landscape flip card ── */}
      <div className="w-full max-w-[460px] [perspective:1600px]">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-label="flip card"
          className="relative h-[300px] w-full cursor-pointer rounded-[24px] transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* FRONT — picture fills, word below */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px] bg-brand-white shadow-float ring-1 ring-ink/10 [backface-visibility:hidden]">
            <span className={`absolute left-3.5 top-3.5 z-10 rounded-chip px-2.5 py-1 text-[10px] font-extrabold lowercase shadow-sm ${lvl === "easy" ? "bg-segment-yellow text-ink" : "bg-brand-orange text-white"}`}>
              {lvl}
            </span>
            <span className="absolute right-3.5 top-3.5 z-10 inline-flex items-center gap-1 rounded-chip bg-white/70 px-2 py-0.5 text-[9px] font-bold text-ink-subtle backdrop-blur">
              <RotateCw className="h-2.5 w-2.5" /> flip
            </span>

            {img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={img} alt="" className="h-[200px] w-full object-cover" />
            ) : (
              <div className="flex h-[200px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-cream to-segment-yellow/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-brand-orange shadow-sm">
                  <Sparkles className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="text-[10px] font-semibold tracking-wide text-ink-subtle">picture coming soon</span>
              </div>
            )}

            <div className="flex h-[100px] items-center justify-center border-t border-ink/5 bg-brand-white px-4">
              <p className="text-center text-[34px] font-extrabold lowercase leading-none text-ink">{card.word}</p>
            </div>
          </div>

          {/* BACK — story icon + word + type · big meaning · word pairs */}
          <div className="absolute inset-0 flex flex-col gap-3 overflow-hidden rounded-[24px] bg-brand-white p-4 shadow-float ring-1 ring-ink/10 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex items-center gap-2.5">
              <span title={card.book} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-segment-pink/30 text-ink">
                <StoryIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="min-w-0 flex-1 truncate text-[26px] font-extrabold lowercase leading-none text-ink">{card.word}</p>
              <span className={`inline-flex shrink-0 items-center gap-1 rounded-chip px-2.5 py-1.5 text-[12px] font-bold lowercase ${TYPE_TONE[card.wordType]}`}>
                <TypeIcon className="h-3.5 w-3.5" strokeWidth={2.4} /> {WORD_TYPE_LABEL[card.wordType]}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-3">
              <div className="rounded-2xl bg-brand-cream/60 p-4">
                <p className="text-[18px] font-semibold leading-snug text-ink">{card.meaning}</p>
                <p className="mt-2 text-[14px] italic leading-snug text-ink-muted">“{card.sentence}”</p>
              </div>

              <div>
                <p className="text-[11px] font-bold tracking-wide text-ink-subtle">word pairs</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {card.pairs.map((p) => (
                    <span key={p} className="rounded-chip bg-ink/[0.06] px-3 py-1.5 text-[13px] font-medium text-ink-muted">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* nav */}
      <div className="mt-5 flex items-center gap-4">
        <button onClick={() => go(-1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-white text-ink-muted shadow-card ring-1 ring-ink/10 transition hover:bg-ink/5 active:scale-95">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="min-w-[64px] text-center text-[12px] font-bold text-ink-muted">{i + 1} / {cards.length}</span>
        <button onClick={() => go(1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-white text-ink-muted shadow-card ring-1 ring-ink/10 transition hover:bg-ink/5 active:scale-95">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* the 4-task word game */}
      <div className="mt-8 w-full max-w-md">
        <p className="mb-2.5 text-center text-[12px] font-extrabold lowercase text-ink">play the word — pick a task, run it as a class</p>
        <div className="grid grid-cols-2 gap-2.5">
          {TASKS.map((t, n) => (
            <div key={t.label} className="flex gap-2.5 rounded-2xl bg-brand-white p-3 shadow-card ring-1 ring-ink/5">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${taskTone} text-ink`}>
                <t.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-extrabold lowercase text-ink">{n + 1} · {t.label}</p>
                <p className="mt-0.5 text-[10.5px] leading-snug text-ink-muted">{t.prompt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
