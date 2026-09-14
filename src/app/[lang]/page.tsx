import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { skillGroups, timeline } from "@/data/experience";
import { site } from "@/data/site";
import { getAllPosts, formatDate } from "@/lib/blog";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { isLocale, pick, type Locale } from "@/i18n/config";

type Params = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const posts = getAllPosts(lang).slice(0, 2);

  return (
    <>
      <Hero locale={lang} dict={dict} />

      <Section
        id="projects"
        eyebrow={dict.home.projectsEyebrow}
        title={dict.home.projectsTitle}
        description={dict.home.projectsDescription}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} locale={lang} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={`/${lang}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            {dict.home.viewAllProjects}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section
        id="about"
        eyebrow={dict.home.aboutEyebrow}
        title={dict.home.aboutTitle}
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="space-y-4 leading-relaxed text-fg-muted">
              {pick(site.bio, lang).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Facts locale={lang} dict={dict} />
          </div>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title.en}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">
                  {pick(group.title, lang)}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-bg-card px-2.5 py-1 text-sm text-fg-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow={dict.home.timelineEyebrow}
        title={dict.home.timelineTitle}
      >
        <ol className="relative space-y-8 border-l border-border pl-8">
          {timeline.map((item) => {
            const type = item.type ? pick(item.type, lang) : null;
            const location = item.location ? pick(item.location, lang) : null;
            return (
              <li key={item.period.en + item.title.en} className="relative">
                <span className="absolute -left-[38px] top-1.5 size-2.5 rounded-full border-2 border-bg bg-accent" />
                <p className="font-mono text-xs text-fg-subtle">
                  {pick(item.period, lang)}
                </p>
                <h3 className="mt-1 font-semibold">{pick(item.title, lang)}</h3>
                <p className="text-sm text-accent">{pick(item.org, lang)}</p>
                {(type || location) && (
                  <p className="mt-0.5 text-xs text-fg-subtle">
                    {[type, location].filter(Boolean).join(" · ")}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {pick(item.description, lang)}
                </p>
              </li>
            );
          })}
        </ol>
      </Section>

      {posts.length > 0 && (
        <Section
          eyebrow={dict.home.blogEyebrow}
          title={dict.home.blogTitle}
          description={dict.home.blogDescription}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="group rounded-xl border border-border bg-bg-card p-5 transition-colors hover:border-accent/50"
              >
                <p className="font-mono text-xs text-fg-subtle">
                  {formatDate(post.date, lang)}
                </p>
                <h3 className="mt-2 font-semibold tracking-tight group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Contact locale={lang} dict={dict} />
    </>
  );
}

function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--accent) 0, transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-3xl animate-rise">
          {site.availableForWork && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1 text-sm text-fg-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {dict.hero.available}
            </p>
          )}

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            {site.name}
            <span className="block text-fg-subtle">{pick(site.role, locale)}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {pick(site.tagline, locale)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/projects`}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              {dict.hero.viewProjects}
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-bg-subtle"
            >
              {dict.hero.contactMe}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Vài thông tin cơ bản hiển thị dưới phần giới thiệu. */
function Facts({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const facts = [
    { label: dict.facts.birthDate, value: site.birthDate },
    { label: dict.facts.location, value: pick(site.location, locale) },
    { label: dict.facts.email, value: site.email, href: `mailto:${site.email}` },
    site.phone
      ? { label: dict.facts.phone, value: site.phone, href: `tel:${site.phone}` }
      : null,
  ].filter((f) => f !== null);

  return (
    <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-2">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
            {fact.label}
          </dt>
          <dd className="mt-1 text-sm">
            {fact.href ? (
              <a
                href={fact.href}
                className="text-accent underline-offset-4 hover:underline"
              >
                {fact.value}
              </a>
            ) : (
              fact.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Contact({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section
      id="contact"
      eyebrow={dict.home.contactEyebrow}
      title={dict.home.contactTitle}
      description={dict.home.contactDescription}
    >
      <div className="rounded-xl border border-border bg-bg-card p-8">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-lg font-medium text-accent underline-offset-4 hover:underline sm:text-2xl"
        >
          {site.email}
        </a>
        <p className="mt-3 text-sm text-fg-muted">{pick(site.location, locale)}</p>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-bg-subtle"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
