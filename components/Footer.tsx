"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoWhite from "@/public/logo-white.png";

const linkHover = "hover:text-white";
const h4Cls = "mb-3.5 text-sm text-white";
const ulCls = "grid list-none gap-[9px] text-[13px]";

type LegalKey = "disclaimer" | "privacy" | "terms";

// Content blocks for the legal modals. Text is the exact approved copy —
// "**bold**" spans are rendered as <strong>, "h" blocks as sub-headings and
// "ul" blocks as bullet lists, so the wording is verbatim while the markdown
// syntax itself renders as real HTML instead of literal asterisks/hashes.
type LegalBlock = { type: "p"; text: string } | { type: "h"; text: string } | { type: "ul"; items: string[] };

const LEGAL_CONTENT: Record<LegalKey, { title: string; blocks: LegalBlock[] }> = {
  disclaimer: {
    title: "Disclaimer",
    blocks: [
      {
        type: "p",
        text: 'Please read this Disclaimer carefully before using DistanceEducationLearning.com ("Platform," "we," "us"). By using this website, you agree to be bound by it.',
      },
      { type: "h", text: "1. General Information Only" },
      {
        type: "p",
        text: "We are an **independent educational counselling platform — not a university, admission authority, or regulatory body.** We do not issue degrees, diplomas, mark sheets, or admission letters on behalf of any institution. All course details, fees, eligibility, duration, and accreditation status on this website are compiled from public sources and university partners, for **general informational purposes only.**",
      },
      { type: "h", text: "2. No Guarantee of Accuracy" },
      {
        type: "p",
        text: "University policies, fees, eligibility criteria, and approval status (UGC-DEB/AICTE/NAAC) can change without notice. **We strongly recommend verifying all details directly on the official university website or the UGC-DEB portal (deb.ugc.ac.in) before making any admission or payment decision.**",
      },
      { type: "h", text: "3. No Guarantee of Admission, Placement, or Outcomes" },
      {
        type: "p",
        text: "We do not guarantee admission to any course. Salary figures, placement percentages, or hiring-partner names are indicative and sourced from third parties — they **do not guarantee employment or career outcomes.** Results depend on the student's own effort and the university's own processes.",
      },
      { type: "h", text: "4. Third-Party Trademarks" },
      {
        type: "p",
        text: "All university names, logos, and trademarks belong to their respective owners and are used only for informational purposes. Their use does **not** imply an official partnership or endorsement unless explicitly stated.",
      },
      { type: "h", text: "5. No Financial or Legal Advice" },
      {
        type: "p",
        text: "Information about fees, EMIs, or scholarships is general guidance only, not financial or legal advice. Consult the university or a qualified professional before making financial commitments.",
      },
      { type: "h", text: "6. External Links" },
      {
        type: "p",
        text: "We are not responsible for the content, accuracy, or privacy practices of any third-party website linked from this Platform. Access is at your own risk.",
      },
      { type: "h", text: "7. No Fee for Counselling" },
      {
        type: "p",
        text: "We do **not charge students for counselling** and do **not collect university fees directly.** All payments must go through the university's official channels. We are not responsible for payments made to unauthorised parties.",
      },
      { type: "h", text: "8. Limitation of Liability" },
      {
        type: "p",
        text: "To the fullest extent permitted by law, we are not liable for any damages arising from reliance on this website's information, counselling provided, or errors/omissions in content.",
      },
      { type: "h", text: "9. Errors & Omissions Excepted (E&OE)" },
      {
        type: "p",
        text: "This website may contain typographical errors or outdated details. We reserve the right to correct these at any time without liability.",
      },
      { type: "h", text: "10. Changes" },
      {
        type: "p",
        text: "We may update this Disclaimer at any time. Continued use of the website constitutes acceptance of the revised version.",
      },
      { type: "h", text: "11. Contact Us" },
      { type: "p", text: "Email: info@distanceeducationlearning.com" },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    blocks: [
      {
        type: "p",
        text: 'DistanceEducationLearning.com ("we," "us," "our") is an educational counselling platform that helps students and working professionals find UGC-DEB approved online and distance UG/PG degree programs. This Privacy Policy explains how we collect, use, and protect your personal data, in accordance with the Information Technology Act, 2000, the IT (Reasonable Security Practices) Rules, 2011, and the Digital Personal Data Protection Act, 2023.',
      },
      {
        type: "p",
        text: "By using this website, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Platform.",
      },
      { type: "h", text: "1. Who We Are" },
      {
        type: "p",
        text: "We are an independent counselling and information platform — **not a university, degree-granting body, or admission authority.** We do not issue degrees, mark sheets, or certificates.",
      },
      { type: "h", text: "2. Information We Collect" },
      {
        type: "ul",
        items: [
          "**Provided by you:** Name, email, phone/WhatsApp number, educational qualification, city, and course preference shared via enquiry forms or with our counsellors.",
          "**Collected automatically:** IP address, browser/device type, pages visited, approximate location, and cookies.",
        ],
      },
      {
        type: "p",
        text: "We do not knowingly collect sensitive data such as financial credentials, biometric data, or health information.",
      },
      { type: "h", text: "3. How We Use Your Information" },
      {
        type: "p",
        text: "To respond to enquiries, provide counselling, share admission updates via call/SMS/WhatsApp/email, improve the website, and meet legal requirements. We do not use your data for automated decision-making.",
      },
      { type: "h", text: "4. Legal Basis" },
      {
        type: "p",
        text: "We process your data based on your **consent**, given when you submit a form or contact us. You may withdraw consent anytime by writing to us.",
      },
      { type: "h", text: "5. How We Share Your Information" },
      { type: "p", text: "We **never sell** your data. We may share it only:" },
      {
        type: "ul",
        items: [
          "With university partners, solely to process your enquiry, and only with your consent",
          "With service providers (telephony, WhatsApp, email, CRM) under confidentiality obligations",
          "When legally required by a court or government authority",
          "As part of a business transfer, with equivalent privacy protections",
        ],
      },
      { type: "p", text: "We do not share data with advertisers or data brokers." },
      { type: "h", text: "6. Cookies" },
      {
        type: "p",
        text: "We use cookies to remember preferences and understand site usage. They do not identify you personally. You can disable cookies in your browser, though some features may not work as intended.",
      },
      { type: "h", text: "7. Data Retention" },
      {
        type: "p",
        text: "We retain your data only as long as necessary for the purposes above, then securely delete or anonymise it.",
      },
      { type: "h", text: "8. Data Security" },
      {
        type: "p",
        text: "We use reasonable technical and organisational safeguards to protect your data, though no method of transmission is 100% secure.",
      },
      { type: "h", text: "9. Your Rights" },
      {
        type: "p",
        text: "You may **access, correct, or request deletion** of your data, **withdraw consent**, or **opt out** of communication at any time by contacting us.",
      },
      { type: "h", text: "10. Children's Privacy" },
      {
        type: "p",
        text: "Our services are meant for individuals 18+, or minors with parent/guardian involvement. We do not knowingly collect data from children without appropriate consent.",
      },
      { type: "h", text: "11. Third-Party Links" },
      {
        type: "p",
        text: "This website may link to official university sites or payment gateways. We are not responsible for their content or privacy practices.",
      },
      { type: "h", text: "12. Grievance Officer & Contact" },
      {
        type: "p",
        text: "For privacy concerns or requests, write to us at info@distanceeducationlearning.com. We aim to resolve valid grievances within 30 days.",
      },
      { type: "h", text: "13. Changes to This Policy" },
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time. Continued use of the website after changes constitutes acceptance of the revised policy.",
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    blocks: [
      {
        type: "p",
        text: 'These Terms govern your use of www.distanceeducationlearning.com ("Platform," "we," "us"), an independent counselling service for UGC-DEB approved online and distance education programs. By using this website, you agree to be bound by these Terms.',
      },
      { type: "h", text: "1. Our Role" },
      {
        type: "p",
        text: "We are a **counselling and information platform only — not a university, admission authority, or accrediting body.** We cannot admit students, issue degrees, or guarantee admission outcomes.",
      },
      { type: "h", text: "2. Eligibility" },
      {
        type: "p",
        text: "By using this website, you confirm you are 18+ (or accessing with parent/guardian consent), have the legal capacity to agree to these Terms, and that any information you provide is accurate.",
      },
      { type: "h", text: "3. Acceptable Use" },
      { type: "p", text: "You agree not to:" },
      {
        type: "ul",
        items: [
          "Post unlawful, defamatory, obscene, or fraudulent content",
          "Attempt unauthorised access to the website or its systems",
          "Scrape or extract data using bots/crawlers without our consent",
          "Impersonate any person or misrepresent your affiliation",
          "Upload viruses, malware, or harmful code",
        ],
      },
      { type: "p", text: "We may restrict or terminate access for any violation of these Terms." },
      { type: "h", text: "4. Nature of Services" },
      {
        type: "p",
        text: "Our counselling and guidance is **free of charge**. We do not collect university tuition, admission, or exam fees — all payments go directly to the respective university. Fee details we share are based on university inputs and **subject to change without notice**; please verify before paying.",
      },
      { type: "h", text: "5. Accuracy of Information" },
      {
        type: "p",
        text: "We aim to keep course information accurate and current but do not warrant it is error-free or continuously updated. See our Disclaimer for details.",
      },
      { type: "h", text: "6. Intellectual Property" },
      {
        type: "p",
        text: "All website content (text, graphics, logos, design) belongs to DistanceEducationLearning.com or its licensors, except third-party university names/logos, which remain their owners' property. You may view or print content for personal, non-commercial use only; reproduction or distribution requires our written permission.",
      },
      { type: "h", text: "7. User-Submitted Information" },
      {
        type: "p",
        text: "Submitting an enquiry means you consent to being contacted via call, SMS, WhatsApp, or email regarding it, per our Privacy Policy. You may opt out anytime.",
      },
      { type: "h", text: "8. Third-Party Links & Payments" },
      {
        type: "p",
        text: "Links to official university portals or payment gateways are for convenience only. We are not responsible for their content, security, or your transactions with them.",
      },
      { type: "h", text: "9. Unauthorised Transactions" },
      {
        type: "p",
        text: "Report any suspicious transaction claiming to be linked to our brand immediately. We are not liable for losses from payments made to unauthorised third parties impersonating us.",
      },
      { type: "h", text: "10. Limitation of Liability" },
      {
        type: "p",
        text: "To the fullest extent permitted by law, we are not liable for damages arising from your use of this website, reliance on counselling or third-party content, or admission/payment decisions made based on it.",
      },
      { type: "h", text: "11. Indemnity" },
      {
        type: "p",
        text: "You agree to indemnify us against any claims or losses arising from your violation of these Terms or misuse of the website.",
      },
      { type: "h", text: "12. Governing Law" },
      {
        type: "p",
        text: "These Terms are governed by the laws of India, subject to the exclusive jurisdiction of the competent courts.",
      },
      { type: "h", text: "13. Changes" },
      {
        type: "p",
        text: "We may revise these Terms at any time. Continued use of the website after changes constitutes acceptance.",
      },
      { type: "h", text: "14. Severability" },
      { type: "p", text: "If any provision is found invalid, the remaining provisions continue in full force." },
      { type: "h", text: "15. Contact Us" },
      { type: "p", text: "Email: info@distanceeducationlearning.com" },
    ],
  },
};

function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((chunk, i) => (i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk));
}

function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "h") {
          return (
            <h4 key={i} className="mt-5 mb-1.5 text-sm font-semibold text-ink first:mt-0">
              {block.text}
            </h4>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mb-3 ml-4 list-disc space-y-1">
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mb-3 last:mb-0">
            {renderInline(block.text)}
          </p>
        );
      })}
    </>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [openLegal, setOpenLegal] = useState<LegalKey | null>(null);

  return (
    <footer className="bg-navy text-white/72">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr] gap-[34px] px-6 pt-11 pb-[34px] max-[980px]:grid-cols-2 max-[980px]:gap-7 max-[620px]:grid-cols-1">
        <div>
          <Image src={logoWhite} alt="Distance Education Learning" width={200} height={44} className="mb-3.5 h-11 w-auto" />
          <p className="max-w-[250px] text-[13px]">Empowering learners worldwide with quality education and flexible learning solutions for a better future.</p>
          {/* <div className="mt-[18px] flex gap-[10px]">
            <a className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-white/12 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue" href="#" aria-label="Facebook">
              <svg className="h-[15px] w-[15px] fill-white" viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8z"/></svg>
            </a>
            <a className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-white/12 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue" href="#" aria-label="X">
              <svg className="h-[15px] w-[15px] fill-white" viewBox="0 0 24 24"><path d="M17.5 3h3l-6.6 7.6L21.8 21h-5.9l-4.3-5.6L6.5 21h-3l7-8.1L2.5 3h6l3.9 5.2zm-1.1 16.2h1.7L7.7 4.7H5.9z"/></svg>
            </a>
            <a className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-white/12 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue" href="#" aria-label="LinkedIn">
              <svg className="h-[15px] w-[15px] fill-white" viewBox="0 0 24 24"><path d="M6.9 20H3.8V9.5h3.1zM5.3 8.1a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM20.2 20h-3.1v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H10.3V9.5h3v1.4h.05c.42-.8 1.45-1.65 2.98-1.65 3.2 0 3.8 2.1 3.8 4.8z"/></svg>
            </a>
            <a className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-white/12 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue" href="#" aria-label="YouTube">
              <svg className="h-[15px] w-[15px] fill-white" viewBox="0 0 24 24"><path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.75-1.75C18.35 5.15 12 5.15 12 5.15s-6.35 0-7.85.4A2.5 2.5 0 002.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 001.75 1.75c1.5.4 7.85.4 7.85.4s6.35 0 7.85-.4a2.5 2.5 0 001.75-1.75C22 15.2 22 12 22 12zM10 15.1V8.9l5.2 3.1z"/></svg>
            </a>
            <a className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-white/12 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue" href="#" aria-label="Instagram">
              <svg className="h-[15px] w-[15px] fill-white" viewBox="0 0 24 24"><path d="M12 7.4a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm0 7.6a3 3 0 110-6 3 3 0 010 6zm5.9-7.8a1.07 1.07 0 11-2.14 0 1.07 1.07 0 012.14 0zM21 8c-.05-1.45-.38-2.73-1.44-3.79S17.22 2.83 15.77 2.76C14.28 2.68 9.72 2.68 8.23 2.76c-1.45.06-2.73.38-3.79 1.44S2.83 6.55 2.76 8c-.08 1.49-.08 6.05 0 7.54.06 1.45.38 2.73 1.44 3.79s2.34 1.38 3.79 1.45c1.49.08 6.05.08 7.54 0 1.45-.06 2.73-.38 3.79-1.45s1.38-2.34 1.45-3.79c.08-1.49.08-6.04 0-7.53zm-1.9 9.1a3.03 3.03 0 01-1.71 1.71c-1.18.47-3.98.36-5.29.36s-4.11.1-5.29-.36a3.03 3.03 0 01-1.71-1.71c-.47-1.18-.36-3.98-.36-5.29s-.1-4.11.36-5.29a3.03 3.03 0 011.71-1.71c1.18-.47 3.98-.36 5.29-.36s4.11-.1 5.29.36a3.03 3.03 0 011.71 1.71c.47 1.18.36 3.98.36 5.29s.11 4.11-.36 5.29z"/></svg>
            </a>
          </div> */}
        </div>

        <div>
          <h4 className={h4Cls}>Top Universities</h4>
          <ul className={ulCls}>
            <li>
              <Link className={linkHover} href="/#universities">
                Amity University Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                Manipal University Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                LPU Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                VGU Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                NMIMS Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                UPES Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                JAIN Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                Chandigarh University Online
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#universities">
                Sharda University Online
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={h4Cls}>Online Programs</h4>

          <ul className={ulCls}>
            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – Amity University
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – Manipal University
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – LPU
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – VGU
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – NMIMS
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – UPES
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – JAIN
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – Chandigarh University
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#courses">
                Online MBA – Sharda University
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={h4Cls}>Get Started</h4>

          <ul className={ulCls}>
            <li>
              <Link className={linkHover} href="/#about">
                About Us
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="#contact">
                Contact Us
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="#contact">
                Book Free Counseling
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/#faq">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact">
          <h4 className={h4Cls}>Contact Us</h4>
          <ul className={`${ulCls} gap-3.5`}>
            <li className="flex items-start gap-[9px]">
              <svg className="mt-1 h-[15px] w-[15px] flex-none stroke-blue fill-none [stroke-width:1.8]" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5L12 12.5l8.5-6" /></svg>
              <a className={linkHover} href="mailto:info@distanceeducationlearningcom">info@distanceeducationlearning.com</a>
            </li>
            <li className="flex items-start gap-[9px]">
              <svg className="mt-1 h-[15px] w-[15px] flex-none stroke-blue fill-none [stroke-width:1.8]" viewBox="0 0 24 24"><path d="M5 4h3.5l1.6 4-2.3 1.4a12 12 0 005.8 5.8l1.4-2.3 4 1.6V18a2 2 0 01-2.2 2A16 16 0 013 6.2 2 2 0 015 4z" /></svg>
              <a className={linkHover} href="tel:+919217310430">+91 9217310430</a>
            </li>
            <li className="flex items-start gap-[9px]">
              <svg className="mt-1 h-[15px] w-[15px] flex-none stroke-blue fill-none [stroke-width:1.8]" viewBox="0 0 24 24"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              <span>C-1/13-A, Yamuna vihar, <br/> new Delhi, shahdara delhi- 110053</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 border-t border-white/12 px-6 py-4 text-xs max-[620px]:flex-col max-[620px]:text-center">
        <span>&copy; <span data-year>{year}</span> Distance Education Learning. All Rights Reserved.</span>
        <nav className="flex gap-[22px]" aria-label="Legal">
          <button type="button" className={`${linkHover} cursor-pointer`} onClick={() => setOpenLegal("disclaimer")}>Disclaimer</button>
          <button type="button" className={`${linkHover} cursor-pointer`} onClick={() => setOpenLegal("privacy")}>Privacy Policy</button>
          <button type="button" className={`${linkHover} cursor-pointer`} onClick={() => setOpenLegal("terms")}>Terms and Conditions</button>
        </nav>
      </div>

      {openLegal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/70 p-4 sm:p-6"
          onClick={() => setOpenLegal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-brand bg-white text-ink shadow-brand-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h3 id="legal-modal-title" className="text-base font-semibold text-ink">
                {LEGAL_CONTENT[openLegal].title}
              </h3>
              <button
                type="button"
                aria-label="Close"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-body transition-colors duration-150 hover:bg-tint hover:text-ink"
                onClick={() => setOpenLegal(null)}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5 text-sm leading-[1.7] text-body">
              <LegalBlocks blocks={LEGAL_CONTENT[openLegal].blocks} />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
