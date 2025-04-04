import { Tag as TagModel } from "@/entities/tag";

import { Back } from "@/shared/icons/Back";
import { LoadingSpinner } from "@/shared/icons/LoadingSpinner";
import { useFetch } from "@/shared/lib/useFetch";
import { cn } from "@/shared/lib/utils";
import { Tag } from "@/shared/ui/Tag";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

interface TagsPicker {
  title: string;
  description: string;
  open?: boolean;
  setOpen: (state: boolean) => void;
  selectedTags: TagModel[];
  onSelect: (tag: TagModel) => void;
  onUnselect: (tag: TagModel) => void;
}

export const TagsPicker = ({
  title,
  description,
  open,
  setOpen,
  selectedTags,
  onSelect,
  onUnselect,
}: TagsPicker) => {
  const { data: tags, loading } = useFetch<{ tags: TagModel[] }>("/tags");

  const tagsComponents = tags?.tags?.map((tag) => {
    const selected = selectedTags.find((value) => value.id === tag.id);
    return (
      <Tag
        {...tag}
        onClick={() => {
          if (selected) {
            onUnselect(tag);
          } else {
            onSelect(tag);
          }
        }}
        variant={selected ? "selected" : "default"}
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
        <DialogHeader className="h-[20px]">
          <Button
            className="h-[20px] w-[20px] p-0 px-0!"
            variant="ghost"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Back />
          </Button>
        </DialogHeader>
        <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
        <DialogDescription className="text-sm">{description}</DialogDescription>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div
            className={cn(
              "overflow-y-auto flex justify-center items-center flex-wrap gap-2 gap-x-6 no-scrollbar py-1",
            )}
          >
            {tagsComponents}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
