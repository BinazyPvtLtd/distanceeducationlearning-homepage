import type { MetadataRoute } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { blogPosts, blogUrl, BLOG_SITE_URL, BLOG_UPDATED_AT } from "@/lib/blog";

// Discover source routes during the build; production does not need source files.
export const dynamic = "force-static";

async function collectPagePaths(
  directory: string,
  segments: string[] = [],
): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes: string[] = [];

  if (
    entries.some(
      (entry) => entry.isFile() && /^page\.(tsx?|jsx?|mdx)$/.test(entry.name),
    )
  ) {
    routes.push(`/${segments.map(encodeURIComponent).join("/")}`);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Dynamic URLs need their content source (blogPosts below), not placeholders.
    if (
      name.startsWith("_") ||
      name.startsWith("@") ||
      name.includes("[") ||
      name.startsWith("(.)") ||
      name.startsWith("(..)")
    ) {
      continue;
    }
    const isRouteGroup = name.startsWith("(") && name.endsWith(")");
    routes.push(
      ...(await collectPagePaths(
        path.join(directory, name),
        isRouteGroup ? segments : [...segments, name],
      )),
    );
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pagePaths = await collectPagePaths(path.join(process.cwd(), "app"));
  const pages: MetadataRoute.Sitemap = pagePaths.map((pathname) => ({
    url: `${BLOG_SITE_URL}${pathname === "/" ? "" : pathname}`,
  }));
  const articles: MetadataRoute.Sitemap = blogPosts.map(({ slug }) => ({
    url: blogUrl(slug),
    lastModified: BLOG_UPDATED_AT,
  }));

  return Array.from(
    new Map(
      [...pages, ...articles].map((entry) => [entry.url, entry]),
    ).values(),
  ).sort((a, b) => a.url.localeCompare(b.url));
}
