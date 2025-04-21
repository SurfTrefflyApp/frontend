import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

import { useEventDeleteController } from "../controller/useEventDeleteController";

export const EventDelete = ({ eventId }: { eventId: number }) => {
  const { dialogOpen, setDialogOpen, handleDelete, deleting } =
    useEventDeleteController(eventId);

  return (
    <>
      <Button
        type="button"
        variant="destructive"
        className="flex-1"
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        Удалить
      </Button>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="[&>button:last-child]:hidden max-w-[320px]!">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-center">
              Вы уверены, что хотите удалить это мероприятие?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex-row! justify-center! gap-4">
            <Button
              className="p-2 md:text-base"
              onClick={() => {
                setDialogOpen(false);
              }}
            >
              Нет
            </Button>
            <Button
              variant="outline"
              className="p-2 md:text-base"
              loading={deleting}
              onClick={handleDelete}
            >
              Да
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
