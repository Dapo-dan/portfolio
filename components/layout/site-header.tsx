import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
            {site.name}
          </Link>
          <nav>
            <ul className="flex items-center gap-5 text-sm text-zinc-700 dark:text-zinc-300">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
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
