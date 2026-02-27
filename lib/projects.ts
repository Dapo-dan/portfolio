import { notFound } from "next/navigation";

import { projects } from "@/content/projects";
import type { Project } from "@/types/project";

export function getProjects(): Project[] {
  return projects;
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): Project {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return project;
}
