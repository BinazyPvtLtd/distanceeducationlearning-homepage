import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export default function BlogBanner({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex ${post.image ? "aspect-video" : "aspect-[1200/630]"} items-end overflow-hidden bg-gradient-to-br ${post.gradient} ${featured ? "rounded-xl" : ""}`}>
      {post.image ? (
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes={
            featured
              ? "(max-width: 900px) 100vw, 740px"
              : "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 360px"
          }
          preload={featured}
          className="object-contain"
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className="absolute -top-14 -right-12 h-56 w-56 rounded-full border border-white/20"
          />
          <span
            aria-hidden="true"
            className="absolute top-2 -right-24 h-72 w-72 rounded-full border border-white/10"
          />
          <div
            className={`relative text-white ${featured ? "p-8 sm:p-10" : "p-6"}`}>
            <span className="mb-3 block text-[11px] font-semibold tracking-[.15em] uppercase text-white/75">
              Distance Education Learning
            </span>
            <span
              className={`block max-w-[520px] leading-tight font-bold ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
              {post.bannerTitle}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
