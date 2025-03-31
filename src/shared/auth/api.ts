import { api } from "@/shared/api";

export function checkAuth() {
  return api.get("/auth");
}
