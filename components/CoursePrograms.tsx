"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { MBA_PROGRAMS } from "@/lib/coursePrograms";
import { LEAD_COURSES } from "@/lib/data";
import { btnGhost, btnPrimary, btnSm } from "@/lib/styles";
import LeadTriggerButton from "./LeadTriggerButton";

const mba = LEAD_COURSES.find((course) => course.code === "MBA");

export default function CoursePrograms() {
  const row = useRef<HTMLDivElement>(null);
  const comparison = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const programs = MBA_PROGRAMS.filter((program) =>
    selected.includes(program.university),
  );

  function toggle(name: string) {
    setSelected((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : current.length < 3
          ? [...current, name]
          : current,
    );
  }

  return (
    <>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold text-blue">FIND YOUR FIT</p>
          <h2 className="text-2xl sm:text-3xl">
            Online MBA programs from top universities
          </h2>
        </div>
        <div className="flex shrink-0 gap-2">
          {[-1, 1].map((direction) => (
            <button
              key={direction}
              type="button"
              aria-label={
                direction < 0 ? "Previous universities" : "Next universities"
              }
              className="h-10 w-10 cursor-pointer rounded-full border border-line bg-white text-blue hover:bg-tint"
              onClick={() =>
                row.current?.scrollBy({
                  left: direction * 350,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "auto"
                    : "smooth",
                })
              }>
              {direction < 0 ? "←" : "→"}
            </button>
          ))}
        </div>
      </div>
      <div
        ref={row}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5">
        {MBA_PROGRAMS.map((program) => {
          const checked = selected.includes(program.university);
          return (
            <article
              key={program.university}
              className={`flex w-[min(320px,85vw)] shrink-0 snap-start flex-col rounded-brand border bg-white p-5 shadow-brand ${checked ? "border-blue" : "border-line"}`}>
              <div className="mb-4 flex h-16 items-center">
                <Image
                  src={program.logo}
                  alt={program.university}
                  width={140}
                  height={60}
                  className="max-h-16 w-auto max-w-40 object-contain"
                />
              </div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-blue">
                ONLINE MBA · 2 YEARS
              </p>
              <h3 className="mb-3 text-base">{program.university}</h3>
              <p className="mb-4 text-xs leading-relaxed text-body">
                {program.description}
              </p>
              <div className="mt-auto border-t border-dashed border-line pt-4 text-xs">
                <span className="text-body">Full course fee</span>
                <span className="float-right font-semibold text-blue">
                  Ask counsellor
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  aria-pressed={checked}
                  disabled={!checked && selected.length === 3}
                  onClick={() => toggle(program.university)}
                  className={`${btnGhost} ${btnSm} flex-1 disabled:cursor-not-allowed disabled:opacity-40`}>
                  {checked ? "✓ Added" : "Compare"}
                </button>
                <LeadTriggerButton
                  course={mba}
                  className={`${btnPrimary} ${btnSm} flex-1`}>
                  Apply Now
                </LeadTriggerButton>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-body">
        Select up to 3 universities to compare. Confirm current fees,
        eligibility and program approvals before applying.
      </p>
      {selected.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-brand bg-navy p-4 text-white">
          <p className="mr-auto text-sm" aria-live="polite">
            {selected.length} of 3 universities selected
          </p>
          <button
            type="button"
            disabled={selected.length < 2}
            onClick={() => comparison.current?.showModal()}
            className={`${btnPrimary} ${btnSm} disabled:opacity-50`}>
            Compare selected
          </button>
          <button
            type="button"
            onClick={() => setSelected([])}
            className="cursor-pointer px-2 text-sm underline">
            Clear all
          </button>
        </div>
      )}
      <dialog
        ref={comparison}
        aria-labelledby="comparison-title"
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-32px)] max-w-5xl overflow-auto rounded-2xl border border-line bg-white p-6 text-ink shadow-brand-lg backdrop:bg-navy/60"
        onClick={(event) => {
          if (event.target === event.currentTarget) comparison.current?.close();
        }}>
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="comparison-title" className="text-2xl">
            Compare Online MBA programs
          </h2>
          <button
            type="button"
            autoFocus
            aria-label="Close comparison"
            onClick={() => comparison.current?.close()}
            className="cursor-pointer rounded-lg border border-line px-3 py-1 text-xl">
            ×
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-left text-sm">
            <thead>
              <tr className="bg-tint">
                <th className="p-4">Program details</th>
                {programs.map((program) => (
                  <th key={program.university} className="p-4">
                    {program.university}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["Duration", "duration"],
                  ["Eligibility", "eligibility"],
                  ["Highlights", "description"],
                ] as const
              ).map(([label, key]) => (
                <tr key={key} className="border-b border-line">
                  <th className="p-4">{label}</th>
                  {programs.map((program) => (
                    <td
                      key={program.university}
                      className="p-4 leading-relaxed text-body">
                      {program[key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th className="p-4">Fees</th>
                {programs.map((program) => (
                  <td key={program.university} className="p-4">
                    Ask counsellor
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </dialog>
    </>
  );
}
