"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * The 3-5 "today's plan" flow now lives at /log-today (name · programme ·
 * notes). Redirect any stale link there.
 */
export default function PlannerRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/log-today");
  }, [router]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[12px] font-medium text-ink-subtle">redirecting…</p>
    </div>
  );
}
