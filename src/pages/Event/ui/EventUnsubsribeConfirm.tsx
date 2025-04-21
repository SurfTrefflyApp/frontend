import { DialogTitle } from "@radix-ui/react-dialog";
import { useUnit } from "effector-react";
import { useState } from "react";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/shared/ui/dialog";

import { unsubscribeEvent, unsubscribeFx } from "../model/store";

export const EventUnsubscribeConfirm = ({ eventId }: { eventId: number }) => {
  const [open, setOpen] = useState(false);
  const unsubscribe = useUnit(unsubscribeEvent);
  const unsubscribing = useUnit(unsubscribeFx.pending);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button loading={unsubscribing}>Покинуть мероприятие</Button>
      </DialogTrigger>
      <DialogContent className="[&>button:last-child]:hidden">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">
            Ты уверен, что хочешь покинуть это событие?
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
            onClick={() => {
              unsubscribe(eventId);
              setOpen(false);
            }}
          >
            Да
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
