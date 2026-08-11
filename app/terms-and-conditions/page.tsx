import type { Metadata } from "next";
import { LegalPageContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Terms and Conditions | Distance Education Learning",
  description:
    "Read the Terms and Conditions governing your use of the Distance Education Learning counselling platform.",
  alternates: {
    canonical: "https://www.distanceeducationlearning.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <LegalPageContent legalKey="terms" />;
}
