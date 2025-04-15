import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { EyeClose } from "@/shared/icons/EyeClose";
import { EyeOpen } from "@/shared/icons/EyeOpen";
import { Lock } from "@/shared/icons/Lock";
import { Icon, IconProps } from "@/shared/icons/type";
import mergeRefs from "@/shared/lib/mergeRefs";
import { cn } from "@/shared/lib/utils";

const inputVariants = cva(
  cn(
    "w-full focus-visible:ring-blue focus-visible:ring-ring/25 focus-visible:ring-2 md:text-xl",
    "shadow-md border text-sm ring-offset-background outline-none disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default: cn(
          "rounded-[20px] border-input bg-white py-4 px-12 file:border-0 placeholder:text-muted-foreground",
          "text-green text-center text-base placeholder:text-green placeholder:opacity-100 focus:placeholder:opacity-0",
        ),
        secondary: "bg-surface-container rounded-xl p-4 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    startIcon?: Icon;
    endIcon?: Icon;
    iconProps?: IconProps;
    error?: boolean;
    loading?: boolean;
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startIcon,
      endIcon,
      iconProps,
      error,
      variant,
      loading,
      ...props
    },
    ref,
  ) => {
    const [show, setShow] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const StartIcon = startIcon;
    const EndIcon = endIcon;

    const toggleShow = () => {
      setShow((prev) => !prev);
      setTimeout(() => {
        if (!inputRef.current) return;
        inputRef.current.focus();
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }, 0);
    };

    const inputClassname = cn(inputVariants({ variant, className }), {
      "text-destructive border-destructive focus-visible:ring-destructive placeholder:text-destructive":
        error,
    });

    const iconClassname = cn(iconProps?.className, {
      "text-destructive": error,
    });

    if (type === "password") {
      return (
        <div className="w-full relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Lock className={iconClassname} />
          </div>
          <input
            autoComplete="off"
            type={!show ? type : "text"}
            className={inputClassname}
            ref={mergeRefs(ref, inputRef)}
            {...props}
          />
          <button
            onClick={toggleShow}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            type="button"
          >
            {show ? (
              <EyeOpen className={iconClassname} height={40} width={30} />
            ) : (
              <EyeClose className={iconClassname} height={40} width={30} />
            )}
          </button>
        </div>
      );
    }

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <StartIcon {...iconProps} className={iconClassname} />
          </div>
        )}
        <input
          disabled={loading}
          type={type}
          className={cn(
            startIcon ? "pl-8" : "",
            endIcon ? "pr-8" : "",
            inputClassname,
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <EndIcon {...iconProps} className={iconClassname} />
          </div>
        )}
      </div>
    );
  },
);
