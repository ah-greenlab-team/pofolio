import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-fg-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Xây bằng Next.js &amp; Tailwind CSS.
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
