import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  blogUrl,
  BLOG_SITE_URL,
  BLOG_UPDATED_AT,
  formatBlogDate,
  getBlogPost,
} from "@/lib/blog";
import { getBlogContent, plainText } from "@/lib/blogContent";
import ArticleContent, { ArticleFaqs } from "@/components/blog/ArticleContent";
import BlogBanner from "@/components/blog/BlogBanner";
import BlogCta from "@/components/blog/BlogCta";
import ReadingProgress from "@/components/blog/ReadingProgress";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const images = post.image
    ? [
        {
          url: new URL(post.image.src, BLOG_SITE_URL).href,
          alt: post.image.alt,
        },
      ]
    : undefined;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: blogUrl(slug) },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      type: "article",
      url: blogUrl(slug),
      modifiedTime: BLOG_UPDATED_AT,
      images,
    },
    twitter: {
      card: post.image ? "summary_large_image" : "summary",
      title: post.metaTitle,
      description: post.description,
      images: images?.map((image) => image.url),
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const content = await getBlogContent(slug);
  const related = blogPosts.filter((item) => item.slug !== slug);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        dateModified: BLOG_UPDATED_AT,
        author: {
          "@type": "Organization",
          name: "Distance Education Learning Editorial Team",
        },
        publisher: {
          "@type": "Organization",
          name: "Distance Education Learning",
        },
        mainEntityOfPage: blogUrl(slug),
        ...(post.image
          ? { image: new URL(post.image.src, BLOG_SITE_URL).href }
          : {}),
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: blogUrl(slug),
          },
        ],
      },
      ...(content.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: plainText(faq.answer),
                },
              })),
            },
          ]
        : []),
    ],
  };
  return (
    <div className="bg-white">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="bg-[linear-gradient(135deg,#1e3a8a,#2563eb_60%,#0ea5e9)] text-white">
        <div className="mx-auto max-w-270 px-6 py-10 sm:py-12">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/85 sm:text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog" className="hover:underline">
              Blogs
            </Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{post.bannerTitle}</span>
          </nav>
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs">
            Updated{" "}
            <time dateTime={BLOG_UPDATED_AT}>
              {formatBlogDate(BLOG_UPDATED_AT)}
            </time>
          </span>
          <h1 className="mt-4 mb-4 max-w-205 text-[30px] leading-tight text-white sm:text-[40px]">
            {post.title}
          </h1>
          <p className="max-w-190 text-sm leading-relaxed text-white/90 sm:text-base">
            {post.description}
          </p>
        
        </div>
      </section>
      <div className="mx-auto grid max-w-270 grid-cols-1 gap-10 px-6 py-10 min-[900px]:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="hidden min-[900px]:block">
          <nav
            aria-label="Table of contents"
            className="sticky top-25 max-h-[calc(100dvh-125px)] overflow-y-auto pr-3 text-[13px] leading-relaxed">
            <p className="mb-3 font-semibold text-ink">On this page</p>
            {content.toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block border-l-2 border-line py-2 pl-3 transition hover:border-blue-strong hover:text-blue-strong">
                {item.title}
              </a>
            ))}
          </nav>
        </aside>
        <article id="blog-article" className="min-w-0">
          <div className="mb-6">
            <BlogBanner post={post} featured />
          </div>
          <div className="mb-7 rounded-lg border-l-4 border-blue-strong bg-tint px-5 py-4 text-[15px] leading-relaxed text-slate-700">
            <strong className="text-ink">Quick answer: </strong>
            {post.quickAnswer}
          </div>
          <details className="mb-7 rounded-lg border border-line min-[900px]:hidden">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-ink">
              On this page
            </summary>
            <nav
              aria-label="Table of contents"
              className="grid gap-3 px-4 pb-4 text-sm text-blue-strong">
              {content.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.title}
                </a>
              ))}
            </nav>
          </details>
          <ArticleContent blocks={content.blocks} />
          <ArticleFaqs faqs={content.faqs} />
          <div className="my-9">
            <BlogCta />
          </div>
          <section aria-labelledby="related-guides">
            <h2 id="related-guides" className="mb-4 text-2xl">
              Related Guides
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block h-full rounded-lg border border-line p-4 text-sm leading-relaxed font-semibold text-ink transition hover:border-blue hover:text-blue-strong">
                    {item.title}
                    <span
                      aria-hidden="true"
                      className="mt-3 block text-blue-strong">
                      Read guide →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <Link
            href="/blog"
            className="mt-6 inline-block text-sm font-semibold text-blue-strong">
            ← Back to all guides
          </Link>
        </article>
      </div>
    </div>
  );
}
