"use client";

import { Download } from "lucide-react";

// Triggers the browser print dialog so teachers can "Save as PDF" / share.
// Print CSS (globals.css + print:hidden classes) hides the app chrome.
export function PrintButton({ label = "download / share as pdf" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 rounded-chip bg-brand-orange px-3 py-1.5 text-[11px] font-bold text-white shadow-card transition hover:opacity-95 print:hidden"
    >
      <Download className="h-3.5 w-3.5" /> {label}
    </button>
  );
}
