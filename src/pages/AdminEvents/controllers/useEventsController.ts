import { useUnit } from "effector-react";
import { useState } from "react";

import { setErrorEvent } from "@/shared/api";
import { useDebounce } from "@/shared/lib/useDebounce";

import { deleteEvent, eventsMock } from "../api";

export const useEventsController = () => {
  // const { data: events, setData: setEvents } = useFetch("/admin/events");
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState(eventsMock);

  const setError = useUnit(setErrorEvent);

  const handleSearch = async (searchString: string) => {
    console.debug(searchString);
  };

  useDebounce(search, 300, handleSearch);

  const handleDelete = async (eventId: number) => {
    try {
      const result = await deleteEvent(eventId);
      setEvents(result);
    } catch (e) {
      setError(e);
    }
  };

  return { events, handleDelete, search, setSearch };
};
