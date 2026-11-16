"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Logging is no longer a separate journey — it lives inside each 3–5
 * session plan (name before the plan, remark at the end). Redirect any
 * stale link to the home page, where the educator opens a strand's plan.
 */
export default function LogTodayRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[12px] font-medium text-ink-subtle">
        logging now lives inside each session plan…
      </p>
    </div>
  );
}
