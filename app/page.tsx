import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { homepageContent } from "@/content/homepage";
import { featuredCaseStudies } from "@/content/projects";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Senior cross-border fintech and AI mobile engineer focused on wallets, transaction systems, KYC, and open banking infrastructure.",
};

const PRIMARY_BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-text-primary transition-colors duration-200 hover:bg-primary-hover";

const SECONDARY_BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-primary hover:text-primary";

export default function HomePage() {
  return (
    <div className="bg-background text-text-primary">
      <section className="w-full border-b border-border py-24 sm:py-32">
        <Container>
          <div className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{homepageContent.hero.headline}</p>
            <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Wallet, transaction, and AI mobile systems for regulated markets.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-muted sm:text-xl">{homepageContent.hero.authorityLine}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href={ROUTES.projects} className={PRIMARY_BUTTON_CLASS}>
                {homepageContent.hero.ctas[0]}
              </Link>
              <Link href={ROUTES.contact} className={SECONDARY_BUTTON_CLASS}>
                {homepageContent.hero.ctas[1]}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="space-y-10">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">What I Build</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {homepageContent.whatIBuild.map((item) => (
                <li key={item} className="rounded-2xl border border-border bg-surface p-6 text-base leading-7 text-text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                {homepageContent.featuredCaseStudies.title}
              </h2>
              <p className="max-w-3xl text-base leading-7 text-text-muted sm:text-lg">{homepageContent.featuredCaseStudies.intro}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredCaseStudies.map((caseStudy) => (
                <article
                  key={caseStudy.slug}
                  className="rounded-2xl border border-border bg-surface p-7 transition-transform duration-200 hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{caseStudy.year}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
                    {caseStudy.name} <span className="text-text-muted">/ {caseStudy.company}</span>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-text-muted">{caseStudy.positioning}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="space-y-10">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">Experience Snapshot</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {homepageContent.experienceSnapshot.map((item) => (
                <li key={item} className="rounded-2xl border border-border bg-surface p-6 text-base leading-7 text-text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <div className="max-w-4xl space-y-8 rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              {homepageContent.finalCta.closingLine}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link href={ROUTES.projects} className={PRIMARY_BUTTON_CLASS}>
                {homepageContent.finalCta.ctas[0]}
              </Link>
              <Link href={ROUTES.contact} className={SECONDARY_BUTTON_CLASS}>
                {homepageContent.finalCta.ctas[1]}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
