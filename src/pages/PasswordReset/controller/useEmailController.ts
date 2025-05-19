import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { setErrorEvent } from "@/shared/api";
import useFormPersist from "@/shared/lib/useFormPersist";

import { forgotPw } from "../api";
import { type EmailSchema, emailSchema } from "../model/emailSchema";
import { useStepContext } from "./useStepContext";

export const useEmailController = () => {
  const setError = useUnit(setErrorEvent);
  const { email, setEmail, handleNextClick } = useStepContext();

  const form = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: email,
    },
    mode: "all",
  });

  const { clear } = useFormPersist("email", {
    watch: form.watch,
    setValue: form.setValue,
    validate: true,
  });

  const onSubmit = async (values: EmailSchema) => {
    return forgotPw(values.email)
      .then(() => {
        clear();
        setEmail(form.getValues("email"));
        handleNextClick();
      })
      .catch(setError);
  };

  return {
    form,
    onSubmit,
  };
};
