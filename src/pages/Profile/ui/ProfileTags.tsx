import { Tag as TagModel } from "@/entities/Tag";
import { TagsPicker } from "@/widgets/TagsPicker";
import { useUnit } from "effector-react";
import { useState } from "react";

import { selectTag, unselectTag } from "@/pages/Profile/api/profile";
import { setTagsEvent } from "@/pages/Profile/model/user";

import { setErrorEvent } from "@/shared/api";
import { Edit } from "@/shared/icons/Edit";
import { Tag } from "@/shared/ui/Tag";
import { Button } from "@/shared/ui/button";

export const ProfileTags = ({ tags }: { tags: TagModel[] }) => {
  const setError = useUnit(setErrorEvent);
  const setTags = useUnit(setTagsEvent);

  const [tagsOpen, setTagsOpen] = useState(false);

  const handleSelect = async (tag: TagModel) => {
    try {
      const tags = (await selectTag(tag.id)).data;
      setTags(tags);
    } catch (error) {
      setError(error);
    }
  };

  const handleUnselect = async (tag: TagModel) => {
    try {
      const tags = (await unselectTag(tag.id)).data;
      setTags(tags);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {tagsOpen && (
        <TagsPicker
          title="Расскажите нам о Ваших интересах"
          description="Мы будем формировать список рекомендаций на основе вашего выбора"
          open={tagsOpen}
          setOpen={setTagsOpen}
          selectedTags={tags}
          onSelect={handleSelect}
          onUnselect={handleUnselect}
        />
      )}
      <div className="bg-surface-container-low rounded-3xl p-4 drop-shadow-lg mb-4">
        <div className="relative mb-4">
          <h3 className="text-center text-base font-semibold">Мои интересы</h3>
          <Button
            className="absolute top-1 right-0 p-0! h-[22px]"
            variant="ghost"
            onClick={() => {
              setTagsOpen(true);
            }}
          >
            <Edit className="size-[22px]" />
          </Button>
        </div>
        <div className="text-center flex justify-center items-center flex-wrap gap-2 gap-x-6">
          {tags.length ? (
            tags.map(({ id, name }) => (
              <Tag key={id} name={name} variant="static" />
            ))
          ) : (
            <p>Теги пока не выбраны</p>
          )}
        </div>
      </div>
    </>
  );
};
