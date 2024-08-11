"use client";
import React from "react";
import { useForm } from "./hooks";

function Form() {
  const { values, formErrors, handleChange, handleFocus, handleSubmit } =
    useForm();

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formErrors).length === 0 && values.isSubmitted ? (
        <div className="w-full py-2 text-center text-2xl font-bold text-lime-600">
          <p>Ich habe Ihre E-Mail erhalten!</p>
          <p>Ich werde mich in Kürze bei Ihnen melden.</p>
        </div>
      ) : (
        <>
          <div className="grid w-full gap-4 py-2 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Name / Firma</label>
              <input
                className="flex rounded-lg border-2 border-gray-300 p-3"
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {formErrors.name && values.isSubmitted ? (
                <p className="text-xs italic text-red-500">{formErrors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label className="py-2 text-sm uppercase">Telefonnummer</label>
              <input
                className="flex rounded-lg border-2 border-gray-300 p-3"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {formErrors.phoneNumber && values.isSubmitted ? (
                <p className="text-xs italic text-red-500">
                  {formErrors.phoneNumber}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col py-1">
            <label className="py-2 text-sm uppercase">E-Mail</label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-3"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {formErrors.email && values.isSubmitted ? (
              <p className="text-xs italic text-red-500">{formErrors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col py-1">
            <label className="py-2 text-sm uppercase">Betreff</label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-3"
              type="text"
              name="subject"
              id="subject"
              value={values.subject}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {formErrors.subject && values.isSubmitted ? (
              <p className="text-xs italic text-red-500">
                {formErrors.subject}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col py-1">
            <label className="py-2 text-sm uppercase">Nachricht</label>
            <textarea
              className="flex rounded-lg border-2 border-gray-300 p-3"
              rows={10}
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onFocus={handleFocus}
            ></textarea>
            {formErrors.message && values.isSubmitted ? (
              <p className="text-xs italic text-red-500">
                {formErrors.message}
              </p>
            ) : null}
          </div>
          <button
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-4 uppercase text-gray-100 shadow-xl shadow-gray-400"
            type="submit"
          >
            Nachricht Senden
          </button>
        </>
      )}
    </form>
  );
}

export default Form;
