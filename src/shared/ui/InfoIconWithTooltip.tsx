import { Info } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export const InfoIconWithTooltip = ({
  content,
  className = "",
}: {
  content: ReactNode;
  className?: string;
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          type="button"
          variant="ghost"
          className={`inline-flex items-center justify-center rounded-full focus:outline-none hover:opacity-50 active:opacity-50 ${className}`}
          aria-label="Information"
        >
          <Info className="h-5 w-5 text-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="max-w-[250px] bg-primary text-primary-foreground p-3 border-none"
        side="top"
        align="center"
      >
        <p className="text-sm">{content}</p>
      </PopoverContent>
    </Popover>
  );
};
