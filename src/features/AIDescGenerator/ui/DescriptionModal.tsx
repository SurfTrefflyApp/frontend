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
          Вы можете сформировать описание с помощью искуственного интеллекта.
          <br />
          Заполните название события и, если хотите, его описание, а нейросеть
          предложит свой вариант.
          <br />
          Генерация по описанию происходит только если уже введенное описание
          превышает 100 символов.
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
