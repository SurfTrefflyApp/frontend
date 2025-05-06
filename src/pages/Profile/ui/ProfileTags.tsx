import type { Tag as TagModel } from "@/entities/Tag";
import { useState } from "react";

import { Edit } from "@/shared/icons/Edit";
import { TagsContainer } from "@/shared/ui/TagsContainer";
import { Button } from "@/shared/ui/button";

import { ProfileTagsPicker } from "./ProfileTagsPicker";

export const ProfileTags = ({ tags }: { tags: TagModel[] }) => {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <>
      {pickerOpen && (
        <ProfileTagsPicker
          open={pickerOpen}
          setOpen={setPickerOpen}
          tags={tags}
        />
      )}
      <div className="bg-surface-container-low rounded-3xl p-4 shadow-lg h-fit mx-2 md:mx-0">
        <div className="relative mb-4 grid grid-cols-[1fr_2fr_1fr]">
          <h3 className="text-center text-base font-semibold self-center col-2">
            Мои теги
          </h3>
          <Button
            className="h-[22px] w-fit ml-auto"
            variant="ghost"
            onClick={() => {
              setPickerOpen(true);
            }}
          >
            <Edit className="text-primary size-[18px]" />
          </Button>
        </div>
        <TagsContainer tags={tags} emptyText="Тут пока что пусто..." />
      </div>
    </>
  );
};
