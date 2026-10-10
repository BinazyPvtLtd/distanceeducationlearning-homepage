import Link from "next/link";
import { BLOG_UPDATED_AT, formatBlogDate, type BlogPost } from "@/lib/blog";
import BlogBanner from "./BlogBanner";

export type BlogCardPost = BlogPost;

export default function BlogCard({ post }: { post: BlogCardPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-brand">
      <Link href={`/blog/${post.slug}`} aria-hidden="true" tabIndex={-1}>
        <BlogBanner post={post} />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="self-start rounded-full bg-tint px-3 py-1 text-[11px] font-semibold tracking-wide text-blue-strong uppercase">
          {post.category}
        </span>
        <h3 className="text-lg leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="transition hover:text-blue-strong">
            {post.title}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed">{post.description}</p>
        <div className="mt-2 flex items-center justify-between border-t border-line pt-4 text-xs">
          <time dateTime={BLOG_UPDATED_AT}>
            {formatBlogDate(BLOG_UPDATED_AT)}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="font-semibold text-blue-strong"
            aria-label={`Read ${post.title}`}>
            Read guide <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
