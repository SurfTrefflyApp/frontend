import { PropsWithChildren } from "react";

import { Toaster } from "@/shared/ui/sonner";

export const MessagesProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};
