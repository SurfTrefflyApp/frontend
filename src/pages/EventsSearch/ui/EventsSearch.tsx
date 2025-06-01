import { YMaps } from "@pbe/react-yandex-maps";
import { useUnit } from "effector-react";

import { useStatusBarColor } from "@/shared/dom/useStatusBarColor";

import { $isListView } from "../model/view";
import { EventsSearchHeader } from "./EventsSearchHeader";
import { EventsSearchList } from "./EventsSearchList";
import { EventsSearchMap } from "./EventsSearchMap";

export const EventsSearch = () => {
  const listView = useUnit($isListView);

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
      </main>
    </>
  );
};
