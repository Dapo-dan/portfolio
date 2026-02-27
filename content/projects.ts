import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "performance-dashboard",
    title: "Performance Dashboard",
    summary: "Web vitals analytics dashboard for large Next.js properties.",
    description:
      "A dashboard focused on real-user performance metrics, release tracking, and regression alerts. It highlights trends and supports quick diagnosis for frontend teams.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    year: 2025,
    href: "#",
  },
  {
    slug: "design-system-kit",
    title: "Design System Kit",
    summary: "Reusable UI foundation with accessibility-first primitives.",
    description:
      "A small, maintainable component kit with clear API boundaries and strict typing. It enables consistent UX across product surfaces with minimal overhead.",
    stack: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    year: 2024,
    href: "#",
  },
  {
    slug: "commerce-starter",
    title: "Commerce Starter",
    summary: "High-conversion storefront starter optimized for speed.",
    description:
      "A production-ready ecommerce starter using server-first rendering, fast product listing pages, and pragmatic SEO defaults for growth teams.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    year: 2023,
    href: "#",
  },
];
