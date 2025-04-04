import { useUnit } from "effector-react";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { Offline } from "@/pages/Offline/ui/Offline";

import { $error, $errorCode, setErrorCodeEvent } from "@/shared/api";
import { Close } from "@/shared/icons/Close";

export const ErrorPagesProvider = ({ children }: PropsWithChildren) => {
  const errorCode = useUnit($errorCode);
  const setErrorCode = useUnit(setErrorCodeEvent);
  const navigate = useNavigate();
  const error = useUnit($error);

  useEffect(() => {
    if (errorCode) {
      navigate(errorCode);
      setErrorCode(null);
    }
  }, [errorCode, navigate, setErrorCode]);

  useEffect(() => {
    if (error && error.title) {
      toast.error(error.title, {
        icon: null,
        position: "top-center",
        description: error.subtitle,
        cancel: {
          label: <Close />,
          onClick: () => {},
        },
      });
    }
  }, [error]);

  if (!navigator.onLine) {
    return <Offline />;
  }

  return children;
};
