import { AddressPicker } from "@/widgets/AddressPicker";
import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

import { EventSchema } from "../model/formSchema";

export const EventNewAddress = ({
  form,
}: {
  form: UseFormReturn<EventSchema>;
}) => {
  return (
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Место проведения</FormLabel>
          <FormControl>
            <AddressPicker setAddress={field.onChange} />
          </FormControl>
          {form.formState.errors.location && (
            <FormMessage>{form.formState.errors.location.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};
