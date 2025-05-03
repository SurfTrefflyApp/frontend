import type { ReactNode } from "react";

import { useStatusBarColor } from "../dom/useStatusBarColor";
import { Title } from "../icons/Title";
import { cn } from "../lib/utils";

interface ErrorLayout {
  icon: ReactNode;
  title: ReactNode;
  titleClassName?: string;
  subtitle: ReactNode;
  subtitleClassName?: string;
  titleIconClassName?: string;
  containerClassName?: string;
}

export const ErrorLayout = ({
  icon,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  titleIconClassName,
  containerClassName,
}: ErrorLayout) => {
  useStatusBarColor("--background");

  return (
    <div
      className={cn(
        "grid grid-rows-3 h-full items-center justify-center p-4",
        containerClassName,
      )}
    >
      <Title className={cn("mx-auto", titleIconClassName)} />
      <div className="flex flex-col gap-2 justify-center items-center">
        {icon}
        <h1
          className={cn("text-center text-3xl font-semibold", titleClassName)}
        >
          {title}
        </h1>
        <p
          className={cn("text-center text-2xl font-medium", subtitleClassName)}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
