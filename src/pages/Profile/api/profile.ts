import type { Tag } from "@/entities/Tag";
import type { User } from "@/entities/User";

import { api } from "@/shared/api";

const profileURL = "/users/me";

export function updateUsername(data: FormData) {
  return api.put<User>(profileURL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function updateTags(tagsIds: number[]) {
  return api.put<Tag[]>(`${profileURL}/tags`, {
    tag_ids: tagsIds,
  });
}
