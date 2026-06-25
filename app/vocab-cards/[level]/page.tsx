import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { VocabFlashcards } from "@/components/VocabFlashcards";
import type { VocabLevel } from "@/content/vocab-cards";

export function generateStaticParams() {
  return [{ level: "easy" }, { level: "hard" }];
}
export const dynamicParams = false;

export default function VocabDeckPage({ params }: { params: { level: string } }) {
  if (params.level !== "easy" && params.level !== "hard") notFound();
  const level = params.level as VocabLevel;
  return (
    <TeacherGate>
      <div className="flex flex-col px-4 pt-4 pb-12 md:px-8">
        <Link
          href="/library"
          className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> library
        </Link>
        <h1 className="text-[22px] font-bold text-ink">vocabulary cards</h1>
        <p className="mt-1 mb-6 text-[13px] text-ink-muted">
          sort by difficulty or by story, then flip a card and play it with the class. front: the word &amp; its picture. back: meaning, word type, and word pairs.
        </p>
        <VocabFlashcards level={level} />
      </div>
    </TeacherGate>
  );
}
