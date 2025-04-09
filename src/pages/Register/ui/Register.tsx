import { Link } from "react-router";

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

import { useRegisterController } from "../controller/useRegisterController";

export const Register = () => {
  const { form, formState, serverErrors, onSubmit } = useRegisterController();

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
                    error={
                      !!formState.errors.username || !!serverErrors?.username
                    }
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
