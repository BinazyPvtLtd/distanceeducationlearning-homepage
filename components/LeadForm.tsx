"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LEAD_COURSES, INDIAN_STATES, type LeadCourse } from "@/lib/data";
import { submitLead } from "@/lib/leadApi";

type Props = {
  presetCourse?: LeadCourse | null;
  onSuccess?: () => void;
  variant?: "modal" | "contact";
};

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "course" | "state" | "consent", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/;

export default function LeadForm({
  presetCourse = null,
  onSuccess,
  variant = "modal",
}: Props) {
  const router = useRouter();
  const formId = useId();
  const isContact = variant === "contact";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseId, setCourseId] = useState(
    presetCourse ? String(presetCourse.id) : "",
  );
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
        source: isContact ? "Contact Us" : "Homepage",
        remarks: message.trim(),
      });
      onSuccess?.();
      router.push("/thank-you");
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  }

  const inputCls = `w-full rounded-xl border border-line bg-white px-4 text-sm text-ink placeholder:text-body/70 transition-colors focus:border-blue focus:outline-none ${isContact ? "py-4" : "py-2.5"}`;
  const errorCls = "mt-1 text-xs text-red";
  const labelCls = "mb-2 block text-sm font-medium text-body";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={isContact ? "space-y-6" : "space-y-4"}>
      <div>
        <label className={labelCls} htmlFor={`${formId}-name`}>
          {isContact ? "Full Name" : "Name"}
        </label>
        <input
          id={`${formId}-name`}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          type="text"
          autoComplete="name"
          placeholder="Enter Your Name"
          className={inputCls}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={submitting}
        />
        {errors.name && (
          <p id={`${formId}-name-error`} className={errorCls}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className={labelCls} htmlFor={`${formId}-email`}>
          {isContact ? "Email Address" : "Email"}
        </label>
        <input
          id={`${formId}-email`}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          type="email"
          autoComplete="email"
          placeholder="Enter Your Email"
          className={inputCls}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
        />
        {errors.email && (
          <p id={`${formId}-email-error`} className={errorCls}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className={labelCls} htmlFor={`${formId}-phone`}>
          Phone Number
        </label>
        <div className="flex overflow-hidden rounded-lg border border-line bg-white focus-within:border-purple">
          <span className="flex items-center gap-1.5 border-r border-line bg-tint px-3 text-sm font-medium text-ink">
            <span aria-hidden>🇮🇳</span> +91
          </span>
          <input
            id={`${formId}-phone`}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? `${formId}-phone-error` : undefined
            }
            type="tel"
            autoComplete="tel-national"
            inputMode="numeric"
            placeholder="Phone Number"
            className={`w-full min-w-0 flex-1 px-4 text-sm text-ink placeholder:text-body/70 focus:outline-none ${isContact ? "py-4" : "py-2.5"}`}
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            disabled={submitting}
          />
        </div>
        {errors.phone && (
          <p id={`${formId}-phone-error`} className={errorCls}>
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label className={labelCls} htmlFor={`${formId}-course`}>
          Course
        </label>
        <select
          id={`${formId}-course`}
          aria-invalid={Boolean(errors.course)}
          aria-describedby={
            errors.course ? `${formId}-course-error` : undefined
          }
          className={inputCls}
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          disabled={submitting}>
          <option value="">Select Course</option>
          {LEAD_COURSES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
        {errors.course && (
          <p id={`${formId}-course-error`} className={errorCls}>
            {errors.course}
          </p>
        )}
      </div>

      <div>
        <label className={labelCls} htmlFor={`${formId}-state`}>
          State
        </label>
        <select
          id={`${formId}-state`}
          aria-invalid={Boolean(errors.state)}
          aria-describedby={errors.state ? `${formId}-state-error` : undefined}
          className={inputCls}
          value={state}
          onChange={(e) => setState(e.target.value)}
          disabled={submitting}>
          <option value="">Select State</option>
          {INDIAN_STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.state && (
          <p id={`${formId}-state-error`} className={errorCls}>
            {errors.state}
          </p>
        )}
      </div>

      {isContact && (
        <div>
          <label className={labelCls} htmlFor={`${formId}-message`}>
            Message (optional)
          </label>
          <textarea
            id={`${formId}-message`}
            className={`${inputCls} min-h-[150px] resize-y`}
            placeholder="Tell us about your education goals or questions..."
            rows={5}
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={submitting}
          />
        </div>
      )}

      <div>
        <label className="flex items-start gap-2 text-[13px] leading-snug text-body">
          <input
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={
              errors.consent ? `${formId}-consent-error` : undefined
            }
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-purple"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={submitting}
          />
          {isContact ? (
            <span>
              I consent to share my details and agree to the{" "}
              <Link
                href="/terms-and-conditions"
                className="text-blue underline">
                terms and conditions
              </Link>{" "}
              and the{" "}
              <Link href="/privacy-policy" className="text-blue underline">
                privacy policy
              </Link>
              .
            </span>
          ) : (
            "I consent to share my details."
          )}
        </label>
        {errors.consent && (
          <p id={`${formId}-consent-error`} className={errorCls}>
            {errors.consent}
          </p>
        )}
      </div>

      {submitError && (
        <p
          role="alert"
          className="rounded-lg bg-red/10 px-3 py-2 text-[13px] text-red">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={`w-full cursor-pointer rounded-xl px-6 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${isContact ? "bg-navy py-4 hover:bg-blue" : "bg-purple py-3 uppercase tracking-wide hover:bg-purple-strong"}`}>
        {submitting ? "Submitting..." : isContact ? "Send Message" : "Submit"}
      </button>
    </form>
  );
}
