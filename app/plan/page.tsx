"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * The old 3–5 planner hub is retired. The 3–5 programme now lives at
 * /rotating (how the day rotates · circle · log · dashboard) and the
 * day-by-day plan at /art-design-3-5/plan. Redirect any stale link here.
 */
export default function PlanHubRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/rotating");
  }, [router]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[12px] font-medium text-ink-subtle">opening the 3–5 programme…</p>
    </div>
  );
}
