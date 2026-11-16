"use client";

import { useState } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import type { LanguageBook } from "@/content/types";
import { LanguageBookPlanModal } from "@/components/LanguageBookPlanModal";
import { getBookPlan } from "@/content/programmes/language-book-plans";
import { VocabularyCardsModal } from "@/components/VocabularyCardsModal";
import {
  getVocabBookByOrder,
  type VocabBook,
} from "@/content/programmes/vocab-cards";

const ACTIVITY_LABEL: Record<LanguageBook["groupActivityType"], string> = {
  "story-re-enactment": "story re-enactment",
  "change-story-endings": "change story endings",
  "vocabulary-reproduction": "vocabulary reproduction",
  "puppet-character": "puppet character",
};
const VOCAB_TYPE_LABEL: Record<LanguageBook["vocabularyType"], string> = {
  "emotion-tiles": "vocabulary cards",
  "story-calendar": "vocabulary cards",
};

/**
 * The 8 books, read straight through — one book after another, every book's
 * information shown in full and in order. No tapping to expand, no jumping
 * around: a reader goes top to bottom and gets everything once.
 */
export function LanguageBooksGrid({ books }: { books: LanguageBook[] }) {
  const [planBook, setPlanBook] = useState<LanguageBook | null>(null);
  const [vocabBook, setVocabBook] = useState<VocabBook | null>(null);
  const planBookPlan = planBook ? getBookPlan(planBook.order) ?? null : null;
  return (
    <>
      <div className="space-y-4">
        {books.map((book) => {
          const hasVocabDeck = !!getVocabBookByOrder(book.order);
          return (
            <article
              key={book.order}
              className="overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/5"
            >
              {/* header: order · cover · title · author · age */}
              <div className="flex items-center gap-3 bg-segment-blue/10 px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[12px] font-extrabold text-white">
                  {book.order}
                </span>
                <div className="flex h-[56px] w-[42px] shrink-0 items-center justify-center rounded bg-brand-white p-1 ring-1 ring-ink/5">
                  {book.heroImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={book.heroImageUrl}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-extrabold lowercase leading-tight text-ink">
                    {book.title.toLowerCase()}
                  </p>
                  <p className="mt-0.5 text-[11.5px] font-medium text-ink-muted">
                    {book.author} · {book.ageRange}
                  </p>
                </div>
              </div>

              <div className="space-y-3 px-4 py-4">
                <p className="text-[12.5px] leading-relaxed text-ink-muted md:text-[13px]">
                  {book.summary}
                </p>

                <div>
                  <p className="text-[10px] font-semibold tracking-normal text-brand-orange">
                    why it&rsquo;s in this position
                  </p>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-ink-muted">
                    {book.whyThisPosition}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-normal text-brand-orange">
                    target vocabulary
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {book.vocabulary.map((word) => (
                      <span
                        key={word}
                        className="rounded-chip bg-brand-cream px-2 py-0.5 text-[11px] font-semibold text-ink ring-1 ring-ink/10"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                {book.themes.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {book.themes.map((t) => (
                      <span
                        key={t}
                        className="rounded-chip bg-ink/5 px-2 py-0.5 text-[10px] font-medium text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid gap-2 md:grid-cols-2">
                  {hasVocabDeck ? (
                    <button
                      type="button"
                      onClick={() => {
                        const v = getVocabBookByOrder(book.order);
                        if (v) setVocabBook(v);
                      }}
                      className="group flex items-start gap-2 rounded-lg bg-segment-yellow/40 p-3 text-left ring-1 ring-segment-yellow/60 transition hover:bg-segment-yellow/55 active:scale-[0.99]"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                        <Sparkles className="h-3 w-3" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold tracking-normal text-ink-subtle">
                          wordsmiths resource
                        </p>
                        <p className="mt-0.5 truncate text-[11.5px] font-bold text-ink">
                          {VOCAB_TYPE_LABEL[book.vocabularyType]} →
                        </p>
                      </div>
                    </button>
                  ) : (
                    <div className="rounded-lg bg-brand-cream/60 p-3 ring-1 ring-ink/5">
                      <p className="text-[10px] font-semibold tracking-normal text-ink-subtle">
                        wordsmiths resource
                      </p>
                      <p className="mt-1 text-[11.5px] font-bold text-ink">
                        {VOCAB_TYPE_LABEL[book.vocabularyType]}
                      </p>
                      <p className="mt-1 text-[9.5px] italic text-ink/40">coming soon</p>
                    </div>
                  )}
                  <div className="rounded-lg bg-brand-cream/60 p-3 ring-1 ring-ink/5">
                    <p className="text-[10px] font-semibold tracking-normal text-ink-subtle">
                      group activity
                    </p>
                    <p className="mt-1 text-[11.5px] font-bold text-ink">
                      {ACTIVITY_LABEL[book.groupActivityType]}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPlanBook(book)}
                  className="flex w-full items-center justify-center gap-2 rounded-card bg-brand-orange py-2.5 text-[12px] font-bold text-white shadow-card transition hover:opacity-95 active:scale-[0.99]"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  view the full lesson plan for this book
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <LanguageBookPlanModal
        isOpen={planBook !== null}
        onClose={() => setPlanBook(null)}
        book={planBook}
        plan={planBookPlan}
      />
      <VocabularyCardsModal
        isOpen={vocabBook !== null}
        onClose={() => setVocabBook(null)}
        book={vocabBook}
      />
    </>
  );
}
