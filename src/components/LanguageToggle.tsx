"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { localeShort, locales, type Locale } from "@/i18n/config";

/**
 * Đổi ngôn ngữ bằng cách thay đoạn đầu của đường dẫn, ví dụ
 * /vi/projects/ah-vpn → /en/projects/ah-vpn, nên người xem ở lại đúng trang.
 */
export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locales.find((l) => l !== locale) ?? locale;
  const dict = getDictionary(locale);

  const segments = pathname.split("/");
  segments[1] = other;
  const href = segments.join("/") || `/${other}`;

  return (
    <Link
      href={href}
      aria-label={dict.language.switchTo}
      className="grid h-9 min-w-9 place-items-center rounded-lg border border-border px-2 font-mono text-xs font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
    >
      {localeShort[other]}
    </Link>
  );
}
