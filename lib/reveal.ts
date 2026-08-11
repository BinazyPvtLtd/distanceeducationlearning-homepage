let io: IntersectionObserver | null = null;

export function observeReveals() {
  if (typeof window === "undefined") return;    

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    return;
  }

  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io!.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io!.observe(el));
}
