import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";

import { generateDescription } from "../api";
import { $remaining, setResetTimeFx } from "./timer";

type FooterState = "initial" | "generated";

interface GenerateParams {
  eventName: string;
  maxLength: number;
}

export const generateDescriptionFx = createEffect(
  async ({ eventName, maxLength }: GenerateParams) => {
    const response = await generateDescription(eventName, maxLength);
    return response.data;
  },
);

export const descriptionGenerated = createEvent<GenerateParams>();

export const footerStateChanged = createEvent<FooterState>();

export const setDescription = createEvent<string>();

export const $footerState = createStore<FooterState>("initial").on(
  footerStateChanged,
  (_, newFooterState) => newFooterState,
);

export const $isGenerationDisabled = createStore(true).on(
  setResetTimeFx.failData,
  () => true,
);

export const $description = createStore("").on(
  setDescription,
  (_, newDescription) => newDescription,
);

sample({
  clock: [$remaining],
  fn: (state) => !state,
  target: $isGenerationDisabled,
});

sample({
  clock: [generateDescriptionFx.failData],
  target: setErrorEvent,
});

sample({
  clock: descriptionGenerated,
  source: { isGenerationDisabled: $isGenerationDisabled },
  filter: ({ isGenerationDisabled }, eventTitle) => {
    return !isGenerationDisabled && !!eventTitle;
  },
  fn: (_, params) => params,
  target: generateDescriptionFx,
});

sample({
  clock: generateDescriptionFx.doneData,
  fn: (response) => response.description,
  target: setDescription,
});

sample({
  clock: generateDescriptionFx.doneData,
  fn: (response) => response.remaining,
  target: $remaining,
});

sample({
  clock: generateDescriptionFx.doneData,
  fn: (response) => response.resetAt,
  target: setResetTimeFx,
});

sample({
  clock: generateDescriptionFx.doneData,
  fn: (): FooterState => "generated",
  target: footerStateChanged,
});
