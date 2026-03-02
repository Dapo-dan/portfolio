import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-10 py-8 sm:space-y-12 sm:py-10">
      <header className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">{title}</h2>
        {description ? <p className="max-w-3xl text-base leading-7 text-text-muted sm:text-lg">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
