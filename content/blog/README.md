# Blog content

The articles are imported from the supplied Google Docs. Their matching
SEO outlines are retained under `sources/` for reference and are not rendered.

## Updating a guide

- Edit the article's Markdown file. Supported content: H2/H3 headings,
  paragraphs, bold text, inline code, links, flat lists, and pipe tables.
- Put FAQs last, below `## Frequently Asked Questions` or `## FAQs …`.
  Each H3 is a question, followed by its answer paragraphs.
- Edit `lib/blog.ts` for titles, SEO descriptions, slugs, category,
  quick answers, official resource references, and images.
- Images are in `public/assets/`. Their `image.src` paths in `lib/blog.ts`
  are used for both the grid cards and featured article banners.
- `blogContact.whatsappNumber` contains the full international WhatsApp
  number, including the country code and using digits only.
- `BLOG_UPDATED_AT` records the site content import/edit date, not a date
  on which university notices were independently verified. Update it when
  the articles are edited, and verify time-sensitive information before launch.
- New posts can set `publishedAt` and `updatedAt` in `lib/blog.ts` so their
  dates and sitemap entries do not change the dates of existing guides.

The blank assignment PDF under `public/downloads/` is an independent reference
template, not an official IGNOU form or a guarantee that every study centre
accepts the format.

## Source documents

| Article | Content document | SEO outline |
| --- | --- | --- |
| IGNOU front page | 1fkWBgXbNzZV-cd43KnNT9lCngW0RQ2dazJX01RNDndk | 1m6ypO_pdFDvF4qn77t5P5HEkXkQ9xuoSh1F5m802sNc |
| IGNOU ID card | 1CJbvYFxG6Jn2wmshsBGEbmQYPWijlhFSM7apqpxo5WA | 1latRGj0Fs_gFM2tww1U5kAJ9yM57jkhLNTca7BWZxT8 |
| Madras MBA | 16keAo2bP0hGGrWmrkMOelcSMoUcQgbLbnVFdy0EnxK8 | 1GOAZztJ_UHU4lPUiRw1IUA7cFG-1dl4u6OgzCysWINk |
| ABC ID | 1p62v6OlYcnCS9eiuIj1TFUe2y-8Ra4QA7EmILxUpNbo | 18ymgvOqRP9rLlhv73jLGexX3a8kcO7zwsaQkFuAIUd0 |
| IGNOU marksheet | 1fknaa7naITqV0uuZ0VBzjqxREdnkvIcmWMwn4aYCdyo | 1xG79VZ6QvOQBLrdWjkRsZx_VqVdOSXuM1TTXeP-IbEQ |

Open each document at `https://docs.google.com/document/d/<ID>/edit`.
Unrelated text in the MBA and ABC FAQs and a broken IDE reference have been
removed. An external tracking parameter has also been removed.
The marksheet guide removes a contradictory December 2026 exam date and
clarifies that saving an online grade card does not replace the original marksheet.
