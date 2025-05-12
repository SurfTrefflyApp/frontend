import { useStatusBarColor } from "@/shared/dom/useStatusBarColor";
import { useLocalStorage } from "@/shared/lib/useLocalStorage";

import { EventsSearchHeader } from "./EventsSearchHeader";
import { EventsSearchList } from "./EventsSearchList";
import { EventsSearchMap } from "./EventsSearchMap";
import { EventsSearchViewSwitch } from "./EventsSearchViewSwitch";

export const EventsSearch = () => {
  const [listView, setListView] = useLocalStorage("listView", false);

  useStatusBarColor("--surface-container");

  return (
    <main className="lg:mx-auto h-full">
      <EventsSearchHeader />
      {listView ? (
        <EventsSearchList />
      ) : (
        <div className="h-full flex flex-col">
          <EventsSearchMap />
        </div>
      )}
      <div className="relative">
        <EventsSearchViewSwitch listView={listView} setListView={setListView} />
      </div>
    </main>
  );
};
