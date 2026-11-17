"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { PdfFlipbookModal } from "@/components/PdfFlipbookModal";

/**
 * The NumbersGym books — the three ACTUAL numeracy workbooks (level 1 → 2 →
 * 3), opened as page-by-page flip-books from the real PDFs. Every child works
 * in their own gamebook at their own level; they move up when they show the
 * current level confidently across two independent sessions.
 */

const BOOKS = [
  { level: 1, pages: 57, url: "/numbersgym-books/level-1.pdf", tint: "bg-category-stem/15", ring: "ring-category-stem/40" },
  { level: 2, pages: 33, url: "/numbersgym-books/level-2.pdf", tint: "bg-category-art/20", ring: "ring-category-art/40" },
  { level: 3, pages: 27, url: "/numbersgym-books/level-3.pdf", tint: "bg-category-language/20", ring: "ring-category-language/40" },
];

export default function NumbersGymBookPage() {
  const [pdf, setPdf] = useState<{ url: string; title: string } | null>(null);

  return (
    <TeacherGate>
      <div className="mx-auto w-full max-w-3xl px-4 pb-14 pt-3 md:px-6">
        <Link href="/library" className="text-[12px] font-bold text-brand-orange hover:underline">
          ← library
        </Link>

        <section className="mt-3 overflow-hidden rounded-3xl bg-category-stem/80 px-6 py-7 text-white shadow-card md:px-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/80">
            stem · ages 3–5
          </p>
          <h1 className="mt-1.5 text-[28px] font-extrabold lowercase leading-[1.05] md:text-[34px]">
            numbers gym books
          </h1>
          <p className="mt-2 max-w-[54ch] text-[13.5px] font-medium leading-relaxed text-white/90">
            three level workbooks — every child works in their own gamebook at their own level, 1–2 pages a day.
            a child moves up when they show the current level confidently across two independent sessions.
          </p>
        </section>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {BOOKS.map((b) => (
            <button
              key={b.level}
              type="button"
              onClick={() => setPdf({ url: b.url, title: `numbers gym — level ${b.level}` })}
              className={`group flex flex-col items-start rounded-2xl ${b.tint} p-5 text-left shadow-card ring-1 ${b.ring} transition hover:-translate-y-0.5 hover:shadow-lg`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-white text-brand-orange shadow-card ring-1 ring-ink/5">
                <BookOpen className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <p className="mt-3 text-[16px] font-extrabold lowercase text-ink">level {b.level}</p>
              <p className="mt-0.5 text-[12px] font-semibold text-ink-muted">{b.pages} pages</p>
              <span className="mt-2 text-[12px] font-bold text-brand-orange">open the book →</span>
            </button>
          ))}
        </div>

        <p className="mt-5 rounded-2xl bg-brand-cream/70 px-4 py-3 text-[12.5px] leading-relaxed text-ink-muted ring-1 ring-ink/[0.05]">
          every page uses physical materials — coloured tiles, threading beads, balance scales, number tracks,
          counters, sorting trays. the gamebook is a surface for thinking with objects, not a worksheet.
        </p>
      </div>

      <PdfFlipbookModal pdf={pdf} onClose={() => setPdf(null)} />
    </TeacherGate>
  );
}
