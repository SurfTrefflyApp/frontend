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
      <Button
        type="button"
        onClick={() => {
          setSelectPageOpen(true);
        }}
        className="whitespace-normal h-fit py-3"
      >
        {address?.address ? address.address : "Выбрать"}
      </Button>
    </>
  );
};
