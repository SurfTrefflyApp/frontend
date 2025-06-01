import ReactInputMask from "react-input-mask";
import { useNavigate } from "react-router";

import { Close } from "@/shared/icons/Close";
import { LockClose } from "@/shared/icons/LockClose";
import { NotFound } from "@/shared/ui/NotFound";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { usePaymentController } from "../controller/paymentController";
import { MonthSelect } from "./MonthSelect";
import { PaymentSkeleton } from "./PaymentSkeleton";
import { YearSelect } from "./YearSelect";

export const Payment = () => {
  const navigate = useNavigate();

  const { form, handleConfirm, payment, loading } = usePaymentController();

  if (loading) {
    return <PaymentSkeleton />;
  }

  if (!payment) {
    return <NotFound />;
  }

  return (
    <main className="flex-1 w-full relative flex flex-col gap-8 justify-center p-8 mx-auto max-w-[768px]">
      <Button
        className="absolute right-5 top-5"
        variant="ghost"
        onClick={() => {
          navigate(-1);
        }}
      >
        <Close color="var(--primary)" className="size-[20px] md:size-auto" />
      </Button>
      <header className="w-full">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-3xl font-semibold">SimulBank</h2>
          <div className="flex items-center gap-1">
            <LockClose className="text-primary-inverse" />
            <span aria-label="Безопасный платеж" className="text-sm">
              Безопасный платеж
            </span>
          </div>
        </div>
        <label htmlFor="payment-info" className="font-semibold block mt-3">
          Оплата заказа
        </label>
      </header>
      <section
        id="payment-info"
        aria-labelledby="payment-heading"
        className="flex flex-col gap-2 bg-surface-container rounded-3xl p-4"
      >
        <h2 id="payment-heading" className="font-semibold">
          Информация о платеже
        </h2>
        <dl className="flex flex-col gap-2">
          <div className="flex justify-between">
            <dt>Магазин</dt>
            <dd>{payment.shop}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Номер заказа</dt>
            <dd>#{payment.id}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Сумма к оплате</dt>
            <dd>{payment.price} ₽</dd>
          </div>
        </dl>
      </section>
      <Form {...form}>
        <form
          className="flex flex-col gap-8"
          onSubmit={form.handleSubmit(handleConfirm)}
        >
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="cardNumber">Номер карты</FormLabel>
                <FormControl>
                  <ReactInputMask
                    mask="9999 9999 9999 9999"
                    value={field.value}
                    onChange={field.onChange}
                    maskChar={null}
                  >
                    {(inputProps) => (
                      <Input
                        variant="secondary"
                        id="cardNumber"
                        placeholder="xxxx xxxx xxxx xxxx"
                        required
                        className="text-center text-md focus:placeholder:opacity-0"
                        error={!!form.formState.errors.cardNumber}
                        {...inputProps}
                      />
                    )}
                  </ReactInputMask>
                </FormControl>
                {form.formState.errors.cardNumber && (
                  <FormMessage className="text-center">
                    {form.formState.errors.cardNumber.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between gap-2">
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MonthSelect
                      {...field}
                      error={!!form.formState.errors.month}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <YearSelect
                      {...field}
                      error={!!form.formState.errors.year}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      variant="secondary"
                      maxLength={3}
                      type="number"
                      placeholder="cvv"
                      inputMode="numeric"
                      pattern="[0-9\s]{3}"
                      className="w-[100px] py-2"
                      error={!!form.formState.errors.cvv}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={!form.formState.isValid}
            loading={form.formState.isSubmitting}
          >
            Оплатить {payment.price}₽
          </Button>
        </form>
      </Form>
    </main>
  );
};
