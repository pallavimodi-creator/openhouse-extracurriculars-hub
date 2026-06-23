"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Plus, BookHeart, Trash2 } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { getBuilding } from "@/lib/teacher-state";
import {
  listChildren,
  addChild,
  removeChild,
  summary,
  EXP_STRANDS,
  type ChildBook,
} from "@/lib/experience-book";

export default function ExperienceDashboardPage() {
  return (
    <TeacherGate>
      <Dashboard />
    </TeacherGate>
  );
}

function strandStrong(child: ChildBook, strandKey: string, skills: string[]) {
  const got = skills.filter((sk) => (child.levels[`${strandKey}:${sk}`] ?? 0) >= 3).length;
  return { got, total: skills.length };
}

function Dashboard() {
  const [children, setChildren] = useState<ChildBook[]>([]);
  const [name, setName] = useState("");
  const [centre, setCentre] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCentre(getBuilding());
    setChildren(listChildren());
    setReady(true);
  }, []);

  const refresh = () => setChildren(listChildren());

  const add = () => {
    if (!name.trim()) return;
    addChild(name);
    setName("");
    refresh();
  };

  if (!ready) return null;

  return (
    <div className="flex flex-col px-4 pt-4 pb-12 md:px-8">
      <Link
        href="/plan"
        className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
      >
        <ChevronLeft className="h-3.5 w-3.5" /> the 3–5 programme
      </Link>
      <h1 className="flex items-center gap-2 text-[22px] font-bold text-ink">
        <BookHeart className="h-5 w-5 text-brand-orange" /> experience books
      </h1>
      <p className="mt-1 text-[13px] text-ink-muted">
        one book per child{centre ? ` · ${centre.toLowerCase()}` : ""} — every child&apos;s rung per skill, at a glance. tap a child to open & fill their book.
      </p>

      <div className="mt-3 rounded-card bg-segment-yellow/30 px-3.5 py-2.5 text-[12px] leading-relaxed text-ink-muted ring-1 ring-segment-yellow/50">
        <span className="font-bold text-ink">work in progress</span> — the experience book &amp; progress model are being reworked around the new levels structure. explore it, but treat it as a preview, not the final design.
      </div>

      {/* add child */}
      <div className="mt-4 flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="add a child's name…"
          className="flex-1 rounded-lg border border-ink/10 bg-brand-white px-3 py-2.5 text-[14px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
        />
        <button
          onClick={add}
          disabled={!name.trim()}
          className="inline-flex items-center gap-1.5 rounded-card bg-brand-orange px-4 py-2 text-[13px] font-bold text-white shadow-card transition hover:opacity-95 disabled:opacity-40"
        >
          <Plus className="h-4 w-4" /> add
        </button>
      </div>

      {children.length === 0 ? (
        <p className="mt-8 text-center text-[13px] text-ink-subtle">no children yet — add the first one above.</p>
      ) : (
        <div className="mt-5 space-y-3">
          {children.map((child) => {
            const s = summary(child);
            return (
              <div key={child.id} className="rounded-card bg-brand-white p-4 shadow-card ring-1 ring-ink/5">
                <div className="flex items-center justify-between gap-2">
                  <Link href={`/plan/experience/${child.id}`} className="group flex items-center gap-2">
                    <p className="text-[15px] font-extrabold lowercase text-ink group-hover:text-brand-orange">{child.name}</p>
                    <ChevronRight className="h-4 w-4 text-ink-subtle transition group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="rounded-chip bg-category-language/15 px-2 py-0.5 text-[10px] font-bold text-ink">
                      {s.strong}/{s.total} going strong ★
                    </span>
                    <button
                      onClick={() => { if (confirm(`Remove ${child.name}'s book?`)) { removeChild(child.id); refresh(); } }}
                      aria-label="remove"
                      className="text-ink-subtle transition hover:text-red-500"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                {/* per-strand mini progress */}
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {EXP_STRANDS.map((st) => {
                    const ss = strandStrong(child, st.key, st.skills);
                    return (
                      <div key={st.key} className={`rounded-lg ${st.tint} px-2.5 py-1.5`}>
                        <p className="flex items-center gap-1.5 text-[11px] font-bold lowercase text-ink">
                          <span className={`h-2 w-2 rounded-full ${st.dot}`} /> {st.label}
                        </p>
                        <div className="mt-1.5 flex gap-1">
                          {st.skills.map((sk) => {
                            const v = child.levels[`${st.key}:${sk}`] ?? 0;
                            const tone = v >= 3 ? st.dot : v === 2 ? "bg-ink/40" : v === 1 ? "bg-ink/20" : "bg-ink/10";
                            return <span key={sk} title={`${sk}: ${["not started","starting out","getting there","going strong"][v]}`} className={`h-2 flex-1 rounded-full ${tone}`} />;
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p className="mt-6 text-[10px] leading-relaxed text-ink-subtle">
        saved on this device. for a centre-wide dashboard across teachers &amp; devices, connect Supabase (see planning/supabase-setup.md).
      </p>
    </div>
  );
}
