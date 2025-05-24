import { useUnit } from "effector-react";
import { type PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router";

import { auth } from "@/shared/auth";
import { routes } from "@/shared/router";

import { CodeStep } from "../ui/CodeStep";
import { EmailStep } from "../ui/EmailStep";
import { PasswordStep } from "../ui/PasswordStep";
import { StepContext } from "./useStepContext";

const steps = {
  0: EmailStep,
  1: CodeStep,
  2: PasswordStep,
} as const;

type StepsKeys = keyof typeof steps;

export const StepProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState("");
  const [currentStep, setCurrentStep] = useState<StepsKeys>(0);

  const authEvent = useUnit(auth);

  const navigate = useNavigate();

  const handleBackClick = () => {
    if (currentStep === 0) {
      navigate(-1);
    } else {
      setCurrentStep((prev) => (prev - 1) as StepsKeys);
    }
  };

  const handleNextClick = () => {
    if (currentStep === 2) {
      navigate(routes.profile);
      authEvent({});
    } else {
      setCurrentStep((prev) => (prev + 1) as StepsKeys);
    }
  };

  const getCurrentStepComponent = () => {
    const Step = steps[currentStep];
    return <Step />;
  };

  return (
    <StepContext.Provider
      value={{
        email,
        setEmail,
        handleBackClick,
        handleNextClick,
        getCurrentStepComponent,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
