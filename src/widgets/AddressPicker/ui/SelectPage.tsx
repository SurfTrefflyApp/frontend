import { Address } from "@/entities/Address";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/shared/ui/dialog";

interface SelectPage {
  open: boolean;
  setOpen: (state: boolean) => void;
  address?: Address;
}

export const SelectPage = ({ open, setOpen, address }: SelectPage) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={cn(
          "[&>button]:hidden w-full max-w-full h-full max-h-full",
          "rounded-none flex flex-col p-0",
          "md:max-h-fit md:rounded-2xl",
        )}
      >
        <DialogHeader className="flex flex-row justify-between gap-2 items-center bg-surface-container p-3 pr-8 rounded-b-3xl shadow-md">
          <Button
            variant="ghost"
            onClick={() => {
              setOpen(false);
            }}
            className="p-0"
          >
            <ChevronLeft className="text-secondary size-[30px]" />
          </Button>
          <h1 className="text-xl font-semibold">Место проведения</h1>
        </DialogHeader>
        <div className="px-4">
          <div>
            <p className="font-semibold mb-2 text-sm">Выбранный адресс:</p>
            <p className="font-semibold text-sm">
              {address?.address ? address.address : "Место не выбрано"}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
