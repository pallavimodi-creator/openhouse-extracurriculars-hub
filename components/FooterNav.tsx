"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  BookOpen,
  LayoutGrid,
  LogOut,
  Building2,
  ClipboardList,
  ClipboardCheck,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { listCurriculumProgrammes } from "@/lib/content";
import {
  clearTeacher,
  getBuilding,
  clearBuilding,
  getSessionFocus,
  getTeacher,
  hasDashboardAccess,
  type SessionFocus,
  type TeacherState,
} from "@/lib/teacher-state";

export function FooterNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [building, setBuildingState] = useState<string | null>(null);
  const [teacher, setTeacher] = useState<TeacherState | null>(null);
  const [focus, setFocus] = useState<SessionFocus | null>(null);

  // Read the current building + teacher + focus on mount and whenever the
  // route changes (picking a building, signing in, or updating focus on
  // /who all update the nav for the next paint).
  useEffect(() => {
    setBuildingState(getBuilding());
    setTeacher(getTeacher());
    setFocus(getSessionFocus());
  }, [pathname]);

  // Hide the footer on the login + building-picker pages
  if (pathname === "/login" || pathname === "/building") {
    return null;
  }

  const isAdmin = hasDashboardAccess(teacher);

  // Detect if we're inside a programme page (5+ only; 3-5 is hidden).
  const programmes = listCurriculumProgrammes();
  const programmeMatch = programmes.find(
    (p) => pathname === `/${p.slug}` || pathname.startsWith(`/${p.slug}/`)
  );

  const items: { href: string; label: string; icon: typeof Home }[] = [
    { href: "/", label: "home", icon: Home },
  ];

  // Inside a programme: educators get overview + plan (plan is where they
  // mark sessions done); admins only get overview (they're review-only).
  if (programmeMatch && programmeMatch.totalSessions > 0) {
    items.push({
      href: `/${programmeMatch.slug}/overview`,
      label: "overview",
      icon: LayoutGrid,
    });
    if (!isAdmin) {
      items.push({
        href: `/${programmeMatch.slug}/plan`,
        label: "plan",
        icon: ClipboardList,
      });
    }
  }

  // Admins get a top-level "dashboard" tab so /plan/completions is one
  // tap away from anywhere in the app.
  if (isAdmin) {
    items.push({
      href: "/plan/completions",
      label: "dashboard",
      icon: ClipboardCheck,
    });
  }

  items.push({ href: "/library", label: "library", icon: BookOpen });

  const handleSignOut = () => {
    clearTeacher();
    router.push("/login");
  };

  const handleSwitchBuilding = () => {
    clearBuilding();
    router.push("/building");
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-brand-white print:hidden"
      style={{
        borderTop: "1.5px solid rgba(44,43,40,0.12)",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.08)",
        paddingBottom: "max(env(safe-area-inset-bottom), 12px)",
      }}
    >
      {/* Focus chip — the educator's name + category. Tap to change.
          Educators only; admins never have a focus. */}
      {focus && !isAdmin && (
        <Link
          href="/who"
          className="mx-auto flex w-full max-w-4xl items-center justify-center gap-1.5 border-b border-ink/5 px-3 py-1 text-[10px] font-bold text-ink-muted transition hover:bg-brand-orange/8 lg:max-w-7xl"
          title="tap to switch name or category"
        >
          <Compass className="h-3 w-3 text-brand-orange" strokeWidth={2.4} />
          <span>
            {focus.category === "art"
              ? "art & design"
              : focus.category === "stem"
                ? "robotics"
                : focus.category}
          </span>
          <span>·</span>
          <span className="text-ink">{focus.teacherName.toLowerCase()}</span>
          <span className="ml-1 text-brand-orange">· switch</span>
        </Link>
      )}
      {/* Current building chip — only when no focus set (focus already
          shows the centre context). Educators only; admins never see it. */}
      {building && !isAdmin && !focus && (
        <button
          type="button"
          onClick={handleSwitchBuilding}
          className="mx-auto flex w-full max-w-4xl items-center justify-center gap-1.5 border-b border-ink/5 px-3 py-1 text-[10px] font-bold text-ink-muted transition hover:bg-brand-orange/8 lg:max-w-7xl"
          title="tap to switch building"
        >
          <Building2 className="h-3 w-3 text-brand-orange" strokeWidth={2.4} />
          <span>building:</span>
          <span className="text-ink">{building.toLowerCase()}</span>
          <span className="ml-1 text-brand-orange">· switch</span>
        </button>
      )}
      <div className="mx-auto flex max-w-4xl items-center justify-around lg:max-w-7xl">
        {items.map((item) => {
          // Active-state matching:
          //   home — only when pathname is exactly "/"
          //   everything else — exact path or sub-path
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
                pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-2 py-2.5 text-center transition",
                active ? "text-brand-orange" : "text-ink-muted"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
              <span className="text-[10px] font-bold leading-tight">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={handleSignOut}
          className="flex flex-col items-center gap-0.5 px-2 py-2.5 text-center text-ink-muted transition hover:text-brand-orange"
        >
          <LogOut className="h-5 w-5" strokeWidth={2} />
          <span className="text-[10px] font-bold leading-tight">sign out</span>
        </button>
      </div>
    </nav>
  );
}
