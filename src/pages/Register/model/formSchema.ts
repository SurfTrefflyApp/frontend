import emojiRegex from "emoji-regex";
import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Поле не может быть пустым" })
    .refine((email) => {
      const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/u;
      return regex.test(email) && !emojiRegex().test(email);
    }, "Некорректный формат почты"),
  username: z
    .string()
    .min(1, { message: "Поле не может быть пустым" })
    .min(2, { message: "Длина ввода должна быть от 2 до 20 символов" })
    .max(20, { message: "Длина ввода должна быть от 2 до 20 символов" })
    .refine((username) => {
      const regex = /^[\p{L}-]+$/u;
      return regex.test(username) && !emojiRegex().test(username);
    }, "Введены некорректные символы"),
  password: z
    .string()
    .refine(
      (password) => {
        return !emojiRegex().test(password);
      },
      {
        message: "Введены некорректные символы",
      },
    )
    .pipe(
      z.string().min(6, { message: "Длина ввода должна быть от 6 символов" }),
    ),
});

export type RegisterSchema = z.infer<typeof formSchema>;
export type RegisterServerErrors = {
  [K in keyof RegisterSchema]?: boolean;
};
