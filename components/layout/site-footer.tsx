import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/90 py-12">
      <Container>
        <p className="text-sm text-text-muted">© {year} Oladapo. Designed and engineered with Next.js.</p>
      </Container>
    </footer>
  );
}
