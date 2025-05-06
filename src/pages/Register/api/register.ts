import type { RegisterSchema } from "@/pages/Register/model/formSchema";

import { api } from "@/shared/api";

export function register(data: RegisterSchema) {
  return api.post("/users", data);
}
