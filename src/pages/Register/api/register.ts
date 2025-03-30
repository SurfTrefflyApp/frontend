import { RegisterSchema } from "@/pages/Register/model/formSchema";

import { api } from "@/shared/api";

export interface ErrorResponse {
  title: string;
  subtitle: string;
}

export function register(data: RegisterSchema) {
  return api.post("/users", data);
}
