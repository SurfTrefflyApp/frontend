import { Link } from "react-router";

import { Mail } from "@/shared/icons/Mail";
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

import { useLoginController } from "../controller/useLoginController";

export const Login = () => {
  const { form, formState, serverErrors, onSubmit } = useLoginController();

  return (
    <AuthLayout>
      <div className="text-center mb-8 pb-4 border-b-2 border-outline-variant">
        <h1 className="text-3xl font-semibold md:text-5xl md:mb-2">
          С возвращением!
        </h1>
        <h2 className="text-xl md:text-2xl">
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
        <Button
          variant="ghost"
          className="block mx-auto mt-4 text-center text-primary text-sm font-medium p-0"
        >
          <Link to={routes.passwordReset}>Забыли пароль?</Link>
        </Button>
      </Form>
    </AuthLayout>
  );
};
