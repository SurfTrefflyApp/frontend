import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/shared/ui/dialog";

interface DescriptionModal {
  open: boolean;
  setOpen: (newState: boolean) => void;
}

export const DescriptionModal = ({ open, setOpen }: DescriptionModal) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="[&>button:last-child]:hidden">
        <p className="text-center">
          Ты можешь сформировать описание с помощью искусственного интеллекта.
          <br />
          Заполни название мероприятия, а нейросеть предложит свой вариант
          описания.
          <br />
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
