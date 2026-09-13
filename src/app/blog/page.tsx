import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ghi chép về lập trình, sản phẩm và những thứ tôi học được.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container-page py-16 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          Viết lách
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 leading-relaxed text-fg-muted">
          Ghi chép về lập trình, sản phẩm và những thứ tôi học được dọc đường.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-fg-muted">Chưa có bài viết nào.</p>
      ) : (
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-bg-subtle/50"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <time className="font-mono text-xs text-fg-subtle">
                    {formatDate(post.date)}
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
