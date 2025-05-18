import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { usePasswordController } from "../controller/usePasswordController";

export const PasswordStep = () => {
  const { form, onSubmit } = usePasswordController();
  return (
    <>
      <div className="text-center mb-8 pb-4 border-b-2 border-outline-variant">
        <h1 className="text-3xl font-semibold md:text-5xl md:mb-2">
          Введи новый пароль
        </h1>
        <h2 className="text-xl md:text-2xl">
          Почта подтверждена, введите новый пароль
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
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
                    error={!!form.formState.errors.password}
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.password && (
                  <FormMessage>
                    {form.formState.errors.password.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <Button
            className="w-fit mx-auto"
            disabled={!form.formState.isValid}
            loading={form.formState.isSubmitting}
          >
            Сменить пароль
          </Button>
        </form>
      </Form>
    </>
  );
};
