import { AuthLayout } from "@/shared/ui/AuthLayout";

import { useStepContext } from "../controller/useStepContext";

export const PasswordResetSteps = () => {
  const { getCurrentStepComponent, handleBackClick } = useStepContext();

  return (
    <AuthLayout onBackClick={handleBackClick}>
      {getCurrentStepComponent()}
    </AuthLayout>
  );
};
