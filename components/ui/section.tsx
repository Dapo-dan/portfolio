import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="py-10 sm:py-12">
      <header className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h2>
        {description ? <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
