import { cn } from "@/shared/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export const YearSelect = ({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (val: string) => void;
  error: boolean;
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 16 }, (_, i) => {
    const year = (currentYear + i).toString();
    return { label: year, value: year };
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
        <SelectValue placeholder="ГГГГ" />
      </SelectTrigger>
      <SelectContent>
        {years.map((year) => (
          <SelectItem key={year.value} value={year.value}>
            {year.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
