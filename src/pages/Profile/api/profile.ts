import { Tag } from "@/entities/Tag";
import { User } from "@/entities/User";

import { api } from "@/shared/api";

const profileURL = "/users/me";

export function updateUsername(username: string) {
  return api.put<User>(profileURL, { username });
}

export function updateTags(tagsIds: number[]) {
  return api.put<Tag[]>(`${profileURL}/tags`, {
    tag_ids: tagsIds,
  });
}
