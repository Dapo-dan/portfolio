import type { ContactField } from "@/types/contact";

export const homeContent = {
  eyebrow: "Frontend Engineer",
  title: "Building fast, accessible, and maintainable web experiences.",
  description:
    "I focus on production-grade frontend systems with clear architecture, strong typing, and user-centered performance.",
  featuredTitle: "Featured work",
  featuredDescription: "Selected projects focused on performance and system quality.",
  ctaPrimary: "View projects",
  ctaSecondary: "Contact",
} as const;

export const aboutContent = {
  title: "About",
  description: "Senior fintech and AI mobile engineer with a product systems mindset.",
  paragraphs: [
    "I design and ship mobile systems where reliability, compliance, and speed of delivery all matter at once.",
    "Recent work spans remittance rails, wallet lifecycle architecture, KYC-critical onboarding, open banking integration, and AI-assisted workflows.",
  ],
} as const;

export const contactContent = {
  title: "Contact",
  description: "Share your product goals and technical context. I will reply with a practical next step.",
  submitLabel: "Send message",
  statusMessages: {
    success: "Message sent successfully.",
    error: "Please complete all fields.",
  },
  fields: [
    { name: "name", label: "Name", placeholder: "Your name", inputType: "text" },
    { name: "email", label: "Email", placeholder: "you@example.com", inputType: "email" },
    {
      name: "message",
      label: "Message",
      placeholder: "Tell me about your project",
      inputType: "textarea",
      rows: 5,
    },
  ] as ContactField[],
} as const;
