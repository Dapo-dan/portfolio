export type RoutePath = "/" | "/projects" | "/about" | "/contact";

export type NavItem = {
  href: RoutePath;
  label: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  nav: NavItem[];
};
