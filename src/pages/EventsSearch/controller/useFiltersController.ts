import { useUnit } from "effector-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { fetchEventsEvent } from "../model/events";
import { type Filters, Time } from "../model/filters";

export const useFiltersController = () => {
  const [filtersOpen, setOpenFilters] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);
  const fetchEvents = useUnit(fetchEventsEvent);

  const form = useForm<Filters>({
    defaultValues: {
      keywords: "",
      tags: [],
      time: Time.month,
    },
  });

  useEffect(() => {
    fetchEvents(form.getValues());
  }, [fetchEvents]);

  const handleSubmit = useCallback(
    (filters: Filters) => {
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
