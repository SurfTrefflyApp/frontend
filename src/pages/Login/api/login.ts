import { LoginSchema } from "@/pages/Login/model/formSchema";

import { api } from "@/shared/api";

export function login(data: LoginSchema) {
  return api.post("/login", data);
}
