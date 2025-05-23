import { api } from "@/shared/api";

export function checkAuth() {
  return api.get<{ isAdmin: boolean }>("/auth");
}

export function logout() {
  return api.post("/logout");
}

export function refresh() {
  return api.post("/auth/refresh");
}
