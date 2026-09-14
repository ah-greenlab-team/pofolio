import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-fg-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. {dict.footer.builtWith}
        </p>
        <div className="flex gap-4">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-fg"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
