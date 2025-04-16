import type { Event } from "@/entities/Event";
import { useUnit } from "effector-react";
import { useLocation, useParams } from "react-router";
import { toast } from "sonner";

import { setErrorEvent } from "@/shared/api";
import { useFetch } from "@/shared/lib/useFetch";

export const useEventController = () => {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  const { data } = useFetch<Event>(`/events/${id}`);

  const setError = useUnit(setErrorEvent);

  const handleCopy = async (text: string, toastTitle: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(toastTitle, {
        classNames: {
          title: "text-center",
          content: "w-full",
          toast: "w-fit! mx-auto",
        },
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleAddressCopy = () => {
    if (!data?.address) {
      return;
    }

    handleCopy(data.address, "Адрес скопирован");
  };

  const handleEventLinkCopy = () => {
    const fullUrl = window.location.origin + location.pathname;

    handleCopy(fullUrl, "Ссылка скопирована");
  };

  return {
    event: data,
    handleAddressCopy,
    handleEventLinkCopy,
  };
};
