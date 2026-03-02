import { profile } from "@/content/profile";
import { featuredCaseStudies } from "@/content/projects";

type HomeHero = {
  headline: string;
  authorityLine: string;
  ctas: [string, string];
};

type HomeCaseStudy = {
  slug: string;
  name: string;
  company: string;
  positioning: string;
};

export type HomePageContent = {
  hero: HomeHero;
  whatIBuild: string[];
  featuredCaseStudies: {
    title: string;
    intro: string;
    items: HomeCaseStudy[];
  };
  experienceSnapshot: string[];
  finalCta: {
    closingLine: string;
    ctas: [string, string];
  };
};

const featuredItems: HomeCaseStudy[] = featuredCaseStudies.map((caseStudy) => ({
  slug: caseStudy.slug,
  name: caseStudy.name,
  company: caseStudy.company,
  positioning: caseStudy.positioning,
}));

export const homepageContent: HomePageContent = {
  hero: {
    headline: profile.hero.headline,
    authorityLine: profile.hero.authorityLine,
    ctas: [profile.hero.primaryCtaLabel, profile.hero.secondaryCtaLabel],
  },
  whatIBuild: profile.expertise,
  featuredCaseStudies: {
    title: "Featured Case Studies",
    intro: "Architecture-first delivery across remittance, open banking, and AI-enabled mobile systems.",
    items: featuredItems,
  },
  experienceSnapshot: profile.experienceSnapshot,
  finalCta: {
    closingLine: profile.finalCta.closingLine,
    ctas: [profile.finalCta.primaryCtaLabel, profile.finalCta.secondaryCtaLabel],
  },
};
