"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { contactFormSchema, type ContactFormInput } from "./schema";

export const useOrderForm = () => {
    const methods = useForm<ContactFormInput>({
        resolver: zodResolver(contactFormSchema),
    });
    const {
        handleSubmit,
        register,
        formState: { isSubmitting, isSubmitSuccessful, errors },
        watch,
    } = methods;

    const onSubmitHandler: SubmitHandler<ContactFormInput> = async (values) => {
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("Please set environment variables.");
            return;
        }

        const templateParams = {
            name: values.name,
            phoneNumber: values.phoneNumber ?? "none",
            email: values.email,
            message: values.message ?? "",
        };
        try {
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
        } catch (error) {
            alert(
                "Das Senden der E-Mail ist fehlgeschlagen. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut. Sollte das Problem weiterhin bestehen, kontaktieren Sie mich bitte direkt über das E-Mail-Symbol unten links."
            );
            console.error("EmailJS Error:", error);
        }
    };

    return {
        handleSubmit,
        register,
        onSubmitHandler,
        isSubmitting,
        isSubmitSuccessful,
        errors,
        watch,
    };
};
