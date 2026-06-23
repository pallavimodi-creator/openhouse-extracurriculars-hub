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
} from "lucide-react";
import { vocabByLevel, type VocabLevel } from "@/content/vocab-cards";
import { VOCAB_IMAGES } from "@/lib/vocab-images";

const TYPE_TONE: Record<string, string> = {
  noun: "bg-segment-blue/40 text-ink",
  verb: "bg-segment-green/40 text-ink",
  adjective: "bg-segment-pink/40 text-ink",
  adverb: "bg-segment-yellow/50 text-ink",
};

// The four word-game tasks, each with an icon for the game feel.
const TASKS = [
  { icon: Smile, label: "emote", prompt: "show the word on your face — what feeling does it have?" },
  { icon: Drama, label: "enact", prompt: "act it out with your body — don't say the word." },
  { icon: MessageSquareText, label: "use it", prompt: "make your own sentence with the word." },
  { icon: MessagesSquare, label: "talk it", prompt: "ask & answer — what? why? where? how?" },
] as const;

export function VocabFlashcards({ level }: { level: VocabLevel }) {
  const cards = vocabByLevel(level);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) {
    return <p className="text-[13px] text-ink-subtle">no cards in this deck yet.</p>;
  }
  const card = cards[i];
  const img = VOCAB_IMAGES[card.word.toLowerCase()] ?? card.image ?? null;
  const go = (d: number) => {
    setFlipped(false);
    setI((p) => (p + d + cards.length) % cards.length);
  };

  const accent = level === "easy" ? "bg-segment-yellow" : "bg-brand-orange";
  const taskTone = level === "easy" ? "bg-segment-yellow/40" : "bg-brand-orange/15";

  return (
    <div className="flex flex-col items-center">
      {/* progress dots */}
      <div className="mb-4 flex max-w-[320px] flex-wrap items-center justify-center gap-1.5">
        {cards.map((_, n) => (
          <button
            key={n}
            aria-label={`card ${n + 1}`}
            onClick={() => { setFlipped(false); setI(n); }}
            className={
              n === i
                ? `h-2 w-5 rounded-full ${accent}`
                : "h-2 w-2 rounded-full bg-ink/15 transition hover:bg-ink/30"
            }
          />
        ))}
      </div>

      {/* the flip card */}
      <div className="w-full max-w-[320px] [perspective:1600px]">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-label="flip card"
          className="relative h-[440px] w-full cursor-pointer rounded-[28px] transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* ── FRONT ── picture (or uniform typographic fallback) + word */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-brand-white shadow-float ring-1 ring-ink/10 [backface-visibility:hidden]">
            {/* level badge */}
            <span className={`absolute left-4 top-4 z-10 rounded-chip px-2.5 py-1 text-[10px] font-extrabold lowercase text-ink shadow-sm ${level === "easy" ? "bg-segment-yellow" : "bg-brand-orange text-white"}`}>
              {level}
            </span>
            <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-chip bg-white/70 px-2 py-0.5 text-[9px] font-bold text-ink-subtle backdrop-blur">
              <RotateCw className="h-2.5 w-2.5" /> flip
            </span>

            {img ? (
              <div className="h-[340px] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="" className="h-full w-full object-cover" />
              </div>
            ) : (
              // Uniform fallback — no random placeholder. A clean gradient
              // tile with one consistent icon.
              <div className="flex h-[340px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-cream to-segment-yellow/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-brand-orange shadow-sm">
                  <Sparkles className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <span className="text-[10px] font-semibold tracking-wide text-ink-subtle">picture coming soon</span>
              </div>
            )}

            {/* word title bar */}
            <div className="flex h-[100px] items-center justify-center border-t border-ink/5 bg-brand-white px-4">
              <p className="text-center text-[30px] font-extrabold lowercase leading-none text-ink">{card.word}</p>
            </div>
          </div>

          {/* ── BACK ── meaning, type, in-story, pairs */}
          <div className="absolute inset-0 flex flex-col gap-3 overflow-hidden rounded-[28px] bg-brand-white p-5 shadow-float ring-1 ring-ink/10 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.bookCover} alt="" className="h-14 w-10 shrink-0 rounded-lg object-cover ring-1 ring-ink/10" />
              <div className="min-w-0 flex-1">
                <p className="text-[22px] font-extrabold lowercase leading-none text-ink">{card.word}</p>
                <p className="mt-1 truncate text-[10px] italic text-ink-subtle">from {card.book}</p>
              </div>
              <span className={`shrink-0 rounded-chip px-2.5 py-1 text-[10px] font-bold lowercase ${TYPE_TONE[card.wordType] ?? "bg-ink/5 text-ink"}`}>
                {card.wordType}
              </span>
            </div>

            <div className="rounded-2xl bg-brand-cream/60 p-3">
              <p className="text-[14px] font-semibold leading-snug text-ink">{card.meaning}</p>
              <p className="mt-1.5 text-[11.5px] italic leading-snug text-ink-muted">“{card.sentence}”</p>
            </div>

            <div className="mt-auto">
              <p className="text-[9px] font-bold tracking-wider text-ink-subtle">pairs with</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {card.pairs.map((p) => (
                  <span key={p} className="rounded-chip bg-ink/[0.06] px-2.5 py-1 text-[11px] text-ink-muted">{p}</span>
                ))}
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
