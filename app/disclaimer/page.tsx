import type { Metadata } from "next";
import { LegalPageContent } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Disclaimer | Distance Education Learning",
  description:
    "Read the Disclaimer for Distance Education Learning, an independent educational counselling platform for UGC-DEB approved online and distance degree programs.",
  alternates: {
    canonical: "https://www.distanceeducationlearning.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return <LegalPageContent legalKey="disclaimer" />;
}
