"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoWhite from "@/public/logo-white.png";
import { useLeadModal } from "./LeadModalContext";
import { LEGAL_CONTENT, LEGAL_ROUTES, LegalBlocks, type LegalKey } from "@/lib/legalContent";

const linkHover = "hover:text-white";
const h4Cls = "mb-3.5 text-sm text-white";
const ulCls = "grid list-none gap-[9px] text-[13px]";

export default function Footer() {
  const year = new Date().getFullYear();
  const [openLegal, setOpenLegal] = useState<LegalKey | null>(null);
    const { openLeadModal } = useLeadModal();

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
              <Link className={linkHover} href="/#courses">
                Courses
              </Link>
            </li>

            <li>
              <button className={linkHover} onClick={() => openLeadModal()}>
                Book Free Counseling
              </button>
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
            <div className="flex justify-end border-t border-line px-6 py-4">
              <Link
                href={LEGAL_ROUTES[openLegal]}
                onClick={() => setOpenLegal(null)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors duration-150 hover:text-blue-strong"
              >
                View Full Page
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
