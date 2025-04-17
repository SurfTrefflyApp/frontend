import type { PropsWithChildren, ReactNode } from "react";
import { useNavigate } from "react-router";

import { Back } from "@/shared/icons/Back";
import { Close } from "@/shared/icons/Close";
import { Title } from "@/shared/icons/Title";
import { cn } from "@/shared/lib/utils";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

interface AuthLayout extends PropsWithChildren {
  withBackBtn?: boolean;
  footer?: ReactNode;
}

export const AuthLayout = ({
  withBackBtn = true,
  footer,
  children,
}: AuthLayout) => {
  const navigate = useNavigate();

  return (
    <div className="h-svh w-screen flex items-center justify-center">
      <div
        className={cn(
          "relative h-full w-full max-w-3xl flex flex-col gap-5 justify-between items-center p-5 pt-[20%]",
          "md:pt-5 md:max-h-[600px] md:background-red-100 md:bg-white md:rounded-xl md:shadow-md",
        )}
      >
        {withBackBtn && (
          <Button
            className="absolute left-5 top-5"
            onClick={() => {
              navigate(-1);
            }}
            variant="ghost"
          >
            <Back className="size-[20px]" />
          </Button>
        )}
        <Button
          className="absolute right-5 top-5"
          variant="ghost"
          onClick={() => {
            navigate(routes.main, { replace: true });
          }}
        >
          <Close color="var(--primary)" className="size-[20px]" />
        </Button>
        <header>
          <Title />
        </header>
        <main className="w-full">{children}</main>
        <footer className="w-full md:w-fit">{footer}</footer>
      </div>
    </div>
  );
};
