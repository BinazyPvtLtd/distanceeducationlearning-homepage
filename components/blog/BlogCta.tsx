import { blogContact } from "@/lib/blog";
import LeadTriggerButton from "@/components/LeadTriggerButton";

export default function BlogCta() {
  const whatsapp = /^\d{10,15}$/.test(blogContact.whatsappNumber)
    ? `https://wa.me/${blogContact.whatsappNumber}`
    : null;
  return (
    <section className="rounded-xl bg-[linear-gradient(135deg,#065f46,#047857)] px-6 py-8 text-center text-white">
      <h2 className="mb-2 text-2xl text-white">
        Need help planning your next step?
      </h2>
      <p className="mx-auto mb-5 max-w-[570px] text-sm text-white/90">
        Talk to our team about your course options and get free guidance for
        your education journey.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <LeadTriggerButton className="cursor-pointer rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#065f46] transition hover:bg-white/90">
          Get free counselling
        </LeadTriggerButton>
        {whatsapp && (
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-white px-6 py-2.5 text-sm font-semibold transition hover:bg-white/10">
            Chat on WhatsApp{" "}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </section>
  );
}
