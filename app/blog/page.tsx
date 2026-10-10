import type { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCta from "@/components/blog/BlogCta";
import { blogPosts, blogUrl, BLOG_SITE_URL } from "@/lib/blog";

const title = "Blogs | Distance Education Learning";
const description =
  "Explore guides on distance education, university admissions, IGNOU assignments, student ID cards, and Academic Bank of Credits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: blogUrl() },
  openGraph: { title, description, type: "website", url: blogUrl() },
};

export default function BlogsPage() {
  const posts = blogPosts;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", name: "Blogs", description, url: blogUrl() },
      {
        "@type": "ItemList",
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: blogUrl(post.slug),
          name: post.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BLOG_SITE_URL,
          },
          { "@type": "ListItem", position: 2, name: "Blogs", item: blogUrl() },
        ],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <BlogGrid posts={posts} />
      <div className="mx-auto max-w-[1080px] px-6 pb-12">
        <BlogCta />
      </div>
    </>
  );
}
