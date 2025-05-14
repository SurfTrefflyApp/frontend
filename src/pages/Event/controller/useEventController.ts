import type { Event } from "@/entities/Event";
import { useUnit } from "effector-react";
import { useParams, useSearchParams } from "react-router";

import { setErrorEvent } from "@/shared/api";
import { useRefresh } from "@/shared/auth";
import { useFetch } from "@/shared/lib/useFetch";

import { $event, setEventEvent } from "../model/store";
import { useEventClipboardController } from "./useEventClipboardController";

export const useEventController = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const invite = searchParams.get("invite");
  const id = Number(params.id);

  const event = useUnit($event);
  const setEvent = useUnit(setEventEvent);

  const { refreshed, refreshing } = useRefresh();

  const { loading } = useFetch<Event>(
    `/events/${id}?invite=${invite}`,
    refreshed && !refreshing,
    setEvent,
  );

  const setError = useUnit(setErrorEvent);

  const { handleAddressCopy, handleEventLinkCopy } =
    useEventClipboardController({ event, setError });

  return {
    handleAddressCopy,
    handleEventLinkCopy,
    loading: refreshing || loading,
  };
};
