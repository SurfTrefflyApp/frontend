import { type ServerEvent } from "@/widgets/EventForm/mapper/event";

import { api } from "@/shared/api";

export function createEvent(values: ServerEvent) {
  return api.post("/events", values);
}
