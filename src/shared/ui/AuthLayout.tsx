import type { PropsWithChildren, ReactNode } from "react";
import { useNavigate } from "react-router";

import { Back } from "@/shared/icons/Back";
import { Close } from "@/shared/icons/Close";
import { Title } from "@/shared/icons/Title";
import { cn } from "@/shared/lib/utils";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

import { useStatusBarColor } from "../dom/useStatusBarColor";

interface AuthLayout extends PropsWithChildren {
  withBackBtn?: boolean;
  withCloseBtn?: boolean;
  footer?: ReactNode;
  onBackClick?: () => void;
}

export const AuthLayout = ({
  withBackBtn = true,
  withCloseBtn = true,
  footer,
  children,
  onBackClick,
}: AuthLayout) => {
  const navigate = useNavigate();

  useStatusBarColor("--background");

  return (
    <div className="h-svh w-screen flex items-center justify-center">
      <div
        className={cn(
          "h-full w-full max-w-3xl flex flex-col gap-5 justify-between items-center p-5 pt-[20%]",
          "md:py-30 overflow-y-auto no-scrollbar",
        )}
      >
        {withBackBtn && (
          <Button
            className="absolute left-5 top-5 md:hidden"
            onClick={() => {
              if (onBackClick) {
                onBackClick();
              } else {
                navigate(-1);
              }
            }}
            variant="ghost"
          >
            <Back className="size-[20px]" />
          </Button>
        )}
        {withCloseBtn && (
          <Button
            className="absolute right-5 top-5"
            variant="ghost"
            onClick={() => {
              navigate(routes.main, { replace: true });
            }}
          >
            <Close
              color="var(--primary)"
              className="size-[20px] md:size-auto"
            />
          </Button>
        )}
        <header>
          <Title className="md:w-[250px] md:h-auto" />
        </header>
        <main className="w-full">{children}</main>
        <footer className="w-full md:w-fit">{footer}</footer>
      </div>
    </div>
  );
};
