import type { Tag as TagModel } from "@/entities/Tag";
import { TagsPicker } from "@/features/TagsPicker";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";

import { Edit } from "@/shared/icons/Edit";
import { cn } from "@/shared/lib/utils";
import { TagsContainer } from "@/shared/ui/TagsContainer";
import { Button } from "@/shared/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

import type { EventSchema } from "../model/formSchema";

interface EventNewTags {
  form: UseFormReturn<EventSchema>;
}

export const EventNewTags = ({ form }: EventNewTags) => {
  const [tagsPickerOpen, setTagsPickerOpen] = useState(false);

  const handleSave = (tags: TagModel[]) => {
    form.setValue("tags", tags);
    form.trigger("tags");
    setTagsPickerOpen(false);
  };

  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => (
        <FormItem>
          {tagsPickerOpen && (
            <TagsPicker
              title="Определи главные темы мероприятия"
              description="На основе твоего выбора у пользователей будет формироваться список рекомендаций"
              open={tagsPickerOpen}
              setOpen={setTagsPickerOpen}
              selectedTags={field.value as TagModel[]}
              onSave={handleSave}
              maxSelectedCount={3}
            />
          )}
          <div className="flex items-center justify-between">
            <FormLabel>Теги</FormLabel>
            <Button
              variant="ghost"
              onClick={() => {
                setTagsPickerOpen(true);
              }}
              type="button"
              className="h-full p-0 px-0!"
            >
              <Edit className="text-primary w-[16px]" />
            </Button>
          </div>
          <FormControl>
            <div
              className={cn("bg-surface-container p-4 shadow-lg rounded-3xl", {
                "text-destructive border-destructive focus-visible:ring-destructive placeholder:text-destructive":
                  form.formState.errors.tags,
              })}
            >
              <TagsContainer
                tags={field.value}
                emptyText="Выбери от 1 до 3 тегов"
              />
            </div>
          </FormControl>
          {form.formState.errors.tags && (
            <FormMessage>{form.formState.errors.tags.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};
