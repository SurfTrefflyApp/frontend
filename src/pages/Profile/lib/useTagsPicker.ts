import { Tag as TagModel } from "@/entities/Tag";
import { useUnit } from "effector-react";
import { useCallback } from "react";

import { setErrorEvent } from "@/shared/api";

import { selectTag, unselectTag } from "../api/profile";
import { setTagsEvent } from "../model/user";

export const useTagsPicker = () => {
  const setError = useUnit(setErrorEvent);
  const setTags = useUnit(setTagsEvent);

  const handleSelect = useCallback(
    async (tag: TagModel) => {
      try {
        const tags = (await selectTag(tag.id)).data;
        setTags(tags);
      } catch (error) {
        setError(error);
      }
    },
    [setError, setTags],
  );

  const handleUnselect = useCallback(
    async (tag: TagModel) => {
      try {
        const tags = (await unselectTag(tag.id)).data;
        setTags(tags);
      } catch (error) {
        setError(error);
      }
    },
    [setError, setTags],
  );

  return {
    handleSelect,
    handleUnselect,
  };
};
