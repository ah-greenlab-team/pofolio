import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllPostParams, formatDate } from "@/lib/blog";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/config";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return getAllPostParams(locales);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const post = await getPost(lang, slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: Params) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const post = await getPost(lang, slug);
  if (!post) notFound();

  const dict = getDictionary(lang);

  return (
    <article className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <span aria-hidden="true">←</span> {dict.blog.backToAll}
        </Link>
      </div>

      <header className="mx-auto mt-8 max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <time className="font-mono text-xs text-fg-subtle">
            {formatDate(post.date, lang)}
          </time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-bg-subtle px-2 py-0.5 text-xs text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <div
        className="prose-post mx-auto mt-10 max-w-2xl"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {post.source && (
        <footer className="mx-auto mt-12 max-w-2xl border-t border-border pt-6">
          <p className="text-sm text-fg-muted">
            {dict.blog.originallyOn}{" "}
            <a
              href={post.source}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </footer>
      )}
    </article>
  );
}
