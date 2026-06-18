"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Zap,
  Gamepad2,
  Star,
  Notebook,
  Dumbbell,
  Palette,
  Shapes,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Brain,
  Mic,
  Eye,
  Ear,
  Shuffle,
  Stethoscope,
  FlaskConical,
  Wrench,
  RotateCcw,
  Newspaper,
  Megaphone,
  Users,
  Box,
  BookOpen,
  Sparkles,
  BookText,
  Footprints,
  Hand,
  HelpCircle,
  Target,
  Timer,
  Scale,
  Radio,
  Clock,
  Shield,
  Lightbulb,
  Flame,
  type LucideIcon,
} from "lucide-react";
import {
  getCurriculumProgramme,
  listCurriculumProgrammes,
  getActivityImage,
  GYM_BOOK_IMAGES,
  getProgrammeStage,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import type {
  CurriculumActivity,
  ArtiverseUnit,
  CurriculumProgramme,
} from "@/content/types";
import { Modal } from "@/components/Modal";
import { ActivityPopup } from "@/components/ActivityPopup";
import { SegmentInfoPopup, type SegmentInfo } from "@/components/SegmentInfoPopup";
import { getTeacher } from "@/lib/teacher-state";
import { segmentPalette } from "@/components/segmentPalette";

// Unique per-activity icons for digital-only games (no physical material).
const DIGITAL_ONLY_ICONS: Record<string, LucideIcon> = {
  brain: Brain,
  voice: Mic,
  eyes: Eye,
  ears: Ear,
  shuffle: Shuffle,
  psychiatrist: Stethoscope,
  "reverse-gear": RotateCcw,
  "whacky-news": Newspaper,
  "mad-ad": Megaphone,
  "experience-share": Users,
  "story-spine": BookOpen,
  "superhero-sales": Sparkles,
  "tell-the-story": BookText,
  "step-inside": Footprints,
  "show-and-tell": Hand,
  "ask-me": HelpCircle,
  "pitch-perfect": Target,
  extempore: Timer,
  "point-of-view": Scale,
  "news-report": Radio,
  "story-in-a-minute": Clock,
  defence: Shield,
  "what-if": Lightbulb,
  "rapid-fire": Flame,
};

const SEGMENT_THUMB_BG: Record<string, string> = {
  "roll-call": "linear-gradient(135deg, #F8B074 0%, #F25E35 100%)",
  playground: "linear-gradient(135deg, #A3C996 0%, #6DA35A 100%)",
  showtime: "linear-gradient(135deg, #F3C520 0%, #E89A4E 100%)",
  "log-book": "linear-gradient(135deg, #FFE1B8 0%, #F8B074 100%)",
  "art-gym": "linear-gradient(135deg, #FFD69A 0%, #E89A4E 100%)",
  "art-games": "linear-gradient(135deg, #F3C520 0%, #F25E35 100%)",
  artiverse: "linear-gradient(135deg, #F8B074 0%, #C44017 100%)",
  artistotle: "linear-gradient(135deg, #B8C9E8 0%, #5B6E94 100%)",
  experiment: "linear-gradient(135deg, #FFD69A 0%, #E89A4E 100%)",
  build: "linear-gradient(135deg, #A3C996 0%, #6DA35A 100%)",
  "experience-book": "linear-gradient(135deg, #FFE1B8 0%, #F8B074 100%)",
};

function SegmentThumbIcon({ segment }: { segment: string }) {
  const common = "h-7 w-7 text-white";
  switch (segment) {
    case "roll-call":
      return <Zap className={common} strokeWidth={1.8} />;
    case "playground":
      return <Gamepad2 className={common} strokeWidth={1.8} />;
    case "showtime":
      return <Star className={common} strokeWidth={1.8} />;
    case "log-book":
      return <Notebook className={common} strokeWidth={1.8} />;
    case "art-gym":
      return <Dumbbell className={common} strokeWidth={1.8} />;
    case "art-games":
      return <Shapes className={common} strokeWidth={1.8} />;
    case "artiverse":
      return <Palette className={common} strokeWidth={1.8} />;
    case "artistotle":
      return <Palette className={common} strokeWidth={1.8} />;
    case "experiment":
      return <FlaskConical className={common} strokeWidth={1.8} />;
    case "build":
      return <Wrench className={common} strokeWidth={1.8} />;
    case "experience-book":
      return <Notebook className={common} strokeWidth={1.8} />;
    default:
      return <Star className={common} strokeWidth={1.8} />;
  }
}

type LibraryItem = (
  | { kind: "activity"; item: CurriculumActivity }
  | { kind: "artiverse"; item: ArtiverseUnit }
  | {
      kind: "primer";
      title: string;
      description: string;
      info: SegmentInfo;
      thumbImageUrl?: string;
    }
) & {
  id: string;
  segment: string;
  programmeSlug: string;
  programmeLabel: string; // e.g. "art & design · 5–8"
};

// Book covers per programme slug — used as the primer thumbnail for the
// "experience book" entry in the library.
const BOOK_COVER_BY_PROGRAMME: Record<string, string> = {
  "art-design-5-8": "/book-covers/art-5-8.png",
  "art-design-8-12": "/book-covers/art-8-12.png",
  "public-speaking-5-8": "/book-covers/speaking-5-8.png",
  "public-speaking-8-12": "/book-covers/speaking-8-12.png",
};

function programmeShortLabel(p: CurriculumProgramme): string {
  return `${p.title} · ${p.ageLabel}`;
}

function buildItemsFor(prog: CurriculumProgramme): LibraryItem[] {
  const bookMap: Record<string, string> = {
    "public-speaking-5-8": "speaking-5-8",
    "public-speaking-8-12": "speaking-8-12",
    "art-design-5-8": "art-5-8",
    "art-design-8-12": "art-8-12",
  };
  const programmeLabel = programmeShortLabel(prog);
  const programmeSlug = prog.slug;
  const items: LibraryItem[] = [];

  Object.values(prog.activities).forEach((a) => {
    // Experience book entries are teacher-tool reflections, not
    // searchable resources — exclude them from the library.
    if (a.segment === "experience-book" || a.segment === "log-book") return;
    items.push({
      kind: "activity",
      id: `${programmeSlug}/${a.id}`,
      segment: a.segment,
      item: a,
      programmeSlug,
      programmeLabel,
    });
  });

  prog.artiverseUnits?.forEach((u) => {
    // Artistotle units share the artiverseUnits collection but are
    // tagged with an `atl-` id prefix. Surface them under their own
    // segment so the library filter chips can split the two worlds.
    const isArtistotle = u.id.startsWith("atl");
    items.push({
      kind: "artiverse",
      id: `${programmeSlug}/${u.id}`,
      segment: isArtistotle ? "artistotle" : "artiverse",
      item: u,
      programmeSlug,
      programmeLabel,
    });
  });

  if (prog.segmentDefinitions.some((s) => s.id === "art-gym")) {
    const is35 = prog.ageGroup === "3-5";
    const gymThumb =
      prog.ageGroup === "8-12"
        ? GYM_BOOK_IMAGES[5]
        : prog.ageGroup === "3-5"
          ? "/gym-books/3-5-book.png"
          : GYM_BOOK_IMAGES[3];
    items.push({
      kind: "primer",
      id: `${programmeSlug}/art-gym-overview`,
      segment: "art-gym",
      title: is35 ? "artgym book" : "art gym — book & cue cards",
      description: is35
        ? "Fine motor books with materials of choice — erasable markers, clay, yarn. Reusable laminated pages. Offer children a choice in what to use."
        : "Laminated art-gym books and cue cards for fine-motor and line practice. Children mark them with resources of choice (thread, clay, sequins, erasable markers), do 1–3 pages, then replicate what they drew in their sketchbook freely with materials of choice.",
      info: {
        segmentId: "art-gym",
        segmentName: "Art Gym",
        title: is35 ? "artgym book" : "art gym — book & cue cards",
        description: is35
          ? "A quick warm-up for fine motor skills and imagination. ArtGym books are fine motor books that can be used with materials of choice — erasable markers, clay, yarn. They are reusable laminated books, so anything that wipes off works (no paint, nothing that stains). Offer children a choice in what they use. ArtGym book and Scribble book rotate on alternate days — do one, then the next day, the other. There are 2 ArtGym books — start every child on level 1, then move to level 2. Use the prescribed resources only. Children do 1–2 pages of ArtGym a day. Use the books in linear order — first page to last — the challenge increases page by page."
          : "a self-paced fine-motor warm-up using laminated art-gym books and cue cards. children mark them with resources of choice: thread, clay, sequins, or erasable markers — do 1–3 pages, then replicate what they drew in their sketchbook freely with materials of choice (crayons, colour pencils, brush pens, yarn + glue, etc.). cue cards apply the same lines onto simple objects or shapes — progression goes shape → simple object → imaginary object → scene.",
        heroImageUrl: gymThumb,
      },
      thumbImageUrl: gymThumb,
      programmeSlug,
      programmeLabel,
    });

    // Scribble book — separate primer card for 3-5 only. The art gym
    // segment alternates between the laminated art gym book and the
    // scribble book, and they look different enough that each deserves
    // its own card in the library so teachers can find either quickly.
    if (is35) {
      const scribbleThumb = "/gym-books/3-5-scribble.png";
      items.push({
        kind: "primer",
        id: `${programmeSlug}/scribble-book`,
        segment: "art-gym",
        title: "scribble book",
        description:
          "A book of imagination — every page is a unique open-ended story. Children scribble freely from their imagination.",
        info: {
          segmentId: "art-gym",
          segmentName: "Art Gym",
          title: "scribble book",
          description:
            "A book of imagination — every page is a unique open-ended story. The teacher prompts the children about what the scene sets and does not give the solution. Children scribble freely from their imagination. This is not a laminated book — fill only with dry mediums: crayons, yarn, glue. No paint or clay. ArtGym book and Scribble book rotate on alternate days — only 1 artwork a day in the Scribble book. Use the book in linear order — first page to last — the challenge increases page by page.",
          heroImageUrl: scribbleThumb,
        },
        thumbImageUrl: scribbleThumb,
        programmeSlug,
        programmeLabel,
      });
    }
  }

  // Artiverse, Artistotle, and Experience Book primers are intentionally
  // not surfaced in the library — they live as teacher reference books in
  // the programme overview's books row, not as searchable resources.

  return items;
}

export default function LibraryPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedActivity, setSelectedActivity] = useState<CurriculumActivity | null>(null);
  const [selectedInfo, setSelectedInfo] = useState<SegmentInfo | null>(null);
  const [teacherSlug, setTeacherSlug] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  // admin-only: which programme to filter by ("all" = every programme)
  const [selectedProgSlug, setSelectedProgSlug] = useState<string>("all");
  const progPickerRef = useRef<HTMLDivElement | null>(null);

  const scrollPicker = (dir: "left" | "right") => {
    const el = progPickerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -180 : 180, behavior: "smooth" });
  };
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const t = getTeacher();
    if (!t) {
      router.replace("/login");
      return;
    }
    const admin = t.programmeSlug === "*" || t.role === "admin";
    setIsAdmin(admin);
    setTeacherSlug(t.programmeSlug);
    // The library is always scoped to a single programme — never "all" —
    // so educators aren't shown every programme's resources at once.
    // Admin / centre logins default to the first live programme.
    const firstLive = listCurriculumProgrammes().find(
      (p) => p.totalSessions > 0 && getProgrammeStage(p) === "live",
    );
    setSelectedProgSlug(admin ? (firstLive?.slug ?? "") : t.programmeSlug);
    setAuthReady(true);
  }, [router]);

  const allItems = useMemo(() => {
    const programmes = listCurriculumProgrammes().filter((p) => p.totalSessions > 0);

    let progsToShow: CurriculumProgramme[] = [];
    if (isAdmin) {
      // Always exactly one programme — never the full list.
      progsToShow = programmes.filter((p) => p.slug === selectedProgSlug);
    } else if (teacherSlug) {
      const p = getCurriculumProgramme(teacherSlug);
      progsToShow = p ? [p] : [];
    }

    return progsToShow.flatMap(buildItemsFor);
  }, [isAdmin, teacherSlug, selectedProgSlug]);

  // Programme picker (admin / centre) — live programmes only, since trial
  // programmes are blocked.
  const adminProgrammes = useMemo(
    () =>
      listCurriculumProgrammes().filter(
        (p) => p.totalSessions > 0 && getProgrammeStage(p) === "live",
      ),
    []
  );

  const filtered = useMemo(() => {
    let result = allItems;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter((i) => {
        if (i.kind === "activity") {
          const a = i.item;
          return [
            a.title,
            a.cardName ?? "",
            a.setupLine,
            a.howToPlay,
            ...(a.materials ?? []),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q);
        }
        if (i.kind === "artiverse") {
          const u = i.item;
          return [
            u.whatChildrenMake,
            u.medium,
            u.technique,
            ...u.topicOptions,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q);
        }
        return (i.title + " " + i.description).toLowerCase().includes(q);
      });
    }
    return result;
  }, [allItems, query]);

  // Group filtered items by programme only — the hub is a flat resource
  // library, with no "segments of the day" sectioning. Programme order
  // follows listCurriculumProgrammes(); item order is preserved.
  const grouped = useMemo(() => {
    const allProgs = listCurriculumProgrammes().filter(
      (p) => p.totalSessions > 0
    );

    type ProgrammeGroup = {
      slug: string;
      title: string;
      ageLabel: string;
      items: LibraryItem[];
    };

    return allProgs.flatMap<ProgrammeGroup>((prog) => {
      const itemsForProg = filtered.filter(
        (i) => i.programmeSlug === prog.slug
      );
      if (itemsForProg.length === 0) return [];
      return [
        {
          slug: prog.slug,
          title: prog.title,
          ageLabel: prog.ageLabel,
          items: itemsForProg,
        },
      ];
    });
  }, [filtered]);

  if (!authReady) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-[12px] font-medium text-ink-subtle">loading...</p>
      </div>
    );
  }

  const openItem = (it: LibraryItem) => {
    if (it.kind === "activity") {
      setSelectedActivity(it.item);
    } else if (it.kind === "artiverse") {
      const u = it.item;
      // Artistotle projects share the artiverseUnits collection but are
      // numbered as projects 1-6, not units 13-18. Detect by id prefix.
      const isArtistotle = u.id.startsWith("atl");
      const projectNumber = isArtistotle
        ? u.unitNumber - 12 // unitNumber 13 → project 1, 14 → 2, …
        : u.unitNumber;
      const subText = isArtistotle
        ? `project ${projectNumber} of 6 · ${u.whatChildrenMake.toLowerCase()}`
        : `unit ${u.unitNumber} · reference: ${u.whatChildrenMake.toLowerCase()}`;
      const description = isArtistotle
        ? "an illustrator-led project. children meet the work, learn the technique, then make in the same spirit — not a copy of the original."
        : "the main making activity. children work on a3 paper using the medium of this unit. the reference topic below is inspiration only — the actual topic is the child's choice.";
      setSelectedInfo({
        segmentId: "artiverse",
        segmentName: isArtistotle ? "Artistotle" : "Artiverse",
        title: u.medium,
        subText,
        description,
        artiverseUnit: {
          medium: u.medium,
          technique: u.technique,
          whatChildrenMake: u.whatChildrenMake,
          days: u.days,
          topicOptions: u.topicOptions,
          heroImageUrl: u.heroImageUrl,
          mode: isArtistotle ? "artistotle" : "artiverse",
        },
      });
    } else {
      setSelectedInfo(it.info);
    }
  };

  const programmeForBack =
    !isAdmin && teacherSlug && teacherSlug !== "*"
      ? getCurriculumProgramme(teacherSlug)
      : null;

  // The library shows one programme at a time, so the legend + card
  // markers are specific to that programme's category:
  //   art   → games · artworks
  //   PS    → games with resources · games without resources
  //   stem  → experiments · model builds
  const currentSlug = isAdmin ? selectedProgSlug : (teacherSlug ?? "");
  const currentCategory = getCurriculumProgramme(currentSlug)?.category;

  return (
    <div className="flex flex-col px-4 pt-4 pb-6">
      {programmeForBack && (
        <Link
          href={`/${programmeForBack.slug}/overview`}
          className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          back to {programmeForBack.title.toLowerCase()}
        </Link>
      )}
      <h1 className="text-[22px] font-bold text-ink">library</h1>
      <p className="mt-1 text-[13px] text-ink-muted">
        every resource for this programme — search by name, keyword, or material.
      </p>

      {/* Admin-only programme picker */}
      {isAdmin && (
        <div className="mt-4">
          <div className="relative flex items-center gap-1.5">
            <button
              type="button"
              aria-label="scroll programmes left"
              onClick={() => scrollPicker("left")}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink-muted transition hover:bg-ink/10 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div
              ref={progPickerRef}
              className="no-scrollbar flex flex-1 gap-2 overflow-x-auto scroll-smooth"
            >
              {adminProgrammes.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => setSelectedProgSlug(p.slug)}
                  className={cn(
                    "shrink-0 rounded-chip px-3 py-1.5 text-[11px] font-semibold transition",
                    selectedProgSlug === p.slug
                      ? "bg-brand-orange text-white"
                      : "bg-ink/5 text-ink-muted hover:bg-ink/10"
                  )}
                >
                  {p.title} · {p.ageLabel}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="scroll programmes right"
              onClick={() => scrollPicker("right")}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink-muted transition hover:bg-ink/10 active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative mt-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search by name, keyword, materials..."
          className="w-full rounded-card border border-ink/10 bg-brand-white py-2.5 pl-9 pr-4 text-[13px] text-ink placeholder:text-ink-subtle focus:border-brand-orange/40 focus:outline-none focus:ring-2 focus:ring-brand-orange/10"
        />
      </div>

      {/* Legend — specific to this programme's category. It names the
          kinds of entries you'll find and the marker each one carries. */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-lg bg-brand-white/60 px-3 py-2 text-[10px] text-ink-muted ring-1 ring-ink/5">
        <span className="font-bold tracking-wide text-ink-subtle">key</span>
        {currentCategory === "art" && (
          <>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-segment-green/40 text-ink">
                <Gamepad2 className="h-2.5 w-2.5" strokeWidth={2.4} />
              </span>
              games — build the skills through play
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden className="text-[12px]">🌍</span>
              artworks — reference only; children make their own
            </span>
          </>
        )}
        {currentCategory === "language" && (
          <>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-segment-blue/40 text-ink">
                <Box className="h-2.5 w-2.5" strokeWidth={2.4} />
              </span>
              games with physical resources — needs a kit or cards
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-white text-brand-orange ring-1 ring-ink/10">
                <MessageCircle className="h-2.5 w-2.5" strokeWidth={2.4} />
              </span>
              games without physical resources — verbal, no kit
            </span>
          </>
        )}
        {currentCategory === "stem" && (
          <>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-segment-yellow/50 text-ink">
                <FlaskConical className="h-2.5 w-2.5" strokeWidth={2.4} />
              </span>
              experiments — find the answer to one question
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-segment-green/40 text-ink">
                <Wrench className="h-2.5 w-2.5" strokeWidth={2.4} />
              </span>
              model builds — build a working mechanical model
            </span>
          </>
        )}
      </div>

      {/* Count */}
      <p className="mt-4 text-[11px] font-medium text-ink-subtle">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
        {query.trim() ? ` for "${query.trim()}"` : ""}
      </p>

      {/* Results — the single selected programme's resources */}
      <div className="mt-4 space-y-8">
        {grouped.map((prog) => {
          // Show the programme title so the centre login knows which
          // programme's resources are on screen.
          const showProgrammeHeader = isAdmin;
          return (
            <section key={prog.slug} className="space-y-4">
              {showProgrammeHeader && (
                <header className="flex items-baseline justify-between gap-3 border-b border-ink/10 pb-2">
                  <h2 className="text-[16px] font-extrabold lowercase text-ink">
                    {prog.title} · {prog.ageLabel}
                  </h2>
                  <span className="rounded-chip bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-ink-muted">
                    {prog.items.length} entries
                  </span>
                </header>
              )}

              <ul className="space-y-2">
                {prog.items.map((it) => {
                          const itemPalette = segmentPalette(it.segment);
                          const title =
                            it.kind === "activity"
                              ? it.item.title
                              : it.kind === "artiverse"
                                ? it.item.id.startsWith("atl")
                                  ? `project ${it.item.unitNumber - 12} · ${it.item.medium.toLowerCase()}`
                                  : `unit ${it.item.unitNumber} · ${it.item.medium.toLowerCase()}`
                                : it.title;
                          const subline =
                            it.kind === "activity"
                              ? it.item.setupLine
                              : it.kind === "artiverse"
                                ? `reference: ${it.item.whatChildrenMake.toLowerCase()}`
                                : it.description;
                          const cardName =
                            it.kind === "activity" ? it.item.cardName : undefined;
                          const thumbImg =
                            it.kind === "artiverse"
                              ? it.item.heroImageUrl
                              : it.kind === "activity"
                                ? getActivityImage(it.item.id) ?? null
                                : it.kind === "primer"
                                  ? it.thumbImageUrl ?? null
                                  : null;
                          // Per-category marker for this entry (see legend):
                          //   PS   → "no resources" (empty materials list)
                          //   stem → experiment / model build (by segment)
                          // Art games carry no marker; artworks use the 🌍 badge.
                          const kindTag: { Icon: LucideIcon; label: string } | null =
                            it.kind !== "activity"
                              ? null
                              : currentCategory === "art"
                                ? { Icon: Gamepad2, label: "game" }
                                : currentCategory === "language"
                                  // A facilitated game is verbal / teacher-led —
                                  // it needs no physical resources even if a
                                  // prompt deck is listed. Only physical-games
                                  // need a kit the children handle.
                                  ? it.item.type === "physical-game"
                                    ? { Icon: Box, label: "kit" }
                                    : { Icon: MessageCircle, label: "no kit" }
                                  : currentCategory === "stem" && it.segment === "experiment"
                                    ? { Icon: FlaskConical, label: "experiment" }
                                    : currentCategory === "stem" && it.segment === "build"
                                      ? { Icon: Wrench, label: "model" }
                                      : null;
                          const cornerBadge = kindTag ? (
                            <span
                              className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-white text-brand-orange shadow-sm ring-2 ring-brand-white"
                              title={kindTag.label}
                            >
                              <kindTag.Icon className="h-3 w-3" strokeWidth={2.4} />
                            </span>
                          ) : null;
                          return (
                            <li key={it.id}>
                              <button
                                onClick={() => openItem(it)}
                                className="flex w-full overflow-hidden rounded-card bg-brand-white text-left shadow-card ring-1 ring-ink/5 transition hover:shadow-float active:scale-[0.99]"
                              >
                                {/* Segment-coloured left edge bar */}
                                <span
                                  aria-hidden="true"
                                  className={cn(
                                    "w-1 flex-none",
                                    itemPalette.fill
                                  )}
                                />

                                <div className="flex flex-1 items-start gap-3 p-3">
                                  {/* Thumbnail — wrapped in a relative
                                      box so we can stamp the artiverse
                                      🌍 / artistotle 👴 mode badge in
                                      the top-right corner. */}
                                  {thumbImg ? (
                                    <div className="relative h-16 w-16 shrink-0">
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img
                                        src={thumbImg}
                                        alt=""
                                        className="h-16 w-16 rounded-lg bg-ink/[0.03] object-contain"
                                      />
                                      {(() => {
                                        // Mode badges only mean two-different-things in
                                        // 3-5 art (where the artiverse segment hosts BOTH
                                        // artiverse and artistotle units, distinguished by
                                        // days === 3). For 5-8 and 8-12 every unit is an
                                        // artiverse unit — days varies but it's all one mode,
                                        // so we either show 🌍 on every unit or none. Pick
                                        // 🌍 to keep the "this is part of the artiverse" cue.
                                        const slug = it.programmeSlug;
                                        const is35Art = slug === "art-design-3-5";
                                        const isArtiverseBook = it.kind === "primer" && it.id.endsWith("/artiverse-book");
                                        const isArtistotleBook = it.kind === "primer" && it.id.endsWith("/artistotle-book");
                                        const isArtArtiverse = slug?.startsWith("art-design");
                                        let emoji: string | null = null;
                                        if (isArtistotleBook) emoji = "👴";
                                        else if (isArtiverseBook) emoji = "🌍";
                                        else if (it.kind === "artiverse") {
                                          if (is35Art) {
                                            // 3-5 art: distinguish artiverse (1-2 days) from artistotle (3 days)
                                            emoji = it.item.days === 3 ? "👴" : "🌍";
                                          } else if (isArtArtiverse) {
                                            // 5-8 / 8-12 art: every unit is artiverse regardless of days
                                            emoji = "🌍";
                                          }
                                        }
                                        if (!emoji) return null;
                                        return (
                                          <span
                                            aria-hidden="true"
                                            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-segment-blue/80 text-[11px] shadow-sm ring-2 ring-brand-white"
                                          >
                                            {emoji}
                                          </span>
                                        );
                                      })()}
                                      {cornerBadge}
                                    </div>
                                  ) : (
                                    <div
                                      className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-lg"
                                      style={{
                                        background:
                                          SEGMENT_THUMB_BG[it.segment] ??
                                          "linear-gradient(135deg, #F8B074 0%, #F25E35 100%)",
                                      }}
                                    >
                                      {(() => {
                                        if (it.kind === "activity") {
                                          const UniqueIcon = DIGITAL_ONLY_ICONS[it.item.id];
                                          if (UniqueIcon) {
                                            return (
                                              <UniqueIcon
                                                className="h-7 w-7 text-white"
                                                strokeWidth={1.8}
                                              />
                                            );
                                          }
                                        }
                                        return <SegmentThumbIcon segment={it.segment} />;
                                      })()}
                                      {cornerBadge}
                                    </div>
                                  )}

                                  <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-1.5">
                                      {kindTag && (
                                        <span className="inline-flex items-center gap-1 rounded-chip bg-brand-orange/10 px-2 py-0.5 text-[9px] font-semibold text-brand-orange">
                                          <kindTag.Icon className="h-2.5 w-2.5" strokeWidth={2.2} />
                                          {kindTag.label}
                                        </span>
                                      )}
                                      {cardName && (
                                        <span className="text-[10px] font-medium text-ink-subtle">
                                          {cardName}
                                        </span>
                                      )}
                                    </div>
                                    <h4 className="mt-0.5 text-[14px] font-semibold leading-tight text-ink">
                                      {title}
                                    </h4>
                                    <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-ink-muted">
                                      {subline}
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </li>
                          );
                })}
              </ul>
            </section>
          );
        })}

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-[14px] text-ink-subtle">
              no entries match your search
            </p>
          </div>
        )}
      </div>

      {/* Activity modal */}
      <Modal
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
      >
        {selectedActivity && <ActivityPopup activity={selectedActivity} />}
      </Modal>

      {/* Segment / artiverse / primer modal */}
      <Modal isOpen={!!selectedInfo} onClose={() => setSelectedInfo(null)}>
        {selectedInfo && <SegmentInfoPopup info={selectedInfo} />}
      </Modal>
    </div>
  );
}
