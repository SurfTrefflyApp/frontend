import type { Tag as TagModel } from "@/entities/Tag";
import { TagsPicker } from "@/features/TagsPicker";

import { useTagsPicker } from "../lib/useTagsPicker";

interface ProfileTagsPicker {
  open: boolean;
  setOpen: (state: boolean) => void;
  tags: TagModel[];
}

export const ProfileTagsPicker = ({
  open,
  setOpen,
  tags,
}: ProfileTagsPicker) => {
  const { handleSave, saving } = useTagsPicker(setOpen);

  return (
    <TagsPicker
      title="Расскажи нам о своих интересах"
      description="Мы будем формировать список рекомендаций на основе твоего выбора"
      open={open}
      setOpen={setOpen}
      selectedTags={tags}
      onSave={handleSave}
      saving={saving}
    />
  );
};
