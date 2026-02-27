import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return <Container>{children}</Container>;
}
