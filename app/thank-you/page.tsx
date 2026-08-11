import type { Metadata } from "next";
import Link from "next/link";
import { btnPrimary } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Thank You | Distance Education Learning",
  description: "Your counselling request has been submitted successfully.",
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-[520px] text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
          <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-green" fill="none" strokeWidth="2.4">
            <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mb-3 text-[30px] max-[620px]:text-2xl">Thank You!</h1>
        <p className="mb-2 text-[15px]">Your counselling request has been submitted successfully.</p>
        <p className="mb-8 text-[15px]">Our counsellor will contact you shortly.</p>
        <Link className={btnPrimary} href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
