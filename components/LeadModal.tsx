"use client";

import { useEffect } from "react";
import type { LeadCourse } from "@/lib/data";
import LeadForm from "./LeadForm";

type Props = {
  presetCourse: LeadCourse | null;
  onClose: () => void;
};

export default function LeadModal({ presetCourse, onClose }: Props) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(10,20,40,0.55)] p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-heading"
        className="relative max-h-[90vh] w-full max-w-[500px] overflow-y-auto rounded-2xl border-2 border-purple bg-white p-6 shadow-[0_20px_60px_rgba(124,58,237,0.35)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-body transition-colors hover:bg-tint hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <h2 id="lead-modal-heading" className="mb-6 pr-8 text-center text-xl font-bold text-ink sm:text-2xl">
          Book 100% Free Counselling
        </h2>

        <LeadForm presetCourse={presetCourse} onSuccess={onClose} />
      </div>
    </div>
  );
}
