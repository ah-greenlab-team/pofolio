import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Ứng dụng",
  description: "Danh sách các ứng dụng và dự án tôi đã xây dựng.",
};

export default function ProjectsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          Sản phẩm
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Ứng dụng</h1>
        <p className="mt-3 leading-relaxed text-fg-muted">
          Tất cả dự án tôi đã và đang xây dựng, từ sản phẩm đang chạy thật đến những
          thử nghiệm nhỏ cuối tuần.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
