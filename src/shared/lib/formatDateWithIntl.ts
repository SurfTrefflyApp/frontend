export function formatDateWithIntl(inputDate: string): string {
  const date = new Date(inputDate);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const formatter = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
  });

  return formatter.format(date);
}
