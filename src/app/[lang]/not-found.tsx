import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";

export default function NotFound() {
  // not-found.tsx không nhận params, nên dùng ngôn ngữ mặc định.
  const dict = getDictionary(defaultLocale);

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 max-w-md text-fg-muted">{dict.notFound.description}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-8 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
      >
        {dict.notFound.backHome}
      </Link>
    </div>
  );
}
