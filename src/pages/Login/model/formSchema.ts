import emojiRegex from "emoji-regex";
import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .refine((email) => {
      const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/u;
      return regex.test(email) && !emojiRegex().test(email);
    }, "Некорректный формат почты")
    .pipe(z.string().min(1, { message: "Поле не может быть пустым" })),
  password: z
    .string()
    .refine((password) => !emojiRegex().test(password), {
      message: "Введены некорректные символы",
    })
    .pipe(
      z.string().min(6, { message: "Длина ввода должна быть от 6 символов" }),
    ),
});

export type LoginSchema = z.infer<typeof formSchema>;
export type LoginServerErrors = {
  [K in keyof LoginSchema]?: boolean;
};
