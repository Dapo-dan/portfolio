export type Profile = {
  name: string;
  role: string;
  hero: {
    headline: string;
    authorityLine: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  expertise: string[];
  experienceSnapshot: string[];
  finalCta: {
    closingLine: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
};

export const profile: Profile = {
  name: "Oladapo D. Olatubosun",
  role: "Senior Cross-Border Fintech & AI Mobile Engineer",
  hero: {
    headline: "Senior Cross-Border Fintech & AI Mobile Engineer",
    authorityLine:
      "I design and ship secure mobile systems for wallets, remittance, KYC, open banking, and AI-driven workflows across regulated markets.",
    primaryCtaLabel: "View Case Studies",
    secondaryCtaLabel: "Book a Strategy Call",
  },
  expertise: [
    "Cross-border wallet infrastructure: account creation, balances, beneficiaries, and transfer rails",
    "Real-time transaction systems: orchestration, state tracking, history logging, and live alerts",
    "KYC and compliance flows: identity verification, document capture, and secure onboarding",
    "Open banking integrations: account linking, data ingestion, and session control",
    "Mobile security controls: SSL pinning, obfuscation, jailbreak/root detection, and anti-tamper",
    "AI-enabled mobile features: personalized outputs, dynamic workflows, and offline-first sync",
  ],
  experienceSnapshot: [
    "5+ years shipping production mobile systems across fintech, healthtech, edtech, and commerce",
    "Owned remittance, wallet, and compliance-critical mobile features for international markets",
    "Built open banking and transaction intelligence capabilities for consumer finance products",
    "Delivered AI-integrated mobile architecture with resilient offline behavior",
    "Trusted by distributed teams to lead architecture, execution, and release quality",
  ],
  finalCta: {
    closingLine:
      "If you need a senior engineer to build secure fintech and AI mobile systems that scale across markets, let's talk.",
    primaryCtaLabel: "Review My Work",
    secondaryCtaLabel: "Start a Conversation",
  },
};
