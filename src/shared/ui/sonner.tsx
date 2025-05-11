import { useTheme } from "next-themes";
import type { ToasterProps } from "sonner";
import { Toaster as Sonner } from "sonner";

import { cn } from "../lib/utils";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
      className={cn("toaster group w-auto! sm-sonner:w-full!", props.className)}
      toastOptions={{
        classNames: {
          toast:
            "group toast sm-sonner:left-[50%] sm-sonner:transform-[translateX(-50%)]! group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:pointer-events-auto",
        },
      }}
    />
  );
};

export { Toaster };
