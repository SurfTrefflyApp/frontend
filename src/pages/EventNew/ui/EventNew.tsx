import { ContentHeader } from "@/widgets/ContentHeader";
import { EventForm } from "@/widgets/EventForm";

import { Button } from "@/shared/ui/button";

import { useEventNewController } from "../controller/useEventNewController";

export const EventNew = () => {
  const { form, onSubmit } = useEventNewController();

  return (
    <>
      <ContentHeader className="py-2" title="Новое мероприятие" />
      <main>
        <EventForm
          form={form}
          onSubmit={onSubmit}
          formFooter={
            <Button loading={form.formState.isSubmitting} disabled>
              Создать мероприятие
            </Button>
          }
        />
      </main>
    </>
  );
};
