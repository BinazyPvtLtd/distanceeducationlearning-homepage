import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { LeadModalProvider } from "@/components/LeadModalContext";
import LeadTriggerButton from "@/components/LeadTriggerButton";
import { btnLight } from "@/lib/styles";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Distance Education Learning | Flexible Online Degrees & Certifications",
  description:
    "Compare UGC-DEB approved online degrees and certifications from India's leading universities. Free counselling, transparent fees, support until you graduate.",
  alternates: {
    canonical: "https://www.distanceeducationlearning.com/",
  },
  openGraph: {
    title: "Distance Education Learning | Flexible Online Degrees & Certifications",
    description:
      "Compare UGC-DEB approved online degrees and certifications from India's leading universities. Free counselling, transparent fees, support until you graduate.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Distance Education Learning",
  url: "https://www.distanceeducationlearning.com/",
  logo: "https://www.distanceeducationlearning.com/logo-color.png",
  description: "Counselling platform for UGC-DEB approved online and distance degree programmes in India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Education Street",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98765-43210",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-page text-body leading-[1.65]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          className="absolute -left-[9999px] top-0 z-[200] rounded-br-lg bg-white px-4 py-2.5 focus:left-0"
          href="#main"
        >
          Skip to content
        </a>
        <LeadModalProvider>
          <Header />
          <main id="main">{children}</main>
          <section className="overflow-hidden bg-[linear-gradient(120deg,#0A2A5E_0%,#123B84_100%)] text-white">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-[30px] px-6 py-11 max-[980px]:flex-col max-[980px]:text-center">
              <div>
                <h2 className="mb-1.5 text-[26px] text-white">Ready to Build a Better Tomorrow?</h2>
                <p className="text-sm text-white/82">Join thousands of learners and take the next step in your journey.</p>
              </div>
              <LeadTriggerButton className={btnLight}>Get Free Counselling</LeadTriggerButton>
            </div>
          </section>
          <Footer />
        </LeadModalProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
