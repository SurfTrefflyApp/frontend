import { useUnit } from "effector-react";
import { useEffect, useLayoutEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router";

import { setErrorEvent } from "@/shared/api";

import { $event, $loading, eventInit, eventReset } from "../model/store";
import { useEventClipboardController } from "./useEventClipboardController";

export const useEventController = () => {
  const params = useParams();
  const id = Number(params.id);
  const [searchParams] = useSearchParams();
  const invite = searchParams.get("invite");

  const location = useLocation();

  const setError = useUnit(setErrorEvent);

  const initEvent = useUnit(eventInit);
  const resetEvent = useUnit(eventReset);
  const event = useUnit($event);
  const loading = useUnit($loading);

  useEffect(() => {
    initEvent({ eventId: id, invite: invite ?? undefined });
  }, [id, initEvent, invite]);

  const { handleAddressCopy, handleEventLinkCopy } =
    useEventClipboardController({ event, setError });

  useEffect(() => {
    return () => {
      resetEvent();
    };
  }, [resetEvent]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return {
    handleAddressCopy,
    handleEventLinkCopy,
    loading: loading,
  };
};
