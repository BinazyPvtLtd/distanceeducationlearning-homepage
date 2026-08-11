"use client";

import { useEffect } from "react";
import { observeReveals } from "@/lib/reveal";
import { btnPrimary, btnSm } from "@/lib/styles";
import { LEAD_COURSES } from "@/lib/data";
import { useLeadModal } from "./LeadModalContext";

// Every card below is an online MBA programme, so "Apply Now" preselects the
// verified "Online MBA" record from the courses API (id 15) rather than
// leaving the course field empty.
const MBA_COURSE = LEAD_COURSES.find((c) => c.label === "Online MBA")!;

const COURSES = [
  {
    title: "Master of Business Administration",
    university: "Amity University Online",
    img: "https://images.pexels.com/photos/36766687/pexels-photo-36766687.jpeg",
    logo: "/assets/img/amity-logo.webp",
    description:
      "UGC-DEB-entitled, NAAC A+ accredited, and QS-ranked online MBA offering 12+ specializations with real-world case studies and an AI certification add-on.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree with minimum 50% marks (45% marks Reserved Category)",
  },

  {
    title: "Master of Business Administration",
    university: "Manipal University Online (MUJ / MAHE / SMU)",
    img: "https://images.pexels.com/photos/9301305/pexels-photo-9301305.jpeg",
    logo: "/assets/img/manipal-logo.webp",
    description:
      "UGC-DEB entitled program across three Manipal campuses with no entrance exam, weekend live classes, and strong industry hiring tie-ups.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree with min. 50% marks (45% reserved category); 1 yr work experience preferred at MAHE",
  },

  {
    title: "Master of Business Administration",
    university: "Lovely Professional University (LPU) Online",
    img: "https://images.pexels.com/photos/6476264/pexels-photo-6476264.jpeg",
    logo: "/assets/img/lpu-logo.webp",
    description:
      "UGC-DEB and AICTE approved, NAAC A++ accredited MBA with 9+ specializations and WES recognition for global equivalency.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree with min. 50% marks (45% reserved category)",
  },

  {
    title: "Master of Business Administration",
    university: "Vivekananda Global University (VGU) Online",
    img: "https://images.pexels.com/photos/8199160/pexels-photo-8199160.jpeg",
    logo: "/assets/img/vgu-logo.webp",
    description:
      "NAAC A+ accredited, UGC-recognized MBA with 8 industry-specific specializations including Agribusiness and Healthcare Management.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree in any discipline from a recognized university with 50% marks",
  },

  {
    title: "Master of Business Administration (Online MBA)",
    university: "NMIMS Online (CDOE)",
    img: "https://images.pexels.com/photos/7163395/pexels-photo-7163395.jpeg",
    logo: "/assets/img/nmims-logo.webp",
    description:
      "UGC-DEB approved, NAAC A++ (Category I) MBA from a top-ranked B-school with semester-wise on-campus Connect+ immersions.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree with min. 50% marks (45% reserved category)",
  },

  {
    title: "Master of Business Administration (Online MBA)",
    university: "UPES Online",
    img: "https://images.pexels.com/photos/7693683/pexels-photo-7693683.jpeg",
    logo: "/assets/img/upes-logo.webp",
    description:
      "UGC-DEB, AICTE and NBA approved MBA with 11+ specializations including niche options like Oil & Gas and Power Management.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree with min. 50% marks",
  },

  {
    title: "Master of Business Administration (Online MBA)",
    university: "JAIN (Deemed-to-be University) Online",
    img: "https://images.pexels.com/photos/7988215/pexels-photo-7988215.jpeg",
    logo: "/assets/img/jain-logo.webp",
    description:
      "UGC-DEB, AICTE approved, NAAC A++ accredited MBA offering 20+ specializations including International Finance (ACCA-aligned).",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree with min. 50% marks (45% for Reserved Category)",
  },

  {
    title: "Master of Business Administration (Online MBA)",
    university: "Chandigarh University Online",
    img: "https://images.pexels.com/photos/8133870/pexels-photo-8133870.jpeg",
    logo: "/assets/img/chandigarh-logo.webp",
    description:
      "UGC-DEB entitled, NAAC A+ MBA with dual-specialization options and add-on certifications from PwC, PMI, and Harvard Business Publishing.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree from a recognized university with 50% marks.",
  },

  {
    title: "Master of Business Administration (Online MBA)",
    university: "Sharda University Online",
    img: "https://images.pexels.com/photos/17558054/pexels-photo-17558054.jpeg",
    logo: "/assets/img/sharda-logo.webp",
    description:
      "UGC-DEB, NBA approved, NAAC A+ MBA offering specializations like Finance, HR, Healthcare, and Data Science.",
    duration: "2 Years (4 Semesters)",
    eligibility:
      "Bachelor's Degree with min. 50% marks (45% Reserved Category)",
  },
];

const revealCls =
  "opacity-0 translate-y-[18px] transition-[opacity,transform] duration-500 ease-out [&.in]:opacity-100 [&.in]:translate-y-0";

export default function CourseGrid() {
  const { openLeadModal } = useLeadModal();

  useEffect(() => {
    observeReveals();
  }, []);

  return (
    <div
      id="courseGrid"
      className="grid grid-cols-3 gap-[26px] max-[980px]:grid-cols-2 max-[620px]:grid-cols-1"
    >
      {COURSES.map((course) => (
        <article
          key={course.university}
          className={`reveal flex flex-col overflow-hidden rounded-brand border border-line bg-white shadow-brand transition-[transform,box-shadow] duration-200 hover:-translate-y-[5px] hover:shadow-brand-lg ${revealCls}`}
        >
          {/* =========================================
              COURSE IMAGE + UNIVERSITY LOGO
          ========================================== */}
          <div className="relative">
            {/* Professional Course Image */}
            <div className="relative aspect-video overflow-hidden bg-navy">
              <img
                src={course.img}
                alt={`${course.university} ${course.title}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(10,42,94,0.20),rgba(24,119,242,0.08))]" />
            </div>

            {/* University Logo */}
            <div className="absolute bottom-[-36px] left-[20px] flex h-[72px] min-w-[145px] items-center justify-center rounded-xl border border-line bg-white  shadow-lg">
              <img
                src={course.logo}
                alt={`${course.university} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* =========================================
              CARD CONTENT
          ========================================== */}
          <div className="flex flex-1 flex-col p-[18px] pt-[50px]">
            {/* Course Title */}
            <h3 className="text-[15px] font-semibold leading-[1.4] text-ink">
              {course.title}
            </h3>

            {/* University */}
            <div className="mt-[10px] flex items-start gap-[7px] text-[13px] font-semibold text-[#B46B2C]">
              <svg
                className="mt-[1px] h-[14px] w-[14px] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 21h18" />
                <path d="M5 21V9l7-4 7 4v12" />
                <path d="M9 21v-6h6v6" />
                <path d="M9 11h.01" />
                <path d="M12 11h.01" />
                <path d="M15 11h.01" />
              </svg>

              <span>{course.university}</span>
            </div>

            {/* Description */}
            <p className="mt-[14px] text-[13px] leading-[1.6] text-body">
              {course.description}
            </p>

            {/* =========================================
                COURSE DETAILS
            ========================================== */}
            <div className="mt-[14px] border-t border-line pt-[14px]">
              {/* Duration */}
              <div className="flex items-start gap-[8px] text-[11px] leading-[1.5]">
                <span className="mt-[2px] h-[15px] w-[2px] shrink-0 rounded-full bg-[#C47A36]" />

                <span className="text-body">
                  Duration :{" "}
                  <strong className="font-semibold text-ink">
                    {course.duration}
                  </strong>
                </span>
              </div>

              {/* Eligibility */}
              <div className="mt-[6px] flex items-start gap-[8px] text-[11px] leading-[1.5]">
                <span className="mt-[2px] h-[15px] w-[2px] shrink-0 rounded-full bg-[#C47A36]" />

                <span className="text-body">
                  Eligibility :{" "}
                  <strong className="font-semibold text-ink">
                    {course.eligibility}
                  </strong>
                </span>
              </div>
            </div>

            {/* =========================================
                BUTTONS
            ========================================== */}
            <div className="mt-auto flex flex-wrap items-center gap-[10px] pt-[20px]">

              {/* Apply Now */}
              <button
                type="button"
                onClick={() => openLeadModal(MBA_COURSE)}
                className={`${btnPrimary} ${btnSm} flex-1 justify-center`}
              >
                Apply Now

                <svg
                  className="h-[14px] w-[14px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}