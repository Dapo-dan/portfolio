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
      <article className="py-14 sm:py-16">
        <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">{project.year}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">{project.description}</p>

        <section className="mt-8">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Stack</h2>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md border border-zinc-300 px-2 py-1 text-sm dark:border-zinc-700">
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}
