import { z } from "zod";

const emojiRegex = /\p{Emoji}/u;

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Заполните почту " })
    .refine((email) => {
      const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/u;
      return regex.test(email) && !emojiRegex.test(email);
    }, "Неверный формат почты"),
  username: z
    .string()
    .min(2, { message: "Минимальная длина 2 символа" })
    .max(20, { message: "Максимальная длина 20 символов" })
    .refine((username) => {
      const regex = /^[^\d\W_]*$/u;
      return regex.test(username) && !emojiRegex.test(username);
    }, "Допустимы только буквы, дефис и цифры,"),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 6 символов" })
    .refine((password) => !emojiRegex.test(password), {
      message: "Пароль не должен содержать эмодзи",
    }),
});
