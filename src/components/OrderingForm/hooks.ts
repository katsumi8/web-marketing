"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderingInput, orderingSchema } from "./schema";

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
  //送信ボタンクリック後の処理
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
      phoneNumber: values.phoneNumber,
      email: values.email,
      message: values.message || "",
      items: itemsString,
    };
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Your message has been sent successfully!");
    } catch (error) {
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
