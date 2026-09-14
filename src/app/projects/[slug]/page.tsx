import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects, statusLabel } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="container-page py-16 sm:py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
      >
        <span aria-hidden="true">←</span> Tất cả ứng dụng
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex items-center gap-3 text-sm text-fg-subtle">
          <span className="font-mono">{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{statusLabel[project.status]}</span>
          {project.downloads && (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.downloads} lượt tải trên Google Play</span>
            </>
          )}
        </div>
        <div className="mt-3 flex items-center gap-4">
          {project.icon && (
            <Image
              src={project.icon}
              alt={`Icon ứng dụng ${project.title}`}
              width={144}
              height={144}
              className="size-16 shrink-0 rounded-[22%] shadow-lg ring-1 ring-black/10 sm:size-20"
            />
          )}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
        </div>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              {project.demoLabel ?? "Tải trên Google Play"}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-bg-subtle"
            >
              Mã nguồn
            </a>
          )}
        </div>
      </header>

      {project.image && (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-border">
          <Image src={project.image} alt="" fill sizes="100vw" className="object-cover" />
        </div>
      )}

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4 leading-relaxed text-fg-muted">
          {project.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Công nghệ
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-border bg-bg-card px-2.5 py-1 text-sm text-fg-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">
                Điểm nổi bật
              </h2>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-fg-muted">
                    <span className="text-accent" aria-hidden="true">
                      ▸
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
