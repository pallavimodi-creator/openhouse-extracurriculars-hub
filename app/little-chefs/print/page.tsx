"use client";

import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";
import {
  LITTLE_CHEFS,
  CHEF_DOMAIN_LABELS,
  type ChefDomain,
} from "@/content/little-chefs";

/**
 * Little Chefs — the printable teacher book. Reads well on screen AND prints
 * clean A4 (one shop per page). Open it and use Print → Save as PDF.
 */

const DOMAIN_ORDER: ChefDomain[] = ["curiosity", "problem-solving", "logic", "number-sense"];

export default function LittleChefsPrintPage() {
  return (
    <TeacherGate>
      <style>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          html, body { background: #fff !important; }
          .lc-screen-only { display: none !important; }
          .lc-page { break-after: page; page-break-after: always; padding: 0 !important; box-shadow: none !important; border-radius: 0 !important; margin: 0 !important; }
          .lc-page:last-child { break-after: auto; page-break-after: auto; }
        }
        .lc-avoid { break-inside: avoid; page-break-inside: avoid; }
        @media screen {
          .lc-book { background:#efe9df; padding: 16px 12px 56px; }
          .lc-page { width: 100%; max-width: 780px; margin: 0 auto 20px; background:#fff;
            box-shadow: 0 6px 26px rgba(44,43,40,.14); border-radius: 10px; padding: 28px 26px; }
        }
      `}</style>

      {/* Toolbar — screen only */}
      <div className="lc-screen-only sticky top-0 z-40 flex items-center gap-3 border-b border-ink/10 bg-brand-cream/95 px-4 py-2.5 backdrop-blur md:px-8">
        <Link href="/little-chefs" className="text-[13px] font-bold text-brand-orange hover:underline">
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
      <p className="lc-screen-only px-4 pt-2 text-center text-[12px] text-ink-muted md:px-8">
        one shop per page · use your browser&rsquo;s <b>print → save as PDF</b> (A4) to make the teacher book.
      </p>

      <div className="lc-book text-ink">
        {/* COVER */}
        <section className="lc-page text-center">
          <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl ring-1 ring-ink/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/little-chefs/cover.png" alt="" className="aspect-square w-full object-cover" />
          </div>
          <h1 className="mt-6 text-[44px] font-extrabold lowercase leading-none text-brand-orange">little chefs</h1>
          <p className="mt-2 text-[20px] font-bold lowercase text-ink">the recipe book · a teacher aid</p>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
            children run little pretend food shops — choosing recipes, mixing, measuring, patterning and
            pricing. the maths and science come out of making the food.
          </p>
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-wide text-ink-subtle">
            openhouse · wonderworld · stem · ages 3–5
          </p>
        </section>

        {/* HOW TO USE */}
        <section className="lc-page">
          <p className="text-[12px] font-extrabold uppercase tracking-wide text-brand-orange">how to use this book</p>
          <h2 className="mt-1 text-[26px] font-extrabold lowercase text-ink">one shop per session</h2>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink">
            <p>run <b>three connected experiences</b> each session: the child <b>chooses &amp; makes</b> the food,
              <b> experiments</b> with one feature of it, then fills a <b>shop order</b> with a maths or logic twist —
              a real 15–20 minute pretend-play.</p>
            <p>each shop is a little set of reusable <b>recipe &amp; challenge cards</b> — pick a few each time and
              repeat them with new combinations. every shop deepens as children revisit it.</p>
            <p className="rounded-lg bg-brand-cream p-3.5">the four skills on each challenge —
              <b> curiosity · problem solving · logic · number sense</b> — are for you, not the child. ★ marks the
              north-star ability. keep pricing simple: 1-coin prices, counters, matching, or adding within 10.</p>
          </div>

          <p className="mt-7 text-[12px] font-extrabold uppercase tracking-wide text-ink-subtle">which shop builds which skill</p>
          <table className="mt-2 w-full border-collapse text-[13px]">
            <thead>
              <tr className="bg-brand-cream text-left">
                <th className="border border-ink/10 px-3 py-1.5 font-extrabold lowercase">shop</th>
                {DOMAIN_ORDER.map((d) => (
                  <th key={d} className="border border-ink/10 px-2 py-1.5 text-center font-extrabold lowercase">{CHEF_DOMAIN_LABELS[d]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LITTLE_CHEFS.map((shop) => (
                <tr key={shop.slug}>
                  <td className="border border-ink/10 px-3 py-1.5 font-bold lowercase">{shop.emoji} {shop.name}</td>
                  {DOMAIN_ORDER.map((d) => (
                    <td key={d} className="border border-ink/10 px-2 py-1.5 text-center text-[16px]">
                      <span className={shop.domains[d] === "strong" ? "text-brand-orange" : "text-ink-subtle"}>
                        {shop.domains[d] === "strong" ? "●" : "○"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-1.5 text-[11px] italic text-ink-subtle">● strong natural opportunity · ○ supporting</p>
        </section>

        {/* SHOP PAGES */}
        {LITTLE_CHEFS.map((shop, i) => (
          <section key={shop.slug} className="lc-page">
            <div className="flex items-center gap-3 border-b-2 border-brand-orange/30 pb-2.5">
              <span className="text-[30px]" aria-hidden>{shop.emoji}</span>
              <div>
                <h2 className="text-[26px] font-extrabold lowercase leading-none text-ink">{shop.name}</h2>
                <p className="mt-1 text-[14px] text-ink-muted">{shop.tagline}</p>
              </div>
              <span className="ml-auto text-[12px] font-bold text-ink-subtle">shop {i + 1} / {LITTLE_CHEFS.length}</span>
            </div>

            {/* image + recipe side */}
            <div className="mt-4 grid items-start gap-5 md:grid-cols-[minmax(0,260px)_1fr]">
              <div className="lc-avoid">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/little-chefs/${shop.slug}.png`} alt="" className="aspect-square w-full rounded-xl object-cover ring-1 ring-ink/10" />
              </div>
              <div className="lc-avoid rounded-xl bg-brand-cream/60 p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-orange">the menu</p>
                <ul className="mt-1.5 space-y-1">
                  {shop.menu.map((m) => (
                    <li key={m.label} className="text-[14px] leading-snug">
                      <span className="font-bold lowercase">{m.label}</span>
                      <span className="text-ink-muted"> — {m.options}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] font-extrabold uppercase tracking-wide text-brand-orange">make it</p>
                <p className="mt-1 text-[14px] leading-snug">{shop.steps.join("  →  ")}</p>
                {shop.tryThis && (
                  <p className="mt-2.5 rounded-lg bg-category-stem/15 px-3 py-1.5 text-[13.5px] leading-snug">
                    <b className="text-category-stem">try this:</b> {shop.tryThis}
                  </p>
                )}
              </div>
            </div>

            {/* challenges */}
            <p className="mt-5 text-[11px] font-extrabold uppercase tracking-wide text-ink-subtle">the cooking challenges</p>
            <div className="mt-2 space-y-2.5">
              {shop.challenges.map((c) => (
                <div key={c.name} className="lc-avoid rounded-lg bg-brand-cream/40 px-3.5 py-2.5">
                  <p className="text-[15px] font-extrabold lowercase text-ink">{c.name}</p>
                  <p className="mt-0.5 text-[13.5px] leading-snug text-ink-muted">{c.play}</p>
                  <p className="mt-1 text-[12px] font-semibold leading-snug text-brand-orange">{c.skills.join("   ·   ")}</p>
                </div>
              ))}
            </div>

            <div className="lc-avoid mt-4 rounded-lg border border-ink/10 bg-brand-cream/30 p-3.5 text-[12.5px] leading-snug text-ink-muted">
              <p><b className="text-ink">materials:</b> {shop.materials}</p>
              <p className="mt-1.5"><b className="text-ink">prep:</b> {shop.teacherPrep}</p>
            </div>
          </section>
        ))}
      </div>
    </TeacherGate>
  );
}
