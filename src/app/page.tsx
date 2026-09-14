import Link from "next/link";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { skillGroups, timeline } from "@/data/experience";
import { site } from "@/data/site";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <Hero />

      <Section
        id="projects"
        eyebrow="Sản phẩm"
        title="Ứng dụng tôi đã xây"
        description="Một vài ứng dụng tiêu biểu đang có mặt trên Google Play. Mỗi app đều có trang chi tiết mô tả bài toán và cách tôi giải quyết."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Xem tất cả ứng dụng
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section
        id="about"
        eyebrow="Giới thiệu"
        title="Đôi lời về tôi"
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="space-y-4 leading-relaxed text-fg-muted">
              {site.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Facts />
          </div>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">
                  {group.title}
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

      <Section eyebrow="Hành trình" title="Kinh nghiệm & học vấn">
        <ol className="relative space-y-8 border-l border-border pl-8">
          {timeline.map((item) => (
            <li key={item.period + item.title} className="relative">
              <span className="absolute -left-[38px] top-1.5 size-2.5 rounded-full border-2 border-bg bg-accent" />
              <p className="font-mono text-xs text-fg-subtle">{item.period}</p>
              <h3 className="mt-1 font-semibold">{item.title}</h3>
              <p className="text-sm text-accent">{item.org}</p>
              {(item.type || item.location) && (
                <p className="mt-0.5 text-xs text-fg-subtle">
                  {[item.type, item.location].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {posts.length > 0 && (
        <Section
          eyebrow="Blog"
          title="Bài viết gần đây"
          description="Ghi chép về những thứ tôi học được trong lúc làm sản phẩm."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-border bg-bg-card p-5 transition-colors hover:border-accent/50"
              >
                <p className="font-mono text-xs text-fg-subtle">{formatDate(post.date)}</p>
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

      <Contact />
    </>
  );
}

function Hero() {
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
              Đang nhận dự án mới
            </p>
          )}

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            {site.name}
            <span className="block text-fg-subtle">{site.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              Xem ứng dụng
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-bg-subtle"
            >
              Liên hệ với tôi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Liên hệ"
      title="Cùng xây thứ gì đó"
      description="Nếu bạn có dự án phù hợp hoặc chỉ muốn trao đổi về công nghệ, cứ gửi cho tôi một email."
    >
      <div className="rounded-xl border border-border bg-bg-card p-8">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-lg font-medium text-accent underline-offset-4 hover:underline sm:text-2xl"
        >
          {site.email}
        </a>
        <p className="mt-3 text-sm text-fg-muted">{site.location}</p>

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

/** Vài thông tin cơ bản hiển thị dưới phần giới thiệu. */
function Facts() {
  const facts = [
    { label: "Ngày sinh", value: site.birthDate },
    { label: "Địa điểm", value: site.location },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    site.phone ? { label: "Điện thoại", value: site.phone, href: `tel:${site.phone}` } : null,
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
              <a href={fact.href} className="text-accent underline-offset-4 hover:underline">
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
