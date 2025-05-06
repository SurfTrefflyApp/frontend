import type { Tag as TagModel } from "@/entities/Tag";
import { useState } from "react";

import { useFetch } from "@/shared/lib/useFetch";
import type { Tag } from "@/shared/ui/Tag";

export const useTagsPickerController = (
  selectedTags: TagModel[],
  maxSelectedCount: number | undefined,
) => {
  const { data: tags, loading } = useFetch<{ tags: TagModel[] }>("/tags");
  const [localTags, setLocalTags] = useState<TagModel[]>(selectedTags);

  const getIsSelected = (tag: TagModel) =>
    localTags.find((value) => value.id === tag.id);

  const handleSelect = (tag: TagModel) => {
    if (maxSelectedCount && localTags.length >= maxSelectedCount) {
      return;
    }
    setLocalTags((prev) => [...prev, tag]);
  };

  const handleUnselect = (tag: TagModel) => {
    setLocalTags((prev) => prev.filter((value) => value.id !== tag.id));
  };

  const handleTagClick = (tag: TagModel) => {
    const selected = getIsSelected(tag);
    if (selected) {
      handleUnselect(tag);
    } else {
      handleSelect(tag);
    }
  };

  const getTagVariant = (tag: TagModel): Tag["variant"] => {
    return getIsSelected(tag) ? "selected" : "default";
  };

  return {
    tags,
    loading,
    localTags,
    handleTagClick,
    getTagVariant,
  };
};
