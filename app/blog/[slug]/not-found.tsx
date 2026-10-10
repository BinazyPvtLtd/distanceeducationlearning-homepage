import Link from "next/link";

export default function BlogNotFound() {
  return (
    <section className="mx-auto max-w-270 px-6 py-24 text-center">
      <h1 className="mb-4 text-3xl">Guide not found</h1>
      <p className="mb-7">
        This article may have moved. Browse our available guides to find what
        you need.
      </p>
      <Link
        href="/blog"
        className="inline-block rounded-lg bg-blue px-6 py-3 font-semibold text-white">
        Browse blogs
      </Link>
    </section>
  );
}
