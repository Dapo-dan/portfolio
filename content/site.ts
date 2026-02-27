import { ROUTES } from "@/lib/constants";
import type { SiteConfig } from "@/types/site";

export const site: SiteConfig = {
  name: "Oladapo Portfolio",
  title: "Oladapo | Frontend Engineer",
  description:
    "Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.",
  nav: [
    { href: ROUTES.home, label: "Home" },
    { href: ROUTES.projects, label: "Projects" },
    { href: ROUTES.about, label: "About" },
    { href: ROUTES.contact, label: "Contact" },
  ],
};
