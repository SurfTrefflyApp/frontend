import { useUnit } from "effector-react";
import { useState } from "react";

import { setErrorEvent } from "@/shared/api";
import { useInterval } from "@/shared/lib/useInterval";

import { forgotPw, verifyCode } from "../api";
import { useStepContext } from "./useStepContext";

const RETRY_TIME = 45;

export const useCodeController = () => {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [retryTime, setRetryTime] = useState(0);

  const { handleNextClick, email } = useStepContext();
  const setError = useUnit(setErrorEvent);

  const handleTimerTick = () => {
    setRetryTime((prev) => prev - 1);
    if (retryTime <= 1) {
      pause();
    }
  };

  const { pause, resume } = useInterval(handleTimerTick);

  const handleConfirm = async () => {
    try {
      setConfirming(true);
      await verifyCode(email, code);
      handleNextClick();
    } catch (e) {
      setError(e);
      setCodeError(true);
    } finally {
      setConfirming(false);
    }
  };

  const handleRetry = async () => {
    try {
      await forgotPw(email);
      setRetryTime(RETRY_TIME);
      resume();
    } catch (e) {
      setError(e);
    }
  };

  return {
    code,
    setCode,
    codeError,
    setCodeError,
    handleConfirm,
    handleRetry,
    confirming,
    retryTime,
  };
};
