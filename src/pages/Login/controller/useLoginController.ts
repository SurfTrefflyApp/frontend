import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { setErrorEvent } from "@/shared/api";
import { auth } from "@/shared/auth";
import useFormPersist from "@/shared/lib/useFormPersist";
import { routes } from "@/shared/router";

import { login } from "../api/login";
import type { LoginSchema, LoginServerErrors } from "../model/formSchema";
import { formSchema } from "../model/formSchema";

export const useLoginController = () => {
  const authEvent = useUnit(auth);
  const setError = useUnit(setErrorEvent);
  const navigate = useNavigate();

  const [serverErrors, setServerErrors] = useState<LoginServerErrors | null>(
    null,
  );

  const { formState, ...form } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const watchEmail = form.watch("email");
  const watchPassword = form.watch("password");
  useEffect(() => {
    setServerErrors(null);
  }, [watchEmail, watchPassword]);

  const { clear } = useFormPersist("login", {
    watch: form.watch,
    setValue: form.setValue,
    validate: true,
  });

  const onSubmit = useCallback(
    (values: LoginSchema) => {
      return login(values)
        .then((respose) => {
          authEvent(respose.data);
          clear();
        })
        .then(() => {
          navigate(routes.main);
        })
        .catch((error) => {
          setError(error);
          setServerErrors({ email: true, password: true });
        });
    },
    [authEvent, clear, navigate, setError],
  );

  return {
    form,
    formState,
    onSubmit,
    serverErrors,
  };
};
