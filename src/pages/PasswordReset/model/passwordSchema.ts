import emojiRegex from "emoji-regex";
import { z } from "zod";

export const passwordSchema = z.object({
  password: z
    .string()
    .min(1, { message: "Поле не может быть пустым" })
    .refine((password) => !emojiRegex().test(password), {
      message: "Введены некорректные символы",
    })
    .pipe(
      z.string().min(6, { message: "Длина ввода должна быть от 6 символов" }),
    ),
});

export type PasswordSchema = z.infer<typeof passwordSchema>;
