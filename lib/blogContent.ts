import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { getBlogPost } from "./blog";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3; id: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogContent = {
  blocks: ContentBlock[];
  toc: { id: string; title: string }[];
  faqs: { question: string; answer: string }[];
  readingMinutes: number;
};

export function plainText(text: string) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*`]/g, "")
    .replace(/\\([.\-])/g, "$1")
    .trim();
}

function parseContent(markdown: string): BlogContent {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ContentBlock[] = [];
  const faqs: BlogContent["faqs"] = [];
  const ids = new Map<string, number>();
  let inFaq = false;
  let currentFaq: BlogContent["faqs"][number] | undefined;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || /^---+$/.test(line) || /^#\s/.test(line)) continue;
    const heading = /^(#{2,3})\s+(.+)$/.exec(line);
    if (heading) {
      const text = plainText(heading[2]);
      if (/frequently asked questions|^faqs\b/i.test(text)) {
        inFaq = true;
        continue;
      }
      if (inFaq) {
        currentFaq = { question: text.replace(/^\d+\.\s*/, ""), answer: "" };
        faqs.push(currentFaq);
        continue;
      }
      const base = text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-|-$/g, "");
      const count = (ids.get(base) ?? 0) + 1;
      ids.set(base, count);
      blocks.push({
        type: "heading",
        level: heading[1].length as 2 | 3,
        text,
        id: count === 1 ? base : `${base}-${count}`,
      });
      continue;
    }
    if (inFaq) {
      if (currentFaq)
        currentFaq.answer += `${currentFaq.answer ? " " : ""}${line}`;
      continue;
    }
    if (
      line.startsWith("|") &&
      /^\|[\s:|\-]+\|$/.test(lines[i + 1]?.trim() ?? "")
    ) {
      const cells = (row: string) =>
        row
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((cell) => cell.trim());
      const headers = cells(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|"))
        rows.push(cells(lines[i++]));
      i--;
      blocks.push({ type: "table", headers, rows });
      continue;
    }
    const list = /^(?:([*\-])|\d+\.)\s+(.+)$/.exec(line);
    if (list) {
      const ordered = !list[1];
      const items = [list[2]];
      while (i + 1 < lines.length) {
        const next = /^(?:([*\-])|\d+\.)\s+(.+)$/.exec(lines[i + 1].trim());
        if (!next || Boolean(!next[1]) !== ordered) break;
        items.push(next[2]);
        i++;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }
    let text = line;
    while (
      i + 1 < lines.length &&
      lines[i + 1].trim() &&
      !/^(?:#{1,3}\s|\||[*\-]\s|\d+\.\s)/.test(lines[i + 1].trim())
    ) {
      text += ` ${lines[++i].trim()}`;
    }
    blocks.push({ type: "paragraph", text });
  }
  const toc = blocks
    .filter(
      (block): block is Extract<ContentBlock, { type: "heading" }> =>
        block.type === "heading" && block.level === 2,
    )
    .map(({ id, text }) => ({ id, title: text }));
  if (faqs.length)
    toc.push({
      id: "frequently-asked-questions",
      title: "Frequently Asked Questions",
    });
  return {
    blocks,
    toc,
    faqs,
    readingMinutes: Math.max(
      1,
      Math.ceil(plainText(markdown).split(/\s+/).length / 220),
    ),
  };
}

export const getBlogContent = cache(async (slug: string) => {
  if (!getBlogPost(slug)) throw new Error("Unknown blog article");
  const markdown = await readFile(
    path.join(process.cwd(), "content", "blog", `${slug}.md`),
    "utf8",
  );
  return parseContent(markdown);
});
