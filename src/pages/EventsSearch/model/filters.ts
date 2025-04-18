import type { Tag } from "@/entities/Tag";

export const Time = {
  day: "day",
  week: "week",
  month: "month",
} as const;

export interface Filters {
  keywords: string;
  tags: Tag[];
  time: keyof typeof Time;
}
