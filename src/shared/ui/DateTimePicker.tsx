import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import InputMask from "react-input-mask";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export function DateTimePicker({
  value,
  onChange,
  onError,
  error,
}: {
  value: string | undefined;
  onChange: (date: string | undefined) => void;
  onError: (error: string) => void;
  error?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value ?? "");

  const parsedValue = value
    ? parse(value, "dd.MM.yyyy HH:mm", new Date())
    : undefined;

  React.useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    const parsed = parse(val, "dd.MM.yyyy HH:mm", new Date(), { locale: ru });
    if (!isNaN(parsed.getTime())) {
      onChange(format(parsed, "dd.MM.yyyy HH:mm"));
      onError("");
    } else {
      onError("Некорректный формат даты");
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    console.debug(date);
    if (!date) return;
    if (parsedValue) {
      date.setHours(parsedValue.getHours());
      date.setMinutes(parsedValue.getMinutes());
    }
    const formattedDate = format(date, "dd.MM.yyyy");
    const newDateTime = `${formattedDate} ${format(date, "HH:mm")}`;
    onChange(newDateTime);
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!value) return;
    const updated = parse(value, "dd.MM.yyyy HH:mm", new Date(), {
      locale: ru,
    });
    updated.setHours(parseInt(e.target.value));
    onChange(format(updated, "dd.MM.yyyy HH:mm"));
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!value) return;
    const updated = parse(value, "dd.MM.yyyy HH:mm", new Date(), {
      locale: ru,
    });
    updated.setMinutes(parseInt(e.target.value));
    onChange(format(updated, "dd.MM.yyyy HH:mm"));
  };

  const hours = Array.from({ length: 24 }, (_, i) =>
    String(i).padStart(2, "0"),
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0"),
  );

  return (
    <div className="relative">
      <InputMask
        mask="99.99.9999 99:99"
        value={inputValue}
        onChange={handleInputChange}
      >
        {(props) => (
          <Input
            {...props}
            placeholder="дд.мм.гггг чч:мм"
            className="pr-10"
            variant="secondary"
            pattern="\d*"
            inputMode="numeric"
            error={error}
          />
        )}
      </InputMask>

      <Popover open={open} onOpenChange={setOpen}>
        <Button
          variant="ghost"
          size="icon"
          type="button"
          asChild
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          <PopoverTrigger>
            <CalendarIcon className="h-[24px] w-[24px] size-1 text-primary" />
          </PopoverTrigger>
        </Button>
        <PopoverContent className="w-auto p-2" align="start">
          <Calendar
            mode="single"
            selected={parsedValue}
            month={parsedValue ? parsedValue : new Date()}
            onSelect={handleDateSelect}
            initialFocus
            locale={ru}
            onMonthChange={handleDateSelect}
          />
          <div className="flex gap-2 mt-2">
            <select
              value={parsedValue ? format(parsedValue, "HH") : ""}
              onChange={handleHourChange}
              className="border rounded-md p-1 text-sm"
            >
              {hours.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            <span className="text-muted-foreground">:</span>
            <select
              value={parsedValue ? format(parsedValue, "mm") : ""}
              onChange={handleMinuteChange}
              className="border rounded-md p-1 text-sm"
            >
              {minutes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
