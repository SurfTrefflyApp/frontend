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
      className="sticky left-8 md:left-30 bottom-28 w-fit"
      variant="secondary"
    >
      {listView ? "Карта" : "Список"}
    </Button>
  );
};
