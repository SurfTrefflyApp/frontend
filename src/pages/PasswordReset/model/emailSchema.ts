import emojiRegex from "emoji-regex";
import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Поле не может быть пустым" })
    .refine((email) => {
      const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/u;
      return regex.test(email) && !emojiRegex().test(email);
    }, "Некорректный формат почты"),
});

export type EmailSchema = z.infer<typeof emailSchema>;
