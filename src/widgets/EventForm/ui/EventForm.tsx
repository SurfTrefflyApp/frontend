import type { Address } from "@/entities/Address";
import { AIDescGenerator } from "@/features/AIDescGenerator";
import { EventNewAddress } from "@/widgets/EventForm/ui/EventNewAddress";
import { EventNewTags } from "@/widgets/EventForm/ui/EventNewTags";
import { type ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";

import { Star } from "@/shared/icons/Star";
import { Upload } from "@/shared/icons/Upload";
import { DateTimePicker } from "@/shared/ui/DateTimePicker";
import { FileUploadButton } from "@/shared/ui/FileUploadButton";
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
import { Textarea } from "@/shared/ui/textarea";

import { useAIGeneratorController } from "../controller/useAIGeneratorController";
import { useEventFormController } from "../controller/useEventFormController";
import type { EventSchema } from "../model/formSchema";

interface EventForm {
  form: UseFormReturn<EventSchema>;
  onSubmit: (values: EventSchema) => Promise<void>;
  formFooter: ReactNode;
  defaultAddress?: Address;
  defaultPreviewURL?: string;
}

export const EventForm = ({
  form,
  onSubmit,
  formFooter,
  defaultAddress,
  defaultPreviewURL,
}: EventForm) => {
  const formState = form.formState;
  const { previewUrl, handleFileChange } = useEventFormController({
    form,
    defaultPreviewURL,
  });
  const { isGeneratorOpen, setIsGeneratorOpen } = useAIGeneratorController();

  return (
    <Form {...form} formState={formState}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-6 lg:max-w-2/4 w-full mx-auto"
      >
        <FileUploadButton
          variant="ghost"
          className="mb-2 p-0 flex-1 aspect-video w-full overflow-hidden flex relative"
          handleChange={handleFileChange}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              className="rounded-2xl h-full w-full absolute"
            />
          ) : (
            <div className="w-full h-full rounded-2xl border-[#7B827A] border-2 border-dashed absolute">
              <div className="flex gap-2 items-center text-[#7B827A] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <span className="font-semibold text-lg">Загрузить обложку</span>
                <Upload />
              </div>
            </div>
          )}
        </FileUploadButton>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input
                  id="title"
                  placeholder="Введи название мероприятия"
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
                  pattern="\d*"
                  placeholder="Введи количество участников"
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
              <div className="flex justify-between items-center">
                <FormLabel>Описание</FormLabel>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-sm"
                  onClick={() => {
                    setIsGeneratorOpen(true);
                  }}
                >
                  Помощь от ИИ <Star />
                </Button>
              </div>
              <AIDescGenerator
                open={isGeneratorOpen}
                setOpen={setIsGeneratorOpen}
                eventTitle={form.getValues("title")}
              />
              <FormControl>
                <Textarea
                  id="description"
                  placeholder="Напиши описание для мероприятия"
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
        <EventNewAddress
          form={{ ...form, formState }}
          defaultAddress={defaultAddress}
        />
        <FormField
          control={form.control}
          name="eventType"
          render={({ field }) => (
            <FormItem>
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
              <FormControl>
                <div className="flex justify-between gap-3">
                  <Button
                    className="flex-1"
                    type="button"
                    variant={field.value === "public" ? "default" : "outline"}
                    onClick={() => {
                      form.setValue("eventType", "public");
                    }}
                  >
                    Открытое
                  </Button>
                  <Button
                    className="flex-1"
                    type="button"
                    variant={field.value === "private" ? "default" : "outline"}
                    onClick={() => {
                      form.setValue("eventType", "private");
                    }}
                  >
                    Приватное
                  </Button>
                </div>
              </FormControl>
              {formState.errors.eventType && (
                <FormMessage>{formState.errors.eventType.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <EventNewTags form={form} />
        {formFooter}
      </form>
    </Form>
  );
};
