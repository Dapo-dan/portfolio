import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h3>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{project.year}</span>
      </div>
      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{project.summary}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
      >
        View project
      </Link>
    </article>
  );
}
