import { TagsPicker } from "@/widgets/TagsPicker";
import { Search } from "lucide-react";

import { Edit } from "@/shared/icons/Edit";
import { TagsContainer } from "@/shared/ui/TagsContainer";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import type { useFiltersController } from "../controller/useFiltersController";
import { Time } from "../model/filters";

export const EventsSearchFilters = ({
  tagsOpen,
  setTagsOpen,
  form,
  onSubmit,
}: ReturnType<typeof useFiltersController>) => {
  return (
    <>
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 z-10">
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Ключевые слова"
                    variant="secondary"
                    endIcon={Search}
                    iconProps={{
                      className: "text-primary",
                    }}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Время до начала</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Время до начала" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={Time.all}>Не выбрано</SelectItem>
                    <SelectItem value={Time.day}>1 День</SelectItem>
                    <SelectItem value={Time.week}>1 Неделя</SelectItem>
                    <SelectItem value={Time.month}>1 Месяц</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="bg-surface-container p-4 shadow-lg rounded-3xl min-w-[300px]">
                    <div className="mb-4 grid grid-cols-[1fr_2fr_1fr] h-fit">
                      <h3 className="text-center text-base font-semibold self-center col-2">
                        Теги
                      </h3>
                      <Button
                        className="h-[18px] w-fit ml-auto p-0"
                        variant="ghost"
                        onClick={() => {
                          setTagsOpen(true);
                        }}
                        type="button"
                      >
                        <Edit className="text-primary size-[18px] h-[18px]" />
                      </Button>
                    </div>
                    <TagsContainer
                      tags={field.value}
                      emptyText="Выберите до 3 тегов"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4">
            <Button
              variant="secondary"
              type="button"
              onClick={() => {
                form.reset();
                form.setValue("time", Time.all);
              }}
            >
              Очистить
            </Button>
            <Button disabled={!form.formState.isValid}>Применить</Button>
          </div>
        </form>
      </Form>
      <TagsPicker
        open={tagsOpen}
        setOpen={setTagsOpen}
        title="Выбери интересующие тебя темы"
        description="Мы покажем мероприятия с соответствующей тематикой"
        selectedTags={form.getValues("tags")}
        onSave={(tags) => {
          form.setValue("tags", tags);
          setTagsOpen(false);
        }}
        maxSelectedCount={3}
      />
    </>
  );
};
