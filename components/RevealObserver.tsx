"use client";

import { useEffect } from "react";
import { observeReveals } from "@/lib/reveal";

export default function RevealObserver() {
  useEffect(() => {
    observeReveals();
  }, []);

  return null;
}
