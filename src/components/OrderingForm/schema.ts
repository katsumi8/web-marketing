import {
  array,
  literal,
  object,
  string,
  union,
  ZodIssueCode,
  type TypeOf,
} from "zod";

export const orderingSchema = object({
  name: string().min(2, "Bitte geben Sie einen gültigen Namen ein"),
  phoneNumber: string()
    .optional()
    .refine((val) => !val || /^\d+$/.test(val), {
      message: "Telefonnummer darf nur Zahlen enthalten",
    }),
  email: string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: string().optional(),
  items: array(
    object({
      taste: string().min(1, "Bitte wählen Sie einen Geschmack aus"),
      quantity: string()
        .min(1, "Bitte geben Sie eine gültige Menge ein")
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
          message: "Die Menge muss eine gültige positive Zahl sein",
        }),
    }),
  ).min(1, "Bitte wählen Sie mindestens einen Artikel aus"),
  orderType: union([
    literal("").describe("Bitte wählen Sie eine Option aus"),
    literal("pickup").describe("Abholung"),
    literal("delivery").describe("Lieferung"),
  ]).refine((val) => val !== "", {
    message: "Bitte wählen Sie eine Option aus",
  }),
}).superRefine((data, ctx) => {
  const totalQuantity = data.items.reduce(
    (acc, item) => acc + Number(item.quantity),
    0,
  );
  if (totalQuantity < 4) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message:
        "Bitte bestellen Sie mindestens 4 Artikel aus unserem Sortiment.",
      path: ["items"],
    });
    return;
  }
  return;
});

export type OrderingInput = TypeOf<typeof orderingSchema>;
