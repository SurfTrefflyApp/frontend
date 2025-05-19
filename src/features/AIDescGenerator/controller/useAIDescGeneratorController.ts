import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import {
  $description,
  $footerState,
  $isGenerationDisabled,
  descriptionGenerated,
  setDescription as setDescriptionEvent,
} from "../model/generatorState";
import {
  $limit,
  $remaining,
  $timeLeft,
  appStarted,
  timerIntervalId,
} from "../model/timer";

interface UseAIDescGeneratorController {
  eventName: string;
}

export const useAIDescGeneratorController = ({
  eventName,
}: UseAIDescGeneratorController) => {
  const [maxLength, setMaxLength] = useState<number>(500);

  const [footerState, isGenerationDisabled, description] = useUnit([
    $footerState,
    $isGenerationDisabled,
    $description,
  ]);

  const [limit, remaining, timeLeft] = useUnit([$limit, $remaining, $timeLeft]);

  const [generateDescription, setDescription, setAppStarted] = useUnit([
    descriptionGenerated,
    setDescriptionEvent,
    appStarted,
  ]);

  useEffect(() => {
    setAppStarted(eventName);

    return () => {
      clearInterval(timerIntervalId);
    };
  }, [eventName, setAppStarted]);

  return {
    maxLength,
    setMaxLength,
    description,
    setDescription,
    footerState,
    limit,
    remaining,
    timeLeft,
    isGenerationDisabled,
    generateDescription: () => {
      generateDescription({ eventName, maxLength });
    },
  };
};
