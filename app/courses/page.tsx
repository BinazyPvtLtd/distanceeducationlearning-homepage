import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import CoursePrograms from "@/components/CoursePrograms";
import LeadForm from "@/components/LeadForm";
import LeadTriggerButton from "@/components/LeadTriggerButton";
import { LEAD_COURSES } from "@/lib/data";
import { MBA_PROGRAMS } from "@/lib/coursePrograms";
import { btnGhost, btnLight, btnPrimary } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Online MBA Courses | Compare Universities & Admission | Distance Education Learning",
  description: "Explore Online MBA programs, compare universities, understand eligibility, syllabus and admission, and get free counselling.",
  alternates: { canonical: "https://distanceeducationlearning.com/courses" },
  openGraph: { title: "Explore Online MBA Courses", description: "Compare universities and find an Online MBA that fits your career.", url: "https://distanceeducationlearning.com/courses" },
};

const mba = LEAD_COURSES.find((course) => course.code === "MBA");
const sections = [["overview", "Overview"], ["eligibility", "Eligibility & Duration"], ["syllabus", "Syllabus"], ["fees", "Program Fees"], ["admission", "Admission"], ["specializations", "Specializations"], ["approvals", "Approvals"], ["worth", "Worth It?"], ["career", "Career Scope"], ["faq", "FAQs"]];
const specializations = [
  ["Finance", "Financial planning, investment analysis and corporate finance."],
  ["Marketing", "Brand strategy, consumer behaviour, digital marketing and sales."],
  ["Human Resources", "Talent acquisition, employee development and people management."],
  ["Business Analytics", "Data analysis, forecasting and insight-led business decisions."],
  ["Operations", "Supply chain, logistics, quality and process improvement."],
  ["Information Technology", "IT strategy, information systems and digital transformation."],
  ["Healthcare Management", "Healthcare administration, service delivery and operations."],
  ["International Business", "Global trade, cross-border strategy and international markets."],
];
const semesters = [
  ["Management Principles", "Business Communication", "Organizational Behaviour", "Financial Accounting", "Managerial Economics", "Marketing Management"],
  ["Financial Management", "Human Resource Management", "Operations Management", "Business Research Methods", "Management Information Systems", "Business Statistics"],
  ["Strategic Management", "Business Ethics & CSR", "Specialization Electives", "Legal Environment of Business"],
  ["International Business", "Advanced Specialization Electives", "Project Study", "Capstone / Dissertation"],
];
const faqs = [
  ["Can I work while completing my Online MBA?", "Online programs offer live and recorded classes so you can plan study around work. Review the class timetable, attendance policy and exam schedule before enrolling."],
  ["What are the eligibility requirements?", "A recognised bachelor's degree is generally required. Minimum marks, entrance requirements and work experience criteria vary by university and program."],
  ["How long does an Online MBA take?", "The typical duration is two years across four semesters. Ask your university about the maximum completion period and any extension rules."],
  ["Is an entrance exam required?", "Admission requirements differ. Some universities use graduation marks while others may require an entrance test or interview. Check the specific program's admission policy."],
  ["Are classes and exams fully online?", "Many programs use online classes and proctored exams. Some may include campus activities or other requirements; confirm these with the university."],
  ["Do I pay my course fees to you?", "University tuition fees should be paid directly through the university's official payment channels. Our counselling helps you compare your options."],
];
const container = "mx-auto max-w-[1180px] px-6";
const panel = "rounded-brand border border-line bg-white p-6 shadow-brand";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-44 border-b border-line pb-10 last:border-0"><h2 className="mb-5 border-l-4 border-blue pl-4 text-2xl sm:text-[28px]">{title}</h2>{children}</section>;
}

export default function CoursesPage() {
  return <div className="bg-white text-body">
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,#E7F0FE,transparent_65%),linear-gradient(180deg,#FAFCFF,#F3F8FF)]">
      <div className={`${container} relative grid items-start gap-10 py-10 lg:grid-cols-[1.2fr_0.85fr] lg:gap-16 lg:py-14`}>
        <div className="lg:pt-4">
          <nav aria-label="Breadcrumb" className="mb-7 flex gap-2 text-xs"><Link href="/" className="hover:text-blue">Home</Link><span aria-hidden="true">›</span><span aria-current="page">Courses · Online MBA</span></nav>
          <p className="mb-3 text-sm font-semibold text-blue">YOUR NEXT CHAPTER STARTS HERE</p>
          <h1 className="mb-5 text-[34px] tracking-[-0.6px] sm:text-[44px]">Compare &amp; Apply to <span className="text-blue">Online MBA</span> Programs from Top Universities</h1>
          <p className="max-w-xl text-[15px] leading-7">Build your business, leadership and decision-making skills without putting your career on hold. Explore flexible Online MBA programs and find the university that fits your goals.</p>
          <div className="my-6 flex flex-wrap gap-2">{["Flexible learning", "Free counselling", "Transparent guidance"].map((text) => <span key={text} className="rounded-full border border-line bg-white px-3 py-2 text-xs font-medium text-ink"><span className="mr-2 text-blue">✓</span>{text}</span>)}</div>
          <div className="flex flex-wrap gap-3"><a href="#programs" className={btnPrimary}>Compare Universities <span aria-hidden="true">→</span></a><LeadTriggerButton course={mba} className={btnGhost}>Talk to an Advisor</LeadTriggerButton></div>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6">{[["2 years", "Typical duration"], ["4 semesters", "Structured learning"], ["Online", "Study from anywhere"]].map(([value, label]) => <div key={label}><p className="text-lg font-semibold text-navy">{value}</p><p className="mt-1 text-xs">{label}</p></div>)}</div>
        </div>
        <div className={`${panel} relative shadow-brand-lg`}><span className="mb-3 inline-block rounded-full bg-tint px-3 py-1 text-xs font-semibold text-blue">Free expert counselling</span><h2 className="mb-2 text-xl">Find your best Online MBA university</h2><p className="mb-5 text-xs leading-relaxed">Share your details and let our advisors help you explore your options.</p><LeadForm presetCourse={mba} /></div>
      </div>
    </section>
    <section id="programs" className={`${container} scroll-mt-24 py-12`}><CoursePrograms /></section>
    <nav aria-label="Course sections" className="sticky top-[76px] z-30 border-y border-line bg-white/95 backdrop-blur"><div className={`${container} flex gap-2 overflow-x-auto py-3`}>{sections.map(([id, label]) => <a key={id} href={`#${id}`} className="shrink-0 rounded-full px-4 py-2 text-xs font-medium text-ink transition hover:bg-tint hover:text-blue focus:bg-tint">{label}</a>)}</div></nav>
    <div className={`${container} grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_280px]`}>
      <div className="min-w-0 space-y-10 text-sm leading-7">
        <Section id="overview" title="Online MBA Course"><p>An Online MBA combines core management subjects with digital learning. Live sessions, recorded lectures, assignments and case studies help you develop practical business skills while continuing your professional journey.</p><h3 className="mt-6 mb-4 text-lg">Key highlights of an Online MBA</h3><ul className="grid gap-3 sm:grid-cols-2">{["Study from anywhere with live and recorded classes", "Explore finance, marketing, HR, analytics and more", "Access digital learning resources and discussion forums", "Learn through business case studies and projects", "Build leadership and strategic thinking skills", "Explore career support offered by your university"].map((text) => <li key={text} className="flex gap-3 rounded-xl border border-line bg-page p-4"><span className="font-bold text-blue">✓</span>{text}</li>)}</ul></Section>
        <Section id="eligibility" title="Eligibility and Duration"><div className="mb-5 grid gap-3 sm:grid-cols-3">{[["2 years", "Typical program length"], ["Graduation", "Recognised bachelor's degree"], ["University-specific", "Marks & admission criteria"]].map(([value, label]) => <div key={label} className="rounded-xl bg-tint p-4"><p className="font-semibold text-blue">{value}</p><p className="text-xs">{label}</p></div>)}</div><p>Many universities require around 50% in graduation, with category relaxations where applicable. Minimum marks, work experience, selection requirements and the maximum completion period vary by program.</p><LeadTriggerButton course={mba} className={`${btnPrimary} mt-5`}>Check My Eligibility</LeadTriggerButton><div className="mt-6 rounded-brand bg-navy p-6 text-white"><h3 className="mb-2 text-lg text-white">Documents to keep ready</h3><p className="mb-4 text-xs text-white/75">The exact document list depends on your university.</p><ul className="grid gap-2 text-xs sm:grid-cols-2">{["Class 10 and 12 marksheets", "Graduation marksheets and degree", "Valid photo identity proof", "Recent photograph and signature", "Category certificate, if applicable", "Work experience proof, if required"].map((text) => <li key={text}>✓ {text}</li>)}</ul></div></Section>
        <Section id="syllabus" title="Online MBA Syllabus"><p className="mb-5">A typical curriculum builds business fundamentals before moving into electives and applied projects. Subjects differ by university and specialization.</p><div className="space-y-3">{semesters.map((subjects, index) => <details key={index} open={index === 0} className="group rounded-xl border border-line p-5"><summary className="cursor-pointer font-semibold text-ink">Semester {index + 1}</summary><ul className="mt-3 grid list-inside list-disc gap-1 text-xs sm:grid-cols-2">{subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul></details>)}</div></Section>
        <Section id="fees" title="Online MBA Program Fees"><p className="mb-5">Compare the complete cost, including tuition, registration and examination charges. Scholarships and instalment plans depend on the university and intake.</p><div className="overflow-x-auto rounded-xl border border-line"><table className="w-full min-w-[450px] text-left text-xs"><thead className="bg-tint text-navy"><tr><th className="p-4">University</th><th className="p-4">Duration</th><th className="p-4">Current fees</th></tr></thead><tbody>{MBA_PROGRAMS.map((program) => <tr key={program.university} className="border-t border-line"><th className="p-4 font-medium text-ink">{program.university}</th><td className="p-4">2 years</td><td className="p-4"><LeadTriggerButton course={mba} className="cursor-pointer font-semibold text-blue underline">Ask counsellor</LeadTriggerButton></td></tr>)}</tbody></table></div></Section>
        <Section id="admission" title="Your Admission Journey"><p className="mb-5">From exploring your options to starting your first class, take it one step at a time.</p><ol className="grid gap-3 sm:grid-cols-2">{[["Compare programs", "Shortlist universities that fit your goals and budget."], ["Check eligibility", "Review the university's current admission criteria."], ["Submit your application", "Complete the official form and upload your documents."], ["Pay university fees", "Use the university's official payment channel."], ["Start learning", "Receive confirmation and access your learning platform."]].map(([title, text], index) => <li key={title} className="rounded-xl border border-line p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-tint font-semibold text-blue">{index + 1}</span><h3 className="mb-1 text-sm">{title}</h3><p className="text-xs">{text}</p></li>)}</ol></Section>
        <Section id="specializations" title="Find Your Specialization"><p className="mb-5">Choose an area that connects your strengths with the career you want. Available specializations vary by university.</p><div className="grid gap-3 sm:grid-cols-2">{specializations.map(([title, text]) => <div key={title} className="rounded-xl border border-line p-5"><h3 className="mb-2 text-sm">MBA in {title}</h3><p className="text-xs">{text}</p></div>)}</div></Section>
        <Section id="approvals" title="Approvals and Recognition"><p>Before enrolling, check the specific university, Online MBA program and admission session on the official UGC-DEB portal. University accreditation and rankings provide additional context; confirm the program's current entitlement separately.</p><div className="mt-5 rounded-xl border border-line bg-page p-5"><h3 className="mb-3 text-base">What to verify</h3><ul className="list-inside list-disc space-y-2"><li>University and program entitlement for your admission session</li><li>Published eligibility, assessment and examination policies</li><li>Total fees, refund policy and official payment details</li><li>Any campus attendance or immersion requirements</li></ul></div></Section>
        <Section id="worth" title="Is an Online MBA Right for You?"><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-xl bg-tint p-5"><h3 className="mb-3 text-base">A good fit when…</h3><ul className="list-inside list-disc space-y-2"><li>You want to study alongside your job.</li><li>You prefer flexible digital learning.</li><li>You have a clear management career goal.</li></ul></div><div className="rounded-xl border border-line p-5"><h3 className="mb-3 text-base">Consider carefully when…</h3><ul className="list-inside list-disc space-y-2"><li>You want daily campus interaction.</li><li>You need a highly structured classroom routine.</li><li>You expect guaranteed placement.</li></ul></div></div><p className="mt-4 rounded-lg border-l-4 border-blue bg-page p-4 text-xs">Career support varies by institution. Placement assistance does not guarantee a job or salary increase.</p></Section>
        <Section id="career" title="Career Scope After an Online MBA"><p className="mb-5">An MBA can support a move toward business and management roles. Your experience, specialization and demonstrated skills shape the opportunities available.</p><div className="grid gap-3 sm:grid-cols-2">{[["Business & Analytics", "Business analyst · Strategy associate"], ["Marketing & Sales", "Brand manager · Marketing manager"], ["Finance", "Financial analyst · Finance manager"], ["People & Operations", "HR manager · Operations manager"]].map(([title, text]) => <div key={title} className="rounded-xl border border-line p-5"><h3 className="mb-2 text-sm">{title}</h3><p className="text-xs">{text}</p></div>)}</div></Section>
        <Section id="faq" title="Let's Clear Up Some Doubts"><div>{faqs.map(([question, answer]) => <details key={question} className="group border-b border-line py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">{question}<span aria-hidden="true" className="text-xl font-normal text-blue group-open:rotate-45">+</span></summary><p className="mt-3 text-sm">{answer}</p></details>)}</div></Section>
      </div>
      <aside className="hidden lg:block"><div className="sticky top-44 space-y-5"><div className={panel}><p className="mb-4 text-xs font-semibold tracking-wide text-blue">AT A GLANCE</p><h2 className="mb-4 text-xl">Online MBA</h2><dl className="space-y-4 text-xs">{[["Duration", "Typically 2 years"], ["Qualification", "Postgraduate degree"], ["Eligibility", "Bachelor's degree"], ["Learning mode", "Online"], ["Admission", "University-specific"]].map(([term, description]) => <div key={term} className="flex justify-between gap-3 border-b border-line pb-3"><dt>{term}</dt><dd className="text-right font-medium text-ink">{description}</dd></div>)}</dl></div><div className={`${panel} bg-tint`}><h3 className="mb-2 text-lg">A little guidance goes a long way.</h3><p className="mb-5 text-xs leading-6">Get help shortlisting universities for your goals, schedule and budget.</p><LeadTriggerButton course={mba} className={`${btnPrimary} w-full`}>Get Free Counselling</LeadTriggerButton><Link href="/contact-us" className="mt-4 block text-center text-xs font-medium text-blue">Contact our team →</Link></div></div></aside>
    </div>
    <section className="bg-[linear-gradient(110deg,#0A2A5E,#0B63D6)] px-6 py-14 text-center text-white"><p className="mb-3 text-xs font-medium tracking-widest text-white/75">TAKE THE NEXT STEP</p><h2 className="mb-4 text-3xl text-white">Your ambition. Your pace. Your MBA.</h2><p className="mx-auto mb-7 max-w-xl text-sm text-white/85">Compare, shortlist and apply with guidance from our education advisors.</p><LeadTriggerButton course={mba} className={btnLight}>Get Free Counselling <span aria-hidden="true">→</span></LeadTriggerButton></section>
  </div>;
}
