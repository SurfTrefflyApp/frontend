import { YMaps } from "@pbe/react-yandex-maps";

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
      <main className="h-full flex-1 flex flex-col">
        {listView ? (
          <EventsSearchList />
        ) : (
          <div className="flex-1 -mb-12">
            <YMaps
              query={{
                lang: "ru_RU",
                apikey: "445cc2ce-c14b-48d6-b8be-5cfe7ece3c2a",
              }}
            >
              <EventsSearchMap />
            </YMaps>
          </div>
        )}
        <EventsSearchViewSwitch listView={listView} setListView={setListView} />
      </main>
    </>
  );
};
