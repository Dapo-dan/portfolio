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
      <p className="mb-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
        {messages.success}
      </p>
    );
  }

  return (
    <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
      {messages.error}
    </p>
  );
}
