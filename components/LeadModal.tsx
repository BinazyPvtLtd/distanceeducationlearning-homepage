"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LEAD_COURSES, INDIAN_STATES, type LeadCourse } from "@/lib/data";
import { submitLead } from "@/lib/leadApi";

type Props = {
  presetCourse: LeadCourse | null;
  onClose: () => void;
};

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "course" | "state" | "consent", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/;

export default function LeadModal({ presetCourse, onClose }: Props) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseId, setCourseId] = useState(presetCourse ? String(presetCourse.id) : "");
  const [state, setState] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  function validate(): FieldErrors {
    const next: FieldErrors = {};

    if (!name.trim() || name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }

    if (!email.trim() || !EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!INDIAN_MOBILE_RE.test(phone.trim())) {
      next.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!courseId) {
      next.course = "Please select a course.";
    }

    if (!state) {
      next.state = "Please select a state.";
    }

    if (!consent) {
      next.consent = "Please provide consent to continue.";
    }

    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const fieldErrors = validate();
    setErrors(fieldErrors);
    setSubmitError(null);
    if (Object.keys(fieldErrors).length > 0) return;

    const course = LEAD_COURSES.find((c) => String(c.id) === courseId);
    if (!course) {
      setErrors((prev) => ({ ...prev, course: "Please select a course." }));
      return;
    }

    setSubmitting(true);
    try {
      await submitLead({
        name: name.trim(),
        email: email.trim(),
        phone: `91${phone.trim()}`,
        course: course.code,
        course_id: course.id,
        state,
        page_url: window.location.href,
        source: "Homepage",
        remarks: "",
      });
      onClose();
      router.push("/thank-you");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-body/70 outline-none transition-colors focus:border-purple";
  const errorCls = "mt-1 text-xs text-red";
  const labelCls = "mb-1.5 block text-[13px] font-medium text-ink";

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

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label className={labelCls} htmlFor="lead-name">Name</label>
            <input
              id="lead-name"
              type="text"
              placeholder="Enter Your Name"
              className={inputCls}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
            />
            {errors.name && <p className={errorCls}>{errors.name}</p>}
          </div>

          <div>
            <label className={labelCls} htmlFor="lead-email">Email</label>
            <input
              id="lead-email"
              type="email"
              placeholder="Enter Your Email"
              className={inputCls}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
            />
            {errors.email && <p className={errorCls}>{errors.email}</p>}
          </div>

          <div>
            <label className={labelCls} htmlFor="lead-phone">Phone Number</label>
            <div className="flex overflow-hidden rounded-lg border border-line bg-white focus-within:border-purple">
              <span className="flex items-center gap-1.5 border-r border-line bg-tint px-3 text-sm font-medium text-ink">
                <span aria-hidden>🇮🇳</span> +91
              </span>
              <input
                id="lead-phone"
                type="tel"
                inputMode="numeric"
                placeholder="Phone Number"
                className="w-full min-w-0 flex-1 px-3 py-2.5 text-sm text-ink placeholder:text-body/70 outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                disabled={submitting}
              />
            </div>
            {errors.phone && <p className={errorCls}>{errors.phone}</p>}
          </div>

          <div>
            <label className={labelCls} htmlFor="lead-course">Course</label>
            <select
              id="lead-course"
              className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235A6A85%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[right_12px_center] bg-no-repeat pr-9`}
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              disabled={submitting}
            >
              <option value="">Select Course</option>
              {LEAD_COURSES.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            {errors.course && <p className={errorCls}>{errors.course}</p>}
          </div>

          <div>
            <label className={labelCls} htmlFor="lead-state">State</label>
            <select
              id="lead-state"
              className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235A6A85%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[right_12px_center] bg-no-repeat pr-9`}
              value={state}
              onChange={(e) => setState(e.target.value)}
              disabled={submitting}
            >
              <option value="">Select State</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.state && <p className={errorCls}>{errors.state}</p>}
          </div>

          <div>
            <label className="flex items-start gap-2 text-[13px] leading-snug text-body">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-purple"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                disabled={submitting}
              />
              I consent to share my details.
            </label>
            {errors.consent && <p className={errorCls}>{errors.consent}</p>}
          </div>

          {submitError && (
            <p className="rounded-lg bg-red/10 px-3 py-2 text-[13px] text-red">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full cursor-pointer rounded-lg bg-purple px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-purple-strong disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
