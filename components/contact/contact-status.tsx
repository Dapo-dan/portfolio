import { CONTACT_STATUS } from "@/lib/constants";
import type { ContactStatus } from "@/types/contact";

type ContactStatusProps = {
  status?: ContactStatus;
  messages: Record<ContactStatus, string>;
};

export function ContactStatusBanner({ status, messages }: ContactStatusProps) {
  if (!status) {
    return null;
  }

  if (status === CONTACT_STATUS.success) {
    return (
      <p className="mb-6 rounded-lg border border-accent/40 bg-background px-4 py-3 text-sm text-accent">
        {messages.success}
      </p>
    );
  }

  return (
    <p className="mb-6 rounded-lg border border-primary-hover/40 bg-background px-4 py-3 text-sm text-primary-hover">
      {messages.error}
    </p>
  );
}
