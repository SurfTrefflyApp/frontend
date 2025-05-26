import { Mail } from "@/shared/icons/Mail";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { useEmailController } from "../controller/useEmailController";

export const EmailStep = () => {
  const { form, onSubmit } = useEmailController();

  return (
    <>
      <div className="text-center mb-8 pb-4 border-b-2 border-outline-variant">
        <h1 className="text-3xl font-semibold md:text-5xl md:mb-2">
          Забыли пароль?
        </h1>
        <h2 className="text-xl md:text-2xl">
          Введи свою почту и мы отправим тебе код
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
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
                    error={!!form.formState.errors.email}
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.email && (
                  <FormMessage>
                    {form.formState.errors.email.message}
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
            Отправить код
          </Button>
        </form>
      </Form>
    </>
  );
};
