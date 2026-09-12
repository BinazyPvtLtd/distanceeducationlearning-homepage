"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoWhite from "@/public/logo-white.png";
import { useLeadModal } from "./LeadModalContext";
import {
  LEGAL_CONTENT,
  LEGAL_ROUTES,
  LegalBlocks,
  type LegalKey,
} from "@/lib/legalContent";

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
          <Image
            src={logoWhite}
            alt="Distance Education Learning"
            width={200}
            height={44}
            className="mb-3.5 h-11 w-auto"
          />
          <p className="max-w-[250px] text-[13px]">
            Empowering learners worldwide with quality education and flexible
            learning solutions for a better future.
          </p>
          <nav className="mt-[18px] flex gap-[10px]" aria-label="Social media">
            <a
              className="flex h-11 w-11 items-center justify-center rounded-[7px] bg-white/12 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue"
              href="https://www.instagram.com/distance_edu_learning/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              className="flex h-11 w-11 items-center justify-center rounded-[7px] bg-white/12 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue"
              href="https://www.facebook.com/share/1HWwVCo7v9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook (opens in a new tab)">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8z" />
              </svg>
            </a>
            <a
              className="flex h-11 w-11 items-center justify-center rounded-[7px] bg-white/12 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue"
              href="https://www.youtube.com/@DistanceEducationLearning"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube (opens in a new tab)">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false">
                <path
                  fillRule="evenodd"
                  d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.75-1.75C18.35 5.15 12 5.15 12 5.15s-6.35 0-7.85.4A2.5 2.5 0 002.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 001.75 1.75c1.5.4 7.85.4 7.85.4s6.35 0 7.85-.4a2.5 2.5 0 001.75-1.75C22 15.2 22 12 22 12zM10 15.1V8.9l5.2 3.1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
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
              <Link className={linkHover} href="/about-us">
                About Us
              </Link>
            </li>

            <li>
              <Link className={linkHover} href="/contact-us">
                Contact Us
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
              <svg
                className="mt-1 h-[15px] w-[15px] flex-none stroke-blue fill-none [stroke-width:1.8]"
                viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 6.5L12 12.5l8.5-6" />
              </svg>
              <a
                className={linkHover}
                href="mailto:info@distanceeducationlearningcom">
                info@distanceeducationlearning.com
              </a>
            </li>
            <li className="flex items-start gap-[9px]">
              <svg
                className="mt-1 h-[15px] w-[15px] flex-none stroke-blue fill-none [stroke-width:1.8]"
                viewBox="0 0 24 24">
                <path d="M5 4h3.5l1.6 4-2.3 1.4a12 12 0 005.8 5.8l1.4-2.3 4 1.6V18a2 2 0 01-2.2 2A16 16 0 013 6.2 2 2 0 015 4z" />
              </svg>
              <a className={linkHover} href="tel:+919217310430">
                +91 9217310430
              </a>
            </li>
            <li className="flex items-start gap-[9px]">
              <svg
                className="mt-1 h-[15px] w-[15px] flex-none stroke-blue fill-none [stroke-width:1.8]"
                viewBox="0 0 24 24">
                <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>
                C-1/13-A, Yamuna vihar, <br /> new Delhi, shahdara delhi- 110053
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 border-t border-white/12 px-6 py-4 text-xs max-[620px]:flex-col max-[620px]:text-center">
        <span>
          &copy; <span data-year>{year}</span> Distance Education Learning. All
          Rights Reserved.
        </span>
        <nav className="flex gap-[22px]" aria-label="Legal">
          <button
            type="button"
            className={`${linkHover} cursor-pointer`}
            onClick={() => setOpenLegal("disclaimer")}>
            Disclaimer
          </button>
          <button
            type="button"
            className={`${linkHover} cursor-pointer`}
            onClick={() => setOpenLegal("privacy")}>
            Privacy Policy
          </button>
          <button
            type="button"
            className={`${linkHover} cursor-pointer`}
            onClick={() => setOpenLegal("terms")}>
            Terms and Conditions
          </button>
        </nav>
      </div>

      {openLegal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/70 p-4 sm:p-6"
          onClick={() => setOpenLegal(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-brand bg-white text-ink shadow-brand-lg"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h3
                id="legal-modal-title"
                className="text-base font-semibold text-ink">
                {LEGAL_CONTENT[openLegal].title}
              </h3>
              <button
                type="button"
                aria-label="Close"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-body transition-colors duration-150 hover:bg-tint hover:text-ink"
                onClick={() => setOpenLegal(null)}>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors duration-150 hover:text-blue-strong">
                View Full Page
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    d="M9 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
