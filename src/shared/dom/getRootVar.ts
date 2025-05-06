import { rootStyle } from "./elements";

export const getRootVar = (variable: string) => {
  return rootStyle?.getPropertyValue(variable);
};
