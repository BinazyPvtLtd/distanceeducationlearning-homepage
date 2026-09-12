import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Distance Education Learning",
  description: "Contact Distance Education Learning for free counselling and guidance on online and distance degree programmes.",
  alternates: {
    canonical: "https://www.distanceeducationlearning.com/contact-us",
  },
};

const benefits = [
  "Personalised guidance for your education goals",
  "Help comparing universities and programmes",
  "Eligibility checks and transparent fee guidance",
  "Free counselling for students and working professionals",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/distance_edu_learning/",
    color: "bg-[linear-gradient(135deg,#F9CE34,#EE2A7B,#6228D7)]",
    path: "M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-3.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1HWwVCo7v9/",
    color: "bg-blue",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@DistanceEducationLearning",
    color: "bg-[#FF0000]",
    path: "M22 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.75-1.75C18.35 5.15 12 5.15 12 5.15s-6.35 0-7.85.4A2.5 2.5 0 002.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 001.75 1.75c1.5.4 7.85.4 7.85.4s6.35 0 7.85-.4a2.5 2.5 0 001.75-1.75C22 15.2 22 12 22 12zM10 15.1V8.9l5.2 3.1z",
  },
];

export default function ContactUsPage() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-12 sm:py-16">
      <h1 className="mb-10 text-center text-[36px] max-[620px]:text-[28px]">Contact Us</h1>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 rounded-3xl bg-white p-6 shadow-brand sm:p-8 lg:p-10">
          <h2 className="sr-only">Send an enquiry</h2>
          <LeadForm variant="contact" />
        </div>

        <div className="min-w-0 space-y-8">
          <div>
            <h2 className="mb-6 text-xl">What you get with us</h2>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-[15px]">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.1V12a9 9 0 1 1-5.3-8.2" />
                    <path d="m21 4-9 9-3-3" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
            <h2 className="mb-4 flex items-center gap-3 text-lg">
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Office Address
            </h2>
            <address className="text-[15px] leading-7 not-italic">
              C-1/13-A, Yamuna Vihar, New Delhi, Shahdara, Delhi – 110053
            </address>
            <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
              <p><span className="font-medium text-ink">Email: </span><a className="break-all hover:text-blue" href="mailto:info@distanceeducationlearning.com">info@distanceeducationlearning.com</a></p>
              <p><span className="font-medium text-ink">Phone: </span><a className="hover:text-blue" href="tel:+919217310430">+91 9217310430</a></p>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
            <h2 className="mb-3 text-xs font-semibold tracking-[0.2em] text-body uppercase">Social Media</h2>
            <p className="mb-5 text-sm">Stay connected with Distance Education Learning.</p>
            <nav className="flex flex-wrap gap-3" aria-label="Contact page social media">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition-colors hover:border-blue hover:text-blue">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-white ${social.color}`}>
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d={social.path} fillRule="evenodd" clipRule="evenodd" /></svg>
                  </span>
                  {social.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
