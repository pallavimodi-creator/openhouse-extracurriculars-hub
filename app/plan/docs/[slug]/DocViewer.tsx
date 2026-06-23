"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { MarkdownView } from "@/components/MarkdownView";

export function DocViewer({ content }: { content: string }) {
  return (
    <TeacherGate>
      <div className="flex flex-col px-4 pt-4 pb-16 md:px-8">
        <Link
          href="/plan/docs"
          className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> all 3–5 plans
        </Link>
        <div className="rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/5 md:p-8">
          <MarkdownView content={content} />
        </div>
      </div>
    </TeacherGate>
  );
}
