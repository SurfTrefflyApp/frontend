import { api } from "@/shared/api";

export function createEvent(values: FormData) {
  return api.post("/events", values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
