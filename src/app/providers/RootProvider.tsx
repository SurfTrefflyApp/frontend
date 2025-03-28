import { MessagesProvider } from "@/app/providers/MessagesProvider";
import { PropsWithChildren } from "react";

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MessagesProvider />
      {children}
    </>
  );
};
