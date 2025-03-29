import { PropsWithChildren } from "react";

import { Toaster } from "@/shared/ui/sonner";

export const MessagesProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster
        position="top-center"
        richColors
        swipeDirections={["top"]}
        visibleToasts={1}
        toastOptions={{ className: "toast" }}
      />
      {children}
    </>
  );
};
