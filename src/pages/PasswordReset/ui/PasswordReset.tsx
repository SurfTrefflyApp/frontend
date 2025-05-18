import { StepProvider } from "../controller/StepProvider";
import { PasswordResetSteps } from "./PasswordResetSteps";

export const PasswordReset = () => {
  return (
    <StepProvider>
      <PasswordResetSteps />
    </StepProvider>
  );
};
