import type { ContactField, ContactStatus } from "@/types/contact";

import { submitContact } from "@/lib/actions/contact";
import { ContactStatusBanner } from "@/components/contact/contact-status";

type ContactFormProps = {
  fields: ContactField[];
  status?: ContactStatus;
  statusMessages: Record<ContactStatus, string>;
  submitLabel: string;
};

const inputClassName =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-300 transition placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950";

export function ContactForm({ fields, status, statusMessages, submitLabel }: ContactFormProps) {
  return (
    <div className="max-w-xl rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <ContactStatusBanner status={status} messages={statusMessages} />
      <form action={submitContact} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="space-y-1">
            <label htmlFor={field.name} className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {field.label}
            </label>
            {field.inputType === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={field.rows ?? 4}
                className={inputClassName}
                placeholder={field.placeholder}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.inputType}
                className={inputClassName}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
