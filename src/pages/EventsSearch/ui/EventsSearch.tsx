import { useState } from "react";

import { EventsSearchHeader } from "./EventsSearchHeader";
import { EventsSearchList } from "./EventsSearchList";
import { EventsSearchMap } from "./EventsSearchMap";
import { EventsSearchViewSwitch } from "./EventsSearchViewSwitch";

export const EventsSearch = () => {
  const [listView, setListView] = useState(true);

  return (
    <main className="lg:max-w-2/4 lg:mx-auto relative">
      <EventsSearchHeader />
      {listView ? <EventsSearchList /> : <EventsSearchMap />}
      <EventsSearchViewSwitch listView={listView} setListView={setListView} />
    </main>
  );
};
