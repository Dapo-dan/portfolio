import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/90 bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="text-base font-semibold tracking-tight text-text-primary sm:text-lg">
            {site.name}
          </Link>
          <nav>
            <ul className="flex items-center gap-5 text-sm font-medium text-text-muted sm:gap-8">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors duration-200 hover:text-text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
