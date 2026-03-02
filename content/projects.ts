import type { Project } from "@/types/project";

export type CaseStudy = {
  slug: string;
  name: string;
  company: string;
  year: number;
  positioning: string;
  architecture: string;
  infrastructure: string;
  security: string;
  scale: string;
};

export const featuredCaseStudies: CaseStudy[] = [
  {
    slug: "voye-cede",
    name: "Voye",
    company: "Cede",
    year: 2025,
    positioning:
      "Built core cross-border remittance architecture across Canada, the UK, and Africa with wallet and transfer systems designed for high-trust financial operations.",
    architecture:
      "Transfer lifecycle architecture for wallet creation, beneficiary setup, FX-aware transaction states, and real-time user notifications.",
    infrastructure:
      "Mobile-to-backend integration for structured transaction logging, state reconciliation, and reliable status updates.",
    security:
      "KYC-integrated onboarding with code obfuscation, SSL pinning, and jailbreak/root detection.",
    scale:
      "Designed for multi-region transfer flows and compliance-sensitive user journeys.",
  },
  {
    slug: "monimoore",
    name: "MoniMoore",
    company: "MoniMoore",
    year: 2024,
    positioning:
      "Engineered the mobile foundation for digital wealth workflows using open banking integrations and transaction intelligence.",
    architecture:
      "Modular mobile system for account aggregation, financial goal tracking, and categorized transaction analytics.",
    infrastructure:
      "Secure API integration for bank account linking, synchronized account dashboards, and real-time financial visibility.",
    security:
      "Identity-aware onboarding and authenticated account-linking flows with stable session management.",
    scale:
      "Built to support expanding financial data sources and growing user activity.",
  },
  {
    slug: "packy-ai",
    name: "Packy AI",
    company: "Packy AI",
    year: 2023,
    positioning:
      "Architected an AI-powered mobile product with offline-first behavior and fast feature iteration.",
    architecture:
      "Scalable Flutter architecture for AI response handling, itinerary generation, and smart packing workflows.",
    infrastructure:
      "Resilient sync model with local document persistence to support unstable network conditions.",
    security:
      "Privacy-conscious handling of travel documents and user context across offline and online states.",
    scale:
      "Structured for rapid product evolution and increasing AI-driven interaction volume.",
  },
];

export const projects: Project[] = featuredCaseStudies.map((caseStudy) => ({
  slug: caseStudy.slug,
  title: caseStudy.name,
  summary: caseStudy.positioning,
  description: `${caseStudy.architecture} ${caseStudy.infrastructure} ${caseStudy.security} ${caseStudy.scale}`,
  stack: ["Flutter", "Fintech Infrastructure", "AI Integration", "Security"],
  year: caseStudy.year,
}));
