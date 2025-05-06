import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

const tagVariants = cva(
  "rounded-xl p-3 leading-none text-white font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primary text-base",
        selected:
          "bg-primary-container text-primary hover:bg-primary-container hover:text-primary/80 active:text-primary/80",
        static: "hover:bg-primary active:bg-primary cursor-text select-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type Tag = VariantProps<typeof tagVariants> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "name" | "id"> & {
    name: string;
    className?: string;
  };

export const Tag = ({ name, variant, className, ...props }: Tag) => {
  return (
    <Button
      type="button"
      className={cn(tagVariants({ variant, className }))}
      {...props}
    >
      {name}
    </Button>
  );
};
