"use client";

import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";
import {
  LITTLE_CHEFS,
  CHEF_DOMAIN_LABELS,
  type ChefDomain,
} from "@/content/little-chefs";

/**
 * Little Chefs — the printable teacher book. A4 pages (one shop per page),
 * with a setup image, the child-facing recipe side, and the educator's
 * challenges + prep. Open it and use the browser's Print → Save as PDF.
 */

const DOMAIN_ORDER: ChefDomain[] = ["curiosity", "problem-solving", "logic", "number-sense"];

export default function LittleChefsPrintPage() {
  return (
    <TeacherGate>
      <style>{`
        @page { size: A4; margin: 13mm; }
        @media print {
          html, body { background: #ffffff !important; }
          .lc-screen-only { display: none !important; }
        }
        .lc-page { break-after: page; page-break-after: always; }
        .lc-page:last-child { break-after: auto; page-break-after: auto; }
        .lc-avoid { break-inside: avoid; page-break-inside: avoid; }
        @media screen {
          .lc-book { background:#efe9df; padding: 20px 12px 48px; }
          .lc-page { width: 210mm; max-width: 100%; min-height: 297mm; margin: 0 auto 22px;
            background:#fff; box-shadow: 0 6px 26px rgba(44,43,40,.14); border-radius: 6px; padding: 16mm 14mm; }
        }
      `}</style>

      {/* Toolbar — screen only */}
      <div className="lc-screen-only sticky top-0 z-40 flex items-center gap-3 border-b border-ink/10 bg-brand-cream/95 px-4 py-2.5 backdrop-blur md:px-8">
        <Link href="/little-chefs" className="text-[12px] font-bold text-brand-orange hover:underline">
          ← back to the book
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-[13px] font-extrabold text-white shadow-card transition hover:opacity-95"
        >
          🖨 print / save as PDF
        </button>
      </div>
      <p className="lc-screen-only px-4 pt-2 text-center text-[11px] text-ink-muted md:px-8">
        A4 · one shop per page · use your browser&rsquo;s “save as PDF” to make the teacher book.
      </p>

      <div className="lc-book text-ink">
        {/* COVER */}
        <section className="lc-page flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-[150mm] overflow-hidden rounded-2xl ring-1 ring-ink/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/little-chefs/cover.png" alt="" className="aspect-square w-full object-cover" />
          </div>
          <h1 className="mt-7 text-[40px] font-extrabold lowercase leading-none text-brand-orange">little chefs</h1>
          <p className="mt-2 text-[18px] font-bold lowercase text-ink">the recipe book · a teacher aid</p>
          <p className="mt-5 max-w-[150mm] text-[13px] leading-relaxed text-ink-muted">
            children run little pretend food shops — choosing recipes, mixing, measuring, patterning and
            pricing. the maths and science come out of making the food. openhouse · wonderworld · stem · ages 3–5.
          </p>
        </section>

        {/* HOW TO USE */}
        <section className="lc-page">
          <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-orange">how to use this book</p>
          <h2 className="mt-1 text-[22px] font-extrabold lowercase text-ink">one shop per session</h2>
          <div className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-ink">
            <p>run <b>three connected experiences</b> each session: the child <b>chooses &amp; makes</b> the food,
              <b> experiments</b> with one feature of it, then fills a <b>shop order</b> with a maths or logic twist —
              a real 15–20 minute pretend-play.</p>
            <p>each shop is a little set of reusable <b>recipe &amp; challenge cards</b> — pick a few each time and
              repeat them with new combinations. every shop deepens as children revisit it.</p>
            <p className="rounded-lg bg-brand-cream p-3">the four skills on each challenge —
              <b> curiosity · problem solving · logic · number sense</b> — are for you, not the child. ★ marks the
              north-star ability. keep pricing simple: 1-coin prices, counters, matching, or adding within 10.</p>
          </div>

          {/* matrix */}
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-wide text-ink-subtle">which shop builds which skill</p>
          <table className="mt-2 w-full border-collapse text-[12px]">
            <thead>
              <tr className="bg-brand-cream text-left">
                <th className="border border-ink/10 px-2 py-1 font-extrabold lowercase">shop</th>
                {DOMAIN_ORDER.map((d) => (
                  <th key={d} className="border border-ink/10 px-2 py-1 text-center font-extrabold lowercase">{CHEF_DOMAIN_LABELS[d]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LITTLE_CHEFS.map((shop) => (
                <tr key={shop.slug}>
                  <td className="border border-ink/10 px-2 py-1 font-bold lowercase">{shop.emoji} {shop.name}</td>
                  {DOMAIN_ORDER.map((d) => (
                    <td key={d} className="border border-ink/10 px-2 py-1 text-center">
                      <span className={shop.domains[d] === "strong" ? "text-brand-orange" : "text-ink-subtle"}>
                        {shop.domains[d] === "strong" ? "●" : "○"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-1.5 text-[10px] italic text-ink-subtle">● strong natural opportunity · ○ supporting</p>
        </section>

        {/* SHOP PAGES */}
        {LITTLE_CHEFS.map((shop, i) => (
          <section key={shop.slug} className="lc-page">
            <div className="flex items-center gap-3 border-b-2 border-brand-orange/30 pb-2">
              <span className="text-[26px]" aria-hidden>{shop.emoji}</span>
              <div>
                <h2 className="text-[22px] font-extrabold lowercase leading-none text-ink">{shop.name}</h2>
                <p className="mt-0.5 text-[12px] text-ink-muted">{shop.tagline}</p>
              </div>
              <span className="ml-auto text-[11px] font-bold text-ink-subtle">shop {i + 1} of {LITTLE_CHEFS.length}</span>
            </div>

            <div className="mt-3 grid grid-cols-[62mm_1fr] gap-4">
              {/* image + recipe side */}
              <div className="lc-avoid">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/little-chefs/${shop.slug}.png`} alt="" className="aspect-square w-full rounded-lg object-cover ring-1 ring-ink/10" />
                <div className="mt-3 rounded-lg bg-brand-cream/70 p-3">
                  <p className="text-[9px] font-extrabold uppercase tracking-wide text-brand-orange">the menu</p>
                  <ul className="mt-1 space-y-0.5">
                    {shop.menu.map((m) => (
                      <li key={m.label} className="text-[11px] leading-snug">
                        <span className="font-bold lowercase">{m.label}</span>
                        <span className="text-ink-muted"> — {m.options}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[9px] font-extrabold uppercase tracking-wide text-brand-orange">make it</p>
                  <p className="mt-0.5 text-[11px] leading-snug">{shop.steps.join("  →  ")}</p>
                  {shop.tryThis && (
                    <p className="mt-2 text-[11px] leading-snug"><b className="text-brand-orange">try this:</b> {shop.tryThis}</p>
                  )}
                </div>
              </div>

              {/* challenges (teacher side) */}
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-wide text-ink-subtle">the cooking challenges</p>
                <div className="mt-1.5 space-y-2">
                  {shop.challenges.map((c) => (
                    <div key={c.name} className="lc-avoid">
                      <p className="text-[12px] font-extrabold lowercase text-ink">{c.name}</p>
                      <p className="text-[11px] leading-snug text-ink-muted">{c.play}</p>
                      <p className="mt-0.5 text-[10px] font-semibold leading-snug text-brand-orange">{c.skills.join("  ·  ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lc-avoid mt-3 rounded-lg border border-ink/10 bg-brand-cream/40 p-3 text-[10.5px] leading-snug text-ink-muted">
              <p><b className="text-ink">materials:</b> {shop.materials}</p>
              <p className="mt-1"><b className="text-ink">prep:</b> {shop.teacherPrep}</p>
            </div>
          </section>
        ))}
      </div>
    </TeacherGate>
  );
}
