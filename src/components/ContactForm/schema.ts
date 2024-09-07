import { literal, object, string, type TypeOf } from "zod";

export const contactFormSchema = object({
  name: string().min(2, "Bitte geben Sie einen gültigen Namen ein"),
  phoneNumber: string()
    .optional()
    .refine((val) => !val || /^\d+$/.test(val), {
      message: "Telefonnummer darf nur Zahlen enthalten",
    }),
  email: string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: string().optional(),
  privacyPolicy: literal(true, {
    errorMap: () => ({
      message: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
    }),
  }),
});

export type ContactFormInput = TypeOf<typeof contactFormSchema>;
