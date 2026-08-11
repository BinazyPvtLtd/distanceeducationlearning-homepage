"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { LeadCourse } from "@/lib/data";
import LeadModal from "./LeadModal";

type LeadModalContextValue = {
  openLeadModal: (course?: LeadCourse) => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [presetCourse, setPresetCourse] = useState<LeadCourse | null>(null);

  const openLeadModal = useCallback((course?: LeadCourse) => {
    setPresetCourse(course ?? null);
    setOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => setOpen(false), []);

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
