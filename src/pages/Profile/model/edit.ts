import emojiRegex from "emoji-regex";
import { z } from "zod";

export const schema = z.object({
  username: z
    .string()
    .refine((username) => {
      const regex = /^[\p{L}-]+$/u;
      return regex.test(username) && !emojiRegex().test(username);
    }, "Введены некорректные символы")
    .pipe(
      z
        .string()
        .min(1, { message: "Поле не может быть пустым" })
        .min(2, { message: "Длина ввода должна быть от 2 до 20 символов" })
        .max(20, { message: "Длина ввода должна быть от 2 до 20 символов" }),
    ),
  image: z.instanceof(File).optional(),
  delete_image: z.boolean().optional(),
});

export type Schema = z.infer<typeof schema>;
