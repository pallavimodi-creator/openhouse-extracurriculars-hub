"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCw, BookOpen } from "lucide-react";
import { vocabByLevel, VOCAB_TASKS, type VocabLevel } from "@/content/vocab-cards";
import { VOCAB_IMAGES } from "@/lib/vocab-images";

const TYPE_TONE: Record<string, string> = {
  noun: "bg-segment-blue/30 text-ink",
  verb: "bg-segment-green/30 text-ink",
  adjective: "bg-segment-pink/30 text-ink",
  adverb: "bg-segment-yellow/40 text-ink",
};

export function VocabFlashcards({ level }: { level: VocabLevel }) {
  const cards = vocabByLevel(level);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) {
    return <p className="text-[13px] text-ink-subtle">no cards in this deck yet.</p>;
  }
  const card = cards[i];
  const go = (d: number) => {
    setFlipped(false);
    setI((p) => (p + d + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-3 text-[11px] font-semibold text-ink-subtle">
        card {i + 1} of {cards.length} · <span className="lowercase text-brand-orange">{level} deck</span>
      </p>

      {/* The flip card */}
      <div className="w-full max-w-[320px] [perspective:1400px]">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-label="flip card"
          className="relative h-[420px] w-full cursor-pointer rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* FRONT — picture + the word */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl bg-brand-white shadow-float ring-1 ring-ink/10 [backface-visibility:hidden]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={VOCAB_IMAGES[card.word.toLowerCase()] ?? card.image ?? card.bookCover}
              alt=""
              className="h-[300px] w-full bg-brand-cream object-contain p-4"
            />
            <div className="flex flex-1 items-center justify-center border-t border-ink/5 bg-brand-cream/40">
              <p className="text-[30px] font-extrabold lowercase text-ink">{card.word}</p>
            </div>
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-chip bg-ink/5 px-2 py-0.5 text-[9px] font-bold text-ink-subtle">
              <RotateCw className="h-2.5 w-2.5" /> tap to flip
            </span>
          </div>

          {/* BACK — book icon, word, meaning, type, pairs */}
          <div className="absolute inset-0 flex flex-col gap-2.5 overflow-hidden rounded-3xl bg-brand-white p-5 shadow-float ring-1 ring-ink/10 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.bookCover} alt="" className="h-12 w-9 shrink-0 rounded ring-1 ring-ink/10" />
              <div className="min-w-0">
                <p className="text-[20px] font-extrabold lowercase leading-none text-ink">{card.word}</p>
                <p className="mt-0.5 truncate text-[10px] italic text-ink-subtle">{card.book}</p>
              </div>
              <span className={`ml-auto shrink-0 rounded-chip px-2 py-0.5 text-[10px] font-bold lowercase ${TYPE_TONE[card.wordType] ?? "bg-ink/5 text-ink"}`}>
                {card.wordType}
              </span>
            </div>

            <div className="rounded-xl bg-brand-cream/50 p-2.5">
              <p className="text-[13px] leading-snug text-ink">{card.meaning}</p>
              <p className="mt-1 text-[11px] italic leading-snug text-ink-muted">“{card.sentence}”</p>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wide text-ink-subtle">pairs with</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {card.pairs.map((p) => (
                  <span key={p} className="rounded-chip bg-ink/5 px-2 py-0.5 text-[10px] text-ink-muted">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Nav */}
      <div className="mt-4 flex items-center gap-3">
        <button onClick={() => go(-1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-white text-ink-muted shadow-card ring-1 ring-ink/10 transition hover:bg-ink/5">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={() => setFlipped((f) => !f)} className="inline-flex items-center gap-1.5 rounded-card bg-brand-orange px-4 py-2 text-[12px] font-bold text-white shadow-card transition hover:opacity-95">
          <RotateCw className="h-3.5 w-3.5" /> flip
        </button>
        <button onClick={() => go(1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-white text-ink-muted shadow-card ring-1 ring-ink/10 transition hover:bg-ink/5">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* The 4-task game */}
      <div className="mt-7 w-full max-w-md rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/5">
        <p className="flex items-center gap-1.5 text-[11px] font-bold text-brand-orange">
          <BookOpen className="h-3.5 w-3.5" /> play the word — pick a task, run it as a class
        </p>
        <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
          {VOCAB_TASKS.map((t, n) => (
            <div key={t.key} className="rounded-xl bg-brand-cream/50 p-2.5">
              <p className="text-[12px] font-extrabold lowercase text-ink">{n + 1} · {t.label}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink-muted">{t.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
