import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies across fintech infrastructure and AI mobile product systems.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageShell>
      <Section title="Case Studies" description="Production fintech and AI mobile engineering delivered with an architecture-first approach.">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
