import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

import { formSchema } from "@/pages/Register/model/formSchema";

import { routes } from "@/shared/router";
import { AuthLayout } from "@/shared/ui/AuthLayout";
import { Button } from "@/shared/ui/button";
import { Form, FormControl, FormField } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

export const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.debug(values);
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
        <p className="text-xl">Заполните все поля ниже, чтобы продолжить</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormControl>
                <Input placeholder="Почта" {...field} />
              </FormControl>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormControl>
                <Input placeholder="Имя" {...field} />
              </FormControl>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormControl>
                <Input
                  autoComplete="new-password"
                  placeholder="Пароль"
                  type="password"
                  {...field}
                />
              </FormControl>
            )}
          />
          <Button
            type="submit"
            className="w-fit mx-auto"
            disabled={!form.formState.isValid}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </AuthLayout>
  );
};
