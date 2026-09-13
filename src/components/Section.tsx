import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <header className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-3 leading-relaxed text-fg-muted">{description}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
