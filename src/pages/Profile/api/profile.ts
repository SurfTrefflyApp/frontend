import { User } from "@/entities/user";

import { api } from "@/shared/api";

export function updateUsername(username: string) {
  return api.put<User>("/users/me", { username });
}
