import { Tag } from "@/entities/Tag";
import { User } from "@/entities/User";

import { api } from "@/shared/api";

const profileURL = "/users/me";

export function updateUsername(username: string) {
  return api.put<User>(profileURL, { username });
}

export function selectTag(tagId: number) {
  return api.post<Tag[]>(`${profileURL}/tags/${tagId}`);
}

export function unselectTag(tagId: number) {
  return api.delete<Tag[]>(`${profileURL}/tags/${tagId}`);
}
