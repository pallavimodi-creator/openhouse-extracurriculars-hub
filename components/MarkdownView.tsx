"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

// Renders a planning markdown doc with the hub's typography. Internal
// links to other planning docs (e.g. "how-to-fill-the-experience-book.md")
// are rewritten to /plan/docs/<slug> so review stays inside the hub.
export function MarkdownView({ content }: { content: string }) {
  return (
    <article className="prose prose-sm max-w-none prose-headings:font-extrabold prose-headings:lowercase prose-headings:text-ink prose-h1:text-[24px] prose-h2:text-[18px] prose-h3:text-[15px] prose-p:text-ink-muted prose-li:text-ink-muted prose-strong:text-ink prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline prose-table:text-[12px] prose-th:text-ink prose-td:text-ink-muted prose-blockquote:border-brand-orange prose-blockquote:text-ink-muted prose-code:text-brand-orange prose-code:before:content-none prose-code:after:content-none md:prose-base">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children }) {
            const h = href ?? "";
            // rewrite "<slug>.md" or "./<slug>.md" links to the in-app route
            const mdMatch = h.match(/(?:^|\/)([\w-]+)\.md(#.*)?$/);
            if (mdMatch) {
              return (
                <Link href={`/plan/docs/${mdMatch[1]}`}>{children}</Link>
              );
            }
            const isExternal = /^https?:\/\//.test(h);
            return (
              <a
                href={h}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
