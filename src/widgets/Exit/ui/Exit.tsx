import { useUnit } from "effector-react";

import { logoutEvent } from "@/shared/auth";
import { Exit as ExitIcon } from "@/shared/icons/Exit";
import { Button } from "@/shared/ui/button";

export const Exit = () => {
  const logout = useUnit(logoutEvent);

  return (
    <Button variant="ghost" onClick={logout} className="p-0">
      <ExitIcon className="text-primary size-[20px]" />
    </Button>
  );
};
