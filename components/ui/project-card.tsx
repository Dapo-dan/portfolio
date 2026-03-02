import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-7 transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold tracking-tight text-text-primary">{project.title}</h3>
        <span className="text-sm text-text-muted">{project.year}</span>
      </div>
      <p className="mb-6 text-base leading-7 text-text-muted">{project.summary}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-accent"
      >
        View case study
      </Link>
    </article>
  );
}
