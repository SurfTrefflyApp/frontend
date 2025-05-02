import { rootStyle } from "./root";

export const getRootVar = (variable: string) => {
  return rootStyle?.getPropertyValue(variable);
};
