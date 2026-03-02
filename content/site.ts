import { ROUTES } from "@/lib/constants";
import type { SiteConfig } from "@/types/site";

export const site: SiteConfig = {
  name: "Oladapo",
  title: "Oladapo | Fintech & AI Mobile Engineer",
  description:
    "Senior fintech and AI mobile engineer building secure, high-performance systems for regulated markets.",
  nav: [
    { href: ROUTES.home, label: "Home" },
    { href: ROUTES.projects, label: "Projects" },
    { href: ROUTES.about, label: "About" },
    { href: ROUTES.contact, label: "Contact" },
  ],
};
