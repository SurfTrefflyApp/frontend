import { type JSX, createContext, useContext } from "react";

interface StepContext {
  handleBackClick: () => void;
  handleNextClick: () => void;
  email: string;
  setEmail: (newEmail: string) => void;
  getCurrentStepComponent: () => JSX.Element;
}

export const StepContext = createContext<StepContext>({
  handleBackClick: () => {},
  handleNextClick: () => {},
  email: "",
  setEmail: () => {},
  getCurrentStepComponent: () => <></>,
});

export const useStepContext = () => useContext(StepContext);
