import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import { formSchema } from "@/pages/Register/model/formSchema";

import { Close } from "@/shared/icons/Close";
import { Mail } from "@/shared/icons/Mail";
import { Person } from "@/shared/icons/Person";
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
  const { formState, ...form } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.debug(values);
    toast.error("Ошибка!", {
      icon: null,
      position: "top-center",
      description: "Девочки, мы упали...",
      cancel: {
        label: <Close />,
        onClick: () => {},
      },
    });
  };

  return (
    <AuthLayout
      footer={
        <small className="text-center w-full block text-xs text-outline-variant">
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
                      className: "w-7",
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
          >
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </AuthLayout>
  );
};
