import type { Tag } from "@/entities/Tag";

export const mapToTagsIds = (tags: Tag[]) => {
  return tags.map((tag) => tag.id);
};
