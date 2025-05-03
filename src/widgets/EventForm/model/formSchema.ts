import { parse } from "date-fns";
import { ru } from "date-fns/locale";
import emojiRegex from "emoji-regex";
import { z } from "zod";

export const formSchema = z.object({
  image: z.instanceof(File).optional(),
  title: z
    .string({
      required_error: "Поле не может быть пустым",
    })
    .refine(
      (title) => !emojiRegex().test(title),
      "Введены некорректные символы",
    )
    .pipe(
      z
        .string()
        .min(5, { message: "Длина ввода должна быть от 5 до 50 символов" })
        .max(50, { message: "Длина ввода должна быть от 5 до 50 символов" }),
    ),
  dateTime: z
    .string()
    .refine((dateTime) => /^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}$/.test(dateTime))
    .refine(
      (dateTime) =>
        parse(dateTime, "dd.MM.yyyy HH:mm", new Date(), { locale: ru }) >
        new Date(),
      {
        message: "Дата не должна быть в прошлом",
      },
    ),
  participantsCount: z
    .number({
      required_error: "Поле не может быть пустым",
      invalid_type_error: "Поле не может быть пустым",
    })
    .min(1, { message: "Длина ввода должна быть от 1 до 500 символов" })
    .max(500, { message: "Длина ввода должна быть от 1 до 500 символов" }),
  description: z
    .string({
      message: "Поле не может быть пустым",
    })
    .min(1, { message: "Поле не может быть пустым" })
    .min(50, { message: "Длина ввода должна быть от 50 до 1000 символов" })
    .max(1000, { message: "Длина ввода должна быть от 50 до 1000 символов" }),
  location: z.object({
    address: z
      .string({
        required_error: "Поле не может быть пустым",
      })
      .min(1, {
        message: "Поле не может быть пустым",
      }),
    coordinates: z.tuple([z.number(), z.number()], {
      message: "Введены некорректные символы",
    }),
  }),
  eventType: z.enum(["public", "private"], {
    required_error: "Выбери тип мероприятия",
    invalid_type_error: "Некорректный тип мероприятия",
  }),
  tags: z
    .array(
      z.object({
        id: z.number(),
        name: z.string(),
      }),
    )
    .min(1, {
      message: "Добавь хотя бы один тег",
    })
    .max(3, {
      message: "Можно добавить не более 3 тегов",
    }),
});

export type EventSchema = z.infer<typeof formSchema>;
export type EventServerErrors = {
  [K in keyof EventSchema]?: boolean;
};
