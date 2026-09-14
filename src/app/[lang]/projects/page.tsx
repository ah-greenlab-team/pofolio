import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
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
  return { title: dict.projects.title, description: dict.projects.description };
}

export default async function ProjectsPage({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div className="container-page py-16 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          {dict.projects.eyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.projects.title}
        </h1>
        <p className="mt-3 leading-relaxed text-fg-muted">
          {dict.projects.description}
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} locale={lang} />
        ))}
      </div>
    </div>
  );
}
