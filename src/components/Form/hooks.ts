"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

type InputValues = {
  name: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
  isSubmitted: boolean;
};

type Validations = {
  name?: string;
  phoneNumber?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export const useForm = () => {
  //state定義
  const [values, setValues] = useState<InputValues>({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    isSubmitted: false,
  });
  const [formErrors, setFormErrors] = useState<Validations>({});
  //文字入力の度にstate更新
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    const targetName = e.target.name;
    if (Object.keys(formErrors).length !== 0) {
      setFormErrors({ ...formErrors, [targetName]: undefined });
    }
  };

  useEffect(() => {
    setFormErrors(validate(values));
  }, [values]);

  //送信ボタンクリック後の処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValues({ ...values, isSubmitted: true });

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          e.currentTarget,
          process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

  const validate = (inputValues: InputValues): Validations => {
    const errors: Validations = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!inputValues.name) {
      errors.name = "Please fill out this field.";
    } else if (inputValues.name.length < 2) {
      errors.name = "Please fill out more than 2 characters.";
    }
    if (!inputValues.email) {
      errors.email = "Please fill out this field.";
    } else if (!regex.test(inputValues.email)) {
      errors.email = "Please fill out correct email address.";
    }
    if (!inputValues.phoneNumber) {
      errors.phoneNumber = "Please fill out this field.";
    }
    if (!inputValues.subject) {
      errors.subject = "Please fill out this field.";
    }
    if (!inputValues.message) {
      errors.message = "Please fill out this field.";
    }
    return errors;
  };

  return { values, formErrors, handleChange, handleFocus, handleSubmit };
};
