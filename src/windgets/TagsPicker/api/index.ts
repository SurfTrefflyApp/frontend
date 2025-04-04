import { api } from "@/shared/api";

export function getTags() {
  return api.get("/tags");
}
