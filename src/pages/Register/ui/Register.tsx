import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { register } from "@/pages/Register/api/register";
import { RegisterSchema, formSchema } from "@/pages/Register/model/formSchema";

import { setMessageEvent } from "@/shared/api";
import { auth } from "@/shared/auth";
import { ErrorResponse } from "@/shared/auth";
import { Mail } from "@/shared/icons/Mail";
import { Person } from "@/shared/icons/Person";
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

export const Register = () => {
  const authEvent = useUnit(auth);
  const setMessage = useUnit(setMessageEvent);
  const navigate = useNavigate();

  const { formState, ...form } = useForm<RegisterSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    mode: "all",
  });

  const { clear } = useFormPersist("register", {
    watch: form.watch,
    setValue: form.setValue,
    validate: true,
    validateEmpty: false,
  });

  const onSubmit = async (values: RegisterSchema) => {
    register(values)
      .then(() => {
        authEvent();
        clear();
      })
      .then(() => {
        navigate(routes.profile);
      })
      .catch((error) => {
        if (axios.isAxiosError<ErrorResponse>(error)) {
          setMessage({
            title: error.response?.data.title,
            subtitle: error.response?.data.subtitle,
          });
        }
      });
  };

  return (
    <AuthLayout
      footer={
        <small className="text-center w-full max-w-md block text-xs text-outline-variant">
          Используя Treffly вы соглашаетесь с нашими{" "}
          <Link to={routes.terms} className="text-primary">
            Условиями
          </Link>{" "}
          и{" "}
          <Link to={routes.privacy} className="text-primary">
            Политикой конфиденциальности
          </Link>
        </small>
      }
    >
      <div className="text-center mb-8 pb-4 border-b-2 border-outline-variant">
        <h1 className="text-3xl font-semibold">Создание аккаунта</h1>
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
                    error={!!formState.errors.email}
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="username"
                    placeholder="Имя"
                    autoComplete="name"
                    startIcon={Person}
                    iconProps={{
                      className: "w-5",
                    }}
                    error={!!formState.errors.username}
                    {...field}
                  />
                </FormControl>
                {formState.errors.username && (
                  <FormMessage>{formState.errors.username.message}</FormMessage>
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
                    autoComplete="new-password"
                    placeholder="Пароль"
                    type="password"
                    error={!!formState.errors.password}
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
            className="w-fit mx-auto"
            disabled={!formState.isValid}
            loading={formState.isSubmitting}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </AuthLayout>
  );
};
