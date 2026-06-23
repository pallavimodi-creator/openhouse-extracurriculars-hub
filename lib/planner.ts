import { getCurriculumProgramme } from "@/lib/content";

// The three at-centre 3-5 strands the teacher plans for.
export const PLANNER_STRANDS: { slug: string; label: string }[] = [
  { slug: "art-design-3-5", label: "art & design" },
  { slug: "robotics-3-5", label: "stem" },
  { slug: "language-storytelling-3-5", label: "language through storytelling" },
];

export interface PlannerResource {
  id: string;
  label: string;
}

export interface PlannerSegment {
  id: string;
  name: string;
  // The selectable resources for this segment. If empty, the segment is
  // fixed (e.g. play-writes, numbers gym) — nothing to choose, just run it.
  resources: PlannerResource[];
}

// Build the plannable segments for a strand from the existing content:
// each segment's resource pool is its activities (and the books / songs /
// artiverse units where the segment uses those instead of activities).
export function getStrandSegments(slug: string): PlannerSegment[] {
  const prog = getCurriculumProgramme(slug);
  if (!prog) return [];

  return prog.segmentDefinitions
    // The experience book isn't planned/chosen — it's the closing record.
    .filter((s) => s.id !== "experience-book" && s.id !== "log-book")
    .map((seg) => {
      const resources: PlannerResource[] = [];

      // 1) activities tagged to this segment (games, etc.)
      Object.values(prog.activities)
        .filter((a) => a.segment === seg.id)
        .forEach((a) => resources.push({ id: a.id, label: a.title.toLowerCase() }));

      // 2) segment-specific pools
      if (seg.id === "book-o-clock" && prog.languageBooks) {
        prog.languageBooks.forEach((b) =>
          resources.push({ id: `book-${b.order}`, label: b.title }),
        );
      }
      if (seg.id === "roll-rhyme" && prog.songs) {
        prog.songs.forEach((s) =>
          resources.push({ id: `song-${s.order}`, label: s.title }),
        );
      }
      if (seg.id === "artiverse" && prog.artiverseUnits) {
        prog.artiverseUnits.forEach((u) =>
          resources.push({
            id: u.id,
            label: u.whatChildrenMake.toLowerCase(),
          }),
        );
      }

      return { id: seg.id, name: seg.name.toLowerCase(), resources };
    });
}
