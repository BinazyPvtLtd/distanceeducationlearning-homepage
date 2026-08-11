"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoColor from "@/public/logo-color.png";
import { btnPrimary, btnSm } from "@/lib/styles";
import { useLeadModal } from "./LeadModalContext";

// Sections spied on scroll instead of routing to a dedicated page. Order
// matters: it's used to break ties when multiple sections are in view at
// once (bottom-most wins), and should match each section's vertical
// position on the page.
const SPY_SECTIONS = [
  { id: "courses", href: "/#courses", label: "Courses" },
  { id: "universities", href: "/#universities", label: "Universities" },
  { id: "about", href: "/#about", label: "About Us" },
];

const NAV_LINKS = [{ href: "/", label: "Home" }, ...SPY_SECTIONS];

// Header is 76px tall; trigger once a spied section clears it, and treat the
// bottom 70% of the viewport as "not yet in view" so the switch happens near the top.
const SCROLLSPY_ROOT_MARGIN = "-76px 0px -70% 0px";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { openLeadModal } = useLeadModal();

  useEffect(() => {
    const elements = SPY_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!elements.length) return;

    const intersecting = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        const active = SPY_SECTIONS.map((s) => s.id).filter((id) => intersecting.has(id)).pop() ?? null;
        setActiveSection(active);
      },
      { rootMargin: SCROLLSPY_ROOT_MARGIN }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[60] border-b border-[rgba(228,235,246,0.9)] bg-[rgba(247,250,255,0.94)] backdrop-blur-[10px]">
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between gap-6 px-6 max-[980px]:gap-[10px]">
        <Link href="/" aria-label="Distance Education Learning home">
          <Image src={logoColor} alt="Distance Education Learning" width={200} height={42} priority className="h-[42px] w-auto" />
        </Link>
        <nav
          className={`flex items-center gap-[30px] text-sm font-medium text-ink max-[980px]:fixed max-[980px]:inset-x-0 max-[980px]:top-[76px] max-[980px]:flex-col max-[980px]:items-start max-[980px]:gap-0 max-[980px]:border-b max-[980px]:border-line max-[980px]:bg-white max-[980px]:px-6 max-[980px]:pt-2 max-[980px]:pb-5 max-[980px]:shadow-[0_6px_24px_rgba(16,44,92,0.08)]${open ? "" : " max-[980px]:hidden"}`}
          id="navLinks"
          aria-label="Main"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A") setOpen(false);
          }}
        >
          {NAV_LINKS.map((link) => {
            const spySection = SPY_SECTIONS.find((s) => s.href === link.href);
            const active = spySection ? activeSection === spySection.id : link.href === pathname && activeSection === null;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue after:transition-[width] after:duration-[220ms] after:ease-in-out after:content-[''] hover:text-blue hover:after:w-full max-[980px]:w-full max-[980px]:py-3 ${
                  active ? "text-blue font-semibold after:w-full" : "after:w-0"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-[10px] max-[980px]:gap-2">
          <button
            type="button"
            className={`${btnPrimary} ${btnSm}`}
            onClick={() => openLeadModal()}
          >
            Enroll Now
          </button>
          <button
            className="hidden cursor-pointer border-0 bg-transparent p-2 max-[980px]:block"
            id="navToggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="my-[5px] block h-0.5 w-[22px] rounded-sm bg-ink"></span>
            <span className="my-[5px] block h-0.5 w-[22px] rounded-sm bg-ink"></span>
            <span className="my-[5px] block h-0.5 w-[22px] rounded-sm bg-ink"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
