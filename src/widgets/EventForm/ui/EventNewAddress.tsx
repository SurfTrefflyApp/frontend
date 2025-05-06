import type { Address } from "@/entities/Address";
import { AddressPicker } from "@/widgets/AddressPicker";
import type { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

import type { EventSchema } from "../model/formSchema";

interface EventNewAddress {
  form: UseFormReturn<EventSchema>;
  defaultAddress?: Address;
}

export const EventNewAddress = ({ form, defaultAddress }: EventNewAddress) => {
  console.debug(form.getValues("location"));
  return (
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Место проведения</FormLabel>
          <FormControl>
            <AddressPicker
              setAddress={field.onChange}
              defaultAddress={defaultAddress}
            />
          </FormControl>
          {form.formState.errors.location && (
            <FormMessage>{form.formState.errors.location.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};
