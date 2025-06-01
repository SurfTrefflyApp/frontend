import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { setErrorEvent } from "@/shared/api";
import { auth } from "@/shared/auth";
import useFormPersist from "@/shared/lib/useFormPersist";
import { routes } from "@/shared/router";

import { register } from "../api/register";
import type { RegisterSchema, RegisterServerErrors } from "../model/formSchema";
import { formSchema } from "../model/formSchema";

export const useRegisterController = () => {
  const authEvent = useUnit(auth);
  const setError = useUnit(setErrorEvent);
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState<RegisterServerErrors | null>(
    null,
  );

  const { formState, ...form } = useForm<RegisterSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    mode: "all",
  });

  const watchEmail = form.watch("email");
  const watchUsername = form.watch("username");
  const watchPassword = form.watch("password");
  useEffect(() => {
    setServerErrors(null);
  }, [watchEmail, watchUsername, watchPassword]);

  const { clear } = useFormPersist("register", {
    watch: form.watch,
    setValue: form.setValue,
    validate: true,
  });

  const onSubmit = async (values: RegisterSchema) => {
    return register(values)
      .then(() => {
        authEvent({});
        clear();
      })
      .then(() => {
        navigate(routes.profile);
      })
      .catch((error) => {
        setServerErrors({ email: true, username: true, password: true });
        setError(error);
      });
  };

  return { form, formState, serverErrors, onSubmit };
};
