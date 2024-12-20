"use client";
import Loading from "@/app/[lang]/loading";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { useEffect } from "react";
import { Trans } from "react-i18next/TransWithoutContext";
import { useOrderForm } from "./hooks";

function ContactForm({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);
  useEffect(() => {
    const contactSection = document.getElementById("contact");
    const inputField = document.getElementById("name");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && inputField) {
          // #contactが表示されたら最初の入力フィールドにフォーカスする
          inputField.focus();
        }
      },
      { threshold: 0.5 }, // 50%表示されたらイベントを発火
    );

    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);
  const {
    isSubmitting,
    onSubmitHandler,
    handleSubmit,
    register,
    isSubmitSuccessful,
    errors,
    watch,
  } = useOrderForm();

  if (isSubmitting) {
    return <Loading />;
  }
  const textsForSubmit = t("form_submit_successful", {
    ns: "contactForm",
    returnObjects: true,
  });
  const nameLabel = t("name_label", { ns: "contactForm" });
  const phoneLabel = t("phone_label", { ns: "contactForm" });
  const emailLabel = t("email_label", { ns: "contactForm" });
  const messageLabel = t("message_label", { ns: "contactForm" });
  const privacyPolicy = t("privacy_policy", {
    ns: "contactForm",
    returnObjects: true,
  });
  const submitButton = t("submit_button", { ns: "contactForm" });

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {isSubmitSuccessful ? (
        <div className="w-full py-2 text-center text-2xl font-bold text-lime-600">
          <p>{textsForSubmit.header}</p>
          <p>{textsForSubmit.body}</p>
          <p className="mt-4 text-sm text-gray-500">
            <Trans
              i18nKey="form_submit_successful.confirmation"
              ns="contactForm"
              values={{ email: watch("email") }}
            />
          </p>
          <p className="text-sm text-red-500">{textsForSubmit.error}</p>
        </div>
      ) : (
        <>
          <div className="grid w-full gap-4 py-2 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="py-2 text-sm" htmlFor="name">
                {nameLabel}
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                className="flex rounded-lg border-2 border-gray-300 p-3"
                type="text"
                id="name"
                {...register("name")}
              />
              {!!errors["name"]?.message && (
                <p className="text-xs italic text-red-500">
                  {errors["name"]?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="py-2 text-sm" htmlFor="phoneNumber">
                {phoneLabel}
              </label>
              <input
                className="flex rounded-lg border-2 border-gray-300 p-3"
                type="text"
                id="phoneNumber"
                {...register("phoneNumber")}
              />
              {!!errors["phoneNumber"]?.message && (
                <p className="text-xs italic text-red-500">
                  {errors["phoneNumber"]?.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col py-1">
            <label className="py-2 text-sm" htmlFor="email">
              {emailLabel}
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-3"
              type="email"
              id="email"
              {...register("email")}
            />
            {!!errors["email"]?.message && (
              <p className="text-xs italic text-red-500">
                {errors["email"]?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm" htmlFor="message">
              {messageLabel}
              <span className="ml-1 text-red-500">*</span>
            </label>
            <textarea
              className="flex rounded-lg border-2 border-gray-300 p-3"
              rows={4}
              id="message"
              {...register("message")}
            ></textarea>
            {!!errors["message"]?.message && (
              <p className="text-xs italic text-red-500">
                {errors["message"]?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                id="privacyPolicy"
                {...register("privacyPolicy")}
                className="mt-1"
              />
              <label htmlFor="privacyPolicy" className="ml-2 text-sm">
                {lang === "ja" ? (
                  <>
                    <Link
                      href="/privacy-policy"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      {privacyPolicy.label}
                    </Link>
                    {privacyPolicy.agreement}
                    <span className="text-red-500">*</span>
                  </>
                ) : (
                  <>
                    {privacyPolicy.agreement}{" "}
                    <Link
                      href="/privacy-policy"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      {privacyPolicy.label}
                    </Link>
                    <span className="text-red-500">*</span>
                  </>
                )}
              </label>
            </div>
            {!!errors["privacyPolicy"]?.message && (
              <p className="text-xs italic text-red-500 mt-1">
                {errors["privacyPolicy"]?.message}
              </p>
            )}
          </div>
          <button
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-4 text-gray-100 shadow-xl shadow-gray-400 
             hover:from-[#709dff] hover:to-[#5651e5] hover:shadow-2xl transition-transform duration-300 ease-in-out"
            type="submit"
          >
            {submitButton}
          </button>
        </>
      )}
    </form>
  );
}

export default ContactForm;
