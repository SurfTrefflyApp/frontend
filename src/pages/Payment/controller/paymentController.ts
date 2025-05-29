import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

import { setErrorEvent } from "@/shared/api";
import { useFetch } from "@/shared/lib/useFetch";
import { routes } from "@/shared/router";

import { completePayment } from "../api";
import type { Payment } from "../model/payment";
import { type PaymentSchema, paymentSchema } from "../model/schema";

export const usePaymentController = () => {
  const navigate = useNavigate();
  const setError = useUnit(setErrorEvent);

  const params = useParams();
  const paymentId = Number(params.id);

  const { data: payment, loading } = useFetch<Payment>(
    `/premium-payment/${paymentId}`,
  );

  const form = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),
    mode: "all",
  });

  const handleConfirm = () => {
    if (payment) {
      return completePayment(paymentId)
        .then(() => {
          navigate(routes.event.replace(":id", payment.eventId.toString()), {
            replace: true,
            state: { skipPage: true },
          });
        })
        .catch((e) => {
          setError(e);
        });
    }
  };

  return { form, handleConfirm, payment, loading };
};
