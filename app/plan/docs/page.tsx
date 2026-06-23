"use client";

import Link from "next/link";
import { ChevronRight, ChevronLeft, ClipboardList } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { PLAN_DOCS, PLAN_GROUPS } from "@/lib/plans";

export default function PlanDocsPage() {
  return (
    <TeacherGate>
      <Index />
    </TeacherGate>
  );
}

function Index() {
  return (
    <div className="flex flex-col px-4 pt-4 pb-10 md:px-8">
      <Link
        href="/plan"
        className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
      >
        <ChevronLeft className="h-3.5 w-3.5" /> planner
      </Link>
      <h1 className="text-[22px] font-bold text-ink">3–5 programme — the plan</h1>
      <p className="mt-1 text-[13px] text-ink-muted">
        the full design for the 2-hour at-centre programme — review it here and tell me what to correct. (3–5 only; the 5+ programmes are reference, not planned here.)
      </p>

      <div className="mt-6 space-y-7">
        {PLAN_GROUPS.map((group) => {
          const docs = PLAN_DOCS.filter((d) => d.group === group);
          if (docs.length === 0) return null;
          return (
            <section key={group}>
              <h2 className="mb-2 text-[13px] font-extrabold lowercase text-ink">{group}</h2>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {docs.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/plan/docs/${d.slug}`}
                    className="group flex items-start gap-3 rounded-card bg-brand-white p-3.5 shadow-card ring-1 ring-ink/5 transition hover:shadow-float hover:ring-ink/10"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                      <ClipboardList className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[13px] font-bold leading-tight text-ink">{d.title}</span>
                      {d.blurb && (
                        <span className="mt-0.5 block text-[11px] leading-relaxed text-ink-muted">{d.blurb}</span>
                      )}
                    </span>
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-subtle transition group-hover:text-brand-orange" />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
