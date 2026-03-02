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
        <div className="max-w-4xl space-y-6 rounded-2xl border border-border bg-surface p-8 text-base leading-8 text-text-muted sm:p-10">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
