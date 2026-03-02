import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <Container>
      <div className="py-16 sm:py-20">{children}</div>
    </Container>
  );
}
