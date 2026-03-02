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
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none ring-primary transition-colors duration-200 placeholder:text-text-muted focus:ring-2";

export function ContactForm({ fields, status, statusMessages, submitLabel }: ContactFormProps) {
  return (
    <div className="max-w-2xl rounded-2xl border border-border bg-surface p-8 sm:p-10">
      <ContactStatusBanner status={status} messages={statusMessages} />
      <form action={submitContact} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2.5">
            <label htmlFor={field.name} className="text-sm font-medium text-text-primary">
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
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-text-primary transition-colors duration-200 hover:bg-primary-hover"
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
