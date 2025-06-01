import { z } from "zod";

const currentYear = new Date().getFullYear();

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .transform((val) => val.replace(/\s/g, "").replace("_", ""))
    .refine((value) => value.length, "Поле не может быть пустым")
    .refine(
      (value) => /^\d{16}$/.test(value),
      "Номер карты должен содержать 16 цифр",
    ),
  month: z.string().regex(/^(0[1-9]|1[0-2])$/, "Некорректный месяц"),
  year: z
    .string()
    .regex(/^\d{4}$/, "Год должен состоять из 4 цифр")
    .refine(
      (year) => parseInt(year) >= currentYear,
      "Год не может быть в прошлом",
    ),
  cvv: z.string().regex(/^\d{3}$/, "CVV должен состоять из 3 цифр"),
});

export type PaymentSchema = z.infer<typeof paymentSchema>;
