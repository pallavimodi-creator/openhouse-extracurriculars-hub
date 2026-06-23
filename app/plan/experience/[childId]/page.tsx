"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Check } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import {
  getChild,
  updateChild,
  EXP_STRANDS,
  RUNGS,
  type ChildBook,
} from "@/lib/experience-book";

export default function ChildBookPage({ params }: { params: { childId: string } }) {
  return (
    <TeacherGate>
      <Book childId={params.childId} />
    </TeacherGate>
  );
}

const BLOOM_FIELDS: { key: keyof ChildBook["bloom"]; label: string }[] = [
  { key: "moment", label: "a moment that made us smile" },
  { key: "superpower", label: "their superpower" },
  { key: "improved", label: "where they grew the most" },
  { key: "favourite", label: "their favourite thing to do" },
];

function Book({ childId }: { childId: string }) {
  const [child, setChild] = useState<ChildBook | null>(null);
  const [saved, setSaved] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const c = getChild(childId);
    if (!c) setNotFound(true);
    else setChild(c);
  }, [childId]);

  // persist + flash "saved"
  const persist = (next: ChildBook) => {
    setChild(next);
    updateChild(next);
    setSaved(true);
    window.clearTimeout((persist as unknown as { _t?: number })._t);
    (persist as unknown as { _t?: number })._t = window.setTimeout(() => setSaved(false), 1200);
  };

  if (notFound) {
    return (
      <div className="px-4 pt-6 text-center">
        <p className="text-[13px] text-ink-muted">this book isn&apos;t on this device.</p>
        <Link href="/plan/experience" className="mt-3 inline-block text-[12px] font-semibold text-brand-orange">← back to experience books</Link>
      </div>
    );
  }
  if (!child) return null;

  const setRung = (skillKey: string, v: number) =>
    persist({ ...child, levels: { ...child.levels, [skillKey]: v } });
  const setBloom = (k: keyof ChildBook["bloom"], val: string) =>
    persist({ ...child, bloom: { ...child.bloom, [k]: val } });

  return (
    <div className="flex flex-col px-4 pt-4 pb-14 md:px-8">
      <div className="flex items-center justify-between gap-3">
        <Link href="/plan/experience" className="inline-flex items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5">
          <ChevronLeft className="h-3.5 w-3.5" /> all books
        </Link>
        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold transition ${saved ? "text-category-language" : "text-ink-subtle/0"}`}>
          <Check className="h-3.5 w-3.5" /> saved
        </span>
      </div>

      <div className="mx-auto mt-3 w-full max-w-md">
        {/* cover band */}
        <div className="rounded-2xl bg-brand-orange p-5 text-white shadow-float">
          <p className="text-[11px] font-bold lowercase opacity-90">openhouse · my journey</p>
          <p className="mt-1 text-[26px] font-extrabold lowercase leading-tight">{child.name}</p>
          <div className="mt-2 flex gap-1.5">
            {EXP_STRANDS.map((s) => (
              <span key={s.key} className="rounded-chip bg-white/20 px-2 py-0.5 text-[10px] font-semibold lowercase">{s.label}</span>
            ))}
          </div>
        </div>

        {/* bloom log */}
        <section className="mt-5">
          <p className="mb-2 text-[13px] font-extrabold lowercase text-ink">educator&apos;s bloom log</p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {BLOOM_FIELDS.map((f) => (
              <label key={f.key} className="block rounded-2xl bg-brand-white p-3 shadow-card ring-1 ring-ink/5">
                <span className="text-[10px] font-bold tracking-wide text-brand-orange">{f.label}</span>
                <textarea
                  value={child.bloom[f.key]}
                  onChange={(e) => setBloom(f.key, e.target.value)}
                  rows={2}
                  placeholder="write a line…"
                  className="mt-1 block w-full resize-none rounded-lg bg-brand-cream/40 px-2 py-1.5 text-[12.5px] leading-snug text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                />
              </label>
            ))}
          </div>
        </section>

        {/* skill rungs */}
        <section className="mt-5">
          <p className="mb-2 text-[13px] font-extrabold lowercase text-ink">where they are — set the rung per skill</p>
          <div className="space-y-3">
            {EXP_STRANDS.map((st) => (
              <div key={st.key} className="overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/5">
                <p className={`flex items-center gap-2 ${st.tint} px-3 py-2 text-[13px] font-extrabold lowercase text-ink`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${st.dot}`} /> {st.label}
                </p>
                <div className="divide-y divide-ink/5">
                  {st.skills.map((sk) => {
                    const skillKey = `${st.key}:${sk}`;
                    const v = child.levels[skillKey] ?? 0;
                    return (
                      <div key={sk} className="flex flex-wrap items-center gap-2 px-3 py-2.5">
                        <span className="min-w-[96px] flex-1 text-[12.5px] font-semibold lowercase text-ink">{sk}</span>
                        <div className="flex gap-1">
                          {RUNGS.map((r) => (
                            <button
                              key={r.v}
                              onClick={() => setRung(skillKey, r.v)}
                              title={r.name}
                              className={
                                v === r.v
                                  ? `rounded-chip ${st.dot} px-2.5 py-1 text-[10px] font-bold text-white`
                                  : "rounded-chip bg-ink/5 px-2.5 py-1 text-[10px] font-semibold text-ink-muted transition hover:bg-ink/10"
                              }
                            >
                              {r.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* notes */}
        <section className="mt-5">
          <p className="mb-2 text-[13px] font-extrabold lowercase text-ink">notes</p>
          <textarea
            value={child.notes}
            onChange={(e) => persist({ ...child, notes: e.target.value })}
            rows={3}
            placeholder="anything to remember for next time, or to share with parents…"
            className="block w-full resize-none rounded-2xl bg-brand-white p-3 text-[12.5px] leading-relaxed text-ink shadow-card ring-1 ring-ink/5 placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
        </section>
      </div>
    </div>
  );
}
