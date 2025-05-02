import { useLocalStorage } from "@/shared/lib/useLocalStorage";
import { useStatusBarColor } from "@/shared/styles/useStatusBarColor";

import { EventsSearchHeader } from "./EventsSearchHeader";
import { EventsSearchList } from "./EventsSearchList";
import { EventsSearchMap } from "./EventsSearchMap";
import { EventsSearchViewSwitch } from "./EventsSearchViewSwitch";

export const EventsSearch = () => {
  const [listView, setListView] = useLocalStorage("listView", false);

  useStatusBarColor("--surface-container");

  return (
    <main className="lg:mx-auto flex flex-col h-full relative overflow-auto no-scrollbar">
      <EventsSearchHeader />
      {listView ? <EventsSearchList /> : <EventsSearchMap />}
      <EventsSearchViewSwitch listView={listView} setListView={setListView} />
    </main>
  );
};
