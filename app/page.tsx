import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { homeContent } from "@/content/pages";
import { FEATURED_PROJECT_COUNT, ROUTES } from "@/lib/constants";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Home",
  description: "Frontend engineer portfolio focused on performance and maintainable UI architecture.",
};

export default function HomePage() {
  const featuredProjects = getProjects().slice(0, FEATURED_PROJECT_COUNT);

  return (
    <PageShell>
      <section className="py-16 sm:py-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">{homeContent.eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          {homeContent.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">{homeContent.description}</p>
        <div className="mt-8 flex gap-4">
          <Link
            href={ROUTES.projects}
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {homeContent.ctaPrimary}
          </Link>
          <Link
            href={ROUTES.contact}
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500"
          >
            {homeContent.ctaSecondary}
          </Link>
        </div>
      </section>

      <Section title={homeContent.featuredTitle} description={homeContent.featuredDescription}>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
