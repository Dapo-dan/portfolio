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
  description: "Senior frontend engineer with a product and platform mindset.",
  paragraphs: [
    "I build robust frontend applications with strong performance baselines, straightforward architecture, and maintainable developer workflows.",
    "My recent work has focused on scaling Next.js applications, improving runtime performance, and designing reusable UI systems for growing teams.",
  ],
} as const;

export const contactContent = {
  title: "Contact",
  description: "Send a message and I will get back to you soon.",
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
