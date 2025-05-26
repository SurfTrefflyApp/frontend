import VerificationInput from "react-verification-input";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

import { useCodeController } from "../controller/useCodeController";
import { useStepContext } from "../controller/useStepContext";

export const CodeStep = () => {
  const { email } = useStepContext();
  const {
    code,
    setCode,
    codeError,
    setCodeError,
    handleConfirm,
    confirming,
    handleRetry,
    retryTime,
  } = useCodeController();

  return (
    <>
      <div className="text-center mb-8 pb-4 border-b-2 border-outline-variant">
        <h1 className="text-3xl font-semibold md:text-5xl md:mb-2">
          Подтверждение почты
        </h1>
        <h2 className="text-xl md:text-2xl">
          Мы отправили код подтверждения на твою почту:
          <br />
          <span className="font-semibold">{email}</span>
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <VerificationInput
            validChars="0-9"
            length={6}
            placeholder="_"
            classNames={{
              container: "gap-4 h-fit! mx-auto",
              character: cn(
                `h-[70px]! rounded-3xl bg-white shadow-md text-center flex items-center text-surface-on!
              justify-center border-2! border-transparent! outline-primary! transition-all duration-200`,
                { "border-destructive!": codeError },
              ),
              characterInactive: "bg-white!",
            }}
            inputProps={{
              id: "code",
              className:
                "w-full h-full text-center border-b-2 border-gray-300 focus:border-black outline-none",
            }}
            value={code}
            onChange={(value) => {
              setCode(value);
              setCodeError(false);
            }}
          />
          {codeError && (
            <label
              htmlFor="code"
              className="mt-2 text-center text-sm block text-destructive"
            >
              Неверный код подтверждения
            </label>
          )}
        </div>
        <Button
          className="w-fit mx-auto"
          onClick={handleConfirm}
          loading={confirming}
        >
          Подтвердить
        </Button>
        {retryTime ? (
          <p className="text-center">{retryTime}</p>
        ) : (
          <Button
            variant="ghost"
            className="w-fit mx-auto text-primary py-0"
            onClick={handleRetry}
            disabled={confirming}
          >
            Отправить код еще раз
          </Button>
        )}
      </div>
    </>
  );
};
