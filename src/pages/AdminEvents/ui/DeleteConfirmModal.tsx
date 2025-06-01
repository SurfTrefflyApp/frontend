import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

interface DeleteConfirmModal {
  open: boolean;
  setOpen: (state: boolean) => void;
  handleDelete: () => void;
}

export const DeleteConfirmModal = ({
  open,
  setOpen,
  handleDelete,
}: DeleteConfirmModal) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="[&>button:last-child]:hidden">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">
            Ты уверен, что хочешь удалить мероприятие?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-between px-10">
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Нет
          </Button>
          <Button
            variant="ghost"
            className="text-primary"
            onClick={handleDelete}
          >
            Да
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
