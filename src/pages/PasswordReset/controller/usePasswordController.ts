import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { setErrorEvent } from "@/shared/api";
import useFormPersist from "@/shared/lib/useFormPersist";

import { resetPassword } from "../api";
import { type PasswordSchema, passwordSchema } from "../model/passwordSchema";
import { useStepContext } from "./useStepContext";

export const usePasswordController = () => {
  const { email, handleNextClick } = useStepContext();

  const setError = useUnit(setErrorEvent);

  const form = useForm<PasswordSchema>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
    },
    mode: "all",
  });

  const { clear } = useFormPersist("password", {
    watch: form.watch,
    setValue: form.setValue,
    validate: true,
  });

  const onSubmit = async (values: PasswordSchema) => {
    return resetPassword(values.password)
      .then(() => {
        clear();
        handleNextClick();
      })
      .catch(setError);
  };

  return { form, onSubmit, email };
};
