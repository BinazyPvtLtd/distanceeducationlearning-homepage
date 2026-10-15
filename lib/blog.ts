import ignouAssignmentImage from "@/public/assets/ignou-assignment-front-page.webp";
import ignouIdCardImage from "@/public/assets/ignou-id-card.webp";
import madrasMbaImage from "@/public/assets/madras-university-distance-mba.webp";
import abcIdCardImage from "@/public/assets/abc-id-card.webp";

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
};

// Use the full international number (country code included, digits only).
export const blogContact = { whatsappNumber: "919217310430" };

export const blogPosts: BlogPost[] = [
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
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function blogUrl(slug?: string) {
  return `${BLOG_SITE_URL}/blog${slug ? `/${slug}` : ""}`;
}
