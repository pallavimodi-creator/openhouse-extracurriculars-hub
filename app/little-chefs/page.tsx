"use client";

import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";
import {
  LITTLE_CHEFS,
  CHEF_DOMAIN_LABELS,
  type ChefDomain,
} from "@/content/little-chefs";

/**
 * Little Chefs — the recipe book. One integrated, phone-first read: each
 * shop shows its menu, how to make the food, a little experiment, and its
 * cooking challenges (with the skill each builds), then the educator prep.
 * The four skills are shown to the educator only — never to the child.
 */

const DOMAIN_ORDER: ChefDomain[] = ["curiosity", "problem-solving", "logic", "number-sense"];

function skillChipClass(skill: string): string {
  if (skill.startsWith("curiosity")) return "bg-category-stem/15 text-ink ring-category-stem/40";
  if (skill.startsWith("problem")) return "bg-brand-orange/12 text-brand-orange ring-brand-orange/30";
  if (skill.startsWith("logic")) return "bg-category-language/20 text-ink ring-category-language/40";
  return "bg-segment-yellow/35 text-ink ring-segment-yellow/60"; // number sense
}

export default function LittleChefsPage() {
  return (
    <TeacherGate>
      <div className="mx-auto w-full max-w-3xl px-4 pb-14 pt-3 md:px-6">
        <Link href="/robotics-3-5/overview" className="text-[12px] font-bold text-brand-orange hover:underline">
          ← stem · ages 3–5
        </Link>

        {/* Cover */}
        <section className="mt-3 overflow-hidden rounded-3xl bg-category-stem/80 px-6 py-7 text-white shadow-card md:px-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/80">
            wonderworld · stem · ages 3–5
          </p>
          <h1 className="mt-1.5 text-[28px] font-extrabold lowercase leading-[1.05] md:text-[36px]">
            little chefs
          </h1>
          <p className="mt-1 text-[14px] font-bold lowercase text-white/90">the recipe book</p>
          <p className="mt-3 max-w-[52ch] text-[13.5px] font-medium leading-relaxed text-white/90">
            children run little food shops — choosing recipes, mixing, measuring, pricing and
            problem-solving. the maths and science come out of actually making the food.
          </p>
        </section>

        {/* How it works */}
        <section className="mt-5 rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05] md:p-6">
          <p className="text-[11px] font-bold tracking-normal text-brand-orange">how a session runs</p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink md:text-[14px]">
            <b>one shop per session</b>, with three connected experiences: the child <b>chooses &amp; makes</b> the
            food, <b>experiments</b> with one feature of it, then fills a <b>shop order</b> with a maths or logic
            twist — a real 15–20 minute pretend-play, not a set of disconnected exercises.
          </p>
          <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-muted">
            each shop is a little set of reusable <b className="text-ink">recipe &amp; challenge cards</b> — pick a
            few each time and repeat them with new combinations. the four skills below each challenge are for the
            educator; children just cook and play. keep pricing simple at this age — 1-coin prices, counters,
            matching, or adding within 10.
          </p>
        </section>

        {/* Shops */}
        {LITTLE_CHEFS.map((shop) => (
          <section key={shop.slug} className="mt-8 overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/[0.05]">
            {/* header */}
            <div className="flex items-center gap-3 bg-category-stem/12 px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-white text-[24px] ring-1 ring-ink/5" aria-hidden>
                {shop.emoji}
              </span>
              <div>
                <h2 className="text-[18px] font-extrabold lowercase leading-tight text-ink md:text-[20px]">{shop.name}</h2>
                <p className="mt-0.5 text-[12px] text-ink-muted">{shop.tagline}</p>
              </div>
            </div>

            <div className="space-y-4 px-5 py-5">
              {/* menu + make */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-brand-cream/60 p-3.5 ring-1 ring-ink/[0.05]">
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-brand-orange">the menu</p>
                  <ul className="mt-1.5 space-y-1">
                    {shop.menu.map((m) => (
                      <li key={m.label} className="text-[12.5px] leading-snug text-ink">
                        <span className="font-bold lowercase">{m.label}</span>
                        <span className="text-ink-muted"> — {m.options}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-brand-cream/60 p-3.5 ring-1 ring-ink/[0.05]">
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-brand-orange">make it</p>
                  <ol className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                    {shop.steps.map((s, i) => (
                      <li key={s} className="flex items-center gap-1.5 text-[12.5px] text-ink">
                        <span className="font-bold">{s}</span>
                        {i < shop.steps.length - 1 && <span className="text-ink-subtle" aria-hidden>→</span>}
                      </li>
                    ))}
                  </ol>
                  {shop.tryThis && (
                    <p className="mt-2 rounded-lg bg-category-stem/15 px-2.5 py-1.5 text-[12px] leading-snug text-ink">
                      <span className="font-extrabold text-category-stem">try this:</span> {shop.tryThis}
                    </p>
                  )}
                </div>
              </div>

              {/* challenges */}
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wide text-ink-subtle">the cooking challenges</p>
                <div className="mt-2 space-y-2">
                  {shop.challenges.map((c) => (
                    <div key={c.name} className="rounded-xl bg-brand-cream/40 p-3 ring-1 ring-ink/[0.05]">
                      <p className="text-[13px] font-extrabold lowercase text-ink">{c.name}</p>
                      <p className="mt-0.5 text-[12px] leading-relaxed text-ink-muted">{c.play}</p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {c.skills.map((sk) => (
                          <span key={sk} className={`rounded-chip px-2 py-0.5 text-[10px] font-semibold lowercase ring-1 ${skillChipClass(sk)}`}>
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* educator prep */}
              <details className="rounded-xl bg-brand-cream/60 px-4 py-2.5 ring-1 ring-ink/[0.05]">
                <summary className="cursor-pointer text-[12px] font-extrabold lowercase text-ink-muted">
                  for the educator — materials &amp; prep
                </summary>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                  <b className="text-ink">materials:</b> {shop.materials}
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">
                  <b className="text-ink">prep:</b> {shop.teacherPrep}
                </p>
              </details>
            </div>
          </section>
        ))}

        {/* Which shop builds which skill */}
        <section className="mt-9 overflow-hidden rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/[0.05]">
          <div className="bg-category-stem/12 px-5 py-4">
            <h2 className="text-[16px] font-extrabold lowercase text-ink">which shop builds which skill</h2>
            <p className="mt-0.5 text-[12px] text-ink-muted">a planning guide, not an assessment · ● strong · ○ supporting</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[460px] border-collapse text-[12.5px]">
              <thead>
                <tr className="bg-brand-cream/50 text-left">
                  <th className="px-4 py-2 font-extrabold lowercase text-ink">shop</th>
                  {DOMAIN_ORDER.map((d) => (
                    <th key={d} className="px-3 py-2 text-center font-extrabold lowercase text-ink">{CHEF_DOMAIN_LABELS[d]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LITTLE_CHEFS.map((shop) => (
                  <tr key={shop.slug} className="border-t border-ink/5">
                    <td className="px-4 py-2 font-bold lowercase text-ink">{shop.emoji} {shop.name}</td>
                    {DOMAIN_ORDER.map((d) => (
                      <td key={d} className="px-3 py-2 text-center text-[15px]">
                        <span className={shop.domains[d] === "strong" ? "text-brand-orange" : "text-ink-subtle"}>
                          {shop.domains[d] === "strong" ? "●" : "○"}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </TeacherGate>
  );
}
