import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/ui/section";
import { contactContent } from "@/content/pages";
import { CONTACT_STATUS } from "@/lib/constants";
import type { ContactStatus } from "@/types/contact";

type ContactPageProps = {
  searchParams: Promise<{ status?: string }>;
};

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out for fintech and AI mobile engineering collaboration.",
};

function getStatus(status?: string): ContactStatus | undefined {
  if (status === CONTACT_STATUS.success || status === CONTACT_STATUS.error) {
    return status;
  }

  return undefined;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { status } = await searchParams;
  const normalizedStatus = getStatus(status);

  return (
    <PageShell>
      <Section title={contactContent.title} description={contactContent.description}>
        <ContactForm
          fields={[...contactContent.fields]}
          status={normalizedStatus}
          statusMessages={contactContent.statusMessages}
          submitLabel={contactContent.submitLabel}
        />
      </Section>
    </PageShell>
  );
}
