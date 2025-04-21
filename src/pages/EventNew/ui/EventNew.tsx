import { ContentHeader } from "@/widgets/ContentHeader";
import { EventForm } from "@/widgets/EventForm";

import { Button } from "@/shared/ui/button";

import { useEventNewController } from "../controller/useEventNewController";

export const EventNew = () => {
  const { form, onSubmit } = useEventNewController();

  return (
    <main className="lg:w-2/4 md:mx-auto overflow-y-auto no-scrollbar">
      <ContentHeader className="py-2" title="Новое мероприятие" />
      <EventForm
        form={form}
        onSubmit={onSubmit}
        formFooter={
          <Button
            loading={form.formState.isSubmitting}
            disabled={!form.formState.isValid}
          >
            Создать мероприятие
          </Button>
        }
      />
    </main>
  );
};
