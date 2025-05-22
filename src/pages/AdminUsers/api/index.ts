import type { User } from "@/entities/User";

import { api } from "@/shared/api";

export function getUsers(query: string) {
  return api.get<User[]>("/admin/users", { params: { username: query } });
}

export function deleteUser(userId: number) {
  return api.delete<User[]>(`/admin/users/${userId}`);
}
