import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

interface ConfirmDialog {
  open: boolean;
  setOpen: (state: boolean) => void;
  onConfirm: () => void;
}

export const ConfirmDialog = ({ open, setOpen, onConfirm }: ConfirmDialog) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="[&>button:last-child]:hidden">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">
            Ты уверен, что хочешь выйти из аккаунта?
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
          <Button variant="ghost" className="text-primary" onClick={onConfirm}>
            Да
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
