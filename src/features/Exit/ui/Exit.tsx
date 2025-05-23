import { useUnit } from "effector-react";
import { useState } from "react";

import { logoutEvent } from "@/shared/auth";
import { Exit as ExitIcon } from "@/shared/icons/Exit";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

import { ConfirmDialog } from "./ConfirmDialog";

interface Exit {
  withConfirm?: boolean;
  containerClassName?: string;
  iconClassName?: string;
}

export const Exit = ({
  containerClassName,
  iconClassName,
  withConfirm,
}: Exit) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const logout = useUnit(logoutEvent);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => {
          if (withConfirm) {
            setConfirmOpen(true);
          } else {
            logout();
          }
        }}
        className={cn("p-0", containerClassName)}
      >
        <ExitIcon className={cn("text-primary size-[20px]", iconClassName)} />
      </Button>
      <ConfirmDialog
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={() => {
          logout();
        }}
      />
    </>
  );
};
