import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

import { formSchema } from "@/pages/Register/model/formSchema";

import { Mail } from "@/shared/icons/Mail";
import { Person } from "@/shared/icons/Person";
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
    // toast.error("Ошибка!", {
    //   icon: null,
    //   position: "top-center",
    //   description: "Девочки, мы упали...",
    //   duration: 100000,
    //   cancel: {
    //     label: <Close />,
    //     onClick: () => {},
    //   },
    // });
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
                <Input
                  id="email"
                  placeholder="Почта"
                  startIcon={Mail}
                  iconProps={{
                    className: "w-6",
                  }}
                  error={
                    !!(
                      form.formState.errors["email"] &&
                      form.formState.touchedFields["email"]
                    )
                  }
                  {...field}
                />
              </FormControl>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormControl>
                <Input
                  id="username"
                  placeholder="Имя"
                  autoComplete="name"
                  startIcon={Person}
                  iconProps={{
                    className: "w-7",
                  }}
                  error={
                    !!(
                      form.formState.errors["username"] &&
                      form.formState.touchedFields["username"]
                    )
                  }
                  {...field}
                />
              </FormControl>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormControl>
                <Input
                  id="password"
                  autoComplete="new-password"
                  placeholder="Пароль"
                  type="password"
                  error={
                    !!(
                      form.formState.errors["password"] &&
                      form.formState.touchedFields["password"]
                    )
                  }
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
