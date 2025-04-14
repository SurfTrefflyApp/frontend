import { Tag as TagModel } from "@/entities/Tag";
import { useUnit } from "effector-react";
import { useCallback, useState } from "react";

import { setErrorEvent } from "@/shared/api";

import { updateTags } from "../api/profile";
import { mapToTagsIds } from "../mapper/tags";
import { setTagsEvent } from "../model/user";

export const useTagsPicker = (setTagsPickerOpen: (state: boolean) => void) => {
  const setError = useUnit(setErrorEvent);
  const setTags = useUnit(setTagsEvent);
  const [saving, setSaving] = useState(false);

  const handleSave = useCallback(
    async (tags: TagModel[]) => {
      setSaving(true);
      try {
        const tagsIds = mapToTagsIds(tags);
        await updateTags(tagsIds);
        setTags(tags);
        setTagsPickerOpen(false);
      } catch (error) {
        setError(error);
      } finally {
        setSaving(false);
      }
    },
    [setError, setTags, setTagsPickerOpen],
  );

  return {
    handleSave,
    saving,
  };
};
