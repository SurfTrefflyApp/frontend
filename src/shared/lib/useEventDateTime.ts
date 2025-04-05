import { formatDateWithIntl } from "@/shared/lib/formatDateWithIntl";

export const useEventDateTime = (dateTime: string) => {
  try {
    return formatDateWithIntl(dateTime);
  } catch {
    return "Invalid date string";
  }
};
