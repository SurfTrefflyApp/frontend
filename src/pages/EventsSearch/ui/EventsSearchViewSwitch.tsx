import { Button } from "@/shared/ui/button";

interface EventsSearchViewSwitch {
  listView: boolean;
  setListView: (state: boolean) => void;
}

export const EventsSearchViewSwitch = ({
  listView,
  setListView,
}: EventsSearchViewSwitch) => {
  return (
    <Button
      onClick={() => {
        setListView(!listView);
      }}
      className="fixed left-8 md:left-30 bottom-30 md:bottom-14 w-fit"
      variant="secondary"
    >
      {listView ? "Карта" : "Список"}
    </Button>
  );
};
