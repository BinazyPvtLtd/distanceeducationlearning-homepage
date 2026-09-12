import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Distance Education Learning",
  alternates: {
    canonical: "https://www.distanceeducationlearning.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <section className="mx-auto min-h-[50vh] max-w-[1180px] px-6 py-16 text-center max-[620px]:py-10">
      <h1 className="mb-6 text-[36px] max-[620px]:text-[28px]">About Distance Education Learning</h1>
      <div className="mx-auto max-w-[820px] space-y-5 rounded-brand border border-line bg-white p-6 text-[15px] leading-relaxed shadow-brand sm:p-8">
        <p>
          {"Distance Education Learning is India's trusted platform dedicated to simplifying higher education for students and working professionals. We help learners find the right online and distance degree programs from recognised, UGC-DEB approved universities — without the confusion of scattered information or misleading claims."}
        </p>
        <p>
          {"Over time, we've built a reputation as a reliable guide for thousands of learners across India. Our focus is on working professionals who want to advance their education without pausing their careers or personal responsibilities. From university comparisons and eligibility checks to personalised counselling and transparent fee guidance, we make every step of the journey clear and stress-free."}
        </p>
        <p>
          {"Our vision is simple: education should be accessible, credible, and built around the learner's real life — not the other way around. We don't just recommend degree programs; we take the time to understand your goals and guide you toward a choice that genuinely fits your career path. We're not just helping you enrol. We're helping you grow."}
        </p>
      </div>
    </section>
  );
}
