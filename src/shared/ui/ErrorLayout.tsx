import { ReactNode } from "react";

import { Title } from "../icons/Title";
import { cn } from "../lib/utils";

interface ErrorLayout {
  icon: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  titleIconClassName?: string;
}

export const ErrorLayout = ({
  icon,
  title,
  subtitle,
  titleIconClassName,
}: ErrorLayout) => {
  return (
    <main className="grid grid-rows-3 h-full items-center justify-center">
      <Title className={cn("mx-auto", titleIconClassName)} />
      <div className="flex flex-col gap-2 justify-center items-center">
        {icon}
        <h1 className="text-center text-3xl font-semibold">{title}</h1>
        <p className="text-center text-2xl font-medium">{subtitle}</p>
      </div>
    </main>
  );
};
