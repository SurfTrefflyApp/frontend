import type { Address } from "@/entities/Address";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import { Button } from "@/shared/ui/button";

import { $address, setAddressEvent } from "../model";
import { SelectPage } from "./SelectPage";

interface AddressPicker {
  setAddress: (address: Address) => void;
  error?: boolean;
  defaultAddress?: Address;
}
export const AddressPicker = ({
  setAddress,
  defaultAddress,
}: AddressPicker) => {
  const [selectPageOpen, setSelectPageOpen] = useState(false);
  const address = useUnit($address);
  const setLocalAddress = useUnit(setAddressEvent);

  useEffect(() => {
    if (address) {
      setAddress(address);
    }
  }, [address, setAddress]);

  useEffect(() => {
    if (defaultAddress) {
      setLocalAddress(defaultAddress);
    }
  }, [setLocalAddress, defaultAddress]);

  return (
    <>
      <SelectPage
        open={selectPageOpen}
        setOpen={setSelectPageOpen}
        setAddress={setAddress}
      />
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
