import { cn } from "@/shared/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export const MonthSelect = ({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (val: string) => void;
  error: boolean;
}) => {
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, "0");
    return { label: month, value: month };
  });

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "w-[100px] bg-surface-container rounded-xl p-4 py-2 h-fit!",
          {
            "text-destructive! border-destructive focus-visible:ring-destructive placeholder:text-destructive":
              error,
          },
        )}
      >
        <SelectValue placeholder="ММ" />
      </SelectTrigger>
      <SelectContent>
        {months.map((month) => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
