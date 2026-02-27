import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/ui/section";
import { aboutContent } from "@/content/pages";

export const metadata: Metadata = {
  title: "About",
  description: "Background, engineering principles, and technical focus.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <Section title={aboutContent.title} description={aboutContent.description}>
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
