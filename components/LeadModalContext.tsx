"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { LeadCourse } from "@/lib/data";
import LeadModal from "./LeadModal";

type LeadModalContextValue = {
  openLeadModal: (course?: LeadCourse) => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);
const POPUP_SESSION_KEY = "counselling-popup-shown";
const POPUP_DELAY_MS = 3_000;

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hasShownPopup = useRef(false);
  const [open, setOpen] = useState(false);
  const [presetCourse, setPresetCourse] = useState<LeadCourse | null>(null);

  const openLeadModal = useCallback((course?: LeadCourse) => {
    hasShownPopup.current = true;
    try {
      sessionStorage.setItem(POPUP_SESSION_KEY, "true");
    } catch {
      // The in-memory flag still prevents repeats when storage is unavailable.
    }
    setPresetCourse(course ?? null);
    setOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (pathname === "/thank-you" || pathname === "/contact-us") return;
    if (hasShownPopup.current) return;

    try {
      if (sessionStorage.getItem(POPUP_SESSION_KEY)) return;
    } catch {
      // Browsers that block storage can still display the popup once per visit.
    }

    const timer = window.setTimeout(() => {
      if (!hasShownPopup.current) openLeadModal();
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [pathname, openLeadModal]);

  const value = useMemo(() => ({ openLeadModal }), [openLeadModal]);

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      {open && <LeadModal presetCourse={presetCourse} onClose={closeLeadModal} />}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within a LeadModalProvider");
  return ctx;
}
