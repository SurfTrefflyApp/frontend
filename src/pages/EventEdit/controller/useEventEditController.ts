import type { Event } from "@/entities/Event";
import { formSchema, mapDataToServer } from "@/widgets/EventForm";
import type { EventSchema } from "@/widgets/EventForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

import { setErrorEvent } from "@/shared/api";
import { useFetch } from "@/shared/lib/useFetch";
import { routes } from "@/shared/router";

import { updateEvent } from "../api";
import { mapAPIEventToEventSchema } from "../mapper/event";

export const useEventEditController = () => {
  const navigate = useNavigate();
  const setError = useUnit(setErrorEvent);

  const params = useParams();
  const id = Number(params.id);

  const form = useForm<EventSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: [],
      eventType: "public",
    },
    mode: "all",
    shouldUnregister: false,
  });

  const handleSuccessFetch = useCallback((event: Event) => {
    const mappedEvent = mapAPIEventToEventSchema(event);
    form.reset(mappedEvent);
  }, []);

  const { data: event, loading } = useFetch<Event>(
    `/events/${id}`,
    true,
    handleSuccessFetch,
  );

  const onSubmit = useCallback(
    async (values: EventSchema) => {
      if (!event) return;
      try {
        const mappedValues = mapDataToServer(values);
        await updateEvent(event.id, mappedValues);
        navigate(routes.event.replace(":id", event.id.toString()));
      } catch (error) {
        setError(error);
      }
    },
    [event, navigate, setError],
  );

  return { form, onSubmit, event, loading };
};
