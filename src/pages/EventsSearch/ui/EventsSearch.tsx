import { useLocalStorage } from "@/shared/lib/useLocalStorage";

import { EventsSearchHeader } from "./EventsSearchHeader";
import { EventsSearchList } from "./EventsSearchList";
import { EventsSearchMap } from "./EventsSearchMap";
import { EventsSearchViewSwitch } from "./EventsSearchViewSwitch";

export const EventsSearch = () => {
  const [listView, setListView] = useLocalStorage("listView", true);

  return (
    <main className="lg:max-w-2/4 lg:mx-auto flex flex-col h-full relative">
      <EventsSearchHeader />
      {listView ? <EventsSearchList /> : <EventsSearchMap />}
      <EventsSearchViewSwitch listView={listView} setListView={setListView} />
    </main>
  );
};
