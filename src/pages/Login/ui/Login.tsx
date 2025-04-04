import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { login } from "@/pages/Login/api/login";
import {
  LoginSchema,
  LoginServerErrors,
  formSchema,
} from "@/pages/Login/model/formSchema";

import { setErrorEvent } from "@/shared/api";
import { auth } from "@/shared/auth";
import { Mail } from "@/shared/icons/Mail";
import useFormPersist from "@/shared/lib/useFormPersist";
import { routes } from "@/shared/router";
import { AuthLayout } from "@/shared/ui/AuthLayout";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

export const Login = () => {
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

  const onSubmit = (values: LoginSchema) => {
    return login(values)
      .then(() => {
        authEvent();
        clear();
      })
      .then(() => {
        navigate(routes.profile);
      })
      .catch((error) => {
        setError(error);
        setServerErrors({ email: true, password: true });
      });
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8 pb-4 border-b-2 border-outline-variant">
        <h1 className="text-3xl font-semibold">С возвращением!</h1>
        <h2 className="text-xl">
          Введи свою почту и пароль для того, чтобы войти
        </h2>
      </div>
      <Form {...form} formState={formState}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="Почта"
                    autoComplete="email"
                    startIcon={Mail}
                    iconProps={{
                      className: "w-6",
                    }}
                    className="w-full"
                    error={!!formState.errors.email || !!serverErrors?.email}
                    {...field}
                  />
                </FormControl>
                {formState.errors.email && (
                  <FormMessage>{formState.errors.email.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="password"
                    autoComplete="current-password"
                    placeholder="Пароль"
                    type="password"
                    error={
                      !!formState.errors.password || !!serverErrors?.password
                    }
                    {...field}
                  />
                </FormControl>
                {formState.errors.password && (
                  <FormMessage>{formState.errors.password.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-fit mx-auto px-10"
            disabled={!formState.isValid}
            loading={formState.isSubmitting}
          >
            Войти
          </Button>
        </form>
        <Link
          to={routes.passwordReset}
          className="block mt-4 text-center text-primary text-sm font-medium"
        >
          Забыли пароль?
        </Link>
      </Form>
    </AuthLayout>
  );
};
