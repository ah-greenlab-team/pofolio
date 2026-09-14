import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/data/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) => {
    const base = `${site.url}/${lang}`;

    const staticRoutes = ["", "/projects", "/blog"].map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    }));

    const projectRoutes = projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
    }));

    const postRoutes = getAllPosts(lang).map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    }));

    return [...staticRoutes, ...projectRoutes, ...postRoutes];
  });
}
