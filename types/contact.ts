export type ContactStatus = "success" | "error";

export type ContactField = {
  name: "name" | "email" | "message";
  label: string;
  placeholder: string;
  inputType: "text" | "email" | "textarea";
  rows?: number;
};
