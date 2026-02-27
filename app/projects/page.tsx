import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project case studies and production frontend work.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageShell>
      <Section title="Projects" description="A concise list of recent product and platform work.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
