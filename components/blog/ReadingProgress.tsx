"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const article = document.getElementById("blog-article");
      if (!article || !bar.current) return;
      const top = article.getBoundingClientRect().top + window.scrollY - 96;
      const distance = Math.max(
        1,
        article.offsetHeight - window.innerHeight + 96,
      );
      const progress = Math.max(
        0,
        Math.min(1, (window.scrollY - top) / distance),
      );
      bar.current.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    const article = document.getElementById("blog-article");
    if (article) observer.observe(article);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed top-[76px] right-0 left-0 z-[61] h-[3px] origin-left scale-x-0 bg-blue"
    />
  );
}
