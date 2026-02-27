import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <Container>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">© {year} Oladapo. Built with Next.js.</p>
      </Container>
    </footer>
  );
}
