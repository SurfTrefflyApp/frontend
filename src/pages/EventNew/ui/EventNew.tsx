import { ContentHeader } from "@/widgets/ContentHeader";

import { DateTimePicker } from "@/shared/ui/DateTimePicker";
import { InfoIconWithTooltip } from "@/shared/ui/InfoIconWithTooltip";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Textarea } from "@/shared/ui/textarea";

import { useEventNewController } from "../controller/useEventNewController";
import { EventNewAddress } from "./EventNewAddress";
import { EventNewTags } from "./EventNewTags";

export const EventNew = () => {
  const { formState, form, onSubmit } = useEventNewController();

  return (
    <main className="md:w-1/3 md:mx-auto">
      <ContentHeader title="Новое мероприятие" />
      <Form {...form} formState={formState}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input
                    id="title"
                    placeholder="Введите название мероприятия"
                    variant="secondary"
                    error={!!formState.errors.title}
                    {...field}
                  />
                </FormControl>
                {formState.errors.title && (
                  <FormMessage>{formState.errors.title.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата и время</FormLabel>
                <FormControl>
                  <DateTimePicker
                    {...field}
                    onError={(error) => {
                      if (error) {
                        form.setError("dateTime", { message: error });
                      } else {
                        form.clearErrors("dateTime");
                      }
                    }}
                    error={!!formState.errors.dateTime}
                  />
                </FormControl>
                {formState.errors.dateTime && (
                  <FormMessage>{formState.errors.dateTime.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="participantsCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Количество участников</FormLabel>
                <FormControl>
                  <Input
                    id="participantsCount"
                    type="number"
                    placeholder="Введите количество участников"
                    variant="secondary"
                    error={!!formState.errors.participantsCount}
                    {...field}
                    onChange={(value) =>
                      field.onChange(value.target.valueAsNumber)
                    }
                  />
                </FormControl>
                {formState.errors.participantsCount && (
                  <FormMessage>
                    {formState.errors.participantsCount.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Textarea
                    id="description"
                    placeholder="Напишите описание для мероприятия"
                    rows={20}
                    variant="secondary"
                    error={!!formState.errors.description}
                    {...field}
                  />
                </FormControl>
                {formState.errors.description && (
                  <FormMessage>
                    {formState.errors.description.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <EventNewAddress form={{ ...form, formState }} />
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <FormLabel>Тип мероприятия</FormLabel>
                      <InfoIconWithTooltip
                        content={
                          <p className="text-sm text-center">
                            Приватные мероприятия не отображаются при поиске.
                            <br />
                            Участников можно пригласить по специальной ссылке
                          </p>
                        }
                      />
                    </div>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="public"
                          checked={field.value === "public"}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Открытое</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="private"
                          checked={field.value === "private"}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Приватное</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                {formState.errors.eventType && (
                  <FormMessage>
                    {formState.errors.eventType.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <EventNewTags form={{ formState, ...form }} />
          <Button>Создать мероприятие</Button>
        </form>
      </Form>
    </main>
  );
};
