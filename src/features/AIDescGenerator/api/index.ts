import { api } from "@/shared/api";

interface Limit {
  limit: number;
  remaining: number;
  resetAt: string;
}

export function getUserLimit() {
  return api.get<Limit>("/users/generate-limit");
}

interface DescriptionResponse {
  description: string;
  remaining: number;
  resetAt: string;
}

export function generateDescription(eventName: string, maxLength = 500) {
  return api.post<DescriptionResponse>("/events/generate-desc", {
    name: eventName,
    max_characters: maxLength,
  });
}
