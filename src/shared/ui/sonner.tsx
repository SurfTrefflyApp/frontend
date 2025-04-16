import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

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
      className={cn("toaster group", props.className)}
    />
  );
};

export { Toaster };
