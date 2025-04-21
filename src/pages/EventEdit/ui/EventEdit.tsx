import { ContentHeader } from "@/widgets/ContentHeader";
import { EventForm } from "@/widgets/EventForm";

import { NotFound } from "@/shared/ui/NotFound";
import { Button } from "@/shared/ui/button";

import { useEventEditController } from "../controller/useEventEditController";
import { mapAddress } from "../mapper/event";
import { EventDelete } from "./EventDelete";
import { EventEditSkeleton } from "./EventEditSkeleton";

export const EventEdit = () => {
  const { form, onSubmit, event, loading } = useEventEditController();

  if (loading) return <EventEditSkeleton />;

  if (!event) return <NotFound />;

  return (
    <main className="lg:w-2/4 md:mx-auto overflow-y-auto no-scrollbar">
      <ContentHeader className="py-2" title="Редактирование мероприятия" />
      <EventForm
        form={form}
        onSubmit={onSubmit}
        defaultAddress={mapAddress(event)}
        formFooter={
          <div className="flex gap-6">
            <EventDelete eventId={event.id} />
            <Button
              loading={form.formState.isSubmitting}
              disabled={!form.formState.isValid}
              className="flex-1"
            >
              Сохранить
            </Button>
          </div>
        }
      />
    </main>
  );
};
