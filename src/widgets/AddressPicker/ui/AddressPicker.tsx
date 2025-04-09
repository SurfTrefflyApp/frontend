import { Address } from "@/entities/Address";
import { useState } from "react";

import { Button } from "@/shared/ui/button";

import { SelectPage } from "./SelectPage";

interface AddressPicker {
  address?: Address;
  error?: boolean;
}
export const AddressPicker = ({ address }: AddressPicker) => {
  const [selectPageOpen, setSelectPageOpen] = useState(true);

  return (
    <>
      <SelectPage open={selectPageOpen} setOpen={setSelectPageOpen} />
      <div className="bg-surface-container rounded-xl p-4 px-6 flex justify-between items-center overflow-hidden gap-2">
        <p className="text-black/50 text-sm leading-none truncate">
          {address?.address ? address.address : "Введите место проведения"}
        </p>
        <Button
          type="button"
          size="sm"
          onClick={() => {
            setSelectPageOpen(true);
          }}
        >
          Выбрать
        </Button>
      </div>
    </>
  );
};
