import { PropsWithChildren, ReactElement } from "react";
import { useNavigate } from "react-router";

import { Back } from "@/shared/icons/Back";
import { Title } from "@/shared/icons/Title";
import { Button } from "@/shared/ui/button";

interface AuthLayout extends PropsWithChildren {
  withBackBtn?: boolean;
  footer?: ReactElement;
}

export const AuthLayout = ({
  withBackBtn = true,
  footer,
  children,
}: AuthLayout) => {
  const navigate = useNavigate();

  return (
    <div className="h-svh w-screen flex items-center justify-center">
      <div className="h-full max-w-3xl flex flex-col justify-between items-center p-5 pt-20 relative">
        {withBackBtn && (
          <Button
            className="absolute left-5 top-5"
            onClick={() => {
              navigate(-1);
            }}
            variant="ghost"
          >
            <Back />
          </Button>
        )}
        <header>
          <Title />
        </header>
        <main className="w-full">{children}</main>
        <footer className="w-full md:w-fit">{footer}</footer>
      </div>
    </div>
  );
};
