import type { Event } from "@/entities/Event";
import { useLocation } from "react-router";
import { toast } from "sonner";

import { generateInviteToken } from "../api";

interface UseEventClipboardController {
  event: Event | null;
  setError: (error: unknown) => void;
}
export const useEventClipboardController = ({
  event,
  setError,
}: UseEventClipboardController) => {
  const location = useLocation();

  const handlePrivateEventCopy = async (eventUrl: string, eventId: number) => {
    try {
      const { data } = await generateInviteToken(eventId);
      handleCopy(`${eventUrl}?invite=${data.token}`, "Ссылка скопирована");
    } catch (e) {
      setError(e);
    }
  };

  const handleCopy = async (text: string, toastTitle: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(toastTitle, {
        classNames: {
          title: "w-full text-center",
          content: "w-full",
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
    if (!event) throw new Error("Event is null");

    const eventUrl = window.location.origin + location.pathname;

    if (event.isPrivate) {
      handlePrivateEventCopy(eventUrl, event.id);
    } else {
      handleCopy(eventUrl, "Ссылка скопирована");
    }
  };

  return {
    handleAddressCopy,
    handleEventLinkCopy,
  };
};
