import type { ReactNode } from "react";

export type LegalKey = "disclaimer" | "privacy" | "terms";

// Content blocks for the legal content. Text is the exact approved copy —
// "**bold**" spans are rendered as <strong>, "h" blocks as sub-headings and
// "ul" blocks as bullet lists, so the wording is verbatim while the markdown
// syntax itself renders as real HTML instead of literal asterisks/hashes.
export type LegalBlock = { type: "p"; text: string } | { type: "h"; text: string } | { type: "ul"; items: string[] };

// Where the full standalone page for each legal document lives.
export const LEGAL_ROUTES: Record<LegalKey, string> = {
  disclaimer: "/disclaimer",
  privacy: "/privacy-policy",
  terms: "/terms-and-conditions",
};

export const LEGAL_CONTENT: Record<LegalKey, { title: string; blocks: LegalBlock[] }> = {
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

export function renderInline(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((chunk, i) => (i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk));
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
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

// Full standalone page rendering for a legal document, shared by /disclaimer,
// /privacy-policy and /terms-and-conditions so the copy is defined once.
export function LegalPageContent({ legalKey }: { legalKey: LegalKey }) {
  const { title, blocks } = LEGAL_CONTENT[legalKey];
  return (
    <section className="mx-auto max-w-[820px] px-6 py-16 max-[620px]:py-10">
      <h1 className="mb-6 text-[30px] max-[620px]:text-2xl">{title}</h1>
      <div className="text-sm leading-[1.7] text-body sm:text-[15px]">
        <LegalBlocks blocks={blocks} />
      </div>
    </section>
  );
}
