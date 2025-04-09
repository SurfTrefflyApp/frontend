import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import useFormPersist from "@/shared/lib/useFormPersist";

import { EventSchema, formSchema } from "../model/formSchema";

export const useEventNewController = () => {
  const { formState, ...form } = useForm<EventSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: [],
      eventType: "public",
      description: "",
    },
    mode: "all",
    shouldUnregister: false,
  });

  useFormPersist("newEvent", {
    watch: form.watch,
    setValue: form.setValue,
    validate: true,
  });

  const onSubmit = async (values: EventSchema) => {
    console.debug(values);
  };

  return { formState, form, onSubmit };
};
