import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return (
    <PageShell>
      <article className="space-y-12 py-2">
        <header className="space-y-5 border-b border-border pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{project.year}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">{project.title}</h1>
          <p className="max-w-4xl text-lg leading-8 text-text-muted">{project.summary}</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-8 lg:col-span-2">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Execution</h2>
            <p className="text-base leading-8 text-text-muted">{project.description}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Stack</h2>
            <ul className="space-y-3">
            {project.stack.map((tech) => (
                <li key={tech} className="text-sm font-medium text-text-primary">
                {tech}
              </li>
            ))}
            </ul>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
