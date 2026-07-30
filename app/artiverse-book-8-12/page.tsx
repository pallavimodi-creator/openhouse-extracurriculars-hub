"use client";

import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";
import { getCurriculumProgramme } from "@/lib/content";

const PDF_URL = "/artiverse/art-8-12.pdf";

/**
 * Artiverse book — 8–12 art programme. Renders the teacher-reference PDF
 * as a flipbook. Number of sessions per artwork is a teacher decision;
 * the `days` on each unit is a suggested pace only.
 */
export default function ArtiverseBook812Page() {
  const programme = getCurriculumProgramme("art-design-8-12");
  const units = programme?.artiverseUnits ?? [];

  return (
    <TeacherGate>
      <div className="flex flex-col">
        <div className="px-4 pt-3">
          <Link
            href="/art-design-8-12"
            className="text-[12px] font-bold text-brand-orange hover:underline"
          >
            ← art &amp; design · ages 8–12
          </Link>
        </div>

        {/* Title band */}
        <section className="px-3 pt-5 md:px-8 md:pt-7">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-segment-yellow px-5 py-5 ring-1 ring-ink/5 md:px-7 md:py-6">
            <p className="text-[11px] font-extrabold text-ink/50">oh.</p>
            <h1 className="mt-1 text-[22px] font-extrabold leading-tight text-ink md:text-[28px]">
              the artiverse book
            </h1>
            <p className="mt-1 text-[12px] font-semibold text-ink/60">
              art &amp; design · ages 8–12
            </p>
            <p className="mt-3 text-[12px] italic leading-relaxed text-ink/75 md:text-[13px]">
              Oil pastel, watercolour, acrylic, mixed media and pencil. {units.length} units across the year, running easiest to hardest — each pairs a real artist's technique with a subject the child makes their own.
            </p>
            <p className="mt-2 text-[12px] font-semibold leading-relaxed text-ink/70 md:text-[13px]">
              How many sessions each artwork runs is up to the teacher. Adapt the pace to your group.
            </p>
          </div>
        </section>

        {/* PDF viewer — browser-native, works everywhere */}
        <section className="bg-white px-3 py-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <div className="overflow-hidden rounded-2xl bg-brand-cream ring-1 ring-ink/10 shadow-[0_8px_30px_rgba(44,43,40,0.12)]">
              <iframe
                src={PDF_URL}
                title="artiverse book · ages 8–12"
                className="block h-[75vh] w-full min-h-[520px] md:h-[85vh]"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[12px]">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-orange px-4 py-2 font-bold text-white"
              >
                open pdf in new tab
              </a>
              <a
                href={PDF_URL}
                download
                className="rounded-full bg-ink/5 px-4 py-2 font-semibold text-ink-muted hover:bg-ink/10"
              >
                download
              </a>
            </div>
          </div>
        </section>
      </div>
    </TeacherGate>
  );
}
