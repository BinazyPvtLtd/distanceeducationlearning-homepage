"use client";

import type { ReactNode } from "react";
import type { LeadCourse } from "@/lib/data";
import { useLeadModal } from "./LeadModalContext";

type Props = {
  className?: string;
  children: ReactNode;
  course?: LeadCourse;
};

export default function LeadTriggerButton({ className, children, course }: Props) {
  const { openLeadModal } = useLeadModal();
  return (
    <button type="button" className={className} onClick={() => openLeadModal(course)}>
      {children}
    </button>
  );
}
