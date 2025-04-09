import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

const textAreaVariants = cva(
  cn(
    "min-h-10 max-h-[10em] w-full focus-visible:ring-blue focus-visible:ring-ring/25 focus-visible:ring-2 md:text-xl",
    "shadow-md border text-sm ring-offset-background outline-none disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default: cn(
          "rounded-[20px] border-input bg-white py-4 px-12 file:border-0 placeholder:text-muted-foreground",
          "text-green text-center text-base placeholder:text-green placeholder:opacity-100 focus:placeholder:opacity-0",
        ),
        secondary: cn("bg-surface-container rounded-xl p-4 px-6"),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type TextArea = React.ComponentProps<"textarea"> &
  VariantProps<typeof textAreaVariants> & {
    error?: boolean;
  };

function Textarea({ className, error, variant, ...props }: TextArea) {
  const textareaClassname = cn(textAreaVariants({ variant, className }), {
    "text-destructive border-destructive focus-visible:ring-destructive placeholder:text-destructive":
      error,
  });
  return (
    <textarea data-slot="textarea" className={textareaClassname} {...props} />
  );
}

export { Textarea };
