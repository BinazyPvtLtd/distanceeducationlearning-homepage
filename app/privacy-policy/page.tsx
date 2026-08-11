import type { Metadata } from "next";
import { LegalPageContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Distance Education Learning",
  description:
    "Read the Privacy Policy for Distance Education Learning, covering how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://www.distanceeducationlearning.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPageContent legalKey="privacy" />;
}
