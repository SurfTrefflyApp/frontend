import { useUnit } from "effector-react";

import {
  $filtersOpen,
  $tagsOpen,
  setOpenFiltersEvent,
  setTagsOpenEvent,
} from "../model/filters";

export const useFiltersController = () => {
  const [filtersOpen, setOpenFilters] = useUnit([
    $filtersOpen,
    setOpenFiltersEvent,
  ]);
  const [tagsOpen, setTagsOpen] = useUnit([$tagsOpen, setTagsOpenEvent]);

  return { filtersOpen, setOpenFilters, tagsOpen, setTagsOpen };
};
