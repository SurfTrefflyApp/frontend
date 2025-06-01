import { useUnit } from "effector-react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { setErrorEvent } from "@/shared/api";
import { routes } from "@/shared/router";

import { createPremiumPayment } from "../api";

export const usePremiumController = (eventId: number) => {
  const setError = useUnit(setErrorEvent);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePremiumClick = async () => {
    setLoading(true);
    try {
      const response = await createPremiumPayment(eventId);
      navigate(routes.payment.replace(":id", response.data.id.toString()));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { handlePremiumClick, loading };
};
