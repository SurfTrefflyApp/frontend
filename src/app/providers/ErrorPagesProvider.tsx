import { useUnit } from "effector-react";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { Error } from "@/pages/Error";
import { Offline } from "@/pages/Offline";

import { $error, $errorPageURL, setErrorCodeEvent } from "@/shared/api";
import { Close } from "@/shared/icons/Close";
import { routes } from "@/shared/router";

import useNetworkStatus from "../lib/useNetworkStatus";

export const ErrorPagesProvider = ({ children }: PropsWithChildren) => {
  const errorPageURL = useUnit($errorPageURL);
  const setErrorCode = useUnit(setErrorCodeEvent);
  const error = useUnit($error);
  const navigate = useNavigate();
  const isOnline = useNetworkStatus();

  useEffect(() => {
    if (errorPageURL && errorPageURL !== routes.getError) {
      navigate(errorPageURL);
      setErrorCode(null);
    }
  }, [errorPageURL, navigate, setErrorCode]);

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

  if (!isOnline) {
    return <Offline />;
  }

  if (errorPageURL === routes.getError) {
    return <Error />;
  }

  return children;
};
