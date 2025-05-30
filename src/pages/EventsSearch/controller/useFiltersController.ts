import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { fetchEventsEvent, pageMounted, pageUnmounted } from "../model/events";
import {
  type FiltersSchema,
  Time,
  filtersSchema,
} from "../model/filtersSchema";

export const useFiltersController = () => {
  const [filtersOpen, setOpenFilters] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);

  const fetchEvents = useUnit(fetchEventsEvent);
  const [mountPage, unmountPage] = useUnit([pageMounted, pageUnmounted]);

  const form = useForm<FiltersSchema>({
    resolver: zodResolver(filtersSchema),
    defaultValues: {
      keywords: "",
      tags: [],
      time: Time.all,
    },
  });

  useEffect(() => {
    mountPage();

    return () => {
      unmountPage();
    };
  }, [mountPage, unmountPage]);

  const handleSubmit = useCallback(
    (filters: FiltersSchema) => {
      fetchEvents(filters);
      setOpenFilters(false);
    },
    [fetchEvents],
  );

  return {
    filtersOpen,
    setOpenFilters,
    tagsOpen,
    setTagsOpen,
    form,
    onSubmit: form.handleSubmit(handleSubmit),
  };
};
