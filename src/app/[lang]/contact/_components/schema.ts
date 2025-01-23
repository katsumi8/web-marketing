import { literal, object, string, type TypeOf } from "zod";

export const contactFormSchema = object({
    name: string().min(2, "Please enter your name"),
    phoneNumber: string()
        .optional()
        .refine((val) => !val || /^\d+$/.test(val), {
            message: "Please enter a valid phone number",
        }),
    email: string().email("Please enter a valid email address"),
    message: string().min(1, "Please enter a message"),
    privacyPolicy: literal(true, {
        errorMap: () => ({
            message: "Please accept the privacy policy",
        }),
    }),
});

export type ContactFormInput = TypeOf<typeof contactFormSchema>;
