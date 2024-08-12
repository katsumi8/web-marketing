"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { orderingSchema, type OrderingInput } from "./schema";

export const useOrderForm = () => {
  const methods = useForm<OrderingInput>({
    resolver: zodResolver(orderingSchema),
    defaultValues: {
      items: [{ taste: "Taiyaki mit Vanillepudding", quantity: "1" }], // 最初の項目をデフォルトで追加
    },
  });
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitSuccessful, errors },
    watch,
    control,
  } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items", // 配列フィールドの名前
  });

  const onSubmitHandler: SubmitHandler<OrderingInput> = async (values) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Please set environment variables.");
      return;
    }
    const itemsString = values.items
      .map((item) => `Taste: ${item.taste}, Quantity: ${item.quantity}`)
      .join("\n");

    const templateParams = {
      name: values.name,
      phoneNumber: values.phoneNumber ?? "none",
      email: values.email,
      message: values.message ?? "",
      orderType: values.orderType,
      items: itemsString,
    };
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
    } catch (error) {
      alert(
        "Das Senden der E-Mail ist fehlgeschlagen. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut. Sollte das Problem weiterhin bestehen, kontaktieren Sie mich bitte direkt über das E-Mail-Symbol unten links.",
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
    fields,
    append,
    remove,
    watch,
  };
};
