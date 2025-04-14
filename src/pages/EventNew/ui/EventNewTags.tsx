import { Tag as TagModel } from "@/entities/Tag";
import { TagsPicker } from "@/widgets/TagsPicker";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

import { Edit } from "@/shared/icons/Edit";
import { cn } from "@/shared/lib/utils";
import { Tag } from "@/shared/ui/Tag";
import { Button } from "@/shared/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

import { EventSchema } from "../model/formSchema";

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
              title="Определите главные темы события"
              description="На основе вашего выбора у пользователей будет формироваться список рекомендаций"
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
              className={cn(
                "flex justify-center items-center flex-wrap gap-2 gap-x-6 bg-surface-container p-4 shadow-lg rounded-3xl",
                {
                  "text-destructive border-destructive focus-visible:ring-destructive placeholder:text-destructive":
                    form.formState.errors.tags,
                },
              )}
            >
              {field.value.length ? (
                field.value.map((tag) => (
                  <Tag key={tag.id} name={tag.name} variant="static" />
                ))
              ) : (
                <p className="text-sm">Выберите от 1 до 3 тегов</p>
              )}
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
