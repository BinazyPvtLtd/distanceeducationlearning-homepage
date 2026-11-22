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
| AOC recruitment | 1-Ag4HJ3bn9slcUeurT4APoWQMGxhoYbEo4ca3tmwqlg | 1D-vX9fmEb5nXkIDgWJTcxavZTp0YgJQkISoyXlxMua4 |
| GUJCET result | 1ojy_oWJX-l0P41hJHyHT9a3Bk9VYO1H9DWN8xDmWyHY | 14PPH-o-3-S-XVmO7d-AiOS2WJLmPMpXMrCQ5_8xAXjc |
| Amity student login | 1WTYCCNkONjevLq7_hs3Y_QHvGWrYjDgkP-4LbCjx27k | 1EXOLfv9CoRX3cNS-ozp-KgUHJ8-ggo5hbG7c2PQGeFg |
| IGNOU percentage calculation | Authored from the supplied SEO outline | 1CtsyolvRhjrAkIGswkA6IsmEUtCwpHq4YgO1Edp_MdM |
| AKTU admit card | 1mv_4NjfcJWZHsA1g3Agqw06qnIUFRRWqm01kTRZLbNE | 1YC34m3OdrXRnnRFFGOINuKCt9o4F83bxuXx-KydBo1U |

The IGNOU percentage guide is dated 31 October 2026. Both tracker links point
to the same SEO outline, so the article was authored from that outline rather
than imported as finished copy. It includes a two-component course calculator,
programme-specific evaluation guidance and official source links. The 30:70
example was checked against IGNOU's BANM-163 January 2026 assignment booklet.

Open each document at `https://docs.google.com/document/d/<ID>/edit`.
The three additional articles were imported on 28 October 2026 from the
linked content documents in the supplied blog tracker. Their individual dates
are set in `lib/blog.ts`. Dates and recruitment claims in supplied copy are
not independent verification of official notices. The AOC import corrects a
contradictory statement claiming an unverified admit-card date was announced.
Unrelated text in the MBA and ABC FAQs and a broken IDE reference have been
removed. An external tracking parameter has also been removed.
The marksheet guide removes a contradictory December 2026 exam date and
clarifies that saving an online grade card does not replace the original marksheet.
