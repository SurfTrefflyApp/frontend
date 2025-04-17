import type { PropsWithChildren, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/shared/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/shared/ui/drawer";

interface AdaptivePopover extends PropsWithChildren {
  open: boolean;
  setOpen: (open: boolean) => void;
  contentClassname?: string;
  minWidthAdapt?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

export const AdaptivePopover = ({
  open = false,
  setOpen,
  minWidthAdapt = "768px",
  contentClassname,
  header,
  footer,
  children,
}: AdaptivePopover) => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${minWidthAdapt})` });

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={contentClassname}>
          <DialogHeader>{header}</DialogHeader>
          {children}
          <DialogFooter>{footer}</DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className={contentClassname}>
          <DrawerHeader className="text-left">{header}</DrawerHeader>
          {children}
          <DrawerFooter className="pt-2">{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
