import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, formatDate } from "@/lib/blog";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/config";

type Params = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.blog.title, description: dict.blog.description };
}

export default async function BlogPage({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const posts = getAllPosts(lang);

  return (
    <div className="container-page py-16 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          {dict.blog.eyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.blog.title}
        </h1>
        <p className="mt-3 leading-relaxed text-fg-muted">{dict.blog.description}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-fg-muted">{dict.blog.empty}</p>
      ) : (
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${lang}/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-bg-subtle/50"
              >
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
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="leading-relaxed text-fg-muted">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
