import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { setErrorEvent } from "@/shared/api";
import useFormPersist from "@/shared/lib/useFormPersist";
import { routes } from "@/shared/router";

import { createEvent } from "../api";
import type { EventSchema} from "../model/formSchema";
import { formSchema } from "../model/formSchema";

export const useEventNewController = () => {
  const navigate = useNavigate();
  const setError = useUnit(setErrorEvent);

  const { formState, ...form } = useForm<EventSchema>({
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
      await createEvent(values);
      clear();
      form.reset();
      navigate(routes.profile);
    } catch (error) {
      setError(error);
    }
  };

  return { formState, form, onSubmit };
};
