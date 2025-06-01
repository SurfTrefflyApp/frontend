import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/shared/ui/dialog";

interface EventsUserCoordsInfo {
  open: boolean;
  setOpen: (newState: boolean) => void;
}

export const EventsUserCoordsInfo = ({
  open,
  setOpen,
}: EventsUserCoordsInfo) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="[&>button:last-child]:hidden">
        <p className="text-center">
          Мы не смогли получить твое местоположение.
          <br />
          Возможно, ты не дал разрешение или твой браузер не поддерживает эту
          функцию.
        </p>
        <DialogFooter className="flex flex-row justify-between px-10">
          <Button
            onClick={() => {
              setOpen(false);
            }}
            className="mx-auto"
            type="button"
          >
            Ок
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
