"use client";

import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";
import { ImageFlipbook, type FlipbookPage } from "@/components/ImageFlipbook";

/**
 * Art Gym & Scribble — the two fine-motor warm-up books for 3–5, explained
 * and shown as a flippable book. They alternate on alternate days: art gym
 * one day, scribble the next.
 */

const PAGES: FlipbookPage[] = [
  {
    kind: "text",
    caption: {
      eyebrow: "fine-motor warm-up",
      title: "art gym",
      description:
        "A quick warm-up for fine-motor skills. Laminated, reusable pages the child marks with materials of choice — erasable markers, clay, yarn (anything that wipes off; no paint, nothing that stains). Children do 1–2 pages a day, in order, first page to last — the challenge grows page by page. Two levels: start every child on level 1, then move to level 2.",
    },
  },
  { kind: "image", src: "/gym-books/3-5-book.png", alt: "art gym book" },
  {
    kind: "text",
    caption: {
      eyebrow: "imagination",
      title: "scribble book",
      description:
        "A book of imagination — every page is a unique, open-ended story. Children scribble freely from their own imagination. Art gym and scribble alternate on alternate days: do one, then the other the next day.",
    },
  },
  { kind: "image", src: "/gym-books/3-5-scribble.png", alt: "scribble book" },
];

export default function ArtGymBookPage() {
  return (
    <TeacherGate>
      <div className="mx-auto w-full max-w-3xl px-4 pb-14 pt-3 md:px-6">
        <Link href="/library" className="text-[12px] font-bold text-brand-orange hover:underline">
          ← library
        </Link>

        <section className="mt-3 overflow-hidden rounded-3xl bg-category-art/80 px-6 py-7 text-ink shadow-card md:px-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/70">
            art &amp; design · ages 3–5
          </p>
          <h1 className="mt-1.5 text-[28px] font-extrabold lowercase leading-[1.05] md:text-[34px]">
            art gym &amp; scribble
          </h1>
          <p className="mt-2 max-w-[54ch] text-[13.5px] font-medium leading-relaxed text-ink/90">
            the two fine-motor warm-up books. they alternate on alternate days — art gym one day, scribble the next.
          </p>
        </section>

        <div className="mt-5">
          <ImageFlipbook pages={PAGES} altPrefix="art gym & scribble" />
        </div>

        {/* The explanation, also in plain text so it reads without flipping. */}
        <section className="mt-6 space-y-3">
          <div className="rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05]">
            <p className="text-[13px] font-extrabold lowercase text-ink">art gym — what it is</p>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
              A quick warm-up for fine-motor skills. Laminated, reusable pages the child marks with materials of
              choice — erasable markers, clay, yarn (anything that wipes off; no paint, nothing that stains).
              Children do 1–2 pages a day, <b className="text-ink">in order</b>, first page to last — the challenge
              grows page by page. Two levels: start every child on level 1, then move to level 2.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05]">
            <p className="text-[13px] font-extrabold lowercase text-ink">scribble book — what it is</p>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
              A book of imagination — every page is a unique, open-ended story. Children scribble freely from their
              own imagination. Art gym and scribble <b className="text-ink">alternate on alternate days</b>.
            </p>
          </div>
        </section>
      </div>
    </TeacherGate>
  );
}
