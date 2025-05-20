import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import {
  $description,
  $footerState,
  $isGenerationDisabled,
  descriptionGenerated,
  generateDescriptionFx,
  setDescription as setDescriptionEvent,
} from "../model/generatorState";
import {
  $displayTimer,
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

  const [limit, remaining, timeLeft, displayTimer] = useUnit([
    $limit,
    $remaining,
    $timeLeft,
    $displayTimer,
  ]);

  const [generateDescription, generating, setDescription, setAppStarted] =
    useUnit([
      descriptionGenerated,
      generateDescriptionFx.pending,
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
    displayTimer,
    isGenerationDisabled,
    generateDescription: () => {
      generateDescription({ eventName, maxLength });
    },
    generating,
  };
};
