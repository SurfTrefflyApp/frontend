import { api } from "@/shared/api";

export function completePayment(paymentId: number) {
  return api.post(`/premium-payment/${paymentId}/complete`);
}
