"use client";
import React from "react";
import { useOrderForm } from "./hooks";
import { menuItems } from "../../const/productsList";

function OrderingForm() {
  const {
    isSubmitting,
    onSubmitHandler,
    handleSubmit,
    register,
    isSubmitSuccessful,
    errors,
    fields,
    append,
    remove,
    watch,
  } = useOrderForm();

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {isSubmitSuccessful ? (
        <div className="w-full py-2 text-center text-2xl font-bold text-lime-600">
          <p>Ich habe Ihre E-Mail erhalten!</p>
          <p>Ich werde mich in Kürze bei Ihnen melden.</p>
        </div>
      ) : (
        <>
          <div className="grid w-full gap-4 py-2 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="py-2 text-sm">
                Name / Firma
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
              <label className="py-2 text-sm">Telefonnummer</label>
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
            <label className="py-2 text-sm">
              E-Mail
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
            <label className="py-2 text-sm">
              Geschmack und Menge
              <span className="ml-1 text-red-500">*</span>
            </label>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="flex sm:space-x-2 py-2 flex-col sm:flex-row space-y-2 sm:space-y-0 
                    border-b border-gray-300 w-full sm:justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                  <div className="flex flex-col">
                    <select
                      className="flex rounded-lg border-2 border-gray-300 sm:p-3 py-3"
                      {...register(`items.${index}.taste`)}
                    >
                      <option value="">Wählen Sie einen Geschmack</option>
                      {menuItems.map((menuItem, i) => (
                        <option key={i} value={menuItem.name}>
                          {menuItem.name}
                        </option>
                      ))}
                    </select>
                    {!!errors["items"]?.[index]?.taste?.message && (
                      <p className="text-xs italic text-red-500">
                        {errors["items"]?.[index]?.taste?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="ml-auto py-1 w-12 flex sm:w-20 rounded-lg border-2 border-gray-300 sm:p-3 text-center"
                      type="number"
                      placeholder="Menge"
                      min="0"
                      {...register(`items.${index}.quantity`)}
                    />
                    {!!errors["items"]?.[index]?.quantity?.message && (
                      <p className="text-xs italic text-red-500">
                        {errors["items"]?.[index]?.quantity?.message}
                      </p>
                    )}
                  </div>
                </div>
                {index > 0 && ( // 最初の項目は削除ボタンを表示しない
                  <button
                    type="button"
                    className="rounded-xl bg-red-400 py-2 sm:px-3 text-white w-20 ml-auto sm:w-auto text-sm sm:text-base"
                    onClick={() => remove(index)}
                  >
                    Löschen
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="mt-2 ml-auto rounded-lg bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 text-white 
    shadow-md hover:from-green-500 hover:to-green-700"
              onClick={() => append({ taste: "", quantity: "0" })}
            >
              Geschmack hinzufügen
            </button>
            {!!errors["items"]?.message && (
              <p className="text-xs italic text-red-500">
                {errors["items"]?.message}
              </p>
            )}
            {!!errors["items"]?.root?.message && (
              <p className="text-xs italic text-red-500">
                {errors["items"].root.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm">
              Bestellungsart
              <span className="ml-1 text-red-500">*</span>
            </label>
            <select
              {...register("orderType")}
              className="border-2 border-gray-300 p-2 rounded-lg"
            >
              <option value="">Bitte wählen Sie</option>
              <option value="pickup">Abholung</option>
              <option value="delivery">Lieferung</option>
            </select>
            {!!errors["orderType"]?.message && (
              <p className="text-xs italic text-red-500">
                {errors["orderType"]?.message}
              </p>
            )}
            {watch("orderType") === "delivery" && (
              <p className="mt-2 text-xs italic text-blue-700">
                Lieferung nur innerhalb der Stadt Soest.
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm">Nachricht</label>
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
          <button
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-4 text-gray-100 shadow-xl shadow-gray-400"
            type="submit"
          >
            Nachricht Senden
          </button>
        </>
      )}
    </form>
  );
}

export default OrderingForm;
