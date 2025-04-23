import type { Event } from "@/entities/Event";
import { useUnit } from "effector-react";
import { useLocation, useParams } from "react-router";
import { toast } from "sonner";

import { setErrorEvent } from "@/shared/api";
import { useFetch } from "@/shared/lib/useFetch";

import { $event, setEventEvent } from "../model/store";

export const useEventController = () => {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  const event = useUnit($event);
  const setEvent = useUnit(setEventEvent);

  const { loading } = useFetch<Event>(`/events/${id}`, true, setEvent);

  const setError = useUnit(setErrorEvent);

  const handleCopy = async (text: string, toastTitle: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(toastTitle, {
        classNames: {
          title: "text-center",
          content: "w-full",
          toast: "w-fit! mx-auto left-0 right-0",
        },
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleAddressCopy = () => {
    if (!event?.address) {
      return;
    }

    handleCopy(event.address, "Адрес скопирован");
  };

  const handleEventLinkCopy = () => {
    const fullUrl = window.location.origin + location.pathname;

    handleCopy(fullUrl, "Ссылка скопирована");
  };

  return {
    handleAddressCopy,
    handleEventLinkCopy,
    loading,
  };
};
