"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * The 3-5 today's-plan submit flow is paused. Anyone landing here goes
 * to the /plan hub, which shows the "paused" state.
 */
export default function PlannerRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/plan");
  }, [router]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[12px] font-medium text-ink-subtle">redirecting…</p>
    </div>
  );
}
