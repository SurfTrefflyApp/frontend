import {
  type EventSchema,
  formSchema,
  mapDataToServer,
} from "@/widgets/EventForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { setErrorEvent } from "@/shared/api";
import useFormPersist from "@/shared/lib/useFormPersist";
import { routes } from "@/shared/router";

import { createEvent } from "../api";

export const useEventNewController = () => {
  const navigate = useNavigate();
  const setError = useUnit(setErrorEvent);

  const form = useForm<EventSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: [],
      eventType: "public",
    },
    mode: "all",
    shouldUnregister: false,
  });

  const { clear } = useFormPersist("newEvent", {
    watch: form.watch,
    setValue: form.setValue,
    validate: true,
  });

  const onSubmit = async (values: EventSchema) => {
    try {
      const mappedValues = mapDataToServer(values);
      await createEvent(mappedValues);
      clear();
      form.reset();
      navigate(routes.profile);
    } catch (error) {
      setError(error);
    }
  };

  return { form, onSubmit };
};
