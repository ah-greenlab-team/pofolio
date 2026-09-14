import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { defaultLocale, htmlLang, type Locale } from "@/i18n/config";

const BLOG_ROOT = path.join(process.cwd(), "content", "blog");

/** Thư mục bài viết của một ngôn ngữ, ví dụ content/blog/en. */
function dirFor(locale: Locale): string {
  return path.join(BLOG_ROOT, locale);
}

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  /** Link tới bản gốc, ví dụ bài đăng trên LinkedIn. */
  source?: string;
};

export type Post = PostMeta & { html: string };

function readDir(locale: Locale): string[] {
  const dir = dirFor(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

function parse(locale: Locale, file: string) {
  const raw = fs.readFileSync(path.join(dirFor(locale), file), "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? "Untitled"),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    source: data.source ? String(data.source) : undefined,
  };
  return { meta, content };
}

export function getAllPosts(locale: Locale): PostMeta[] {
  return readDir(locale)
    .map((file) => parse(locale, file).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(
  locale: Locale,
  slug: string,
): Promise<Post | null> {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(dirFor(locale), file))) return null;
  const { meta, content } = parse(locale, file);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  return { ...meta, html: String(processed) };
}

/**
 * Mọi cặp (ngôn ngữ, slug) có bài viết — dùng cho generateStaticParams.
 */
export function getAllPostParams(locales: readonly Locale[]) {
  return locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({ lang: locale, slug: post.slug })),
  );
}

export function formatDate(date: string, locale: Locale = defaultLocale): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat(htmlLang[locale], {
    day: "2-digit",
    month: locale === "en" ? "short" : "2-digit",
    year: "numeric",
  }).format(d);
}
