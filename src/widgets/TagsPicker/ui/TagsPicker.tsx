import type { Tag as TagModel } from "@/entities/Tag";

import { Close } from "@/shared/icons/Close";
import { LoadingSpinner } from "@/shared/icons/LoadingSpinner";
import { cn } from "@/shared/lib/utils";
import { Tag } from "@/shared/ui/Tag";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

import { useTagsPickerController } from "../controller/useTagsPickerController";

interface TagsPicker {
  title: string;
  description: string;
  open?: boolean;
  setOpen: (state: boolean) => void;
  selectedTags: TagModel[];
  onSave: (tags: TagModel[]) => void;
  saving?: boolean;
  maxSelectedCount?: number;
}

export const TagsPicker = ({
  title,
  description,
  open,
  setOpen,
  selectedTags,
  onSave,
  saving,
  maxSelectedCount,
}: TagsPicker) => {
  const { tags, loading, localTags, handleTagClick, getTagVariant } =
    useTagsPickerController(selectedTags, maxSelectedCount);

  const tagsComponents = tags?.tags?.map((tag) => {
    return (
      <Tag
        key={tag.id}
        {...tag}
        onClick={() => {
          handleTagClick(tag);
        }}
        variant={getTagVariant(tag)}
      />
    );
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={cn(
          "[&>button]:hidden w-full max-w-full h-full max-h-full",
          "rounded-none flex flex-col",
          "md:max-h-fit md:rounded-2xl",
        )}
      >
        <DialogHeader className="flex flex-row justify-between gap-4">
          <DialogTitle className="text-xl font-semibold text-left">
            {title}
          </DialogTitle>
          <Button
            className="p-0 px-0!"
            variant="ghost"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close className="text-primary min-h-[30px] min-w-[30px] " />
          </Button>
        </DialogHeader>
        <DialogDescription className="text-sm">{description}</DialogDescription>
        <div
          className={cn(
            "overflow-y-auto flex justify-center items-center flex-wrap h-full md:h-auto gap-2 gap-x-6 no-scrollbar py-1",
          )}
        >
          {loading ? <LoadingSpinner /> : tagsComponents}
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              onSave(localTags);
            }}
            className="w-fit mx-auto px-14"
            loading={saving}
          >
            Сохранить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
