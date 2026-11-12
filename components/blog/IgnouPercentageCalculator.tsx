"use client";

import { useState } from "react";

export default function IgnouPercentageCalculator() {
  const [assignment, setAssignment] = useState("");
  const [exam, setExam] = useState("");
  const [weight, setWeight] = useState("30");
  const values = [assignment, exam, weight];
  const valid = values.every(
    (value) => value.trim() !== "" && Number.isFinite(Number(value)) && Number(value) >= 0 && Number(value) <= 100,
  );
  const result = valid
    ? Number(assignment) * Number(weight) / 100 + Number(exam) * (100 - Number(weight)) / 100
    : null;

  return (
    <section aria-labelledby="percentage-calculator" className="mb-8 rounded-xl border border-line bg-tint p-5 sm:p-6">
      <h2 id="percentage-calculator" className="mb-3 text-2xl">IGNOU percentage calculator online</h2>
      <p className="mb-5 text-sm leading-relaxed text-slate-700">Estimate one course score with assignment and theory components. Enter each score as a percentage out of 100 and use the weightage in your programme guide. This tool does not calculate practicals, projects or pass status.</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { id: "assignment-score", label: "Assignment score (%)", value: assignment, update: setAssignment },
          { id: "exam-score", label: "Exam score (%)", value: exam, update: setExam },
          { id: "assignment-weight", label: "Assignment weight (%)", value: weight, update: setWeight },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="mb-2 block text-sm font-semibold text-ink">{field.label}</label>
            <input id={field.id} type="number" min="0" max="100" step="any" value={field.value} onChange={(event) => field.update(event.target.value)} aria-describedby="calculator-help" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-ink focus:border-blue-strong focus:outline-2 focus:outline-blue-strong" />
          </div>
        ))}
      </div>
      <p id="calculator-help" className="mt-3 text-sm text-slate-600">Use values from 0 to 100. Exam weight is 100 minus assignment weight. For example, 40/50 marks equals 80%.</p>
      <div role="status" aria-live="polite" aria-atomic="true" className="mt-4 rounded-lg bg-white p-4 font-semibold text-ink">
        {result === null ? "Enter valid scores and weightage to see your estimate." : `Estimated course score: ${result.toFixed(2)}% (exam weight: ${100 - Number(weight)}%)`}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-600">The default 30:70 split is an example. Confirm the applicable scheme and separate passing requirements with IGNOU. Your official result determines completion.</p>
    </section>
  );
}
