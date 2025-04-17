import { api } from "@/shared/api";

import { mapDataToServer } from "../mapper/event";
import type { EventSchema } from "../model/formSchema";

export function createEvent(values: EventSchema) {
  return api.post("/events", mapDataToServer(values));
}
