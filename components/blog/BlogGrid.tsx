"use client";

import { useState } from "react";
import Link from "next/link";
import BlogCard, { type BlogCardPost } from "./BlogCard";

export default function BlogGrid({ posts }: { posts: BlogCardPost[] }) {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const filtered = posts.filter((post) =>
    `${post.title} ${post.description} ${post.category}`
      .toLowerCase()
      .includes(search),
  );

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#1e3a8a,#2563eb_60%,#0ea5e9)] text-white">
        <div className="mx-auto max-w-[1080px] px-6 py-12 sm:py-14">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/85">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2">
              ›
            </span>
            <span aria-current="page">Blogs</span>
          </nav>
          <h1 className="mb-3 text-4xl text-white sm:text-[44px]">Blogs</h1>
          <p className="mb-7 max-w-[680px] text-base text-white/90">
            Clear guides on distance education, admissions, assignments, and
            student essentials. Find the information you need for your next
            step.
          </p>
          <label className="flex max-w-[550px] items-center gap-3 rounded-xl bg-white px-4 py-1 shadow-sm">
            <span className="sr-only">Search blog posts</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 fill-none stroke-slate-500"
              strokeWidth="1.8">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              type="search"
              aria-label="Search blog posts"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search guides, e.g. IGNOU, MBA, ABC ID"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-ink placeholder:text-slate-500 focus:outline-none"
            />
            <span
              aria-live="polite"
              aria-atomic="true"
              className="shrink-0 text-xs text-slate-500">
              {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
            </span>
          </label>
        </div>
      </section>
      <section
        className="mx-auto max-w-[1080px] px-6 py-10 sm:py-12"
        aria-labelledby="all-guides">
        <h2 id="all-guides" className="mb-6 text-2xl">
          All guides
        </h2>
        <div className="grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div
            className="rounded-xl border border-dashed border-line bg-white px-6 py-14 text-center"
            role="status">
            <h3 className="mb-2 text-xl">No guides match your search</h3>
            <p className="mb-5 text-sm">
              Try another topic, university, or category.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="cursor-pointer rounded-lg bg-blue px-5 py-2.5 text-sm font-semibold text-white">
              Clear search
            </button>
          </div>
        )}
      </section>
    </>
  );
}
