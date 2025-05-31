import { useUnit } from "effector-react";

import { Button } from "@/shared/ui/button";

import { $isListView, viewToggled } from "../model/view";

export const EventsSearchViewSwitch = () => {
  const [listView, toggleView] = useUnit([$isListView, viewToggled]);
  return (
    <Button
      onClick={toggleView}
      className="fixed left-8 md:left-30 bottom-30 md:bottom-14 w-fit z-50"
      variant="secondary"
    >
      {listView ? "Карта" : "Список"}
    </Button>
  );
};
