import { Address } from "@/entities/Address";
import { useUnit } from "effector-react";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/shared/ui/dialog";

import { $address } from "../model";
import { MapWithSearch } from "./MapWithSearch";

interface SelectPage {
  open: boolean;
  setOpen: (state: boolean) => void;
  setAddress: (address: Address) => void;
}

export const SelectPage = ({ open, setOpen, setAddress }: SelectPage) => {
  const address = useUnit($address);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={cn(
          "[&>button:last-child]:hidden w-full min-w-full h-full max-h-full",
          "rounded-none flex flex-col p-0 pb-4",
          "md:min-w-1/2",
        )}
      >
        <DialogHeader className="flex flex-row justify-between gap-2 items-center bg-surface-container p-2 pr-8 rounded-b-3xl shadow-md">
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
        <div className="px-4 md:flex md:gap-4">
          <p className="font-semibold mb-2 text-sm">Выбранный адресс:</p>
          <p className="font-semibold text-sm">
            {address?.address ? address.address : "Место не выбрано"}
          </p>
        </div>
        <MapWithSearch />
        <Button
          className="mx-4"
          onClick={() => {
            setAddress(address);
            setOpen(false);
          }}
        >
          Использовать
        </Button>
      </DialogContent>
    </Dialog>
  );
};
