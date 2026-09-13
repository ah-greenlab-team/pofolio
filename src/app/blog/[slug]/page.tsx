import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <span aria-hidden="true">←</span> Tất cả bài viết
        </Link>
      </div>

      <header className="mx-auto mt-8 max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <time className="font-mono text-xs text-fg-subtle">{formatDate(post.date)}</time>
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
    </article>
  );
}
