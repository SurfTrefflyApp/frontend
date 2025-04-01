import { useUnit } from "effector-react";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { Offline } from "@/pages/Offline/ui/Offline";

import { $error, $message, setErrorEvent } from "@/shared/api";
import { Close } from "@/shared/icons/Close";

export const ErrorPagesProvider = ({ children }: PropsWithChildren) => {
  const error = useUnit($error);
  const setError = useUnit(setErrorEvent);
  const navigate = useNavigate();
  const message = useUnit($message);

  useEffect(() => {
    if (error) {
      navigate(error);
      setError(null);
    }
  }, [error, navigate, setError]);

  useEffect(() => {
    if (message && message.title) {
      toast.error(message.title, {
        icon: null,
        position: "top-center",
        description: message.subtitle,
        cancel: {
          label: <Close />,
          onClick: () => {},
        },
      });
    }
  }, [message]);

  if (!navigator.onLine) {
    return <Offline />;
  }

  return children;
};
