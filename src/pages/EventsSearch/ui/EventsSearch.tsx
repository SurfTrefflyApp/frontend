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
    <>
      <EventsSearchHeader />
      <main className="h-full flex-1 relative flex flex-col">
        {listView ? (
          <EventsSearchList />
        ) : (
          <div className="flex-1 relative -mb-12">
            <EventsSearchMap />
          </div>
        )}
        <EventsSearchViewSwitch listView={listView} setListView={setListView} />
      </main>
    </>
  );
};
