import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { getDictionary } from "@/i18n/dictionaries";
import { pick, type Locale } from "@/i18n/config";

const statusStyle: Record<Project["status"], string> = {
  live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  wip: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  archived: "bg-zinc-500/10 text-fg-subtle",
};

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const dict = getDictionary(locale);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card transition-colors hover:border-accent/50">
      <div className="relative aspect-[16/9] overflow-hidden bg-bg-subtle">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <CardArt title={project.title} icon={project.icon} />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyle[project.status]}`}
          >
            {dict.projects.status[project.status]}
          </span>
          <span className="font-mono text-xs text-fg-subtle">{project.year}</span>
          {project.downloads && (
            <span className="font-mono text-xs text-fg-subtle">
              · {project.downloads} {dict.projects.downloads}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold tracking-tight">
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="after:absolute after:inset-0"
          >
            {project.title}
          </Link>
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-fg-muted">
          {pick(project.summary, locale)}
        </p>

        <ul className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-md bg-bg-subtle px-2 py-1 font-mono text-xs text-fg-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/**
 * Nền của card: dùng chính icon app phóng to và làm mờ, nên màu nền
 * luôn khớp với icon. App chưa có icon thì rơi về gradient sinh theo tên.
 */
function CardArt({ title, icon }: { title: string; icon?: string }) {
  if (!icon) return <GradientArt title={title} />;

  return (
    <div className="relative size-full overflow-hidden">
      <Image
        src={icon}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="scale-150 object-cover blur-2xl saturate-150"
      />
      <div className="absolute inset-0 bg-white/20 dark:bg-black/35" />
      <div className="relative grid size-full place-items-center">
        <Image
          src={icon}
          alt={title}
          width={160}
          height={160}
          className="size-20 rounded-[22%] shadow-xl ring-1 ring-black/10 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

/** Ảnh gradient sinh theo tên, dùng khi app chưa có icon. */
function GradientArt({ title }: { title: string }) {
  const hue = [...title].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return (
    <div
      className="grid size-full place-items-center"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 70% 60% / 0.25), hsl(${(hue + 60) % 360} 70% 50% / 0.15))`,
      }}
    >
      <span className="font-mono text-3xl font-bold text-fg/25" aria-hidden="true">
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}
