import { Tag as TagModel } from "@/entities/Tag";
import { TagsPicker } from "@/widgets/TagsPicker";

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
      title="Расскажите нам о Ваших интересах"
      description="Мы будем формировать список рекомендаций на основе вашего выбора"
      open={open}
      setOpen={setOpen}
      selectedTags={tags}
      onSave={handleSave}
      saving={saving}
    />
  );
};
