import Link from "next/link";
import CourseGrid from "@/components/CourseGrid";
import UniStrip from "@/components/UniStrip";
import LeadTriggerButton from "@/components/LeadTriggerButton";
import { btnPrimary, btnGhost } from "@/lib/styles";

const revealCls =
  "opacity-0 translate-y-[18px] transition-[opacity,transform] duration-500 ease-out [&.in]:opacity-100 [&.in]:translate-y-0";

const sectionHead = "mx-auto mb-[34px] max-w-[640px] text-center";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[radial-gradient(1200px_500px_at_85%_10%,#E7F0FE_0%,rgba(231,240,254,0)_60%),linear-gradient(180deg,#FAFCFF_0%,#F3F8FF_100%)] before:absolute before:top-[-140px] before:left-[-200px] before:h-[520px] before:w-[520px] before:rounded-full before:border before:border-blue/10 before:content-[''] after:absolute after:right-[-120px] after:bottom-[-180px] after:h-[360px] after:w-[360px] after:rounded-full after:border after:border-blue/10 after:content-['']">
        <div className="relative mx-auto grid max-w-[1180px] grid-cols-[1.02fr_0.98fr] items-center gap-10 px-6 pt-16 pb-10 max-[980px]:grid-cols-1 max-[980px]:pt-11 max-[980px]:pb-8">
          <div>
            <p className="mb-3.5 text-[15px] font-semibold text-blue">Your Future, Our Learning</p>
            <h1 className="mb-4 text-[44px] tracking-[-0.5px] max-[980px]:text-[34px] max-[620px]:text-[28px]">
              Flexible Online Degrees &amp; Certifications for a Brighter Tomorrow
            </h1>
            <p className="mb-7 max-w-[430px] text-base">Study anytime, anywhere with recognised programmes designed for your success.</p>
            <div className="flex flex-wrap gap-[14px]">
              <Link className={btnPrimary} href="#courses">
                Explore Courses
              </Link>
              <LeadTriggerButton className={btnGhost}>
                Apply Now
              </LeadTriggerButton>
            </div>
          </div>
          <div className="relative flex items-center items-end justify-center ">
            <iframe
              className="relative z-10 aspect-video rounded-[18px] border-0 shadow-brand-lg"
              src="https://www.youtube.com/embed/asD7ZnOjWms?si=wLIVCgz_x6M94juO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[linear-gradient(90deg,#1877F2_0%,#0F5FD0_100%)]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-4 gap-5 px-6 py-[26px] text-white max-[980px]:grid-cols-2 max-[980px]:gap-[22px] ">
          <div className="flex items-center justify-center gap-[14px]">
            <svg className="h-[34px] w-[34px] flex-none stroke-white fill-none [stroke-width:1.6]" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 6.5a3 3 0 010 5.6M18 20c0-2.5-1-4.5-2.6-5.6"/></svg>
            <div>
              <b className="block text-2xl leading-[1.2] font-bold">50K+</b>
              <span className="text-[13px] opacity-90">Happy Learners</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[14px]">
            <svg className="h-[34px] w-[34px] flex-none stroke-white fill-none [stroke-width:1.6]" viewBox="0 0 24 24"><path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z"/><path d="M5 10v5c0 2 3.2 3.5 7 3.5s7-1.5 7-3.5v-5"/></svg>
            <div>
              <b className="block text-2xl leading-[1.2] font-bold">15K+</b>
              <span className="text-[13px] opacity-90">Valuable Courses</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[14px]">
            <svg className="h-[34px] w-[34px] flex-none stroke-white fill-none [stroke-width:1.6]" viewBox="0 0 24 24"><path d="M3 20h18M5 20V10m4 10V10m6 10V10m4 10V10M2.5 10L12 4.5 21.5 10z"/></svg>
            <div>
              <b className="block text-2xl leading-[1.2] font-bold">50+</b>
              <span className="text-[13px] opacity-90">Partner Universities</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[14px]">
            <svg className="h-[34px] w-[34px] flex-none stroke-white fill-none [stroke-width:1.6]" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"/></svg>
            <div>
              <b className="block text-2xl leading-[1.2] font-bold">20+</b>
              <span className="text-[13px] opacity-90">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="px-6 py-[72px] max-[620px]:py-[52px]" id="courses">
        <div className="mx-auto max-w-[1180px]">
          <div className={`reveal ${sectionHead} ${revealCls}`}>
            <h2 className="mb-2 text-[30px] max-[620px]:text-2xl">Top Certification &amp; Online Degree Courses</h2>
            <p className="text-[15px]">Explore in-demand courses to boost your career and achieve your goals.</p>
          </div>

          <CourseGrid />
        </div>
      </section>

      {/* ================= UNIVERSITIES ================= */}
      <section className="px-6 pb-[72px] max-[620px]:pb-[52px]" id="universities">
        <div className="mx-auto max-w-[1180px]">
          <div className={`reveal ${sectionHead} ${revealCls}`}>
            <h2 className="mb-2 text-[30px] max-[620px]:text-2xl">Learn from Global &amp; India&apos;s Most Prestigious Institutions</h2>
            <p className="text-[15px]">Compare approvals, fees and programmes before you commit.</p>
          </div>
          <UniStrip />
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      {/* <section className="px-6 pb-[72px] max-[620px]:pb-[52px]">
        <div className={`reveal mx-auto grid max-w-[1180px] grid-cols-2 items-center gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-7 ${revealCls}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[linear-gradient(155deg,#123A7A,#1877F2)] shadow-brand-lg">
            <div className="absolute inset-0 bg-[url('/assets/img/campus.jpg')] bg-cover bg-center opacity-90"></div>
            <div className="absolute top-4 right-4 z-2 rounded-[9px] bg-white px-4 py-[9px] text-center text-xs font-bold tracking-[0.4px] text-navy shadow-brand">
              RUSHFORD
              <small className="block text-[8px] font-medium tracking-[0.16em] text-[#93A5C0]">Business School</small>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-[26px]">Featured Business School</h2>
            <p className="mb-5 text-sm">Rushford Business School offers industry-relevant programmes designed to empower future leaders with skills for global success.</p>
            <ul className="mb-[26px] grid list-none gap-[11px]">
              <li className="flex items-center gap-[10px] text-sm text-ink"><svg className="h-4 w-4 flex-none stroke-blue fill-none [stroke-width:2.4]" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg>Flexible Learning</li>
              <li className="flex items-center gap-[10px] text-sm text-ink"><svg className="h-4 w-4 flex-none stroke-blue fill-none [stroke-width:2.4]" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg>Industry-Relevant Curriculum</li>
              <li className="flex items-center gap-[10px] text-sm text-ink"><svg className="h-4 w-4 flex-none stroke-blue fill-none [stroke-width:2.4]" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg>Global Recognition</li>
              <li className="flex items-center gap-[10px] text-sm text-ink"><svg className="h-4 w-4 flex-none stroke-blue fill-none [stroke-width:2.4]" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg>Career Growth Support</li>
            </ul>
            <Link className={btnPrimary} href="#contact">
              Learn More
            </Link>
          </div>
        </div>
      </section> */}

      {/* ================= ABOUT ================= */}
      <section className="p-6 pb-[72px] max-[620px]:pb-[52px] bg-navy text-white/72 " id="about">
        <div className="mx-auto max-w-[1180px]">
          <div>
            <h2 className="mb-4 text-[30px] text-white max-[620px]:text-2xl text-center">About Distance Education Learning</h2>

            <p className="text-[15px] text-center"> Distance Education Learning is India's trusted platform dedicated to simplifying higher education for students and working professionals. We help learners find the right online and distance degree programs from recognised, UGC-DEB approved universities — without the confusion of scattered information or misleading claims.</p>

            <p className="text-[15px] text-center">Over time, we've built a reputation as a reliable guide for thousands of learners across India. Our focus is on working professionals who want to advance their education without pausing their careers or personal responsibilities. From university comparisons and eligibility checks to personalised counselling and transparent fee guidance, we make every step of the journey clear and stress-free.</p>

            <p className="text-[15px] text-center">
               Our vision is simple: education should be accessible, credible, and built around the learner's real life — not the other way around. We don't just recommend degree programs; we take the time to understand your goals and guide you toward a choice that genuinely fits your career path.
               We're not just helping you enrol. We're helping you grow.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-6 pb-[72px] max-[620px]:pb-[52px]">
        <div className="mx-auto max-w-[1180px]">
          <div className={`reveal ${sectionHead} ${revealCls}`}>
            <h2 className="mb-2 text-[30px] max-[620px]:text-2xl">What Our Learners Say</h2>
            <p className="text-[15px]">Real stories. Greater futures.</p>
          </div>
          <div className={`reveal grid grid-cols-3 gap-6 max-[980px]:grid-cols-1 ${revealCls}`}>
            <figure className="flex flex-col gap-[14px] rounded-brand border border-line bg-white p-6 shadow-brand transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
              <div className="text-[34px] leading-none font-bold text-[#BFD8FA]">&ldquo;</div>
              <p className="text-sm">The flexibility to learn at my own pace helped me balance my studies and work.</p>
              <figcaption>
                <div className="text-sm font-semibold text-ink">&ndash; Priya Sharma</div>
                <div className="-mt-1 text-xs text-blue">Marketing Professional</div>
              </figcaption>
              <div className="text-[13px] tracking-[2px] text-star" aria-label="Rated 5 out of 5">★★★★★</div>
            </figure>
            <figure className="flex flex-col gap-[14px] rounded-brand border border-line bg-white p-6 shadow-brand transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
              <div className="text-[34px] leading-none font-bold text-[#BFD8FA]">&ldquo;</div>
              <p className="text-sm">The courses are well-structured and taught by industry experts.</p>
              <figcaption>
                <div className="text-sm font-semibold text-ink">&ndash; Arjun Mehta</div>
                <div className="-mt-1 text-xs text-blue">IT Specialist</div>
              </figcaption>
              <div className="text-[13px] tracking-[2px] text-star" aria-label="Rated 5 out of 5">★★★★★</div>
            </figure>
            <figure className="flex flex-col gap-[14px] rounded-brand border border-line bg-white p-6 shadow-brand transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
              <div className="text-[34px] leading-none font-bold text-[#BFD8FA]">&ldquo;</div>
              <p className="text-sm">I gained the skills I needed to grow in my career and achieve my goals.</p>
              <figcaption>
                <div className="text-sm font-semibold text-ink">&ndash; Neha Kapoor</div>
                <div className="-mt-1 text-xs text-blue">HR Manager</div>
              </figcaption>
              <div className="text-[13px] tracking-[2px] text-star" aria-label="Rated 5 out of 5">★★★★★</div>
            </figure>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
    <section id="faq" className="py-[70px]">
      {/* FAQ Heading */}
      <div className={`reveal mx-auto mb-[34px] max-w-none text-left ${revealCls}`}>
                <h2 className="mb-2 text-center text-[26px]">FAQs</h2>
                <p className="text-[15px] text-center">Have questions? We&apos;re here to help.</p>
              </div>

      {/* FAQ List */}
      <div
        className={`reveal mx-auto max-w-[900px] overflow-hidden rounded-xl border border-line bg-white ${revealCls}`}
      >
        <details className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-[18px] text-[14px] font-semibold text-ink">
            <span>
              How do I enrol in a distance or online degree course?
            </span>

            <span className="shrink-0 text-[20px] font-normal text-blue transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-5 pb-5 text-[13px] leading-[1.7] text-body">
            You can enrol by connecting with our counsellors, who will guide you
            through university selection, eligibility checks, documentation, and
            the complete admission process — making enrolment simple and
            hassle-free.
          </div>
        </details>

        <details className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-[18px] text-[14px] font-semibold text-ink">
            <span>
              Are the degree programs you offer recognised and valid?
            </span>

            <span className="shrink-0 text-[20px] font-normal text-blue transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-5 pb-5 text-[13px] leading-[1.7] text-body">
            Yes, we only partner with UGC-DEB approved and recognised
            universities. Every degree program listed on our platform is
            genuine and holds valid recognition in the job market.
          </div>
        </details>

        <details className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-[18px] text-[14px] font-semibold text-ink">
            <span>
              What types of degree programs can I explore on your platform?
            </span>

            <span className="shrink-0 text-[20px] font-normal text-blue transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-5 pb-5 text-[13px] leading-[1.7] text-body">
            We offer a wide range of undergraduate and postgraduate degree
            programs across streams like management, commerce, arts, and IT —
            all from recognised, UGC-DEB approved universities, so you can
            choose a path that fits your career goals.
          </div>
        </details>

        <details className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-[18px] text-[14px] font-semibold text-ink">
            <span>
              Can I continue working while pursuing a degree through your
              platform?
            </span>

            <span className="shrink-0 text-[20px] font-normal text-blue transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-5 pb-5 text-[13px] leading-[1.7] text-body">
            Absolutely. Our distance and online degree programs are designed
            for flexibility, allowing working professionals to study at their
            own pace without affecting their job commitments.
          </div>
        </details>

        <details className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-[18px] text-[14px] font-semibold text-ink">
            <span>
              Will I receive an official degree after completing the course?
            </span>

            <span className="shrink-0 text-[20px] font-normal text-blue transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-5 pb-5 text-[13px] leading-[1.7] text-body">
            Yes, upon successful completion, you'll receive an official degree
            from the recognised, UGC-DEB approved university — carrying the
            same validity and recognition as regular mode degrees.
          </div>
        </details>

        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-[18px] text-[14px] font-semibold text-ink">
            <span>
              How do you ensure the universities you recommend are genuine?
            </span>

            <span className="shrink-0 text-[20px] font-normal text-blue transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-5 pb-5 text-[13px] leading-[1.7] text-body">
            We verify every university's UGC-DEB approval status before listing
            it on our platform, so you can be confident you're choosing a
            recognised and credible degree program.
          </div>
        </details>
      </div>
    </section>
        </>
  );
}
