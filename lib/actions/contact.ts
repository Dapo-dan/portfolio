"use server";

import { redirect } from "next/navigation";

import { CONTACT_STATUS, ROUTES } from "@/lib/constants";

function getValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(formData: FormData): Promise<void> {
  const name = getValue(formData, "name");
  const email = getValue(formData, "email");
  const message = getValue(formData, "message");

  if (!name || !email || !message) {
    redirect(`${ROUTES.contact}?status=${CONTACT_STATUS.error}`);
  }

  redirect(`${ROUTES.contact}?status=${CONTACT_STATUS.success}`);
}
