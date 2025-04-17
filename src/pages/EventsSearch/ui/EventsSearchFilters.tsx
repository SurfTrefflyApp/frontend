import { TagsPicker } from "@/widgets/TagsPicker";
import { Search } from "lucide-react";

import { AdaptivePopover } from "@/shared/ui/AdaptivePopover";
import { TagsContainer } from "@/shared/ui/TagsContainer";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import { useFiltersController } from "../controller/useFiltersController";

export const EventsSearchFilters = () => {
  const { filtersOpen, setOpenFilters, tagsOpen, setTagsOpen } =
    useFiltersController();

  return (
    <>
      <AdaptivePopover open={filtersOpen} setOpen={setOpenFilters}>
        <div className="flex flex-col gap-4 p-2">
          <Input
            placeholder="Ключевые слова"
            variant="secondary"
            endIcon={Search}
            iconProps={{
              className: "text-primary",
            }}
          />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Время до начала" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">1 день</SelectItem>
              <SelectItem value="week">1 Неделя</SelectItem>
              <SelectItem value="month">1 Месяц</SelectItem>
            </SelectContent>
          </Select>
          <div
            className="bg-surface-container p-4 shadow-lg rounded-3xl"
            onClick={() => {
              setTagsOpen(true);
            }}
          >
            <TagsContainer tags={[]} emptyText="Теги" />
          </div>
        </div>
      </AdaptivePopover>
      <TagsPicker
        open={tagsOpen}
        setOpen={setTagsOpen}
        title="Выберите интересующие вас темы"
        description="Мы покажем мероприятия с соответствующей тематикой"
        selectedTags={[]}
        onSave={console.debug}
      />
    </>
  );
};
