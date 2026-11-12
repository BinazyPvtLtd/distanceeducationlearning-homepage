import ignouAssignmentImage from "@/public/assets/ignou-assignment-front-page.webp";
import ignouIdCardImage from "@/public/assets/ignou-id-card.webp";
import madrasMbaImage from "@/public/assets/madras-university-distance-mba.webp";
import abcIdCardImage from "@/public/assets/abc-id-card.webp";
import ignouMarksheetImage from "@/public/assets/How to Download IGNOU Marksheet Online.webp";
import aocRecruitmentImage from "@/public/assets/aoc-recruitment.webp";
import gujcetResultImage from "@/public/assets/GUJCET Result 2026 Check Result and  Scorecar.webp";
import amityStudentLoginImage from "@/public/assets/amity.webp";
import igpercentage from "@/public/assets/ignou-percentage_11zon.webp";
import openUniversitiesKolkataImage from "@/public/assets/open-universities-kolkata_11zon.webp";
import submitIgnouAssignmentImage from "@/public/assets/submit-ignou-assignment_11zon.webp";
import aktuOddSemesterImage from "@/public/assets/aktu-odd-semester-admit-card_11zon.webp";

export const BLOG_SITE_URL = "https://distanceeducationlearning.com";
export const BLOG_UPDATED_AT = "2026-10-14";

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  keywords: string[];
  description: string;
  category: string;
  bannerTitle: string;
  gradient: string;
  quickAnswer: string;
  source: { label: string; href: string };
  image?: { src: string; alt: string };
  publishedAt?: string;
  updatedAt?: string;
};

// Use the full international number (country code included, digits only).
export const blogContact = { whatsappNumber: "919217310430" };

export const blogPosts: BlogPost[] = [
  {
    slug: "how-is-the-ignou-percentage-calculated",
    title: "How Is the IGNOU Percentage Calculated?",
    metaTitle: "How to Calculate IGNOU Percentage? Formula & Calculator",
    description:
      "Learn how to calculate IGNOU percentage using assignment and exam marks, with a free calculator, grade card steps and course-wise examples.",
    category: "Student Guides",
    bannerTitle: "IGNOU Percentage Calculation",
    gradient: "from-[#164e63] to-[#2563eb]",
    image: {
      src: igpercentage.src,
      alt: "how-is-the-ignou-percentage-calculated",
    },
    quickAnswer:
      "Check your programme's evaluation scheme first. For a course with 30% assignment and 70% term-end exam weightage, multiply the assignment percentage by 0.30 and the exam percentage by 0.70, then add them. Scores of 80 and 70 give 73%. Practical, project and overall programme rules may differ.",
    source: {
      label: "IGNOU Grade Card Portal",
      href: "https://gradecard.ignou.ac.in/",
    },
    keywords: [
      "how to calculate IGNOU percentage",
      "IGNOU percentage calculator online",
      "IGNOU result calculator",
      "IGNOU BA percentage calculator",
      "IGNOU grade card calculator",
      "how IGNOU marks are calculated",
      "IGNOU BCA percentage calculator",
      "IGNOU marks calculator",
      "IGNOU grade card percentage",
      "IGNOU CGPA calculator",
    ],
    publishedAt: "2026-10-31",
    updatedAt: "2026-10-31",
  },
  {
    slug: "aoc-recruitment",
    title: "AOC Recruitment 2026: Notification, Eligibility & Apply Online",
    metaTitle: "AOC Recruitment 2026: Eligibility, Vacancy & Apply Online",
    description:
      "Explore AOC Recruitment 2026 notification checks, eligibility, application steps, salary references and selection guidance.",
    category: "Recruitment",
    bannerTitle: "AOC Recruitment 2026",
    image: {
      src: aocRecruitmentImage.src,
      alt: "AOC Recruitment 2026 notification, eligibility and application guide",
    },
    gradient: "from-[#14532d] to-[#4d7c0f]",
    quickAnswer:
      "Check the official Army Ordnance Corps recruitment portal for the current advertisement before applying. The supplied source does not verify a 2026 notification, vacancy total or application deadline; earlier recruitment details are historical references.",
    source: {
      label: "Army Ordnance Corps Recruitment",
      href: "https://www.aocrecruitment.gov.in/",
    },
    keywords: [
      "aoc recruitment 2026 apply online",
      "aoc apply online",
      "aoc army recruitment 2026",
      "aoc vacancy 2026",
      "indian army aoc recruitment 2026",
      "aoc recruitment eligibility",
      "aoc recruitment gov in login",
      "aoc army salary",
      "aoc army vacancy 2026",
      "army ordnance corps recruitment 2026 apply online",
      "www aocrecruitment gov in",
      "aoc recruitment 2026 last date",
      "army aoc vacancy 2026",
      "aoc new vacancy 2026",
    ],
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "gujcet-result",
    title: "GUJCET Result 2026: Check Result & Scorecard",
    metaTitle: "GUJCET Result 2026: Date, Link, Scorecard & Steps",
    description:
      "Learn how to check GUJCET Result 2026, save your scorecard, understand marks and percentile, and prepare for counselling.",
    category: "Results",
    bannerTitle: "GUJCET Result & Scorecard",
    image: {
      src: gujcetResultImage.src,
      alt: "GUJCET Result 2026 and scorecard guide",
    },
    gradient: "from-[#1e3a8a] to-[#0891b2]",
    quickAnswer:
      "Start from the official GSEB website and select the relevant GUJCET result notice. Enter the credentials requested by the result portal, verify your details and save the scorecard. Follow the separate admission authority schedule for counselling.",
    source: {
      label: "Gujarat Secondary and Higher Secondary Education Board",
      href: "https://www.gseb.org/",
    },
    keywords: [
      "gujcet result 2026",
      "gujcet result 2026 date",
      "gujcet result date 2026",
      "gseb org gujcet result",
      "gujcet results",
      "gujcet 2026 result date",
      "gujcet 2026 result",
      "gujcet result 2026 link",
      "gseb.org gujcet result 2026",
      "gseb gujcet result 2026",
    ],
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "amity-university-student-login",
    title: "Amity University Student Login: Registration & Login Guide",
    metaTitle: "Amity Online Student Login: Registration & Login Guide",
    description:
      "Learn how to access Amity Online Student Login, activate your account, reset your password and resolve common student portal problems.",
    category: "Student Guides",
    bannerTitle: "Amity University Student Login",
    image: {
      src: amityStudentLoginImage.src,
      alt: "Amity University logo for the student login guide",
    },
    gradient: "from-[#312e81] to-[#7c3aed]",
    quickAnswer:
      "Visit the official Amity Online website and choose the student portal for your programme. Sign in with your registered credentials after account activation. Use the official password recovery or student support options if you cannot access your account.",
    source: {
      label: "Amity Online",
      href: "https://amityonline.com/",
    },
    keywords: [
      "amity online student login",
      "amity university login",
      "amityonline student login",
      "amity university student login",
      "amity student login",
      "amity university online login",
      "amity student zone login",
      "amity student portal",
      "amity university online student login",
      "amityonline.com student login",
      "login amity online",
      "amity university student login online",
      "amity login student",
      "student portal amity online",
      "amity online student portal",
      "amity student login portal",
    ],
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "how-to-download-ignou-marksheet",
    title: "How to Download IGNOU Marksheet Online 2026",
    metaTitle: "IGNOU Marksheet Download 2026: Online Guide & Status",
    description:
      "Learn how to check IGNOU results, save your online grade card, and enquire about final marksheet status and dispatch in 2026.",
    keywords: [
      "ignou marksheet download 2026",
      "ignou marksheet download",
      "ignou marksheet dispatch status",
      "ignou marksheet download guide 2026",
      "term result december 2026",
      "ignou alumni",
      "grade card ignou 2026",
      "ignou final marksheet",
      "ignou marksheet status",
      "ignou marksheet",
      "marksheet ignou",
      "download ignou marksheet",
    ],
    category: "Student Guides",
    bannerTitle: "IGNOU Marksheet & Grade Card",
    gradient: "from-[#164e63] to-[#0891b2]",
    image: {
      src: ignouMarksheetImage.src,
      alt: "How to download IGNOU marksheet online",
    },
    publishedAt: "2026-10-21",
    updatedAt: "2026-10-21",
    quickAnswer:
      "Use IGNOU's official grade-card service to check your course marks and save or print the available record. The online grade card does not automatically replace the original final marksheet. For a pending original, confirm programme completion and contact IGNOU about processing or dispatch.",
    source: {
      label: "IGNOU Grade Card Portal",
      href: "https://gradecard.ignou.ac.in/",
    },
  },
  {
    slug: "ignou-assignment-front-page-pdf",
    keywords: [
      "ignou assignment paper format",
      "ignou assignment front page",
      "ignou front page download",
      "ignou front page pdf",
      "ignou assignment front page filled",
      "assignment first page in hindi",
      "assignment front page format in hindi",
      "assignment front page in hindi",
      "ignou front page",
      "ignou project cover page",
      "ignou assignment front page fill up",
      "ignou assignment first page",
      "ignou assignment file cover",
      "ignou assignment cover",
    ],
    title: "IGNOU Assignment Front Page PDF: Download & Format Guide",
    metaTitle: "IGNOU Assignment Front Page PDF: Download & Format",
    description:
      "Download a blank IGNOU assignment front-page reference template and learn the paper format, filling process, Hindi format, and common mistakes.",
    category: "Assignments",
    bannerTitle: "IGNOU Assignment Front Page",
    gradient: "from-[#1e3a8a] to-[#2563eb]",
    image: {
      src: ignouAssignmentImage.src,
      alt: "IGNOU assignment front-page PDF download and format guide",
    },
    quickAnswer:
      "Your assignment front page should identify you, your programme, course, study centre, and session. Enter details exactly as recorded by IGNOU and check your programme's latest submission instructions before attaching it.",
    source: {
      label: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in/",
    },
  },
  {
    slug: "how-to-download-ignou-id-card",
    keywords: [
      "ignou identity card download",
      "ignou id card",
      "ignou identity card download link",
      "ignou student id card",
      "ignou id card download with enrollment no",
      "id card ignou",
      "id card download ignou",
      "ignou student id card download",
      "download ignou id card",
      "ignou id card login",
      "ignou download id card",
      "ignou student id",
      "ignou identity card",
      "id card ignou download",
      "how to download id card of ignou",
      "ignou login id",
      "how to get ignou id card",
    ],
    title: "How to Download IGNOU ID Card Online",
    metaTitle: "IGNOU Identity Card Download 2026: Step-by-Step Guide",
    description:
      "Learn how to download your IGNOU identity card online using your login details or enrollment number, with steps, troubleshooting tips and FAQs.",
    category: "Student Guides",
    bannerTitle: "Download Your IGNOU ID Card",
    gradient: "from-[#065f46] to-[#10b981]",
    image: {
      src: ignouIdCardImage.src,
      alt: "Guide to downloading an IGNOU student ID card online",
    },
    quickAnswer:
      "Sign in to the official IGNOU Samarth Student Portal after your admission is confirmed. Find the Student I-card option, check your student details, and download or save the available digital card.",
    source: {
      label: "IGNOU Samarth Student Portal",
      href: "https://ignou.samarth.edu.in/",
    },
  },
  {
    slug: "madras-university-distance-education-mba",
    keywords: [
      "madras university distance education",
      "madras university dde",
      "madras university mba admission 2024",
      "madras university distance education admission 2021",
      "institute of distance education",
      "madras university distance education prospectus",
      "ideoum",
      "madras university mba admission",
      "madras university correspondence courses",
      "madras university distance education subject code",
      "ideunom study material",
      "madras university online courses",
      "madras university online mba",
      "university of madras mba fees",
    ],
    title: "Madras University Distance Education MBA: Fees & Admission",
    metaTitle:
      "University of Madras Distance MBA 2026: Fees & Admission Process",
    description:
      "Explore Madras University distance MBA admission, eligibility, fees, specializations, syllabus, study material, and examination guidance.",
    category: "Admissions",
    bannerTitle: "Madras University Distance MBA",
    gradient: "from-[#7c2d12] to-[#f97316]",
    image: {
      src: madrasMbaImage.src,
      alt: "Madras University distance education MBA fees and admission guide",
    },
    quickAnswer:
      "The University of Madras offers its distance MBA through the Institute of Distance Education. Check the current IDE prospectus for eligibility, fees, programme mode, and admission dates before applying through the official portal.",
    source: {
      label: "Institute of Distance Education, University of Madras",
      href: "https://www.ideunom.ac.in/",
    },
  },
  {
    slug: "what-is-abc-id-card",
    keywords: [
      "what is abc id",
      "identity value in abc card",
      "abc id full form",
      "abc id in cuet form",
      "abc government",
      "abs id",
      "abc is",
      "identity value in abc card meaning",
      "abc code",
      "abc id meaning",
      "abc number",
      "abc id number",
      "abc id means",
      "what is abc id in cuet",
      "abc i",
      "identity value in abc id",
      "what is abc code",
    ],
    title: "What Is ABC ID Card? Benefits, Registration & Download",
    metaTitle: "What Is ABC ID? Benefits, Registration & Download Guide",
    description:
      "Learn what ABC ID means, its full form, benefits, registration process, identity value, ABC number, and how to access your ABC ID card.",
    category: "Student Guides",
    bannerTitle: "Your Guide to ABC ID",
    gradient: "from-[#4c1d95] to-[#8b5cf6]",
    image: {
      src: abcIdCardImage.src,
      alt: "ABC ID card benefits, registration and download guide",
    },
    quickAnswer:
      "ABC stands for Academic Bank of Credits. Your ABC academic identity connects you with digital academic records and credit services. Use the official ABC, APAAR, or DigiLocker platform to access your identity and follow your institution's registration instructions.",
    source: {
      label: "Academic Bank of Credits",
      href: "https://www.abc.gov.in/",
    },
  },
  {
    slug: "top-open-universities-in-kolkata",
    title: "Top Open Universities in Kolkata: Courses & Admission Guide",
    metaTitle: "Top Open Universities in Kolkata: Courses & Admission",
    description:
      "Compare open and distance learning options available to students in Kolkata, including programme choices, recognition checks and admission steps.",
    keywords: [
      "top open universities in kolkata",
      "open university in kolkata",
      "distance education universities in kolkata",
      "distance learning courses kolkata",
      "open universities west bengal",
      "distance education admission kolkata",
    ],
    category: "Admissions",
    bannerTitle: "Open Universities in Kolkata",
    gradient: "from-[#134e4a] to-[#0e7490]",
    image: {
      src: openUniversitiesKolkataImage.src,
      alt: "Open universities and distance learning options in Kolkata",
    },
    quickAnswer:
      "Kolkata learners can compare open and distance programmes offered by state and national universities, including Netaji Subhas Open University and IGNOU. Before enrolling, confirm that the specific programme and mode are currently recognised, and use the university's official prospectus for fees and admission dates.",
    source: {
      label: "Netaji Subhas Open University",
      href: "https://www.wbnsou.ac.in/",
    },
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
  },
  {
    slug: "how-to-submit-ignou-assignment",
    title: "How to Submit IGNOU Assignment: Online & Offline Steps",
    metaTitle: "How to Submit IGNOU Assignment Online or Offline",
    description:
      "Follow a practical checklist for preparing and submitting IGNOU assignments, checking your study centre's method and confirming receipt.",
    keywords: [
      "how to submit ignou assignment",
      "IGNOU assignment submission online",
      "IGNOU assignment submission offline",
      "IGNOU assignment submission status",
      "IGNOU assignment last date",
      "IGNOU assignment study centre",
    ],
    category: "Assignments",
    bannerTitle: "Submit Your IGNOU Assignment",
    gradient: "from-[#1e3a8a] to-[#0e7490]",
    image: {
      src: submitIgnouAssignmentImage.src,
      alt: "Guide to submitting an IGNOU assignment",
    },
    quickAnswer:
      "Use the submission method announced for your programme and study centre. Prepare the assignment according to the current instructions, submit it through the authorised online portal or designated centre, and save the acknowledgement. Check the latest deadline on IGNOU's official notices because schedules can vary by session and programme.",
    source: {
      label: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in/student-services",
    },
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
  },
  {
    slug: "aktu-odd-semester-result",
    title: "AKTU Odd Semester Result: How to Check & Download",
    metaTitle: "AKTU Odd Semester Result: Check Result & Marksheet",
    description:
      "Learn how to find the latest AKTU odd semester result notice, check your marks, download the result and resolve common login issues.",
    keywords: [
      "AKTU odd semester result",
      "AKTU result odd semester",
      "AKTU odd sem result check",
      "Dr APJ Abdul Kalam Technical University result",
      "AKTU marksheet download",
      "AKTU result portal",
    ],
    category: "Results",
    bannerTitle: "AKTU Odd Semester Result",
    gradient: "from-[#7c2d12] to-[#b45309]",
    image: {
      src: aktuOddSemesterImage.src,
      alt: "AKTU odd semester result and admit card guide",
    },
    quickAnswer:
      "Open the official AKTU results portal and choose the relevant odd semester result link. Enter the requested roll number or other details, verify the displayed marks and save a copy. Result publication dates vary by examination, so check the university's latest notice rather than relying on an unverified date.",
    source: {
      label: "Dr. A.P.J. Abdul Kalam Technical University",
      href: "https://aktu.ac.in/",
    },
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function blogUrl(slug?: string) {
  return `${BLOG_SITE_URL}/blog${slug ? `/${slug}` : ""}`;
}
