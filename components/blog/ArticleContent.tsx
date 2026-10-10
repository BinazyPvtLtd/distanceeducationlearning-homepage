import { Fragment, type ReactNode } from "react";
import type { ContentBlock } from "@/lib/blogContent";

// A deliberately small renderer for the supplied Docs exports. Raw HTML is
// rendered as text, and links are restricted to web URLs and local paths.
export function InlineText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const token = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^\s)]+)\)/g;
  let offset = 0;
  let match: RegExpExecArray | null;
  while ((match = token.exec(text))) {
    parts.push(text.slice(offset, match.index).replace(/\\([.\-])/g, "$1"));
    if (match[1])
      parts.push(
        <strong key={match.index} className="font-semibold text-ink">
          <InlineText text={match[1]} />
        </strong>,
      );
    else if (match[2])
      parts.push(
        <code
          key={match.index}
          className="break-words rounded bg-slate-100 px-1.5 py-0.5 text-[.9em] text-ink">
          {match[2]}
        </code>,
      );
    else {
      const href = match[4];
      const safe =
        /^https?:\/\//i.test(href) ||
        /^\/(?!\/)/.test(href) ||
        /^#[\w-]+$/.test(href);
      parts.push(
        safe ? (
          <a
            key={match.index}
            href={href}
            download={href.startsWith("/downloads/") ? true : undefined}
            className="break-words font-medium text-blue-strong underline decoration-blue/30 underline-offset-4 hover:decoration-blue-strong"
            {...(/^https?:\/\//i.test(href)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}>
            {match[3]}
            {/^https?:\/\//i.test(href) && (
              <span className="sr-only"> (opens in a new tab)</span>
            )}
          </a>
        ) : (
          match[3]
        ),
      );
    }
    offset = token.lastIndex;
  }
  parts.push(text.slice(offset).replace(/\\([.\-])/g, "$1"));
  return <>{parts}</>;
}

export default function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="text-[16px] leading-[1.85] text-slate-700 sm:text-[17px]">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Heading = block.level === 2 ? "h2" : "h3";
          return (
            <Heading
              id={block.id}
              key={block.id}
              className={
                block.level === 2
                  ? "mt-10 mb-4 text-2xl leading-snug"
                  : "mt-6 mb-3 text-lg leading-snug"
              }>
              {block.text}
            </Heading>
          );
        }
        if (block.type === "paragraph")
          return (
            <p key={index} className="mb-5">
              <InlineText text={block.text} />
            </p>
          );
        if (block.type === "table")
          return (
            <div
              key={index}
              role="region"
              aria-label="Article information table"
              tabIndex={0}
              className="my-6 overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-[460px] border-collapse text-left text-sm leading-relaxed">
                <thead className="bg-slate-50">
                  <tr>
                    {block.headers.map((header, cell) => (
                      <th
                        scope="col"
                        key={cell}
                        className="border-b border-line px-4 py-3 font-semibold text-ink">
                        <InlineText text={header} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-line last:border-0 even:bg-slate-50/80">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 align-top">
                          <InlineText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        if (block.ordered)
          return (
            <ol key={index} className="my-6 space-y-0">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="relative ml-4 border-l-2 border-line pb-5 pl-8 last:border-transparent">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-strong text-sm font-bold text-white">
                    {itemIndex + 1}
                  </span>
                  <span className="sr-only">Step {itemIndex + 1}: </span>
                  <InlineText text={item} />
                </li>
              ))}
            </ol>
          );
        return (
          <ul
            key={index}
            className="mb-5 list-disc space-y-2 pl-6 marker:text-blue-strong">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <InlineText text={item} />
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function ArticleFaqs({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (!faqs.length) return null;
  return (
    <section aria-labelledby="frequently-asked-questions" className="mt-10">
      <h2 id="frequently-asked-questions" className="mb-5 text-2xl">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <Fragment key={faq.question}>
          <details
            open={index === 0}
            className="group mb-3 rounded-lg border border-line bg-white">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="text-xl leading-none text-blue-strong group-open:hidden">
                +
              </span>
              <span
                aria-hidden="true"
                className="hidden text-xl leading-none text-blue-strong group-open:block">
                −
              </span>
            </summary>
            <div className="px-5 pb-5 text-[15px] leading-relaxed">
              <InlineText text={faq.answer} />
            </div>
          </details>
        </Fragment>
      ))}
    </section>
  );
}
