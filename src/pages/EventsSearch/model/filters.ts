import { z } from "zod";

export const Time = {
  all: "all",
  day: "day",
  week: "week",
  month: "month",
} as const;

export const filtersSchema = z.object({
  keywords: z
    .string()
    .regex(/^[\p{L}\p{N}]*$/u, {
      message: "Введены некорректные символы",
    })
    .optional(),
  tags: z
    .array(
      z.object({
        id: z.number(),
        name: z.string(),
      }),
    )
    .max(3, {
      message: "Можно добавить не более 3 тегов",
    }),
  time: z.enum([Time.all, Time.day, Time.week, Time.month]),
});

export type FiltersSchema = z.infer<typeof filtersSchema>;
